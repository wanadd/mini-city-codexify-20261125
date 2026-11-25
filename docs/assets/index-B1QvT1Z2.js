(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var cd={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function KM(){if(cv)return fl;cv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:r,key:h,ref:u!==void 0?u:null,props:f}}return fl.Fragment=e,fl.jsx=i,fl.jsxs=i,fl}var fv;function QM(){return fv||(fv=1,cd.exports=KM()),cd.exports}var st=QM(),fd={exports:{}},hl={},hd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function JM(){return hv||(hv=1,(function(o){function e(Y,at){var Z=Y.length;Y.push(at);t:for(;0<Z;){var xt=Z-1>>>1,yt=Y[xt];if(0<u(yt,at))Y[xt]=at,Y[Z]=yt,Z=xt;else break t}}function i(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var at=Y[0],Z=Y.pop();if(Z!==at){Y[0]=Z;t:for(var xt=0,yt=Y.length,vt=yt>>>1;xt<vt;){var Xt=2*(xt+1)-1,Ht=Y[Xt],C=Xt+1,L=Y[C];if(0>u(Ht,Z))C<yt&&0>u(L,Ht)?(Y[xt]=L,Y[C]=Z,xt=C):(Y[xt]=Ht,Y[Xt]=Z,xt=Xt);else if(C<yt&&0>u(L,Z))Y[xt]=L,Y[C]=Z,xt=C;else break t}}return at}function u(Y,at){var Z=Y.sortIndex-at.sortIndex;return Z!==0?Z:Y.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],p=[],v=1,m=null,x=3,M=!1,A=!1,w=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(Y){for(var at=i(p);at!==null;){if(at.callback===null)r(p);else if(at.startTime<=Y)r(p),at.sortIndex=at.expirationTime,e(_,at);else break;at=i(p)}}function G(Y){if(w=!1,U(Y),!A)if(i(_)!==null)A=!0,X||(X=!0,rt());else{var at=i(p);at!==null&&ht(G,at.startTime-Y)}}var X=!1,z=-1,V=5,D=-1;function b(){return S?!0:!(o.unstable_now()-D<V)}function I(){if(S=!1,X){var Y=o.unstable_now();D=Y;var at=!0;try{t:{A=!1,w&&(w=!1,F(z),z=-1),M=!0;var Z=x;try{e:{for(U(Y),m=i(_);m!==null&&!(m.expirationTime>Y&&b());){var xt=m.callback;if(typeof xt=="function"){m.callback=null,x=m.priorityLevel;var yt=xt(m.expirationTime<=Y);if(Y=o.unstable_now(),typeof yt=="function"){m.callback=yt,U(Y),at=!0;break e}m===i(_)&&r(_),U(Y)}else r(_);m=i(_)}if(m!==null)at=!0;else{var vt=i(p);vt!==null&&ht(G,vt.startTime-Y),at=!1}}break t}finally{m=null,x=Z,M=!1}at=void 0}}finally{at?rt():X=!1}}}var rt;if(typeof P=="function")rt=function(){P(I)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ft=lt.port2;lt.port1.onmessage=I,rt=function(){ft.postMessage(null)}}else rt=function(){y(I,0)};function ht(Y,at){z=y(function(){Y(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var at=3;break;default:at=x}var Z=x;x=at;try{return Y()}finally{x=Z}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(Y,at){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var Z=x;x=Y;try{return at()}finally{x=Z}},o.unstable_scheduleCallback=function(Y,at,Z){var xt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,Y){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Z+yt,Y={id:v++,callback:at,priorityLevel:Y,startTime:Z,expirationTime:yt,sortIndex:-1},Z>xt?(Y.sortIndex=Z,e(p,Y),i(_)===null&&Y===i(p)&&(w?(F(z),z=-1):w=!0,ht(G,Z-xt))):(Y.sortIndex=yt,e(_,Y),A||M||(A=!0,X||(X=!0,rt()))),Y},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(Y){var at=x;return function(){var Z=x;x=at;try{return Y.apply(this,arguments)}finally{x=Z}}}})(dd)),dd}var dv;function $M(){return dv||(dv=1,hd.exports=JM()),hd.exports}var pd={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function tE(){if(pv)return oe;pv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function A(C){return C===null||typeof C!="object"?null:(C=M&&C[M]||C["@@iterator"],typeof C=="function"?C:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,y={};function F(C,L,$){this.props=C,this.context=L,this.refs=y,this.updater=$||w}F.prototype.isReactComponent={},F.prototype.setState=function(C,L){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,L,"setState")},F.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function P(){}P.prototype=F.prototype;function U(C,L,$){this.props=C,this.context=L,this.refs=y,this.updater=$||w}var G=U.prototype=new P;G.constructor=U,S(G,F.prototype),G.isPureReactComponent=!0;var X=Array.isArray;function z(){}var V={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function b(C,L,$){var ct=$.ref;return{$$typeof:o,type:C,key:L,ref:ct!==void 0?ct:null,props:$}}function I(C,L){return b(C.type,L,C.props)}function rt(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function lt(C){var L={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function($){return L[$]})}var ft=/\/+/g;function ht(C,L){return typeof C=="object"&&C!==null&&C.key!=null?lt(""+C.key):L.toString(36)}function Y(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(z,z):(C.status="pending",C.then(function(L){C.status==="pending"&&(C.status="fulfilled",C.value=L)},function(L){C.status==="pending"&&(C.status="rejected",C.reason=L)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function at(C,L,$,ct,At){var Ct=typeof C;(Ct==="undefined"||Ct==="boolean")&&(C=null);var Ot=!1;if(C===null)Ot=!0;else switch(Ct){case"bigint":case"string":case"number":Ot=!0;break;case"object":switch(C.$$typeof){case o:case e:Ot=!0;break;case v:return Ot=C._init,at(Ot(C._payload),L,$,ct,At)}}if(Ot)return At=At(C),Ot=ct===""?"."+ht(C,0):ct,X(At)?($="",Ot!=null&&($=Ot.replace(ft,"$&/")+"/"),at(At,L,$,"",function(B){return B})):At!=null&&(rt(At)&&(At=I(At,$+(At.key==null||C&&C.key===At.key?"":(""+At.key).replace(ft,"$&/")+"/")+Ot)),L.push(At)),1;Ot=0;var Ut=ct===""?".":ct+":";if(X(C))for(var Nt=0;Nt<C.length;Nt++)ct=C[Nt],Ct=Ut+ht(ct,Nt),Ot+=at(ct,L,$,Ct,At);else if(Nt=A(C),typeof Nt=="function")for(C=Nt.call(C),Nt=0;!(ct=C.next()).done;)ct=ct.value,Ct=Ut+ht(ct,Nt++),Ot+=at(ct,L,$,Ct,At);else if(Ct==="object"){if(typeof C.then=="function")return at(Y(C),L,$,ct,At);throw L=String(C),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ot}function Z(C,L,$){if(C==null)return C;var ct=[],At=0;return at(C,ct,"","",function(Ct){return L.call($,Ct,At++)}),ct}function xt(C){if(C._status===-1){var L=C._result,$=L();$.then(function(ct){(C._status===0||C._status===-1)&&(C._status=1,C._result=ct,$.status===void 0&&($.status="fulfilled",$.value=ct))},function(ct){(C._status===0||C._status===-1)&&(C._status=2,C._result=ct,$.status===void 0&&($.status="rejected",$.reason=ct))}),C._status===-1&&(C._status=0,C._result=$)}if(C._status===1)return C._result.default;throw C._result}var yt=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function vt(C){var L=V.T,$={};$.types=L!==null?L.types:null,V.T=$;try{var ct=C(),At=V.S;At!==null&&At($,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(z,yt)}catch(Ct){yt(Ct)}finally{L!==null&&$.types!==null&&(L.types=$.types),V.T=L}}function Xt(C){var L=V.T;if(L!==null){var $=L.types;$===null?L.types=[C]:$.indexOf(C)===-1&&$.push(C)}else vt(Xt.bind(null,C))}var Ht={map:Z,forEach:function(C,L,$){Z(C,function(){L.apply(this,arguments)},$)},count:function(C){var L=0;return Z(C,function(){L++}),L},toArray:function(C){return Z(C,function(L){return L})||[]},only:function(C){if(!rt(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return oe.Activity=m,oe.Children=Ht,oe.Component=F,oe.Fragment=i,oe.Profiler=u,oe.PureComponent=U,oe.StrictMode=r,oe.Suspense=_,oe.ViewTransition=x,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,oe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return V.H.useMemoCache(C)}},oe.addTransitionType=Xt,oe.cache=function(C){return function(){return C.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(C,L,$){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var ct=S({},C.props),At=C.key;if(L!=null)for(Ct in L.key!==void 0&&(At=""+L.key),L)!D.call(L,Ct)||Ct==="key"||Ct==="__self"||Ct==="__source"||Ct==="ref"&&L.ref===void 0||(ct[Ct]=L[Ct]);var Ct=arguments.length-2;if(Ct===1)ct.children=$;else if(1<Ct){for(var Ot=Array(Ct),Ut=0;Ut<Ct;Ut++)Ot[Ut]=arguments[Ut+2];ct.children=Ot}return b(C.type,At,ct)},oe.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},oe.createElement=function(C,L,$){var ct,At={},Ct=null;if(L!=null)for(ct in L.key!==void 0&&(Ct=""+L.key),L)D.call(L,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(At[ct]=L[ct]);var Ot=arguments.length-2;if(Ot===1)At.children=$;else if(1<Ot){for(var Ut=Array(Ot),Nt=0;Nt<Ot;Nt++)Ut[Nt]=arguments[Nt+2];At.children=Ut}if(C&&C.defaultProps)for(ct in Ot=C.defaultProps,Ot)At[ct]===void 0&&(At[ct]=Ot[ct]);return b(C,Ct,At)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(C){return{$$typeof:d,render:C}},oe.isValidElement=rt,oe.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:xt}},oe.memo=function(C,L){return{$$typeof:p,type:C,compare:L===void 0?null:L}},oe.startTransition=vt,oe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},oe.use=function(C){return V.H.use(C)},oe.useActionState=function(C,L,$){return V.H.useActionState(C,L,$)},oe.useCallback=function(C,L){return V.H.useCallback(C,L)},oe.useContext=function(C){return V.H.useContext(C)},oe.useDebugValue=function(){},oe.useDeferredValue=function(C,L){return V.H.useDeferredValue(C,L)},oe.useEffect=function(C,L){return V.H.useEffect(C,L)},oe.useEffectEvent=function(C){return V.H.useEffectEvent(C)},oe.useId=function(){return V.H.useId()},oe.useImperativeHandle=function(C,L,$){return V.H.useImperativeHandle(C,L,$)},oe.useInsertionEffect=function(C,L){return V.H.useInsertionEffect(C,L)},oe.useLayoutEffect=function(C,L){return V.H.useLayoutEffect(C,L)},oe.useMemo=function(C,L){return V.H.useMemo(C,L)},oe.useOptimistic=function(C,L){return V.H.useOptimistic(C,L)},oe.useReducer=function(C,L,$){return V.H.useReducer(C,L,$)},oe.useRef=function(C){return V.H.useRef(C)},oe.useState=function(C){return V.H.useState(C)},oe.useSyncExternalStore=function(C,L,$){return V.H.useSyncExternalStore(C,L,$)},oe.useTransition=function(){return V.H.useTransition()},oe.version="19.3.1",oe}var mv;function Hp(){return mv||(mv=1,pd.exports=tE()),pd.exports}var md={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function eE(){if(gv)return Ln;gv=1;var o=Hp();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:m,implementation:x}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(v){return{$$typeof:f,_reason:v}},Ln.createPortal=function(v,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(v,m,null,x)},Ln.flushSync=function(v){var m=_.T,x=r.p;try{if(_.T=null,r.p=2,v)return v()}finally{_.T=m,r.p=x,r.d.f()}},Ln.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(v,m))},Ln.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Ln.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var x=m.as,M=p(x,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?r.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:A,fetchPriority:w}):x==="script"&&r.d.X(v,{crossOrigin:M,integrity:A,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=p(m.as,m.crossOrigin);r.d.M(v,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(v)},Ln.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,M=p(x,m.crossOrigin);r.d.L(v,x,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(v,m){if(typeof v=="string")if(m){var x=p(m.as,m.crossOrigin);r.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(v)},Ln.requestFormReset=function(v){r.d.r(v)},Ln.unstable_batchedUpdates=function(v,m){return v(m)},Ln.useFormState=function(v,m,x){return _.H.useFormState(v,m,x)},Ln.useFormStatus=function(){return _.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var _v;function nE(){if(_v)return md.exports;_v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),md.exports=eE(),md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function iE(){if(vv)return hl;vv=1;var o=$M(),e=Hp(),i=nE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return _(l),t;if(c===s)return _(l),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=c;else{for(var g=!1,E=l.child;E;){if(E===a){g=!0,a=l,s=c;break}if(E===s){g=!0,s=l,a=c;break}E=E.sibling}if(!g){for(E=c.child;E;){if(E===a){g=!0,a=c,s=l;break}if(E===s){g=!0,s=c,a=l;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,s,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,s,l,c))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function A(t){var n=[null,null],a=x(t);return a===null||w(n,t,a.child,{foundSelf:!1}),n}function w(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(t,n,a.child,s))return!0;a=a.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,F=null;function P(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function U(t,n,a){return t===a?(F=t,!1):t===n?(F!==null&&(y=t),!0):!1}function G(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function X(t,n,a){for(var s=0,l=t;l;l=a(l))s++;l=0;for(var c=n;c;c=a(c))l++;for(;0<s-l;)t=a(t),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,V=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),lt=Symbol.for("react.profiler"),ft=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),Xt=Symbol.for("react.legacy_hidden"),Ht=Symbol.for("react.memo_cache_sentinel"),C=Symbol.for("react.view_transition"),L=Symbol.for("react.recoverable"),$=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var At=Symbol.for("react.client.reference");function Ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===At?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case lt:return"Profiler";case rt:return"StrictMode";case at:return"Suspense";case Z:return"SuspenseList";case vt:return"Activity";case C:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case ht:return t.displayName||"Context";case ft:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:Ct(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Ct(t(n))}catch{}}return null}var Ot=Array.isArray,Ut=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Nt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},Pe=[],$t=-1;function he(t){return{current:t}}function Gt(t){0>$t||(t.current=Pe[$t],Pe[$t]=null,$t--)}function se(t,n){$t++,Pe[$t]=t.current,t.current=n}var Ft=he(null),le=he(null),qe=he(null),Ze=he(null);function N(t,n){switch(se(qe,n),se(le,t),se(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y_(n),t=x_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Gt(Ft),se(Ft,t)}function T(){Gt(Ft),Gt(le),Gt(qe)}function et(t){var n=t.memoizedState;n!==null&&(kr._currentValue=n.memoizedState,se(Ze,t)),n=Ft.current;var a=x_(n,t.type);n!==a&&(se(le,t),se(Ft,a))}function mt(t){le.current===t&&(Gt(Ft),Gt(le)),Ze.current===t&&(Gt(Ze),kr._currentValue=B)}var St,dt;function qt(t){if(St===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);St=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+t+dt}var Rt=!1;function Kt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Lt){var q=Lt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Lt){q=Lt}gt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Lt){q=Lt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Lt){if(Lt&&q&&typeof Lt.stack=="string")return[Lt.stack,q.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),g=c[0],E=c[1];if(g&&E){var O=g.split(`
`),W=E.split(`
`);for(l=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;if(s===O.length||l===W.length)for(s=O.length-1,l=W.length-1;1<=s&&0<=l&&O[s]!==W[l];)l--;for(;1<=s&&0<=l;s--,l--)if(O[s]!==W[l]){if(s!==1||l!==1)do if(s--,l--,0>l||O[s]!==W[l]){var it=`
`+O[s].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=s&&0<=l);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qt(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return qt(t.type);case 16:return qt("Lazy");case 13:return t.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Kt(t.type,!1);case 11:return Kt(t.type.render,!1);case 1:return Kt(t.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function Tt(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Pt=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,Qt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,fe=o.unstable_requestPaint,k=o.unstable_now,bt=o.unstable_getCurrentPriorityLevel,Dt=o.unstable_ImmediatePriority,Yt=o.unstable_UserBlockingPriority,Mt=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Zt=o.unstable_IdlePriority,ue=o.log,Ve=o.unstable_setDisableYieldValue,Te=null,an=null;function _n(t){if(typeof ue=="function"&&Ve(t),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(Te,t)}catch{}}var On=Math.clz32?Math.clz32:Dl,ra=Math.log,So=Math.LN2;function Dl(t){return t>>>=0,t===0?32:31-(ra(t)/So|0)|0}var xs=256,oa=262144,Ss=4194304;function mi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ms(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~c,s!==0?l=mi(s):(g&=E,g!==0?l=mi(g):a||(a=E&~t,a!==0&&(l=mi(a))))):(E=s&~c,E!==0?l=mi(E):g!==0?l=mi(g):a||(a=s&~t,a!==0&&(l=mi(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Na(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ul(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-On(a),l=1<<s;n|=t[s],a&=~l}return n}function Ic(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nl(){var t=Ss;return Ss<<=1,(Ss&62914560)===0&&(Ss=4194304),t}function Mo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Es(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bc(t,n,a,s,l,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,W=t.hiddenUpdates;for(a=g&~a;0<a;){var it=31-On(a),gt=1<<it;E[it]=0,O[it]=-1;var q=W[it];if(q!==null)for(W[it]=null,it=0;it<q.length;it++){var tt=q[it];tt!==null&&(tt.lane&=-536870913)}a&=~gt}s!==0&&R(t,s,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-On(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function K(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-On(a),l=1<<s;l&n|t[s]&n&&(t[s]|=n),a&=~l}}function ot(t,n){var a=n&-n;return a=(a&42)!==0?1:ut(a),(a&(t.suspendedLanes|n))!==0?0:a}function ut(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=Nt.p;return t!==0?t:(t=window.event,t===void 0?32:iv(t.type))}function It(t,n){var a=Nt.p;try{return Nt.p=t,n()}finally{Nt.p=a}}var Vt=Math.random().toString(36).slice(2),wt="__reactFiber$"+Vt,jt="__reactProps$"+Vt,ie="__reactContainer$"+Vt,ee="__reactEvents$"+Vt,ye="__reactListeners$"+Vt,ze="__reactHandles$"+Vt,tn="__reactResources$"+Vt,Ne="__reactMarker$"+Vt,Ce="__reactLoad$"+Vt;function ne(t){delete t[wt],delete t[jt],delete t[ye],delete t[ze]}function Le(t){var n;if(n=t[wt])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[wt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=I_(t);t!==null;){if(a=t[wt])return a;t=I_(t)}return n}t=a,a=t.parentNode}return null}function _e(t){if(t=t[wt]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ni(t){var n=t[tn];return n||(n=t[tn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ne]=!0}function La(t){t[Ce]=void 0}var Ke=new Set,Fn={};function fn(t,n){rn(t,n),rn(t+"Capture",n)}function rn(t,n){for(Fn[t]=n,t=0;t<n.length;t++)Ke.add(n[t])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),or={},Gi={};function mx(t){return Pt.call(Gi,t)?!0:Pt.call(or,t)?!1:Pn.test(t)?Gi[t]=!0:(or[t]=!0,!1)}var De=!1;function sm(){var t=De;return De=!1,t}function Ll(t,n,a){if(mx(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Ol(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function la(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ii(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gx(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Fc(t){if(!t._valueTracker){var n=rm(t)?"checked":"value";t._valueTracker=gx(t,n,""+t[n])}}function om(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=rm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var _x=/[\n"\\]/g;function gi(t){return t.replace(_x,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hc(t,n,a,s,l,c,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ii(n)):t.value!==""+ii(n)&&(t.value=""+ii(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Gc(t,ii(t.value)):Gc(t,ii(n)):a!=null?Gc(t,ii(a)):s!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ii(E):t.removeAttribute("name")}function lm(t,n,a,s,l,c,g,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Fc(t);return}a=a!=null?""+ii(a):"",n=n!=null?""+ii(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Fc(t)}function Gc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function lr(t,n,a,s){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ii(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function um(t,n,a){if(n!=null&&(n=""+ii(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ii(a):""}function cm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ot(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ii(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Fc(t)}function ur(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||vx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",De=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(fm(t,l,s),De=!0)}else for(var c in n)n.hasOwnProperty(c)&&fm(t,c,n[c])}function Vc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return xx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vi(){}var Xc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cr=null,fr=null;function dm(t){var n=_e(t);if(n&&(t=n.stateNode)){var a=t[jt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Hc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var l=s[jt]||null;if(!l)throw Error(r(90));Hc(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&om(s)}break t;case"textarea":um(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&lr(t,!!a.multiple,n,!1)}}}var Yc=!1;function pm(t,n,a){if(Yc)return t(n,a);Yc=!0;try{var s=t(n);return s}finally{if(Yc=!1,(cr!==null||fr!==null)&&(Pu(),cr&&(n=cr,t=fr,fr=cr=null,dm(n),t)))for(n=0;n<t.length;n++)dm(t[n])}}function Eo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[jt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=!1;if(ua)try{var To={};Object.defineProperty(To,"passive",{get:function(){qc=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{qc=!1}var Oa=null,jc=null,zl=null;function mm(){if(zl)return zl;var t,n=jc,a=n.length,s,l="value"in Oa?Oa.value:Oa.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===l[c-s];s++);return zl=l.slice(t,1<s?1-s:void 0)}function Il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function gm(){return!1}function Hn(t){function n(a,s,l,c,g){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Bl:gm,this.isPropagationStopped=gm,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Hn(Pa),bo=z({},Pa,{view:0,detail:0}),Sx=Hn(bo),Wc,Zc,Ao,Hl=z({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(Wc=t.screenX-Ao.screenX,Zc=t.screenY-Ao.screenY):Zc=Wc=0,Ao=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),_m=Hn(Hl),Mx=z({},Hl,{dataTransfer:0}),Ex=Hn(Mx),Tx=z({},bo,{relatedTarget:0}),Kc=Hn(Tx),bx=z({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=Hn(bx),Rx=z({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cx=Hn(Rx),wx=z({},Pa,{data:0}),vm=Hn(wx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nx[t])?!!n[t]:!1}function Qc(){return Lx}var Ox=z({},bo,{key:function(t){if(t.key){var n=Dx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=Hn(Ox),zx=z({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Hn(zx),Ix=z({},Pa,{submitter:0}),Bx=Hn(Ix),Fx=z({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),Hx=Hn(Fx),Gx=z({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=Hn(Gx),Xx=z({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=Hn(Xx),Yx=z({},Pa,{newState:0,oldState:0,source:0}),qx=Hn(Yx),jx=[9,13,27,32],Jc=ua&&"CompositionEvent"in window,Ro=null;ua&&"documentMode"in document&&(Ro=document.documentMode);var Wx=ua&&"TextEvent"in window&&!Ro,xm=ua&&(!Jc||Ro&&8<Ro&&11>=Ro),Sm=" ",Mm=!1;function Em(t,n){switch(t){case"keyup":return jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function Zx(t,n){switch(t){case"compositionend":return Tm(n);case"keypress":return n.which!==32?null:(Mm=!0,Sm);case"textInput":return t=n.data,t===Sm&&Mm?null:t;default:return null}}function Kx(t,n){if(hr)return t==="compositionend"||!Jc&&Em(t,n)?(t=mm(),zl=jc=Oa=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xm&&n.locale!=="ko"?null:n.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Qx[t.type]:n==="textarea"}function Am(t,n,a,s){cr?fr?fr.push(s):fr=[s]:cr=s,n=Gu(n,"onChange"),0<n.length&&(a=new Fl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Co=null,wo=null;function Jx(t){d_(t,0)}function Gl(t){var n=vn(t);if(om(n))return t}function Rm(t,n){if(t==="change")return n}var Cm=!1;if(ua){var $c;if(ua){var tf="oninput"in document;if(!tf){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),tf=typeof wm.oninput=="function"}$c=tf}else $c=!1;Cm=$c&&(!document.documentMode||9<document.documentMode)}function Dm(){Co&&(Co.detachEvent("onpropertychange",Um),wo=Co=null)}function Um(t){if(t.propertyName==="value"&&Gl(wo)){var n=[];Am(n,wo,t,kc(t)),pm(Jx,n)}}function $x(t,n,a){t==="focusin"?(Dm(),Co=n,wo=a,Co.attachEvent("onpropertychange",Um)):t==="focusout"&&Dm()}function tS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(wo)}function eS(t,n){if(t==="click")return Gl(n)}function nS(t,n){if(t==="input"||t==="change")return Gl(n)}function iS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:iS;function Do(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Pt.call(n,l)||!ai(t[l],n[l]))return!1}return!0}function ef(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,n){var a=Nm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Nm(a)}}function Om(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Om(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ef(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ef(t.document)}return n}function nf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var aS=ua&&"documentMode"in document&&11>=document.documentMode,dr=null,af=null,Uo=null,sf=!1;function zm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sf||dr==null||dr!==ef(s)||(s=dr,"selectionStart"in s&&nf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Uo&&Do(Uo,s)||(Uo=s,s=Gu(af,"onSelect"),0<s.length&&(n=new Fl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=dr)))}function Ts(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var pr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},rf={},Im={};ua&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function bs(t){if(rf[t])return rf[t];if(!pr[t])return t;var n=pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Im)return rf[t]=n[a];return t}var Bm=bs("animationend"),Fm=bs("animationiteration"),Hm=bs("animationstart"),sS=bs("transitionrun"),rS=bs("transitionstart"),oS=bs("transitioncancel"),Gm=bs("transitionend"),Vm=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function wi(t,n){Vm.set(t,n),fn(n,[t])}var lS=0;function ca(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Li.identifierPrefix;var a=lS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Xm(t){if(t==null||typeof t=="string")return t;var n=null,a=Or;if(a!==null)for(var s=0;s<a.length;s++){var l=t[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function fa(t,n){return t=Xm(t),n=Xm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],mr=0,lf=0;function Xl(){for(var t=mr,n=lf=mr=0;n<t;){var a=_i[n];_i[n++]=null;var s=_i[n];_i[n++]=null;var l=_i[n];_i[n++]=null;var c=_i[n];if(_i[n++]=null,s!==null&&l!==null){var g=s.pending;g===null?l.next=l:(l.next=g.next,g.next=l),s.pending=l}c!==0&&km(a,l,c)}}function kl(t,n,a,s){_i[mr++]=t,_i[mr++]=n,_i[mr++]=a,_i[mr++]=s,lf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function uf(t,n,a,s){return kl(t,n,a,s),Yl(t)}function As(t,n){return kl(t,null,null,n),Yl(t)}function km(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-On(a),t=c.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=a|536870912),c):null}function Yl(t){if(50<$o)throw $o=0,Ou=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gr={};function uS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new uS(t,n,a,s)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ha(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ym(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ql(t,n,a,s,l,c){var g=0;if(s=t,typeof s=="function")cf(s)&&(g=1);else if(typeof s=="string")g=IM(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case vt:return t=qn(31,a,n,l),t.elementType=vt,t.lanes=c,t;case I:return Rs(a.children,l,c,n);case rt:g=8,l|=24;break;case lt:return t=qn(12,a,n,l|2),t.elementType=lt,t.lanes=c,t;case at:return t=qn(13,a,n,l),t.elementType=at,t.lanes=c,t;case Z:return t=qn(19,a,n,l),t.elementType=Z,t.lanes=c,t;case Xt:case C:return t=l|32,t=qn(30,a,n,t),t.elementType=C,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ht:g=10;break t;case ft:g=9;break t;case Y:g=11;break t;case xt:g=14;break t;case yt:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(g,a,n,l),n.elementType=t,n.type=s,n.lanes=c,n}function Rs(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function ff(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function qm(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function hf(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var jm=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=jm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Tt(n)},jm.set(t,n),n)}return{value:t,source:n,stack:Tt(n)}}var _r=[],vr=0,jl=null,No=0,yi=[],xi=0,za=null,Xi=1,ki="";function da(t,n){_r[vr++]=No,_r[vr++]=jl,jl=t,No=n}function Wm(t,n,a){yi[xi++]=Xi,yi[xi++]=ki,yi[xi++]=za,za=t;var s=Xi;t=ki;var l=32-On(s)-1;s&=~(1<<l),a+=1;var c=32-On(n)+l;if(30<c){var g=l-l%5;c=(s&(1<<g)-1).toString(32),s>>=g,l-=g,Xi=1<<32-On(n)+l|a<<l|s,ki=c+t}else Xi=1<<c|a<<l|s,ki=t}function Wl(t){t.return!==null&&(da(t,1),Wm(t,1,0))}function df(t){for(;t===jl;)jl=_r[--vr],_r[vr]=null,No=_r[--vr],_r[vr]=null;for(;t===za;)za=yi[--xi],yi[xi]=null,ki=yi[--xi],yi[xi]=null,Xi=yi[--xi],yi[xi]=null}function Zm(t,n){yi[xi++]=Xi,yi[xi++]=ki,yi[xi++]=za,Xi=n.id,ki=n.overflow,za=t}var En=null,Qe=null,ve=!1,Ia=null,Si=!1,pf=Error(r(519));function Ba(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(vi(n,t)),pf}function Km(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[wt]=t,n[jt]=s,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<el.length;a++)Me(el[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),lm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),cm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||__(n.textContent,a)?(s.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),s.onScroll!=null&&Me("scroll",n),s.onScrollEnd!=null&&Me("scrollend",n),s.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||Ba(t,!0)}function Zl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:En=En.return}}function yr(t){if(t!==En)return!1;if(!ve)return Zl(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kh(t.type,t.memoizedProps)),a=!a),a&&Qe&&Ba(t),Zl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qe=z_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qe=z_(t)}else n===27?(n=Qe,ts(t.type)?(t=$h,$h=null,Qe=t):Qe=n):Qe=En?Ei(t.stateNode.nextSibling):null;return!0}function Cs(){Qe=En=null,ve=!1}function mf(){var t=Ia;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Ia=null),t}function Lo(t){Ia===null?Ia=[t]:Ia.push(t)}var gf=he(null),ws=null,pa=null;function Fa(t,n,a){se(gf,n._currentValue),n._currentValue=a}function ma(t){t._currentValue=gf.current,Gt(gf)}function Kl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function _f(t,n,a,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var O=0;O<n.length;O++)if(E.context===n[O]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Kl(c.return,a,t),s||(g=null);break t}c=E.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(r(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Kl(g,a,t),g=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,g=l.alternate,g!==null&&(g.lanes|=a),Kl(l.return,a,t),g=l.child,g=g!==null?g.sibling:null):g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function Ds(t,n,a,s){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=l.type;ai(l.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(l===Ze.current){if(g=l.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(kr):t=[kr])}l=l.return}return t!==null&&_f(n,t,a,s),n.flags|=262144,t!==null}function Ql(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Us(t){ws=t,pa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Qm(ws,t)}function Jl(t,n){return ws===null&&Us(t),Qm(t,n)}function Qm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},pa===null){if(t===null)throw Error(r(308));pa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else pa=pa.next=n;return a}var cS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},fS=o.unstable_scheduleCallback,hS=o.unstable_NormalPriority,hn={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vf(){return{controller:new cS,data:new Map,refCount:0}}function Oo(t){t.refCount--,t.refCount===0&&fS(hS,function(){t.controller.abort()})}function Jm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Po=null;function dS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var zo=null,yf=0,Ns=0,xr=null;function pS(t,n){if(zo===null){var a=zo=[];yf=0,Ns=Ph(),xr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yf++,n.then($m,$m),n}function $m(){if(--yf===0&&(Po=null,zo!==null)){xr!==null&&(xr.status="fulfilled");var t=zo;zo=null,Ns=0,xr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var t0=Ut.S;Ut.S=function(t,n){if(qg=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pS(t,n),Po!==null)for(var a=Br;a!==null;)Jm(a,Po),a=a.next;if(a=t.types,a!==null){for(var s=Br;s!==null;)Jm(s,a),s=s.next;if(Ns!==0){s=Po,s===null&&(s=Po=[]);for(var l=0;l<a.length;l++){var c=a[l];s.indexOf(c)===-1&&s.push(c)}}}t0!==null&&t0(t,n)};var Ls=he(null);function xf(){var t=Ls.current;return t!==null?t:je.pooledCache}function $l(t,n){n===null?se(Ls,Ls.current):se(Ls,n.pool)}function e0(){var t=xf();return t===null?null:{parent:hn._currentValue,pool:t}}var Sr=Error(r(460)),Sf=Error(r(474)),tu=Error(r(542)),eu={then:function(){}};function n0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function i0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,s0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,s0(t),t}throw Ps=n,Sr}}function Os(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,Sr):a}}var Ps=null;function a0(){if(Ps===null)throw Error(r(459));var t=Ps;return Ps=null,t}function s0(t){if(t===Sr||t===tu)throw Error(r(483))}var Mr=null,Io=0;function nu(t){var n=Io;return Io+=1,Mr===null&&(Mr=[]),i0(Mr,t,n)}function Ha(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function iu(t,n){throw n.$$typeof===V?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function r0(t){function n(j,H){if(t){var J=j.deletions;J===null?(j.deletions=[H],j.flags|=16):J.push(H)}}function a(j,H){if(!t)return null;for(;H!==null;)n(j,H),H=H.sibling;return null}function s(j){for(var H=new Map;j!==null;)j.key===null?H.set(j.index,j):H.set(j.key,j),j=j.sibling;return H}function l(j,H){return j=ha(j,H),j.index=0,j.sibling=null,j}function c(j,H,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<H?(j.flags|=2,H):J):(j.flags|=134217730,H)):(j.flags|=1048576,H)}function g(j){return t&&j.alternate===null&&(j.flags|=134217730),j}function E(j,H,J,pt){return H===null||H.tag!==6?(H=ff(J,j.mode,pt),H.return=j,H):(H=l(H,J),H.return=j,H)}function O(j,H,J,pt){var kt=J.type;return kt===I?(j=it(j,H,J.props.children,pt,J.key),Ha(j,J),j):H!==null&&(H.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===yt&&Os(kt)===H.type)?(H=l(H,J.props),Ha(H,J),H.return=j,H):(H=ql(J.type,J.key,J.props,null,j.mode,pt),Ha(H,J),H.return=j,H)}function W(j,H,J,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=hf(J,j.mode,pt),H.return=j,H):(H=l(H,J.children||[]),H.return=j,H)}function it(j,H,J,pt,kt){return H===null||H.tag!==7?(H=Rs(J,j.mode,pt,kt),H.return=j,H):(H=l(H,J),H.return=j,H)}function gt(j,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=ff(""+H,j.mode,J),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return J=ql(H.type,H.key,H.props,null,j.mode,J),Ha(J,H),J.return=j,J;case b:return H=hf(H,j.mode,J),H.return=j,H;case yt:return H=Os(H),gt(j,H,J)}if(Ot(H)||ct(H))return H=Rs(H,j.mode,J,null),H.return=j,H;if(typeof H.then=="function")return gt(j,nu(H),J);if(H.$$typeof===ht)return gt(j,Jl(j,H),J);iu(j,H)}return null}function q(j,H,J,pt){var kt=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return kt!==null?null:E(j,H,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===kt?O(j,H,J,pt):null;case b:return J.key===kt?W(j,H,J,pt):null;case yt:return J=Os(J),q(j,H,J,pt)}if(Ot(J)||ct(J))return kt!==null?null:it(j,H,J,pt,null);if(typeof J.then=="function")return q(j,H,nu(J),pt);if(J.$$typeof===ht)return q(j,H,Jl(j,J),pt);iu(j,J)}return null}function tt(j,H,J,pt,kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,E(H,j,""+pt,kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case D:return j=j.get(pt.key===null?J:pt.key)||null,O(H,j,pt,kt);case b:return j=j.get(pt.key===null?J:pt.key)||null,W(H,j,pt,kt);case yt:return pt=Os(pt),tt(j,H,J,pt,kt)}if(Ot(pt)||ct(pt))return j=j.get(J)||null,it(H,j,pt,kt,null);if(typeof pt.then=="function")return tt(j,H,J,nu(pt),kt);if(pt.$$typeof===ht)return tt(j,H,J,Jl(H,pt),kt);iu(H,pt)}return null}function Lt(j,H,J,pt){for(var kt=null,Ae=null,te=H,re=H=0,mn=null;te!==null&&re<J.length;re++){te.index>re?(mn=te,te=null):mn=te.sibling;var Re=q(j,te,J[re],pt);if(Re===null){te===null&&(te=mn);break}t&&te&&Re.alternate===null&&n(j,te),H=c(Re,H,re),Ae===null?kt=Re:Ae.sibling=Re,Ae=Re,te=mn}if(re===J.length)return a(j,te),ve&&da(j,re),kt;if(te===null){for(;re<J.length;re++)te=gt(j,J[re],pt),te!==null&&(H=c(te,H,re),Ae===null?kt=te:Ae.sibling=te,Ae=te);return ve&&da(j,re),kt}for(te=s(te);re<J.length;re++)mn=tt(te,j,re,J[re],pt),mn!==null&&(t&&(Re=mn.alternate,Re!==null&&te.delete(Re.key===null?re:Re.key)),H=c(mn,H,re),Ae===null?kt=mn:Ae.sibling=mn,Ae=mn);return t&&te.forEach(function(ss){return n(j,ss)}),ve&&da(j,re),kt}function Wt(j,H,J,pt){if(J==null)throw Error(r(151));for(var kt=null,Ae=null,te=H,re=H=0,mn=null,Re=J.next();te!==null&&!Re.done;re++,Re=J.next()){te.index>re?(mn=te,te=null):mn=te.sibling;var ss=q(j,te,Re.value,pt);if(ss===null){te===null&&(te=mn);break}t&&te&&ss.alternate===null&&n(j,te),H=c(ss,H,re),Ae===null?kt=ss:Ae.sibling=ss,Ae=ss,te=mn}if(Re.done)return a(j,te),ve&&da(j,re),kt;if(te===null){for(;!Re.done;re++,Re=J.next())Re=gt(j,Re.value,pt),Re!==null&&(H=c(Re,H,re),Ae===null?kt=Re:Ae.sibling=Re,Ae=Re);return ve&&da(j,re),kt}for(te=s(te);!Re.done;re++,Re=J.next())Re=tt(te,j,re,Re.value,pt),Re!==null&&(t&&(mn=Re.alternate,mn!==null&&te.delete(mn.key===null?re:mn.key)),H=c(Re,H,re),Ae===null?kt=Re:Ae.sibling=Re,Ae=Re);return t&&te.forEach(function(ZM){return n(j,ZM)}),ve&&da(j,re),kt}function pe(j,H,J,pt){if(typeof J=="object"&&J!==null&&J.type===I&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var kt=J.key;H!==null;){if(H.key===kt){if(kt=J.type,kt===I){if(H.tag===7){a(j,H.sibling),pt=l(H,J.props.children),Ha(pt,J),pt.return=j,j=pt;break t}}else if(H.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===yt&&Os(kt)===H.type){a(j,H.sibling),pt=l(H,J.props),Ha(pt,J),pt.return=j,j=pt;break t}a(j,H);break}else n(j,H);H=H.sibling}J.type===I?(pt=Rs(J.props.children,j.mode,pt,J.key),Ha(pt,J),pt.return=j,j=pt):(pt=ql(J.type,J.key,J.props,null,j.mode,pt),Ha(pt,J),pt.return=j,j=pt)}return g(j);case b:t:{for(kt=J.key;H!==null;){if(H.key===kt)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(j,H.sibling),pt=l(H,J.children||[]),pt.return=j,j=pt;break t}else{a(j,H);break}else n(j,H);H=H.sibling}pt=hf(J,j.mode,pt),pt.return=j,j=pt}return g(j);case yt:return J=Os(J),pe(j,H,J,pt)}if(Ot(J))return Lt(j,H,J,pt);if(ct(J)){if(kt=ct(J),typeof kt!="function")throw Error(r(150));return J=kt.call(J),Wt(j,H,J,pt)}if(typeof J.then=="function")return pe(j,H,nu(J),pt);if(J.$$typeof===ht)return pe(j,H,Jl(j,J),pt);iu(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(j,H.sibling),pt=l(H,J),pt.return=j,j=pt):(a(j,H),pt=ff(J,j.mode,pt),pt.return=j,j=pt),g(j)):a(j,H)}return function(j,H,J,pt){try{Io=0;var kt=pe(j,H,J,pt);return Mr=null,kt}catch(te){if(te===Sr||te===tu)throw te;var Ae=qn(29,te,null,j.mode);return Ae.lanes=pt,Ae.return=j,Ae}finally{}}}var zs=r0(!0),o0=r0(!1),Ga=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Yl(t),km(t,null,a),n}return kl(t,s,n,a),Yl(t)}function Bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,K(t,a)}}function Tf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var bf=!1;function Fo(){if(bf){var t=xr;if(t!==null)throw t}}function Ho(t,n,a,s){bf=!1;var l=t.updateQueue;Ga=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var O=E,W=O.next;O.next=null,g===null?c=W:g.next=W,g=O;var it=t.alternate;it!==null&&(it=it.updateQueue,E=it.lastBaseUpdate,E!==g&&(E===null?it.firstBaseUpdate=W:E.next=W,it.lastBaseUpdate=O))}if(c!==null){var gt=l.baseState;g=0,it=W=O=null,E=c;do{var q=E.lane&-536870913,tt=q!==E.lane;if(tt?(be&q)===q:(s&q)===q){q!==0&&q===Ns&&(bf=!0),it!==null&&(it=it.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Lt=t,Wt=E;q=n;var pe=a;switch(Wt.tag){case 1:if(Lt=Wt.payload,typeof Lt=="function"){gt=Lt.call(pe,gt,q);break t}gt=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Wt.payload,q=typeof Lt=="function"?Lt.call(pe,gt,q):Lt,q==null)break t;gt=z({},gt,q);break t;case 2:Ga=!0}}q=E.callback,q!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[q]:tt.push(q))}else tt={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},it===null?(W=it=tt,O=gt):it=it.next=tt,g|=q;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);it===null&&(O=gt),l.baseState=O,l.firstBaseUpdate=W,l.lastBaseUpdate=it,c===null&&(l.shared.lanes=0),Ka|=g,t.lanes=g,t.memoizedState=gt}}function l0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function u0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)l0(a[t],n)}var ka=he(null),au=he(0);function c0(t,n){t=xa,se(au,t),se(ka,n),xa=t|n.baseLanes}function Af(){se(au,xa),se(ka,ka.current)}function Rf(){xa=au.current,Gt(ka),Gt(au)}var wn=he(null),zn=null;function Ya(t){var n=t.alternate;se(Dn,Dn.current&1),se(wn,t),zn===null&&(n===null||ka.current!==null||n.memoizedState!==null)&&(zn=t)}function Cf(t){se(Dn,Dn.current),se(wn,t),zn===null&&(zn=t)}function f0(t){t.tag===22?(se(Dn,Dn.current),se(wn,t),zn===null&&(zn=t)):qa()}function qa(){se(Dn,Dn.current),se(wn,wn.current)}function si(t){Gt(wn),zn===t&&(zn=null),Gt(Dn)}var Dn=he(0);function Go(t,n){se(wn,wn.current),se(Dn,n)}function wf(t){Gt(Dn),Gt(wn),zn===t&&(zn=null)}function su(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qh(a)||Jh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ga=0,de=null,Xe=null,dn=null,ru=!1,Er=!1,Is=!1,ou=0,Vo=0,Tr=null,gS=0;function on(){throw Error(r(321))}function Df(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function Uf(t,n,a,s,l,c){return ga=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ut.H=t===null||t.memoizedState===null?W0:Z0,Is=!1,c=a(s,l),Is=!1,Er&&(c=d0(n,a,s,l)),h0(t),c}function h0(t){Ut.H=pu;var n=Xe!==null&&Xe.next!==null;if(ga=0,dn=Xe=de=null,ru=!1,Vo=0,Tr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Ql(t)&&(pn=!0))}function d0(t,n,a,s){de=t;var l=0;do{if(Er&&(Tr=null),Vo=0,Er=!1,25<=l)throw Error(r(301));if(l+=1,dn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Ut.H=TS,c=n(a,s)}while(Er);return c}function _S(){var t=Ut.H,n=t.useState()[0];return n=typeof n.then=="function"?Xo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(de.flags|=1024),n}function Nf(){var t=ou!==0;return ou=0,t}function Lf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Of(t){if(ru){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ru=!1}ga=0,dn=Xe=de=null,Er=!1,Vo=ou=0,Tr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?de.memoizedState=dn=t:dn=dn.next=t,dn}function cn(){if(Xe===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=dn===null?de.memoizedState:dn.next;if(n!==null)dn=n,Xe=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},dn===null?de.memoizedState=dn=t:dn=dn.next=t}return dn}function lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var n=Vo;return Vo+=1,Tr===null&&(Tr=[]),t=i0(Tr,t,n),n=de,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,Ut.H=n===null||n.memoizedState===null?W0:Z0),t}function uu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===L)return;if(t.$$typeof===ht)return Cn(t)}throw Error(r(438,String(t)))}function Pf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=lu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Ht;return n.index++,a}function _a(t,n){return typeof n=="function"?n(t):n}function cu(t){var n=cn();return zf(n,Xe,t)}function zf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=t.baseQueue,c=s.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}n.baseQueue=l=c,s.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=g=null,O=null,W=n,it=!1;do{var gt=W.lane&-536870913;if(gt!==W.lane?(be&gt)===gt:(ga&gt)===gt){var q=W.revertLane;if(q===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),gt===Ns&&(it=!0);else if((ga&q)===q){W=W.next,q===Ns&&(it=!0);continue}else gt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},O===null?(E=O=gt,g=c):O=O.next=gt,de.lanes|=q,Ka|=q;gt=W.action,Is&&a(c,gt),c=W.hasEagerState?W.eagerState:a(c,gt)}else q={lane:gt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},O===null?(E=O=q,g=c):O=O.next=q,de.lanes|=gt,Ka|=gt;W=W.next}while(W!==null&&W!==n);if(O===null?g=c:O.next=E,!ai(c,t.memoizedState)&&(pn=!0,it&&(a=xr,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=O,s.lastRenderedState=c}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function If(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);ai(c,n.memoizedState)||(pn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function p0(t,n,a){var s=de,l=cn(),c=ve;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!ai((Xe||l).memoizedState,a);if(g&&(l.memoizedState=a,pn=!0),l=l.queue,Hf(_0.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||g||dn!==null&&(dn.memoizedState.tag&1)!==0,br(t?9:8,{destroy:void 0},g0.bind(null,s,l,a,n),null),t){if(s.flags|=2048,je===null)throw Error(r(349));c||(ga&127)!==0||m0(s,n,a)}return a}function m0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=lu(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function g0(t,n,a,s){n.value=a,n.getSnapshot=s,v0(n)&&y0(t)}function _0(t,n,a){return a(function(){v0(n)&&y0(t)})}function v0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function y0(t){var n=As(t,2);n!==null&&Kn(n,t,2)}function Bf(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Is){_n(!0);try{a()}finally{_n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},n}function x0(t,n,a,s){return t.baseState=a,zf(t,Xe,typeof s=="function"?s:_a)}function vS(t,n,a,s,l){if(du(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};Ut.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,S0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function S0(t,n){var a=n.action,s=n.payload,l=t.state;if(n.isTransition){var c=Ut.T,g={};g.types=c!==null?c.types:null,Ut.T=g;try{var E=a(l,s),O=Ut.S;O!==null&&O(g,E),M0(t,n,E)}catch(W){Ff(t,n,W)}finally{c!==null&&g.types!==null&&(c.types=g.types),Ut.T=c}}else try{c=a(l,s),M0(t,n,c)}catch(W){Ff(t,n,W)}}function M0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){E0(t,n,s)},function(s){return Ff(t,n,s)}):E0(t,n,a)}function E0(t,n,a){n.status="fulfilled",n.value=a,T0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,S0(t,a)))}function Ff(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,T0(n),n=n.next;while(n!==s)}t.action=null}function T0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function b0(t,n){return n}function A0(t,n){if(ve){var a=je.formState;if(a!==null){t:{var s=de;if(ve){if(Qe){e:{for(var l=Qe,c=Si;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ei(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Qe=Ei(l.nextSibling),s=l.data==="F!";break t}}Ba(s)}s=!1}s&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:n},a.queue=s,a=Y0.bind(null,de,s),s.dispatch=a,s=Bf(!1),c=Yf.bind(null,de,!1,s.queue),s=Gn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,a=vS.bind(null,de,l,c,a),l.dispatch=a,s.memoizedState=t,[n,a,!1]}function R0(t){var n=cn();return C0(n,Xe,t)}function C0(t,n,a){if(n=zf(t,n,b0)[0],t=cu(_a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xo(n)}catch(g){throw g===Sr?tu:g}else s=n;n=cn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(de.flags|=2048,br(9,{destroy:void 0},yS.bind(null,l,a),null)),[s,c,t]}function yS(t,n){t.action=n}function w0(t){var n=cn(),a=Xe;if(a!==null)return C0(n,a,t);cn(),n=n.memoizedState,a=cn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=lu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function D0(){return cn().memoizedState}function fu(t,n,a,s){var l=Gn();de.flags|=t,l.memoizedState=br(1|n,{destroy:void 0},a,s===void 0?null:s)}function hu(t,n,a,s){var l=cn();s=s===void 0?null:s;var c=l.memoizedState.inst;Xe!==null&&s!==null&&Df(s,Xe.memoizedState.deps)?l.memoizedState=br(n,c,a,s):(de.flags|=t,l.memoizedState=br(1|n,c,a,s))}function U0(t,n){fu(8390656,8,t,n)}function Hf(t,n){hu(2048,8,t,n)}function xS(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=lu(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function N0(t){var n=cn().memoizedState;return xS({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function L0(t,n){return hu(4,2,t,n)}function O0(t,n){return hu(4,4,t,n)}function P0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function z0(t,n,a){a=a!=null?a.concat([t]):null,hu(4,4,P0.bind(null,n,t),a)}function Gf(){}function I0(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Df(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function B0(t,n){var a=cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Df(n,s[1]))return s[0];if(s=t(),Is){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[s,n],s}function Vf(t,n,a){return a===void 0||(ga&1073741824)!==0&&(be&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Wg(),de.lanes|=t,Ka|=t,a)}function F0(t,n,a,s){return ai(a,n)?a:ka.current!==null?(t=Vf(t,a,s),ai(t,n)||(pn=!0),t):(ga&106)===0||(ga&1073741824)!==0&&(be&261930)===0?(pn=!0,t.memoizedState=a):(t=Wg(),de.lanes|=t,Ka|=t,n)}function H0(t,n,a,s,l){var c=Nt.p;Nt.p=c!==0&&8>c?c:8;var g=Ut.T,E={};E.types=g!==null?g.types:null,Ut.T=E,Yf(t,!1,n,a);try{var O=l(),W=Ut.S;if(W!==null&&W(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var it=mS(O,s);ko(t,n,it,ui(t))}else ko(t,n,s,ui(t))}catch(gt){ko(t,n,{then:function(){},status:"rejected",reason:gt},ui())}finally{Nt.p=c,g!==null&&E.types!==null&&(g.types=E.types),Ut.T=g}}function SS(){}function Xf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var l=G0(t).queue;H0(t,l,n,B,a===null?SS:function(){return V0(t),a(s)})}function G0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function V0(t){var n=G0(t);n.next===null&&(n=t.alternate.memoizedState),ko(t,n.next.queue,{},ui())}function kf(){return Cn(kr)}function X0(){return cn().memoizedState}function k0(){return cn().memoizedState}function MS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Va(a);var s=Xa(n,t,a);s!==null&&(Kn(s,n,a),Bo(s,n,a)),n={cache:vf()},t.payload=n;return}n=n.return}}function ES(t,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},du(t)?q0(n,a):(a=uf(t,n,a,s),a!==null&&(Kn(a,t,s),j0(a,n,s)))}function Y0(t,n,a){var s=ui();ko(t,n,a,s)}function ko(t,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(du(t))q0(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,E=c(g,a);if(l.hasEagerState=!0,l.eagerState=E,ai(E,g))return kl(t,n,l,0),je===null&&Xl(),!1}catch{}finally{}if(a=uf(t,n,l,s),a!==null)return Kn(a,t,s),j0(a,n,s),!0}return!1}function Yf(t,n,a,s){if(s={lane:2,revertLane:Ph(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},du(t)){if(n)throw Error(r(479))}else n=uf(t,a,s,2),n!==null&&Kn(n,t,2)}function du(t){var n=t.alternate;return t===de||n!==null&&n===de}function q0(t,n){Er=ru=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function j0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,K(t,a)}}var pu={readContext:Cn,use:uu,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on,useEffectEvent:on},W0={readContext:Cn,use:uu,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:U0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fu(4194308,4,P0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fu(4194308,4,t,n)},useInsertionEffect:function(t,n){fu(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var s=t();if(Is){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Gn();if(a!==void 0){var l=a(n);if(Is){_n(!0);try{a(n)}finally{_n(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=ES.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Bf(t);var n=t.queue,a=Y0.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gf,useDeferredValue:function(t,n){var a=Gn();return Vf(a,t,n)},useTransition:function(){var t=Bf(!1);return t=H0.bind(null,de,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,l=Gn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(be&127)!==0||m0(s,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,U0(_0.bind(null,s,c,t),[t]),s.flags|=2048,br(9,{destroy:void 0},g0.bind(null,s,c,a,n),null),a},useId:function(){var t=Gn(),n=je.identifierPrefix;if(ve){var a=ki,s=Xi;a=(s&~(1<<32-On(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ou++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:kf,useFormState:A0,useActionState:A0,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yf.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pf,useCacheRefresh:function(){return Gn().memoizedState=MS.bind(null,de)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Z0={readContext:Cn,use:uu,useCallback:I0,useContext:Cn,useEffect:Hf,useImperativeHandle:z0,useInsertionEffect:L0,useLayoutEffect:O0,useMemo:B0,useReducer:cu,useRef:D0,useState:function(){return cu(_a)},useDebugValue:Gf,useDeferredValue:function(t,n){var a=cn();return F0(a,Xe.memoizedState,t,n)},useTransition:function(){var t=cu(_a)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:p0,useId:X0,useHostTransitionStatus:kf,useFormState:R0,useActionState:R0,useOptimistic:function(t,n){var a=cn();return x0(a,Xe,t,n)},useMemoCache:Pf,useCacheRefresh:k0,useEffectEvent:N0},TS={readContext:Cn,use:uu,useCallback:I0,useContext:Cn,useEffect:Hf,useImperativeHandle:z0,useInsertionEffect:L0,useLayoutEffect:O0,useMemo:B0,useReducer:If,useRef:D0,useState:function(){return If(_a)},useDebugValue:Gf,useDeferredValue:function(t,n){var a=cn();return Xe===null?Vf(a,t,n):F0(a,Xe.memoizedState,t,n)},useTransition:function(){var t=If(_a)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:p0,useId:X0,useHostTransitionStatus:kf,useFormState:w0,useActionState:w0,useOptimistic:function(t,n){var a=cn();return Xe!==null?x0(a,Xe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:k0,useEffectEvent:N0};function qf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ui(),l=Va(s);l.payload=n,a!=null&&(l.callback=a),n=Xa(t,l,s),n!==null&&(Kn(n,t,s),Bo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ui(),l=Va(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Xa(t,l,s),n!==null&&(Kn(n,t,s),Bo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),s=Va(a);s.tag=2,n!=null&&(s.callback=n),n=Xa(t,s,a),n!==null&&(Kn(n,t,a),Bo(n,t,a))}};function K0(t,n,a,s,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,g):n.prototype&&n.prototype.isPureReactComponent?!Do(a,s)||!Do(l,c):!0}function Q0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&jf.enqueueReplaceState(n,n.state,null)}function Bs(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function J0(t){Vl(t)}function $0(t){console.error(t)}function tg(t){Vl(t)}function mu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function eg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Wf(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){mu(t,n)},a}function ng(t){return t=Va(t),t.tag=3,t}function ig(t,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=s.value;t.payload=function(){return l(c)},t.callback=function(){eg(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){eg(n,a,s),typeof l!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function bS(t,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ds(n,a,l,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?zu():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===eu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Nh(t,s,l)),!1;case 22:return a.flags|=65536,s===eu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Nh(t,s,l)),!1}throw Error(r(435,a.tag))}return Nh(t,s,l),zu(),!1}if(ve)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==pf&&(t=Error(r(422),{cause:s}),Lo(vi(t,a)))):(s!==pf&&(n=Error(r(423),{cause:s}),Lo(vi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=vi(s,a),l=Wf(t.stateNode,s,l),Tf(t,l),ln!==4&&(ln=2)),!1;var c=Error(r(520),{cause:s});if(c=vi(c,a),Jo===null?Jo=[c]:Jo.push(c),ln!==4&&(ln=2),n===null)return!0;s=vi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Wf(a.stateNode,s,t),Tf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Qa===null||!Qa.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=ng(l),ig(l,t,a,s),Tf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Zf=Error(r(461)),pn=!1;function yn(t,n,a,s){n.child=t===null?o0(n,null,a,s):zs(n,t.child,a,s)}function ag(t,n,a,s,l){a=a.render;var c=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return Us(n),s=Uf(t,n,a,g,c,l),E=Nf(),t!==null&&!pn?(Lf(t,n,l),va(t,n,l)):(ve&&E&&Wl(n),n.flags|=1,yn(t,n,s,l),n.child)}function sg(t,n,a,s,l){if(t===null){var c=a.type;return typeof c=="function"&&!cf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,rg(t,n,c,s,l)):(t=ql(a.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!ih(t,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(g,s)&&t.ref===n.ref)return va(t,n,l)}return n.flags|=1,t=ha(c,s),t.ref=n.ref,t.return=n,n.child=t}function rg(t,n,a,s,l){if(t!==null){var c=t.memoizedProps;if(Do(c,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=c,ih(t,l))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,va(t,n,l)}return Kf(t,n,a,s,l)}function og(t,n,a,s){var l=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~c}else s=0,n.child=null;return lg(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$l(n,c!==null?c.cachePool:null),c!==null?c0(n,c):Af(),f0(n);else return s=n.lanes=536870912,lg(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?($l(n,c.cachePool),c0(n,c),qa(),n.memoizedState=null):(t!==null&&$l(n,null),Af(),qa());return yn(t,n,l,a),n.child}function Yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function lg(t,n,a,s,l){var c=xf();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&$l(n,null),Af(),f0(n),t!==null&&Ds(t,n,s,!0),n.childLanes=l,null}function gu(t,n){return n=_u({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ug(t,n,a){return zs(n,t.child,null,a),t=gu(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function AS(t,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=gu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Yo(null,t);if(Cf(n),(t=Qe)?(t=P_(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Xi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,En=n,Qe=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return gu(n,s)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(Cf(n),l)if(n.flags&256)n.flags&=-257,n=ug(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||Ds(t,n,a,!1),l=(a&t.childLanes)!==0,pn||l){if(ka.current===null){if(s=je,s!==null&&(g=ot(s,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,As(t,g),Kn(s,t,g),Zf;zu()}n=ug(t,n,a)}else t=c.treeContext,Qe=Ei(g.nextSibling),En=n,ve=!0,Ia=null,Si=!1,t!==null&&Zm(n,t),n=gu(n,s),n.flags|=134221824;return n}return t=ha(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ar(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Kf(t,n,a,s,l){return Us(n),a=Uf(t,n,a,s,void 0,l),s=Nf(),t!==null&&!pn?(Lf(t,n,l),va(t,n,l)):(ve&&s&&Wl(n),n.flags|=1,yn(t,n,a,l),n.child)}function cg(t,n,a,s,l,c){return Us(n),n.updateQueue=null,a=d0(n,s,a,l),h0(t),s=Nf(),t!==null&&!pn?(Lf(t,n,c),va(t,n,c)):(ve&&s&&Wl(n),n.flags|=1,yn(t,n,a,c),n.child)}function fg(t,n,a,s,l){if(Us(n),n.stateNode===null){var c=gr,g=a.contextType;typeof g=="object"&&g!==null&&(c=Cn(g)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=jf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},Mf(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?Cn(g):gr,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(qf(n,a,g,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&jf.enqueueReplaceState(c,c.state,null),Ho(n,s,c,l),Fo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,O=Bs(a,E);c.props=O;var W=c.context,it=a.contextType;g=gr,typeof it=="object"&&it!==null&&(g=Cn(it));var gt=a.getDerivedStateFromProps;it=typeof gt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,it||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==g)&&Q0(n,c,s,g),Ga=!1;var q=n.memoizedState;c.state=q,Ho(n,s,c,l),Fo(),W=n.memoizedState,E||q!==W||Ga?(typeof gt=="function"&&(qf(n,a,gt,s),W=n.memoizedState),(O=Ga||K0(n,a,O,s,q,W,g))?(it||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=W),c.props=s,c.state=W,c.context=g,s=O):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Ef(t,n),g=n.memoizedProps,it=Bs(a,g),c.props=it,gt=n.pendingProps,q=c.context,W=a.contextType,O=gr,typeof W=="object"&&W!==null&&(O=Cn(W)),E=a.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==gt||q!==O)&&Q0(n,c,s,O),Ga=!1,q=n.memoizedState,c.state=q,Ho(n,s,c,l),Fo();var tt=n.memoizedState;g!==gt||q!==tt||Ga||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof E=="function"&&(qf(n,a,E,s),tt=n.memoizedState),(it=Ga||K0(n,a,it,s,q,tt,O)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,tt,O),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,tt,O)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=tt),c.props=s,c.state=tt,c.context=O,s=it):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,Ar(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=zs(n,t.child,null,l),n.child=zs(n,null,a,l)):yn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=va(t,n,l),t}function hg(t,n,a,s){return Cs(),n.flags|=256,yn(t,n,a,s),n.child}var Qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jf(t){return{baseLanes:t,cachePool:e0()}}function $f(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function dg(t,n,a){var s=n.pendingProps,l=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),g&&(l=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(l?Ya(n):qa(),(t=Qe)?(t=P_(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Xi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,En=n,Qe=null)):t=null,t===null)throw Ba(n);return Jh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,l?(qa(),l=n.mode,c=_u({mode:"hidden",children:c},l),s=Rs(s,l,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Jf(a),s.childLanes=$f(t,g,a),n.memoizedState=Qf,Yo(null,s)):(Ya(n),th(n,c))}var E=t.memoizedState;if(E!==null){var O=E.dehydrated;if(O!==null)return RS(t,n,c,g,s,O,E,a)}return l?(qa(),l=s.fallback,c=n.mode,E=t.child,O=E.sibling,s=ha(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,O!==null?l=ha(O,l):(l=Rs(l,c,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Yo(null,s),s=n.child,l=t.child.memoizedState,l===null?l=Jf(a):(c=l.cachePool,c!==null?(E=hn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=e0(),l={baseLanes:l.baseLanes|a,cachePool:c}),s.memoizedState=l,s.childLanes=$f(t,g,a),n.memoizedState=Qf,Yo(t.child,s)):(Ya(n),a=t.child,t=a.sibling,a=ha(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function th(t,n){return n=_u({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _u(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function vu(t,n,a){return zs(n,t.child,null,a),t=th(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function RS(t,n,a,s,l,c,g,E){if(a)return n.flags&256?(Ya(n),n.flags&=-257,vu(t,n,E)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,null):(qa(),c=l.fallback,g=n.mode,l=_u({mode:"visible",children:l.children},g),c=Rs(c,g,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,zs(n,t.child,null,E),l=n.child,l.memoizedState=Jf(E),l.childLanes=$f(t,s,E),n.memoizedState=Qf,Yo(null,l));if(Ya(n),Jh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var O=s.dgst;return s=O,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Lo({value:l,source:null,stack:null})),vu(t,n,E)}if(pn||Ds(t,n,E,!1),s=(E&t.childLanes)!==0,pn||s){if(ka.current!==null)return vu(t,n,E);if(s=je,s!==null&&(l=ot(s,E),l!==0&&l!==g.retryLane))throw g.retryLane=l,As(t,l),Kn(s,t,l),Zf;return Qh(c)||zu(),vu(t,n,E)}return Qh(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Qe=Ei(c.nextSibling),En=n,ve=!0,Ia=null,Si=!1,t!==null&&Zm(n,t),n=th(n,l.children),n.flags|=134221824,n)}function pg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Kl(t.return,n,a)}function mg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&su(a)===null&&(n=t),t=t.sibling}return n}function yu(t,n,a,s,l,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=l,g.treeForkCount=c)}function eh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function nh(t,n,a){var s=n.pendingProps,l=s.revealOrder,c=s.tail;s=s.children;var g=Dn.current;if(n.flags&128)return Go(n,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,Go(n,g),l==="backwards"&&t!==null?(eh(t),yn(t,n,s,a),eh(t)):yn(t,n,s,a),s=ve?No:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pg(t,a,n);else if(t.tag===19)pg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=mg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,eh(n)),yu(n,!0,l,null,c,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&su(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}yu(n,!0,a,null,c,s);break;case"together":yu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=mg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),yu(n,!1,l,a,c,s)}return n.child}function gg(t,n,a){var s=n.pendingProps;return Fa(n,n.type,s.value),yn(t,n,s.children,a),n.child}function va(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ds(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ha(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ha(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ih(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function CS(t,n,a){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),Fa(n,hn,t.memoizedState.cache),Cs();break;case 27:case 5:et(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ya(n),n.flags|=128,null;s=Ds(t,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?dg(t,n,a):(Ya(n),t=va(t,n,a),t!==null?t.sibling:null)}Ya(n);break;case 19:if(n.flags&128)return nh(t,n,a);if(l=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Ds(t,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return nh(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Go(n,Dn.current),s)break;return null;case 22:return n.lanes=0,og(t,n,a,n.pendingProps);case 24:Fa(n,hn,t.memoizedState.cache)}return va(t,n,a)}function _g(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!ih(t,a)&&(n.flags&128)===0)return pn=!1,CS(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,ve&&(n.flags&1048576)!==0&&Wm(n,No,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Os(n.elementType),n.type=t,typeof t=="function")cf(t)?(s=Bs(t,s),n.tag=1,n=fg(null,n,t,s,a)):(n.tag=0,n=Kf(null,n,t,s,a));else{if(t!=null){var l=t.$$typeof;if(l===Y){n.tag=11,n=ag(null,n,t,s,a);break t}else if(l===xt){n.tag=14,n=sg(null,n,t,s,a);break t}else if(l===ht){n.tag=10,n.type=t,n=gg(null,n,a);break t}}throw n=Ct(t)||t,Error(r(306,n,""))}}return n;case 0:return Kf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Bs(s,n.pendingProps),fg(t,n,s,l,a);case 3:t:{if(N(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;l=c.element,Ef(t,n),Ho(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Fa(n,hn,s),s!==c.cache&&_f(n,[hn],a,!0),Fo(),s=g.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=hg(t,n,s,a);break t}else if(s!==l){l=vi(Error(r(424)),n),Lo(l),n=hg(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=Ei(t.firstChild),En=n,ve=!0,Ia=null,Si=!0,a=o0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Cs(),s===l){n=va(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return Ar(t,n),t===null?(a=V_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=S_(n.type,n.pendingProps,qe.current,n)):n.memoizedState=V_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&ve&&(s=n.stateNode=B_(n.type,n.pendingProps,qe.current),En=n,Si=!0,l=Qe,ts(n.type)?($h=l,Qe=Ei(s.firstChild)):Qe=l),yn(t,n,n.pendingProps.children,a),Ar(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((l=s=Qe)&&(s=MM(s,n.type,n.pendingProps,Si),s!==null?(n.stateNode=s,En=n,Qe=Ei(s.firstChild),Si=!1,l=!0):l=!1),l||Ba(n)),et(n),l=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,s=c.children,kh(l,c)?s=null:g!==null&&kh(l,g)&&(n.flags|=32),n.memoizedState!==null&&(l=Uf(t,n,_S,null,null,a),kr._currentValue=l),Ar(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=Qe)&&(a=EM(a,n.pendingProps,Si),a!==null?(n.stateNode=a,En=n,Qe=null,t=!0):t=!1),t||Ba(n)),null;case 13:return dg(t,n,a);case 4:return N(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=zs(n,null,s,a):yn(t,n,s,a),n.child;case 11:return ag(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ar(t,n),yn(t,n,s,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return gg(t,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,Us(n),l=Cn(l),s=s(l),n.flags|=1,yn(t,n,s,a),n.child;case 14:return sg(t,n,n.type,n.pendingProps,a);case 15:return rg(t,n,n.type,n.pendingProps,a);case 19:return nh(t,n,a);case 31:return AS(t,n,a);case 22:return og(t,n,a,n.pendingProps);case 24:return Us(n),s=Cn(hn),t===null?(l=xf(),l===null&&(l=je,c=vf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:s,cache:l},Mf(n),Fa(n,hn,l)):((t.lanes&a)!==0&&(Ef(t,n),Ho(n,null,null,a),Fo()),l=t.memoizedState,c=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Fa(n,hn,s)):(s=c.cache,Fa(n,hn,s),s!==l.cache&&_f(n,[hn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&Wl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Ar(t,n),yn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ya(t){t.flags|=4}function ah(t,n,a,s,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?q_(n,s):q_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(Jg())t.flags|=8192;else throw Ps=eu,Sf}else t.flags&=-16777217}function vg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!j_(n))if(Jg())t.flags|=8192;else throw Ps=eu,Sf}function xu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nl():536870912,t.lanes|=n,Ur|=n)}function qo(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function wS(t,n,a){var s=n.pendingProps;switch(df(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ma(hn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yr(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mf())),Je(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ya(n),c!==null?(Je(n),vg(n,c)):(Je(n),ah(n,l,null,s,a))):c?c!==t.memoizedState?(ya(n),Je(n),vg(n,c)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ya(n),Je(n),ah(n,l,t,s,a)),null;case 27:if(mt(n),a=qe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Ft.current,yr(n)?Km(n):(t=B_(l,s,a),n.stateNode=t,ya(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),n.subtreeFlags&=-33554433,null}if(c=Ft.current,yr(n))Km(n);else{var g=il(qe.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?g.createElement(l,{is:s.is}):g.createElement(l)}}c[wt]=n,c[jt]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Nn(c,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ya(n)}}return Je(n),n.subtreeFlags&=-33554433,ah(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=qe.current,yr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,l=En,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[wt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||__(t.nodeValue,a)),t||Ba(n,!0)}else t=il(t).createTextNode(s),t[wt]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=yr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[wt]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=yr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[wt]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),l=!1}else l=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),xu(n,n.updateQueue),Je(n),null);case 4:return T(),t===null&&Fh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return ma(n.type),Je(n),null;case 19:if(wf(n),s=n.memoizedState,s===null)return Je(n),null;if(l=(n.flags&128)!==0,c=s.rendering,c===null)if(l)qo(s,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=su(t),c!==null){for(n.flags|=128,qo(s,!1),t=c.updateQueue,n.updateQueue=t,xu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ym(a,t),a=a.sibling;return Go(n,Dn.current&1|2),ve&&da(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&k()>Nu&&(n.flags|=128,l=!0,qo(s,!1),n.lanes=4194304)}else{if(!l)if(t=su(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,xu(n,t),qo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!ve)return Je(n),null}else 2*k()-s.renderingStartTime>Nu&&a!==536870912&&(n.flags|=128,l=!0,qo(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=k(),t.sibling=null,c=Dn.current,c=l?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ve?Go(n,c):(a=c,se(wn,n),se(Dn,a),zn===null&&(zn=n)),ve&&da(n,s.treeForkCount),t}return Je(n),null;case 22:case 23:return si(n),Rf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&xu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Gt(Ls),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ma(hn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(r(156,n.tag))}function DS(t,n){switch(df(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ma(hn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));Cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return wf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return ma(n.type),null;case 22:case 23:return si(n),Rf(),t!==null&&Gt(Ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ma(hn),null;case 25:return null;default:return null}}function yg(t,n){switch(df(n),n.tag){case 3:ma(hn),T();break;case 26:case 27:case 5:mt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:wf(n);break;case 10:ma(n.type);break;case 22:case 23:si(n),Rf(),t!==null&&Gt(Ls);break;case 24:ma(hn)}}function jo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&t)===t){s=void 0;var c=a.create,g=a.inst;s=c(),g.destroy=s}a=a.next}while(a!==l)}}catch(E){Fe(n,n.return,E)}}function ja(t,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,l=n;var O=a,W=E;try{W()}catch(it){Fe(l,O,it)}}}s=s.next}while(s!==c)}}catch(it){Fe(n,n.return,it)}}function xg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{u0(n,a)}catch(s){Fe(t,t.return,s)}}}function Sg(t,n,a){a.props=Bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function Yi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,c=ca(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=C_(c)),s=l.ref;break;case 7:if(t.stateNode===null){var g=new ci(t);m(t.child,!1,xM,g,void 0,void 0),t.stateNode=g}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(E){Fe(t,n,E)}}function Un(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){Fe(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Fe(t,n,l)}else a.current=null}function Su(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)O_(t.stateNode,n[a])}function Mg(t){for(var n=t.return;n!==null&&(rh(n)&&O_(t.stateNode,n.stateNode),!sh(n));)n=n.return}function Wo(t){for(var n=t.return;n!==null&&(rh(n)&&SM(t.stateNode,n.stateNode),!sh(n));)n=n.return}function sh(t){return t.tag===5||t.tag===3||t.tag===27}function rh(t){return t&&t.tag===7&&t.stateNode!==null}function oh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){Fe(t,t.return,l)}}function lh(t,n,a){try{var s=t.stateNode;nM(s,t.type,a,n),s[jt]=n}catch(l){Fe(t,t.return,l)}}function Eg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ts(t.type)||t.tag===4}function uh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi)),Su(t,s),De=!0;else if(l!==4&&(l===27&&(Su(t,s),s=null,ts(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(ch(t,n,a,s),t=t.sibling;t!==null;)ch(t,n,a,s),t=t.sibling}function Mu(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),Su(t,s),De=!0;else if(l!==4&&(l===27&&(Su(t,s),s=null,ts(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Mu(t,n,a,s),t=t.sibling;t!==null;)Mu(t,n,a,s),t=t.sibling}function Tg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,s,a),n[wt]=t,n[jt]=a}catch(c){Fe(t,t.return,c)}}var Eu=!1,ri=null;function bg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Eu=!0)}var qi=null;function Ag(){var t=qi;return qi=null,t}var jn=0;function Rr(t,n,a,s,l){return jn=0,Rg(t.child,n,a,s,l)}function Rg(t,n,a,s,l){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(s!==null){var E=jh(g);s.push(E),E.view&&(c=!0)}else c||jh(g).view&&(c=!0);Eu=!0,A_(g,jn===0?n:n+"_"+jn,a),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Rg(t.child,n,a,s,l)&&(c=!0));t=t.sibling}return c}function ji(t,n){for(;t!==null;)t.tag===5?R_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ji(t.child,n)),t=t.sibling}function Tu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Tu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=fa(n.default,n.share),n!=="none"&&(Rr(t,a,n,null,!1)||ji(t.child,!1))}t=t.sibling}}function fh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,l=ca(s,a),c=fa(s.default,a.paired?s.share:s.enter);c!=="none"?Rr(t,l,c,null,!1)?(Tu(t),a.paired||n||Pr(t,s.onEnter)):ji(t.child,!1):Tu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)fh(t,n),t=t.sibling;else Tu(t)}function hh(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var c=fa(a.default,a.share);if(c!=="none"&&(Rr(t,s,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Pr(t,a.onShare)):ji(t.child,!1)),n.delete(s),n.size===0)break}}}hh(t)}t=t.sibling}}}function dh(t){if(t.tag===30){var n=t.memoizedProps,a=ca(n,t.stateNode),s=ri!==null?ri.get(a):void 0,l=fa(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(Rr(t,a,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,ri.delete(a),Pr(t,n.onShare)):Pr(t,n.onExit):ji(t.child,!1)),ri!==null&&hh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dh(t),t=t.sibling;else ri!==null&&hh(t)}function Cg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ca(n,t.stateNode);n=fa(n.default,n.update),t.flags&=-5,n!=="none"&&Rr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Cg(t);t=t.sibling}}function ph(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ji(t.child,!1))}ph(t)}t=t.sibling}}function bu(t){if(t.tag===30)t.stateNode.paired=null,ji(t.child,!1),ph(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bu(t),t=t.sibling;else ph(t)}function wg(t){for(t=t.child;t!==null;)t.tag===30?ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&wg(t),t=t.sibling}function mh(t,n,a,s,l,c,g){for(var E=!1;n!==null;){if(n.tag===5){var O=n.stateNode;if(c!==null&&jn<c.length){var W=c[jn],it=jh(O);(W.view||it.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(it.clip)gt=!0;else{gt=W.rect;var q=it.rect;gt=gt.y!==q.y||gt.x!==q.x||gt.height!==q.height||gt.width!==q.width}gt&&(t.flags|=4),it.abs?it=!W.abs:(W=W.rect,it=it.rect,it=W.height!==it.height||W.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&A_(O,jn===0?a:a+"_"+jn,l),E&&(t.flags&4)!==0||(qi===null&&(qi=[]),qi.push(O,jn===0?s:s+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:mh(t,n.child,a,s,l,c,g)&&(E=!0));n=n.sibling}return E}function Dg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,l=ca(a,s),c=fa(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;jn=0,l=mh(s,E,l,l,c,g,!1),(t.flags&4)!==0&&l&&Pr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Dg(t);t=t.sibling}}var Tn=!1,Ie=!1,Wi=!1,gh=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,bn=null,Zi=!1,Zo=!1,Au=!1,_h=!1;function US(t,n,a){if(t=t.containerInfo,Vh=Yr,t=Pm(t),nf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var E=0,O=-1,W=-1,it=0,gt=0,q=t,tt=null;e:for(;;){for(var Lt;q!==s||c!==0&&q.nodeType!==3||(O=E+c),q!==g||l!==0&&q.nodeType!==3||(W=E+l),q.nodeType===3&&(E+=q.nodeValue.length),(Lt=q.firstChild)!==null;)tt=q,q=Lt;for(;;){if(q===t)break e;if(tt===s&&++it===c&&(O=E),tt===g&&++gt===l&&(W=E),(Lt=q.nextSibling)!==null)break;q=tt,tt=q.parentNode}q=Lt}s=O===-1||W===-1?null:{start:O,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Xh={focusedElem:t,selectionRange:s},Yr=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&dh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&bg(t),Ru(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&dh(s),Ru(a);continue}else if(s!==null&&s.memoizedState!==null){a&&bg(t),Ru(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,bn=s):(a&&Cg(t),Ru(a))}}ri=null}function Ru(t){for(;bn!==null;){var n=bn,a=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var g=Bs(n.type,l);a=c.getSnapshotBeforeUpdate(g,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Fe(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Kh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Kh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ca(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=fa(l.default,l.update),l!=="none"&&Rr(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,bn=s;break}bn=n.return}}function Ng(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(t,a),s&4&&jo(5,a);break;case 1:if(Ki(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var l=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}s&64&&xg(a),s&512&&Yi(a,a.return);break;case 3:if(Ki(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{u0(t,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&s&4&&Tg(a);case 26:case 5:Ki(t,a),n===null&&s&4&&oh(a),s&512&&Yi(a,a.return);break;case 12:Ki(t,a);break;case 31:Ki(t,a),s&4&&zg(t,a);break;case 13:Ki(t,a),s&4&&Ig(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=XS.bind(null,a),TM(t,a))));break;case 22:if(s=a.memoizedState!==null||Tn,!s){var c=n!==null&&n.memoizedState!==null||Ie;n=Tn,l=Ie,Tn=s,(Ie=c)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ni(t,a,s)):Ki(t,a),Tn=n,Ie=l}break;case 30:Ki(t,a),s&512&&Yi(a,a.return);break;case 7:s&512&&Yi(a,a.return);default:Ki(t,a)}}function vh(t,n){for(t=t.child;t!==null;)Lg(t,n),t=t.sibling}function Lg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(O){Fe(t,t.return,O)}yh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(O){Fe(t,t.return,O)}break;case 18:try{var E=t.stateNode;n?b_(E,!0):b_(t.stateNode,!1)}catch(O){Fe(t,t.return,O)}break;case 22:case 23:t.memoizedState===null&&vh(t,n);break;default:vh(t,n)}}function yh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:Lg(a,s);break t;case 22:a.memoizedState===null&&yh(a,s);break t;default:yh(a,s)}}t=t.sibling}}function Og(t){var n=t.alternate;n!==null&&(t.alternate=null,Og(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ne(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,Wn=!1;function Di(t,n,a){for(a=a.child;a!==null;)Pg(t,n,a),a=a.sibling}function Pg(t,n,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:Ie||Un(a,n),Di(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ie&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||Un(a,n),Wo(a);var s=nn,l=Wn;ts(a.type)&&(nn=a.stateNode,Wn=!1),Di(t,n,a),F_(a.stateNode,a.type,a.memoizedProps),nn=s,Wn=l;break;case 5:Ie||Un(a,n),Wo(a);case 6:if(a.tag===6&&Wo(a),s=nn,l=Wn,nn=null,Di(t,n,a),nn=s,Wn=l,nn!==null)if(Wn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),De=!0}catch(c){Fe(a,n,c)}else try{nn.removeChild(a.stateNode),De=!0}catch(c){Fe(a,n,c)}break;case 18:nn!==null&&(Wn?(t=nn,T_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qr(t)):T_(nn,a.stateNode));break;case 4:s=nn,l=Wn,nn=a.stateNode.containerInfo,Wn=!0,Di(t,n,a),nn=s,Wn=l;break;case 0:case 11:case 14:case 15:ja(2,a,n),Ie||ja(4,a,n),Di(t,n,a);break;case 1:Ie||(Un(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Sg(a,n,s)),Di(t,n,a);break;case 21:Di(t,n,a);break;case 22:Ie=(s=Ie)||a.memoizedState!==null,Di(t,n,a),Ie=s;break;case 30:Un(a,n),Di(t,n,a);break;case 7:Ie||Un(a,n),Di(t,n,a);break;default:Di(t,n,a)}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(a){Fe(n,n.return,a)}}}function Ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(a){Fe(n,n.return,a)}}function NS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ug),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ug),n;default:throw Error(r(435,t.tag))}}function Cu(t,n){var a=NS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=kS.bind(null,t,s);s.then(l,l)}})}function Vn(t,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],g=t,E=n,O=E;t:for(;O!==null;){switch(O.tag){case 27:if(ts(O.type)){nn=O.stateNode,Wn=!1;break t}break;case 5:nn=O.stateNode,Wn=!1;break t;case 3:case 4:nn=O.stateNode.containerInfo,Wn=!0;break t}O=O.return}if(nn===null)throw Error(r(160));Pg(g,E,c),nn=null,Wn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,t,a),n=n.sibling}var Ui=null;function Bg(t,n,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var g=s[c];g.ref.impl=g.nextImpl}Vn(n,t,a),Xn(t),l&4&&(ja(3,t,t.return),jo(3,t),ja(5,t,t.return));break;case 1:Vn(n,t,a),Xn(t),l&512&&(Ie||s===null||Un(s,s.return)),l&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ui,Vn(n,t,a),Xn(t),l&512&&(Ie||s===null||Un(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=S_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Ne]||s[wt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),Nn(s,n,a),s[wt]=t,we(s),n=s;break t;case"link":if(c=Y_("link","href",l).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(s=c[g],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}s=l.createElement(n),Nn(s,n,a),l.head.appendChild(s);break;case"meta":if(c=Y_("meta","content",l).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(s=c[g],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}s=l.createElement(n),Nn(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[wt]=t,we(s),n=s}t.stateNode=n}else Tn||id(c,t.type,t.stateNode);else t.stateNode=k_(c,a,t.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||Ie||n.parentNode.removeChild(n)):l.count--,a===null?Tn||id(c,t.type,t.stateNode):k_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&lh(t,t.memoizedProps,s.memoizedProps);break;case 27:Vn(n,t,a),Xn(t),l&512&&(Ie||s===null||Un(s,s.return)),s!==null&&l&4&&lh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=Wi,Wi=!1,Vn(n,t,a),Wi=c,Xn(t),l&512&&(Ie||s===null||Un(s,s.return)),t.flags&32){n=t.stateNode;try{ur(n,""),De=!0}catch(it){Fe(t,t.return,it)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,lh(t,n,s!==null?s.memoizedProps:n)),l&1024&&(gh=!0);break;case 6:if(Vn(n,t,a),Xn(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(it){Fe(t,t.return,it)}}break;case 3:if(De=!1,Xu=null,c=Ui,Ui=al(n.containerInfo),Vn(n,t,a),Ui=c,Xn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qr(n.containerInfo)}catch(it){Fe(t,t.return,it)}gh&&(gh=!1,Fg(t)),De=!1;break;case 4:l=Wi,Wi=Tn,s=sm(),c=Ui,Ui=al(t.stateNode.containerInfo),Vn(n,t,a),Xn(t),Ui=c,De&&Zo&&(Au=!0),De=s,Wi=l;break;case 12:Vn(n,t,a),Xn(t);break;case 31:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 13:Vn(n,t,a),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Uu=k()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 22:c=t.memoizedState!==null,g=s!==null&&s.memoizedState!==null;var E=Tn,O=Ie,W=Wi;Tn=E||c,Wi=W||c,Ie=O||g,Vn(n,t,a),Ie=O,Wi=W,Tn=E,Xn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||g||Tn||Ie||(n=g||Ie,a=Tn,s=Ie,Tn=c||Tn,Ie=n,Wa(t,2),Tn=a,Ie=s),!c&&Wi||vh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Cu(t,a))));break;case 19:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cu(t,n)));break;case 30:l&512&&(Ie||s===null||Un(s,s.return)),l=sm(),c=Zo,g=(a&335544064)===a,E=t.memoizedProps,Zo=g&&fa(E.default,E.update)!=="none",Vn(n,t,a),Xn(t),g&&s!==null&&De&&(t.flags|=4),Zo=c,De=l;break;case 21:break;case 7:l&512&&(Ie||s===null||Un(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Vn(n,t,a),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Eg(s)){a=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(rh(l)){var c=l.stateNode;s===null?s=[c]:s.push(c)}if(sh(l))break;l=l.return}var g=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var E=a.stateNode,O=uh(t);Mu(t,O,E,g);break;case 5:var W=a.stateNode;a.flags&32&&(ur(W,""),a.flags&=-33);var it=uh(t);Mu(t,it,W,g);break;case 3:case 4:var gt=a.stateNode.containerInfo,q=uh(t);ch(t,q,gt,g);break;default:throw Error(r(161))}}catch(tt){Fe(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Yr=!0,n.reset(),Yr=!1),t=t.sibling}}function Cr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Hg(n,t),n=n.sibling;else Dg(n)}function Hg(t,n){var a=t.alternate;if(a===null)fh(t,!1);else switch(t.tag){case 3:if(_h=Zi=!1,Ag(),Cr(n,t),!Zi&&!Au){if(t=qi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var l=t[s+1];R_(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),_h=!0}qi=null;break;case 5:Cr(n,t);break;case 4:s=Zi,Zi=!1,Cr(n,t),Zi&&(Au=!0),Zi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?fh(t,!1):Cr(n,t));break;case 30:s=Zi,l=Ag(),Zi=!1,Cr(n,t),Zi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=ca(c,g),g=ca(a.memoizedProps,g);var E=fa(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,jn=0,n=mh(t,a,n,g,E,c,!0),jn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Pr(t,t.memoizedProps.onUpdate),qi=l):l!==null&&(l.push.apply(l,qi),qi=l),Zi=(t.flags&32)!==0?!0:s;break;default:Cr(n,t)}}function Ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ng(t,n.alternate,n),n=n.sibling}function Wa(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ja(4,a,a.return),Wa(a,s);break;case 1:Un(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Sg(a,a.return,l),Wa(a,s);break;case 27:(s&2)!==0&&F_(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||Wo(a),Wa(a,s);break;case 6:Wo(a);break;case 26:Un(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Ie||l.parentNode.removeChild(l),Wa(a,s);break;case 22:a.memoizedState===null&&Wa(a,s);break;case 30:Un(a,a.return),Wa(a,s);break;case 7:Un(a,a.return);default:Wa(a,s)}t=t.sibling}}function Ni(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=t,c=n,g=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ni(l,c,a),jo(4,c);break;case 1:if(Ni(l,c,a),s=c,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(it){Fe(s,s.return,it)}if(s=c,l=s.updateQueue,l!==null){var O=s.stateNode;try{var W=l.shared.hiddenCallbacks;if(W!==null)for(l.shared.hiddenCallbacks=null,l=0;l<W.length;l++)l0(W[l],O)}catch(it){Fe(s,s.return,it)}}E&&g&64&&xg(c),Yi(c,c.return);break;case 27:(a&2)!==0&&Tg(c);case 5:c.tag!==5&&c.tag!==27||Mg(c),Ni(l,c,a),E&&s===null&&g&4&&oh(c),Yi(c,c.return);break;case 6:Mg(c);break;case 26:O=c.stateNode,c.memoizedState!==null||O===null||Tn||id(al(O.ownerDocument),c.type,O),Ni(l,c,a),E&&s===null&&g&4&&oh(c),Yi(c,c.return);break;case 12:Ni(l,c,a);break;case 31:Ni(l,c,a),E&&g&4&&zg(l,c);break;case 13:Ni(l,c,a),E&&g&4&&Ig(l,c);break;case 22:c.memoizedState===null&&Ni(l,c,a),Yi(c,c.return);break;case 30:Ni(l,c,a),Yi(c,c.return);break;case 7:Yi(c,c.return);default:Ni(l,c,a)}n=n.sibling}}function xh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Oo(a))}function Sh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Oo(t))}function Mi(t,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)Gg(t,n,a,s),n=n.sibling;else l&&wg(n)}function Gg(t,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&bu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),c&2048&&jo(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),l&&_h&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Oo(c)));break;case 12:if(c&2048){Mi(t,n,a,s),c=n.stateNode;try{var g=n.memoizedProps,E=g.id,O=g.onPostCommit;typeof O=="function"&&O(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Fe(n,n.return,W)}}else Mi(t,n,a,s);break;case 31:Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:g=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&bu(E),g._visibility&2?Mi(t,n,a,s):Ko(t,n)):(l&&E!==null&&E.memoizedState!==null&&bu(n),g._visibility&2?Mi(t,n,a,s):(g._visibility|=2,wr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&xh(E,n);break;case 24:Mi(t,n,a,s),c&2048&&Sh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(ji(c.child,!0),ji(n.child,!0))),Mi(t,n,a,s);break;default:Mi(t,n,a,s)}}function wr(t,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,E=a,O=s,W=g.flags;switch(g.tag){case 0:case 11:case 15:wr(c,g,E,O,l),jo(8,g);break;case 23:break;case 22:var it=g.stateNode;g.memoizedState!==null?it._visibility&2?wr(c,g,E,O,l):Ko(c,g):(it._visibility|=2,wr(c,g,E,O,l)),l&&W&2048&&xh(g.alternate,g);break;case 24:wr(c,g,E,O,l),l&&W&2048&&Sh(g.alternate,g);break;default:wr(c,g,E,O,l)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,l=s.flags;switch(s.tag){case 22:Ko(a,s),l&2048&&xh(s.alternate,s);break;case 24:Ko(a,s),l&2048&&Sh(s.alternate,s);break;default:Ko(a,s)}n=n.sibling}}var Fs=8192;function Hs(t,n,a){if(t.subtreeFlags&Fs)for(t=t.child;t!==null;)Vg(t,n,a),t=t.sibling}function Vg(t,n,a){switch(t.tag){case 26:Hs(t,n,a),t.flags&Fs&&(t.memoizedState!==null?BM(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Z_(a,t)));break;case 5:Hs(t,n,a),t.flags&Fs&&(t=t.stateNode,(n&335544128)===n&&Z_(a,t));break;case 3:case 4:var s=Ui;Ui=al(t.stateNode.containerInfo),Hs(t,n,a),Ui=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Fs,Fs=16777216,Hs(t,n,a),Fs=s):Hs(t,n,a));break;case 30:if((t.flags&Fs)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(s,l)}Hs(t,n,a);break;default:Hs(t,n,a)}}function Xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,Yg(s,t)}Xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kg(t),t=t.sibling}function kg(t){switch(t.tag){case 0:case 11:case 15:Qo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Qo(t);break;case 12:Qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,wu(t)):Qo(t);break;default:Qo(t)}}function wu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,Yg(s,t)}Xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),wu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wu(n));break;default:wu(n)}t=t.sibling}}function Yg(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Oo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,bn=s;else t:for(a=t;bn!==null;){s=bn;var l=s.sibling,c=s.return;if(Og(s),s===a){bn=null;break t}if(l!==null){l.return=c,bn=l;break t}bn=c}}}var LS={getCacheForType:function(t){var n=Cn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(hn).controller.signal}},OS=typeof WeakMap=="function"?WeakMap:Map,Oe=0,je=null,Se=null,be=0,Be=0,oi=null,Za=!1,Dr=!1,Mh=!1,xa=0,ln=0,Ka=0,Gs=0,Du=0,li=0,Ur=0,Jo=null,Zn=null,Eh=!1,Uu=0,qg=0,Nu=1/0,Lu=null,Qa=null,sn=0,Li=null,Vs=null,Qi=0,Th=0,bh=null,jg=null,Nr=null,Lr=null,Or=null,$o=0,Ou=null;function ui(){return(Oe&2)!==0&&be!==0?be&-be:Ut.T!==null?Ph():Et()}function Wg(){if(li===0)if((be&536870912)===0||ve){var t=oa;oa<<=1,(oa&3932160)===0&&(oa=262144),li=t}else li=536870912;return t=wn.current,t!==null&&(t.flags|=32),li}function Pr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=C_(ca(t.memoizedProps,a))),Lr===null&&(Lr=[]),Lr.push(n.bind(null,s))}}function Kn(t,n,a){(t===je&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(zr(t,0),Ja(t,be,li,!1)),Es(t,a),((Oe&2)===0||t!==je)&&(t===je&&((Oe&2)===0&&(Gs|=a),ln===4&&Ja(t,be,li,!1)),Ji(t))}function Zg(t,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Na(t,n),l=s?IS(t,n):Rh(t,n,!0),c=s;do{if(l===0){Dr&&!s&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!PS(a)){l=Rh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;l=Jo;var O=E.current.memoizedState.isDehydrated;if(O&&(zr(E,g).flags|=256),g=Rh(E,g,!1),g!==2&&g!==6){if(Mh&&!O){E.errorRecoveryDisabledLanes|=c,Gs|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=g}if(c=!1,l!==2)continue}}if(l===1){zr(t,0),Ja(t,n,0,!0);break}t:{switch(s=t,c=l,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ja(s,n,li,!Za);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=Uu+300-k(),10<l)){if(Ja(s,n,li,!Za),Ms(s,0,!0)!==0)break t;Qi=n,s.timeoutHandle=qh(Kg.bind(null,s,a,Zn,Lu,Eh,n,li,Gs,Ur,Za,c,"Throttled",-0,0),l);break t}Kg(s,a,Zn,Lu,Eh,n,li,Gs,Ur,Za,c,null,-0,0)}}break}while(!0);Ji(t)}function Kg(t,n,a,s,l,c,g,E,O,W,it,gt,q,tt){t.timeoutHandle=-1;var Lt=n.subtreeFlags,Wt=(c&335544064)===c;if(gt=null,(Wt||Lt&8192||(Lt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},ri=null,Vg(n,c,gt),Wt&&(Lt=gt,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Lt.count++,Lt.waitingForViewTransition=!0,Lt=ol.bind(Lt),Wt.finished.then(Lt,Lt))),Lt=(c&62914560)===c?Uu-k():(c&4194048)===c?qg-k():0,Lt=FM(gt,Lt),Lt!==null)){Qi=c,t.cancelPendingCommit=Lt(a_.bind(null,t,n,c,a,s,l,g,E,O,W,it,gt,null,q,tt)),Ja(t,c,g,!W);return}a_(t,n,c,a,s,l,g,E,O,W,it,gt)}function PS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],c=l.getSnapshot;l=l.value;try{if(!ai(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,s){n=Ul(t,n),n&=~Du,n&=~Gs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var c=31-On(l),g=1<<c;s[c]=-1,l&=~g}a!==0&&R(t,a,n)}function Pu(){return(Oe&6)===0?(tl(0),!1):!0}function Ah(){if(Se!==null){if(Be===0)var t=Se.return;else t=Se,pa=ws=null,Of(t),Mr=null,Io=0,t=Se;for(;t!==null;)yg(t.alternate,t),t=t.return;Se=null}}function zr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,sM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,Ah(),je=t,Se=a=ha(t.current,null),be=n,Be=0,oi=null,Za=!1,Dr=Na(t,n),Mh=!1,Ur=li=Du=Gs=Ka=ln=0,Zn=Jo=null,Eh=!1,xa=Ul(t,n),Xl(),a}function Qg(t,n){de=null,Ut.H=pu,n===Sr||n===tu?(n=a0(),Be=3):n===Sf?(n=a0(),Be=4):Be=n===Zf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Se===null&&(ln=1,mu(t,vi(n,t.current)))}function Jg(){var t=wn.current;return t===null?!0:(be&4194048)===be?zn===null:(be&62914560)===be||(be&536870912)!==0?t===zn:!1}function $g(){var t=Ut.H;return Ut.H=pu,t===null?pu:t}function t_(){var t=Ut.A;return Ut.A=LS,t}function zu(){ln=4,Za||(be&4194048)!==be&&wn.current!==null||(Dr=!0),(Ka&134217727)===0&&(Gs&134217727)===0||je===null||Ja(je,be,li,!1)}function Rh(t,n,a){var s=Oe;Oe|=2;var l=$g(),c=t_();(je!==t||be!==n)&&(Lu=null,zr(t,n)),n=!1;var g=ln;t:do try{if(Be!==0&&Se!==null){var E=Se,O=oi;switch(Be){case 8:Ah(),g=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var W=Be;if(Be=0,oi=null,Ir(t,E,O,W),a&&Dr){g=0;break t}break;default:W=Be,Be=0,oi=null,Ir(t,E,O,W)}}zS(),g=ln;break}catch(it){Qg(t,it)}while(!0);return n&&t.shellSuspendCounter++,pa=ws=null,Oe=s,Ut.H=l,Ut.A=c,Se===null&&(je=null,be=0,Xl()),g}function zS(){for(;Se!==null;)e_(Se)}function IS(t,n){var a=Oe;Oe|=2;var s=$g(),l=t_();je!==t||be!==n?(Lu=null,Nu=k()+500,zr(t,n)):Dr=Na(t,n);t:do try{if(Be!==0&&Se!==null){n=Se;var c=oi;e:switch(Be){case 1:Be=0,oi=null,Ir(t,n,c,1);break;case 2:case 9:if(n0(c)){Be=0,oi=null,n_(n);break}n=function(){Be!==2&&Be!==9||je!==t||(Be=7),Ji(t)},c.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:n0(c)?(Be=0,oi=null,n_(n)):(Be=0,oi=null,Ir(t,n,c,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var E=Se;if(g?j_(g):E.stateNode.complete){Be=0,oi=null;var O=E.sibling;if(O!==null)Se=O;else{var W=E.return;W!==null?(Se=W,Iu(W)):Se=null}break e}}Be=0,oi=null,Ir(t,n,c,5);break;case 6:Be=0,oi=null,Ir(t,n,c,6);break;case 8:Ah(),ln=6;break t;default:throw Error(r(462))}}BS();break}catch(it){Qg(t,it)}while(!0);return pa=ws=null,Ut.H=s,Ut.A=l,Oe=a,Se!==null?0:(je=null,be=0,Xl(),ln)}function BS(){for(;Se!==null&&!zt();)e_(Se)}function e_(t){var n=_g(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?Iu(t):Se=n}function n_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=cg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=cg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Of(n);var s=n;s===En&&(ve?(Zl(s),s.tag===5&&s.stateNode!=null&&(Qe=s.stateNode)):(Zl(s),ve=!0));default:yg(a,n),n=Se=Ym(n,xa),n=_g(a,n,xa)}t.memoizedProps=t.pendingProps,n===null?Iu(t):Se=n}function Ir(t,n,a,s){pa=ws=null,Of(n),Mr=null,Io=0;var l=n.return;try{if(bS(t,l,n,a,be)){ln=1,mu(t,vi(a,t.current)),Se=null;return}}catch(c){if(l!==null)throw Se=l,c;ln=1,mu(t,vi(a,t.current)),Se=null;return}n.flags&32768?(ve||s===1?t=!0:Dr||(be&536870912)!==0?t=!1:(Za=t=!0,(s===2||s===9||s===3||s===6)&&(s=wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),i_(n,t)):Iu(n)}function Iu(t){var n=t;do{if((n.flags&32768)!==0){i_(n,Za);return}t=n.return;var a=wS(n.alternate,n,xa);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);ln===0&&(ln=5)}function i_(t,n){do{var a=DS(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);ln=6,Se=null}function a_(t,n,a,s,l,c,g,E,O,W,it,gt){t.cancelPendingCommit=null;do Bu();while(sn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===je&&(Se=je=null,be=0),Vs=n,Li=t,Qi=a,bh=l,jg=s,FS(t,n,a,g,E,O,gt)}}function FS(t,n,a,s,l,c,g){var E=n.lanes|n.childLanes;if(Th=E,E|=lf,Bc(t,a,E,s,l,c),Lr=null,(a&335544064)===a?(Or=dS(t),s=10262):(Or=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,YS(Mt,function(){return Uh(),null})):(t.callbackNode=null,t.callbackPriority=0),Eu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Ut.T,Ut.T=null,l=Nt.p,Nt.p=2,c=Oe,Oe|=4;try{US(t,n,a)}finally{Oe=c,Nt.p=l,Ut.T=s}}sn=1,Eu?Nr=fM(g,t.containerInfo,Or,Ch,wh,GS,Dh,Uh,HS):(Ch(),wh(),Dh())}function HS(t){if(sn!==0){var n=Li.onRecoverableError;n(t,{componentStack:null})}}function GS(){sn===3&&(sn=0,Hg(Vs,Li),sn=4)}function Ch(){if(sn===1){sn=0;var t=Li,n=Vs,a=Qi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Ut.T,Ut.T=null;var l=Nt.p;Nt.p=2;var c=Oe;Oe|=4;try{Zo=Au=!1,Bg(n,t,a),a=Xh;var g=Pm(t.containerInfo),E=a.focusedElem,O=a.selectionRange;if(g!==E&&E&&E.ownerDocument&&Om(E.ownerDocument.documentElement,E)){if(O!==null&&nf(E)){var W=O.start,it=O.end;if(it===void 0&&(it=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(it,E.value.length);else{var gt=E.ownerDocument||document,q=gt&&gt.defaultView||window;if(q.getSelection){var tt=q.getSelection(),Lt=E.textContent.length,Wt=Math.min(O.start,Lt),pe=O.end===void 0?Wt:Math.min(O.end,Lt);!tt.extend&&Wt>pe&&(g=pe,pe=Wt,Wt=g);var j=Lm(E,Wt),H=Lm(E,pe);if(j&&H&&(tt.rangeCount!==1||tt.anchorNode!==j.node||tt.anchorOffset!==j.offset||tt.focusNode!==H.node||tt.focusOffset!==H.offset)){var J=gt.createRange();J.setStart(j.node,j.offset),tt.removeAllRanges(),Wt>pe?(tt.addRange(J),tt.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),tt.addRange(J))}}}}for(gt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&gt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var pt=gt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Yr=!!Vh,Xh=Vh=null}finally{Oe=c,Nt.p=l,Ut.T=s}}t.current=n,sn=2}}function wh(){if(sn===2){sn=0;var t=Li,n=Vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Ut.T,Ut.T=null;var s=Nt.p;Nt.p=2;var l=Oe;Oe|=4;try{Ng(t,n.alternate,n)}finally{Oe=l,Nt.p=s,Ut.T=a}}sn=3}}function Dh(){if(sn===4||sn===3){sn=0;var t=Nr;Nr=null,fe();var n=Li,a=Vs,s=Qi,l=jg,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?sn=5:(sn=0,Vs=Li=null,s_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Qa=null),Q(s),a=a.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Te,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=Ut.T,c=Nt.p,Nt.p=2,Ut.T=null;try{for(var g=n.onRecoverableError,E=0;E<l.length;E++){var O=l[E];g(O.value,{componentStack:O.stack})}}finally{Ut.T=a,Nt.p=c}}if(l=Lr,g=Or,Or=null,l!==null&&(Lr=null,g===null&&(g=[]),t!==null))for(O=0;O<l.length;O++)a=(0,l[O])(g),a!==void 0&&t.finished.finally(a);(Qi&3)!==0&&Bu(),Ji(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Ou?$o++:($o=0,Ou=n):($o=0,Ou=null),tl(0)}}function s_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Oo(n)))}function Bu(){return Nr!==null&&(Nr.skipTransition(),Nr=null),Ch(),wh(),Dh(),Uh()}function Uh(){if(sn!==5)return!1;var t=Li,n=Th;Th=0;var a=Q(Qi),s=Ut.T,l=Nt.p;try{Nt.p=32>a?32:a,Ut.T=null,a=bh,bh=null;var c=Li,g=Qi;if(sn=0,Vs=Li=null,Qi=0,(Oe&6)!==0)throw Error(r(331));var E=Oe;if(Oe|=4,kg(c.current),Gg(c,c.current,g,a),Oe=E,tl(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Te,c)}catch{}return!0}finally{Nt.p=l,Ut.T=s,s_(t,n)}}function r_(t,n,a){n=vi(a,n),n=Wf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(Es(t,2),Ji(t))}function Fe(t,n,a){if(t.tag===3)r_(t,t,a);else for(;n!==null;){if(n.tag===3){r_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Qa===null||!Qa.has(s))){t=vi(a,t),a=ng(2),s=Xa(n,a,2),s!==null&&(ig(a,s,n,t),Es(s,2),Ji(s));break}}n=n.return}}function Nh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new OS;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(Mh=!0,l.add(a),t=VS.bind(null,t,n,a),n.then(t,t))}function VS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,je===t&&(be&a)===a&&((ln===4||ln===3&&(be&62914560)===be&&300>k()-Uu)&&(Oe&2)===0?zr(t,0):Du|=a,Ur===be&&(Ur=0)),Ji(t)}function o_(t,n){n===0&&(n=Nl()),t=As(t,n),t!==null&&(Es(t,n),Ji(t))}function XS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),o_(t,a)}function kS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),o_(t,a)}function YS(t,n){return ae(t,n)}var Br=null,Fr=null,Lh=!1,Fu=!1,Oh=!1,$a=0;function Ji(t){t!==Fr&&t.next===null&&(Fr===null?Br=Fr=t:Fr=Fr.next=t),Fu=!0,Lh||(Lh=!0,jS())}function tl(t,n){if(!Oh&&Fu){Oh=!0;do for(var a=!1,s=Br;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var c=0;else{var g=s.suspendedLanes,E=s.pingedLanes;c=(1<<31-On(42|t)+1)-1,c&=l&~(g&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,f_(s,c))}else c=be,c=Ms(s,s===je?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Na(s,c)||(a=!0,f_(s,c));s=s.next}while(a);Oh=!1}}function qS(){l_()}function l_(){Fu=Lh=!1;var t=0;$a!==0&&aM()&&(t=$a);for(var n=k(),a=null,s=Br;s!==null;){var l=s.next,c=u_(s,n);c===0?(s.next=null,a===null?Br=l:a.next=l,l===null&&(Fr=a)):(a=s,(t!==0||(c&3)!==0)&&(Fu=!0)),s=l}sn!==0&&sn!==5||tl(t),$a!==0&&($a=0)}function u_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-On(c),E=1<<g,O=l[g];O===-1?((E&a)===0||(E&s)!==0)&&(l[g]=Ic(E,n)):O<=n&&(t.expiredLanes|=E),c&=~E}if(n=je,a=be,a=Ms(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Qt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Na(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Qt(s),Q(a)){case 2:case 8:a=Yt;break;case 32:a=Mt;break;case 268435456:a=Zt;break;default:a=Mt}return s=c_.bind(null,t),a=ae(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Qt(s),t.callbackPriority=2,t.callbackNode=null,2}function c_(t,n){if(sn!==0&&sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bu()&&t.callbackNode!==a)return null;var s=be;return s=Ms(t,t===je?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Zg(t,s,n),u_(t,k()),t.callbackNode!=null&&t.callbackNode===a?c_.bind(null,t):null)}function f_(t,n){if(Bu())return null;Zg(t,n,!0)}function jS(){rM(function(){(Oe&6)!==0?ae(Dt,qS):l_()})}function Ph(){if($a===0){var t=Ns;t===0&&(t=xs,xs<<=1,(xs&261888)===0&&(xs=256)),$a=t}return $a}function h_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(t)}function WS(t,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var c=h_((l[jt]||null).action),g=s.submitter;g&&(n=(n=g[jt]||null)?h_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var E=new Fl("action","action",null,s,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if($a!==0){var O=new FormData(l,g);Xf(a,{pending:!0,data:O,method:l.method,action:c},null,O)}}else typeof c=="function"&&(E.preventDefault(),O=new FormData(l,g),Xf(a,{pending:!0,data:O,method:l.method,action:c},c,O))},currentTarget:l}]})}}for(var zh=0;zh<of.length;zh++){var Ih=of[zh],ZS=Ih.toLowerCase(),KS=Ih[0].toUpperCase()+Ih.slice(1);wi(ZS,"on"+KS)}wi(Bm,"onAnimationEnd"),wi(Fm,"onAnimationIteration"),wi(Hm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(sS,"onTransitionRun"),wi(rS,"onTransitionStart"),wi(oS,"onTransitionCancel"),wi(Gm,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function d_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],l=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],O=E.instance,W=E.currentTarget;if(E=E.listener,O!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(it){Vl(it)}l.currentTarget=null,c=O}else for(g=0;g<s.length;g++){if(E=s[g],O=E.instance,W=E.currentTarget,E=E.listener,O!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(it){Vl(it)}l.currentTarget=null,c=O}}}}function Me(t,n){var a=n[ee];a===void 0&&(a=n[ee]=new Set);var s=t+"__bubble";a.has(s)||(p_(n,t,2,!1),a.add(s))}function Bh(t,n,a){var s=0;n&&(s|=4),p_(a,t,s,n)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function Fh(t){if(!t[Hu]){t[Hu]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(QS.has(a)||Bh(a,!1,t),Bh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hu]||(n[Hu]=!0,Bh("selectionchange",!1,n))}}function p_(t,n,a,s){switch(iv(n)){case 2:var l=XM;break;case 8:l=kM;break;default:l=sd}a=l.bind(null,n,a,t),l=void 0,!qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Hh(t,n,a,s,l){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===l)break;if(g===4)for(g=s.return;g!==null;){var O=g.tag;if((O===3||O===4)&&g.stateNode.containerInfo===l)return;g=g.return}for(;E!==null;){if(g=Le(E),g===null)return;if(O=g.tag,O===5||O===6||O===26||O===27){s=c=g;continue t}E=E.parentNode}}s=s.return}pm(function(){var W=c,it=kc(a),gt=[];t:{var q=Vm.get(t);if(q!==void 0){var tt=Fl,Lt=t;switch(t){case"keypress":if(Il(a)===0)break t;case"keydown":case"keyup":tt=Px;break;case"focusin":Lt="focus",tt=Kc;break;case"focusout":Lt="blur",tt=Kc;break;case"beforeblur":case"afterblur":tt=Kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Hx;break;case Bm:case Fm:case Hm:tt=Ax;break;case Gm:tt=Vx;break;case"scroll":case"scrollend":tt=Sx;break;case"wheel":tt=kx;break;case"copy":case"cut":case"paste":tt=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=ym;break;case"submit":tt=Bx;break;case"toggle":case"beforetoggle":tt=qx}var Wt=(n&4)!==0,pe=!Wt&&(t==="scroll"||t==="scrollend"),j=Wt?q!==null?q+"Capture":null:q;Wt=[];for(var H=W,J;H!==null;){var pt=H;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=Eo(H,j),pt!=null&&Wt.push(nl(H,pt,J))),pe)break;H=H.return}0<Wt.length&&(q=new tt(q,Lt,null,a,it),gt.push({event:q,listeners:Wt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",tt&&a!==Xc&&(Lt=a.relatedTarget||a.fromElement)&&(Le(Lt)||Lt[ie]))break t;(q||tt)&&(Lt=it.window===it?it:(tt=it.ownerDocument)?tt.defaultView||tt.parentWindow:window,q?(tt=a.relatedTarget||a.toElement,q=W,tt=tt?Le(tt):null,tt!==null&&(pe=f(tt),Wt=tt.tag,tt!==pe||Wt!==5&&Wt!==27&&Wt!==6)&&(tt=null)):(q=null,tt=W),q!==tt&&(Wt=_m,pt="onMouseLeave",j="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=ym,pt="onPointerLeave",j="onPointerEnter",H="pointer"),pe=q==null?Lt:vn(q),J=tt==null?Lt:vn(tt),Lt=new Wt(pt,H+"leave",q,a,it),Lt.target=pe,Lt.relatedTarget=J,pt=null,Le(it)===W&&(Wt=new Wt(j,H+"enter",tt,a,it),Wt.target=J,Wt.relatedTarget=pe,pt=Wt),pe=pt,Wt=q&&tt?X(q,tt,JS):null,q!==null&&m_(gt,Lt,q,Wt,!1),tt!==null&&pe!==null&&m_(gt,pe,tt,Wt,!0)))}t:{if(q=W?vn(W):window,tt=q.nodeName&&q.nodeName.toLowerCase(),tt==="select"||tt==="input"&&q.type==="file")var kt=Rm;else if(bm(q))if(Cm)kt=nS;else{kt=tS;var Ae=$x}else tt=q.nodeName,!tt||tt.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?W&&Vc(W.elementType)&&(kt=Rm):kt=eS;if(kt&&(kt=kt(t,W))){Am(gt,kt,a,it);break t}Ae&&Ae(t,q,W)}switch(Ae=W?vn(W):window,t){case"focusin":(bm(Ae)||Ae.contentEditable==="true")&&(dr=Ae,af=W,Uo=null);break;case"focusout":Uo=af=dr=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,zm(gt,a,it);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":zm(gt,a,it)}var te;if(Jc)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else hr?Em(t,a)&&(re="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(xm&&a.locale!=="ko"&&(hr||re!=="onCompositionStart"?re==="onCompositionEnd"&&hr&&(te=mm()):(Oa=it,jc="value"in Oa?Oa.value:Oa.textContent,hr=!0)),Ae=Gu(W,re),0<Ae.length&&(re=new vm(re,t,null,a,it),gt.push({event:re,listeners:Ae}),te?re.data=te:(te=Tm(a),te!==null&&(re.data=te)))),(te=Wx?Zx(t,a):Kx(t,a))&&(re=Gu(W,"onBeforeInput"),0<re.length&&(Ae=new vm("onBeforeInput","beforeinput",null,a,it),gt.push({event:Ae,listeners:re}),Ae.data=te)),WS(gt,t,W,a,it)}d_(gt,n)})}function nl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gu(t,n){for(var a=n+"Capture",s=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=Eo(t,a),l!=null&&s.unshift(nl(t,l,c)),l=Eo(t,n),l!=null&&s.push(nl(t,l,c))),t.tag===3)return s;t=t.return}return[]}function JS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function m_(t,n,a,s,l){for(var c=n._reactName,g=[];a!==null&&a!==s;){var E=a,O=E.alternate,W=E.stateNode;if(E=E.tag,O!==null&&O===s)break;E!==5&&E!==26&&E!==27||W===null||(O=W,l?(W=Eo(a,c),W!=null&&g.unshift(nl(a,W,O))):l||(W=Eo(a,c),W!=null&&g.push(nl(a,W,O)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var $S=/\r\n?/g,tM=/\u0000|\uFFFD/g;function g_(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(tM,"")}function __(t,n){return n=g_(n),g_(t)===n}function He(t,n,a,s,l,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||ur(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&ur(t,""+s);else return;break;case"className":Ol(t,"class",s);break;case"tabIndex":Ol(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ol(t,a,s);break;case"style":hm(t,s,c);return;case"data":if(n!=="object"){Ol(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Pl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",l.name,l,null),He(t,n,"formEncType",l.formEncType,l,null),He(t,n,"formMethod",l.formMethod,l,null),He(t,n,"formTarget",l.formTarget,l,null)):(He(t,n,"encType",l.encType,l,null),He(t,n,"method",l.method,l,null),He(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Pl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Vi);return;case"onScroll":s!=null&&Me("scroll",t);return;case"onScrollEnd":s!=null&&Me("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Pl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Me("beforetoggle",t),Me("toggle",t),Ll(t,"popover",s);break;case"xlinkActuate":la(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":la(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":la(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":la(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":la(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":la(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":la(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":la(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":la(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ll(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=yx.get(a)||a,Ll(t,a,s);else return}De=!0}function Gh(t,n,a,s,l,c){switch(a){case"style":hm(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")ur(t,s);else if(typeof s=="number"||typeof s=="bigint")ur(t,""+s);else return;break;case"onScroll":s!=null&&Me("scroll",t);return;case"onScrollEnd":s!=null&&Me("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Vi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Fn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[jt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,l);break t}De=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ll(t,a,s)}return}De=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var s=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,c,g,a,null)}}l&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var E=c=g=l=null,O=null,W=null;for(s in a)if(a.hasOwnProperty(s)){var it=a[s];if(it!=null)switch(s){case"name":l=it;break;case"type":g=it;break;case"checked":O=it;break;case"defaultChecked":W=it;break;case"value":c=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:He(t,n,s,it,a,null)}}lm(t,c,E,O,W,g,l,!1);return;case"select":Me("invalid",t),s=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(E=a[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:He(t,n,l,E,a,null)}n=c,a=g,t.multiple=!!s,n!=null?lr(t,!!s,n,!1):a!=null&&lr(t,!!s,a,!0);return;case"textarea":Me("invalid",t),c=l=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:He(t,n,g,E,a,null)}cm(t,s,l,c);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:He(t,n,O,s,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(s=0;s<el.length;s++)Me(el[s],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,W,s,a,null)}return;default:if(Vc(n)){for(it in a)a.hasOwnProperty(it)&&(s=a[it],s!==void 0&&Gh(t,n,it,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&He(t,n,E,s,a,null))}var eM={};function nM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,E=null,O=null,W=null,it=null;for(tt in a){var gt=a[tt];if(a.hasOwnProperty(tt)&&gt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":O=gt;default:s.hasOwnProperty(tt)||He(t,n,tt,null,s,gt)}}for(var q in s){var tt=s[q];if(gt=a[q],s.hasOwnProperty(q)&&(tt!=null||gt!=null))switch(q){case"type":tt!==gt&&(De=!0),c=tt;break;case"name":tt!==gt&&(De=!0),l=tt;break;case"checked":tt!==gt&&(De=!0),W=tt;break;case"defaultChecked":tt!==gt&&(De=!0),it=tt;break;case"value":tt!==gt&&(De=!0),g=tt;break;case"defaultValue":tt!==gt&&(De=!0),E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:tt!==gt&&He(t,n,q,tt,s,gt)}}Hc(t,g,E,O,W,it,c,l);return;case"select":tt=g=E=q=null;for(c in a)if(O=a[c],a.hasOwnProperty(c)&&O!=null)switch(c){case"value":break;case"multiple":tt=O;default:s.hasOwnProperty(c)||He(t,n,c,null,s,O)}for(l in s)if(c=s[l],O=a[l],s.hasOwnProperty(l)&&(c!=null||O!=null))switch(l){case"value":c!==O&&(De=!0),q=c;break;case"defaultValue":c!==O&&(De=!0),E=c;break;case"multiple":c!==O&&(De=!0),g=c;default:c!==O&&He(t,n,l,c,s,O)}n=E,a=g,s=tt,q!=null?lr(t,!!a,q,!1):!!s!=!!a&&(n!=null?lr(t,!!a,n,!0):lr(t,!!a,a?[]:"",!1));return;case"textarea":tt=q=null;for(E in a)if(l=a[E],a.hasOwnProperty(E)&&l!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(t,n,E,null,s,l)}for(g in s)if(l=s[g],c=a[g],s.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":l!==c&&(De=!0),q=l;break;case"defaultValue":l!==c&&(De=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==c&&He(t,n,g,l,s,c)}um(t,q,tt);return;case"option":for(var Lt in a)if(q=a[Lt],a.hasOwnProperty(Lt)&&q!=null&&!s.hasOwnProperty(Lt))switch(Lt){case"selected":t.selected=!1;break;default:He(t,n,Lt,null,s,q)}for(O in s)if(q=s[O],tt=a[O],s.hasOwnProperty(O)&&q!==tt&&(q!=null||tt!=null))switch(O){case"selected":q!==tt&&(De=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:He(t,n,O,q,s,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)q=a[Wt],a.hasOwnProperty(Wt)&&q!=null&&!s.hasOwnProperty(Wt)&&He(t,n,Wt,null,s,q);for(W in s)if(q=s[W],tt=a[W],s.hasOwnProperty(W)&&q!==tt&&(q!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(r(137,n));break;default:He(t,n,W,q,s,tt)}return;default:if(Vc(n)){for(var pe in a)q=a[pe],a.hasOwnProperty(pe)&&q!==void 0&&!s.hasOwnProperty(pe)&&Gh(t,n,pe,void 0,s,q);for(it in s)q=s[it],tt=a[it],!s.hasOwnProperty(it)||q===tt||q===void 0&&tt===void 0||Gh(t,n,it,q,s,tt);return}}for(var j in a)q=a[j],a.hasOwnProperty(j)&&q!=null&&!s.hasOwnProperty(j)&&He(t,n,j,null,s,q);for(gt in s)q=s[gt],tt=a[gt],!s.hasOwnProperty(gt)||q===tt||q==null&&tt==null||He(t,n,gt,q,s,tt)}function v_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],c=l.transferSize,g=l.initiatorType,E=l.duration;if(c&&E&&v_(g)){for(g=0,E=l.responseEnd,s+=1;s<a.length;s++){var O=a[s],W=O.startTime;if(W>E)break;var it=O.transferSize,gt=O.initiatorType;it&&v_(gt)&&(O=O.responseEnd,g+=it*(O<E?1:(E-W)/(O-W)))}if(--s,n+=8*(c+g)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vh=null,Xh=null;function il(t){return t.nodeType===9?t:t.ownerDocument}function y_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function S_(t,n,a,s){return a=il(a).createElement(t),a[wt]=s,a[jt]=n,Nn(a,t,n),we(a),a}function kh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yh=null;function aM(){var t=window.event;return t&&t.type==="popstate"?t===Yh?!1:(Yh=t,!0):(Yh=null,!1)}var qh=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,E_=typeof requestAnimationFrame=="function"?requestAnimationFrame:qh,rM=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(t){return M_.resolve(null).then(t).catch(oM)}:qh;function oM(t){setTimeout(function(){throw t})}function ts(t){return t==="head"}function T_(t,n){var a=n,s=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(l),qr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")td(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,td(a);for(var c=a.firstChild;c;){var g=c.nextSibling,E=c.nodeName;c[Ne]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&td(t.ownerDocument.body);a=l}while(a);qr(n)}function b_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function A_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function R_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function lM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function jh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return lM(n,a,t)}function uM(t){return t.documentElement.clientHeight}function cM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function fM(t,n,a,s,l,c,g,E,O){var W=n.nodeType===9?n:n.ownerDocument;try{var it=W.startViewTransition({update:function(){var q=W.defaultView,tt=q.navigation&&q.navigation.transition,Lt=W.fonts.status;s();var Wt=[];if(Lt==="loaded"&&(uM(W),W.fonts.status==="loading"&&Wt.push(W.fonts.ready)),Lt=Wt.length,t!==null)for(var pe=t.suspenseyImages,j=0,H=0;H<pe.length;H++){var J=pe[H];if(!J.complete){var pt=J.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<q.innerHeight&&pt.left<q.innerWidth){if(j+=W_(J),j>ku){Wt.length=Lt;break}J=new Promise(cM.bind(J)),Wt.push(J)}}}if(0<Wt.length)return q=Promise.race([Promise.all(Wt),new Promise(function(kt){return setTimeout(kt,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,q]):q).then(c,c);if(l(),tt)return tt.finished.then(c,c);c()},types:a});W.__reactViewTransition=it;var gt=[];return it.ready.then(function(){for(var q=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<q.length;tt++){var Lt=q[tt],Wt=Lt.effect,pe=Wt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){gt.push(Lt),Lt=Wt.getKeyframes();for(var j=pe=void 0,H=!0,J=0;J<Lt.length;J++){var pt=Lt[J],kt=pt.width;if(pe===void 0)pe=kt;else if(pe!==kt){H=!1;break}if(kt=pt.height,j===void 0)j=kt;else if(j!==kt){H=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}H&&pe!==void 0&&j!==void 0&&(Wt.setKeyframes(Lt),H=getComputedStyle(Wt.target,Wt.pseudoElement),H.width!==pe||H.height!==j)&&(H=Lt[0],H.width=pe,H.height=j,H=Lt[Lt.length-1],H.width=pe,H.height=j,Wt.setKeyframes(Lt))}}g()},function(q){W.__reactViewTransition===it&&(W.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&O(q)}finally{s(),l(),g()}}),it.finished.finally(function(){for(var q=0;q<gt.length;q++)gt[q].cancel();W.__reactViewTransition===it&&(W.__reactViewTransition=null),E()}),it}catch{return s(),l(),g(),null}}function Xs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Xs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Xs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[l])}return s},Xs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function C_(t){return{name:t,group:new Xs("group",t),imagePair:new Xs("image-pair",t),old:new Xs("old",t),new:new Xs("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(D_(c,t,n,a)===-1){var g=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(O){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,O):n.handleEvent(O)}),s!==null&&(l=g.removeEventListener.bind(g,t,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Hr(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:l}),m(this._fragmentFiber.child,!1,hM,t,E,s)}this._eventListeners=c}};function hM(t,n,a,s){return S(t).addEventListener(n,a,s),!1}ci.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=D_(s,t,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var c=l.cleanup;l=Hr(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,dM,t,a,l),s.splice(n,1),c!==null&&c()}};function dM(t,n,a,s){return S(t).removeEventListener(n,a,s),!1}function Hr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function w_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function D_(t,n,a,s){if(t.length===0)return-1;s=w_(s);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&w_(c.optionsOrUseCapture)===s)return l}return-1}ci.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];s.addEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],s.removeEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){m(this._fragmentFiber.child,!0,U_,t,void 0,void 0)};function U_(t,n){return t.tag===6?!1:(t=S(t),bM(t,n))}ci.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Wh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!U_(n[a],t);a--);};function Wh(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=S(t),t=il(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,pM,t,void 0,void 0))};function pM(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,mM,t,void 0,void 0)};function mM(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,gM,t,void 0,void 0);for(var a=n=0;a<Oi.length;a++){var s=Oi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Oi[n++]=s}Oi.length=n}};function gM(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Oi=[],Zh=!1;function _M(t,n,a){Oi.push({fragmentInstance:t,observer:n,instance:a}),Zh||(Zh=!0,AM(function(){Zh=!1;var s=Oi;Oi=[];for(var l=0;l<s.length;l++){var c=s[l];c.observer.unobserve(c.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,vM,t,void 0,void 0),t};function vM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Wh,a,void 0,void 0);var s=S(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=S(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),l=S(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),O=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&l===t||O||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||yM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function yM(t,n,a,s,l){var c=Le(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=x(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=X(a,c,G),n===null?n=!1:(m(n,!0,P,c,a),c=y,y=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=X(s,c,G),n===null?n=!1:(m(n,!0,U,c,s),c=y,F=y=null,n=c!==null)),n):!1}function N_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,Wh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=A(this._fragmentFiber);if(s=a?s[1]||s[0]||x(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=S(s),N_(t,a);return}if(s=S(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=S(l),N_(l,a)):S(l).scrollIntoView(t),s+=a?-1:1}};function xM(t,n){return t=S(t),L_(t,n),!1}function L_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function O_(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.addEventListener(l.type,l.attachedListener,Hr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,E=0;E<Oi.length;E++){var O=Oi[E];(O.fragmentInstance!==n||O.observer!==c||O.instance!==t)&&(Oi[g++]=O)}Oi.length=g,c.observe(t)}),L_(t,n))}function SM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.removeEventListener(l.type,l.attachedListener,Hr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?_M(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Kh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kh(a),ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function MM(t,n,a,s){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function EM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function P_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function Qh(t){return t.data==="$?"||t.data==="$~"}function Jh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function TM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $h=null;function z_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function I_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function bM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function AM(t){E_(function(){E_(function(n){return t(n)})})}function B_(t,n,a){switch(n=il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function F_(t,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&He(t,n,s,null,eM,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Vi&&(t.onclick=null),ne(t)}function td(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ne(t)}var Ti=new Map,H_=new Set;function al(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Sa=Nt.d;Nt.d={f:RM,r:CM,D:wM,C:DM,L:UM,m:NM,X:OM,S:LM,M:PM};function RM(){var t=Sa.f(),n=Pu();return t||n}function CM(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?V0(n):Sa.r(t)}var Gr=typeof document>"u"?null:document;function G_(t,n,a){var s=Gr;if(s&&typeof n=="string"&&n){var l=gi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),H_.has(l)||(H_.add(l),t={rel:t,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),Nn(n,"link",t),we(n),s.head.appendChild(n)))}}function wM(t){Sa.D(t),G_("dns-prefetch",t,null)}function DM(t,n){Sa.C(t,n),G_("preconnect",t,n)}function UM(t,n,a){Sa.L(t,n,a);var s=Gr;if(s&&t&&n){var l='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+gi(a.imageSizes)+'"]')):l+='[href="'+gi(t)+'"]';var c=l;switch(n){case"style":c=Vr(t);break;case"script":c=Xr(t)}if(!(Ti.has(c)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(c,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(sl(c))||n==="script"&&s.querySelector(rl(c))))){var g=s.createElement("link");Nn(g,"link",t),n==="style"&&(g[Ce]=!0,g.onload=g.onerror=function(){La(g)}),we(g),s.head.appendChild(g)}}}function NM(t,n){Sa.m(t,n);var a=Gr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+gi(s)+'"][href="'+gi(t)+'"]',c=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Xr(t)}if(!Ti.has(c)&&(t=z({rel:"modulepreload",href:t},n),Ti.set(c,t),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(c)))return}s=a.createElement("link"),Nn(s,"link",t),we(s),a.head.appendChild(s)}}}function LM(t,n,a){Sa.S(t,n,a);var s=Gr;if(s&&t){var l=ni(s).hoistableStyles,c=Vr(t);n=n||"default";var g=l.get(c);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(sl(c)))E.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(c))&&ed(t,a);var O=g=s.createElement("link");we(O),Nn(O,"link",t),O._p=new Promise(function(W,it){O.onload=W,O.onerror=it}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Vu(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},l.set(c,g)}}}function OM(t,n){Sa.X(t,n);var a=Gr;if(a&&t){var s=ni(a).hoistableScripts,l=Xr(t),c=s.get(l);c||(c=a.querySelector(rl(l)),c||(t=z({src:t,async:!0},n),(n=Ti.get(l))&&nd(t,n),c=a.createElement("script"),we(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function PM(t,n){Sa.M(t,n);var a=Gr;if(a&&t){var s=ni(a).hoistableScripts,l=Xr(t),c=s.get(l);c||(c=a.querySelector(rl(l)),c||(t=z({src:t,async:!0,type:"module"},n),(n=Ti.get(l))&&nd(t,n),c=a.createElement("script"),we(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function V_(t,n,a,s){var l=(l=qe.current)?al(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vr(a.href),n=ni(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vr(a.href);var c=ni(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(sl(t)))?c._p||(g.instance=c,g.state.loading=5):(c=Ti.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,c)),zM(l,t,c,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Xr(a),n=ni(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Vr(t){return'href="'+gi(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function X_(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function zM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ce]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ce]=!0,n.onload=n.onerror=La.bind(null,n),Nn(n,"link",a),we(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Xr(t){return'[src="'+gi(t)+'"]'}function rl(t){return"script[async]"+t}function k_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+gi(a.href)+'"]');if(s)return n.instance=s,we(s),s;var l=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),we(s),Nn(s,"style",l),Vu(s,a.precedence,t),n.instance=s;case"stylesheet":l=Vr(a.href);var c=t.querySelector(sl(l));if(c)return n.state.loading|=4,n.instance=c,we(c),c;s=X_(a),(l=Ti.get(l))&&ed(s,l),c=(t.ownerDocument||t).createElement("link"),we(c);var g=c;return g._p=new Promise(function(E,O){g.onload=E,g.onerror=O}),Nn(c,"link",s),n.state.loading|=4,Vu(c,a.precedence,t),n.instance=c;case"script":return c=Xr(a.src),(l=t.querySelector(rl(c)))?(n.instance=l,we(l),l):(s=a,(l=Ti.get(c))&&(s=z({},a),nd(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),we(l),Nn(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vu(s,a.precedence,t));return n.instance}function Vu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,c=l,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xu=null;function Y_(t,n,a){if(Xu===null){var s=new Map,l=Xu=new Map;l.set(a,s)}else l=Xu,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Ne]||c[wt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(c):s.set(g,[c])}}return s}function id(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function IM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function j_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function W_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Z_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=W_(n),t.suspenseyImages.push(n)),t=HM.bind(t),n.decode().then(t,t))}function BM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Vr(s.href),c=n.querySelector(sl(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ol.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,we(c);return}c=n.ownerDocument||n,s=X_(s),(l=Ti.get(l))&&ed(s,l),c=c.createElement("link"),we(c);var g=c;g._p=new Promise(function(E,O){g.onload=E,g.onerror=O}),Nn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ol.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ku=0;function FM(t,n){return t.stylesheets&&t.count===0&&qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ku===0&&(ku=62500*iM());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ku?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function K_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)qu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ol(){this.count--,K_(this)}function HM(){this.imgCount--,K_(this)}var Yu=null;function qu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yu=new Map,n.forEach(GM,t),Yu=null,ol.call(t))}function GM(t,n){if(!(n.state.loading&4)){var a=Yu.get(t);if(a)var s=a.get(null);else{a=new Map,Yu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}l=n.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||s,c===s&&a.set(null,l),a.set(g,l),this.count++,s=ol.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var kr={$$typeof:ht,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function VM(t,n,a,s,l,c,g,E,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.transitionTypes=null,this.incompleteTransitions=new Map}function Q_(t,n,a,s,l,c,g,E,O,W,it,gt){return t=new VM(t,n,a,g,O,W,it,gt,E),n=1,c===!0&&(n|=24),c=qn(3,null,null,n),t.current=c,c.stateNode=t,n=vf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},Mf(c),t}function J_(t){return t?(t=gr,t):gr}function $_(t,n,a,s,l,c){l=J_(l),s.context===null?s.context=l:s.pendingContext=l,s=Va(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Xa(t,s,n),a!==null&&(Kn(a,t,n),Bo(a,t,n))}function tv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ad(t,n){tv(t,n),(t=t.alternate)&&tv(t,n)}function ev(t){if(t.tag===13||t.tag===31){var n=As(t,67108864);n!==null&&Kn(n,t,67108864),ad(t,67108864)}}function nv(t){if(t.tag===13||t.tag===31){var n=ui();n=ut(n);var a=As(t,n);a!==null&&Kn(a,t,n),ad(t,n)}}var Yr=!0;function XM(t,n,a,s){var l=Ut.T;Ut.T=null;var c=Nt.p;try{Nt.p=2,sd(t,n,a,s)}finally{Nt.p=c,Ut.T=l}}function kM(t,n,a,s){var l=Ut.T;Ut.T=null;var c=Nt.p;try{Nt.p=8,sd(t,n,a,s)}finally{Nt.p=c,Ut.T=l}}function sd(t,n,a,s){if(Yr){var l=rd(s);if(l===null)Hh(t,n,s,ju,a),av(t,s);else if(qM(l,t,n,a,s))s.stopPropagation();else if(av(t,s),n&4&&-1<YM.indexOf(t)){for(;l!==null;){var c=_e(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=mi(c.pendingLanes);if(g!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var O=1<<31-On(g);E.entanglements[1]|=O,g&=~O}Ji(c),(Oe&6)===0&&(Nu=k()+500,tl(0))}}break;case 31:case 13:E=As(c,2),E!==null&&Kn(E,c,2),Pu(),ad(c,2)}if(c=rd(s),c===null&&Hh(t,n,s,ju,a),c===l)break;l=c}l!==null&&s.stopPropagation()}else Hh(t,n,s,null,a)}}function rd(t){return t=kc(t),od(t)}var ju=null;function od(t){if(ju=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ju=t,null}function iv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case Dt:return 2;case Yt:return 8;case Mt:case _t:return 32;case Zt:return 268435456;default:return 32}default:return 32}}var ld=!1,es=null,ns=null,is=null,ll=new Map,ul=new Map,as=[],YM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function av(t,n){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function cl(t,n,a,s,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},n!==null&&(n=_e(n),n!==null&&ev(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function qM(t,n,a,s,l){switch(n){case"focusin":return es=cl(es,t,n,a,s,l),!0;case"dragenter":return ns=cl(ns,t,n,a,s,l),!0;case"mouseover":return is=cl(is,t,n,a,s,l),!0;case"pointerover":var c=l.pointerId;return ll.set(c,cl(ll.get(c)||null,t,n,a,s,l)),!0;case"gotpointercapture":return c=l.pointerId,ul.set(c,cl(ul.get(c)||null,t,n,a,s,l)),!0}return!1}function sv(t){var n=Le(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,It(t.priority,function(){nv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,It(t.priority,function(){nv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Xc=s,a.target.dispatchEvent(s),Xc=null}else return n=_e(a),n!==null&&ev(n),t.blockedOn=a,!1;n.shift()}return!0}function rv(t,n,a){Wu(t)&&a.delete(n)}function jM(){ld=!1,es!==null&&Wu(es)&&(es=null),ns!==null&&Wu(ns)&&(ns=null),is!==null&&Wu(is)&&(is=null),ll.forEach(rv),ul.forEach(rv)}function Zu(t,n){t.blockedOn===n&&(t.blockedOn=null,ld||(ld=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,jM)))}var Ku=null;function ov(t){Ku!==t&&(Ku=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ku===t&&(Ku=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(od(s||a)===null)continue;break}var c=_e(a);c!==null&&(t.splice(n,3),n-=3,Xf(c,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function qr(t){function n(O){return Zu(O,t)}es!==null&&Zu(es,t),ns!==null&&Zu(ns,t),is!==null&&Zu(is,t),ll.forEach(n),ul.forEach(n);for(var a=0;a<as.length;a++){var s=as[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)sv(a),a.blockedOn===null&&as.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],c=a[s+1],g=l[jt]||null;if(typeof c=="function")g||ov(a);else if(g){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[jt]||null)E=g.formAction;else if(od(l)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),ov(a)}}}function lv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return l=g})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function ud(t){this._internalRoot=t}Qu.prototype.render=ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();$_(a,s,t,n,null,null)},Qu.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;$_(t.current,2,null,t,null,null),Pu(),n[ie]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Et();t={blockedOn:null,target:t,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,t),a===0&&sv(t)}};var uv=e.version;if(uv!=="19.3.1")throw Error(r(527,uv,"19.3.1"));Nt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var WM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{Te=Ju.inject(WM),an=Ju}catch{}}return hl.createRoot=function(t,n){if(!u(t))throw Error(r(299));var a=!1,s="",l=J0,c=$0,g=tg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Q_(t,1,!1,null,null,a,s,null,l,c,g,lv),t[ie]=n.current,Fh(t),new ud(n)},hl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(r(299));var s=!1,l="",c=J0,g=$0,E=tg,O=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),n=Q_(t,1,!0,n,a??null,s,l,O,c,g,E,lv),n.context=J_(null),a=n.current,s=ui(),s=ut(s),l=Va(s),l.callback=null,Xa(a,l,s),a=s,n.current.lanes=a,Es(n,a),Ji(n),t[ie]=n.current,Fh(t),new Qu(n)},hl.version="19.3.1",hl}var yv;function aE(){if(yv)return fd.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fd.exports=iE(),fd.exports}var sE=aE(),We=Hp();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ry=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=We.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:u="",children:f,iconNode:h,...d},_)=>We.createElement("svg",{ref:_,...oE,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:Ry("lucide",u),...d},[...h.map(([p,v])=>We.createElement(p,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(o,e)=>{const i=We.forwardRef(({className:r,...u},f)=>We.createElement(lE,{ref:f,iconNode:e,className:Ry(`lucide-${rE(o)}`,r),...u}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=$e("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=$e("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=$e("ChartNoAxesCombined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=$e("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=$e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=$e("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=$e("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=$e("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=$e("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=$e("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=$e("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=$e("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=$e("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=$e("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=$e("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=$e("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=$e("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=$e("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=$e("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=$e("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=$e("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=$e("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=$e("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=$e("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=$e("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=$e("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gp="179",Da={ROTATE:0,DOLLY:1,PAN:2},uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},LE=0,xv=1,OE=2,Dy=1,Uy=2,Ra=3,_s=0,ei=1,wa=2,ms=0,fo=1,Sv=2,Mv=3,Ev=4,PE=5,Qs=100,zE=101,IE=102,BE=103,FE=104,HE=200,GE=201,VE=202,XE=203,Zd=204,Kd=205,kE=206,YE=207,qE=208,jE=209,WE=210,ZE=211,KE=212,QE=213,JE=214,Qd=0,Jd=1,$d=2,mo=3,tp=4,ep=5,np=6,ip=7,Ny=0,$E=1,tT=2,gs=0,eT=1,nT=2,iT=3,Ly=4,aT=5,sT=6,rT=7,Oy=300,go=301,_o=302,ap=303,sp=304,Lc=306,rp=1e3,$s=1001,op=1002,pi=1003,oT=1004,$u=1005,ta=1006,gd=1007,tr=1008,aa=1009,Py=1010,zy=1011,Ml=1012,Vp=1013,er=1014,ea=1015,Al=1016,Xp=1017,kp=1018,El=1020,Iy=35902,By=1021,Fy=1022,Fi=1023,Tl=1026,bl=1027,Yp=1028,qp=1029,Hy=1030,jp=1031,Wp=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,lp=35840,up=35841,cp=35842,fp=35843,hp=36196,dp=37492,pp=37496,mp=37808,gp=37809,_p=37810,vp=37811,yp=37812,xp=37813,Sp=37814,Mp=37815,Ep=37816,Tp=37817,bp=37818,Ap=37819,Rp=37820,Cp=37821,Ac=36492,wp=36494,Dp=36495,Gy=36283,Up=36284,Np=36285,Lp=36286,lT=3200,uT=3201,Vy=0,cT=1,hs="",di="srgb",vo="srgb-linear",wc="linear",ke="srgb",jr=7680,Tv=519,fT=512,hT=513,dT=514,Xy=515,pT=516,mT=517,gT=518,_T=519,bv=35044,Av="300 es",na=2e3,Dc=2001;class ar{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const u=r[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const u=r.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,Op=180/Math.PI;function Rl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function vT(o,e){return(o%e+e)%e}function _d(o,e,i){return(1-i)*o+i*e}function dl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const yT={DEG2RAD:Rc};class ce{constructor(e=0,i=0){ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6],this.y=u[1]*i+u[4]*r+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),u=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*u+e.x,this.y=f*u+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nr{constructor(e=0,i=0,r=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=u}static slerpFlat(e,i,r,u,f,h,d){let _=r[u+0],p=r[u+1],v=r[u+2],m=r[u+3];const x=f[h+0],M=f[h+1],A=f[h+2],w=f[h+3];if(d===0){e[i+0]=_,e[i+1]=p,e[i+2]=v,e[i+3]=m;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=w;return}if(m!==w||_!==x||p!==M||v!==A){let S=1-d;const y=_*x+p*M+v*A+m*w,F=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const G=Math.sqrt(P),X=Math.atan2(G,y*F);S=Math.sin(S*X)/G,d=Math.sin(d*X)/G}const U=d*F;if(_=_*S+x*U,p=p*S+M*U,v=v*S+A*U,m=m*S+w*U,S===1-d){const G=1/Math.sqrt(_*_+p*p+v*v+m*m);_*=G,p*=G,v*=G,m*=G}}e[i]=_,e[i+1]=p,e[i+2]=v,e[i+3]=m}static multiplyQuaternionsFlat(e,i,r,u,f,h){const d=r[u],_=r[u+1],p=r[u+2],v=r[u+3],m=f[h],x=f[h+1],M=f[h+2],A=f[h+3];return e[i]=d*A+v*m+_*M-p*x,e[i+1]=_*A+v*x+p*m-d*M,e[i+2]=p*A+v*M+d*x-_*m,e[i+3]=v*A-d*m-_*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,u){return this._x=e,this._y=i,this._z=r,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,_=Math.sin,p=d(r/2),v=d(u/2),m=d(f/2),x=_(r/2),M=_(u/2),A=_(f/2);switch(h){case"XYZ":this._x=x*v*m+p*M*A,this._y=p*M*m-x*v*A,this._z=p*v*A+x*M*m,this._w=p*v*m-x*M*A;break;case"YXZ":this._x=x*v*m+p*M*A,this._y=p*M*m-x*v*A,this._z=p*v*A-x*M*m,this._w=p*v*m+x*M*A;break;case"ZXY":this._x=x*v*m-p*M*A,this._y=p*M*m+x*v*A,this._z=p*v*A+x*M*m,this._w=p*v*m-x*M*A;break;case"ZYX":this._x=x*v*m-p*M*A,this._y=p*M*m+x*v*A,this._z=p*v*A-x*M*m,this._w=p*v*m+x*M*A;break;case"YZX":this._x=x*v*m+p*M*A,this._y=p*M*m+x*v*A,this._z=p*v*A-x*M*m,this._w=p*v*m-x*M*A;break;case"XZY":this._x=x*v*m-p*M*A,this._y=p*M*m-x*v*A,this._z=p*v*A+x*M*m,this._w=p*v*m+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,u=Math.sin(r);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],u=i[4],f=i[8],h=i[1],d=i[5],_=i[9],p=i[2],v=i[6],m=i[10],x=r+d+m;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-_)*M,this._y=(f-p)*M,this._z=(h-u)*M}else if(r>d&&r>m){const M=2*Math.sqrt(1+r-d-m);this._w=(v-_)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+p)/M}else if(d>m){const M=2*Math.sqrt(1+d-r-m);this._w=(f-p)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(_+v)/M}else{const M=2*Math.sqrt(1+m-r-d);this._w=(h-u)/M,this._x=(f+p)/M,this._y=(_+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const u=Math.min(1,i/r);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,u=e._y,f=e._z,h=e._w,d=i._x,_=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+u*p-f*_,this._y=u*v+h*_+f*d-r*p,this._z=f*v+h*p+r*_-u*d,this._w=h*v-r*d-u*_-f*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=u,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*u+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const p=Math.sqrt(_),v=Math.atan2(p,d),m=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=h*m+this._w*x,this._x=r*m+this._x*x,this._y=u*m+this._y*x,this._z=f*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),u=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Rv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Rv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*u,this.y=f[1]*i+f[4]*r+f[7]*u,this.z=f[2]*i+f[5]*r+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*u+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*u+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*u+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,u=this.z,f=e.x,h=e.y,d=e.z,_=e.w,p=2*(h*u-d*r),v=2*(d*i-f*u),m=2*(f*r-h*i);return this.x=i+_*p+h*m-d*v,this.y=r+_*v+d*p-f*m,this.z=u+_*m+f*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*u,this.y=f[1]*i+f[5]*r+f[9]*u,this.z=f[2]*i+f[6]*r+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,u=e.y,f=e.z,h=i.x,d=i.y,_=i.z;return this.x=u*_-f*d,this.y=f*h-r*_,this.z=r*d-u*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,u=this.z-e.z;return i*i+r*r+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const u=Math.sin(i)*e;return this.x=u*Math.sin(r),this.y=Math.cos(i)*e,this.z=u*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vd=new nt,Rv=new nr;class me{constructor(e,i,r,u,f,h,d,_,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,_,p)}set(e,i,r,u,f,h,d,_,p){const v=this.elements;return v[0]=e,v[1]=u,v[2]=d,v[3]=i,v[4]=f,v[5]=_,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[3],_=r[6],p=r[1],v=r[4],m=r[7],x=r[2],M=r[5],A=r[8],w=u[0],S=u[3],y=u[6],F=u[1],P=u[4],U=u[7],G=u[2],X=u[5],z=u[8];return f[0]=h*w+d*F+_*G,f[3]=h*S+d*P+_*X,f[6]=h*y+d*U+_*z,f[1]=p*w+v*F+m*G,f[4]=p*S+v*P+m*X,f[7]=p*y+v*U+m*z,f[2]=x*w+M*F+A*G,f[5]=x*S+M*P+A*X,f[8]=x*y+M*U+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],_=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*f*v+r*d*_+u*f*p-u*h*_}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],_=e[6],p=e[7],v=e[8],m=v*h-d*p,x=d*_-v*f,M=p*f-h*_,A=i*m+r*x+u*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=m*w,e[1]=(u*p-v*r)*w,e[2]=(d*r-u*h)*w,e[3]=x*w,e[4]=(v*i-u*_)*w,e[5]=(u*f-d*i)*w,e[6]=M*w,e[7]=(r*_-p*i)*w,e[8]=(h*i-r*f)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,u,f,h,d){const _=Math.cos(f),p=Math.sin(f);return this.set(r*_,r*p,-r*(_*h+p*d)+h+e,-u*p,u*_,-u*(-p*h+_*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(yd.makeScale(e,i)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,i){return this.premultiply(yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<9;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yd=new me;function ky(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xT(){const o=Uc("canvas");return o.style.display="block",o}const Cv={};function ho(o){o in Cv||(Cv[o]=!0,console.warn(o))}function ST(o,e,i){return new Promise(function(r,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const wv=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dv=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MT(){const o={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(u.r=Ua(u.r),u.g=Ua(u.g),u.b=Ua(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(u.r=po(u.r),u.g=po(u.g),u.b=po(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===hs?wc:this.spaces[u].transfer},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return ho("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return ho("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vo]:{primaries:e,whitePoint:r,transfer:wc,toXYZ:wv,fromXYZ:Dv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:wv,fromXYZ:Dv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Ue=MT();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function po(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Wr;class ET{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Wr===void 0&&(Wr=Uc("canvas")),Wr.width=e.width,Wr.height=e.height;const u=Wr.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),r=Wr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const u=r.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Ua(f[h]/255)*255;return r.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ua(i[r]/255)*255):i[r]=Ua(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TT=0;class Zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=Rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(xd(u[h].image)):f.push(xd(u[h]))}else f=xd(u);r.url=f}return i||(e.images[this.uuid]=r),r}}function xd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ET.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bT=0;const Sd=new nt;class Yn extends ar{constructor(e=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,r=$s,u=$s,f=ta,h=tr,d=Fi,_=aa,p=Yn.DEFAULT_ANISOTROPY,v=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=Rl(),this.name="",this.source=new Zp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=_,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sd).x}get height(){return this.source.getSize(Sd).y}get depth(){return this.source.getSize(Sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}u&&r&&u.isVector2&&r.isVector2||u&&r&&u.isVector3&&r.isVector3||u&&r&&u.isMatrix3&&r.isMatrix3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rp:e.x=e.x-Math.floor(e.x);break;case $s:e.x=e.x<0?0:1;break;case op:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rp:e.y=e.y-Math.floor(e.y);break;case $s:e.y=e.y<0?0:1;break;case op:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Oy;Yn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,r=0,u=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,u){return this.x=e,this.y=i,this.z=r,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*u+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*u+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*u+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,u,f;const _=e.elements,p=_[0],v=_[4],m=_[8],x=_[1],M=_[5],A=_[9],w=_[2],S=_[6],y=_[10];if(Math.abs(v-x)<.01&&Math.abs(m-w)<.01&&Math.abs(A-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(m+w)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(M+1)/2,G=(y+1)/2,X=(v+x)/4,z=(m+w)/4,V=(A+S)/4;return P>U&&P>G?P<.01?(r=0,u=.707106781,f=.707106781):(r=Math.sqrt(P),u=X/r,f=z/r):U>G?U<.01?(r=.707106781,u=0,f=.707106781):(u=Math.sqrt(U),r=X/u,f=V/u):G<.01?(r=.707106781,u=.707106781,f=0):(f=Math.sqrt(G),r=z/f,u=V/f),this.set(r,u,f,i),this}let F=Math.sqrt((S-A)*(S-A)+(m-w)*(m-w)+(x-v)*(x-v));return Math.abs(F)<.001&&(F=1),this.x=(S-A)/F,this.y=(m-w)/F,this.z=(x-v)/F,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AT extends ar{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ta,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const u={width:e,height:i,depth:r.depth},f=new Yn(u);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:ta,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=r,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new Zp(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends AT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Yy extends Yn{constructor(e=null,i=1,r=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=pi,this.minFilter=pi,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RT extends Yn{constructor(e=null,i=1,r=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=pi,this.minFilter=pi,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Pi):Pi.fromBufferAttribute(f,h),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tc.copy(r.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),ec.subVectors(this.max,pl),Zr.subVectors(e.a,pl),Kr.subVectors(e.b,pl),Qr.subVectors(e.c,pl),rs.subVectors(Kr,Zr),os.subVectors(Qr,Kr),ks.subVectors(Zr,Qr);let i=[0,-rs.z,rs.y,0,-os.z,os.y,0,-ks.z,ks.y,rs.z,0,-rs.x,os.z,0,-os.x,ks.z,0,-ks.x,-rs.y,rs.x,0,-os.y,os.x,0,-ks.y,ks.x,0];return!Md(i,Zr,Kr,Qr,ec)||(i=[1,0,0,0,1,0,0,0,1],!Md(i,Zr,Kr,Qr,ec))?!1:(nc.crossVectors(rs,os),i=[nc.x,nc.y,nc.z],Md(i,Zr,Kr,Qr,ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Pi=new nt,tc=new sr,Zr=new nt,Kr=new nt,Qr=new nt,rs=new nt,os=new nt,ks=new nt,pl=new nt,ec=new nt,nc=new nt,Ys=new nt;function Md(o,e,i,r,u){for(let f=0,h=o.length-3;f<=h;f+=3){Ys.fromArray(o,f);const d=u.x*Math.abs(Ys.x)+u.y*Math.abs(Ys.y)+u.z*Math.abs(Ys.z),_=e.dot(Ys),p=i.dot(Ys),v=r.dot(Ys);if(Math.max(-Math.max(_,p,v),Math.min(_,p,v))>d)return!1}return!0}const CT=new sr,ml=new nt,Ed=new nt;class Cl{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):CT.setFromPoints(e).getCenter(r);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const i=ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),u=(r-this.radius)*.5;this.center.addScaledVector(ml,u/r),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(Ed)),this.expandByPoint(ml.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ea=new nt,Td=new nt,ic=new nt,ls=new nt,bd=new nt,ac=new nt,Ad=new nt;class Kp{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,u){Td.copy(e).add(i).multiplyScalar(.5),ic.copy(i).sub(e).normalize(),ls.copy(this.origin).sub(Td);const f=e.distanceTo(i)*.5,h=-this.direction.dot(ic),d=ls.dot(this.direction),_=-ls.dot(ic),p=ls.lengthSq(),v=Math.abs(1-h*h);let m,x,M,A;if(v>0)if(m=h*_-d,x=h*d-_,A=f*v,m>=0)if(x>=-A)if(x<=A){const w=1/v;m*=w,x*=w,M=m*(m+h*x+2*d)+x*(h*m+x+2*_)+p}else x=f,m=Math.max(0,-(h*x+d)),M=-m*m+x*(x+2*_)+p;else x=-f,m=Math.max(0,-(h*x+d)),M=-m*m+x*(x+2*_)+p;else x<=-A?(m=Math.max(0,-(-h*f+d)),x=m>0?-f:Math.min(Math.max(-f,-_),f),M=-m*m+x*(x+2*_)+p):x<=A?(m=0,x=Math.min(Math.max(-f,-_),f),M=x*(x+2*_)+p):(m=Math.max(0,-(h*f+d)),x=m>0?f:Math.min(Math.max(-f,-_),f),M=-m*m+x*(x+2*_)+p);else x=h>0?-f:f,m=Math.max(0,-(h*x+d)),M=-m*m+x*(x+2*_)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,m),u&&u.copy(Td).addScaledVector(ic,x),M}intersectSphere(e,i){Ea.subVectors(e.center,this.origin);const r=Ea.dot(this.direction),u=Ea.dot(Ea)-r*r,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=r-h,_=r+h;return _<0?null:d<0?this.at(_,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,u,f,h,d,_;const p=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,u=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,u=(e.min.x-x.x)*p),v>=0?(f=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(f=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),r>h||f>u||((f>r||isNaN(r))&&(r=f),(h<u||isNaN(u))&&(u=h),m>=0?(d=(e.min.z-x.z)*m,_=(e.max.z-x.z)*m):(d=(e.max.z-x.z)*m,_=(e.min.z-x.z)*m),r>_||d>u)||((d>r||r!==r)&&(r=d),(_<u||u!==u)&&(u=_),u<0)?null:this.at(r>=0?r:u,i)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,i,r,u,f){bd.subVectors(i,e),ac.subVectors(r,e),Ad.crossVectors(bd,ac);let h=this.direction.dot(Ad),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ls.subVectors(this.origin,e);const _=d*this.direction.dot(ac.crossVectors(ls,ac));if(_<0)return null;const p=d*this.direction.dot(bd.cross(ls));if(p<0||_+p>h)return null;const v=-d*ls.dot(Ad);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,u,f,h,d,_,p,v,m,x,M,A,w,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,_,p,v,m,x,M,A,w,S)}set(e,i,r,u,f,h,d,_,p,v,m,x,M,A,w,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=u,y[1]=f,y[5]=h,y[9]=d,y[13]=_,y[2]=p,y[6]=v,y[10]=m,y[14]=x,y[3]=M,y[7]=A,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,u=1/Jr.setFromMatrixColumn(e,0).length(),f=1/Jr.setFromMatrixColumn(e,1).length(),h=1/Jr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*u,i[1]=r[1]*u,i[2]=r[2]*u,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,u=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),_=Math.cos(u),p=Math.sin(u),v=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const x=h*v,M=h*m,A=d*v,w=d*m;i[0]=_*v,i[4]=-_*m,i[8]=p,i[1]=M+A*p,i[5]=x-w*p,i[9]=-d*_,i[2]=w-x*p,i[6]=A+M*p,i[10]=h*_}else if(e.order==="YXZ"){const x=_*v,M=_*m,A=p*v,w=p*m;i[0]=x+w*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*m,i[5]=h*v,i[9]=-d,i[2]=M*d-A,i[6]=w+x*d,i[10]=h*_}else if(e.order==="ZXY"){const x=_*v,M=_*m,A=p*v,w=p*m;i[0]=x-w*d,i[4]=-h*m,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*v,i[9]=w-x*d,i[2]=-h*p,i[6]=d,i[10]=h*_}else if(e.order==="ZYX"){const x=h*v,M=h*m,A=d*v,w=d*m;i[0]=_*v,i[4]=A*p-M,i[8]=x*p+w,i[1]=_*m,i[5]=w*p+x,i[9]=M*p-A,i[2]=-p,i[6]=d*_,i[10]=h*_}else if(e.order==="YZX"){const x=h*_,M=h*p,A=d*_,w=d*p;i[0]=_*v,i[4]=w-x*m,i[8]=A*m+M,i[1]=m,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*m+A,i[10]=x-w*m}else if(e.order==="XZY"){const x=h*_,M=h*p,A=d*_,w=d*p;i[0]=_*v,i[4]=-m,i[8]=p*v,i[1]=x*m+w,i[5]=h*v,i[9]=M*m-A,i[2]=A*m-M,i[6]=d*v,i[10]=w*m+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wT,e,DT)}lookAt(e,i,r){const u=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),us.crossVectors(r,fi),us.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),us.crossVectors(r,fi)),us.normalize(),sc.crossVectors(fi,us),u[0]=us.x,u[4]=sc.x,u[8]=fi.x,u[1]=us.y,u[5]=sc.y,u[9]=fi.y,u[2]=us.z,u[6]=sc.z,u[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[4],_=r[8],p=r[12],v=r[1],m=r[5],x=r[9],M=r[13],A=r[2],w=r[6],S=r[10],y=r[14],F=r[3],P=r[7],U=r[11],G=r[15],X=u[0],z=u[4],V=u[8],D=u[12],b=u[1],I=u[5],rt=u[9],lt=u[13],ft=u[2],ht=u[6],Y=u[10],at=u[14],Z=u[3],xt=u[7],yt=u[11],vt=u[15];return f[0]=h*X+d*b+_*ft+p*Z,f[4]=h*z+d*I+_*ht+p*xt,f[8]=h*V+d*rt+_*Y+p*yt,f[12]=h*D+d*lt+_*at+p*vt,f[1]=v*X+m*b+x*ft+M*Z,f[5]=v*z+m*I+x*ht+M*xt,f[9]=v*V+m*rt+x*Y+M*yt,f[13]=v*D+m*lt+x*at+M*vt,f[2]=A*X+w*b+S*ft+y*Z,f[6]=A*z+w*I+S*ht+y*xt,f[10]=A*V+w*rt+S*Y+y*yt,f[14]=A*D+w*lt+S*at+y*vt,f[3]=F*X+P*b+U*ft+G*Z,f[7]=F*z+P*I+U*ht+G*xt,f[11]=F*V+P*rt+U*Y+G*yt,f[15]=F*D+P*lt+U*at+G*vt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],u=e[8],f=e[12],h=e[1],d=e[5],_=e[9],p=e[13],v=e[2],m=e[6],x=e[10],M=e[14],A=e[3],w=e[7],S=e[11],y=e[15];return A*(+f*_*m-u*p*m-f*d*x+r*p*x+u*d*M-r*_*M)+w*(+i*_*M-i*p*x+f*h*x-u*h*M+u*p*v-f*_*v)+S*(+i*p*m-i*d*M-f*h*m+r*h*M+f*d*v-r*p*v)+y*(-u*d*v-i*_*m+i*d*x+u*h*m-r*h*x+r*_*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],_=e[6],p=e[7],v=e[8],m=e[9],x=e[10],M=e[11],A=e[12],w=e[13],S=e[14],y=e[15],F=m*S*p-w*x*p+w*_*M-d*S*M-m*_*y+d*x*y,P=A*x*p-v*S*p-A*_*M+h*S*M+v*_*y-h*x*y,U=v*w*p-A*m*p+A*d*M-h*w*M-v*d*y+h*m*y,G=A*m*_-v*w*_-A*d*x+h*w*x+v*d*S-h*m*S,X=i*F+r*P+u*U+f*G;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/X;return e[0]=F*z,e[1]=(w*x*f-m*S*f-w*u*M+r*S*M+m*u*y-r*x*y)*z,e[2]=(d*S*f-w*_*f+w*u*p-r*S*p-d*u*y+r*_*y)*z,e[3]=(m*_*f-d*x*f-m*u*p+r*x*p+d*u*M-r*_*M)*z,e[4]=P*z,e[5]=(v*S*f-A*x*f+A*u*M-i*S*M-v*u*y+i*x*y)*z,e[6]=(A*_*f-h*S*f-A*u*p+i*S*p+h*u*y-i*_*y)*z,e[7]=(h*x*f-v*_*f+v*u*p-i*x*p-h*u*M+i*_*M)*z,e[8]=U*z,e[9]=(A*m*f-v*w*f-A*r*M+i*w*M+v*r*y-i*m*y)*z,e[10]=(h*w*f-A*d*f+A*r*p-i*w*p-h*r*y+i*d*y)*z,e[11]=(v*d*f-h*m*f-v*r*p+i*m*p+h*r*M-i*d*M)*z,e[12]=G*z,e[13]=(v*w*u-A*m*u+A*r*x-i*w*x-v*r*S+i*m*S)*z,e[14]=(A*d*u-h*w*u-A*r*_+i*w*_+h*r*S-i*d*S)*z,e[15]=(h*m*u-v*d*u+v*r*_-i*m*_-h*r*x+i*d*x)*z,this}scale(e){const i=this.elements,r=e.x,u=e.y,f=e.z;return i[0]*=r,i[4]*=u,i[8]*=f,i[1]*=r,i[5]*=u,i[9]*=f,i[2]*=r,i[6]*=u,i[10]*=f,i[3]*=r,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,u))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),u=Math.sin(i),f=1-r,h=e.x,d=e.y,_=e.z,p=f*h,v=f*d;return this.set(p*h+r,p*d-u*_,p*_+u*d,0,p*d+u*_,v*d+r,v*_-u*h,0,p*_-u*d,v*_+u*h,f*_*_+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,u,f,h){return this.set(1,r,f,0,e,1,h,0,i,u,1,0,0,0,0,1),this}compose(e,i,r){const u=this.elements,f=i._x,h=i._y,d=i._z,_=i._w,p=f+f,v=h+h,m=d+d,x=f*p,M=f*v,A=f*m,w=h*v,S=h*m,y=d*m,F=_*p,P=_*v,U=_*m,G=r.x,X=r.y,z=r.z;return u[0]=(1-(w+y))*G,u[1]=(M+U)*G,u[2]=(A-P)*G,u[3]=0,u[4]=(M-U)*X,u[5]=(1-(x+y))*X,u[6]=(S+F)*X,u[7]=0,u[8]=(A+P)*z,u[9]=(S-F)*z,u[10]=(1-(x+w))*z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,r){const u=this.elements;let f=Jr.set(u[0],u[1],u[2]).length();const h=Jr.set(u[4],u[5],u[6]).length(),d=Jr.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],zi.copy(this);const p=1/f,v=1/h,m=1/d;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=v,zi.elements[5]*=v,zi.elements[6]*=v,zi.elements[8]*=m,zi.elements[9]*=m,zi.elements[10]*=m,i.setFromRotationMatrix(zi),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,u,f,h,d=na,_=!1){const p=this.elements,v=2*f/(i-e),m=2*f/(r-u),x=(i+e)/(i-e),M=(r+u)/(r-u);let A,w;if(_)A=f/(h-f),w=h*f/(h-f);else if(d===na)A=-(h+f)/(h-f),w=-2*h*f/(h-f);else if(d===Dc)A=-h/(h-f),w=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=m,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,u,f,h,d=na,_=!1){const p=this.elements,v=2/(i-e),m=2/(r-u),x=-(i+e)/(i-e),M=-(r+u)/(r-u);let A,w;if(_)A=1/(h-f),w=h/(h-f);else if(d===na)A=-2/(h-f),w=-(h+f)/(h-f);else if(d===Dc)A=-1/(h-f),w=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=m,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<16;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Jr=new nt,zi=new en,wT=new nt(0,0,0),DT=new nt(1,1,1),us=new nt,sc=new nt,fi=new nt,Uv=new en,Nv=new nr;class sa{constructor(e=0,i=0,r=0,u=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,u=this._order){return this._x=e,this._y=i,this._z=r,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],_=u[1],p=u[5],v=u[9],m=u[2],x=u[6],M=u[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(_,p)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Uv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Nv.setFromEuler(this),this.setFromQuaternion(Nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class Qp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UT=0;const Lv=new nt,$r=new nr,Ta=new en,rc=new nt,gl=new nt,NT=new nt,LT=new nr,Ov=new nt(1,0,0),Pv=new nt(0,1,0),zv=new nt(0,0,1),Iv={type:"added"},OT={type:"removed"},to={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Rn extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=Rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new nt,i=new sa,r=new nr,u=new nt(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new en},normalMatrix:{value:new me}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,i){return $r.setFromAxisAngle(e,i),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Ov,e)}rotateY(e){return this.rotateOnAxis(Pv,e)}rotateZ(e){return this.rotateOnAxis(zv,e)}translateOnAxis(e,i){return Lv.copy(e).applyQuaternion(this.quaternion),this.position.add(Lv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ov,e)}translateY(e){return this.translateOnAxis(Pv,e)}translateZ(e){return this.translateOnAxis(zv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const u=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(gl,rc,this.up):Ta.lookAt(rc,gl,this.up),this.quaternion.setFromRotationMatrix(Ta),u&&(Ta.extractRotation(u.matrixWorld),$r.setFromRotationMatrix(Ta),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iv),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(OT),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iv),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,u=this.children.length;r<u;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,e,NT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,LT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let p=0,v=_.length;p<v;p++){const m=_[p];f(e.shapes,m)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,p=this.material.length;_<p;_++)d.push(f(e.materials,this.material[_]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];u.animations.push(f(e.animations,_))}}if(i){const d=h(e.geometries),_=h(e.materials),p=h(e.textures),v=h(e.images),m=h(e.shapes),x=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),_.length>0&&(r.materials=_),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),m.length>0&&(r.shapes=m),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=u,r;function h(d){const _=[];for(const p in d){const v=d[p];delete v.metadata,_.push(v)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const u=e.children[r];this.add(u.clone())}return this}}Rn.DEFAULT_UP=new nt(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new nt,ba=new nt,Cd=new nt,Aa=new nt,eo=new nt,no=new nt,Bv=new nt,wd=new nt,Dd=new nt,Ud=new nt,Nd=new un,Ld=new un,Od=new un;class Bi{constructor(e=new nt,i=new nt,r=new nt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,u){u.subVectors(r,i),Ii.subVectors(e,i),u.cross(Ii);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,r,u,f){Ii.subVectors(u,i),ba.subVectors(r,i),Cd.subVectors(e,i);const h=Ii.dot(Ii),d=Ii.dot(ba),_=Ii.dot(Cd),p=ba.dot(ba),v=ba.dot(Cd),m=h*p-d*d;if(m===0)return f.set(0,0,0),null;const x=1/m,M=(p*_-d*v)*x,A=(h*v-d*_)*x;return f.set(1-M-A,A,M)}static containsPoint(e,i,r,u){return this.getBarycoord(e,i,r,u,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,i,r,u,f,h,d,_){return this.getBarycoord(e,i,r,u,Aa)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Aa.x),_.addScaledVector(h,Aa.y),_.addScaledVector(d,Aa.z),_)}static getInterpolatedAttribute(e,i,r,u,f,h){return Nd.setScalar(0),Ld.setScalar(0),Od.setScalar(0),Nd.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,r),Od.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(Nd,f.x),h.addScaledVector(Ld,f.y),h.addScaledVector(Od,f.z),h}static isFrontFacing(e,i,r,u){return Ii.subVectors(r,i),ba.subVectors(e,i),Ii.cross(ba).dot(u)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,u){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,r,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Ii.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,u,f){return Bi.getInterpolation(e,this.a,this.b,this.c,i,r,u,f)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,u=this.b,f=this.c;let h,d;eo.subVectors(u,r),no.subVectors(f,r),wd.subVectors(e,r);const _=eo.dot(wd),p=no.dot(wd);if(_<=0&&p<=0)return i.copy(r);Dd.subVectors(e,u);const v=eo.dot(Dd),m=no.dot(Dd);if(v>=0&&m<=v)return i.copy(u);const x=_*m-v*p;if(x<=0&&_>=0&&v<=0)return h=_/(_-v),i.copy(r).addScaledVector(eo,h);Ud.subVectors(e,f);const M=eo.dot(Ud),A=no.dot(Ud);if(A>=0&&M<=A)return i.copy(f);const w=M*p-_*A;if(w<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(no,d);const S=v*A-M*m;if(S<=0&&m-v>=0&&M-A>=0)return Bv.subVectors(f,u),d=(m-v)/(m-v+(M-A)),i.copy(u).addScaledVector(Bv,d);const y=1/(S+w+x);return h=w*y,d=x*y,i.copy(r).addScaledVector(eo,h).addScaledVector(no,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},oc={h:0,s:0,l:0};function Pd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class xe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,u=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,u),this}setHSL(e,i,r,u=Ue.workingColorSpace){if(e=vT(e,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Pd(h,f,e+1/3),this.g=Pd(h,f,e),this.b=Pd(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,u),this}setStyle(e,i=di){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const r=qy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Ue.workingToColorSpace(Bn.copy(this),e),Math.round(Ee(Bn.r*255,0,255))*65536+Math.round(Ee(Bn.g*255,0,255))*256+Math.round(Ee(Bn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,u=Bn.g,f=Bn.b,h=Math.max(r,u,f),d=Math.min(r,u,f);let _,p;const v=(d+h)/2;if(d===h)_=0,p=0;else{const m=h-d;switch(p=v<=.5?m/(h+d):m/(2-h-d),h){case r:_=(u-f)/m+(u<f?6:0);break;case u:_=(f-r)/m+2;break;case f:_=(r-u)/m+4;break}_/=6}return e.h=_,e.s=p,e.l=v,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=di){Ue.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,r=Bn.g,u=Bn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(u*255)})`}offsetHSL(e,i,r){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+i,cs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(cs),e.getHSL(oc);const r=_d(cs.h,oc.h,i),u=_d(cs.s,oc.s,i),f=_d(cs.l,oc.l,i);return this.setHSL(r,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*u,this.g=f[1]*i+f[4]*r+f[7]*u,this.b=f[2]*i+f[5]*r+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new xe;xe.NAMES=qy;let PT=0;class wl extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Rl(),this.name="",this.type="Material",this.blending=fo,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(r):u&&u.isVector3&&r&&r.isVector3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(r.blending=this.blending),this.side!==_s&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Kd&&(r.blendDst=this.blendDst),this.blendEquation!==Qs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function u(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(i){const f=u(e.textures),h=u(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const u=i.length;r=new Array(u);for(let f=0;f!==u;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jp extends wl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=Ny,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new nt,lc=new ce;let zT=0;class Hi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=bv,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[r+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(e),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=dl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=dl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=dl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=dl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=dl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,u){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),u=Qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this}setXYZW(e,i,r,u,f){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),u=Qn(u,this.array),f=Qn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bv&&(e.usage=this.usage),e}}class jy extends Hi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Wy extends Hi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ia extends Hi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let IT=0;const bi=new en,zd=new Rn,io=new nt,hi=new sr,_l=new sr,An=new nt;class ys extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ky(e)?Wy:jy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new me().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,r){return bi.makeTranslation(e,i,r),this.applyMatrix4(bi),this}scale(e,i,r){return bi.makeScale(e,i,r),this.applyMatrix4(bi),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ia(r,3))}else{const r=Math.min(e.length,i.count);for(let u=0;u<r;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,u=i.length;r<u;r++){const f=i[r];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];_l.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(hi.min,_l.min),hi.expandByPoint(An),An.addVectors(hi.max,_l.max),hi.expandByPoint(An)):(hi.expandByPoint(_l.min),hi.expandByPoint(_l.max))}hi.getCenter(r);let u=0;for(let f=0,h=e.count;f<h;f++)An.fromBufferAttribute(e,f),u=Math.max(u,r.distanceToSquared(An));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],_=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)An.fromBufferAttribute(d,p),_&&(io.fromBufferAttribute(e,p),An.add(io)),u=Math.max(u,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,u=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let V=0;V<r.count;V++)d[V]=new nt,_[V]=new nt;const p=new nt,v=new nt,m=new nt,x=new ce,M=new ce,A=new ce,w=new nt,S=new nt;function y(V,D,b){p.fromBufferAttribute(r,V),v.fromBufferAttribute(r,D),m.fromBufferAttribute(r,b),x.fromBufferAttribute(f,V),M.fromBufferAttribute(f,D),A.fromBufferAttribute(f,b),v.sub(p),m.sub(p),M.sub(x),A.sub(x);const I=1/(M.x*A.y-A.x*M.y);isFinite(I)&&(w.copy(v).multiplyScalar(A.y).addScaledVector(m,-M.y).multiplyScalar(I),S.copy(m).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(I),d[V].add(w),d[D].add(w),d[b].add(w),_[V].add(S),_[D].add(S),_[b].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let V=0,D=F.length;V<D;++V){const b=F[V],I=b.start,rt=b.count;for(let lt=I,ft=I+rt;lt<ft;lt+=3)y(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const P=new nt,U=new nt,G=new nt,X=new nt;function z(V){G.fromBufferAttribute(u,V),X.copy(G);const D=d[V];P.copy(D),P.sub(G.multiplyScalar(G.dot(D))).normalize(),U.crossVectors(X,D);const I=U.dot(_[V])<0?-1:1;h.setXYZW(V,P.x,P.y,P.z,I)}for(let V=0,D=F.length;V<D;++V){const b=F[V],I=b.start,rt=b.count;for(let lt=I,ft=I+rt;lt<ft;lt+=3)z(e.getX(lt+0)),z(e.getX(lt+1)),z(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const u=new nt,f=new nt,h=new nt,d=new nt,_=new nt,p=new nt,v=new nt,m=new nt;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),w=e.getX(x+1),S=e.getX(x+2);u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),v.subVectors(h,f),m.subVectors(u,f),v.cross(m),d.fromBufferAttribute(r,A),_.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),d.add(v),_.add(v),p.add(v),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(w,_.x,_.y,_.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)u.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,f),m.subVectors(u,f),v.cross(m),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(d,_){const p=d.array,v=d.itemSize,m=d.normalized,x=new p.constructor(_.length*v);let M=0,A=0;for(let w=0,S=_.length;w<S;w++){d.isInterleavedBufferAttribute?M=_[w]*d.data.stride+d.offset:M=_[w]*v;for(let y=0;y<v;y++)x[A++]=p[M++]}return new Hi(x,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ys,r=this.index.array,u=this.attributes;for(const d in u){const _=u[d],p=e(_,r);i.setAttribute(d,p)}const f=this.morphAttributes;for(const d in f){const _=[],p=f[d];for(let v=0,m=p.length;v<m;v++){const x=p[v],M=e(x,r);_.push(M)}i.morphAttributes[d]=_}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const p in _)_[p]!==void 0&&(e[p]=_[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const p=r[_];e.data.attributes[_]=p.toJSON(e.data)}const u={};let f=!1;for(const _ in this.morphAttributes){const p=this.morphAttributes[_],v=[];for(let m=0,x=p.length;m<x;m++){const M=p[m];v.push(M.toJSON(e.data))}v.length>0&&(u[_]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const u=e.attributes;for(const p in u){const v=u[p];this.setAttribute(p,v.clone(i))}const f=e.morphAttributes;for(const p in f){const v=[],m=f[p];for(let x=0,M=m.length;x<M;x++)v.push(m[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const m=h[p];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fv=new en,qs=new Kp,uc=new Cl,Hv=new nt,cc=new nt,fc=new nt,hc=new nt,Id=new nt,dc=new nt,Gv=new nt,pc=new nt;class ti extends Rn{constructor(e=new ys,i=new Jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,u=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){dc.set(0,0,0);for(let _=0,p=f.length;_<p;_++){const v=d[_],m=f[_];v!==0&&(Id.fromBufferAttribute(m,e),h?dc.addScaledVector(Id,v):dc.addScaledVector(Id.sub(i),v))}i.add(dc)}return i}raycast(e,i){const r=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(f),qs.copy(e.ray).recast(e.near),!(uc.containsPoint(qs.origin)===!1&&(qs.intersectSphere(uc,Hv)===null||qs.origin.distanceToSquared(Hv)>(e.far-e.near)**2))&&(Fv.copy(f).invert(),qs.copy(e.ray).applyMatrix4(Fv),!(r.boundingBox!==null&&qs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,qs)))}_computeIntersections(e,i,r){let u;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,p=f.attributes.uv,v=f.attributes.uv1,m=f.attributes.normal,x=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,w=x.length;A<w;A++){const S=x[A],y=h[S.materialIndex],F=Math.max(S.start,M.start),P=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let U=F,G=P;U<G;U+=3){const X=d.getX(U),z=d.getX(U+1),V=d.getX(U+2);u=mc(this,y,e,r,p,v,m,X,z,V),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=S.materialIndex,i.push(u))}}else{const A=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let S=A,y=w;S<y;S+=3){const F=d.getX(S),P=d.getX(S+1),U=d.getX(S+2);u=mc(this,h,e,r,p,v,m,F,P,U),u&&(u.faceIndex=Math.floor(S/3),i.push(u))}}else if(_!==void 0)if(Array.isArray(h))for(let A=0,w=x.length;A<w;A++){const S=x[A],y=h[S.materialIndex],F=Math.max(S.start,M.start),P=Math.min(_.count,Math.min(S.start+S.count,M.start+M.count));for(let U=F,G=P;U<G;U+=3){const X=U,z=U+1,V=U+2;u=mc(this,y,e,r,p,v,m,X,z,V),u&&(u.faceIndex=Math.floor(U/3),u.face.materialIndex=S.materialIndex,i.push(u))}}else{const A=Math.max(0,M.start),w=Math.min(_.count,M.start+M.count);for(let S=A,y=w;S<y;S+=3){const F=S,P=S+1,U=S+2;u=mc(this,h,e,r,p,v,m,F,P,U),u&&(u.faceIndex=Math.floor(S/3),i.push(u))}}}}function BT(o,e,i,r,u,f,h,d){let _;if(e.side===ei?_=r.intersectTriangle(h,f,u,!0,d):_=r.intersectTriangle(u,f,h,e.side===_s,d),_===null)return null;pc.copy(d),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,e,i,r,u,f,h,d,_,p){o.getVertexPosition(d,cc),o.getVertexPosition(_,fc),o.getVertexPosition(p,hc);const v=BT(o,e,i,r,cc,fc,hc,Gv);if(v){const m=new nt;Bi.getBarycoord(Gv,cc,fc,hc,m),u&&(v.uv=Bi.getInterpolatedAttribute(u,d,_,p,m,new ce)),f&&(v.uv1=Bi.getInterpolatedAttribute(f,d,_,p,m,new ce)),h&&(v.normal=Bi.getInterpolatedAttribute(h,d,_,p,m,new nt),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:_,c:p,normal:new nt,materialIndex:0};Bi.getNormal(cc,fc,hc,x.normal),v.face=x,v.barycoord=m}return v}class rr extends ys{constructor(e=1,i=1,r=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const _=[],p=[],v=[],m=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,e,h,f,0),A("z","y","x",1,-1,r,i,-e,h,f,1),A("x","z","y",1,1,e,r,i,u,h,2),A("x","z","y",1,-1,e,r,-i,u,h,3),A("x","y","z",1,-1,e,i,r,u,f,4),A("x","y","z",-1,-1,e,i,-r,u,f,5),this.setIndex(_),this.setAttribute("position",new ia(p,3)),this.setAttribute("normal",new ia(v,3)),this.setAttribute("uv",new ia(m,2));function A(w,S,y,F,P,U,G,X,z,V,D){const b=U/z,I=G/V,rt=U/2,lt=G/2,ft=X/2,ht=z+1,Y=V+1;let at=0,Z=0;const xt=new nt;for(let yt=0;yt<Y;yt++){const vt=yt*I-lt;for(let Xt=0;Xt<ht;Xt++){const Ht=Xt*b-rt;xt[w]=Ht*F,xt[S]=vt*P,xt[y]=ft,p.push(xt.x,xt.y,xt.z),xt[w]=0,xt[S]=0,xt[y]=X>0?1:-1,v.push(xt.x,xt.y,xt.z),m.push(Xt/z),m.push(1-yt/V),at+=1}}for(let yt=0;yt<V;yt++)for(let vt=0;vt<z;vt++){const Xt=x+vt+ht*yt,Ht=x+vt+ht*(yt+1),C=x+(vt+1)+ht*(yt+1),L=x+(vt+1)+ht*yt;_.push(Xt,Ht,L),_.push(Ht,C,L),Z+=6}d.addGroup(M,Z,D),M+=Z,x+=at}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const u=o[i][r];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=u.clone():Array.isArray(u)?e[i][r]=u.slice():e[i][r]=u}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const r=yo(o[i]);for(const u in r)e[u]=r[u]}return e}function FT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Zy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const HT={clone:yo,merge:kn};var GT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vs extends wl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GT,this.fragmentShader=VT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=FT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?i.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[u]={type:"m4",value:h.toArray()}:i.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const u in this.extensions)this.extensions[u]===!0&&(r[u]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ky extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new nt,Vv=new ce,Xv=new ce;class Ri extends Ky{constructor(e=50,i=1,r=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Op*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,i){return this.getViewBounds(e,Vv,Xv),i.subVectors(Xv,Vv)}setViewOffset(e,i,r,u,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Rc*.5*this.fov)/this.zoom,r=2*i,u=this.aspect*r,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,p=h.fullHeight;f+=h.offsetX*u/_,i-=h.offsetY*r/p,u*=h.width/_,r*=h.height/p}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ao=-90,so=1;class XT extends Rn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ri(ao,so,e,i);u.layers=this.layers,this.add(u);const f=new Ri(ao,so,e,i);f.layers=this.layers,this.add(f);const h=new Ri(ao,so,e,i);h.layers=this.layers,this.add(h);const d=new Ri(ao,so,e,i);d.layers=this.layers,this.add(d);const _=new Ri(ao,so,e,i);_.layers=this.layers,this.add(_);const p=new Ri(ao,so,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,u,f,h,d,_]=i;for(const p of i)this.remove(p);if(e===na)r.up.set(0,1,0),r.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,p,v]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,u),e.render(i,f),e.setRenderTarget(r,1,u),e.render(i,h),e.setRenderTarget(r,2,u),e.render(i,d),e.setRenderTarget(r,3,u),e.render(i,_),e.setRenderTarget(r,4,u),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,u),e.render(i,v),e.setRenderTarget(m,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Qy extends Yn{constructor(e=[],i=go,r,u,f,h,d,_,p,v){super(e,i,r,u,f,h,d,_,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kT extends ir{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},u=[r,r,r,r,r,r];this.texture=new Qy(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new rr(5,5,5),f=new vs({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:ms});f.uniforms.tEquirect.value=i;const h=new ti(u,f),d=i.minFilter;return i.minFilter===tr&&(i.minFilter=ta),new XT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,u);e.setRenderTarget(f)}}class ds extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let u=null,f=null,h=null;const d=this._targetRay,_=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const S=i.getJointPose(w,r),y=this._getHandJoint(p,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],x=v.position.distanceTo(m.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(u=i.getPose(e.targetRaySpace,r),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return d!==null&&(d.visible=u!==null),_!==null&&(_.visible=f!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ds;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class $p{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=i,this.far=r}clone(){return new $p(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qT extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class jT extends Yn{constructor(e=null,i=1,r=1,u,f,h,d,_,p=pi,v=pi,m,x){super(null,h,d,_,p,v,u,f,m,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kv extends Hi{constructor(e,i,r,u=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=u}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ro=new en,Yv=new en,gc=[],qv=new sr,WT=new en,vl=new ti,yl=new Cl;class ZT extends ti{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new kv(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let u=0;u<r;u++)this.setMatrixAt(u,WT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ro),qv.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(qv)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ro),yl.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(yl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,u=this.morphTexture.source.data.data,f=r.length+1,h=e*f+1;for(let d=0;d<r.length;d++)r[d]=u[h+d]}raycast(e,i){const r=this.matrixWorld,u=this.count;if(vl.geometry=this.geometry,vl.material=this.material,vl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(r),e.ray.intersectsSphere(yl)!==!1))for(let f=0;f<u;f++){this.getMatrixAt(f,ro),Yv.multiplyMatrices(r,ro),vl.matrixWorld=Yv,vl.raycast(e,gc);for(let h=0,d=gc.length;h<d;h++){const _=gc[h];_.instanceId=f,_.object=this,i.push(_)}gc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new kv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,u=r.length+1;this.morphTexture===null&&(this.morphTexture=new jT(new Float32Array(u*this.count),u,this.count,Yp,ea));const f=this.morphTexture.source.data.data;let h=0;for(let p=0;p<r.length;p++)h+=r[p];const d=this.geometry.morphTargetsRelative?1:1-h,_=u*e;f[_]=d,f.set(r,_+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fd=new nt,KT=new nt,QT=new me;class Ca{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,u){return this.normal.set(e,i,r),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const u=Fd.subVectors(r,i).cross(KT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Fd),u=this.normal.dot(r);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||QT.getNormalMatrix(e),u=this.coplanarPoint(Fd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new Cl,JT=new ce(.5,.5),_c=new nt;class tm{constructor(e=new Ca,i=new Ca,r=new Ca,u=new Ca,f=new Ca,h=new Ca){this.planes=[e,i,r,u,f,h]}set(e,i,r,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=na,r=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],_=f[2],p=f[3],v=f[4],m=f[5],x=f[6],M=f[7],A=f[8],w=f[9],S=f[10],y=f[11],F=f[12],P=f[13],U=f[14],G=f[15];if(u[0].setComponents(p-h,M-v,y-A,G-F).normalize(),u[1].setComponents(p+h,M+v,y+A,G+F).normalize(),u[2].setComponents(p+d,M+m,y+w,G+P).normalize(),u[3].setComponents(p-d,M-m,y-w,G-P).normalize(),r)u[4].setComponents(_,x,S,U).normalize(),u[5].setComponents(p-_,M-x,y-S,G-U).normalize();else if(u[4].setComponents(p-_,M-x,y-S,G-U).normalize(),i===na)u[5].setComponents(p+_,M+x,y+S,G+U).normalize();else if(i===Dc)u[5].setComponents(_,x,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);const i=JT.distanceTo(e.center);return js.radius=.7071067811865476+i,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){const i=this.planes,r=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const u=i[r];if(_c.x=u.normal.x>0?e.max.x:e.min.x,_c.y=u.normal.y>0?e.max.y:e.min.y,_c.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jy extends Yn{constructor(e,i,r=er,u,f,h,d=pi,_=pi,p,v=Tl,m=1){if(v!==Tl&&v!==bl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:m};super(x,u,f,h,d,_,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Oc extends ys{constructor(e=1,i=1,r=1,u=32,f=1,h=!1,d=0,_=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:u,heightSegments:f,openEnded:h,thetaStart:d,thetaLength:_};const p=this;u=Math.floor(u),f=Math.floor(f);const v=[],m=[],x=[],M=[];let A=0;const w=[],S=r/2;let y=0;F(),h===!1&&(e>0&&P(!0),i>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new ia(m,3)),this.setAttribute("normal",new ia(x,3)),this.setAttribute("uv",new ia(M,2));function F(){const U=new nt,G=new nt;let X=0;const z=(i-e)/r;for(let V=0;V<=f;V++){const D=[],b=V/f,I=b*(i-e)+e;for(let rt=0;rt<=u;rt++){const lt=rt/u,ft=lt*_+d,ht=Math.sin(ft),Y=Math.cos(ft);G.x=I*ht,G.y=-b*r+S,G.z=I*Y,m.push(G.x,G.y,G.z),U.set(ht,z,Y).normalize(),x.push(U.x,U.y,U.z),M.push(lt,1-b),D.push(A++)}w.push(D)}for(let V=0;V<u;V++)for(let D=0;D<f;D++){const b=w[D][V],I=w[D+1][V],rt=w[D+1][V+1],lt=w[D][V+1];(e>0||D!==0)&&(v.push(b,I,lt),X+=3),(i>0||D!==f-1)&&(v.push(I,rt,lt),X+=3)}p.addGroup(y,X,0),y+=X}function P(U){const G=A,X=new ce,z=new nt;let V=0;const D=U===!0?e:i,b=U===!0?1:-1;for(let rt=1;rt<=u;rt++)m.push(0,S*b,0),x.push(0,b,0),M.push(.5,.5),A++;const I=A;for(let rt=0;rt<=u;rt++){const ft=rt/u*_+d,ht=Math.cos(ft),Y=Math.sin(ft);z.x=D*Y,z.y=S*b,z.z=D*ht,m.push(z.x,z.y,z.z),x.push(0,b,0),X.x=ht*.5+.5,X.y=Y*.5*b+.5,M.push(X.x,X.y),A++}for(let rt=0;rt<u;rt++){const lt=G+rt,ft=I+rt;U===!0?v.push(ft,ft+1,lt):v.push(ft+1,ft,lt),V+=3}p.addGroup(y,V,U===!0?1:2),y+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class em extends Oc{constructor(e=1,i=1,r=32,u=1,f=!1,h=0,d=Math.PI*2){super(0,e,i,r,u,f,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:u,openEnded:f,thetaStart:h,thetaLength:d}}static fromJSON(e){return new em(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pc extends ys{constructor(e=1,i=1,r=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:u};const f=e/2,h=i/2,d=Math.floor(r),_=Math.floor(u),p=d+1,v=_+1,m=e/d,x=i/_,M=[],A=[],w=[],S=[];for(let y=0;y<v;y++){const F=y*x-h;for(let P=0;P<p;P++){const U=P*m-f;A.push(U,-F,0),w.push(0,0,1),S.push(P/d),S.push(1-y/_)}}for(let y=0;y<_;y++)for(let F=0;F<d;F++){const P=F+p*y,U=F+p*(y+1),G=F+1+p*(y+1),X=F+1+p*y;M.push(P,U,X),M.push(U,G,X)}this.setIndex(M),this.setAttribute("position",new ia(A,3)),this.setAttribute("normal",new ia(w,3)),this.setAttribute("uv",new ia(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $y extends wl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vy,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $T extends wl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends wl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tx extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class e1 extends tx{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Hd=new en,jv=new nt,Wv=new nt;class n1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=aa,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tm,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;jv.setFromMatrixPosition(e.matrixWorld),i.position.copy(jv),Wv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Wv),i.updateMatrixWorld(),Hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ex extends Ky{constructor(e=-1,i=1,r=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=u+i,_=u-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,h=f+p*this.view.width,d-=v*this.view.offsetY,_=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class i1 extends n1{constructor(){super(new ex(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a1 extends tx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new i1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class s1 extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zv=new en;class r1{constructor(e,i,r=0,u=1/0){this.ray=new Kp(e,i),this.near=r,this.far=u,this.camera=null,this.layers=new Qp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Zv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zv),this}intersectObject(e,i=!0,r=[]){return Pp(e,this,r,i),r.sort(Kv),r}intersectObjects(e,i=!0,r=[]){for(let u=0,f=e.length;u<f;u++)Pp(e[u],this,r,i);return r.sort(Kv),r}}function Kv(o,e){return o.distance-e.distance}function Pp(o,e,i,r){let u=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(u=!1),u===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Pp(f[h],e,i,!0)}}class Qv{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o1 extends ar{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jv(o,e,i,r){const u=l1(r);switch(i){case By:return o*e;case Yp:return o*e/u.components*u.byteLength;case qp:return o*e/u.components*u.byteLength;case Hy:return o*e*2/u.components*u.byteLength;case jp:return o*e*2/u.components*u.byteLength;case Fy:return o*e*3/u.components*u.byteLength;case Fi:return o*e*4/u.components*u.byteLength;case Wp:return o*e*4/u.components*u.byteLength;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case up:case fp:return Math.max(o,16)*Math.max(e,8)/4;case lp:case cp:return Math.max(o,8)*Math.max(e,8)/2;case hp:case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case _p:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ac:case wp:case Dp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Gy:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Np:case Lp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function l1(o){switch(o){case aa:case Py:return{byteLength:1,components:1};case Ml:case zy:case Al:return{byteLength:2,components:1};case Xp:case kp:return{byteLength:2,components:4};case er:case Vp:case ea:return{byteLength:4,components:1};case Iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nx(){let o=null,e=!1,i=null,r=null;function u(f,h){i(f,h),r=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function u1(o){const e=new WeakMap;function i(d,_){const p=d.array,v=d.usage,m=p.byteLength,x=o.createBuffer();o.bindBuffer(_,x),o.bufferData(_,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,_,p){const v=_.array,m=_.updateRanges;if(o.bindBuffer(p,d),m.length===0)o.bufferSubData(p,0,v);else{m.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<m.length;M++){const A=m[x],w=m[M];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++x,m[x]=w)}m.length=x+1;for(let M=0,A=m.length;M<A;M++){const w=m[M];o.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}_.clearUpdateRanges()}_.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=e.get(d);_&&(o.deleteBuffer(_.buffer),e.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,_));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,_),p.version=d.version}}return{get:u,remove:f,update:h}}var c1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ob=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ub=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,db=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_A=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:c1,alphahash_pars_fragment:f1,alphamap_fragment:h1,alphamap_pars_fragment:d1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:_1,batching_pars_vertex:v1,batching_vertex:y1,begin_vertex:x1,beginnormal_vertex:S1,bsdfs:M1,iridescence_fragment:E1,bumpmap_pars_fragment:T1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:C1,color_fragment:w1,color_pars_fragment:D1,color_pars_vertex:U1,color_vertex:N1,common:L1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:P1,displacementmap_pars_vertex:z1,displacementmap_vertex:I1,emissivemap_fragment:B1,emissivemap_pars_fragment:F1,colorspace_fragment:H1,colorspace_pars_fragment:G1,envmap_fragment:V1,envmap_common_pars_fragment:X1,envmap_pars_fragment:k1,envmap_pars_vertex:Y1,envmap_physical_pars_fragment:nb,envmap_vertex:q1,fog_vertex:j1,fog_pars_vertex:W1,fog_fragment:Z1,fog_pars_fragment:K1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:J1,lights_lambert_fragment:$1,lights_lambert_pars_fragment:tb,lights_pars_begin:eb,lights_toon_fragment:ib,lights_toon_pars_fragment:ab,lights_phong_fragment:sb,lights_phong_pars_fragment:rb,lights_physical_fragment:ob,lights_physical_pars_fragment:lb,lights_fragment_begin:ub,lights_fragment_maps:cb,lights_fragment_end:fb,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:db,logdepthbuf_pars_vertex:pb,logdepthbuf_vertex:mb,map_fragment:gb,map_pars_fragment:_b,map_particle_fragment:vb,map_particle_pars_fragment:yb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:Sb,morphinstance_vertex:Mb,morphcolor_vertex:Eb,morphnormal_vertex:Tb,morphtarget_pars_vertex:bb,morphtarget_vertex:Ab,normal_fragment_begin:Rb,normal_fragment_maps:Cb,normal_pars_fragment:wb,normal_pars_vertex:Db,normal_vertex:Ub,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:Lb,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:zb,opaque_fragment:Ib,packing:Bb,premultiplied_alpha_fragment:Fb,project_vertex:Hb,dithering_fragment:Gb,dithering_pars_fragment:Vb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:kb,shadowmap_pars_fragment:Yb,shadowmap_pars_vertex:qb,shadowmap_vertex:jb,shadowmask_pars_fragment:Wb,skinbase_vertex:Zb,skinning_pars_vertex:Kb,skinning_vertex:Qb,skinnormal_vertex:Jb,specularmap_fragment:$b,specularmap_pars_fragment:tA,tonemapping_fragment:eA,tonemapping_pars_fragment:nA,transmission_fragment:iA,transmission_pars_fragment:aA,uv_pars_fragment:sA,uv_pars_vertex:rA,uv_vertex:oA,worldpos_vertex:lA,background_vert:uA,background_frag:cA,backgroundCube_vert:fA,backgroundCube_frag:hA,cube_vert:dA,cube_frag:pA,depth_vert:mA,depth_frag:gA,distanceRGBA_vert:_A,distanceRGBA_frag:vA,equirect_vert:yA,equirect_frag:xA,linedashed_vert:SA,linedashed_frag:MA,meshbasic_vert:EA,meshbasic_frag:TA,meshlambert_vert:bA,meshlambert_frag:AA,meshmatcap_vert:RA,meshmatcap_frag:CA,meshnormal_vert:wA,meshnormal_frag:DA,meshphong_vert:UA,meshphong_frag:NA,meshphysical_vert:LA,meshphysical_frag:OA,meshtoon_vert:PA,meshtoon_frag:zA,points_vert:IA,points_frag:BA,shadow_vert:FA,shadow_frag:HA,sprite_vert:GA,sprite_frag:VA},Bt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},$i={basic:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:kn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:kn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new xe(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:kn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:kn([Bt.points,Bt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:kn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:kn([Bt.common,Bt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:kn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:kn([Bt.sprite,Bt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:kn([Bt.common,Bt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:kn([Bt.lights,Bt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};$i.physical={uniforms:kn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const vc={r:0,b:0,g:0},Ws=new sa,XA=new en;function kA(o,e,i,r,u,f,h){const d=new xe(0);let _=f===!0?0:1,p,v,m=null,x=0,M=null;function A(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:e).get(U)),U}function w(P){let U=!1;const G=A(P);G===null?y(d,_):G&&G.isColor&&(y(G,1),U=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?r.buffers.color.setClear(0,0,0,1,h):X==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(P,U){const G=A(U);G&&(G.isCubeTexture||G.mapping===Lc)?(v===void 0&&(v=new ti(new rr(1,1,1),new vs({name:"BackgroundCubeMaterial",uniforms:yo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(X,z,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Ws.copy(U.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),v.material.uniforms.envMap.value=G,v.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Ws)),v.material.toneMapped=Ue.getTransfer(G.colorSpace)!==ke,(m!==G||x!==G.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,m=G,x=G.version,M=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new ti(new Pc(2,2),new vs({name:"BackgroundMaterial",uniforms:yo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(G.colorSpace)!==ke,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(m!==G||x!==G.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,m=G,x=G.version,M=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function y(P,U){P.getRGB(vc,Zy(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,U,h)}function F(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),_=U,y(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(P){_=P,y(d,_)},render:w,addToRenderList:S,dispose:F}}function YA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},u=x(null);let f=u,h=!1;function d(b,I,rt,lt,ft){let ht=!1;const Y=m(lt,rt,I);f!==Y&&(f=Y,p(f.object)),ht=M(b,lt,rt,ft),ht&&A(b,lt,rt,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,U(b,I,rt,lt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function _(){return o.createVertexArray()}function p(b){return o.bindVertexArray(b)}function v(b){return o.deleteVertexArray(b)}function m(b,I,rt){const lt=rt.wireframe===!0;let ft=r[b.id];ft===void 0&&(ft={},r[b.id]=ft);let ht=ft[I.id];ht===void 0&&(ht={},ft[I.id]=ht);let Y=ht[lt];return Y===void 0&&(Y=x(_()),ht[lt]=Y),Y}function x(b){const I=[],rt=[],lt=[];for(let ft=0;ft<i;ft++)I[ft]=0,rt[ft]=0,lt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:rt,attributeDivisors:lt,object:b,attributes:{},index:null}}function M(b,I,rt,lt){const ft=f.attributes,ht=I.attributes;let Y=0;const at=rt.getAttributes();for(const Z in at)if(at[Z].location>=0){const yt=ft[Z];let vt=ht[Z];if(vt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),yt===void 0||yt.attribute!==vt||vt&&yt.data!==vt.data)return!0;Y++}return f.attributesNum!==Y||f.index!==lt}function A(b,I,rt,lt){const ft={},ht=I.attributes;let Y=0;const at=rt.getAttributes();for(const Z in at)if(at[Z].location>=0){let yt=ht[Z];yt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(yt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(yt=b.instanceColor));const vt={};vt.attribute=yt,yt&&yt.data&&(vt.data=yt.data),ft[Z]=vt,Y++}f.attributes=ft,f.attributesNum=Y,f.index=lt}function w(){const b=f.newAttributes;for(let I=0,rt=b.length;I<rt;I++)b[I]=0}function S(b){y(b,0)}function y(b,I){const rt=f.newAttributes,lt=f.enabledAttributes,ft=f.attributeDivisors;rt[b]=1,lt[b]===0&&(o.enableVertexAttribArray(b),lt[b]=1),ft[b]!==I&&(o.vertexAttribDivisor(b,I),ft[b]=I)}function F(){const b=f.newAttributes,I=f.enabledAttributes;for(let rt=0,lt=I.length;rt<lt;rt++)I[rt]!==b[rt]&&(o.disableVertexAttribArray(rt),I[rt]=0)}function P(b,I,rt,lt,ft,ht,Y){Y===!0?o.vertexAttribIPointer(b,I,rt,ft,ht):o.vertexAttribPointer(b,I,rt,lt,ft,ht)}function U(b,I,rt,lt){w();const ft=lt.attributes,ht=rt.getAttributes(),Y=I.defaultAttributeValues;for(const at in ht){const Z=ht[at];if(Z.location>=0){let xt=ft[at];if(xt===void 0&&(at==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),at==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),xt!==void 0){const yt=xt.normalized,vt=xt.itemSize,Xt=e.get(xt);if(Xt===void 0)continue;const Ht=Xt.buffer,C=Xt.type,L=Xt.bytesPerElement,$=C===o.INT||C===o.UNSIGNED_INT||xt.gpuType===Vp;if(xt.isInterleavedBufferAttribute){const ct=xt.data,At=ct.stride,Ct=xt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<Z.locationSize;Ot++)y(Z.location+Ot,ct.meshPerAttribute);b.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ot=0;Ot<Z.locationSize;Ot++)S(Z.location+Ot);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let Ot=0;Ot<Z.locationSize;Ot++)P(Z.location+Ot,vt/Z.locationSize,C,yt,At*L,(Ct+vt/Z.locationSize*Ot)*L,$)}else{if(xt.isInstancedBufferAttribute){for(let ct=0;ct<Z.locationSize;ct++)y(Z.location+ct,xt.meshPerAttribute);b.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ct=0;ct<Z.locationSize;ct++)S(Z.location+ct);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let ct=0;ct<Z.locationSize;ct++)P(Z.location+ct,vt/Z.locationSize,C,yt,vt*L,vt/Z.locationSize*ct*L,$)}}else if(Y!==void 0){const yt=Y[at];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(Z.location,yt);break;case 3:o.vertexAttrib3fv(Z.location,yt);break;case 4:o.vertexAttrib4fv(Z.location,yt);break;default:o.vertexAttrib1fv(Z.location,yt)}}}}F()}function G(){V();for(const b in r){const I=r[b];for(const rt in I){const lt=I[rt];for(const ft in lt)v(lt[ft].object),delete lt[ft];delete I[rt]}delete r[b]}}function X(b){if(r[b.id]===void 0)return;const I=r[b.id];for(const rt in I){const lt=I[rt];for(const ft in lt)v(lt[ft].object),delete lt[ft];delete I[rt]}delete r[b.id]}function z(b){for(const I in r){const rt=r[I];if(rt[b.id]===void 0)continue;const lt=rt[b.id];for(const ft in lt)v(lt[ft].object),delete lt[ft];delete rt[b.id]}}function V(){D(),h=!0,f!==u&&(f=u,p(f.object))}function D(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:X,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:S,disableUnusedAttributes:F}}function qA(o,e,i){let r;function u(p){r=p}function f(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,m){m!==0&&(o.drawArraysInstanced(r,p,v,m),i.update(v,r,m))}function d(p,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,m);let M=0;for(let A=0;A<m;A++)M+=v[A];i.update(M,r,1)}function _(p,v,m,x){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],v[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,m);let A=0;for(let w=0;w<m;w++)A+=v[w]*x[w];i.update(A,r,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function jA(o,e,i,r){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(z){return!(z!==Fi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const V=z===Al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==aa&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ea&&!V)}function _(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=_(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const m=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=A>0,X=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:F,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:G,maxSamples:X}}function WA(o){const e=this;let i=null,r=0,u=!1,f=!1;const h=new Ca,d=new me,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const M=m.length!==0||x||r!==0||u;return u=x,r=m.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,x){i=v(m,x,0)},this.setState=function(m,x,M){const A=m.clippingPlanes,w=m.clipIntersection,S=m.clipShadows,y=o.get(m);if(!u||A===null||A.length===0||f&&!S)f?v(null):p();else{const F=f?0:r,P=F*4;let U=y.clippingState||null;_.value=U,U=v(A,x,P,M);for(let G=0;G!==P;++G)U[G]=i[G];y.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function p(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(m,x,M,A){const w=m!==null?m.length:0;let S=null;if(w!==0){if(S=_.value,A!==!0||S===null){const y=M+w*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,U=M;P!==w;++P,U+=4)h.copy(m[P]).applyMatrix4(F,d),h.normal.toArray(S,U),S[U+3]=h.constant}_.value=S,_.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function ZA(o){let e=new WeakMap;function i(h,d){return d===ap?h.mapping=go:d===sp&&(h.mapping=_o),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ap||d===sp)if(e.has(h)){const _=e.get(h).texture;return i(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const p=new kT(_.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",u),i(p.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const co=4,$v=[.125,.215,.35,.446,.526,.582],Js=20,Gd=new ex,ty=new xe;let Vd=null,Xd=0,kd=0,Yd=!1;const Ks=(1+Math.sqrt(5))/2,oo=1/Ks,ey=[new nt(-Ks,oo,0),new nt(Ks,oo,0),new nt(-oo,0,Ks),new nt(oo,0,Ks),new nt(0,Ks,-oo),new nt(0,Ks,oo),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],KA=new nt;class ny{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,u=100,f={}){const{size:h=256,position:d=KA}=f;Vd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,r,u,_,d),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ay(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Xd,kd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===go||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ta,minFilter:ta,generateMipmaps:!1,type:Al,format:Fi,colorSpace:vo,depthBuffer:!1},u=iy(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iy(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QA(f)),this._blurMaterial=JA(f,e,i)}return u}_compileMaterial(e){const i=new ti(this._lodPlanes[0],e);this._renderer.compile(i,Gd)}_sceneToCubeUV(e,i,r,u,f){const _=new Ri(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,M=m.toneMapping;m.getClearColor(ty),m.toneMapping=gs,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(u),m.clearDepth(),m.setRenderTarget(null));const w=new Jp({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),S=new ti(new rr,w);let y=!1;const F=e.background;F?F.isColor&&(w.color.copy(F),e.background=null,y=!0):(w.color.copy(ty),y=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(_.up.set(0,p[P],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[P],f.y,f.z)):U===1?(_.up.set(0,0,p[P]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[P],f.z)):(_.up.set(0,p[P],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[P]));const G=this._cubeSize;yc(u,U*G,P>2?G:0,G,G),m.setRenderTarget(u),y&&m.render(S,_),m.render(e,_)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=M,m.autoClear=x,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,u=e.mapping===go||e.mapping===_o;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=sy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ay());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new ti(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const _=this._cubeSize;yc(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(h,Gd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=ey[(u-f-1)%ey.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,u,"latitudinal",f),this._halfBlur(h,e,r,r,u,"longitudinal",f)}_halfBlur(e,i,r,u,f,h,d){const _=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new ti(this._lodPlanes[u],p),x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Js-1),w=f/A,S=isFinite(f)?1+Math.floor(v*w):Js;S>Js&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Js}`);const y=[];let F=0;for(let z=0;z<Js;++z){const V=z/w,D=Math.exp(-V*V/2);y.push(D),z===0?F+=D:z<S&&(F+=2*D)}for(let z=0;z<y.length;z++)y[z]=y[z]/F;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=y,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=A,x.mipInt.value=P-r;const U=this._sizeLods[u],G=3*U*(u>P-co?u-P+co:0),X=4*(this._cubeSize-U);yc(i,G,X,3*U,2*U),_.setRenderTarget(i),_.render(m,Gd)}}function QA(o){const e=[],i=[],r=[];let u=o;const f=o-co+1+$v.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);i.push(d);let _=1/d;h>o-co?_=$v[h-o+co-1]:h===0&&(_=0),r.push(_);const p=1/(d-2),v=-p,m=1+p,x=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,A=6,w=3,S=2,y=1,F=new Float32Array(w*A*M),P=new Float32Array(S*A*M),U=new Float32Array(y*A*M);for(let X=0;X<M;X++){const z=X%3*2/3-1,V=X>2?0:-1,D=[z,V,0,z+2/3,V,0,z+2/3,V+1,0,z,V,0,z+2/3,V+1,0,z,V+1,0];F.set(D,w*A*X),P.set(x,S*A*X);const b=[X,X,X,X,X,X];U.set(b,y*A*X)}const G=new ys;G.setAttribute("position",new Hi(F,w)),G.setAttribute("uv",new Hi(P,S)),G.setAttribute("faceIndex",new Hi(U,y)),e.push(G),u>co&&u--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function iy(o,e,i){const r=new ir(o,e,i);return r.texture.mapping=Lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yc(o,e,i,r,u){o.viewport.set(e,i,r,u),o.scissor.set(e,i,r,u)}function JA(o,e,i){const r=new Float32Array(Js),u=new nt(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function ay(){return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function sy(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function nm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $A(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const _=d.mapping,p=_===ap||_===sp,v=_===go||_===_o;if(p||v){let m=e.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new ny(o)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&u(M)?(i===null&&(i=new ny(o)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function u(d){let _=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&_++;return _===p}function f(d){const _=d.target;_.removeEventListener("dispose",f);const p=e.get(_);p!==void 0&&(e.delete(_),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function tR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let u;switch(r){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(r)}return e[r]=u,u}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const u=i(r);return u===null&&ho("THREE.WebGLRenderer: "+r+" extension not supported."),u}}}function eR(o,e,i,r){const u={},f=new WeakMap;function h(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete u[x.id];const M=f.get(x);M&&(e.remove(M),f.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(m,x){return u[x.id]===!0||(x.addEventListener("dispose",h),u[x.id]=!0,i.memory.geometries++),x}function _(m){const x=m.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(m){const x=[],M=m.index,A=m.attributes.position;let w=0;if(M!==null){const F=M.array;w=M.version;for(let P=0,U=F.length;P<U;P+=3){const G=F[P+0],X=F[P+1],z=F[P+2];x.push(G,X,X,z,z,G)}}else if(A!==void 0){const F=A.array;w=A.version;for(let P=0,U=F.length/3-1;P<U;P+=3){const G=P+0,X=P+1,z=P+2;x.push(G,X,X,z,z,G)}}else return;const S=new(ky(x)?Wy:jy)(x,1);S.version=w;const y=f.get(m);y&&e.remove(y),f.set(m,S)}function v(m){const x=f.get(m);if(x){const M=m.index;M!==null&&x.version<M.version&&p(m)}else p(m);return f.get(m)}return{get:d,update:_,getWireframeAttribute:v}}function nR(o,e,i){let r;function u(x){r=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function _(x,M){o.drawElements(r,M,f,x*h),i.update(M,r,1)}function p(x,M,A){A!==0&&(o.drawElementsInstanced(r,M,f,x*h,A),i.update(M,r,A))}function v(x,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,x,0,A);let S=0;for(let y=0;y<A;y++)S+=M[y];i.update(S,r,1)}function m(x,M,A,w){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<x.length;y++)p(x[y]/h,M[y],w[y]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,f,x,0,w,0,A);let y=0;for(let F=0;F<A;F++)y+=M[F]*w[F];i.update(y,r,1)}}this.setMode=u,this.setIndex=d,this.render=_,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function iR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:r}}function aR(o,e,i){const r=new WeakMap,u=new un;function f(h,d,_){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==m){let b=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var M=b;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),w===!0&&(U=2),S===!0&&(U=3);let G=d.attributes.position.count*U,X=1;G>e.maxTextureSize&&(X=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*X*4*m),V=new Yy(z,G,X,m);V.type=ea,V.needsUpdate=!0;const D=U*4;for(let I=0;I<m;I++){const rt=y[I],lt=F[I],ft=P[I],ht=G*X*4*I;for(let Y=0;Y<rt.count;Y++){const at=Y*D;A===!0&&(u.fromBufferAttribute(rt,Y),z[ht+at+0]=u.x,z[ht+at+1]=u.y,z[ht+at+2]=u.z,z[ht+at+3]=0),w===!0&&(u.fromBufferAttribute(lt,Y),z[ht+at+4]=u.x,z[ht+at+5]=u.y,z[ht+at+6]=u.z,z[ht+at+7]=0),S===!0&&(u.fromBufferAttribute(ft,Y),z[ht+at+8]=u.x,z[ht+at+9]=u.y,z[ht+at+10]=u.z,z[ht+at+11]=ft.itemSize===4?u.w:1)}}x={count:m,texture:V,size:new ce(G,X)},r.set(d,x),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const w=d.morphTargetsRelative?1:1-A;_.getUniforms().setValue(o,"morphTargetBaseInfluence",w),_.getUniforms().setValue(o,"morphTargetInfluences",p)}_.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function sR(o,e,i,r){let u=new WeakMap;function f(_){const p=r.render.frame,v=_.geometry,m=e.get(_,v);if(u.get(m)!==p&&(e.update(m),u.set(m,p)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),u.get(_)!==p&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),u.set(_,p))),_.isSkinnedMesh){const x=_.skeleton;u.get(x)!==p&&(x.update(),u.set(x,p))}return m}function h(){u=new WeakMap}function d(_){const p=_.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:f,dispose:h}}const ix=new Yn,ry=new Jy(1,1),ax=new Yy,sx=new RT,rx=new Qy,oy=[],ly=[],uy=new Float32Array(16),cy=new Float32Array(9),fy=new Float32Array(4);function xo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const u=e*i;let f=oy[u];if(f===void 0&&(f=new Float32Array(u),oy[u]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function zc(o,e){let i=ly[e];i===void 0&&(i=new Int32Array(e),ly[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function rR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function oR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function lR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function uR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function cR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;fy.set(r),o.uniformMatrix2fv(this.addr,!1,fy),Mn(i,r)}}function fR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;cy.set(r),o.uniformMatrix3fv(this.addr,!1,cy),Mn(i,r)}}function hR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;uy.set(r),o.uniformMatrix4fv(this.addr,!1,uy),Mn(i,r)}}function dR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function pR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function gR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function _R(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function vR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function yR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function xR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function SR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(ry.compareFunction=Xy,f=ry):f=ix,i.setTexture2D(e||f,u)}function MR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture3D(e||sx,u)}function ER(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTextureCube(e||rx,u)}function TR(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture2DArray(e||ax,u)}function bR(o){switch(o){case 5126:return rR;case 35664:return oR;case 35665:return lR;case 35666:return uR;case 35674:return cR;case 35675:return fR;case 35676:return hR;case 5124:case 35670:return dR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return yR;case 36296:return xR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return TR}}function AR(o,e){o.uniform1fv(this.addr,e)}function RR(o,e){const i=xo(e,this.size,2);o.uniform2fv(this.addr,i)}function CR(o,e){const i=xo(e,this.size,3);o.uniform3fv(this.addr,i)}function wR(o,e){const i=xo(e,this.size,4);o.uniform4fv(this.addr,i)}function DR(o,e){const i=xo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function UR(o,e){const i=xo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function NR(o,e){const i=xo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function LR(o,e){o.uniform1iv(this.addr,e)}function OR(o,e){o.uniform2iv(this.addr,e)}function PR(o,e){o.uniform3iv(this.addr,e)}function zR(o,e){o.uniform4iv(this.addr,e)}function IR(o,e){o.uniform1uiv(this.addr,e)}function BR(o,e){o.uniform2uiv(this.addr,e)}function FR(o,e){o.uniform3uiv(this.addr,e)}function HR(o,e){o.uniform4uiv(this.addr,e)}function GR(o,e,i){const r=this.cache,u=e.length,f=zc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==u;++h)i.setTexture2D(e[h]||ix,f[h])}function VR(o,e,i){const r=this.cache,u=e.length,f=zc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==u;++h)i.setTexture3D(e[h]||sx,f[h])}function XR(o,e,i){const r=this.cache,u=e.length,f=zc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==u;++h)i.setTextureCube(e[h]||rx,f[h])}function kR(o,e,i){const r=this.cache,u=e.length,f=zc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),Mn(r,f));for(let h=0;h!==u;++h)i.setTexture2DArray(e[h]||ax,f[h])}function YR(o){switch(o){case 5126:return AR;case 35664:return RR;case 35665:return CR;case 35666:return wR;case 35674:return DR;case 35675:return UR;case 35676:return NR;case 5124:case 35670:return LR;case 35667:case 35671:return OR;case 35668:case 35672:return PR;case 35669:case 35673:return zR;case 5125:return IR;case 36294:return BR;case 36295:return FR;case 36296:return HR;case 35678:case 36198:case 36298:case 36306:case 35682:return GR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return XR;case 36289:case 36303:case 36311:case 36292:return kR}}class qR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=bR(i.type)}}class jR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=YR(i.type)}}class WR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,i[d.id],r)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function hy(o,e){o.seq.push(e),o.map[e.id]=e}function ZR(o,e,i){const r=o.name,u=r.length;for(qd.lastIndex=0;;){const f=qd.exec(r),h=qd.lastIndex;let d=f[1];const _=f[2]==="]",p=f[3];if(_&&(d=d|0),p===void 0||p==="["&&h+2===u){hy(i,p===void 0?new qR(d,o,e):new jR(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new WR(d),hy(i,m)),i=m}}}class Cc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(i,u),h=e.getUniformLocation(i,f.name);ZR(f,h,this)}}setValue(e,i,r,u){const f=this.map[i];f!==void 0&&f.setValue(e,r,u)}setOptional(e,i,r){const u=i[r];u!==void 0&&this.setValue(e,r,u)}static upload(e,i,r,u){for(let f=0,h=i.length;f!==h;++f){const d=i[f],_=r[d.id];_.needsUpdate!==!1&&d.setValue(e,_.value,u)}}static seqWithValue(e,i){const r=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in i&&r.push(h)}return r}}function dy(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const KR=37297;let QR=0;function JR(o,e){const i=o.split(`
`),r=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=u;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const py=new me;function $R(o){Ue._getMatrix(py,Ue.workingColorSpace,o);const e=`mat3( ${py.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function my(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+JR(o.getShaderSource(e),d)}else return f}function t2(o,e){const i=$R(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function e2(o,e){let i;switch(e){case eT:i="Linear";break;case nT:i="Reinhard";break;case iT:i="Cineon";break;case Ly:i="ACESFilmic";break;case sT:i="AgX";break;case rT:i="Neutral";break;case aT:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new nt;function n2(){Ue.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),e=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function a2(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function s2(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<r;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Sl(o){return o!==""}function gy(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _y(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r2=/^[ \t]*#include +<([\w\d./]+)>/gm;function zp(o){return o.replace(r2,l2)}const o2=new Map;function l2(o,e){let i=ge[e];if(i===void 0){const r=o2.get(e);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zp(i)}const u2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vy(o){return o.replace(u2,c2)}function c2(o,e,i,r){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function yy(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f2(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Dy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Uy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ra&&(e="SHADOWMAP_TYPE_VSM"),e}function h2(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case go:case _o:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d2(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function p2(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ny:e="ENVMAP_BLENDING_MULTIPLY";break;case $E:e="ENVMAP_BLENDING_MIX";break;case tT:e="ENVMAP_BLENDING_ADD";break}return e}function m2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function g2(o,e,i,r){const u=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const _=f2(i),p=h2(i),v=d2(i),m=p2(i),x=m2(i),M=i2(i),A=a2(f),w=u.createProgram();let S,y,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Sl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Sl).join(`
`),y.length>0&&(y+=`
`)):(S=[yy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),y=[yy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==gs?"#define TONE_MAPPING":"",i.toneMapping!==gs?ge.tonemapping_pars_fragment:"",i.toneMapping!==gs?e2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,t2("linearToOutputTexel",i.outputColorSpace),n2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Sl).join(`
`)),h=zp(h),h=gy(h,i),h=_y(h,i),d=zp(d),d=gy(d,i),d=_y(d,i),h=vy(h),d=vy(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===Av?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=F+S+h,U=F+y+d,G=dy(u,u.VERTEX_SHADER,P),X=dy(u,u.FRAGMENT_SHADER,U);u.attachShader(w,G),u.attachShader(w,X),i.index0AttributeName!==void 0?u.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function z(I){if(o.debug.checkShaderErrors){const rt=u.getProgramInfoLog(w)||"",lt=u.getShaderInfoLog(G)||"",ft=u.getShaderInfoLog(X)||"",ht=rt.trim(),Y=lt.trim(),at=ft.trim();let Z=!0,xt=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,G,X);else{const yt=my(u,G,"vertex"),vt=my(u,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ht+`
`+yt+`
`+vt)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(Y===""||at==="")&&(xt=!1);xt&&(I.diagnostics={runnable:Z,programLog:ht,vertexShader:{log:Y,prefix:S},fragmentShader:{log:at,prefix:y}})}u.deleteShader(G),u.deleteShader(X),V=new Cc(u,w),D=s2(u,w)}let V;this.getUniforms=function(){return V===void 0&&z(this),V};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=u.getProgramParameter(w,KR)),b},this.destroy=function(){r.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=X,this}let _2=0;class v2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new y2(e),i.set(e,r)),r}}class y2{constructor(e){this.id=_2++,this.code=e,this.usedTimes=0}}function x2(o,e,i,r,u,f,h){const d=new Qp,_=new v2,p=new Set,v=[],m=u.logarithmicDepthBuffer,x=u.vertexTextures;let M=u.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,b,I,rt,lt){const ft=rt.fog,ht=lt.geometry,Y=D.isMeshStandardMaterial?rt.environment:null,at=(D.isMeshStandardMaterial?i:e).get(D.envMap||Y),Z=at&&at.mapping===Lc?at.image.height:null,xt=A[D.type];D.precision!==null&&(M=u.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const yt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,vt=yt!==void 0?yt.length:0;let Xt=0;ht.morphAttributes.position!==void 0&&(Xt=1),ht.morphAttributes.normal!==void 0&&(Xt=2),ht.morphAttributes.color!==void 0&&(Xt=3);let Ht,C,L,$;if(xt){const Te=$i[xt];Ht=Te.vertexShader,C=Te.fragmentShader}else Ht=D.vertexShader,C=D.fragmentShader,_.update(D),L=_.getVertexShaderID(D),$=_.getFragmentShaderID(D);const ct=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Ct=lt.isInstancedMesh===!0,Ot=lt.isBatchedMesh===!0,Ut=!!D.map,Nt=!!D.matcap,B=!!at,Pe=!!D.aoMap,$t=!!D.lightMap,he=!!D.bumpMap,Gt=!!D.normalMap,se=!!D.displacementMap,Ft=!!D.emissiveMap,le=!!D.metalnessMap,qe=!!D.roughnessMap,Ze=D.anisotropy>0,N=D.clearcoat>0,T=D.dispersion>0,et=D.iridescence>0,mt=D.sheen>0,St=D.transmission>0,dt=Ze&&!!D.anisotropyMap,qt=N&&!!D.clearcoatMap,Rt=N&&!!D.clearcoatNormalMap,Kt=N&&!!D.clearcoatRoughnessMap,Jt=et&&!!D.iridescenceMap,Tt=et&&!!D.iridescenceThicknessMap,Pt=mt&&!!D.sheenColorMap,ae=mt&&!!D.sheenRoughnessMap,Qt=!!D.specularMap,zt=!!D.specularColorMap,fe=!!D.specularIntensityMap,k=St&&!!D.transmissionMap,bt=St&&!!D.thicknessMap,Dt=!!D.gradientMap,Yt=!!D.alphaMap,Mt=D.alphaTest>0,_t=!!D.alphaHash,Zt=!!D.extensions;let ue=gs;D.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ve={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:Ht,fragmentShader:C,defines:D.defines,customVertexShaderID:L,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Ot,batchingColor:Ot&&lt._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&lt.instanceColor!==null,instancingMorph:Ct&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:vo,alphaToCoverage:!!D.alphaToCoverage,map:Ut,matcap:Nt,envMap:B,envMapMode:B&&at.mapping,envMapCubeUVHeight:Z,aoMap:Pe,lightMap:$t,bumpMap:he,normalMap:Gt,displacementMap:x&&se,emissiveMap:Ft,normalMapObjectSpace:Gt&&D.normalMapType===cT,normalMapTangentSpace:Gt&&D.normalMapType===Vy,metalnessMap:le,roughnessMap:qe,anisotropy:Ze,anisotropyMap:dt,clearcoat:N,clearcoatMap:qt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Kt,dispersion:T,iridescence:et,iridescenceMap:Jt,iridescenceThicknessMap:Tt,sheen:mt,sheenColorMap:Pt,sheenRoughnessMap:ae,specularMap:Qt,specularColorMap:zt,specularIntensityMap:fe,transmission:St,transmissionMap:k,thicknessMap:bt,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===fo&&D.alphaToCoverage===!1,alphaMap:Yt,alphaTest:Mt,alphaHash:_t,combine:D.combine,mapUv:Ut&&w(D.map.channel),aoMapUv:Pe&&w(D.aoMap.channel),lightMapUv:$t&&w(D.lightMap.channel),bumpMapUv:he&&w(D.bumpMap.channel),normalMapUv:Gt&&w(D.normalMap.channel),displacementMapUv:se&&w(D.displacementMap.channel),emissiveMapUv:Ft&&w(D.emissiveMap.channel),metalnessMapUv:le&&w(D.metalnessMap.channel),roughnessMapUv:qe&&w(D.roughnessMap.channel),anisotropyMapUv:dt&&w(D.anisotropyMap.channel),clearcoatMapUv:qt&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:ae&&w(D.sheenRoughnessMap.channel),specularMapUv:Qt&&w(D.specularMap.channel),specularColorMapUv:zt&&w(D.specularColorMap.channel),specularIntensityMapUv:fe&&w(D.specularIntensityMap.channel),transmissionMapUv:k&&w(D.transmissionMap.channel),thicknessMapUv:bt&&w(D.thicknessMap.channel),alphaMapUv:Yt&&w(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Gt||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ht.attributes.uv&&(Ut||Yt),fog:!!ft,useFog:D.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:At,skinning:lt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ut&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:Ft&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===wa,flipSided:D.side===ei,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Zt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&D.extensions.multiDraw===!0||Ot)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function y(D){const b=[];if(D.shaderID?b.push(D.shaderID):(b.push(D.customVertexShaderID),b.push(D.customFragmentShaderID)),D.defines!==void 0)for(const I in D.defines)b.push(I),b.push(D.defines[I]);return D.isRawShaderMaterial===!1&&(F(b,D),P(b,D),b.push(o.outputColorSpace)),b.push(D.customProgramCacheKey),b.join()}function F(D,b){D.push(b.precision),D.push(b.outputColorSpace),D.push(b.envMapMode),D.push(b.envMapCubeUVHeight),D.push(b.mapUv),D.push(b.alphaMapUv),D.push(b.lightMapUv),D.push(b.aoMapUv),D.push(b.bumpMapUv),D.push(b.normalMapUv),D.push(b.displacementMapUv),D.push(b.emissiveMapUv),D.push(b.metalnessMapUv),D.push(b.roughnessMapUv),D.push(b.anisotropyMapUv),D.push(b.clearcoatMapUv),D.push(b.clearcoatNormalMapUv),D.push(b.clearcoatRoughnessMapUv),D.push(b.iridescenceMapUv),D.push(b.iridescenceThicknessMapUv),D.push(b.sheenColorMapUv),D.push(b.sheenRoughnessMapUv),D.push(b.specularMapUv),D.push(b.specularColorMapUv),D.push(b.specularIntensityMapUv),D.push(b.transmissionMapUv),D.push(b.thicknessMapUv),D.push(b.combine),D.push(b.fogExp2),D.push(b.sizeAttenuation),D.push(b.morphTargetsCount),D.push(b.morphAttributeCount),D.push(b.numDirLights),D.push(b.numPointLights),D.push(b.numSpotLights),D.push(b.numSpotLightMaps),D.push(b.numHemiLights),D.push(b.numRectAreaLights),D.push(b.numDirLightShadows),D.push(b.numPointLightShadows),D.push(b.numSpotLightShadows),D.push(b.numSpotLightShadowsWithMaps),D.push(b.numLightProbes),D.push(b.shadowMapType),D.push(b.toneMapping),D.push(b.numClippingPlanes),D.push(b.numClipIntersection),D.push(b.depthPacking)}function P(D,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),b.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reversedDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const b=A[D.type];let I;if(b){const rt=$i[b];I=HT.clone(rt.uniforms)}else I=D.uniforms;return I}function G(D,b){let I;for(let rt=0,lt=v.length;rt<lt;rt++){const ft=v[rt];if(ft.cacheKey===b){I=ft,++I.usedTimes;break}}return I===void 0&&(I=new g2(o,b,D,f),v.push(I)),I}function X(D){if(--D.usedTimes===0){const b=v.indexOf(D);v[b]=v[v.length-1],v.pop(),D.destroy()}}function z(D){_.remove(D)}function V(){_.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:U,acquireProgram:G,releaseProgram:X,releaseShaderCache:z,programs:v,dispose:V}}function S2(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function u(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:u,dispose:f}}function M2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function xy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Sy(){const o=[];let e=0;const i=[],r=[],u=[];function f(){e=0,i.length=0,r.length=0,u.length=0}function h(m,x,M,A,w,S){let y=o[e];return y===void 0?(y={id:m.id,object:m,geometry:x,material:M,groupOrder:A,renderOrder:m.renderOrder,z:w,group:S},o[e]=y):(y.id=m.id,y.object=m,y.geometry=x,y.material=M,y.groupOrder=A,y.renderOrder=m.renderOrder,y.z=w,y.group=S),e++,y}function d(m,x,M,A,w,S){const y=h(m,x,M,A,w,S);M.transmission>0?r.push(y):M.transparent===!0?u.push(y):i.push(y)}function _(m,x,M,A,w,S){const y=h(m,x,M,A,w,S);M.transmission>0?r.unshift(y):M.transparent===!0?u.unshift(y):i.unshift(y)}function p(m,x){i.length>1&&i.sort(m||M2),r.length>1&&r.sort(x||xy),u.length>1&&u.sort(x||xy)}function v(){for(let m=e,x=o.length;m<x;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:u,init:f,push:d,unshift:_,finish:v,sort:p}}function E2(){let o=new WeakMap;function e(r,u){const f=o.get(r);let h;return f===void 0?(h=new Sy,o.set(r,[h])):u>=f.length?(h=new Sy,f.push(h)):h=f[u],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function T2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new xe};break;case"SpotLight":i={position:new nt,direction:new nt,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function b2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let A2=0;function R2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function C2(o){const e=new T2,i=b2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const u=new nt,f=new en,h=new en;function d(p){let v=0,m=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,A=0,w=0,S=0,y=0,F=0,P=0,U=0,G=0,X=0,z=0;p.sort(R2);for(let D=0,b=p.length;D<b;D++){const I=p[D],rt=I.color,lt=I.intensity,ft=I.distance,ht=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=rt.r*lt,m+=rt.g*lt,x+=rt.b*lt;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(I.sh.coefficients[Y],lt);z++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const at=I.shadow,Z=i.get(I);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=I.shadow.matrix,F++}r.directional[M]=Y,M++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(rt).multiplyScalar(lt),Y.distance=ft,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,r.spot[w]=Y;const at=I.shadow;if(I.map&&(r.spotLightMap[G]=I.map,G++,at.updateMatrices(I),I.castShadow&&X++),r.spotLightMatrix[w]=at.matrix,I.castShadow){const Z=i.get(I);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,r.spotShadow[w]=Z,r.spotShadowMap[w]=ht,U++}w++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(rt).multiplyScalar(lt),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=Y,S++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const at=I.shadow,Z=i.get(I);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,Z.shadowCameraNear=at.camera.near,Z.shadowCameraFar=at.camera.far,r.pointShadow[A]=Z,r.pointShadowMap[A]=ht,r.pointShadowMatrix[A]=I.shadow.matrix,P++}r.point[A]=Y,A++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(lt),Y.groundColor.copy(I.groundColor).multiplyScalar(lt),r.hemi[y]=Y,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=m,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==M||V.pointLength!==A||V.spotLength!==w||V.rectAreaLength!==S||V.hemiLength!==y||V.numDirectionalShadows!==F||V.numPointShadows!==P||V.numSpotShadows!==U||V.numSpotMaps!==G||V.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=S,r.point.length=A,r.hemi.length=y,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+G-X,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=z,V.directionalLength=M,V.pointLength=A,V.spotLength=w,V.rectAreaLength=S,V.hemiLength=y,V.numDirectionalShadows=F,V.numPointShadows=P,V.numSpotShadows=U,V.numSpotMaps=G,V.numLightProbes=z,r.version=A2++)}function _(p,v){let m=0,x=0,M=0,A=0,w=0;const S=v.matrixWorldInverse;for(let y=0,F=p.length;y<F;y++){const P=p[y];if(P.isDirectionalLight){const U=r.directional[m];U.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(S),m++}else if(P.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(u),U.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),h.identity(),f.copy(P.matrixWorld),f.premultiply(S),h.extractRotation(f),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),x++}else if(P.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),w++}}}return{setup:d,setupView:_,state:r}}function My(o){const e=new C2(o),i=[],r=[];function u(v){p.camera=v,i.length=0,r.length=0}function f(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function _(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:p,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function w2(o){let e=new WeakMap;function i(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new My(o),e.set(u,[d])):f>=h.length?(d=new My(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const D2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N2(o,e,i){let r=new tm;const u=new ce,f=new ce,h=new un,d=new $T({depthPacking:uT}),_=new t1,p={},v=i.maxTextureSize,m={[_s]:ei,[ei]:_s,[wa]:wa},x=new vs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:D2,fragmentShader:U2}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new ys;A.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ti(A,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dy;let y=this.type;this.render=function(X,z,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||X.length===0)return;const D=o.getRenderTarget(),b=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(ms),rt.buffers.depth.getReversed()?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const lt=y!==Ra&&this.type===Ra,ft=y===Ra&&this.type!==Ra;for(let ht=0,Y=X.length;ht<Y;ht++){const at=X[ht],Z=at.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;u.copy(Z.mapSize);const xt=Z.getFrameExtents();if(u.multiply(xt),f.copy(Z.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/xt.x),u.x=f.x*xt.x,Z.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/xt.y),u.y=f.y*xt.y,Z.mapSize.y=f.y)),Z.map===null||lt===!0||ft===!0){const vt=this.type!==Ra?{minFilter:pi,magFilter:pi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ir(u.x,u.y,vt),Z.map.texture.name=at.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const yt=Z.getViewportCount();for(let vt=0;vt<yt;vt++){const Xt=Z.getViewport(vt);h.set(f.x*Xt.x,f.y*Xt.y,f.x*Xt.z,f.y*Xt.w),rt.viewport(h),Z.updateMatrices(at,vt),r=Z.getFrustum(),U(z,V,Z.camera,at,this.type)}Z.isPointLightShadow!==!0&&this.type===Ra&&F(Z,V),Z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(D,b,I)};function F(X,z){const V=e.update(w);x.defines.VSM_SAMPLES!==X.blurSamples&&(x.defines.VSM_SAMPLES=X.blurSamples,M.defines.VSM_SAMPLES=X.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),X.mapPass===null&&(X.mapPass=new ir(u.x,u.y)),x.uniforms.shadow_pass.value=X.map.texture,x.uniforms.resolution.value=X.mapSize,x.uniforms.radius.value=X.radius,o.setRenderTarget(X.mapPass),o.clear(),o.renderBufferDirect(z,null,V,x,w,null),M.uniforms.shadow_pass.value=X.mapPass.texture,M.uniforms.resolution.value=X.mapSize,M.uniforms.radius.value=X.radius,o.setRenderTarget(X.map),o.clear(),o.renderBufferDirect(z,null,V,M,w,null)}function P(X,z,V,D){let b=null;const I=V.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(I!==void 0)b=I;else if(b=V.isPointLight===!0?_:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const rt=b.uuid,lt=z.uuid;let ft=p[rt];ft===void 0&&(ft={},p[rt]=ft);let ht=ft[lt];ht===void 0&&(ht=b.clone(),ft[lt]=ht,z.addEventListener("dispose",G)),b=ht}if(b.visible=z.visible,b.wireframe=z.wireframe,D===Ra?b.side=z.shadowSide!==null?z.shadowSide:z.side:b.side=z.shadowSide!==null?z.shadowSide:m[z.side],b.alphaMap=z.alphaMap,b.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,b.map=z.map,b.clipShadows=z.clipShadows,b.clippingPlanes=z.clippingPlanes,b.clipIntersection=z.clipIntersection,b.displacementMap=z.displacementMap,b.displacementScale=z.displacementScale,b.displacementBias=z.displacementBias,b.wireframeLinewidth=z.wireframeLinewidth,b.linewidth=z.linewidth,V.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const rt=o.properties.get(b);rt.light=V}return b}function U(X,z,V,D,b){if(X.visible===!1)return;if(X.layers.test(z.layers)&&(X.isMesh||X.isLine||X.isPoints)&&(X.castShadow||X.receiveShadow&&b===Ra)&&(!X.frustumCulled||r.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,X.matrixWorld);const lt=e.update(X),ft=X.material;if(Array.isArray(ft)){const ht=lt.groups;for(let Y=0,at=ht.length;Y<at;Y++){const Z=ht[Y],xt=ft[Z.materialIndex];if(xt&&xt.visible){const yt=P(X,xt,D,b);X.onBeforeShadow(o,X,z,V,lt,yt,Z),o.renderBufferDirect(V,null,lt,yt,X,Z),X.onAfterShadow(o,X,z,V,lt,yt,Z)}}}else if(ft.visible){const ht=P(X,ft,D,b);X.onBeforeShadow(o,X,z,V,lt,ht,null),o.renderBufferDirect(V,null,lt,ht,X,null),X.onAfterShadow(o,X,z,V,lt,ht,null)}}const rt=X.children;for(let lt=0,ft=rt.length;lt<ft;lt++)U(rt[lt],z,V,D,b)}function G(X){X.target.removeEventListener("dispose",G);for(const V in p){const D=p[V],b=X.target.uuid;b in D&&(D[b].dispose(),delete D[b])}}}const L2={[Qd]:Jd,[$d]:np,[tp]:ip,[mo]:ep,[Jd]:Qd,[np]:$d,[ip]:tp,[ep]:mo};function O2(o,e){function i(){let k=!1;const bt=new un;let Dt=null;const Yt=new un(0,0,0,0);return{setMask:function(Mt){Dt!==Mt&&!k&&(o.colorMask(Mt,Mt,Mt,Mt),Dt=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,_t,Zt,ue,Ve){Ve===!0&&(Mt*=ue,_t*=ue,Zt*=ue),bt.set(Mt,_t,Zt,ue),Yt.equals(bt)===!1&&(o.clearColor(Mt,_t,Zt,ue),Yt.copy(bt))},reset:function(){k=!1,Dt=null,Yt.set(-1,0,0,0)}}}function r(){let k=!1,bt=!1,Dt=null,Yt=null,Mt=null;return{setReversed:function(_t){if(bt!==_t){const Zt=e.get("EXT_clip_control");_t?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const ue=Mt;Mt=null,this.setClear(ue)}},getReversed:function(){return bt},setTest:function(_t){_t?ct(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(_t){Dt!==_t&&!k&&(o.depthMask(_t),Dt=_t)},setFunc:function(_t){if(bt&&(_t=L2[_t]),Yt!==_t){switch(_t){case Qd:o.depthFunc(o.NEVER);break;case Jd:o.depthFunc(o.ALWAYS);break;case $d:o.depthFunc(o.LESS);break;case mo:o.depthFunc(o.LEQUAL);break;case tp:o.depthFunc(o.EQUAL);break;case ep:o.depthFunc(o.GEQUAL);break;case np:o.depthFunc(o.GREATER);break;case ip:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Yt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){Mt!==_t&&(bt&&(_t=1-_t),o.clearDepth(_t),Mt=_t)},reset:function(){k=!1,Dt=null,Yt=null,Mt=null,bt=!1}}}function u(){let k=!1,bt=null,Dt=null,Yt=null,Mt=null,_t=null,Zt=null,ue=null,Ve=null;return{setTest:function(Te){k||(Te?ct(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Te){bt!==Te&&!k&&(o.stencilMask(Te),bt=Te)},setFunc:function(Te,an,_n){(Dt!==Te||Yt!==an||Mt!==_n)&&(o.stencilFunc(Te,an,_n),Dt=Te,Yt=an,Mt=_n)},setOp:function(Te,an,_n){(_t!==Te||Zt!==an||ue!==_n)&&(o.stencilOp(Te,an,_n),_t=Te,Zt=an,ue=_n)},setLocked:function(Te){k=Te},setClear:function(Te){Ve!==Te&&(o.clearStencil(Te),Ve=Te)},reset:function(){k=!1,bt=null,Dt=null,Yt=null,Mt=null,_t=null,Zt=null,ue=null,Ve=null}}}const f=new i,h=new r,d=new u,_=new WeakMap,p=new WeakMap;let v={},m={},x=new WeakMap,M=[],A=null,w=!1,S=null,y=null,F=null,P=null,U=null,G=null,X=null,z=new xe(0,0,0),V=0,D=!1,b=null,I=null,rt=null,lt=null,ft=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,at=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=at>=1):Z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=at>=2);let xt=null,yt={};const vt=o.getParameter(o.SCISSOR_BOX),Xt=o.getParameter(o.VIEWPORT),Ht=new un().fromArray(vt),C=new un().fromArray(Xt);function L(k,bt,Dt,Yt){const Mt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<Dt;Zt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Yt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(bt+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return _t}const $={};$[o.TEXTURE_2D]=L(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=L(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=L(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=L(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(mo),he(!1),Gt(xv),ct(o.CULL_FACE),Pe(ms);function ct(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function At(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Ct(k,bt){return m[k]!==bt?(o.bindFramebuffer(k,bt),m[k]=bt,k===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=bt),k===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ot(k,bt){let Dt=M,Yt=!1;if(k){Dt=x.get(bt),Dt===void 0&&(Dt=[],x.set(bt,Dt));const Mt=k.textures;if(Dt.length!==Mt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Zt=Mt.length;_t<Zt;_t++)Dt[_t]=o.COLOR_ATTACHMENT0+_t;Dt.length=Mt.length,Yt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Yt=!0);Yt&&o.drawBuffers(Dt)}function Ut(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const Nt={[Qs]:o.FUNC_ADD,[zE]:o.FUNC_SUBTRACT,[IE]:o.FUNC_REVERSE_SUBTRACT};Nt[BE]=o.MIN,Nt[FE]=o.MAX;const B={[HE]:o.ZERO,[GE]:o.ONE,[VE]:o.SRC_COLOR,[Zd]:o.SRC_ALPHA,[WE]:o.SRC_ALPHA_SATURATE,[qE]:o.DST_COLOR,[kE]:o.DST_ALPHA,[XE]:o.ONE_MINUS_SRC_COLOR,[Kd]:o.ONE_MINUS_SRC_ALPHA,[jE]:o.ONE_MINUS_DST_COLOR,[YE]:o.ONE_MINUS_DST_ALPHA,[ZE]:o.CONSTANT_COLOR,[KE]:o.ONE_MINUS_CONSTANT_COLOR,[QE]:o.CONSTANT_ALPHA,[JE]:o.ONE_MINUS_CONSTANT_ALPHA};function Pe(k,bt,Dt,Yt,Mt,_t,Zt,ue,Ve,Te){if(k===ms){w===!0&&(At(o.BLEND),w=!1);return}if(w===!1&&(ct(o.BLEND),w=!0),k!==PE){if(k!==S||Te!==D){if((y!==Qs||U!==Qs)&&(o.blendEquation(o.FUNC_ADD),y=Qs,U=Qs),Te)switch(k){case fo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sv:o.blendFunc(o.ONE,o.ONE);break;case Mv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ev:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case fo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Mv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ev:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}F=null,P=null,G=null,X=null,z.set(0,0,0),V=0,S=k,D=Te}return}Mt=Mt||bt,_t=_t||Dt,Zt=Zt||Yt,(bt!==y||Mt!==U)&&(o.blendEquationSeparate(Nt[bt],Nt[Mt]),y=bt,U=Mt),(Dt!==F||Yt!==P||_t!==G||Zt!==X)&&(o.blendFuncSeparate(B[Dt],B[Yt],B[_t],B[Zt]),F=Dt,P=Yt,G=_t,X=Zt),(ue.equals(z)===!1||Ve!==V)&&(o.blendColor(ue.r,ue.g,ue.b,Ve),z.copy(ue),V=Ve),S=k,D=!1}function $t(k,bt){k.side===wa?At(o.CULL_FACE):ct(o.CULL_FACE);let Dt=k.side===ei;bt&&(Dt=!Dt),he(Dt),k.blending===fo&&k.transparent===!1?Pe(ms):Pe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),f.setMask(k.colorWrite);const Yt=k.stencilWrite;d.setTest(Yt),Yt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(k){b!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),b=k)}function Gt(k){k!==LE?(ct(o.CULL_FACE),k!==I&&(k===xv?o.cullFace(o.BACK):k===OE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),I=k}function se(k){k!==rt&&(Y&&o.lineWidth(k),rt=k)}function Ft(k,bt,Dt){k?(ct(o.POLYGON_OFFSET_FILL),(lt!==bt||ft!==Dt)&&(o.polygonOffset(bt,Dt),lt=bt,ft=Dt)):At(o.POLYGON_OFFSET_FILL)}function le(k){k?ct(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function qe(k){k===void 0&&(k=o.TEXTURE0+ht-1),xt!==k&&(o.activeTexture(k),xt=k)}function Ze(k,bt,Dt){Dt===void 0&&(xt===null?Dt=o.TEXTURE0+ht-1:Dt=xt);let Yt=yt[Dt];Yt===void 0&&(Yt={type:void 0,texture:void 0},yt[Dt]=Yt),(Yt.type!==k||Yt.texture!==bt)&&(xt!==Dt&&(o.activeTexture(Dt),xt=Dt),o.bindTexture(k,bt||$[k]),Yt.type=k,Yt.texture=bt)}function N(){const k=yt[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){Ht.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Ht.copy(k))}function ae(k){C.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),C.copy(k))}function Qt(k,bt){let Dt=p.get(bt);Dt===void 0&&(Dt=new WeakMap,p.set(bt,Dt));let Yt=Dt.get(k);Yt===void 0&&(Yt=o.getUniformBlockIndex(bt,k.name),Dt.set(k,Yt))}function zt(k,bt){const Yt=p.get(bt).get(k);_.get(bt)!==Yt&&(o.uniformBlockBinding(bt,Yt,k.__bindingPointIndex),_.set(bt,Yt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},xt=null,yt={},m={},x=new WeakMap,M=[],A=null,w=!1,S=null,y=null,F=null,P=null,U=null,G=null,X=null,z=new xe(0,0,0),V=0,D=!1,b=null,I=null,rt=null,lt=null,ft=null,Ht.set(0,0,o.canvas.width,o.canvas.height),C.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ct,disable:At,bindFramebuffer:Ct,drawBuffers:Ot,useProgram:Ut,setBlending:Pe,setMaterial:$t,setFlipSided:he,setCullFace:Gt,setLineWidth:se,setPolygonOffset:Ft,setScissorTest:le,activeTexture:qe,bindTexture:Ze,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Jt,texImage3D:Tt,updateUBOMapping:Qt,uniformBlockBinding:zt,texStorage2D:Rt,texStorage3D:Kt,texSubImage2D:mt,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:qt,scissor:Pt,viewport:ae,reset:fe}}function P2(o,e,i,r,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,v=new WeakMap;let m;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,T){return M?new OffscreenCanvas(N,T):Uc("canvas")}function w(N,T,et){let mt=1;const St=Ze(N);if((St.width>et||St.height>et)&&(mt=et/Math.max(St.width,St.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const dt=Math.floor(mt*St.width),qt=Math.floor(mt*St.height);m===void 0&&(m=A(dt,qt));const Rt=T?A(dt,qt):m;return Rt.width=dt,Rt.height=qt,Rt.getContext("2d").drawImage(N,0,0,dt,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+dt+"x"+qt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function S(N){return N.generateMipmaps}function y(N){o.generateMipmap(N)}function F(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(N,T,et,mt,St=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let dt=T;if(T===o.RED&&(et===o.FLOAT&&(dt=o.R32F),et===o.HALF_FLOAT&&(dt=o.R16F),et===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.R8UI),et===o.UNSIGNED_SHORT&&(dt=o.R16UI),et===o.UNSIGNED_INT&&(dt=o.R32UI),et===o.BYTE&&(dt=o.R8I),et===o.SHORT&&(dt=o.R16I),et===o.INT&&(dt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(dt=o.RG32F),et===o.HALF_FLOAT&&(dt=o.RG16F),et===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RG8UI),et===o.UNSIGNED_SHORT&&(dt=o.RG16UI),et===o.UNSIGNED_INT&&(dt=o.RG32UI),et===o.BYTE&&(dt=o.RG8I),et===o.SHORT&&(dt=o.RG16I),et===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),et===o.UNSIGNED_INT&&(dt=o.RGB32UI),et===o.BYTE&&(dt=o.RGB8I),et===o.SHORT&&(dt=o.RGB16I),et===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),et===o.UNSIGNED_INT&&(dt=o.RGBA32UI),et===o.BYTE&&(dt=o.RGBA8I),et===o.SHORT&&(dt=o.RGBA16I),et===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),T===o.RGBA){const qt=St?wc:Ue.getTransfer(mt);et===o.FLOAT&&(dt=o.RGBA32F),et===o.HALF_FLOAT&&(dt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(dt=qt===ke?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function U(N,T){let et;return N?T===null||T===er||T===El?et=o.DEPTH24_STENCIL8:T===ea?et=o.DEPTH32F_STENCIL8:T===Ml&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===er||T===El?et=o.DEPTH_COMPONENT24:T===ea?et=o.DEPTH_COMPONENT32F:T===Ml&&(et=o.DEPTH_COMPONENT16),et}function G(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==pi&&N.minFilter!==ta?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function X(N){const T=N.target;T.removeEventListener("dispose",X),V(T),T.isVideoTexture&&v.delete(T)}function z(N){const T=N.target;T.removeEventListener("dispose",z),b(T)}function V(N){const T=r.get(N);if(T.__webglInit===void 0)return;const et=N.source,mt=x.get(et);if(mt){const St=mt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(N),Object.keys(mt).length===0&&x.delete(et)}r.remove(N)}function D(N){const T=r.get(N);o.deleteTexture(T.__webglTexture);const et=N.source,mt=x.get(et);delete mt[T.__cacheKey],h.memory.textures--}function b(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let St=0;St<T.__webglFramebuffer[mt].length;St++)o.deleteFramebuffer(T.__webglFramebuffer[mt][St]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=N.textures;for(let mt=0,St=et.length;mt<St;mt++){const dt=r.get(et[mt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),r.remove(et[mt])}r.remove(N)}let I=0;function rt(){I=0}function lt(){const N=I;return N>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u.maxTextures),I+=1,N}function ft(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ht(N,T){const et=r.get(N);if(N.isVideoTexture&&le(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&et.__version!==N.version){const mt=N.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,N,T);return}}else N.isExternalTexture&&(et.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function Y(N,T){const et=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){$(et,N,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function at(N,T){const et=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){$(et,N,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Z(N,T){const et=r.get(N);if(N.version>0&&et.__version!==N.version){ct(et,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const xt={[rp]:o.REPEAT,[$s]:o.CLAMP_TO_EDGE,[op]:o.MIRRORED_REPEAT},yt={[pi]:o.NEAREST,[oT]:o.NEAREST_MIPMAP_NEAREST,[$u]:o.NEAREST_MIPMAP_LINEAR,[ta]:o.LINEAR,[gd]:o.LINEAR_MIPMAP_NEAREST,[tr]:o.LINEAR_MIPMAP_LINEAR},vt={[fT]:o.NEVER,[_T]:o.ALWAYS,[hT]:o.LESS,[Xy]:o.LEQUAL,[dT]:o.EQUAL,[gT]:o.GEQUAL,[pT]:o.GREATER,[mT]:o.NOTEQUAL};function Xt(N,T){if(T.type===ea&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ta||T.magFilter===gd||T.magFilter===$u||T.magFilter===tr||T.minFilter===ta||T.minFilter===gd||T.minFilter===$u||T.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,xt[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,xt[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,xt[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,vt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pi||T.minFilter!==$u&&T.minFilter!==tr||T.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ht(N,T){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",X));const mt=T.source;let St=x.get(mt);St===void 0&&(St={},x.set(mt,St));const dt=ft(T);if(dt!==N.__cacheKey){St[dt]===void 0&&(St[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),St[dt].usedTimes++;const qt=St[N.__cacheKey];qt!==void 0&&(St[N.__cacheKey].usedTimes--,qt.usedTimes===0&&D(T)),N.__cacheKey=dt,N.__webglTexture=St[dt].texture}return et}function C(N,T,et){return Math.floor(Math.floor(N/et)/T)}function L(N,T,et,mt){const dt=N.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,et,mt,T.data);else{dt.sort((Tt,Pt)=>Tt.start-Pt.start);let qt=0;for(let Tt=1;Tt<dt.length;Tt++){const Pt=dt[qt],ae=dt[Tt],Qt=Pt.start+Pt.count,zt=C(ae.start,T.width,4),fe=C(Pt.start,T.width,4);ae.start<=Qt+1&&zt===fe&&C(ae.start+ae.count-1,T.width,4)===zt?Pt.count=Math.max(Pt.count,ae.start+ae.count-Pt.start):(++qt,dt[qt]=ae)}dt.length=qt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),Jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Pt=dt.length;Tt<Pt;Tt++){const ae=dt[Tt],Qt=Math.floor(ae.start/4),zt=Math.ceil(ae.count/4),fe=Qt%T.width,k=Math.floor(Qt/T.width),bt=zt,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,fe,k,bt,Dt,et,mt,T.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Jt)}}function $(N,T,et){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const St=Ht(N,T),dt=T.source;i.bindTexture(mt,N.__webglTexture,o.TEXTURE0+et);const qt=r.get(dt);if(dt.version!==qt.__version||St===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Ue.getPrimaries(Ue.workingColorSpace),Kt=T.colorSpace===hs?null:Ue.getPrimaries(T.colorSpace),Jt=T.colorSpace===hs||Rt===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Tt=w(T.image,!1,u.maxTextureSize);Tt=qe(T,Tt);const Pt=f.convert(T.format,T.colorSpace),ae=f.convert(T.type);let Qt=P(T.internalFormat,Pt,ae,T.colorSpace,T.isVideoTexture);Xt(mt,T);let zt;const fe=T.mipmaps,k=T.isVideoTexture!==!0,bt=qt.__version===void 0||St===!0,Dt=dt.dataReady,Yt=G(T,Tt);if(T.isDepthTexture)Qt=U(T.format===bl,T.type),bt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Qt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,Pt,ae,null));else if(T.isDataTexture)if(fe.length>0){k&&bt&&i.texStorage2D(o.TEXTURE_2D,Yt,Qt,fe[0].width,fe[0].height);for(let Mt=0,_t=fe.length;Mt<_t;Mt++)zt=fe[Mt],k?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Pt,ae,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Qt,zt.width,zt.height,0,Pt,ae,zt.data);T.generateMipmaps=!1}else k?(bt&&i.texStorage2D(o.TEXTURE_2D,Yt,Qt,Tt.width,Tt.height),Dt&&L(T,Tt,Pt,ae)):i.texImage2D(o.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,Pt,ae,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Yt,Qt,fe[0].width,fe[0].height,Tt.depth);for(let Mt=0,_t=fe.length;Mt<_t;Mt++)if(zt=fe[Mt],T.format!==Fi)if(Pt!==null)if(k){if(Dt)if(T.layerUpdates.size>0){const Zt=Jv(zt.width,zt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ve=zt.data.subarray(ue*Zt/zt.data.BYTES_PER_ELEMENT,(ue+1)*Zt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ue,zt.width,zt.height,1,Pt,Ve)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,Tt.depth,Pt,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Qt,zt.width,zt.height,Tt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,Tt.depth,Pt,ae,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Qt,zt.width,zt.height,Tt.depth,0,Pt,ae,zt.data)}else{k&&bt&&i.texStorage2D(o.TEXTURE_2D,Yt,Qt,fe[0].width,fe[0].height);for(let Mt=0,_t=fe.length;Mt<_t;Mt++)zt=fe[Mt],T.format!==Fi?Pt!==null?k?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Pt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Qt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,Pt,ae,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Qt,zt.width,zt.height,0,Pt,ae,zt.data)}else if(T.isDataArrayTexture)if(k){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Yt,Qt,Tt.width,Tt.height,Tt.depth),Dt)if(T.layerUpdates.size>0){const Mt=Jv(Tt.width,Tt.height,T.format,T.type);for(const _t of T.layerUpdates){const Zt=Tt.data.subarray(_t*Mt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*Mt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Pt,ae,Zt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Pt,ae,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Qt,Tt.width,Tt.height,Tt.depth,0,Pt,ae,Tt.data);else if(T.isData3DTexture)k?(bt&&i.texStorage3D(o.TEXTURE_3D,Yt,Qt,Tt.width,Tt.height,Tt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Pt,ae,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Qt,Tt.width,Tt.height,Tt.depth,0,Pt,ae,Tt.data);else if(T.isFramebufferTexture){if(bt)if(k)i.texStorage2D(o.TEXTURE_2D,Yt,Qt,Tt.width,Tt.height);else{let Mt=Tt.width,_t=Tt.height;for(let Zt=0;Zt<Yt;Zt++)i.texImage2D(o.TEXTURE_2D,Zt,Qt,Mt,_t,0,Pt,ae,null),Mt>>=1,_t>>=1}}else if(fe.length>0){if(k&&bt){const Mt=Ze(fe[0]);i.texStorage2D(o.TEXTURE_2D,Yt,Qt,Mt.width,Mt.height)}for(let Mt=0,_t=fe.length;Mt<_t;Mt++)zt=fe[Mt],k?Dt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt,ae,zt):i.texImage2D(o.TEXTURE_2D,Mt,Qt,Pt,ae,zt);T.generateMipmaps=!1}else if(k){if(bt){const Mt=Ze(Tt);i.texStorage2D(o.TEXTURE_2D,Yt,Qt,Mt.width,Mt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,ae,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Qt,Pt,ae,Tt);S(T)&&y(mt),qt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ct(N,T,et){if(T.image.length!==6)return;const mt=Ht(N,T),St=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const dt=r.get(St);if(St.version!==dt.__version||mt===!0){i.activeTexture(o.TEXTURE0+et);const qt=Ue.getPrimaries(Ue.workingColorSpace),Rt=T.colorSpace===hs?null:Ue.getPrimaries(T.colorSpace),Kt=T.colorSpace===hs||qt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!Jt&&!Tt?Pt[_t]=w(T.image[_t],!0,u.maxCubemapSize):Pt[_t]=Tt?T.image[_t].image:T.image[_t],Pt[_t]=qe(T,Pt[_t]);const ae=Pt[0],Qt=f.convert(T.format,T.colorSpace),zt=f.convert(T.type),fe=P(T.internalFormat,Qt,zt,T.colorSpace),k=T.isVideoTexture!==!0,bt=dt.__version===void 0||mt===!0,Dt=St.dataReady;let Yt=G(T,ae);Xt(o.TEXTURE_CUBE_MAP,T);let Mt;if(Jt){k&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Yt,fe,ae.width,ae.height);for(let _t=0;_t<6;_t++){Mt=Pt[_t].mipmaps;for(let Zt=0;Zt<Mt.length;Zt++){const ue=Mt[Zt];T.format!==Fi?Qt!==null?k?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,0,0,ue.width,ue.height,Qt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,0,0,ue.width,ue.height,Qt,zt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt,fe,ue.width,ue.height,0,Qt,zt,ue.data)}}}else{if(Mt=T.mipmaps,k&&bt){Mt.length>0&&Yt++;const _t=Ze(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Yt,fe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,Qt,zt,Pt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Pt[_t].width,Pt[_t].height,0,Qt,zt,Pt[_t].data);for(let Zt=0;Zt<Mt.length;Zt++){const Ve=Mt[Zt].image[_t].image;k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,0,0,Ve.width,Ve.height,Qt,zt,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,fe,Ve.width,Ve.height,0,Qt,zt,Ve.data)}}else{k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Qt,zt,Pt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Qt,zt,Pt[_t]);for(let Zt=0;Zt<Mt.length;Zt++){const ue=Mt[Zt];k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,0,0,Qt,zt,ue.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Zt+1,fe,Qt,zt,ue.image[_t])}}}S(T)&&y(o.TEXTURE_CUBE_MAP),dt.__version=St.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function At(N,T,et,mt,St,dt){const qt=f.convert(et.format,et.colorSpace),Rt=f.convert(et.type),Kt=P(et.internalFormat,qt,Rt,et.colorSpace),Jt=r.get(T),Tt=r.get(et);if(Tt.__renderTarget=T,!Jt.__hasExternalTextures){const Pt=Math.max(1,T.width>>dt),ae=Math.max(1,T.height>>dt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,dt,Kt,Pt,ae,T.depth,0,qt,Rt,null):i.texImage2D(St,dt,Kt,Pt,ae,0,qt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,St,Tt.__webglTexture,0,se(T)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,St,Tt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ct(N,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const mt=T.depthTexture,St=mt&&mt.isDepthTexture?mt.type:null,dt=U(T.stencilBuffer,St),qt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=se(T);Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,dt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,N)}else{const mt=T.textures;for(let St=0;St<mt.length;St++){const dt=mt[St],qt=f.convert(dt.format,dt.colorSpace),Rt=f.convert(dt.type),Kt=P(dt.internalFormat,qt,Rt,dt.colorSpace),Jt=se(T);et&&Ft(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Kt,T.width,T.height):Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Kt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const St=mt.__webglTexture,dt=se(T);if(T.depthTexture.format===Tl)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(T.depthTexture.format===bl)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Ut(N){const T=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",St)};mt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=mt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const mt=N.texture.mipmaps;mt&&mt.length>0?Ot(T.__webglFramebuffer[0],N):Ot(T.__webglFramebuffer,N)}else if(et){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),Ct(T.__webglDepthbuffer[mt],N,!1);else{const St=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,dt)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ct(T.__webglDepthbuffer,N,!1);else{const St=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(N,T,et){const mt=r.get(N);T!==void 0&&At(mt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Ut(N)}function B(N){const T=N.texture,et=r.get(N),mt=r.get(T);N.addEventListener("dispose",z);const St=N.textures,dt=N.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,h.memory.textures++),dt){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Kt=0;Kt<T.mipmaps.length;Kt++)et.__webglFramebuffer[Rt][Kt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Rt=0,Kt=St.length;Rt<Kt;Rt++){const Jt=r.get(St[Rt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Ft(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const Kt=St[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const Jt=f.convert(Kt.format,Kt.colorSpace),Tt=f.convert(Kt.type),Pt=P(Kt.internalFormat,Jt,Tt,Kt.colorSpace,N.isXRRenderTarget===!0),ae=se(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,Pt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ct(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),Xt(o.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)At(et.__webglFramebuffer[Rt][Kt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Kt);else At(et.__webglFramebuffer[Rt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(T)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Rt=0,Kt=St.length;Rt<Kt;Rt++){const Jt=St[Rt],Tt=r.get(Jt);let Pt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,Tt.__webglTexture),Xt(Pt,Jt),At(et.__webglFramebuffer,N,Jt,o.COLOR_ATTACHMENT0+Rt,Pt,0),S(Jt)&&y(Pt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,mt.__webglTexture),Xt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)At(et.__webglFramebuffer[Kt],N,T,o.COLOR_ATTACHMENT0,Rt,Kt);else At(et.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,Rt,0);S(T)&&y(Rt),i.unbindTexture()}N.depthBuffer&&Ut(N)}function Pe(N){const T=N.textures;for(let et=0,mt=T.length;et<mt;et++){const St=T[et];if(S(St)){const dt=F(N),qt=r.get(St).__webglTexture;i.bindTexture(dt,qt),y(dt),i.unbindTexture()}}}const $t=[],he=[];function Gt(N){if(N.samples>0){if(Ft(N)===!1){const T=N.textures,et=N.width,mt=N.height;let St=o.COLOR_BUFFER_BIT;const dt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(N),Rt=T.length>1;if(Rt)for(let Jt=0;Jt<T.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Kt=N.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Jt=0;Jt<T.length;Jt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Jt]);const Tt=r.get(T[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,et,mt,0,0,et,mt,St,o.NEAREST),_===!0&&($t.length=0,he.length=0,$t.push(o.COLOR_ATTACHMENT0+Jt),N.depthBuffer&&N.resolveDepthBuffer===!1&&($t.push(dt),he.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Jt=0;Jt<T.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Jt]);const Tt=r.get(T[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&_){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function se(N){return Math.min(u.maxSamples,N.samples)}function Ft(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(N){const T=h.render.frame;v.get(N)!==T&&(v.set(N,T),N.update())}function qe(N,T){const et=N.colorSpace,mt=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==vo&&et!==hs&&(Ue.getTransfer(et)===ke?(mt!==Fi||St!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=rt,this.setTexture2D=ht,this.setTexture2DArray=Y,this.setTexture3D=at,this.setTextureCube=Z,this.rebindTextures=Nt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ft}function z2(o,e){function i(r,u=hs){let f;const h=Ue.getTransfer(u);if(r===aa)return o.UNSIGNED_BYTE;if(r===Xp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Iy)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Py)return o.BYTE;if(r===zy)return o.SHORT;if(r===Ml)return o.UNSIGNED_SHORT;if(r===Vp)return o.INT;if(r===er)return o.UNSIGNED_INT;if(r===ea)return o.FLOAT;if(r===Al)return o.HALF_FLOAT;if(r===By)return o.ALPHA;if(r===Fy)return o.RGB;if(r===Fi)return o.RGBA;if(r===Tl)return o.DEPTH_COMPONENT;if(r===bl)return o.DEPTH_STENCIL;if(r===Yp)return o.RED;if(r===qp)return o.RED_INTEGER;if(r===Hy)return o.RG;if(r===jp)return o.RG_INTEGER;if(r===Wp)return o.RGBA_INTEGER;if(r===Mc||r===Ec||r===Tc||r===bc)if(h===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Mc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Mc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ec)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lp||r===up||r===cp||r===fp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===lp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===up)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hp||r===dp||r===pp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===hp||r===dp)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===pp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mp||r===gp||r===_p||r===vp||r===yp||r===xp||r===Sp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp||r===Cp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===mp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_p)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ep)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ap)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ac||r===wp||r===Dp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Ac)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gy||r===Up||r===Np||r===Lp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Ac)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Up)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Np)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===El?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class ox extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const I2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new ox(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new vs({vertexShader:I2,fragmentShader:B2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ti(new Pc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H2 extends ar{constructor(e,i){super();const r=this;let u=null,f=1,h=null,d="local-floor",_=1,p=null,v=null,m=null,x=null,M=null,A=null;const w=new F2,S={},y=i.getContextAttributes();let F=null,P=null;const U=[],G=[],X=new ce;let z=null;const V=new Ri;V.viewport=new un;const D=new Ri;D.viewport=new un;const b=[V,D],I=new s1;let rt=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let $=U[L];return $===void 0&&($=new Bd,U[L]=$),$.getTargetRaySpace()},this.getControllerGrip=function(L){let $=U[L];return $===void 0&&($=new Bd,U[L]=$),$.getGripSpace()},this.getHand=function(L){let $=U[L];return $===void 0&&($=new Bd,U[L]=$),$.getHandSpace()};function ft(L){const $=G.indexOf(L.inputSource);if($===-1)return;const ct=U[$];ct!==void 0&&(ct.update(L.inputSource,L.frame,p||h),ct.dispatchEvent({type:L.type,data:L.inputSource}))}function ht(){u.removeEventListener("select",ft),u.removeEventListener("selectstart",ft),u.removeEventListener("selectend",ft),u.removeEventListener("squeeze",ft),u.removeEventListener("squeezestart",ft),u.removeEventListener("squeezeend",ft),u.removeEventListener("end",ht),u.removeEventListener("inputsourceschange",Y);for(let L=0;L<U.length;L++){const $=G[L];$!==null&&(G[L]=null,U[L].disconnect($))}rt=null,lt=null,w.reset();for(const L in S)delete S[L];e.setRenderTarget(F),M=null,x=null,m=null,u=null,P=null,C.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){f=L,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){d=L,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(L){p=L},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return m},this.getFrame=function(){return A},this.getSession=function(){return u},this.setSession=async function(L){if(u=L,u!==null){if(F=e.getRenderTarget(),u.addEventListener("select",ft),u.addEventListener("selectstart",ft),u.addEventListener("selectend",ft),u.addEventListener("squeeze",ft),u.addEventListener("squeezestart",ft),u.addEventListener("squeezeend",ft),u.addEventListener("end",ht),u.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await i.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&(m=new XRWebGLBinding(u,i)),m!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,At=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=y.stencil?bl:Tl,At=y.stencil?El:er);const Ot={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:f};x=m.createProjectionLayer(Ot),u.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new ir(x.textureWidth,x.textureHeight,{format:Fi,type:aa,depthTexture:new Jy(x.textureWidth,x.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,i,ct),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ir(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:aa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(_),p=null,h=await u.requestReferenceSpace(d),C.setContext(u),C.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function Y(L){for(let $=0;$<L.removed.length;$++){const ct=L.removed[$],At=G.indexOf(ct);At>=0&&(G[At]=null,U[At].disconnect(ct))}for(let $=0;$<L.added.length;$++){const ct=L.added[$];let At=G.indexOf(ct);if(At===-1){for(let Ot=0;Ot<U.length;Ot++)if(Ot>=G.length){G.push(ct),At=Ot;break}else if(G[Ot]===null){G[Ot]=ct,At=Ot;break}if(At===-1)break}const Ct=U[At];Ct&&Ct.connect(ct)}}const at=new nt,Z=new nt;function xt(L,$,ct){at.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(ct.matrixWorld);const At=at.distanceTo(Z),Ct=$.projectionMatrix.elements,Ot=ct.projectionMatrix.elements,Ut=Ct[14]/(Ct[10]-1),Nt=Ct[14]/(Ct[10]+1),B=(Ct[9]+1)/Ct[5],Pe=(Ct[9]-1)/Ct[5],$t=(Ct[8]-1)/Ct[0],he=(Ot[8]+1)/Ot[0],Gt=Ut*$t,se=Ut*he,Ft=At/(-$t+he),le=Ft*-$t;if($.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(le),L.translateZ(Ft),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),Ct[10]===-1)L.projectionMatrix.copy($.projectionMatrix),L.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const qe=Ut+Ft,Ze=Nt+Ft,N=Gt-le,T=se+(At-le),et=B*Nt/Ze*qe,mt=Pe*Nt/Ze*qe;L.projectionMatrix.makePerspective(N,T,et,mt,qe,Ze),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function yt(L,$){$===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices($.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(u===null)return;let $=L.near,ct=L.far;w.texture!==null&&(w.depthNear>0&&($=w.depthNear),w.depthFar>0&&(ct=w.depthFar)),I.near=D.near=V.near=$,I.far=D.far=V.far=ct,(rt!==I.near||lt!==I.far)&&(u.updateRenderState({depthNear:I.near,depthFar:I.far}),rt=I.near,lt=I.far),I.layers.mask=L.layers.mask|6,V.layers.mask=I.layers.mask&3,D.layers.mask=I.layers.mask&5;const At=L.parent,Ct=I.cameras;yt(I,At);for(let Ot=0;Ot<Ct.length;Ot++)yt(Ct[Ot],At);Ct.length===2?xt(I,V,D):I.projectionMatrix.copy(V.projectionMatrix),vt(L,I,At)};function vt(L,$,ct){ct===null?L.matrix.copy($.matrixWorld):(L.matrix.copy(ct.matrixWorld),L.matrix.invert(),L.matrix.multiply($.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy($.projectionMatrix),L.projectionMatrixInverse.copy($.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Op*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(x===null&&M===null))return _},this.setFoveation=function(L){_=L,x!==null&&(x.fixedFoveation=L),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=L)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(I)},this.getCameraTexture=function(L){return S[L]};let Xt=null;function Ht(L,$){if(v=$.getViewerPose(p||h),A=$,v!==null){const ct=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let At=!1;ct.length!==I.cameras.length&&(I.cameras.length=0,At=!0);for(let Nt=0;Nt<ct.length;Nt++){const B=ct[Nt];let Pe=null;if(M!==null)Pe=M.getViewport(B);else{const he=m.getViewSubImage(x,B);Pe=he.viewport,Nt===0&&(e.setRenderTargetTextures(P,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(P))}let $t=b[Nt];$t===void 0&&($t=new Ri,$t.layers.enable(Nt),$t.viewport=new un,b[Nt]=$t),$t.matrix.fromArray(B.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(B.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Nt===0&&(I.matrix.copy($t.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),At===!0&&I.cameras.push($t)}const Ct=u.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&m){const Nt=m.getDepthInformation(ct[0]);Nt&&Nt.isValid&&Nt.texture&&w.init(Nt,u.renderState)}if(Ct&&Ct.includes("camera-access")&&(e.state.unbindTexture(),m))for(let Nt=0;Nt<ct.length;Nt++){const B=ct[Nt].camera;if(B){let Pe=S[B];Pe||(Pe=new ox,S[B]=Pe);const $t=m.getCameraImage(B);Pe.sourceTexture=$t}}}for(let ct=0;ct<U.length;ct++){const At=G[ct],Ct=U[ct];At!==null&&Ct!==void 0&&Ct.update(At,$,p||h)}Xt&&Xt(L,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),A=null}const C=new nx;C.setAnimationLoop(Ht),this.setAnimationLoop=function(L){Xt=L},this.dispose=function(){}}}const Zs=new sa,G2=new en;function V2(o,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Zy(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function u(S,y,F,P,U){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(S,y):y.isMeshToonMaterial?(f(S,y),m(S,y)):y.isMeshPhongMaterial?(f(S,y),v(S,y)):y.isMeshStandardMaterial?(f(S,y),x(S,y),y.isMeshPhysicalMaterial&&M(S,y,U)):y.isMeshMatcapMaterial?(f(S,y),A(S,y)):y.isMeshDepthMaterial?f(S,y):y.isMeshDistanceMaterial?(f(S,y),w(S,y)):y.isMeshNormalMaterial?f(S,y):y.isLineBasicMaterial?(h(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?_(S,y,F,P):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ei&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ei&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const F=e.get(y),P=F.envMap,U=F.envMapRotation;P&&(S.envMap.value=P,Zs.copy(U),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),S.envMapRotation.value.setFromMatrix4(G2.makeRotationFromEuler(Zs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function _(S,y,F,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*F,S.scale.value=P*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function m(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function x(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,F){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const F=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:u}}function X2(o,e,i,r){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(F,P){const U=P.program;r.uniformBlockBinding(F,U)}function p(F,P){let U=u[F.id];U===void 0&&(A(F),U=v(F),u[F.id]=U,F.addEventListener("dispose",S));const G=P.program;r.updateUBOMapping(F,G);const X=e.render.frame;f[F.id]!==X&&(x(F),f[F.id]=X)}function v(F){const P=m();F.__bindingPointIndex=P;const U=o.createBuffer(),G=F.__size,X=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,G,X),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function m(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const P=u[F.id],U=F.uniforms,G=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let X=0,z=U.length;X<z;X++){const V=Array.isArray(U[X])?U[X]:[U[X]];for(let D=0,b=V.length;D<b;D++){const I=V[D];if(M(I,X,D,G)===!0){const rt=I.__offset,lt=Array.isArray(I.value)?I.value:[I.value];let ft=0;for(let ht=0;ht<lt.length;ht++){const Y=lt[ht],at=w(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,rt+ft,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,ft),ft+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,P,U,G){const X=F.value,z=P+"_"+U;if(G[z]===void 0)return typeof X=="number"||typeof X=="boolean"?G[z]=X:G[z]=X.clone(),!0;{const V=G[z];if(typeof X=="number"||typeof X=="boolean"){if(V!==X)return G[z]=X,!0}else if(V.equals(X)===!1)return V.copy(X),!0}return!1}function A(F){const P=F.uniforms;let U=0;const G=16;for(let z=0,V=P.length;z<V;z++){const D=Array.isArray(P[z])?P[z]:[P[z]];for(let b=0,I=D.length;b<I;b++){const rt=D[b],lt=Array.isArray(rt.value)?rt.value:[rt.value];for(let ft=0,ht=lt.length;ft<ht;ft++){const Y=lt[ft],at=w(Y),Z=U%G,xt=Z%at.boundary,yt=Z+xt;U+=xt,yt!==0&&G-yt<at.storage&&(U+=G-yt),rt.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=U,U+=at.storage}}}const X=U%G;return X>0&&(U+=G-X),F.__size=U,F.__cache={},this}function w(F){const P={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(P.boundary=4,P.storage=4):F.isVector2?(P.boundary=8,P.storage=8):F.isVector3||F.isColor?(P.boundary=16,P.storage=12):F.isVector4?(P.boundary=16,P.storage=16):F.isMatrix3?(P.boundary=48,P.storage=48):F.isMatrix4?(P.boundary=64,P.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),P}function S(F){const P=F.target;P.removeEventListener("dispose",S);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(u[P.id]),delete u[P.id],delete f[P.id]}function y(){for(const F in u)o.deleteBuffer(u[F]);h=[],u={},f={}}return{bind:_,update:p,dispose:y}}class k2{constructor(e={}){const{canvas:i=xT(),context:r=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),w=new Int32Array(4);let S=null,y=null;const F=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1;this._outputColorSpace=di;let X=0,z=0,V=null,D=-1,b=null;const I=new un,rt=new un;let lt=null;const ft=new xe(0);let ht=0,Y=i.width,at=i.height,Z=1,xt=null,yt=null;const vt=new un(0,0,Y,at),Xt=new un(0,0,Y,at);let Ht=!1;const C=new tm;let L=!1,$=!1;const ct=new en,At=new nt,Ct=new un,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Nt(){return V===null?Z:1}let B=r;function Pe(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gp}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Yt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),B===null){const K="webgl2";if(B=Pe(K,R),B===null)throw Pe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,he,Gt,se,Ft,le,qe,Ze,N,T,et,mt,St,dt,qt,Rt,Kt,Jt,Tt,Pt,ae,Qt,zt,fe;function k(){$t=new tR(B),$t.init(),Qt=new z2(B,$t),he=new jA(B,$t,e,Qt),Gt=new O2(B,$t),he.reversedDepthBuffer&&x&&Gt.buffers.depth.setReversed(!0),se=new iR(B),Ft=new S2,le=new P2(B,$t,Gt,Ft,he,Qt,se),qe=new ZA(U),Ze=new $A(U),N=new u1(B),zt=new YA(B,N),T=new eR(B,N,se,zt),et=new sR(B,T,N,se),Tt=new aR(B,he,le),Rt=new WA(Ft),mt=new x2(U,qe,Ze,$t,he,zt,Rt),St=new V2(U,Ft),dt=new E2,qt=new w2($t),Jt=new kA(U,qe,Ze,Gt,et,M,_),Kt=new N2(U,et,he),fe=new X2(B,se,he,Gt),Pt=new qA(B,$t,se),ae=new nR(B,$t,se),se.programs=mt.programs,U.capabilities=he,U.extensions=$t,U.properties=Ft,U.renderLists=dt,U.shadowMap=Kt,U.state=Gt,U.info=se}k();const bt=new H2(U,B);this.xr=bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(Y,at,!1))},this.getSize=function(R){return R.set(Y,at)},this.setSize=function(R,K,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,at=K,i.width=Math.floor(R*Z),i.height=Math.floor(K*Z),ot===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(Y*Z,at*Z).floor()},this.setDrawingBufferSize=function(R,K,ot){Y=R,at=K,Z=ot,i.width=Math.floor(R*ot),i.height=Math.floor(K*ot),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(vt)},this.setViewport=function(R,K,ot,ut){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,K,ot,ut),Gt.viewport(I.copy(vt).multiplyScalar(Z).round())},this.getScissor=function(R){return R.copy(Xt)},this.setScissor=function(R,K,ot,ut){R.isVector4?Xt.set(R.x,R.y,R.z,R.w):Xt.set(R,K,ot,ut),Gt.scissor(rt.copy(Xt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(R){Gt.setScissorTest(Ht=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ot=!0){let ut=0;if(R){let Q=!1;if(V!==null){const Et=V.texture.format;Q=Et===Wp||Et===jp||Et===qp}if(Q){const Et=V.texture.type,It=Et===aa||Et===er||Et===Ml||Et===El||Et===Xp||Et===kp,Vt=Jt.getClearColor(),wt=Jt.getClearAlpha(),jt=Vt.r,ie=Vt.g,ee=Vt.b;It?(A[0]=jt,A[1]=ie,A[2]=ee,A[3]=wt,B.clearBufferuiv(B.COLOR,0,A)):(w[0]=jt,w[1]=ie,w[2]=ee,w[3]=wt,B.clearBufferiv(B.COLOR,0,w))}else ut|=B.COLOR_BUFFER_BIT}K&&(ut|=B.DEPTH_BUFFER_BIT),ot&&(ut|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Jt.dispose(),dt.dispose(),qt.dispose(),Ft.dispose(),qe.dispose(),Ze.dispose(),et.dispose(),zt.dispose(),fe.dispose(),mt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",_n),bt.removeEventListener("sessionend",On),ra.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=se.autoReset,K=Kt.enabled,ot=Kt.autoUpdate,ut=Kt.needsUpdate,Q=Kt.type;k(),se.autoReset=R,Kt.enabled=K,Kt.autoUpdate=ot,Kt.needsUpdate=ut,Kt.type=Q}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const K=R.target;K.removeEventListener("dispose",_t),Zt(K)}function Zt(R){ue(R),Ft.remove(R)}function ue(R){const K=Ft.get(R).programs;K!==void 0&&(K.forEach(function(ot){mt.releaseProgram(ot)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ot,ut,Q,Et){K===null&&(K=Ot);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Vt=Ul(R,K,ot,ut,Q);Gt.setMaterial(ut,It);let wt=ot.index,jt=1;if(ut.wireframe===!0){if(wt=T.getWireframeAttribute(ot),wt===void 0)return;jt=2}const ie=ot.drawRange,ee=ot.attributes.position;let ye=ie.start*jt,ze=(ie.start+ie.count)*jt;Et!==null&&(ye=Math.max(ye,Et.start*jt),ze=Math.min(ze,(Et.start+Et.count)*jt)),wt!==null?(ye=Math.max(ye,0),ze=Math.min(ze,wt.count)):ee!=null&&(ye=Math.max(ye,0),ze=Math.min(ze,ee.count));const tn=ze-ye;if(tn<0||tn===1/0)return;zt.setup(Q,ut,Vt,ot,wt);let Ne,Ce=Pt;if(wt!==null&&(Ne=N.get(wt),Ce=ae,Ce.setIndex(Ne)),Q.isMesh)ut.wireframe===!0?(Gt.setLineWidth(ut.wireframeLinewidth*Nt()),Ce.setMode(B.LINES)):Ce.setMode(B.TRIANGLES);else if(Q.isLine){let ne=ut.linewidth;ne===void 0&&(ne=1),Gt.setLineWidth(ne*Nt()),Q.isLineSegments?Ce.setMode(B.LINES):Q.isLineLoop?Ce.setMode(B.LINE_LOOP):Ce.setMode(B.LINE_STRIP)}else Q.isPoints?Ce.setMode(B.POINTS):Q.isSprite&&Ce.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ho("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ne=Q._multiDrawStarts,Le=Q._multiDrawCounts,_e=Q._multiDrawCount,vn=wt?N.get(wt).bytesPerElement:1,ni=Ft.get(ut).currentProgram.getUniforms();for(let we=0;we<_e;we++)ni.setValue(B,"_gl_DrawID",we),Ce.render(ne[we]/vn,Le[we])}else if(Q.isInstancedMesh)Ce.renderInstances(ye,tn,Q.count);else if(ot.isInstancedBufferGeometry){const ne=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Le=Math.min(ot.instanceCount,ne);Ce.renderInstances(ye,tn,Le)}else Ce.render(ye,tn)};function Ve(R,K,ot){R.transparent===!0&&R.side===wa&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,mi(R,K,ot),R.side=_s,R.needsUpdate=!0,mi(R,K,ot),R.side=wa):mi(R,K,ot)}this.compile=function(R,K,ot=null){ot===null&&(ot=R),y=qt.get(ot),y.init(K),P.push(y),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==ot&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const ut=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let It=0;It<Et.length;It++){const Vt=Et[It];Ve(Vt,ot,Q),ut.add(Vt)}else Ve(Et,ot,Q),ut.add(Et)}),y=P.pop(),ut},this.compileAsync=function(R,K,ot=null){const ut=this.compile(R,K,ot);return new Promise(Q=>{function Et(){if(ut.forEach(function(It){Ft.get(It).currentProgram.isReady()&&ut.delete(It)}),ut.size===0){Q(R);return}setTimeout(Et,10)}$t.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Te=null;function an(R){Te&&Te(R)}function _n(){ra.stop()}function On(){ra.start()}const ra=new nx;ra.setAnimationLoop(an),typeof self<"u"&&ra.setContext(self),this.setAnimationLoop=function(R){Te=R,bt.setAnimationLoop(R),R===null?ra.stop():ra.start()},bt.addEventListener("sessionstart",_n),bt.addEventListener("sessionend",On),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(K),K=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,K,V),y=qt.get(R,P.length),y.init(K),P.push(y),ct.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),C.setFromProjectionMatrix(ct,na,K.reversedDepth),$=this.localClippingEnabled,L=Rt.init(this.clippingPlanes,$),S=dt.get(R,F.length),S.init(),F.push(S),bt.enabled===!0&&bt.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&So(Et,K,-1/0,U.sortObjects)}So(R,K,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(xt,yt),Ut=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Ut&&Jt.addToRenderList(S,R),this.info.render.frame++,L===!0&&Rt.beginShadows();const ot=y.state.shadowsArray;Kt.render(ot,R,K),L===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=S.opaque,Q=S.transmissive;if(y.setupLights(),K.isArrayCamera){const Et=K.cameras;if(Q.length>0)for(let It=0,Vt=Et.length;It<Vt;It++){const wt=Et[It];xs(ut,Q,R,wt)}Ut&&Jt.render(R);for(let It=0,Vt=Et.length;It<Vt;It++){const wt=Et[It];Dl(S,R,wt,wt.viewport)}}else Q.length>0&&xs(ut,Q,R,K),Ut&&Jt.render(R),Dl(S,R,K);V!==null&&z===0&&(le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(U,R,K),zt.resetDefaultState(),D=-1,b=null,P.pop(),P.length>0?(y=P[P.length-1],L===!0&&Rt.setGlobalState(U.clippingPlanes,y.state.camera)):y=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function So(R,K,ot,ut){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||C.intersectsSprite(R)){ut&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const It=et.update(R),Vt=R.material;Vt.visible&&S.push(R,It,Vt,ot,Ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||C.intersectsObject(R))){const It=et.update(R),Vt=R.material;if(ut&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ct.copy(It.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(Vt)){const wt=It.groups;for(let jt=0,ie=wt.length;jt<ie;jt++){const ee=wt[jt],ye=Vt[ee.materialIndex];ye&&ye.visible&&S.push(R,It,ye,ot,Ct.z,ee)}}else Vt.visible&&S.push(R,It,Vt,ot,Ct.z,null)}}const Et=R.children;for(let It=0,Vt=Et.length;It<Vt;It++)So(Et[It],K,ot,ut)}function Dl(R,K,ot,ut){const Q=R.opaque,Et=R.transmissive,It=R.transparent;y.setupLightsView(ot),L===!0&&Rt.setGlobalState(U.clippingPlanes,ot),ut&&Gt.viewport(I.copy(ut)),Q.length>0&&oa(Q,K,ot),Et.length>0&&oa(Et,K,ot),It.length>0&&oa(It,K,ot),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function xs(R,K,ot,ut){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ut.id]===void 0&&(y.state.transmissionRenderTarget[ut.id]=new ir(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Al:aa,minFilter:tr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Et=y.state.transmissionRenderTarget[ut.id],It=ut.viewport||I;Et.setSize(It.z*U.transmissionResolutionScale,It.w*U.transmissionResolutionScale);const Vt=U.getRenderTarget(),wt=U.getActiveCubeFace(),jt=U.getActiveMipmapLevel();U.setRenderTarget(Et),U.getClearColor(ft),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),Ut&&Jt.render(ot);const ie=U.toneMapping;U.toneMapping=gs;const ee=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),y.setupLightsView(ut),L===!0&&Rt.setGlobalState(U.clippingPlanes,ut),oa(R,ot,ut),le.updateMultisampleRenderTarget(Et),le.updateRenderTargetMipmap(Et),$t.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let ze=0,tn=K.length;ze<tn;ze++){const Ne=K[ze],Ce=Ne.object,ne=Ne.geometry,Le=Ne.material,_e=Ne.group;if(Le.side===wa&&Ce.layers.test(ut.layers)){const vn=Le.side;Le.side=ei,Le.needsUpdate=!0,Ss(Ce,ot,ut,ne,Le,_e),Le.side=vn,Le.needsUpdate=!0,ye=!0}}ye===!0&&(le.updateMultisampleRenderTarget(Et),le.updateRenderTargetMipmap(Et))}U.setRenderTarget(Vt,wt,jt),U.setClearColor(ft,ht),ee!==void 0&&(ut.viewport=ee),U.toneMapping=ie}function oa(R,K,ot){const ut=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Et=R.length;Q<Et;Q++){const It=R[Q],Vt=It.object,wt=It.geometry,jt=It.group;let ie=It.material;ie.allowOverride===!0&&ut!==null&&(ie=ut),Vt.layers.test(ot.layers)&&Ss(Vt,K,ot,wt,ie,jt)}}function Ss(R,K,ot,ut,Q,Et){R.onBeforeRender(U,K,ot,ut,Q,Et),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(U,K,ot,ut,R,Et),Q.transparent===!0&&Q.side===wa&&Q.forceSinglePass===!1?(Q.side=ei,Q.needsUpdate=!0,U.renderBufferDirect(ot,K,ut,Q,R,Et),Q.side=_s,Q.needsUpdate=!0,U.renderBufferDirect(ot,K,ut,Q,R,Et),Q.side=wa):U.renderBufferDirect(ot,K,ut,Q,R,Et),R.onAfterRender(U,K,ot,ut,Q,Et)}function mi(R,K,ot){K.isScene!==!0&&(K=Ot);const ut=Ft.get(R),Q=y.state.lights,Et=y.state.shadowsArray,It=Q.state.version,Vt=mt.getParameters(R,Q.state,Et,K,ot),wt=mt.getProgramCacheKey(Vt);let jt=ut.programs;ut.environment=R.isMeshStandardMaterial?K.environment:null,ut.fog=K.fog,ut.envMap=(R.isMeshStandardMaterial?Ze:qe).get(R.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",_t),jt=new Map,ut.programs=jt);let ie=jt.get(wt);if(ie!==void 0){if(ut.currentProgram===ie&&ut.lightsStateVersion===It)return Na(R,Vt),ie}else Vt.uniforms=mt.getUniforms(R),R.onBeforeCompile(Vt,U),ie=mt.acquireProgram(Vt,wt),jt.set(wt,ie),ut.uniforms=Vt.uniforms;const ee=ut.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ee.clippingPlanes=Rt.uniform),Na(R,Vt),ut.needsLights=Nl(R),ut.lightsStateVersion=It,ut.needsLights&&(ee.ambientLightColor.value=Q.state.ambient,ee.lightProbe.value=Q.state.probe,ee.directionalLights.value=Q.state.directional,ee.directionalLightShadows.value=Q.state.directionalShadow,ee.spotLights.value=Q.state.spot,ee.spotLightShadows.value=Q.state.spotShadow,ee.rectAreaLights.value=Q.state.rectArea,ee.ltc_1.value=Q.state.rectAreaLTC1,ee.ltc_2.value=Q.state.rectAreaLTC2,ee.pointLights.value=Q.state.point,ee.pointLightShadows.value=Q.state.pointShadow,ee.hemisphereLights.value=Q.state.hemi,ee.directionalShadowMap.value=Q.state.directionalShadowMap,ee.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ee.spotShadowMap.value=Q.state.spotShadowMap,ee.spotLightMatrix.value=Q.state.spotLightMatrix,ee.spotLightMap.value=Q.state.spotLightMap,ee.pointShadowMap.value=Q.state.pointShadowMap,ee.pointShadowMatrix.value=Q.state.pointShadowMatrix),ut.currentProgram=ie,ut.uniformsList=null,ie}function Ms(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Cc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Na(R,K){const ot=Ft.get(R);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function Ul(R,K,ot,ut,Q){K.isScene!==!0&&(K=Ot),le.resetTextureUnits();const Et=K.fog,It=ut.isMeshStandardMaterial?K.environment:null,Vt=V===null?U.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:vo,wt=(ut.isMeshStandardMaterial?Ze:qe).get(ut.envMap||It),jt=ut.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ie=!!ot.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ee=!!ot.morphAttributes.position,ye=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color;let tn=gs;ut.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(tn=U.toneMapping);const Ne=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,ne=Ft.get(ut),Le=y.state.lights;if(L===!0&&($===!0||R!==b)){const rn=R===b&&ut.id===D;Rt.setState(ut,R,rn)}let _e=!1;ut.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Le.state.version||ne.outputColorSpace!==Vt||Q.isBatchedMesh&&ne.batching===!1||!Q.isBatchedMesh&&ne.batching===!0||Q.isBatchedMesh&&ne.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ne.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ne.instancing===!1||!Q.isInstancedMesh&&ne.instancing===!0||Q.isSkinnedMesh&&ne.skinning===!1||!Q.isSkinnedMesh&&ne.skinning===!0||Q.isInstancedMesh&&ne.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ne.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ne.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ne.instancingMorph===!1&&Q.morphTexture!==null||ne.envMap!==wt||ut.fog===!0&&ne.fog!==Et||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Rt.numPlanes||ne.numIntersection!==Rt.numIntersection)||ne.vertexAlphas!==jt||ne.vertexTangents!==ie||ne.morphTargets!==ee||ne.morphNormals!==ye||ne.morphColors!==ze||ne.toneMapping!==tn||ne.morphTargetsCount!==Ce)&&(_e=!0):(_e=!0,ne.__version=ut.version);let vn=ne.currentProgram;_e===!0&&(vn=mi(ut,K,Q));let ni=!1,we=!1,La=!1;const Ke=vn.getUniforms(),Fn=ne.uniforms;if(Gt.useProgram(vn.program)&&(ni=!0,we=!0,La=!0),ut.id!==D&&(D=ut.id,we=!0),ni||b!==R){Gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(B,"projectionMatrix",R.projectionMatrix),Ke.setValue(B,"viewMatrix",R.matrixWorldInverse);const Pn=Ke.map.cameraPosition;Pn!==void 0&&Pn.setValue(B,At.setFromMatrixPosition(R.matrixWorld)),he.logarithmicDepthBuffer&&Ke.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ke.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,we=!0,La=!0)}if(Q.isSkinnedMesh){Ke.setOptional(B,Q,"bindMatrix"),Ke.setOptional(B,Q,"bindMatrixInverse");const rn=Q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ke.setValue(B,"boneTexture",rn.boneTexture,le))}Q.isBatchedMesh&&(Ke.setOptional(B,Q,"batchingTexture"),Ke.setValue(B,"batchingTexture",Q._matricesTexture,le),Ke.setOptional(B,Q,"batchingIdTexture"),Ke.setValue(B,"batchingIdTexture",Q._indirectTexture,le),Ke.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ke.setValue(B,"batchingColorTexture",Q._colorsTexture,le));const fn=ot.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Tt.update(Q,ot,vn),(we||ne.receiveShadow!==Q.receiveShadow)&&(ne.receiveShadow=Q.receiveShadow,Ke.setValue(B,"receiveShadow",Q.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Fn.envMap.value=wt,Fn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&K.environment!==null&&(Fn.envMapIntensity.value=K.environmentIntensity),we&&(Ke.setValue(B,"toneMappingExposure",U.toneMappingExposure),ne.needsLights&&Ic(Fn,La),Et&&ut.fog===!0&&St.refreshFogUniforms(Fn,Et),St.refreshMaterialUniforms(Fn,ut,Z,at,y.state.transmissionRenderTarget[R.id]),Cc.upload(B,Ms(ne),Fn,le)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Cc.upload(B,Ms(ne),Fn,le),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ke.setValue(B,"center",Q.center),Ke.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Ke.setValue(B,"normalMatrix",Q.normalMatrix),Ke.setValue(B,"modelMatrix",Q.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const rn=ut.uniformsGroups;for(let Pn=0,or=rn.length;Pn<or;Pn++){const Gi=rn[Pn];fe.update(Gi,vn),fe.bind(Gi,vn)}}return vn}function Ic(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Nl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,K,ot){const ut=Ft.get(R);ut.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=K,Ft.get(R.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ot,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ot=Ft.get(R);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0};const Mo=B.createFramebuffer();this.setRenderTarget=function(R,K=0,ot=0){V=R,X=K,z=ot;let ut=!0,Q=null,Et=!1,It=!1;if(R){const wt=Ft.get(R);if(wt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(B.FRAMEBUFFER,null),ut=!1;else if(wt.__webglFramebuffer===void 0)le.setupRenderTarget(R);else if(wt.__hasExternalTextures)le.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(wt.__boundDepthTexture!==ee){if(ee!==null&&Ft.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(It=!0);const ie=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[K])?Q=ie[K][ot]:Q=ie[K],Et=!0):R.samples>0&&le.useMultisampledRTT(R)===!1?Q=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[ot]:Q=ie,I.copy(R.viewport),rt.copy(R.scissor),lt=R.scissorTest}else I.copy(vt).multiplyScalar(Z).floor(),rt.copy(Xt).multiplyScalar(Z).floor(),lt=Ht;if(ot!==0&&(Q=Mo),Gt.bindFramebuffer(B.FRAMEBUFFER,Q)&&ut&&Gt.drawBuffers(R,Q),Gt.viewport(I),Gt.scissor(rt),Gt.setScissorTest(lt),Et){const wt=Ft.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt.__webglTexture,ot)}else if(It){const wt=K;for(let jt=0;jt<R.textures.length;jt++){const ie=Ft.get(R.textures[jt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+jt,ie.__webglTexture,ot,wt)}}else if(R!==null&&ot!==0){const wt=Ft.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,wt.__webglTexture,ot)}D=-1},this.readRenderTargetPixels=function(R,K,ot,ut,Q,Et,It,Vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(wt=wt[It]),wt){Gt.bindFramebuffer(B.FRAMEBUFFER,wt);try{const jt=R.textures[Vt],ie=jt.format,ee=jt.type;if(!he.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ut&&ot>=0&&ot<=R.height-Q&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Vt),B.readPixels(K,ot,ut,Q,Qt.convert(ie),Qt.convert(ee),Et))}finally{const jt=V!==null?Ft.get(V).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,K,ot,ut,Q,Et,It,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(wt=wt[It]),wt)if(K>=0&&K<=R.width-ut&&ot>=0&&ot<=R.height-Q){Gt.bindFramebuffer(B.FRAMEBUFFER,wt);const jt=R.textures[Vt],ie=jt.format,ee=jt.type;if(!he.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ye),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Vt),B.readPixels(K,ot,ut,Q,Qt.convert(ie),Qt.convert(ee),0);const ze=V!==null?Ft.get(V).__webglFramebuffer:null;Gt.bindFramebuffer(B.FRAMEBUFFER,ze);const tn=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ST(B,tn,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ye),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.deleteBuffer(ye),B.deleteSync(tn),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ot=0){const ut=Math.pow(2,-ot),Q=Math.floor(R.image.width*ut),Et=Math.floor(R.image.height*ut),It=K!==null?K.x:0,Vt=K!==null?K.y:0;le.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ot,0,0,It,Vt,Q,Et),Gt.unbindTexture()};const Es=B.createFramebuffer(),Bc=B.createFramebuffer();this.copyTextureToTexture=function(R,K,ot=null,ut=null,Q=0,Et=null){Et===null&&(Q!==0?(ho("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Q,Q=0):Et=0);let It,Vt,wt,jt,ie,ee,ye,ze,tn;const Ne=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(ot!==null)It=ot.max.x-ot.min.x,Vt=ot.max.y-ot.min.y,wt=ot.isBox3?ot.max.z-ot.min.z:1,jt=ot.min.x,ie=ot.min.y,ee=ot.isBox3?ot.min.z:0;else{const fn=Math.pow(2,-Q);It=Math.floor(Ne.width*fn),Vt=Math.floor(Ne.height*fn),R.isDataArrayTexture?wt=Ne.depth:R.isData3DTexture?wt=Math.floor(Ne.depth*fn):wt=1,jt=0,ie=0,ee=0}ut!==null?(ye=ut.x,ze=ut.y,tn=ut.z):(ye=0,ze=0,tn=0);const Ce=Qt.convert(K.format),ne=Qt.convert(K.type);let Le;K.isData3DTexture?(le.setTexture3D(K,0),Le=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(le.setTexture2DArray(K,0),Le=B.TEXTURE_2D_ARRAY):(le.setTexture2D(K,0),Le=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const _e=B.getParameter(B.UNPACK_ROW_LENGTH),vn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ni=B.getParameter(B.UNPACK_SKIP_PIXELS),we=B.getParameter(B.UNPACK_SKIP_ROWS),La=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ne.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ne.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ie),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ee);const Ke=R.isDataArrayTexture||R.isData3DTexture,Fn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const fn=Ft.get(R),rn=Ft.get(K),Pn=Ft.get(fn.__renderTarget),or=Ft.get(rn.__renderTarget);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let Gi=0;Gi<wt;Gi++)Ke&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Q,ee+Gi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.get(K).__webglTexture,Et,tn+Gi)),B.blitFramebuffer(jt,ie,It,Vt,ye,ze,It,Vt,B.DEPTH_BUFFER_BIT,B.NEAREST);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Ft.has(R)){const fn=Ft.get(R),rn=Ft.get(K);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,Es),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bc);for(let Pn=0;Pn<wt;Pn++)Ke?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,Q,ee+Pn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,Q),Fn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,rn.__webglTexture,Et,tn+Pn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,rn.__webglTexture,Et),Q!==0?B.blitFramebuffer(jt,ie,It,Vt,ye,ze,It,Vt,B.COLOR_BUFFER_BIT,B.NEAREST):Fn?B.copyTexSubImage3D(Le,Et,ye,ze,tn+Pn,jt,ie,It,Vt):B.copyTexSubImage2D(Le,Et,ye,ze,jt,ie,It,Vt);Gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Le,Et,ye,ze,tn,It,Vt,wt,Ce,ne,Ne.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,Et,ye,ze,tn,It,Vt,wt,Ce,Ne.data):B.texSubImage3D(Le,Et,ye,ze,tn,It,Vt,wt,Ce,ne,Ne):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,ye,ze,It,Vt,Ce,ne,Ne.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,ye,ze,Ne.width,Ne.height,Ce,Ne.data):B.texSubImage2D(B.TEXTURE_2D,Et,ye,ze,It,Vt,Ce,ne,Ne);B.pixelStorei(B.UNPACK_ROW_LENGTH,_e),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ni),B.pixelStorei(B.UNPACK_SKIP_ROWS,we),B.pixelStorei(B.UNPACK_SKIP_IMAGES,La),Et===0&&K.generateMipmaps&&B.generateMipmap(Le),Gt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,ot=null,ut=null,Q=0){return ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,ot,ut,Q)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&le.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?le.setTextureCube(R,0):R.isData3DTexture?le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?le.setTexture2DArray(R,0):le.setTexture2D(R,0),Gt.unbindTexture()},this.resetState=function(){X=0,z=0,V=null,Gt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Ey={type:"change"},im={type:"start"},lx={type:"end"},Sc=new Kp,Ty=new Ca,Y2=Math.cos(70*yT.DEG2RAD),xn=new nt,Jn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jd=1e-6;class q2 extends o1{constructor(e,i=null){super(e,i),this.state=Ye.NONE,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Da.ROTATE,MIDDLE:Da.DOLLY,RIGHT:Da.PAN},this.touches={ONE:uo.ROTATE,TWO:uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new nr,this._lastTargetPosition=new nt,this._quat=new nr().setFromUnitVectors(e.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qv,this._sphericalDelta=new Qv,this._scale=1,this._panOffset=new nt,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new nt,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=W2.bind(this),this._onPointerDown=j2.bind(this),this._onPointerUp=Z2.bind(this),this._onContextMenu=nC.bind(this),this._onMouseWheel=J2.bind(this),this._onKeyDown=$2.bind(this),this._onTouchStart=tC.bind(this),this._onTouchMove=eC.bind(this),this._onMouseDown=K2.bind(this),this._onMouseMove=Q2.bind(this),this._interceptControlDown=iC.bind(this),this._interceptControlUp=aC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ey),this.update(),this.state=Ye.NONE}update(e=null){const i=this.object.position;xn.copy(i).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,u=this.maxAzimuthAngle;isFinite(r)&&isFinite(u)&&(r<-Math.PI?r+=Jn:r>Math.PI&&(r-=Jn),u<-Math.PI?u+=Jn:u>Math.PI&&(u-=Jn),r<=u?this._spherical.theta=Math.max(r,Math.min(u,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+u)/2?Math.max(r,this._spherical.theta):Math.min(u,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),i.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=xn.length();h=this._clampDistance(d*this._scale);const _=d-h;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),f=!!_}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=_!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Sc.origin.copy(this.object.position),Sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sc.direction))<Y2?this.object.lookAt(this.target):(Ty.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sc.intersectPlane(Ty,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>jd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jd||this._lastTargetPosition.distanceToSquared(this.target)>jd?(this.dispatchEvent(Ey),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jn/60*this.autoRotateSpeed*e:Jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){xn.setFromMatrixColumn(i,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,i){this.screenSpacePanning===!0?xn.setFromMatrixColumn(i,1):(xn.setFromMatrixColumn(i,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const u=this.object.position;xn.copy(u).sub(this.target);let f=xn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),u=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=u/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._rotateStart.set(r,u)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._panStart.set(r,u)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,u=e.pageY-i.y,f=Math.sqrt(r*r+u*u);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),u=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(u,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._panEnd.set(r,u)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,u=e.pageY-i.y,f=Math.sqrt(r*r+u*u);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ce,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function j2(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function W2(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function Z2(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lx),this.state=Ye.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function K2(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Da.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ye.DOLLY;break;case Da.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ye.ROTATE}break;case Da.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(im)}function Q2(o){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function J2(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(o.preventDefault(),this.dispatchEvent(im),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(lx))}function $2(o){this.enabled!==!1&&this._handleKeyDown(o)}function tC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case uo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ye.TOUCH_ROTATE;break;case uo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case uo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ye.TOUCH_DOLLY_PAN;break;case uo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(im)}function eC(o){switch(this._trackPointer(o),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ye.NONE}}function nC(o){this.enabled!==!1&&o.preventDefault()}function iC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $n=20,Nc=["road","home","shop","factory","park","power"],Ci={road:{name:"Дорога",cost:80,upkeep:2,watts:0,color:"#647581"},home:{name:"Жильё",cost:400,upkeep:4,watts:2,color:"#71be9a"},shop:{name:"Коммерция",cost:650,upkeep:6,watts:4,color:"#efb86b"},factory:{name:"Завод",cost:950,upkeep:12,watts:7,color:"#db8275"},park:{name:"Парк",cost:250,upkeep:3,watts:0,color:"#75ba70"},power:{name:"Электростанция",cost:1500,upkeep:35,watts:0,color:"#99b5ee"}};function ux(){return{v:1,cells:Array($n*$n).fill(null),money:18e3,pop:0,day:0,tax:9,history:[]}}function ps(o){const e=o%$n,i=Math.floor(o/$n);return[e>0?o-1:-1,e<$n-1?o+1:-1,i>0?o-$n:-1,i<$n-1?o+$n:-1].filter(r=>r>=0)}function sC(o){const e=new Set,i=[];o.cells.forEach((r,u)=>{r==="road"&&(u%$n===0||u%$n===$n-1||u<$n||u>=$n*($n-1))&&(e.add(u),i.push(u))});for(let r=0;r<i.length;r++)for(const u of ps(i[r]))o.cells[u]==="road"&&!e.has(u)&&(e.add(u),i.push(u));return e}function cx(o){const e=sC(o),i=o.cells.map((P,U)=>P==="road"?e.has(U):ps(U).some(G=>e.has(G)));let r=0,u=0,f=0,h=0,d=0,_=0,p=0,v=0,m=0,x=0;const M=Array(400).fill(!1);o.cells.forEach((P,U)=>{P&&(f+=Ci[P].upkeep,i[U]||h++,P==="power"&&i[U]&&(r+=80),i[U]&&(u+=Ci[P].watts))});let A=r;o.cells.forEach((P,U)=>{if(!P||!i[U])return;const G=Ci[P].watts;if(G>A){d++;return}A-=G,M[U]=!0,P==="home"&&(v+=24),P==="shop"&&(m+=16,x++),P==="factory"&&(m+=35,p+=13),P==="power"&&(p+=8),P==="park"&&_++});const w=Math.max(0,Math.min(100,90+_*5-p)),S=o.pop?Math.min(1,m/(o.pop*.55)):1,y=Math.round(Math.max(0,Math.min(100,45+w*.35+S*18+Math.min(x,4)*2-(o.tax-8)*2-h*2-d*3))),F=Math.round(o.pop*o.tax*.45+Math.min(m,o.pop*.55)*2+x*9);return{roads:e,access:i,powered:M,supply:r,demand:u,upkeep:f,isolated:h,unpowered:d,parks:_,capacity:v,jobs:m,ecology:w,happiness:y,revenue:F,balance:F-f}}function fx(o){const e=cx(o),i=Math.min(e.capacity,Math.floor(e.capacity*e.happiness/100),Math.floor(e.jobs/.35)+12),r=o.pop+Math.sign(i-o.pop)*Math.min(Math.abs(i-o.pop),Math.max(1,Math.ceil(Math.abs(i-o.pop)*.12))),u=o.money+e.balance;return{...o,pop:r,money:u,day:o.day+1,history:[...o.history,u].slice(-40)}}function hx(o,e,i){if(!Number.isInteger(e)||e<0||e>=400)throw Error("Клетка вне карты");const r=o.cells[e];if(i==="bulldoze"){if(!r)throw Error("Клетка пуста");const f=o.cells.slice();return f[e]=null,{...o,cells:f,money:o.money+Math.floor(Ci[r].cost*.2)}}if(!Nc.includes(i))throw Error("Неизвестный объект");if(r)throw Error("Клетка занята");if(o.money<Ci[i].cost)throw Error("Недостаточно средств");const u=o.cells.slice();return u[e]=i,{...o,cells:u,money:o.money-Ci[i].cost}}function Ip(){let o=ux();const e=(i,r,u)=>o=hx(o,r*20+i,u);for(let i=0;i<=14;i++)e(i,10,"road");for(let i=6;i<=15;i++)i!==10&&e(8,i,"road");for(let i=3;i<=7;i++)e(i,9,"home"),e(i,11,i%2?"home":"shop");for(let i=6;i<=9;i++)e(9,i,i===6?"power":i===9?"shop":"home");e(10,9,"park"),e(11,9,"factory"),e(12,11,"factory"),e(13,9,"park"),e(14,11,"shop");for(let i=0;i<18;i++)o=fx(o);return{...o,money:12500}}function dx(o){const e=JSON.parse(o);if(!e||e.v!==1||!Array.isArray(e.cells)||e.cells.length!==400||!e.cells.every(i=>i===null||Nc.includes(i))||!Number.isSafeInteger(e.money)||!Number.isInteger(e.pop)||e.pop<0||e.pop>9600||!Number.isInteger(e.day)||e.day<0||!Number.isInteger(e.tax)||e.tax<0||e.tax>20||!Array.isArray(e.history)||e.history.length>40||!e.history.every(Number.isSafeInteger))throw Error("Некорректное сохранение");return{v:1,cells:e.cells,money:e.money,pop:e.pop,day:e.day,tax:e.tax,history:e.history}}function rC(o){return btoa(JSON.stringify(o))}function oC(o){return dx(atob(o))}const am=new rr(1,1,1),Bp=new em(1,1,5),lo=new Oc(1,1,1,8),Wd=new Map;function px(o){return Wd.has(o)||Wd.set(o,new $y({color:o,roughness:.85})),Wd.get(o)}function Ge(o,e,i,r,u,f,h,d,_=am){const p=new ti(_,px(e));return p.position.set(i,r,u),p.scale.set(f,h,d),p.castShadow=!0,p.receiveShadow=!0,o.add(p),p}function by(o,e,i){Ge(o,"#876347",e,.15,i,.075,.3,.075,lo),Ge(o,"#376f53",e,.42,i,.24,.55,.24,Bp),Ge(o,"#65a56a",e,.62,i,.18,.4,.18,Bp)}const Fp=new $y({color:"#8eb3c4",emissive:"#f6ce76",emissiveIntensity:0,roughness:.3});function xl(o,e,i,r,u,f,h){const d=new ti(am,Fp);d.position.set(e,i,r),d.scale.set(u,f,h),o.add(d)}function lC(o,e,i){const r=new ds;if(!o)return r;const u=e%3,f=(h="#c3c6b2")=>Ge(r,h,0,.035,0,.94,.07,.94);if(o==="road"){f("#64717a");const h=ps(e).includes(e-20)&&i[e-20]==="road",d=ps(e).includes(e+20)&&i[e+20]==="road",_=ps(e).includes(e-1)&&i[e-1]==="road",p=ps(e).includes(e+1)&&i[e+1]==="road";Ge(r,"#35464d",0,.08,0,.68,.04,.68);for(const[v,m,x,M,A]of[[h,0,-.36,.68,.3],[d,0,.36,.68,.3],[_,-.36,0,.3,.68],[p,.36,0,.3,.68]])v&&Ge(r,"#35464d",m,.08,x,M,.04,A);return(p||_)&&Ge(r,"#e6d79f",0,.105,0,.28,.012,.025),(h||d)&&Ge(r,"#e6d79f",0,.105,0,.025,.012,.28),r}if(f(o==="park"?"#83b67c":"#b9b9a2"),o==="home"){const h=.65+u*.23;Ge(r,["#d7cbb0","#f0e2c5","#b4d6c6"][u],0,h/2+.08,0,.65,h,.62);const d=Ge(r,["#a85e46","#436e78","#667e69"][u],0,h+.22,0,.54,.35,.54,Bp);d.rotation.y=Math.PI/4;for(let _=.25;_<h;_+=.24){for(const p of[-.19,.19])xl(r,p,_,.316,.13,.13,.018);for(const p of[-.17,.17])xl(r,.333,_,p,.018,.13,.13)}Ge(r,"#695e54",0,.15,.323,.13,.22,.025),by(r,-.39,-.37)}if(o==="shop"){const h=.62+u*.22;Ge(r,"#d8ae76",0,h/2+.08,0,.79,h,.69),Ge(r,"#3b5965",0,h+.11,0,.83,.1,.73);for(let d=.24;d<h;d+=.23)for(const _ of[-.26,0,.26])xl(r,_,d,.354,.18,.145,.018);Ge(r,"#e67e5d",0,.27,.42,.78,.09,.18),Ge(r,"#e8c67d",0,h+.23,0,.4,.13,.28)}if(o==="factory"){Ge(r,"#aa8f83",-.08,.35,0,.72,.55,.76),Ge(r,"#75818a",-.08,.68,0,.76,.13,.78);for(const h of[.26,.39])Ge(r,"#d4ad91",h,.66,-.22,.095,1.22,.095,lo),Ge(r,"#7e5550",h,1.16,-.22,.11,.17,.11,lo);for(const h of[-.28,0,.23])xl(r,h,.37,.385,.13,.18,.018)}if(o==="power"){Ge(r,"#b2bfca",-.15,.35,0,.51,.58,.76),Ge(r,"#657e96",-.15,.68,0,.55,.1,.8);for(const h of[-.23,.23])Ge(r,"#d4dbd9",.25,.43,h,.25,.72,.25,lo),Ge(r,"#536b7a",.25,.81,h,.28,.09,.28,lo);xl(r,-.15,.35,.39,.28,.18,.02)}if(o==="park"){Ge(r,"#d6c7a4",0,.09,0,.18,.035,.92),Ge(r,"#d6c7a4",0,.09,0,.92,.035,.18);for(const h of[-.3,.3])for(const d of[-.3,.3])by(r,h,d);Ge(r,"#5d9dba",0,.13,0,.19,.06,.19,lo)}return r}function uC(o){const e=We.useRef(null),i=We.useRef(o);i.current=o;const r=We.useRef(null);return We.useEffect(()=>{const u=e.current;let f;try{f=new k2({antialias:!0,powerPreference:"high-performance"})}catch{i.current.onError("WebGL недоступен на этом устройстве");return}f.setPixelRatio(Math.min(devicePixelRatio,1.6)),f.shadowMap.enabled=!0,f.shadowMap.type=Uy,f.outputColorSpace=di,f.toneMapping=Ly,u.appendChild(f.domElement),f.domElement.setAttribute("aria-label","Трёхмерная карта города");const h=new qT;h.background=new xe("#b9cdd0"),h.fog=new $p("#b9cdd0",36,90);const d=new Ri(42,1,.1,150);d.position.set(24,24,24);const _=new q2(d,f.domElement);_.target.set(0,0,0),_.enableDamping=!0,_.minDistance=9,_.maxDistance=48,_.maxPolarAngle=Math.PI*.47,_.mouseButtons={LEFT:Da.ROTATE,MIDDLE:Da.DOLLY,RIGHT:Da.PAN};const p=new e1("#dcefff","#6f7756",2.1);h.add(p);const v=new a1("#ffe3b7",3);v.position.set(-12,22,8),v.castShadow=!0,v.shadow.mapSize.set(1024,1024),Object.assign(v.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:.5,far:65}),v.shadow.bias=-4e-4,h.add(v);const m=new ds;h.add(m),Ge(m,"#526f66",0,-.42,0,20.5,.75,20.5);const x=new ZT(am,px("#8cae82"),400),M=new Rn;for(let vt=0;vt<400;vt++)M.position.set(vt%20-9.5,-.025,Math.floor(vt/20)-9.5),M.scale.set(.965,.08,.965),M.updateMatrix(),x.setMatrixAt(vt,M.matrix),x.setColorAt(vt,new xe().setHSL(.28,.16,.52+vt*17%11/100));x.receiveShadow=!0,h.add(x);const A=new ds;h.add(A);const w=new ti(new rr(.98,.035,.98),new Jp({color:"#f9d375",transparent:!0,opacity:.65}));w.position.y=.12,h.add(w);let S=[];const y=new Map;let F=[];const P=vt=>{for(let Ht=0;Ht<400;Ht++){if(vt[Ht]===S[Ht]&&!(vt[Ht]==="road"&&ps(Ht).some($=>vt[$]!==S[$])))continue;const C=y.get(Ht);if(C&&A.remove(C),!vt[Ht]){y.delete(Ht);continue}const L=lC(vt[Ht],Ht,vt);L.position.set(Ht%20-9.5,0,Math.floor(Ht/20)-9.5),L.scale.y=S.length&&vt[Ht]!==S[Ht]&&vt[Ht]!=="road"?.05:1,y.set(Ht,L),A.add(L)}for(const Ht of F)h.remove(Ht.m);F=[];const Xt=[];vt.forEach((Ht,C)=>{if(Ht==="road")for(const L of ps(C))L>C&&vt[L]==="road"&&Xt.push([C,L])});for(let Ht=0;Ht<Math.min(18,Xt.length);Ht++){const[C,L]=Xt[Ht*7%Xt.length],$=new ds;Ge($,["#f1cd76","#e9e7d8","#bc796a","#72a6c1"][Ht%4],0,.14,0,.17,.12,.32),Ge($,"#526b78",0,.23,-.03,.14,.08,.16),h.add($),F.push({m:$,a:C,b:L,t:Ht*.13%1})}S=vt.slice()};r.current={update:P},P(i.current.cells);const U=()=>{const vt=u.clientWidth,Xt=u.clientHeight;!vt||!Xt||(d.aspect=vt/Xt,d.updateProjectionMatrix(),f.setSize(vt,Xt,!1))},G=new ResizeObserver(U);G.observe(u),U();const X=new r1,z=new ce,V=new Ca(new nt(0,1,0),0),D=new nt;let b=[0,0];const I=vt=>{b=[vt.clientX,vt.clientY]},rt=vt=>{if(vt.button!==0||Math.hypot(vt.clientX-b[0],vt.clientY-b[1])>7)return;const Xt=f.domElement.getBoundingClientRect();if(z.set((vt.clientX-Xt.left)/Xt.width*2-1,-(vt.clientY-Xt.top)/Xt.height*2+1),X.setFromCamera(z,d),X.ray.intersectPlane(V,D)){const Ht=Math.floor(D.x+10),C=Math.floor(D.z+10);Ht>=0&&Ht<20&&C>=0&&C<20&&i.current.onSelect(C*20+Ht)}};f.domElement.addEventListener("pointerdown",I),f.domElement.addEventListener("pointerup",rt);let lt=0,ft=performance.now(),ht=0,Y=ft,at=new xe("#b9cdd0");const Z=new xe("#b9cdd0"),xt=new xe("#13283d"),yt=vt=>{const Xt=Math.min(.05,(vt-ft)/1e3);ft=vt;const{night:Ht,speed:C,selected:L}=i.current;at.lerp(Ht?xt:Z,.045),h.background.copy(at),h.fog.color.copy(at),v.intensity+=((Ht?.16:3)-v.intensity)*.05,p.intensity+=((Ht?.65:2.1)-p.intensity)*.05,Fp.emissiveIntensity+=((Ht?1.8:0)-Fp.emissiveIntensity)*.05,w.visible=L!==null,L!==null&&w.position.set(L%20-9.5,.13,Math.floor(L/20)-9.5);for(const $ of y.values())$.scale.y<.999&&($.scale.y+=(1-$.scale.y)*.1);for(const $ of F){$.t=($.t+Xt*.45*C)%1;const ct=$.a%20,At=Math.floor($.a/20),Ct=$.b%20,Ot=Math.floor($.b/20);$.m.position.set(ct+(Ct-ct)*$.t-9.5,0,At+(Ot-At)*$.t-9.5),$.m.rotation.y=Math.atan2(Ct-ct,Ot-At)}_.update(),f.render(h,d),ht++,vt-Y>=1e3&&(u.dataset.fps=String(Math.round(ht*1e3/(vt-Y))),u.dataset.drawCalls=String(f.info.render.calls),Y=vt,ht=0),lt=requestAnimationFrame(yt)};return lt=requestAnimationFrame(yt),()=>{r.current=null,cancelAnimationFrame(lt),G.disconnect(),_.dispose(),f.domElement.removeEventListener("pointerdown",I),f.domElement.removeEventListener("pointerup",rt),f.dispose(),f.domElement.remove(),x.dispose(),w.geometry.dispose(),w.material.dispose()}},[]),We.useEffect(()=>{var u;return(u=r.current)==null?void 0:u.update(o.cells)},[o.cells]),st.jsx("div",{className:"scene","data-testid":"city-scene",ref:e})}const cC={road:ME,home:mE,shop:Cy,factory:dE,park:CE,power:wy,bulldoze:RE},Ai=o=>new Intl.NumberFormat("ru-RU").format(o),Ay="mini-city-save-v1";function fC(){try{const o=new URLSearchParams(location.hash.slice(1)).get("city");return o?{city:oC(o),message:"Открыта независимая копия города"}:{city:Ip(),message:""}}catch{return{city:Ip(),message:"Не удалось открыть ссылку: показан демо-город"}}}function hC(){const[o]=We.useState(fC),[e,i]=We.useState(o.city),[r,u]=We.useState(null),[f,h]=We.useState(1),[d,_]=We.useState("day"),[p,v]=We.useState(null),[m,x]=We.useState(o.message),[M,A]=We.useState(""),[w,S]=We.useState("overview"),[y,F]=We.useState(!0),[P,U]=We.useState("10"),[G,X]=We.useState("10"),[z,V]=We.useState([]),D=We.useRef(e);D.current=e;const b=We.useMemo(()=>cx(e),[e]),I=d==="night"||d==="auto"&&e.day%10>=6;We.useEffect(()=>{if(!f)return;const C=setInterval(()=>i(L=>fx(L)),3600/f);return()=>clearInterval(C)},[f]),We.useEffect(()=>{if(!m)return;const C=setTimeout(()=>x(""),4300);return()=>clearTimeout(C)},[m]);function rt(C){if(v(C),U(String(C%20+1)),X(String(Math.floor(C/20)+1)),!!r)try{const L=D.current,$=hx(L,C,r);i($),V(ct=>[...ct,{i:C,old:L.cells[C],next:$.cells[C],delta:$.money-L.money}]),x(r==="bulldoze"?"Объект снесён":Ci[r].name+" · построено")}catch(L){x(L.message)}}function lt(){const C=z.at(-1);if(!C)return;if(e.cells[C.i]!==C.next){x("Нельзя отменить изменённый объект");return}const L=e.cells.slice();L[C.i]=C.old,i({...e,cells:L,money:e.money-C.delta}),V($=>$.slice(0,-1)),x("Строительство отменено")}function ft(C,L){i(C),V([]),v(null),u(null),x(L)}function ht(){try{localStorage.setItem(Ay,JSON.stringify(e)),x("Город сохранён в браузере")}catch{x("Не удалось сохранить город")}}function Y(){try{const C=localStorage.getItem(Ay);if(!C)throw Error("Сохранений пока нет");ft(dx(C),"Город загружен")}catch(C){x(C.message)}}async function at(){const C=new URL(location.href);C.hash=new URLSearchParams({city:rC(e)}).toString(),A(C.href);try{await navigator.clipboard.writeText(C.href),x("Ссылка скопирована")}catch{x("Скопируйте ссылку вручную")}}const Z=[b.isolated?{t:"Нет доступа к дороге",d:b.isolated+" объектов отключено"}:null,b.unpowered?{t:"Дефицит энергии",d:b.unpowered+" объектов без питания"}:null,b.balance<0?{t:"Расходы выше доходов",d:Ai(b.balance)+" ₡ за день"}:null,b.jobs<e.pop*.55?{t:"Нехватка рабочих мест",d:"Добавьте коммерцию или заводы"}:null,b.ecology<55?{t:"Загрязнение воздуха",d:"Постройте больше парков"}:null].filter(Boolean),xt=[{icon:NE,label:"Казна",value:Ai(e.money)+" ₡",sub:(b.balance>=0?"+":"")+Ai(b.balance)+" / день",tone:b.balance>=0?"positive":"negative"},{icon:UE,label:"Население",value:Ai(e.pop),sub:"из "+Ai(b.capacity)},{icon:uE,label:"Рабочие места",value:Ai(b.jobs),sub:"мест в городе"},{icon:wy,label:"Энергия",value:b.demand+" / "+b.supply,sub:"ед. мощности",tone:b.demand>b.supply?"negative":"positive"},{icon:bE,label:"Счастье",value:b.happiness+"%",sub:"удовлетворённость"},{icon:gE,label:"Экология",value:b.ecology+"%",sub:"качество среды"}],yt=e.history,vt=Math.min(...yt,e.money),Xt=Math.max(...yt,e.money,vt+1),Ht=yt.map((C,L)=>[L/Math.max(1,yt.length-1)*270,80-(C-vt)/(Xt-vt)*68]).map(C=>C.join(",")).join(" ");return st.jsxs("main",{children:[st.jsxs("header",{children:[st.jsxs("div",{className:"brand",children:[st.jsx("div",{className:"brandmark",children:st.jsx(Cy,{size:25})}),st.jsxs("div",{children:[st.jsx("small",{children:"ГРАДОСТРОИТЕЛЬНЫЙ СИМУЛЯТОР"}),st.jsxs("h1",{children:["Mini City",st.jsx("span",{children:" / "}),"Simulator"]})]})]}),st.jsxs("div",{className:"topactions",children:[st.jsxs("button",{onClick:ht,title:"Сохранить","aria-label":"Сохранить",children:[st.jsx(EE,{size:16}),st.jsx("span",{children:"Сохранить"})]}),st.jsxs("button",{onClick:Y,title:"Загрузить","aria-label":"Загрузить",children:[st.jsx(pE,{size:16}),st.jsx("span",{children:"Загрузить"})]}),st.jsxs("button",{className:"share",onClick:at,children:[st.jsx(TE,{size:16}),st.jsx("span",{children:"Поделиться городом"})]})]})]}),st.jsx("section",{className:"metrics",children:xt.map(C=>st.jsxs("article",{children:[st.jsxs("div",{className:"metrichead",children:[st.jsx(C.icon,{size:15}),C.label]}),st.jsx("strong",{children:C.value}),st.jsx("small",{className:C.tone||"",children:C.sub})]},C.label))}),st.jsxs("section",{className:"workspace",children:[st.jsxs("div",{className:"map",children:[st.jsx(uC,{cells:e.cells,night:I,speed:f,selected:p,onSelect:rt,onError:x}),st.jsxs("div",{className:"maptop",children:[st.jsxs("div",{className:"location",children:[st.jsx(_E,{size:17}),st.jsxs("div",{children:[st.jsx("b",{children:"Северная бухта"}),st.jsx("small",{children:"20 × 20 · городской район"})]})]}),st.jsxs("div",{className:"time",children:[st.jsxs("span",{children:["ДЕНЬ ",e.day+1]}),st.jsx("div",{children:[0,1,2,4].map(C=>st.jsx("button",{className:C===f?"active":"","aria-label":C===0?"Пауза":"Скорость "+C,onClick:()=>h(C),children:C===0?st.jsx(yE,{size:15}):C===1?st.jsx(xE,{size:15}):C+"×"},C))})]})]}),st.jsxs("div",{className:"mapbottom",children:[st.jsx("div",{className:"hint",children:r?"Выберите клетку для строительства":"Перетащите для вращения · прокрутите для зума · ПКМ для перемещения"}),st.jsxs("div",{className:"lighting",children:[st.jsx("button",{"aria-label":"День",onClick:()=>_("day"),className:d==="day"?"active":"",children:st.jsx(AE,{size:18})}),st.jsx("button",{"aria-label":"Ночь",onClick:()=>_("night"),className:d==="night"?"active":"",children:st.jsx(vE,{size:18})}),st.jsx("button",{"aria-label":"Автоматическая смена дня и ночи",onClick:()=>_("auto"),className:d==="auto"?"active":"",children:"Авто"})]})]}),m&&st.jsx("div",{role:"status",className:"toast",children:m})]}),st.jsxs("aside",{className:y?"side":"side collapsed",children:[st.jsxs("button",{className:"paneltitle",onClick:()=>F(!y),children:[st.jsx(cE,{size:19})," ",st.jsx("b",{children:"Управление городом"}),st.jsx(hE,{size:18})]}),y&&st.jsxs(st.Fragment,{children:[st.jsxs("div",{className:"tabs",children:[st.jsx("button",{className:w==="overview"?"selected":"",onClick:()=>S("overview"),children:"Обзор"}),st.jsx("button",{className:w==="stats"?"selected":"",onClick:()=>S("stats"),children:"Статистика"})]}),w==="overview"?st.jsxs(st.Fragment,{children:[st.jsxs("div",{className:"sectionhead",children:["ФИНАНСЫ ",st.jsx("span",{children:"₡ / день"})]}),st.jsxs("div",{className:"line",children:[st.jsx("span",{children:"Доходы"}),st.jsxs("b",{className:"positive",children:["+",Ai(b.revenue)]})]}),st.jsxs("div",{className:"line",children:[st.jsx("span",{children:"Расходы"}),st.jsxs("b",{className:"negative",children:["−",Ai(b.upkeep)]})]}),st.jsxs("div",{className:"line total",children:[st.jsx("span",{children:"Баланс"}),st.jsx("b",{children:Ai(b.balance)})]}),st.jsxs("label",{className:"tax",children:["Налоговая ставка ",st.jsxs("b",{children:[e.tax,"%"]}),st.jsx("input",{"aria-label":"Налоговая ставка",type:"range",min:"0",max:"20",value:e.tax,onChange:C=>i(L=>({...L,tax:+C.target.value}))}),st.jsx("small",{children:"Низкие налоги повышают счастье"})]}),st.jsx("div",{className:"sectionhead",children:"ИНФРАСТРУКТУРА"}),st.jsxs("div",{className:"line",children:[st.jsx("span",{children:"Электросеть"}),st.jsxs("b",{children:[b.supply," ед."]})]}),st.jsx("div",{className:"progress",children:st.jsx("i",{style:{width:Math.min(100,b.demand/Math.max(1,b.supply)*100)+"%",background:b.demand>b.supply?"#e78978":""}})}),st.jsxs("div",{className:"sectionhead",children:["УВЕДОМЛЕНИЯ ",st.jsx("span",{children:Z.length})]}),st.jsx("div",{className:"alerts",children:Z.length?Z.map(C=>C&&st.jsxs("div",{className:"alert",children:[st.jsx(wE,{size:17}),st.jsxs("div",{children:[st.jsx("b",{children:C.t}),st.jsx("small",{children:C.d})]})]},C.t)):st.jsxs("div",{className:"alert good",children:[st.jsx(fE,{size:17}),st.jsxs("div",{children:[st.jsx("b",{children:"Город развивается"}),st.jsx("small",{children:"Критических проблем нет"})]})]})})]}):st.jsxs(st.Fragment,{children:[st.jsx("div",{className:"sectionhead",children:"ИСТОРИЯ КАЗНЫ"}),st.jsxs("svg",{className:"chart",viewBox:"0 0 270 90","aria-label":"График бюджета",children:[st.jsx("defs",{children:st.jsxs("linearGradient",{id:"gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[st.jsx("stop",{offset:"0",stopColor:"#7ac8a5",stopOpacity:".45"}),st.jsx("stop",{offset:"1",stopColor:"#7ac8a5",stopOpacity:"0"})]})}),[20,40,60,80].map(C=>st.jsx("line",{x1:"0",x2:"270",y1:C,y2:C,stroke:"#34444b"},C)),yt.length>0&&st.jsxs(st.Fragment,{children:[st.jsx("polygon",{points:"0,90 "+Ht+" 270,90",fill:"url(#gradient)"}),st.jsx("polyline",{points:Ht,stroke:"#7ac8a5",strokeWidth:"2.5",fill:"none"})]})]}),st.jsxs("div",{className:"line",children:[st.jsx("span",{children:"Минимум"}),st.jsx("b",{children:Ai(vt)})]}),st.jsxs("div",{className:"line",children:[st.jsx("span",{children:"Максимум"}),st.jsx("b",{children:Ai(Xt)})]}),Nc.map(C=>st.jsxs("div",{className:"line",children:[st.jsx("span",{children:Ci[C].name}),st.jsx("b",{children:e.cells.filter(L=>L===C).length})]},C))]}),st.jsxs("div",{className:"sectionhead",children:["КЛЕТКА ",st.jsx("span",{children:p===null?"не выбрана":e.cells[p]?Ci[e.cells[p]].name:"свободна"})]}),st.jsxs("form",{className:"coords",onSubmit:C=>{C.preventDefault();const L=+P,$=+G;Number.isInteger(L)&&Number.isInteger($)&&L>=1&&L<=20&&$>=1&&$<=20?rt(($-1)*20+L-1):x("Координаты от 1 до 20")},children:[st.jsxs("label",{children:["X ",st.jsx("input",{"aria-label":"Координата X",type:"number",min:"1",max:"20",value:P,onChange:C=>U(C.target.value)})]}),st.jsxs("label",{children:["Z ",st.jsx("input",{"aria-label":"Координата Z",type:"number",min:"1",max:"20",value:G,onChange:C=>X(C.target.value)})]}),st.jsx("button",{"aria-label":"Применить к клетке",children:"OK"})]}),p!==null&&e.cells[p]&&st.jsxs("small",{className:"cellstatus",children:["Дорога: ",b.access[p]?"есть":"нет"," · питание: ",b.powered[p]?"есть":"нет"]}),st.jsxs("div",{className:"newbuttons",children:[st.jsx("button",{onClick:()=>ft(Ip(),"Демонстрационный город загружен"),children:"Демо-город"}),st.jsxs("button",{onClick:()=>{confirm("Начать новый город? Несохранённые изменения будут потеряны.")&&ft(ux(),"Новый город создан")},children:[st.jsx(SE,{size:14})," Новый"]})]})]})]})]}),st.jsxs("footer",{children:[st.jsxs("div",{className:"buildheader",children:[st.jsx("span",{children:"СТРОИТЕЛЬСТВО"}),st.jsx("button",{onClick:()=>u(null),className:r?"":"active",children:"Осмотр"}),st.jsxs("button",{disabled:!z.length,onClick:lt,children:[st.jsx(DE,{size:16})," Отмена"]})]}),st.jsx("div",{className:"tools",children:[...Nc,"bulldoze"].map(C=>{const L=cC[C];return st.jsxs("button",{className:"tool "+(r===C?"chosen":""),onClick:()=>u(r===C?null:C),"aria-pressed":r===C,children:[st.jsx("div",{className:"toolicon",style:{color:C==="bulldoze"?"#e78978":Ci[C].color},children:st.jsx(L,{size:25,strokeWidth:1.7})}),st.jsxs("div",{children:[st.jsx("b",{children:C==="bulldoze"?"Снос":Ci[C].name}),st.jsx("small",{children:C==="bulldoze"?"Возврат 20%":Ai(Ci[C].cost)+" ₡"})]})]},C)})})]}),M&&st.jsx("div",{className:"modalshade",onClick:()=>A(""),children:st.jsxs("section",{className:"modal",role:"dialog","aria-label":"Поделиться городом",onClick:C=>C.stopPropagation(),children:[st.jsx("h2",{children:"Ваш город — по ссылке"}),st.jsx("p",{children:"Получатель откроет независимую копию. Изменения в его городе не затронут ваш."}),st.jsx("input",{"aria-label":"Ссылка города",readOnly:!0,value:M,onFocus:C=>C.target.select()}),st.jsx("button",{onClick:()=>A(""),children:"Готово"})]})})]})}sE.createRoot(document.getElementById("root")).render(st.jsx(hC,{}));
