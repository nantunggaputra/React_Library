function yd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function vd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pu={exports:{}},Ai={},Lu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),xd=Symbol.for("react.portal"),wd=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),kd=Symbol.for("react.provider"),Cd=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),_d=Symbol.for("react.memo"),Pd=Symbol.for("react.lazy"),sa=Symbol.iterator;function Ld(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ou=Object.assign,zu={};function _n(e,t,n){this.props=e,this.context=t,this.refs=zu,this.updater=n||Tu}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=_n.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=zu,this.updater=n||Tu}var ts=es.prototype=new Ru;ts.constructor=es;Ou(ts,_n.prototype);ts.isPureReactComponent=!0;var aa=Array.isArray,Iu=Object.prototype.hasOwnProperty,ns={current:null},Mu={key:!0,ref:!0,__self:!0,__source:!0};function $u(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Iu.call(t,r)&&!Mu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:jr,type:e,key:o,ref:l,props:i,_owner:ns.current}}function Td(e,t){return{$$typeof:jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function Od(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ua=/\/+/g;function No(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Od(""+e.key):t.toString(36)}function Jr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case jr:case xd:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+No(l,0):r,aa(i)?(n="",e!=null&&(n=e.replace(ua,"$&/")+"/"),Jr(i,t,n,"",function(c){return c})):i!=null&&(rs(i)&&(i=Td(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ua,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",aa(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+No(o,a);l+=Jr(o,t,n,u,i)}else if(u=Ld(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+No(o,a++),l+=Jr(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Tr(e,t,n){if(e==null)return e;var r=[],i=0;return Jr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},qr={transition:null},Rd={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:qr,ReactCurrentOwner:ns};function Au(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=_n;I.Fragment=wd;I.Profiler=jd;I.PureComponent=es;I.StrictMode=Sd;I.Suspense=Nd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rd;I.act=Au;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ou({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ns.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Iu.call(t,u)&&!Mu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:jr,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:Cd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kd,_context:e},e.Consumer=e};I.createElement=$u;I.createFactory=function(e){var t=$u.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Ed,render:e}};I.isValidElement=rs;I.lazy=function(e){return{$$typeof:Pd,_payload:{_status:-1,_result:e},_init:zd}};I.memo=function(e,t){return{$$typeof:_d,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=qr.transition;qr.transition={};try{e()}finally{qr.transition=t}};I.unstable_act=Au;I.useCallback=function(e,t){return ve.current.useCallback(e,t)};I.useContext=function(e){return ve.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};I.useEffect=function(e,t){return ve.current.useEffect(e,t)};I.useId=function(){return ve.current.useId()};I.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ve.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};I.useRef=function(e){return ve.current.useRef(e)};I.useState=function(e){return ve.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ve.current.useTransition()};I.version="18.3.1";Lu.exports=I;var S=Lu.exports;const Fu=vd(S),ca=yd({__proto__:null,default:Fu},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=S,Md=Symbol.for("react.element"),$d=Symbol.for("react.fragment"),Ad=Object.prototype.hasOwnProperty,Fd=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dd={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ad.call(t,r)&&!Dd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Md,type:e,key:o,ref:l,props:i,_owner:Fd.current}}Ai.Fragment=$d;Ai.jsx=Du;Ai.jsxs=Du;Pu.exports=Ai;var s=Pu.exports,el={},Bu={exports:{}},ze={},Uu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,O){var R=L.length;L.push(O);e:for(;0<R;){var Z=R-1>>>1,ne=L[Z];if(0<i(ne,O))L[Z]=O,L[R]=ne,R=Z;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var O=L[0],R=L.pop();if(R!==O){L[0]=R;e:for(var Z=0,ne=L.length,Pr=ne>>>1;Z<Pr;){var $t=2*(Z+1)-1,Eo=L[$t],At=$t+1,Lr=L[At];if(0>i(Eo,R))At<ne&&0>i(Lr,Eo)?(L[Z]=Lr,L[At]=R,Z=At):(L[Z]=Eo,L[$t]=R,Z=$t);else if(At<ne&&0>i(Lr,R))L[Z]=Lr,L[At]=R,Z=At;else break e}}return O}function i(L,O){var R=L.sortIndex-O.sortIndex;return R!==0?R:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],m=1,h=null,g=3,x=!1,v=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(L){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=L)r(c),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(c)}}function w(L){if(y=!1,p(L),!v)if(n(u)!==null)v=!0,ko(E);else{var O=n(c);O!==null&&Co(w,O.startTime-L)}}function E(L,O){v=!1,y&&(y=!1,d(T),T=-1),x=!0;var R=g;try{for(p(O),h=n(u);h!==null&&(!(h.expirationTime>O)||L&&!We());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,g=h.priorityLevel;var ne=Z(h.expirationTime<=O);O=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(u)&&r(u),p(O)}else r(u);h=n(u)}if(h!==null)var Pr=!0;else{var $t=n(c);$t!==null&&Co(w,$t.startTime-O),Pr=!1}return Pr}finally{h=null,g=R,x=!1}}var N=!1,k=null,T=-1,V=5,z=-1;function We(){return!(e.unstable_now()-z<V)}function On(){if(k!==null){var L=e.unstable_now();z=L;var O=!0;try{O=k(!0,L)}finally{O?zn():(N=!1,k=null)}}else N=!1}var zn;if(typeof f=="function")zn=function(){f(On)};else if(typeof MessageChannel<"u"){var la=new MessageChannel,gd=la.port2;la.port1.onmessage=On,zn=function(){gd.postMessage(null)}}else zn=function(){_(On,0)};function ko(L){k=L,N||(N=!0,zn())}function Co(L,O){T=_(function(){L(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,ko(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var R=g;g=O;try{return L()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=g;g=L;try{return O()}finally{g=R}},e.unstable_scheduleCallback=function(L,O,R){var Z=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Z+R:Z):R=Z,L){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,L={id:m++,callback:O,priorityLevel:L,startTime:R,expirationTime:ne,sortIndex:-1},R>Z?(L.sortIndex=R,t(c,L),n(u)===null&&L===n(c)&&(y?(d(T),T=-1):y=!0,Co(w,R-Z))):(L.sortIndex=ne,t(u,L),v||x||(v=!0,ko(E))),L},e.unstable_shouldYield=We,e.unstable_wrapCallback=function(L){var O=g;return function(){var R=g;g=O;try{return L.apply(this,arguments)}finally{g=R}}}})(Vu);Uu.exports=Vu;var Bd=Uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=S,Oe=Bd;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wu=new Set,tr={};function Zt(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(tr[e]=t,e=0;e<t.length;e++)Wu.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},da={};function Wd(e){return tl.call(da,e)?!0:tl.call(fa,e)?!1:Vd.test(e)?da[e]=!0:(fa[e]=!0,!1)}function Hd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yd(e,t,n,r){if(t===null||typeof t>"u"||Hd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,os);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,os);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,os);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ls(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yd(t,n,i,r)&&(n=null),r||i===null?Wd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),bt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),as=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),pa=Symbol.iterator;function Rn(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,_o;function Vn(e){if(_o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_o=t&&t[1]||""}return`
`+_o+e}var Po=!1;function Lo(e,t){if(!e||Po)return"";Po=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Po=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vn(e):""}function Kd(e){switch(e.tag){case 5:return Vn(e.type);case 16:return Vn("Lazy");case 13:return Vn("Suspense");case 19:return Vn("SuspenseList");case 0:case 2:case 15:return e=Lo(e.type,!1),e;case 11:return e=Lo(e.type.render,!1),e;case 1:return e=Lo(e.type,!0),e;default:return""}}function ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case bt:return"Portal";case nl:return"Profiler";case ss:return"StrictMode";case rl:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Hu:return(e._context.displayName||"Context")+".Provider";case as:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return t=e.displayName||null,t!==null?t:ol(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return ol(e(t))}catch{}}return null}function Qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ol(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e){var t=Qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Xd(e))}function Xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gu(e,t){t=t.checked,t!=null&&ls(e,"checked",t,!1)}function sl(e,t){Gu(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?al(e,t.type,n):t.hasOwnProperty("defaultValue")&&al(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ha(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function al(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Wn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function Zu(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,qu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gd=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function bu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function ec(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(Zd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function dl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,pn=null,mn=null;function va(e){if(e=Er(e)){if(typeof ml!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Vi(t),ml(e.stateNode,e.type,t))}}function tc(e){pn?mn?mn.push(e):mn=[e]:pn=e}function nc(){if(pn){var e=pn,t=mn;if(mn=pn=null,va(e),t)for(e=0;e<t.length;e++)va(t[e])}}function rc(e,t){return e(t)}function ic(){}var To=!1;function oc(e,t,n){if(To)return e(t,n);To=!0;try{return rc(e,t,n)}finally{To=!1,(pn!==null||mn!==null)&&(ic(),nc())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var hl=!1;if(ft)try{var In={};Object.defineProperty(In,"passive",{get:function(){hl=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{hl=!1}function Jd(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Qn=!1,pi=null,mi=!1,gl=null,qd={onError:function(e){Qn=!0,pi=e}};function bd(e,t,n,r,i,o,l,a,u){Qn=!1,pi=null,Jd.apply(qd,arguments)}function e0(e,t,n,r,i,o,l,a,u){if(bd.apply(this,arguments),Qn){if(Qn){var c=pi;Qn=!1,pi=null}else throw Error(j(198));mi||(mi=!0,gl=c)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xa(e){if(Jt(e)!==e)throw Error(j(188))}function t0(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return xa(i),e;if(o===r)return xa(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function sc(e){return e=t0(e),e!==null?ac(e):null}function ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ac(e);if(t!==null)return t;e=e.sibling}return null}var uc=Oe.unstable_scheduleCallback,wa=Oe.unstable_cancelCallback,n0=Oe.unstable_shouldYield,r0=Oe.unstable_requestPaint,J=Oe.unstable_now,i0=Oe.unstable_getCurrentPriorityLevel,fs=Oe.unstable_ImmediatePriority,cc=Oe.unstable_UserBlockingPriority,hi=Oe.unstable_NormalPriority,o0=Oe.unstable_LowPriority,fc=Oe.unstable_IdlePriority,Fi=null,nt=null;function l0(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Fi,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:u0,s0=Math.log,a0=Math.LN2;function u0(e){return e>>>=0,e===0?32:31-(s0(e)/a0|0)|0}var Ir=64,Mr=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Hn(a):(o&=l,o!==0&&(r=Hn(o)))}else l=n&~i,l!==0?r=Hn(l):o!==0&&(r=Hn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),i=1<<n,r|=e[n],t&=~i;return r}function c0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Xe(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=c0(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dc(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function Oo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function d0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function pc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mc,ps,hc,gc,yc,vl=!1,$r=[],kt=null,Ct=null,Et=null,ir=new Map,or=new Map,xt=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sa(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function Mn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Er(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function m0(e,t,n,r,i){switch(t){case"focusin":return kt=Mn(kt,e,t,n,r,i),!0;case"dragenter":return Ct=Mn(Ct,e,t,n,r,i),!0;case"mouseover":return Et=Mn(Et,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ir.set(o,Mn(ir.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,or.set(o,Mn(or.get(o)||null,e,t,n,r,i)),!0}return!1}function vc(e){var t=Bt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,yc(e.priority,function(){hc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pl=r,n.target.dispatchEvent(r),pl=null}else return t=Er(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function ja(e,t,n){br(e)&&n.delete(t)}function h0(){vl=!1,kt!==null&&br(kt)&&(kt=null),Ct!==null&&br(Ct)&&(Ct=null),Et!==null&&br(Et)&&(Et=null),ir.forEach(ja),or.forEach(ja)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,vl||(vl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,h0)))}function lr(e){function t(i){return $n(i,e)}if(0<$r.length){$n($r[0],e);for(var n=1;n<$r.length;n++){var r=$r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&$n(kt,e),Ct!==null&&$n(Ct,e),Et!==null&&$n(Et,e),ir.forEach(t),or.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)vc(n),n.blockedOn===null&&xt.shift()}var hn=ht.ReactCurrentBatchConfig,yi=!0;function g0(e,t,n,r){var i=F,o=hn.transition;hn.transition=null;try{F=1,ms(e,t,n,r)}finally{F=i,hn.transition=o}}function y0(e,t,n,r){var i=F,o=hn.transition;hn.transition=null;try{F=4,ms(e,t,n,r)}finally{F=i,hn.transition=o}}function ms(e,t,n,r){if(yi){var i=xl(e,t,n,r);if(i===null)Uo(e,t,r,vi,n),Sa(e,r);else if(m0(i,e,t,n,r))r.stopPropagation();else if(Sa(e,r),t&4&&-1<p0.indexOf(e)){for(;i!==null;){var o=Er(i);if(o!==null&&mc(o),o=xl(e,t,n,r),o===null&&Uo(e,t,r,vi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Uo(e,t,r,null,n)}}var vi=null;function xl(e,t,n,r){if(vi=null,e=cs(r),e=Bt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vi=e,null}function xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case fs:return 1;case cc:return 4;case hi:case o0:return 16;case fc:return 536870912;default:return 16}default:return 16}}var St=null,hs=null,ei=null;function wc(){if(ei)return ei;var e,t=hs,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ei=i.slice(e,1<r?1-r:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function ka(){return!1}function Re(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ar:ka,this.isPropagationStopped=ka,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=Re(Pn),Cr=X({},Pn,{view:0,detail:0}),v0=Re(Cr),zo,Ro,An,Di=X({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==An&&(An&&e.type==="mousemove"?(zo=e.screenX-An.screenX,Ro=e.screenY-An.screenY):Ro=zo=0,An=e),zo)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),Ca=Re(Di),x0=X({},Di,{dataTransfer:0}),w0=Re(x0),S0=X({},Cr,{relatedTarget:0}),Io=Re(S0),j0=X({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=Re(j0),C0=X({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),E0=Re(C0),N0=X({},Pn,{data:0}),Ea=Re(N0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=L0[e])?!!t[e]:!1}function ys(){return T0}var O0=X({},Cr,{key:function(e){if(e.key){var t=_0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z0=Re(O0),R0=X({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=Re(R0),I0=X({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),M0=Re(I0),$0=X({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=Re($0),F0=X({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=Re(F0),B0=[9,13,27,32],vs=ft&&"CompositionEvent"in window,Xn=null;ft&&"documentMode"in document&&(Xn=document.documentMode);var U0=ft&&"TextEvent"in window&&!Xn,Sc=ft&&(!vs||Xn&&8<Xn&&11>=Xn),_a=" ",Pa=!1;function jc(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function V0(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(Pa=!0,_a);case"textInput":return e=t.data,e===_a&&Pa?null:e;default:return null}}function W0(e,t){if(tn)return e==="compositionend"||!vs&&jc(e,t)?(e=wc(),ei=hs=St=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H0[e.type]:t==="textarea"}function Cc(e,t,n,r){tc(r),t=xi(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,sr=null;function Y0(e){Mc(e,0)}function Bi(e){var t=on(e);if(Xu(t))return e}function K0(e,t){if(e==="change")return t}var Ec=!1;if(ft){var Mo;if(ft){var $o="oninput"in document;if(!$o){var Ta=document.createElement("div");Ta.setAttribute("oninput","return;"),$o=typeof Ta.oninput=="function"}Mo=$o}else Mo=!1;Ec=Mo&&(!document.documentMode||9<document.documentMode)}function Oa(){Gn&&(Gn.detachEvent("onpropertychange",Nc),sr=Gn=null)}function Nc(e){if(e.propertyName==="value"&&Bi(sr)){var t=[];Cc(t,sr,e,cs(e)),oc(Y0,t)}}function Q0(e,t,n){e==="focusin"?(Oa(),Gn=t,sr=n,Gn.attachEvent("onpropertychange",Nc)):e==="focusout"&&Oa()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(sr)}function G0(e,t){if(e==="click")return Bi(t)}function Z0(e,t){if(e==="input"||e==="change")return Bi(t)}function J0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:J0;function ar(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tl.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,t){var n=za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=za(n)}}function _c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pc(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q0(e){var t=Pc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_c(n.ownerDocument.documentElement,n)){if(r!==null&&xs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ra(n,o);var l=Ra(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var b0=ft&&"documentMode"in document&&11>=document.documentMode,nn=null,wl=null,Zn=null,Sl=!1;function Ia(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||nn==null||nn!==di(r)||(r=nn,"selectionStart"in r&&xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zn&&ar(Zn,r)||(Zn=r,r=xi(wl,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},Ao={},Lc={};ft&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Ui(e){if(Ao[e])return Ao[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lc)return Ao[e]=t[n];return e}var Tc=Ui("animationend"),Oc=Ui("animationiteration"),zc=Ui("animationstart"),Rc=Ui("transitionend"),Ic=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Ic.set(e,t),Zt(t,[e])}for(var Fo=0;Fo<Ma.length;Fo++){var Do=Ma[Fo],ep=Do.toLowerCase(),tp=Do[0].toUpperCase()+Do.slice(1);Rt(ep,"on"+tp)}Rt(Tc,"onAnimationEnd");Rt(Oc,"onAnimationIteration");Rt(zc,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(Rc,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),np=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function $a(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,e0(r,t,void 0,e),e.currentTarget=null}function Mc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;$a(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;$a(i,a,c),o=u}}}if(mi)throw e=gl,mi=!1,gl=null,e}function W(e,t){var n=t[Nl];n===void 0&&(n=t[Nl]=new Set);var r=e+"__bubble";n.has(r)||($c(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),$c(n,e,r,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Dr]){e[Dr]=!0,Wu.forEach(function(n){n!=="selectionchange"&&(np.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dr]||(t[Dr]=!0,Bo("selectionchange",!1,t))}}function $c(e,t,n,r){switch(xc(t)){case 1:var i=g0;break;case 4:i=y0;break;default:i=ms}n=i.bind(null,t,n,e),i=void 0,!hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Uo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Bt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}oc(function(){var c=o,m=cs(n),h=[];e:{var g=Ic.get(e);if(g!==void 0){var x=gs,v=e;switch(e){case"keypress":if(ti(n)===0)break e;case"keydown":case"keyup":x=z0;break;case"focusin":v="focus",x=Io;break;case"focusout":v="blur",x=Io;break;case"beforeblur":case"afterblur":x=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ca;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=M0;break;case Tc:case Oc:case zc:x=k0;break;case Rc:x=A0;break;case"scroll":x=v0;break;case"wheel":x=D0;break;case"copy":case"cut":case"paste":x=E0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Na}var y=(t&4)!==0,_=!y&&e==="scroll",d=y?g!==null?g+"Capture":null:g;y=[];for(var f=c,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=rr(f,d),w!=null&&y.push(cr(f,w,p)))),_)break;f=f.return}0<y.length&&(g=new x(g,v,null,n,m),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==pl&&(v=n.relatedTarget||n.fromElement)&&(Bt(v)||v[dt]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=c,v=v?Bt(v):null,v!==null&&(_=Jt(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=c),x!==v)){if(y=Ca,w="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Na,w="onPointerLeave",d="onPointerEnter",f="pointer"),_=x==null?g:on(x),p=v==null?g:on(v),g=new y(w,f+"leave",x,n,m),g.target=_,g.relatedTarget=p,w=null,Bt(m)===c&&(y=new y(d,f+"enter",v,n,m),y.target=p,y.relatedTarget=_,w=y),_=w,x&&v)t:{for(y=x,d=v,f=0,p=y;p;p=qt(p))f++;for(p=0,w=d;w;w=qt(w))p++;for(;0<f-p;)y=qt(y),f--;for(;0<p-f;)d=qt(d),p--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break t;y=qt(y),d=qt(d)}y=null}else y=null;x!==null&&Aa(h,g,x,y,!1),v!==null&&_!==null&&Aa(h,_,v,y,!0)}}e:{if(g=c?on(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var E=K0;else if(La(g))if(Ec)E=Z0;else{E=X0;var N=Q0}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=G0);if(E&&(E=E(e,c))){Cc(h,E,n,m);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&al(g,"number",g.value)}switch(N=c?on(c):window,e){case"focusin":(La(N)||N.contentEditable==="true")&&(nn=N,wl=c,Zn=null);break;case"focusout":Zn=wl=nn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Ia(h,n,m);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":Ia(h,n,m)}var k;if(vs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else tn?jc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Sc&&n.locale!=="ko"&&(tn||T!=="onCompositionStart"?T==="onCompositionEnd"&&tn&&(k=wc()):(St=m,hs="value"in St?St.value:St.textContent,tn=!0)),N=xi(c,T),0<N.length&&(T=new Ea(T,e,null,n,m),h.push({event:T,listeners:N}),k?T.data=k:(k=kc(n),k!==null&&(T.data=k)))),(k=U0?V0(e,n):W0(e,n))&&(c=xi(c,"onBeforeInput"),0<c.length&&(m=new Ea("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=k))}Mc(h,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=rr(e,n),o!=null&&r.unshift(cr(e,o,i)),o=rr(e,t),o!=null&&r.push(cr(e,o,i))),e=e.return}return r}function qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=rr(n,o),u!=null&&l.unshift(cr(n,u,a))):i||(u=rr(n,o),u!=null&&l.push(cr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var rp=/\r\n?/g,ip=/\u0000|\uFFFD/g;function Fa(e){return(typeof e=="string"?e:""+e).replace(rp,`
`).replace(ip,"")}function Br(e,t,n){if(t=Fa(t),Fa(e)!==t&&n)throw Error(j(425))}function wi(){}var jl=null,kl=null;function Cl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,Da=typeof Promise=="function"?Promise:void 0,lp=typeof queueMicrotask=="function"?queueMicrotask:typeof Da<"u"?function(e){return Da.resolve(null).then(e).catch(sp)}:El;function sp(e){setTimeout(function(){throw e})}function Vo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);lr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),tt="__reactFiber$"+Ln,fr="__reactProps$"+Ln,dt="__reactContainer$"+Ln,Nl="__reactEvents$"+Ln,ap="__reactListeners$"+Ln,up="__reactHandles$"+Ln;function Bt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[tt])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[tt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Vi(e){return e[fr]||null}var _l=[],ln=-1;function It(e){return{current:e}}function H(e){0>ln||(e.current=_l[ln],_l[ln]=null,ln--)}function U(e,t){ln++,_l[ln]=e.current,e.current=t}var zt={},he=It(zt),je=It(!1),Yt=zt;function wn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function Si(){H(je),H(he)}function Ua(e,t,n){if(he.current!==zt)throw Error(j(168));U(he,t),U(je,n)}function Ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Qd(e)||"Unknown",i));return X({},n,r)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Yt=he.current,U(he,e),U(je,je.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Ac(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,H(je),H(he),U(he,e)):H(je),U(je,n)}var lt=null,Wi=!1,Wo=!1;function Fc(e){lt===null?lt=[e]:lt.push(e)}function cp(e){Wi=!0,Fc(e)}function Mt(){if(!Wo&&lt!==null){Wo=!0;var e=0,t=F;try{var n=lt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Wi=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),uc(fs,Mt),i}finally{F=t,Wo=!1}}return null}var sn=[],an=0,ki=null,Ci=0,Me=[],$e=0,Kt=null,st=1,at="";function Ft(e,t){sn[an++]=Ci,sn[an++]=ki,ki=e,Ci=t}function Dc(e,t,n){Me[$e++]=st,Me[$e++]=at,Me[$e++]=Kt,Kt=e;var r=st;e=at;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var o=32-Xe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,st=1<<32-Xe(t)+i|n<<i|r,at=o+e}else st=1<<o|n<<i|r,at=e}function ws(e){e.return!==null&&(Ft(e,1),Dc(e,1,0))}function Ss(e){for(;e===ki;)ki=sn[--an],sn[an]=null,Ci=sn[--an],sn[an]=null;for(;e===Kt;)Kt=Me[--$e],Me[$e]=null,at=Me[--$e],Me[$e]=null,st=Me[--$e],Me[$e]=null}var Le=null,Pe=null,Y=!1,Qe=null;function Bc(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Pe=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Pe=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(Y){var t=Pe;if(t){var n=t;if(!Wa(e,t)){if(Pl(e))throw Error(j(418));t=Nt(n.nextSibling);var r=Le;t&&Wa(e,t)?Bc(r,n):(e.flags=e.flags&-4097|2,Y=!1,Le=e)}}else{if(Pl(e))throw Error(j(418));e.flags=e.flags&-4097|2,Y=!1,Le=e}}}function Ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Ur(e){if(e!==Le)return!1;if(!Y)return Ha(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cl(e.type,e.memoizedProps)),t&&(t=Pe)){if(Pl(e))throw Uc(),Error(j(418));for(;t;)Bc(e,t),t=Nt(t.nextSibling)}if(Ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Le?Nt(e.stateNode.nextSibling):null;return!0}function Uc(){for(var e=Pe;e;)e=Nt(e.nextSibling)}function Sn(){Pe=Le=null,Y=!1}function js(e){Qe===null?Qe=[e]:Qe.push(e)}var fp=ht.ReactCurrentBatchConfig;function Fn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Vr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ya(e){var t=e._init;return t(e._payload)}function Vc(e){function t(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=Tt(d,f),d.index=0,d.sibling=null,d}function o(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,p,w){return f===null||f.tag!==6?(f=Zo(p,d.mode,w),f.return=d,f):(f=i(f,p),f.return=d,f)}function u(d,f,p,w){var E=p.type;return E===en?m(d,f,p.props.children,w,p.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&Ya(E)===f.type)?(w=i(f,p.props),w.ref=Fn(d,f,p),w.return=d,w):(w=ai(p.type,p.key,p.props,null,d.mode,w),w.ref=Fn(d,f,p),w.return=d,w)}function c(d,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Jo(p,d.mode,w),f.return=d,f):(f=i(f,p.children||[]),f.return=d,f)}function m(d,f,p,w,E){return f===null||f.tag!==7?(f=Ht(p,d.mode,w,E),f.return=d,f):(f=i(f,p),f.return=d,f)}function h(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Zo(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Or:return p=ai(f.type,f.key,f.props,null,d.mode,p),p.ref=Fn(d,null,f),p.return=d,p;case bt:return f=Jo(f,d.mode,p),f.return=d,f;case yt:var w=f._init;return h(d,w(f._payload),p)}if(Wn(f)||Rn(f))return f=Ht(f,d.mode,p,null),f.return=d,f;Vr(d,f)}return null}function g(d,f,p,w){var E=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Or:return p.key===E?u(d,f,p,w):null;case bt:return p.key===E?c(d,f,p,w):null;case yt:return E=p._init,g(d,f,E(p._payload),w)}if(Wn(p)||Rn(p))return E!==null?null:m(d,f,p,w,null);Vr(d,p)}return null}function x(d,f,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,a(f,d,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Or:return d=d.get(w.key===null?p:w.key)||null,u(f,d,w,E);case bt:return d=d.get(w.key===null?p:w.key)||null,c(f,d,w,E);case yt:var N=w._init;return x(d,f,p,N(w._payload),E)}if(Wn(w)||Rn(w))return d=d.get(p)||null,m(f,d,w,E,null);Vr(f,w)}return null}function v(d,f,p,w){for(var E=null,N=null,k=f,T=f=0,V=null;k!==null&&T<p.length;T++){k.index>T?(V=k,k=null):V=k.sibling;var z=g(d,k,p[T],w);if(z===null){k===null&&(k=V);break}e&&k&&z.alternate===null&&t(d,k),f=o(z,f,T),N===null?E=z:N.sibling=z,N=z,k=V}if(T===p.length)return n(d,k),Y&&Ft(d,T),E;if(k===null){for(;T<p.length;T++)k=h(d,p[T],w),k!==null&&(f=o(k,f,T),N===null?E=k:N.sibling=k,N=k);return Y&&Ft(d,T),E}for(k=r(d,k);T<p.length;T++)V=x(k,d,T,p[T],w),V!==null&&(e&&V.alternate!==null&&k.delete(V.key===null?T:V.key),f=o(V,f,T),N===null?E=V:N.sibling=V,N=V);return e&&k.forEach(function(We){return t(d,We)}),Y&&Ft(d,T),E}function y(d,f,p,w){var E=Rn(p);if(typeof E!="function")throw Error(j(150));if(p=E.call(p),p==null)throw Error(j(151));for(var N=E=null,k=f,T=f=0,V=null,z=p.next();k!==null&&!z.done;T++,z=p.next()){k.index>T?(V=k,k=null):V=k.sibling;var We=g(d,k,z.value,w);if(We===null){k===null&&(k=V);break}e&&k&&We.alternate===null&&t(d,k),f=o(We,f,T),N===null?E=We:N.sibling=We,N=We,k=V}if(z.done)return n(d,k),Y&&Ft(d,T),E;if(k===null){for(;!z.done;T++,z=p.next())z=h(d,z.value,w),z!==null&&(f=o(z,f,T),N===null?E=z:N.sibling=z,N=z);return Y&&Ft(d,T),E}for(k=r(d,k);!z.done;T++,z=p.next())z=x(k,d,T,z.value,w),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?T:z.key),f=o(z,f,T),N===null?E=z:N.sibling=z,N=z);return e&&k.forEach(function(On){return t(d,On)}),Y&&Ft(d,T),E}function _(d,f,p,w){if(typeof p=="object"&&p!==null&&p.type===en&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Or:e:{for(var E=p.key,N=f;N!==null;){if(N.key===E){if(E=p.type,E===en){if(N.tag===7){n(d,N.sibling),f=i(N,p.props.children),f.return=d,d=f;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&Ya(E)===N.type){n(d,N.sibling),f=i(N,p.props),f.ref=Fn(d,N,p),f.return=d,d=f;break e}n(d,N);break}else t(d,N);N=N.sibling}p.type===en?(f=Ht(p.props.children,d.mode,w,p.key),f.return=d,d=f):(w=ai(p.type,p.key,p.props,null,d.mode,w),w.ref=Fn(d,f,p),w.return=d,d=w)}return l(d);case bt:e:{for(N=p.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),f=i(f,p.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=Jo(p,d.mode,w),f.return=d,d=f}return l(d);case yt:return N=p._init,_(d,f,N(p._payload),w)}if(Wn(p))return v(d,f,p,w);if(Rn(p))return y(d,f,p,w);Vr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,p),f.return=d,d=f):(n(d,f),f=Zo(p,d.mode,w),f.return=d,d=f),l(d)):n(d,f)}return _}var jn=Vc(!0),Wc=Vc(!1),Ei=It(null),Ni=null,un=null,ks=null;function Cs(){ks=un=Ni=null}function Es(e){var t=Ei.current;H(Ei),e._currentValue=t}function Tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){Ni=e,ks=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(Ni===null)throw Error(j(308));un=e,Ni.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var Ut=null;function Ns(e){Ut===null?Ut=[e]:Ut.push(e)}function Hc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ns(t)):(n.next=i.next,i.next=n),t.interleaved=n,pt(e,r)}function pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function _s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,pt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ns(r)):(t.next=i.next,i.next=t),r.interleaved=t,pt(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _i(e,t,n,r){var i=e.updateQueue;vt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,m=c=u=null,a=o;do{var g=a.lane,x=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(g=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(x,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(x,h,g):v,g==null)break e;h=X({},h,g);break e;case 2:vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=x,u=h):m=m.next=x,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Xt|=l,e.lanes=l,e.memoizedState=h}}function Qa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Nr={},rt=It(Nr),dr=It(Nr),pr=It(Nr);function Vt(e){if(e===Nr)throw Error(j(174));return e}function Ps(e,t){switch(U(pr,t),U(dr,e),U(rt,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cl(t,e)}H(rt),U(rt,t)}function kn(){H(rt),H(dr),H(pr)}function Kc(e){Vt(pr.current);var t=Vt(rt.current),n=cl(t,e.type);t!==n&&(U(dr,e),U(rt,n))}function Ls(e){dr.current===e&&(H(rt),H(dr))}var K=It(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=[];function Ts(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null;Ho.length=0}var ri=ht.ReactCurrentDispatcher,Yo=ht.ReactCurrentBatchConfig,Qt=0,Q=null,ee=null,ie=null,Li=!1,Jn=!1,mr=0,dp=0;function fe(){throw Error(j(321))}function Os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function zs(e,t,n,r,i,o){if(Qt=o,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ri.current=e===null||e.memoizedState===null?gp:yp,e=n(r,i),Jn){o=0;do{if(Jn=!1,mr=0,25<=o)throw Error(j(301));o+=1,ie=ee=null,t.updateQueue=null,ri.current=vp,e=n(r,i)}while(Jn)}if(ri.current=Ti,t=ee!==null&&ee.next!==null,Qt=0,ie=ee=Q=null,Li=!1,t)throw Error(j(300));return e}function Rs(){var e=mr!==0;return mr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Q.memoizedState=ie=e:ie=ie.next=e,ie}function Ue(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ie===null?Q.memoizedState:ie.next;if(t!==null)ie=t,ee=e;else{if(e===null)throw Error(j(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ie===null?Q.memoizedState=ie=e:ie=ie.next=e}return ie}function hr(e,t){return typeof t=="function"?t(e):t}function Ko(e){var t=Ue(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var m=c.lane;if((Qt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,l=r):u=u.next=h,Q.lanes|=m,Xt|=m}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,Ze(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Q.lanes|=o,Xt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qo(e){var t=Ue(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ze(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qc(){}function Xc(e,t){var n=Q,r=Ue(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,Is(Jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,gr(9,Zc.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(j(349));Qt&30||Gc(n,t,i)}return i}function Gc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zc(e,t,n,r){t.value=n,t.getSnapshot=r,qc(t)&&bc(e)}function Jc(e,t,n){return n(function(){qc(t)&&bc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function bc(e){var t=pt(e,1);t!==null&&Ge(t,e,1,-1)}function Xa(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=hp.bind(null,Q,e),[t.memoizedState,e]}function gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ef(){return Ue().memoizedState}function ii(e,t,n,r){var i=qe();Q.flags|=e,i.memoizedState=gr(1|t,n,void 0,r===void 0?null:r)}function Hi(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&Os(r,l.deps)){i.memoizedState=gr(t,n,o,r);return}}Q.flags|=e,i.memoizedState=gr(1|t,n,o,r)}function Ga(e,t){return ii(8390656,8,e,t)}function Is(e,t){return Hi(2048,8,e,t)}function tf(e,t){return Hi(4,2,e,t)}function nf(e,t){return Hi(4,4,e,t)}function rf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4,4,rf.bind(null,t,e),n)}function Ms(){}function lf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Os(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Os(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function af(e,t,n){return Qt&21?(Ze(n,t)||(n=dc(),Q.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function pp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Yo.transition;Yo.transition={};try{e(!1),t()}finally{F=n,Yo.transition=r}}function uf(){return Ue().memoizedState}function mp(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cf(e))ff(t,n);else if(n=Hc(e,t,n,r),n!==null){var i=ye();Ge(n,e,r,i),df(n,t,r)}}function hp(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cf(e))ff(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ze(a,l)){var u=t.interleaved;u===null?(i.next=i,Ns(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Hc(e,t,i,r),n!==null&&(i=ye(),Ge(n,e,r,i),df(n,t,r))}}function cf(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function ff(e,t){Jn=Li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ds(e,n)}}var Ti={readContext:Be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},gp={readContext:Be,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Ga,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ii(4194308,4,rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return ii(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mp.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:Xa,useDebugValue:Ms,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=Xa(!1),t=e[0];return e=pp.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=qe();if(Y){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),oe===null)throw Error(j(349));Qt&30||Gc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ga(Jc.bind(null,r,o,e),[e]),r.flags|=2048,gr(9,Zc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=oe.identifierPrefix;if(Y){var n=at,r=st;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yp={readContext:Be,useCallback:lf,useContext:Be,useEffect:Is,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:sf,useReducer:Ko,useRef:ef,useState:function(){return Ko(hr)},useDebugValue:Ms,useDeferredValue:function(e){var t=Ue();return af(t,ee.memoizedState,e)},useTransition:function(){var e=Ko(hr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Xc,useId:uf,unstable_isNewReconciler:!1},vp={readContext:Be,useCallback:lf,useContext:Be,useEffect:Is,useImperativeHandle:of,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:sf,useReducer:Qo,useRef:ef,useState:function(){return Qo(hr)},useDebugValue:Ms,useDeferredValue:function(e){var t=Ue();return ee===null?t.memoizedState=e:af(t,ee.memoizedState,e)},useTransition:function(){var e=Qo(hr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Xc,useId:uf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yi={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Lt(e),o=ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Ge(t,e,i,r),ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Lt(e),o=ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(Ge(t,e,i,r),ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Lt(e),i=ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(Ge(t,e,r,n),ni(t,e,r))}};function Za(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(i,o):!0}function pf(e,t,n){var r=!1,i=zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(i=ke(t)?Yt:he.current,r=t.contextTypes,o=(r=r!=null)?wn(e,i):zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ja(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function zl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_s(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Be(o):(o=ke(t)?Yt:he.current,i.context=wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ol(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yi.enqueueReplaceState(i,i.state,null),_i(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=Kd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Xo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xp=typeof WeakMap=="function"?WeakMap:Map;function mf(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,Wl=r),Rl(e,t)},n}function hf(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Rl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rl(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function qa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rp.bind(null,e,t,n),t.then(e,e))}function ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var wp=ht.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Wc(t,null,n,r):jn(t,e.child,n,r)}function tu(e,t,n,r,i){n=n.render;var o=t.ref;return gn(t,i),r=zs(e,t,n,r,o,i),n=Rs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):(Y&&n&&ws(t),t.flags|=1,ge(e,t,r,i),t.child)}function nu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ws(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gf(e,t,o,r,i)):(e=ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(l,r)&&e.ref===t.ref)return mt(e,t,i)}return t.flags|=1,e=Tt(o,r),e.ref=t.ref,e.return=t,t.child=e}function gf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ar(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,mt(e,t,i)}return Il(e,t,n,r,i)}function yf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(fn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(fn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(fn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(fn,_e),_e|=r;return ge(e,t,i,n),t.child}function vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,i){var o=ke(n)?Yt:he.current;return o=wn(t,o),gn(t,i),n=zs(e,t,n,r,o,i),r=Rs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mt(e,t,i)):(Y&&r&&ws(t),t.flags|=1,ge(e,t,n,i),t.child)}function ru(e,t,n,r,i){if(ke(n)){var o=!0;ji(t)}else o=!1;if(gn(t,i),t.stateNode===null)oi(e,t),pf(t,n,r),zl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Be(c):(c=ke(n)?Yt:he.current,c=wn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ja(t,l,r,c),vt=!1;var g=t.memoizedState;l.state=g,_i(t,r,l,i),u=t.memoizedState,a!==r||g!==u||je.current||vt?(typeof m=="function"&&(Ol(t,n,m,r),u=t.memoizedState),(a=vt||Za(t,n,a,r,g,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Yc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ye(t.type,a),l.props=c,h=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Be(u):(u=ke(n)?Yt:he.current,u=wn(t,u));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||g!==u)&&Ja(t,l,r,u),vt=!1,g=t.memoizedState,l.state=g,_i(t,r,l,i);var v=t.memoizedState;a!==h||g!==v||je.current||vt?(typeof x=="function"&&(Ol(t,n,x,r),v=t.memoizedState),(c=vt||Za(t,n,c,r,g,v,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ml(e,t,n,r,o,i)}function Ml(e,t,n,r,i,o){vf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Va(t,n,!1),mt(e,t,o);r=t.stateNode,wp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=jn(t,e.child,null,o),t.child=jn(t,null,a,o)):ge(e,t,a,o),t.memoizedState=r.state,i&&Va(t,n,!0),t.child}function xf(e){var t=e.stateNode;t.pendingContext?Ua(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ua(e,t.context,!1),Ps(e,t.containerInfo)}function iu(e,t,n,r,i){return Sn(),js(i),t.flags|=256,ge(e,t,n,r),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function wf(e,t,n){var r=t.pendingProps,i=K.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(K,i&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Xi(l,r,0,null),e=Ht(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Al(n),t.memoizedState=$l,e):$s(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Sp(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Tt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tt(a,o):(o=Ht(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Al(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=$l,r}return o=e.child,e=o.sibling,r=Tt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=Xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wr(e,t,n,r){return r!==null&&js(r),jn(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sp(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Xo(Error(j(422))),Wr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Xi({mode:"visible",children:r.children},i,0,null),o=Ht(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&jn(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=$l,o);if(!(t.mode&1))return Wr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(j(419)),r=Xo(o,r,void 0),Wr(e,t,l,r)}if(a=(l&e.childLanes)!==0,Se||a){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pt(e,i),Ge(r,e,i,-1))}return Vs(),r=Xo(Error(j(421))),Wr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ip.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pe=Nt(i.nextSibling),Le=t,Y=!0,Qe=null,e!==null&&(Me[$e++]=st,Me[$e++]=at,Me[$e++]=Kt,st=e.id,at=e.overflow,Kt=t),t=$s(t,r.children),t.flags|=4096,t)}function ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tl(e.return,t,n)}function Go(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ge(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,n,t);else if(e.tag===19)ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Pi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Go(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Pi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Go(t,!0,n,null,o);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jp(e,t,n){switch(t.tag){case 3:xf(t),Sn();break;case 5:Kc(t);break;case 1:ke(t.type)&&ji(t);break;case 4:Ps(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Ei,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?wf(e,t,n):(U(K,K.current&1),e=mt(e,t,n),e!==null?e.sibling:null);U(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return mt(e,t,n)}var jf,Fl,kf,Cf;jf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};kf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vt(rt.current);var o=null;switch(n){case"input":i=ll(e,i),r=ll(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=ul(e,i),r=ul(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wi)}fl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kp(e,t,n){var r=t.pendingProps;switch(Ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&Si(),de(t),null;case 3:return r=t.stateNode,kn(),H(je),H(he),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Kl(Qe),Qe=null))),Fl(e,t),de(t),null;case 5:Ls(t);var i=Vt(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return de(t),null}if(e=Vt(rt.current),Ur(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tt]=t,r[fr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Yn.length;i++)W(Yn[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ma(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":ga(r,o),W("invalid",r)}fl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),i=["children",""+a]):tr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":zr(r),ha(r,o,!0);break;case"textarea":zr(r),ya(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[tt]=t,e[fr]=r,jf(e,t,!1,!1),t.stateNode=e;e:{switch(l=dl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yn.length;i++)W(Yn[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":ma(e,r),i=ll(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":ga(e,r),i=ul(e,r),W("invalid",e);break;default:i=r}fl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?ec(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&qu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&nr(e,u):typeof u=="number"&&nr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(tr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&ls(e,o,u,l))}switch(n){case"input":zr(e),ha(e,r,!1);break;case"textarea":zr(e),ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Vt(pr.current),Vt(rt.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return de(t),null;case 13:if(H(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&t.mode&1&&!(t.flags&128))Uc(),Sn(),t.flags|=98560,o=!1;else if(o=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[tt]=t}else Sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else Qe!==null&&(Kl(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Vs())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return kn(),Fl(e,t),e===null&&ur(t.stateNode.containerInfo),de(t),null;case 10:return Es(t.type._context),de(t),null;case 17:return ke(t.type)&&Si(),de(t),null;case 19:if(H(K),o=t.memoizedState,o===null)return de(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Dn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Pi(e),l!==null){for(t.flags|=128,Dn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>En&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Pi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Y)return de(t),null}else 2*J()-o.renderingStartTime>En&&n!==1073741824&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=K.current,U(K,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Cp(e,t){switch(Ss(t),t.tag){case 1:return ke(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(),H(je),H(he),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ls(t),null;case 13:if(H(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(K),null;case 4:return kn(),null;case 10:return Es(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var Hr=!1,me=!1,Ep=typeof WeakSet=="function"?WeakSet:Set,P=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Dl(e,t,n){try{n()}catch(r){G(e,t,r)}}var lu=!1;function Np(e,t){if(jl=yi,e=Pc(),xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++c===i&&(a=l),g===o&&++m===r&&(u=l),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kl={focusedElem:e,selectionRange:n},yi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,_=v.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),_);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){G(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=lu,lu=!1,v}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Dl(t,n,o)}i=i.next}while(i!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[fr],delete t[Nl],delete t[ap],delete t[up])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nf(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var se=null,Ke=!1;function gt(e,t,n){for(n=n.child;n!==null;)_f(e,t,n),n=n.sibling}function _f(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Fi,n)}catch{}switch(n.tag){case 5:me||cn(n,t);case 6:var r=se,i=Ke;se=null,gt(e,t,n),se=r,Ke=i,se!==null&&(Ke?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Ke?(e=se,n=n.stateNode,e.nodeType===8?Vo(e.parentNode,n):e.nodeType===1&&Vo(e,n),lr(e)):Vo(se,n.stateNode));break;case 4:r=se,i=Ke,se=n.stateNode.containerInfo,Ke=!0,gt(e,t,n),se=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Dl(n,t,l),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!me&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,gt(e,t,n),me=r):gt(e,t,n);break;default:gt(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ep),t.forEach(function(r){var i=Mp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Ke=!1;break e;case 3:se=a.stateNode.containerInfo,Ke=!0;break e;case 4:se=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(se===null)throw Error(j(160));_f(o,l,i),se=null,Ke=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}function Pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Je(e),r&4){try{qn(3,e,e.return),Ki(3,e)}catch(y){G(e,e.return,y)}try{qn(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:He(t,e),Je(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(He(t,e),Je(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var i=e.stateNode;try{nr(i,"")}catch(y){G(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Gu(i,o),dl(a,l);var c=dl(a,o);for(l=0;l<u.length;l+=2){var m=u[l],h=u[l+1];m==="style"?ec(i,h):m==="dangerouslySetInnerHTML"?qu(i,h):m==="children"?nr(i,h):ls(i,m,h,c)}switch(a){case"input":sl(i,o);break;case"textarea":Zu(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?dn(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?dn(i,!!o.multiple,o.defaultValue,!0):dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[fr]=o}catch(y){G(e,e.return,y)}}break;case 6:if(He(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){G(e,e.return,y)}}break;case 3:if(He(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:He(t,e),Je(e);break;case 13:He(t,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ds=J())),r&4&&au(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||m,He(t,e),me=c):He(t,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(h=P=m;P!==null;){switch(g=P,x=g.child,g.tag){case 0:case 11:case 14:case 15:qn(4,g,g.return);break;case 1:cn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){G(r,n,y)}}break;case 5:cn(g,g.return);break;case 22:if(g.memoizedState!==null){cu(h);continue}}x!==null?(x.return=g,P=x):cu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=bu("display",l))}catch(y){G(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){G(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:He(t,e),Je(e),r&4&&au(e);break;case 21:break;default:He(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nf(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nr(i,""),r.flags&=-33);var o=su(e);Vl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=su(e);Ul(e,a,l);break;default:throw Error(j(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _p(e,t,n){P=e,Lf(e)}function Lf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Hr;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||me;a=Hr;var c=me;if(Hr=l,(me=u)&&!c)for(P=i;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?fu(i):u!==null?(u.return=l,P=u):fu(i);for(;o!==null;)P=o,Lf(o),o=o.sibling;P=i,Hr=a,me=c}uu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):uu(e)}}function uu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Qa(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qa(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&lr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}me||t.flags&512&&Bl(t)}catch(g){G(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function cu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function fu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ki(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var o=t.return;try{Bl(t)}catch(u){G(t,o,u)}break;case 5:var l=t.return;try{Bl(t)}catch(u){G(t,l,u)}}}catch(u){G(t,t.return,u)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var Pp=Math.ceil,Oi=ht.ReactCurrentDispatcher,As=ht.ReactCurrentOwner,De=ht.ReactCurrentBatchConfig,M=0,oe=null,b=null,ue=0,_e=0,fn=It(0),te=0,yr=null,Xt=0,Qi=0,Fs=0,bn=null,we=null,Ds=0,En=1/0,ot=null,zi=!1,Wl=null,Pt=null,Yr=!1,jt=null,Ri=0,er=0,Hl=null,li=-1,si=0;function ye(){return M&6?J():li!==-1?li:li=J()}function Lt(e){return e.mode&1?M&2&&ue!==0?ue&-ue:fp.transition!==null?(si===0&&(si=dc()),si):(e=F,e!==0||(e=window.event,e=e===void 0?16:xc(e.type)),e):1}function Ge(e,t,n,r){if(50<er)throw er=0,Hl=null,Error(j(185));kr(e,n,r),(!(M&2)||e!==oe)&&(e===oe&&(!(M&2)&&(Qi|=n),te===4&&wt(e,ue)),Ce(e,r),n===1&&M===0&&!(t.mode&1)&&(En=J()+500,Wi&&Mt()))}function Ce(e,t){var n=e.callbackNode;f0(e,t);var r=gi(e,e===oe?ue:0);if(r===0)n!==null&&wa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wa(n),t===1)e.tag===0?cp(du.bind(null,e)):Fc(du.bind(null,e)),lp(function(){!(M&6)&&Mt()}),n=null;else{switch(pc(r)){case 1:n=fs;break;case 4:n=cc;break;case 16:n=hi;break;case 536870912:n=fc;break;default:n=hi}n=Af(n,Tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tf(e,t){if(li=-1,si=0,M&6)throw Error(j(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=gi(e,e===oe?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ii(e,r);else{t=r;var i=M;M|=2;var o=zf();(oe!==e||ue!==t)&&(ot=null,En=J()+500,Wt(e,t));do try{Op();break}catch(a){Of(e,a)}while(!0);Cs(),Oi.current=o,M=i,b!==null?t=0:(oe=null,ue=0,t=te)}if(t!==0){if(t===2&&(i=yl(e),i!==0&&(r=i,t=Yl(e,i))),t===1)throw n=yr,Wt(e,0),wt(e,r),Ce(e,J()),n;if(t===6)wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Lp(i)&&(t=Ii(e,r),t===2&&(o=yl(e),o!==0&&(r=o,t=Yl(e,o))),t===1))throw n=yr,Wt(e,0),wt(e,r),Ce(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Dt(e,we,ot);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Ds+500-J(),10<t)){if(gi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=El(Dt.bind(null,e,we,ot),t);break}Dt(e,we,ot);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Xe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pp(r/1960))-r,10<r){e.timeoutHandle=El(Dt.bind(null,e,we,ot),r);break}Dt(e,we,ot);break;case 5:Dt(e,we,ot);break;default:throw Error(j(329))}}}return Ce(e,J()),e.callbackNode===n?Tf.bind(null,e):null}function Yl(e,t){var n=bn;return e.current.memoizedState.isDehydrated&&(Wt(e,t).flags|=256),e=Ii(e,t),e!==2&&(t=we,we=n,t!==null&&Kl(t)),e}function Kl(e){we===null?we=e:we.push.apply(we,e)}function Lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Fs,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if(M&6)throw Error(j(327));yn();var t=gi(e,0);if(!(t&1))return Ce(e,J()),null;var n=Ii(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Yl(e,r))}if(n===1)throw n=yr,Wt(e,0),wt(e,t),Ce(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,we,ot),Ce(e,J()),null}function Bs(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(En=J()+500,Wi&&Mt())}}function Gt(e){jt!==null&&jt.tag===0&&!(M&6)&&yn();var t=M;M|=1;var n=De.transition,r=F;try{if(De.transition=null,F=1,e)return e()}finally{F=r,De.transition=n,M=t,!(M&6)&&Mt()}}function Us(){_e=fn.current,H(fn)}function Wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,op(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(Ss(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Si();break;case 3:kn(),H(je),H(he),Ts();break;case 5:Ls(r);break;case 4:kn();break;case 13:H(K);break;case 19:H(K);break;case 10:Es(r.type._context);break;case 22:case 23:Us()}n=n.return}if(oe=e,b=e=Tt(e.current,null),ue=_e=t,te=0,yr=null,Fs=Qi=Xt=0,we=bn=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Ut=null}return e}function Of(e,t){do{var n=b;try{if(Cs(),ri.current=Ti,Li){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Li=!1}if(Qt=0,ie=ee=Q=null,Jn=!1,mr=0,As.current=null,n===null||n.return===null){te=1,yr=t,b=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=ba(l);if(x!==null){x.flags&=-257,eu(x,l,a,o,t),x.mode&1&&qa(o,c,t),t=x,u=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){qa(o,c,t),Vs();break e}u=Error(j(426))}}else if(Y&&a.mode&1){var _=ba(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),eu(_,l,a,o,t),js(Cn(u,a));break e}}o=u=Cn(u,a),te!==4&&(te=2),bn===null?bn=[o]:bn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=mf(o,u,t);Ka(o,d);break e;case 1:a=u;var f=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===null||!Pt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=hf(o,a,t);Ka(o,w);break e}}o=o.return}while(o!==null)}If(n)}catch(E){t=E,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function zf(){var e=Oi.current;return Oi.current=Ti,e===null?Ti:e}function Vs(){(te===0||te===3||te===2)&&(te=4),oe===null||!(Xt&268435455)&&!(Qi&268435455)||wt(oe,ue)}function Ii(e,t){var n=M;M|=2;var r=zf();(oe!==e||ue!==t)&&(ot=null,Wt(e,t));do try{Tp();break}catch(i){Of(e,i)}while(!0);if(Cs(),M=n,Oi.current=r,b!==null)throw Error(j(261));return oe=null,ue=0,te}function Tp(){for(;b!==null;)Rf(b)}function Op(){for(;b!==null&&!n0();)Rf(b)}function Rf(e){var t=$f(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?If(e):b=t,As.current=null}function If(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cp(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,b=null;return}}else if(n=kp(n,t,_e),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);te===0&&(te=5)}function Dt(e,t,n){var r=F,i=De.transition;try{De.transition=null,F=1,zp(e,t,n,r)}finally{De.transition=i,F=r}return null}function zp(e,t,n,r){do yn();while(jt!==null);if(M&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(d0(e,o),e===oe&&(b=oe=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yr||(Yr=!0,Af(hi,function(){return yn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=De.transition,De.transition=null;var l=F;F=1;var a=M;M|=4,As.current=null,Np(e,n),Pf(n,e),q0(kl),yi=!!jl,kl=jl=null,e.current=n,_p(n),r0(),M=a,F=l,De.transition=o}else e.current=n;if(Yr&&(Yr=!1,jt=e,Ri=i),o=e.pendingLanes,o===0&&(Pt=null),l0(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zi)throw zi=!1,e=Wl,Wl=null,e;return Ri&1&&e.tag!==0&&yn(),o=e.pendingLanes,o&1?e===Hl?er++:(er=0,Hl=e):er=0,Mt(),null}function yn(){if(jt!==null){var e=pc(Ri),t=De.transition,n=F;try{if(De.transition=null,F=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Ri=0,M&6)throw Error(j(331));var i=M;for(M|=4,P=e.current;P!==null;){var o=P,l=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(P=c;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:qn(8,m,o)}var h=m.child;if(h!==null)h.return=m,P=h;else for(;P!==null;){m=P;var g=m.sibling,x=m.return;if(Ef(m),m===c){P=null;break}if(g!==null){g.return=x,P=g;break}P=x}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}P=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,P=l;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,P=d;break e}P=o.return}}var f=e.current;for(P=f;P!==null;){l=P;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,P=p;else e:for(l=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ki(9,a)}}catch(E){G(a,a.return,E)}if(a===l){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(M=i,Mt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Fi,e)}catch{}r=!0}return r}finally{F=n,De.transition=t}}return!1}function pu(e,t,n){t=Cn(n,t),t=mf(e,t,1),e=_t(e,t,1),t=ye(),e!==null&&(kr(e,1,t),Ce(e,t))}function G(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Cn(n,e),e=hf(t,e,1),t=_t(t,e,1),e=ye(),t!==null&&(kr(t,1,e),Ce(t,e));break}}t=t.return}}function Rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-Ds?Wt(e,0):Fs|=n),Ce(e,t)}function Mf(e,t){t===0&&(e.mode&1?(t=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):t=1);var n=ye();e=pt(e,t),e!==null&&(kr(e,t,n),Ce(e,n))}function Ip(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mf(e,n)}function Mp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Mf(e,n)}var $f;$f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,jp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Y&&t.flags&1048576&&Dc(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oi(e,t),e=t.pendingProps;var i=wn(t,he.current);gn(t,n),i=zs(null,t,r,e,i,n);var o=Rs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,ji(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_s(t),i.updater=Yi,t.stateNode=i,i._reactInternals=t,zl(t,r,e,n),t=Ml(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&ws(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ap(r),e=Ye(r,e),i){case 0:t=Il(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,Ye(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Il(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ru(e,t,r,i,n);case 3:e:{if(xf(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yc(e,t),_i(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cn(Error(j(423)),t),t=iu(e,t,r,n,i);break e}else if(r!==i){i=Cn(Error(j(424)),t),t=iu(e,t,r,n,i);break e}else for(Pe=Nt(t.stateNode.containerInfo.firstChild),Le=t,Y=!0,Qe=null,n=Wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sn(),r===i){t=mt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Kc(t),e===null&&Ll(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Cl(r,i)?l=null:o!==null&&Cl(r,o)&&(t.flags|=32),vf(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return wf(e,t,n);case 4:return Ps(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),tu(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,U(Ei,r._currentValue),r._currentValue=l,o!==null)if(Ze(o.value,l)){if(o.children===i.children&&!je.current){t=mt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ct(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Tl(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Tl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gn(t,n),i=Be(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),nu(e,t,r,i,n);case 15:return gf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),oi(e,t),t.tag=1,ke(r)?(e=!0,ji(t)):e=!1,gn(t,n),pf(t,r,i),zl(t,r,i,n),Ml(null,t,r,!0,e,n);case 19:return Sf(e,t,n);case 22:return yf(e,t,n)}throw Error(j(156,t.tag))};function Af(e,t){return uc(e,t)}function $p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new $p(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ap(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===as)return 11;if(e===us)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ai(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case en:return Ht(n.children,i,o,t);case ss:l=8,i|=8;break;case nl:return e=Fe(12,n,t,i|2),e.elementType=nl,e.lanes=o,e;case rl:return e=Fe(13,n,t,i),e.elementType=rl,e.lanes=o,e;case il:return e=Fe(19,n,t,i),e.elementType=il,e.lanes=o,e;case Ku:return Xi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hu:l=10;break e;case Yu:l=9;break e;case as:l=11;break e;case us:l=14;break e;case yt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ht(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Xi(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Zo(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Jo(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oo(0),this.expirationTimes=Oo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hs(e,t,n,r,i,o,l,a,u){return e=new Fp(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_s(o),e}function Dp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ff(e){if(!e)return zt;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ke(n))return Ac(e,n,t)}return t}function Df(e,t,n,r,i,o,l,a,u){return e=Hs(n,r,!0,e,i,o,l,a,u),e.context=Ff(null),n=e.current,r=ye(),i=Lt(n),o=ct(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,kr(e,i,r),Ce(e,r),e}function Gi(e,t,n,r){var i=t.current,o=ye(),l=Lt(i);return n=Ff(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,l),e!==null&&(Ge(e,i,l,o),ni(e,i,l)),l}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function Bp(){return null}var Bf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ks(e){this._internalRoot=e}Zi.prototype.render=Ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Gi(e,t,null,null)};Zi.prototype.unmount=Ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){Gi(null,e,null,null)}),t[dt]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&vc(e)}};function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function Up(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Mi(l);o.call(c)}}var l=Df(t,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=l,e[dt]=l.current,ur(e.nodeType===8?e.parentNode:e),Gt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Mi(u);a.call(c)}}var u=Hs(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=u,e[dt]=u.current,ur(e.nodeType===8?e.parentNode:e),Gt(function(){Gi(t,u,n,r)}),u}function qi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=Mi(l);a.call(u)}}Gi(t,l,e,i)}else l=Up(n,t,e,i,r);return Mi(l)}mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(ds(t,n|1),Ce(t,J()),!(M&6)&&(En=J()+500,Mt()))}break;case 13:Gt(function(){var r=pt(e,1);if(r!==null){var i=ye();Ge(r,e,1,i)}}),Ys(e,1)}};ps=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var n=ye();Ge(t,e,134217728,n)}Ys(e,134217728)}};hc=function(e){if(e.tag===13){var t=Lt(e),n=pt(e,t);if(n!==null){var r=ye();Ge(n,e,t,r)}Ys(e,t)}};gc=function(){return F};yc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ml=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vi(r);if(!i)throw Error(j(90));Xu(r),sl(r,i)}}}break;case"textarea":Zu(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};rc=Bs;ic=Gt;var Vp={usingClientEntryPoint:!1,Events:[Er,on,Vi,tc,nc,Bs]},Bn={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wp={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sc(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{Fi=Kr.inject(Wp),nt=Kr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(j(200));return Dp(e,t,null,n)};ze.createRoot=function(e,t){if(!Qs(e))throw Error(j(299));var n=!1,r="",i=Bf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hs(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,ur(e.nodeType===8?e.parentNode:e),new Ks(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=sc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Gt(e)};ze.hydrate=function(e,t,n){if(!Ji(t))throw Error(j(200));return qi(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Qs(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Bf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Df(t,null,e,1,n??null,i,!1,o,l),e[dt]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zi(t)};ze.render=function(e,t,n){if(!Ji(t))throw Error(j(200));return qi(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ji(e))throw Error(j(40));return e._reactRootContainer?(Gt(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};ze.unstable_batchedUpdates=Bs;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ji(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return qi(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uf)}catch(e){console.error(e)}}Uf(),Bu.exports=ze;var Hp=Bu.exports,gu=Hp;el.createRoot=gu.createRoot,el.hydrateRoot=gu.hydrateRoot;const ut="https://api.jikan.moe/v4",Yp=async e=>{const t=`${ut}/anime?q=${e}&limit=25`;if(!t)throw new Error("Failed to fetch data");const n=await fetch(t);if(!n.ok)throw new Error("Failed to fetch data");return(await n.json()).data};function Qr({className:e,url:t,textLink:n}){return s.jsxs("div",{className:e,children:[s.jsx("hr",{style:{opacity:"0.2"}}),s.jsx("p",{children:s.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n})}),s.jsx("hr",{style:{opacity:"0.2"}})]})}function Kp({toggleOverlay:e}){return s.jsx("div",{className:"about",children:s.jsxs("div",{className:"about-container",children:[s.jsx("button",{onClick:e,children:"×"}),s.jsx("img",{className:"logo",src:"WeeBoo.png",alt:""}),s.jsxs("div",{className:"anime-app-version",children:[s.jsx("h1",{children:"WeeBoo"}),s.jsxs("h5",{children:["v0.1.8"," (","Public Beta",")"]}),s.jsx("h4",{children:"WeeBoo from Anime-App"}),s.jsx("p",{children:"WeeBoo | My Anime List is a Front-End SPA (Single Page Application) Web project built using React to display a list of anime. This project uses Vite for bundling and Visual Studio Code as the code editor. Mostly anime data is fetched from the Jikan - Unofficial MyAnimeList API."}),s.jsx("p",{children:"WeeBoo is designed and developed by Nantungga Putra, also later dedicated development team under Open Source Contribution."}),s.jsxs("p",{children:["For Developers,"," ",s.jsx("b",{children:s.jsx("a",{href:"https://github.com/nantunggaputra/React_Library/issues/5",target:"_blank",rel:"noopener noreferrer",children:"get involved"})}),"!"]})]}),s.jsx(Qr,{className:"title",url:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/README.md",textLink:"Anime-App"}),s.jsx(Qr,{className:"license",url:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/LICENSE",textLink:"Licensing Information"}),s.jsx(Qr,{className:"rights",url:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/RIGHTS.md",textLink:"End-User Rights"}),s.jsx(Qr,{className:"privacy-policy",url:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/PRIVACY_POLICY.md",textLink:"Privacy Policy"}),s.jsx("div",{className:"trademarks",children:s.jsx("small",{children:s.jsx("b",{children:"WeeBoo and the WeeBoo logos are trademarks of the Anime-App on Nantungga Putra's GitHub Project"})})})]})})}function Ae({itemKey:e,state:t,titleOn:n,titleOff:r,url:i,target:o,toggleState:l,toggleStateLink:a,styleOn:u,styleOff:c,className:m,titleLink:h,iconLink:g,iconOn:x,iconOff:v}){return s.jsx("div",{className:"container",children:s.jsx("button",{title:t?n:r,onClick:l,style:t?u:c,className:m,children:i?s.jsx("a",{href:i,target:o,onClick:a,title:h,children:g}):t?x:v})},e)}function Qp(){const[e,t]=S.useState("offline"),n=()=>{t(navigator.onLine?"online":"offline")},r=()=>{navigator.onLine?t("online"):(t("offline"),window.location.reload())};S.useEffect(()=>{const p=()=>n();window.addEventListener("online",p),window.addEventListener("offline",p);const w=setInterval(n,1e3);return()=>{window.removeEventListener("online",p),window.removeEventListener("offline",p),clearInterval(w)}},[]);const[i,o]=S.useState(!1),l=()=>{o(!i)},[a,u]=S.useState(!0),c=()=>{u(!a)};S.useEffect(()=>{document.body.classList.toggle("body-transition",a),document.querySelector(".silhouette-off").classList.toggle("silhouette-on",a)},[a]);const[m,h]=S.useState(!0),g=()=>{h(!m)};S.useEffect(()=>{document.querySelector(".background-container").classList.toggle("clouds",m)},[m]);const[x,v]=S.useState(!0),y=S.useRef(null),_=()=>{y.current&&(x?y.current.play():y.current.pause()),v(!x)},d=new Date().getHours(),f=d<12?"Departure to the Front Lines (Yasuharu Takanashi).mp3":d<18?"The Last Magic II (Yasuharu Takanashi).mp3":"The Last Magic I (Yasuharu Takanashi).mp3";return s.jsxs(s.Fragment,{children:[i&&s.jsx(Kp,{toggleOverlay:l}),s.jsx("img",{src:"Silhouette Kaito Kid.webp",alt:"",className:"silhouette-off"}),s.jsx("div",{className:"background-container"}),s.jsx("div",{className:"background-audio",children:s.jsx("audio",{ref:y,src:f,loop:!0})}),s.jsx("div",{className:"connection",children:s.jsx(Ae,{titleOn:"You are online",titleOff:"No connection",state:e==="online",toggleState:r,iconOn:"•",iconOff:"•",styleOn:{color:"#13e713",fontSize:"2.5rem",cursor:"progress"},styleOff:{color:"#ff0000",fontSize:"2.5rem",cursor:"wait"}})}),s.jsx("div",{className:"informations",children:s.jsx(Ae,{titleOn:"About",titleOff:"About",state:i,toggleState:l,iconOn:s.jsx("span",{style:{fontSize:"1.2rem"},children:"𝐢"}),iconOff:s.jsx("span",{style:{fontSize:"1.2rem"},children:"𝐢"})})}),s.jsx("div",{className:"transitions",children:s.jsx(Ae,{titleOn:"Background transitions on (30s to 90s)",titleOff:"Background transitions off",state:a,toggleState:c,iconOn:"☯︎",iconOff:"⊙"})}),s.jsx("div",{className:"animations",children:s.jsx(Ae,{titleOn:"Background animations on (Clouds)",titleOff:"Background animations off",state:m,toggleState:g,iconOn:"❖",iconOff:"⊹"})}),s.jsx("div",{className:"music",children:s.jsx(Ae,{titleOn:"Backsound on (Yasuharu Takanashi)",titleOff:"Backsound off",state:!x,toggleState:_,iconOn:"♬",iconOff:"♪"})})]})}function Xp(){const[e,t]=S.useState("");return S.useEffect(()=>{(async()=>{try{const r=await fetch("https://ipapi.co/country/");if(r.ok){const i=await r.text();t(i)}else console.error("Error fetching data")}catch(r){console.error("Error fetching data:",r)}})()},[]),s.jsx("header",{children:s.jsx("div",{className:"head",children:s.jsxs("div",{className:"head-menu",children:[s.jsx("div",{className:"left-menu",children:s.jsx("img",{src:"WeeBoo.png",alt:"WeeBoo"})}),s.jsxs("div",{className:"center-menu",children:[s.jsx("a",{children:"Blog"}),s.jsx("a",{children:"Event"}),s.jsx("a",{children:"Forum"}),s.jsx("a",{children:"Website"}),s.jsx("a",{children:"Landing Page"}),s.jsx("a",{children:"Updates"}),s.jsx("a",{children:"Help"}),s.jsx("a",{children:e||"IP"})]}),s.jsxs("div",{className:"right-menu",children:[s.jsx("button",{children:s.jsx("a",{children:"Login"})}),s.jsx("button",{children:s.jsx("a",{children:"Sign Up"})})]})]})})})}function yu(){return s.jsx("span",{role:"img",children:s.jsx("img",{src:"WeeBoo.png",alt:""})})}function Gp(){return s.jsxs("header",{id:"home",className:"logo",children:[s.jsx(yu,{}),s.jsxs("h1",{children:["W",s.jsx("span",{children:"ee"}),"B",s.jsx("span",{children:"oo"})]}),s.jsx(yu,{})]})}function Zp(){const[e,t]=S.useState(!0),n=()=>{t(!1)},r=()=>{t(!0)},i=["Home","Favorite","Category","Genre"];return s.jsx("div",{className:"hamburger-menu",children:e?s.jsx(Ae,{titleOn:"Menu",titleOff:"",state:!0,toggleState:n,styleOn:{fontWeight:"bolder",fontSize:"2.85rem"},styleOff:{},className:"button-parrent",iconOn:"=",iconOff:""}):s.jsxs(s.Fragment,{children:[s.jsx(Ae,{titleOn:"",titleOff:"Close",state:!1,toggleState:r,styleOn:{},styleOff:{fontWeight:"lighter",fontSize:"1.85rem"},className:"button-parrent",iconOn:"",iconOff:"✖"}),i.map(o=>s.jsx(Ae,{itemKey:o,state:!1,toggleState:null,className:"button-child",url:"#"+o.toLowerCase(),toggleStateLink:r,titleLink:o,iconLink:o==="Home"&&"♤"||o==="Favorite"&&"♡"||o==="Category"&&"♢"||o==="Genre"&&"♧"},o))]})})}function Jp({href:e,onClick:t,label:n}){return s.jsxs(s.Fragment,{children:[s.jsx("li",{children:s.jsx("a",{href:e,onClick:t,children:n})}),n==="Genre"?"":"|"]})}function qp(){const e=[{href:"#home",label:"Home"},{href:"#favorite",label:"Favorite"},{href:"#category",label:"Category"},{href:"#genre",label:"Genre"}],[t,n]=S.useState(!1),r=()=>{n(!t)};return s.jsx("div",{className:"container",children:s.jsx("div",{className:"toggle-div",children:t?s.jsx("menu",{className:"links",children:e.map((i,o)=>s.jsx(Jp,{href:i.href,onClick:r,label:i.label},o))}):s.jsx("div",{className:"arrow",onClick:r,title:"Menu",children:"▼"})})})}function bp(){return s.jsx("figure",{className:"search-kanji",children:s.jsxs("figcaption",{children:[s.jsx("h6",{children:"コ"}),s.jsx("h6",{children:"ナ"}),s.jsx("h6",{children:"ン"})]})})}function em({fetchAnime:e,setResultCount:t,setLoading:n,loading:r}){const[i,o]=S.useState("Search anime..."),[l,a]=S.useState(""),[u,c]=S.useState(!1),m=S.useRef(null),h=async()=>{if(l.trim()&&l.trim()!==""){n(!0),c(!0),m.current&&m.current.play();const g=await e(l);t(g.length),setTimeout(()=>{n(!1),a(""),o(g.length>0?l.trim():"Search anime..."),c(!1)},2e3)}};return s.jsxs("div",{id:"search-container",className:"search-container",children:[s.jsx("div",{className:"search-label",children:s.jsx("div",{className:"container",children:s.jsx("label",{htmlFor:"search-anime",children:s.jsx("span",{title:"Search",children:"⌕"})})})}),s.jsx("input",{className:"search",id:"search-anime",type:"text",placeholder:i,value:l,onChange:g=>a(g.target.value),onKeyPress:g=>{g.key==="Enter"&&(r||h())}}),s.jsx("button",{className:"search-btn",onClick:h,disabled:u,children:r?"Please wait...":"Search"}),s.jsx("div",{className:"search-icon",children:s.jsx("img",{src:"Conan Edogawa Search.webp",alt:""})}),s.jsx("audio",{ref:m,src:"There is Always Only One Truth.aac"}),r&&s.jsx(bp,{})]})}const vu=e=>e!==0;function tm({count:e}){return s.jsx(s.Fragment,{children:s.jsxs("p",{className:"search-results",style:{cursor:"default"},children:[s.jsx("span",{children:vu(e)?"⋋≧.≦⋌":"[=.=]"})," ",s.jsx("strong",{children:vu(e)?`Subarashi Minna-san! Wee found breathtaking of ${e} anime...`:"Gomennasai Minna-san! Please search another anime..."})]})})}function nm({fetchAnime:e}){const[t,n]=S.useState(void 0),[r,i]=S.useState(!1);return s.jsxs("div",{className:"search-container",children:[s.jsx(em,{fetchAnime:e,setResultCount:n,setLoading:i,loading:r}),t>=0&&s.jsx(tm,{count:t})]})}function rm({fetchAnime:e}){return s.jsxs("nav",{className:"nav-bar",children:[s.jsx(Gp,{}),s.jsx(Zp,{}),s.jsx(qp,{}),s.jsx(nm,{fetchAnime:e})]})}function im({children:e}){return s.jsx("span",{style:{paddingLeft:"33px"},children:e})}function om({selectedAnime:e}){var d;if(!e)return null;const{title:t,images:n,aired:r,score:i,rating:o,synopsis:l}=e,a=(d=n==null?void 0:n.jpg)==null?void 0:d.large_image_url,u=f=>{var p,w,E;return((E=(w=(p=f.aired)==null?void 0:p.prop)==null?void 0:w.from)==null?void 0:E.year)||""},c=f=>f.score?`MAL ★ ${f.score.toFixed(1)}/10`:"",m=f=>f.rating?`Rating for ${f.rating}`:"",h=f=>f.status?`Status: ${f.status}`:"",g=(f,p,w)=>f==="Rx - Hentai"?{}:{href:p,title:w,target:"_blank",rel:"noopener noreferrer nofollow"},x=g(o,`https://myanimelist.net/search/all?q=${t}&cat=all`,"Search anime in My Anime List"),v=g(o,`https://www.bilibili.tv/id/search-result?q=${t}`,"Search anime in BiliBili | Bstation"),y=f=>f==="Rx - Hentai"?{filter:"grayscale(1) brightness(0.3) contrast(0.3)",opacity:"0.7"}:{},_=f=>f==="Rx - Hentai"?{filter:"grayscale(1)",cursor:"not-allowed"}:{};return s.jsxs("div",{className:"details",children:[s.jsxs("header",{children:[a&&r&&s.jsx("a",{...x,children:s.jsx("img",{src:a,alt:t,style:y(o)})}),s.jsxs("div",{className:"details-overview",children:[s.jsx("h2",{children:s.jsx("a",{...v,style:_(o),children:t})}),s.jsxs("small",{children:[u(e),u(e)&&i?" | ":"",c(e),s.jsx("br",{}),m(e)]}),s.jsx("p",{children:s.jsx("b",{children:h(e)})})]})]}),s.jsxs("section",{children:[s.jsxs("p",{children:[s.jsx("em",{children:l}),s.jsx("br",{}),s.jsx("br",{style:{marginTop:"1.6rem"}}),s.jsxs("em",{children:[s.jsx(im,{children:" "}),s.jsx("strong",{children:"Warning: "}),s.jsx("span",{style:{color:"#ef4444"},children:"Wee strongly advise against watching the listed anime titles through illegal means."})," ","Engaging in piracy harms the creators and the industry as a whole. Please support the hardworking creators by purchasing the original"," DVDs "+t+" ","or subscribing to official streaming services. Minna, your support ensures the continued production of quality content. Sankyuu~"]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("img",{src:"WeeBoo.png",style:{width:"100%",margin:"-7rem",transform:"translateX(3rem) scale(2.5)",opacity:"0.05",filter:"grayscale(1) brightness(0.75) contrast(2.75)"}})]}),s.jsx("p",{style:{textAlign:"right",color:"var(--color-white)",fontWeight:"600"},children:s.jsx("em",{children:"WeeBoo"})})]})]})}function lm({children:e}){return s.jsx("span",{style:{paddingLeft:"33px"},children:e})}function sm({selectedAnimeLegacy:e}){var m,h,g;const{title:t,images:n,aired:r,score:i,rating:o,status:l,synopsis:a}=e,u=(m=n==null?void 0:n.jpg)==null?void 0:m.large_image_url,c=(g=(h=r==null?void 0:r.prop)==null?void 0:h.from)==null?void 0:g.year;return s.jsxs("div",{className:"details",children:[s.jsxs("header",{children:[s.jsx("a",{href:`https://myanimelist.net/search/all?q=${t}&cat=all`,title:"Search anime in My Anime List",target:"_blank",rel:"noopener noreferrer nofollow",children:s.jsx("img",{src:u,alt:t})}),s.jsxs("div",{className:"details-overview",children:[s.jsx("h2",{children:s.jsx("a",{href:`https://www.bilibili.tv/id/search-result?q=${t}`,title:"Search anime in BiliBili | Bstation",target:"_blank",rel:"noopener noreferrer nofollow",children:t})}),s.jsxs("small",{children:[c||"",c&&i?" | ":"",i?`MAL ★ ${i.toFixed(1)}/10`:"",s.jsx("br",{}),o?`Rating for ${o}`:""]}),s.jsx("p",{children:s.jsx("b",{children:l?`Channel: ${l}`:""})})]})]}),s.jsxs("section",{children:[s.jsxs("p",{children:[s.jsx("em",{children:a}),s.jsx("br",{}),s.jsx("br",{style:{marginTop:"1.6rem"}}),s.jsxs("em",{children:[s.jsx(lm,{children:" "}),s.jsx("strong",{children:"Warning: "}),s.jsx("span",{style:{color:"#ef4444"},children:"Wee strongly advise against watching the listed anime titles through illegal means."})," ","Engaging in piracy harms the creators and the industry as a whole. Please support the hardworking creators by purchasing the original"," DVDs "+t+" ","or subscribing to official streaming services. Minna, your support ensures the continued production of quality content. Sankyuu~"]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("img",{src:"WeeBoo.png",style:{width:"100%",margin:"-7rem",transform:"translateX(3rem) scale(2.5)",opacity:"0.05",filter:"grayscale(1) brightness(0.75) contrast(2.75)"}})]}),s.jsx("p",{style:{textAlign:"right",color:"var(--color-white)",fontWeight:"600"},children:s.jsx("em",{children:"WeeBoo"})})]})]})}function Vf({selectedAnime:e,legacy:t}){const n=o=>()=>o(l=>!l),[r,i]=S.useState(!0);return s.jsxs("div",{className:"box",children:[s.jsx("button",{className:"btn-toggle",onClick:n(i),children:r?"+":"±"}),r&&(t?s.jsx(sm,{selectedAnimeLegacy:e}):s.jsx(om,{selectedAnime:e}))]})}function am({anime:e,onSelectedAnime:t,isSelected:n}){const r=a=>{var u,c;return((c=(u=a.images)==null?void 0:u.jpg)==null?void 0:c.large_image_url)||a.image},i=a=>{var u,c,m;return((m=(c=(u=a.aired)==null?void 0:u.prop)==null?void 0:c.from)==null?void 0:m.year)||a.year||"Year"},o=a=>a==="Rx - Hentai"?{filter:"grayscale(1) brightness(0.3) contrast(0.3)",opacity:"0.7"}:{},l=a=>a==="Rx - Hentai"?{filter:"grayscale(1)",cursor:"not-allowed"}:{};return s.jsxs("li",{tabIndex:e.mal_id,onClick:()=>t(e),className:n?"selected":"",style:l(e.rating),children:[s.jsx("img",{src:r(e),alt:e.title,style:o(e.rating)}),s.jsx("h3",{children:e.title}),s.jsx("div",{children:s.jsx("p",{children:s.jsx("span",{children:i(e)})})})]})}function um({animes:e,onSelectedAnime:t}){const[n,r]=S.useState(null),i=o=>{r(o.mal_id),t(o)};return s.jsx("ul",{className:"list list-anime",children:e==null?void 0:e.map(o=>s.jsx(am,{anime:o,onSelectedAnime:i,isSelected:o.mal_id===n},o.mal_id))})}function cm({animeLegacy:e,onSelectedAnimeLegacy:t,isSelectedLegacy:n}){var h,g,x;const{mal_id:r,title:i,images:o,aired:l,image:a,year:u}=e,c=(h=o==null?void 0:o.jpg)==null?void 0:h.large_image_url,m=(x=(g=l==null?void 0:l.prop)==null?void 0:g.from)==null?void 0:x.year;return s.jsx("li",{tabIndex:r,onClick:()=>t(e),className:n?"selected":"",children:c?s.jsxs(s.Fragment,{children:[s.jsx("img",{src:c,alt:i}),s.jsx("h3",{children:i}),s.jsx("div",{children:s.jsx("p",{children:s.jsx("span",{children:m||"Year"})})})]}):s.jsxs(s.Fragment,{children:[s.jsx("img",{src:a,alt:i}),s.jsx("h3",{children:i}),s.jsx("div",{children:s.jsx("p",{children:s.jsx("span",{children:u})})})]})})}function fm({animesLegacy:e,onSelectedAnimeLegacy:t}){const[n,r]=S.useState(null),i=o=>{r(o.mal_id),t(o)};return s.jsx("ul",{className:"list list-anime",children:e==null?void 0:e.map(o=>s.jsx(cm,{animeLegacy:o,onSelectedAnimeLegacy:i,isSelectedLegacy:o.mal_id===n},o.mal_id))})}function Wf({animes:e,onSelectedAnime:t,legacy:n}){const r=l=>()=>l(a=>!a),[i,o]=S.useState(!0);return s.jsxs("div",{className:"box",style:e.length>1?{}:{overflow:"hidden"},children:[s.jsx("button",{className:"btn-toggle",onClick:r(o),children:i?"+":"±"}),i&&(n?s.jsx(fm,{animesLegacy:e,onSelectedAnimeLegacy:t}):s.jsx(um,{animes:e,onSelectedAnime:t}))]})}var dm=!1;function pm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function mm(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var hm=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!dm:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mm(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=pm(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",$i="-moz-",$="-webkit-",Hf="comm",Xs="rule",Gs="decl",gm="@import",Yf="@keyframes",ym="@layer",vm=Math.abs,bi=String.fromCharCode,xm=Object.assign;function wm(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Kf(e){return e.trim()}function Sm(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Ql(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function vr(e,t,n){return e.slice(t,n)}function be(e){return e.length}function Zs(e){return e.length}function Xr(e,t){return t.push(e),e}function jm(e,t){return e.map(t).join("")}var eo=1,Nn=1,Qf=0,Ee=0,q=0,Tn="";function to(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:eo,column:Nn,length:l,return:""}}function Un(e,t){return xm(to("",null,null,"",null,null,0),e,{length:-e.length},t)}function km(){return q}function Cm(){return q=Ee>0?ae(Tn,--Ee):0,Nn--,q===10&&(Nn=1,eo--),q}function Te(){return q=Ee<Qf?ae(Tn,Ee++):0,Nn++,q===10&&(Nn=1,eo++),q}function it(){return ae(Tn,Ee)}function ui(){return Ee}function _r(e,t){return vr(Tn,e,t)}function xr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xf(e){return eo=Nn=1,Qf=be(Tn=e),Ee=0,[]}function Gf(e){return Tn="",e}function ci(e){return Kf(_r(Ee-1,Xl(e===91?e+2:e===40?e+1:e)))}function Em(e){for(;(q=it())&&q<33;)Te();return xr(e)>2||xr(q)>3?"":" "}function Nm(e,t){for(;--t&&Te()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return _r(e,ui()+(t<6&&it()==32&&Te()==32))}function Xl(e){for(;Te();)switch(q){case e:return Ee;case 34:case 39:e!==34&&e!==39&&Xl(q);break;case 40:e===41&&Xl(e);break;case 92:Te();break}return Ee}function _m(e,t){for(;Te()&&e+q!==57;)if(e+q===84&&it()===47)break;return"/*"+_r(t,Ee-1)+"*"+bi(e===47?e:Te())}function Pm(e){for(;!xr(it());)Te();return _r(e,Ee)}function Lm(e){return Gf(fi("",null,null,null,[""],e=Xf(e),0,[0],e))}function fi(e,t,n,r,i,o,l,a,u){for(var c=0,m=0,h=l,g=0,x=0,v=0,y=1,_=1,d=1,f=0,p="",w=i,E=o,N=r,k=p;_;)switch(v=f,f=Te()){case 40:if(v!=108&&ae(k,h-1)==58){Ql(k+=A(ci(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=ci(f);break;case 9:case 10:case 13:case 32:k+=Em(v);break;case 92:k+=Nm(ui()-1,7);continue;case 47:switch(it()){case 42:case 47:Xr(Tm(_m(Te(),ui()),t,n),u);break;default:k+="/"}break;case 123*y:a[c++]=be(k)*d;case 125*y:case 59:case 0:switch(f){case 0:case 125:_=0;case 59+m:d==-1&&(k=A(k,/\f/g,"")),x>0&&be(k)-h&&Xr(x>32?wu(k+";",r,n,h-1):wu(A(k," ","")+";",r,n,h-2),u);break;case 59:k+=";";default:if(Xr(N=xu(k,t,n,c,m,i,a,p,w=[],E=[],h),o),f===123)if(m===0)fi(k,t,N,N,w,o,h,a,E);else switch(g===99&&ae(k,3)===110?100:g){case 100:case 108:case 109:case 115:fi(e,N,N,r&&Xr(xu(e,N,N,0,0,i,a,p,i,w=[],h),E),i,E,h,a,r?w:E);break;default:fi(k,N,N,N,[""],E,0,a,E)}}c=m=x=0,y=d=1,p=k="",h=l;break;case 58:h=1+be(k),x=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Cm()==125)continue}switch(k+=bi(f),f*y){case 38:d=m>0?1:(k+="\f",-1);break;case 44:a[c++]=(be(k)-1)*d,d=1;break;case 64:it()===45&&(k+=ci(Te())),g=it(),m=h=be(p=k+=Pm(ui())),f++;break;case 45:v===45&&be(k)==2&&(y=0)}}return o}function xu(e,t,n,r,i,o,l,a,u,c,m){for(var h=i-1,g=i===0?o:[""],x=Zs(g),v=0,y=0,_=0;v<r;++v)for(var d=0,f=vr(e,h+1,h=vm(y=l[v])),p=e;d<x;++d)(p=Kf(y>0?g[d]+" "+f:A(f,/&\f/g,g[d])))&&(u[_++]=p);return to(e,t,n,i===0?Xs:a,u,c,m)}function Tm(e,t,n){return to(e,t,n,Hf,bi(km()),vr(e,2,-2),0)}function wu(e,t,n,r){return to(e,t,n,Gs,vr(e,0,r),vr(e,r+1,-1),r)}function vn(e,t){for(var n="",r=Zs(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Om(e,t,n,r){switch(e.type){case ym:if(e.children.length)break;case gm:case Gs:return e.return=e.return||e.value;case Hf:return"";case Yf:return e.return=e.value+"{"+vn(e.children,r)+"}";case Xs:e.value=e.props.join(",")}return be(n=vn(e.children,r))?e.return=e.value+"{"+n+"}":""}function zm(e){var t=Zs(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Rm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Im(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Mm=function(t,n,r){for(var i=0,o=0;i=o,o=it(),i===38&&o===12&&(n[r]=1),!xr(o);)Te();return _r(t,Ee)},$m=function(t,n){var r=-1,i=44;do switch(xr(i)){case 0:i===38&&it()===12&&(n[r]=1),t[r]+=Mm(Ee-1,n,r);break;case 2:t[r]+=ci(i);break;case 4:if(i===44){t[++r]=it()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=bi(i)}while(i=Te());return t},Am=function(t,n){return Gf($m(Xf(t),n))},Su=new WeakMap,Fm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Su.get(r))&&!i){Su.set(t,!0);for(var o=[],l=Am(n,o),a=r.props,u=0,c=0;u<l.length;u++)for(var m=0;m<a.length;m++,c++)t.props[c]=o[u]?l[u].replace(/&\f/g,a[m]):a[m]+" "+l[u]}}},Dm=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Zf(e,t){switch(wm(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+$i+e+pe+e+e;case 6828:case 4268:return $+e+pe+e+e;case 6165:return $+e+pe+"flex-"+e+e;case 5187:return $+e+A(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return $+e+pe+"flex-item-"+A(e,/flex-|-self/,"")+e;case 4675:return $+e+pe+"flex-line-pack"+A(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+pe+A(e,"shrink","negative")+e;case 5292:return $+e+pe+A(e,"basis","preferred-size")+e;case 6060:return $+"box-"+A(e,"-grow","")+$+e+pe+A(e,"grow","positive")+e;case 4554:return $+A(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(be(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+$i+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ql(e,"stretch")?Zf(A(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,be(e)-3-(~Ql(e,"!important")&&10))){case 107:return A(e,":",":"+$)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return $+e+pe+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+pe+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+pe+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+pe+e+e}return e}var Bm=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Gs:t.return=Zf(t.value,t.length);break;case Yf:return vn([Un(t,{value:A(t.value,"@","@"+$)})],i);case Xs:if(t.length)return jm(t.props,function(o){switch(Sm(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return vn([Un(t,{props:[A(o,/:(read-\w+)/,":"+$i+"$1")]})],i);case"::placeholder":return vn([Un(t,{props:[A(o,/:(plac\w+)/,":"+$+"input-$1")]}),Un(t,{props:[A(o,/:(plac\w+)/,":"+$i+"$1")]}),Un(t,{props:[A(o,/:(plac\w+)/,pe+"input-$1")]})],i)}return""})}},Um=[Bm],Vm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var _=y.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||Um,o={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var _=y.getAttribute("data-emotion").split(" "),d=1;d<_.length;d++)o[_[d]]=!0;a.push(y)});var u,c=[Fm,Dm];{var m,h=[Om,Rm(function(y){m.insert(y)})],g=zm(c.concat(i,h)),x=function(_){return vn(Lm(_),g)};u=function(_,d,f,p){m=f,x(_?_+"{"+d.styles+"}":d.styles),p&&(v.inserted[d.name]=!0)}}var v={key:n,sheet:new hm({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:u};return v.sheet.hydrate(a),v},Jf={exports:{}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=typeof Symbol=="function"&&Symbol.for,Js=le?Symbol.for("react.element"):60103,qs=le?Symbol.for("react.portal"):60106,no=le?Symbol.for("react.fragment"):60107,ro=le?Symbol.for("react.strict_mode"):60108,io=le?Symbol.for("react.profiler"):60114,oo=le?Symbol.for("react.provider"):60109,lo=le?Symbol.for("react.context"):60110,bs=le?Symbol.for("react.async_mode"):60111,so=le?Symbol.for("react.concurrent_mode"):60111,ao=le?Symbol.for("react.forward_ref"):60112,uo=le?Symbol.for("react.suspense"):60113,Wm=le?Symbol.for("react.suspense_list"):60120,co=le?Symbol.for("react.memo"):60115,fo=le?Symbol.for("react.lazy"):60116,Hm=le?Symbol.for("react.block"):60121,Ym=le?Symbol.for("react.fundamental"):60117,Km=le?Symbol.for("react.responder"):60118,Qm=le?Symbol.for("react.scope"):60119;function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Js:switch(e=e.type,e){case bs:case so:case no:case io:case ro:case uo:return e;default:switch(e=e&&e.$$typeof,e){case lo:case ao:case fo:case co:case oo:return e;default:return t}}case qs:return t}}}function qf(e){return Ie(e)===so}D.AsyncMode=bs;D.ConcurrentMode=so;D.ContextConsumer=lo;D.ContextProvider=oo;D.Element=Js;D.ForwardRef=ao;D.Fragment=no;D.Lazy=fo;D.Memo=co;D.Portal=qs;D.Profiler=io;D.StrictMode=ro;D.Suspense=uo;D.isAsyncMode=function(e){return qf(e)||Ie(e)===bs};D.isConcurrentMode=qf;D.isContextConsumer=function(e){return Ie(e)===lo};D.isContextProvider=function(e){return Ie(e)===oo};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Js};D.isForwardRef=function(e){return Ie(e)===ao};D.isFragment=function(e){return Ie(e)===no};D.isLazy=function(e){return Ie(e)===fo};D.isMemo=function(e){return Ie(e)===co};D.isPortal=function(e){return Ie(e)===qs};D.isProfiler=function(e){return Ie(e)===io};D.isStrictMode=function(e){return Ie(e)===ro};D.isSuspense=function(e){return Ie(e)===uo};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===no||e===so||e===io||e===ro||e===uo||e===Wm||typeof e=="object"&&e!==null&&(e.$$typeof===fo||e.$$typeof===co||e.$$typeof===oo||e.$$typeof===lo||e.$$typeof===ao||e.$$typeof===Ym||e.$$typeof===Km||e.$$typeof===Qm||e.$$typeof===Hm)};D.typeOf=Ie;Jf.exports=D;var Xm=Jf.exports,bf=Xm,Gm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ed={};ed[bf.ForwardRef]=Gm;ed[bf.Memo]=Zm;var Jm=!0;function td(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var ea=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Jm===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},nd=function(t,n,r){ea(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function qm(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var bm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},eh=!1,th=/[A-Z]|^ms/g,nh=/_EMO_([^_]+?)_([^]*?)_EMO_/g,rd=function(t){return t.charCodeAt(1)===45},ju=function(t){return t!=null&&typeof t!="boolean"},qo=Im(function(e){return rd(e)?e:e.replace(th,"-$&").toLowerCase()}),ku=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(nh,function(r,i,o){return et={name:i,styles:o,next:et},i})}return bm[t]!==1&&!rd(t)&&typeof n=="number"&&n!==0?n+"px":n},rh="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function wr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return et={name:i.name,styles:i.styles,next:et},i.name;var o=n;if(o.styles!==void 0){var l=o.next;if(l!==void 0)for(;l!==void 0;)et={name:l.name,styles:l.styles,next:et},l=l.next;var a=o.styles+";";return a}return ih(e,t,n)}case"function":{if(e!==void 0){var u=et,c=n(e);return et=u,wr(e,t,c)}break}}var m=n;if(t==null)return m;var h=t[m];return h!==void 0?h:m}function ih(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=wr(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object"){var a=l;t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":ju(a)&&(r+=qo(o)+":"+ku(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&eh)throw new Error(rh);if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var u=0;u<l.length;u++)ju(l[u])&&(r+=qo(o)+":"+ku(o,l[u])+";");else{var c=wr(e,t,l);switch(o){case"animation":case"animationName":{r+=qo(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}}return r}var Cu=/label:\s*([^\s;{]+)\s*(;|$)/g,et;function ta(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";et=void 0;var o=e[0];if(o==null||o.raw===void 0)r=!1,i+=wr(n,t,o);else{var l=o;i+=l[0]}for(var a=1;a<e.length;a++)if(i+=wr(n,t,e[a]),r){var u=o;i+=u[a]}Cu.lastIndex=0;for(var c="",m;(m=Cu.exec(i))!==null;)c+="-"+m[1];var h=qm(i)+c;return{name:h,styles:i,next:et}}var oh=function(t){return t()},lh=ca.useInsertionEffect?ca.useInsertionEffect:!1,id=lh||oh,Gl=!1,od=S.createContext(typeof HTMLElement<"u"?Vm({key:"css"}):null);od.Provider;var ld=function(t){return S.forwardRef(function(n,r){var i=S.useContext(od);return t(n,i,r)})},sd=S.createContext({}),na={}.hasOwnProperty,Zl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",sh=function(t,n){var r={};for(var i in n)na.call(n,i)&&(r[i]=n[i]);return r[Zl]=t,r},ah=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ea(n,r,i),id(function(){return nd(n,r,i)}),null},uh=ld(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Zl],o=[r],l="";typeof e.className=="string"?l=td(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var a=ta(o,void 0,S.useContext(sd));l+=t.key+"-"+a.name;var u={};for(var c in e)na.call(e,c)&&c!=="css"&&c!==Zl&&!Gl&&(u[c]=e[c]);return u.className=l,n&&(u.ref=n),S.createElement(S.Fragment,null,S.createElement(ah,{cache:t,serialized:a,isStringTag:typeof i=="string"}),S.createElement(i,u))}),ch=uh,fh=s.Fragment;function re(e,t,n){return na.call(t,"css")?s.jsx(ch,sh(e,t),n):s.jsx(e,t,n)}function ad(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ta(t)}var C=function(){var t=ad.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},dh=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var l=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))l=e(o);else{l="";for(var a in o)o[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=o}l&&(i&&(i+=" "),i+=l)}}return i};function ph(e,t,n){var r=[],i=td(e,r,n);return r.length<2?n:i+t(r)}var mh=function(t){var n=t.cache,r=t.serializedArr;return id(function(){for(var i=0;i<r.length;i++)nd(n,r[i],!1)}),null},bo=ld(function(e,t){var n=!1,r=[],i=function(){if(n&&Gl)throw new Error("css can only be used during render");for(var c=arguments.length,m=new Array(c),h=0;h<c;h++)m[h]=arguments[h];var g=ta(m,t.registered);return r.push(g),ea(t,g,!1),t.key+"-"+g.name},o=function(){if(n&&Gl)throw new Error("cx can only be used during render");for(var c=arguments.length,m=new Array(c),h=0;h<c;h++)m[h]=arguments[h];return ph(t.registered,i,dh(m))},l={css:i,cx:o,theme:S.useContext(sd)},a=e.children(l);return n=!0,S.createElement(S.Fragment,null,S.createElement(mh,{cache:t,serializedArr:r}),a)}),hh=Object.defineProperty,gh=(e,t,n)=>t in e?hh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gr=(e,t,n)=>gh(e,typeof t!="symbol"?t+"":t,n),Jl=new Map,Zr=new WeakMap,Eu=0,yh=void 0;function vh(e){return e?(Zr.has(e)||(Eu+=1,Zr.set(e,Eu.toString())),Zr.get(e)):"0"}function xh(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?vh(e.root):e[t]}`).toString()}function wh(e){const t=xh(e);let n=Jl.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(l=>{l.forEach(a=>{var u;const c=a.isIntersecting&&i.some(m=>a.intersectionRatio>=m);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(u=r.get(a.target))==null||u.forEach(m=>{m(c,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Jl.set(t,n)}return n}function ud(e,t,n={},r=yh){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const u=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:i,observer:o,elements:l}=wh(n),a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),Jl.delete(i))}}function Sh(e){return typeof e.children!="function"}var Nu=class extends S.Component{constructor(e){super(e),Gr(this,"node",null),Gr(this,"_unobserveCb",null),Gr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Gr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Sh(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=ud(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:x,entry:v}=this.state;return e({inView:x,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:l,skip:a,trackVisibility:u,delay:c,initialInView:m,fallbackInView:h,...g}=this.props;return S.createElement(t||"div",{ref:this.handleNode,...g},e)}};function cd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:l,initialInView:a,fallbackInView:u,onChange:c}={}){var m;const[h,g]=S.useState(null),x=S.useRef(),[v,y]=S.useState({inView:!!a,entry:void 0});x.current=c,S.useEffect(()=>{if(l||!h)return;let p;return p=ud(h,(w,E)=>{y({inView:w,entry:E}),x.current&&x.current(w,E),E.isIntersecting&&o&&p&&(p(),p=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},u),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,h,i,r,o,l,n,u,t]);const _=(m=v.entry)==null?void 0:m.target,d=S.useRef();!h&&_&&!o&&!l&&d.current!==_&&(d.current=_,y({inView:!!a,entry:void 0}));const f=[g,v.inView,v.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var fd={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),ia=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),mo=Symbol.for("react.strict_mode"),ho=Symbol.for("react.profiler"),go=Symbol.for("react.provider"),yo=Symbol.for("react.context"),jh=Symbol.for("react.server_context"),vo=Symbol.for("react.forward_ref"),xo=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),So=Symbol.for("react.memo"),jo=Symbol.for("react.lazy"),kh=Symbol.for("react.offscreen"),dd;dd=Symbol.for("react.module.reference");function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ra:switch(e=e.type,e){case po:case ho:case mo:case xo:case wo:return e;default:switch(e=e&&e.$$typeof,e){case jh:case yo:case vo:case jo:case So:case go:return e;default:return t}}case ia:return t}}}B.ContextConsumer=yo;B.ContextProvider=go;B.Element=ra;B.ForwardRef=vo;B.Fragment=po;B.Lazy=jo;B.Memo=So;B.Portal=ia;B.Profiler=ho;B.StrictMode=mo;B.Suspense=xo;B.SuspenseList=wo;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Ve(e)===yo};B.isContextProvider=function(e){return Ve(e)===go};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ra};B.isForwardRef=function(e){return Ve(e)===vo};B.isFragment=function(e){return Ve(e)===po};B.isLazy=function(e){return Ve(e)===jo};B.isMemo=function(e){return Ve(e)===So};B.isPortal=function(e){return Ve(e)===ia};B.isProfiler=function(e){return Ve(e)===ho};B.isStrictMode=function(e){return Ve(e)===mo};B.isSuspense=function(e){return Ve(e)===xo};B.isSuspenseList=function(e){return Ve(e)===wo};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===po||e===ho||e===mo||e===xo||e===wo||e===kh||typeof e=="object"&&e!==null&&(e.$$typeof===jo||e.$$typeof===So||e.$$typeof===go||e.$$typeof===yo||e.$$typeof===vo||e.$$typeof===dd||e.getModuleId!==void 0)};B.typeOf=Ve;fd.exports=B;var Ch=fd.exports;C`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;C`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;C`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;C`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;C`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;C`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Eh=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Nh=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_h=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ph=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Lh=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oa=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Th=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Oh=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zh=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rh=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ih=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mh=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$h=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Ah({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=oa,iterationCount:i=1}){return ad`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Fh(e){return e==null}function Dh(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function pd(e,t){return n=>n?e():t()}function Sr(e){return pd(e,()=>null)}function ql(e){return Sr(()=>({opacity:0}))(e)}const md=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:l=oa,triggerOnce:a=!1,className:u,style:c,childClassName:m,childStyle:h,children:g,onVisibilityChange:x}=e,v=S.useMemo(()=>Ah({keyframes:l,duration:i}),[i,l]);return Fh(g)?null:Dh(g)?re(Uh,{...e,animationStyles:v,children:String(g)}):Ch.isFragment(g)?re(hd,{...e,animationStyles:v}):re(fh,{children:S.Children.map(g,(y,_)=>{if(!S.isValidElement(y))return null;const d=r+(t?_*i*n:0);switch(y.type){case"ol":case"ul":return re(bo,{children:({cx:f})=>re(y.type,{...y.props,className:f(u,y.props.className),style:Object.assign({},c,y.props.style),children:re(md,{...e,children:y.props.children})})});case"li":return re(Nu,{threshold:o,triggerOnce:a,onChange:x,children:({inView:f,ref:p})=>re(bo,{children:({cx:w})=>re(y.type,{...y.props,ref:p,className:w(m,y.props.className),css:Sr(()=>v)(f),style:Object.assign({},h,y.props.style,ql(!f),{animationDelay:d+"ms"})})})});default:return re(Nu,{threshold:o,triggerOnce:a,onChange:x,children:({inView:f,ref:p})=>re("div",{ref:p,className:u,css:Sr(()=>v)(f),style:Object.assign({},c,ql(!f),{animationDelay:d+"ms"}),children:re(bo,{children:({cx:w})=>re(y.type,{...y.props,className:w(m,y.props.className),style:Object.assign({},h,y.props.style)})})})})}})})},Bh={display:"inline-block",whiteSpace:"pre"},Uh=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:a=!1,className:u,style:c,children:m,onVisibilityChange:h}=e,{ref:g,inView:x}=cd({triggerOnce:a,threshold:l,onChange:h});return pd(()=>re("div",{ref:g,className:u,style:Object.assign({},c,Bh),children:m.split("").map((v,y)=>re("span",{css:Sr(()=>t)(x),style:{animationDelay:i+y*o*r+"ms"},children:v},y))}),()=>re(hd,{...e,children:m}))(n)},hd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:l,onVisibilityChange:a}=e,{ref:u,inView:c}=cd({triggerOnce:r,threshold:n,onChange:a});return re("div",{ref:u,className:i,css:Sr(()=>t)(c),style:Object.assign({},o,ql(!c)),children:l})};C`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;C`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Vh=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Wh=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Hh=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Yh=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Kh=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Qh=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Xh=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Gh=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Zh=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Jh=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,qh=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,bh=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,e1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function t1(e,t,n){switch(n){case"bottom-left":return t?Wh:Nh;case"bottom-right":return t?Hh:_h;case"down":return e?t?Kh:Lh:t?Yh:Ph;case"left":return e?t?Xh:Th:t?Qh:oa;case"right":return e?t?Zh:zh:t?Gh:Oh;case"top-left":return t?Jh:Rh;case"top-right":return t?qh:Ih;case"up":return e?t?e1:$h:t?bh:Mh;default:return t?Vh:Eh}}const Ne=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=S.useMemo(()=>t1(t,r,n),[t,n,r]);return re(md,{keyframes:o,...i})};C`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;C`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;C`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function n1(){const[e,t]=S.useState([]),[n,r]=S.useState(0),[i,o]=S.useState(!1),[l,a]=S.useState(!1),u=S.useRef(null);S.useEffect(()=>{setTimeout(()=>{fetch("./anime-love-data.json").then(y=>y.json()).then(y=>t(y))},1e3)},[]);const c=()=>{a(!1),o(!0),r(y=>y===0?e.length-1:y-1),setTimeout(()=>{o(!1)},1e3)},m=()=>{a(!1),o(!0),r(y=>y===e.length-1?0:y+1),setTimeout(()=>{o(!1)},1e3)};S.useEffect(()=>{if(e.length===0)return;const y=document.getElementById("canvas"),_=y.getContext("2d");y.width=y.offsetWidth,y.height=y.offsetHeight;const d=()=>{cancelAnimationFrame(u.current),_.clearRect(0,0,y.width,y.height)};if(l){const f=new Image;return f.src=e[n].src,f.onload=()=>{const p=_.createPattern(f,"no-repeat");let w=1.5;_.fillStyle=p;class E{constructor(V,z){this.x=V,this.y=z,this.radius=w,this.speed=Math.random()*2,this.vx=this.speed,this.vy=this.vx*2}draw(){_.beginPath(),_.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),_.fill(),_.closePath()}update(){this.y>y.height&&(this.x=Math.random()*y.width,this.y=-5),this.x+=this.vx,this.y+=this.vy,this.draw()}}let N=[];for(let T=0;T<25;T++){let V=Math.random()*y.width,z=Math.random()*y.height;N.push(new E(V,z))}const k=()=>{_.clearRect(0,0,y.width,y.height),N.forEach(T=>T.update()),u.current=requestAnimationFrame(k)};k()},d}else d()},[n,l,e]);const h=()=>{a(!0)},g=()=>{a(!1)};if(e.length===0)return s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{id:"favorite",className:"choice",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Loading"})," ","Favorite Anime"]})}),s.jsx("div",{className:"love",children:s.jsxs("div",{className:"love-overview",children:[s.jsxs("div",{className:"love-image",children:[s.jsx("canvas",{id:"canvas"}),s.jsx("img",{src:"",alt:"",onMouseEnter:h,onMouseLeave:g})]}),s.jsx("h2",{style:{color:"var(--color-red)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(22rem)",cursor:"default"},children:"Please wait..."})]})})]});const{src:x,title:v}=e[n];return s.jsxs(s.Fragment,{children:[s.jsx("div",{id:"favorite",className:"choice",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Editor"}),"'s Choice Anime"]})}),s.jsx("div",{className:"love",children:s.jsxs("div",{className:"love-overview",children:[s.jsx("button",{tabIndex:"up",onClick:i?void 0:c,children:"⥣"}),s.jsxs("div",{className:"love-image",style:i?{filter:"blur(0.1rem)"}:{transition:"1s"},children:[s.jsx("canvas",{id:"canvas"}),s.jsx("img",{src:x,alt:v,onMouseEnter:h,onMouseLeave:g})]}),s.jsxs("p",{children:[s.jsx("span",{style:{color:"var(--color-red)"},children:"Wee ♡ "}),v]}),s.jsx("button",{tabIndex:"down",onClick:i?void 0:m,children:"⥥"})]})})]})}function r1(){const e=["Sponsored","Featured","Remake","Hiatus"],[t,n]=S.useState(!1),[r,i]=S.useState("Featured"),o=new Date().getHours(),l=(d,f)=>{for(let p of f)if(d<p.limit)return[p.image];return[f[f.length-1].image]},a=[{limit:8,image:{src:"https://cdn.myanimelist.net/images/anime/1003/142645l.jpg",title:"T.P BON"}},{limit:14,image:{src:"https://cdn.myanimelist.net/images/anime/1801/142390l.jpg",title:"Ore dake Level Up na Ken"}},{limit:20,image:{src:"https://cdn.myanimelist.net/images/anime/1948/143550l.jpg",title:"Sengoku Youko: Senma Konton-hen"}},{limit:24,image:{src:"https://cdn.myanimelist.net/images/anime/1239/140803l.jpg",title:"Ao no Exorcist: Shimane Illuminati-hen"}}],u=[{limit:4,image:{src:"https://cdn.myanimelist.net/images/anime/1607/143049l.jpg",title:"Mahoutsukai no Yakusoku"}},{limit:8,image:{src:"https://cdn.myanimelist.net/images/anime/1799/139199l.jpg",title:"Medalist"}},{limit:12,image:{src:"https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",title:"Momentary Lily"}},{limit:16,image:{src:"https://cdn.myanimelist.net/images/anime/1011/142918l.jpg",title:"Izure Saikyou no Renkinjutsushi?"}},{limit:20,image:{src:"https://cdn.myanimelist.net/images/anime/1501/143569l.jpg",title:"NEET Kunoichi to Nazeka Dousei Hajimemashita"}},{limit:24,image:{src:"https://cdn.myanimelist.net/images/anime/1718/143481l.jpg",title:"Kimi no Koto ga Daidaisuki na 100-nin no Kanojo 2nd Season"}}],c=[{limit:8,image:{src:"https://cdn.myanimelist.net/images/anime/1105/140422l.jpg",title:"The One Piece"}},{limit:14,image:{src:"https://cdn.myanimelist.net/images/anime/1426/129194l.jpg",title:"Trigun Stampede"}},{limit:20,image:{src:"https://cdn.myanimelist.net/images/anime/1599/136532l.jpg",title:"Rurouni Kenshin: Meiji Kenkaku Romantan"}},{limit:24,image:{src:"https://cdn.myanimelist.net/images/anime/1059/142414l.jpg",title:"Ookami to Koushinryou: Merchant Meets the Wise Wolf"}}],m=[{src:"https://cdn.myanimelist.net/images/anime/3/67807l.jpg",title:"Magic Kaito 1412"}],h=l(o,a),g=l(o,u),x=l(o,c),y={Sponsored:h,Featured:g,Remake:x,Hiatus:m}[r],_=d=>{n(!0),i(d),setTimeout(()=>{n(!1)},1e3)};return s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{id:"featured",className:"featured",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-red)"},children:r})," ",r==="Featured"?"in Winter Anime":"Anime"]})}),s.jsxs("div",{className:"winter",children:[s.jsx("div",{className:"winter-all",children:e.map(d=>s.jsx("button",{onClick:t?void 0:()=>_(d),className:d===r?"selected":"",children:d},d))}),s.jsxs("div",{className:"winter-overview",children:[s.jsxs("div",{className:"winter-image",style:t?{filter:"blur(0.1rem)"}:{transition:"1s"},children:[s.jsx("small",{children:r==="Sponsored"&&"$"||r==="Featured"&&"❅ ❄️ ❆"||r==="Remake"&&"♼"||r==="Hiatus"&&"zᶻ"}),s.jsx("img",{src:y[0].src,alt:y[0].title})]}),s.jsx("p",{children:s.jsx("span",{children:y[0].title})})]})]})]})}const bl=e=>e!==0;function i1({animesLegacy:e}){return s.jsxs("div",{id:"legacy",className:"legacy",children:[s.jsx("br",{}),s.jsxs("p",{className:"search-results",style:{margin:"0.2rem auto -0.4rem",cursor:"default"},children:[s.jsx("span",{children:bl(e.length)?"Remember":"Yameru"})," ",s.jsx("strong",{children:bl(e.length)?"Sunday Morning TV? Wee present 2000s childhood anime...":"Minna-san! Sorry for the inconvenience during its loading..."})]}),s.jsx("br",{})]})}function o1({animesLegacy:e,selectedAnimeLegacy:t,onSelectedAnimeLegacy:n}){return s.jsxs(s.Fragment,{children:[s.jsxs("main",{className:"main-legacy",children:[t&&s.jsx(Vf,{selectedAnime:t,legacy:!0}),e.length>=0&&s.jsx(Wf,{animes:e,onSelectedAnime:n,legacy:!0})]}),t&&bl(t.mal_id)&&s.jsx("div",{className:"box-separator"})]})}function l1({animesLegacy:e,selectedAnimeLegacy:t,onSelectedAnimeLegacy:n}){return s.jsxs(s.Fragment,{children:[s.jsx(i1,{animesLegacy:e}),s.jsx(o1,{animesLegacy:e,selectedAnimeLegacy:t,onSelectedAnimeLegacy:n})]})}const s1=async e=>{const n={"Season Now":`${ut}/seasons/now?limit=25`,"Top Anime":`${ut}/top/anime?limit=25`,"Top Manga":`${ut}/top/manga?limit=25`,"Top Characters":`${ut}/top/characters?limit=25`}[e];if(!n)throw new Error("Failed to fetch data");const r=await fetch(n);if(!r.ok)throw new Error("Failed to fetch data");return(await r.json()).data};function a1(){const e=["Season Now","Top Anime","Top Manga","Top Characters"],[t,n]=S.useState(""),[r,i]=S.useState([]),[o,l]=S.useState(!1),[a,u]=S.useState(!1),[c,m]=S.useState(0),h=async y=>{l(!0);try{const _=await s1(y);i(_),m(0)}catch(_){console.log("Error fetching data:",_),i([])}finally{l(!1)}};S.useEffect(()=>{t&&h(t)},[t]);const g=()=>{u(!0),m(y=>y===0?r.length-1:y-1),setTimeout(()=>{u(!1)},1e3)},x=()=>{u(!0),m(y=>y===r.length-1?0:y+1),setTimeout(()=>{u(!1)},1e3)};let v="";return c+1==1||c+1==21?v="ˢᵗ":c+1==2||c+1==22?v="ⁿᵈ":c+1==3||c+1==23?v="ʳᵈ":v="ᵗʰ",s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{id:"category",className:"choose",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-orange)"},children:t||"Recommended"})," ","for you"]})}),s.jsxs("div",{className:"category",style:{minHeight:"43rem"},children:[s.jsx("div",{className:"category-all",children:e.map(y=>s.jsx("button",{onClick:o?void 0:()=>n(y),className:y===t?"selected":"",children:y},y))}),s.jsxs("div",{className:"category-overview",children:[s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(22rem)",cursor:"default"},children:t?o&&"Please wait...":"Select Category"}),o?"":r.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("button",{tabIndex:"up",onClick:a?void 0:g,children:"⥣"}),s.jsxs("div",{className:"category-image",children:[s.jsx("small",{children:t=="Season Now"?"▸":`${c+1}${v}`}),s.jsx("img",{style:!a&&t=="Top Characters"?{border:"0.2rem solid var(--color-white)",filter:"grayscale(1)",display:"block",margin:"0 auto"}:!a&&t!="Top Characters"?{display:"block",margin:"0 auto"}:a&&t!="Top Characters"?{display:"block",margin:"0 auto",filter:"blur(0.1rem)",transition:"unset"}:{border:"0.2rem solid var(--color-white)",display:"block",margin:"0 auto",filter:"grayscale(1) blur(0.25rem)",transition:"unset"},src:r[c].images.jpg.image_url,alt:r[c].title||r[c].name}),s.jsx("p",{children:r[c].title||r[c].name})]}),s.jsx("button",{className:"arrow",tabIndex:"down",onClick:a?void 0:x,children:"⥥"})]})]})]})]})}function u1(){var u;const[e,t]=S.useState([]),[n,r]=S.useState(!1),[i,o]=S.useState("Studio Ghibli");S.useEffect(()=>{fetch("./anime-studio-data.json").then(c=>{if(!c.ok)throw new Error("Failed to fetch data");return c.json()}).then(c=>{t(c)}).catch(c=>{console.error("Error fetching data:",c)})},[]);const l=c=>{r(!0),o(c),setTimeout(()=>{r(!1)},1e3)},a=(u=e.find(c=>c.studio===i))==null?void 0:u.image;return s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsxs("div",{id:"masterpiece",className:"masterpiece",children:[s.jsx("div",{className:"ornament"}),s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-red)"},children:e.length>0?i:"The Gift"})," ",e.length>0?"Masterpiece":"from Studio Anime"]})]}),s.jsxs("div",{className:"studio",children:[a&&s.jsx("div",{className:"studio-all",children:e.map(c=>s.jsx("button",{onClick:n?void 0:()=>l(c.studio),className:c.studio===i?"selected":"",children:c.studio},c.studio))}),s.jsx("div",{className:"studio-overview",children:a?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"studio-image",style:n?{filter:"blur(0.1rem)"}:{},children:[s.jsx("small",{children:"𑁍"}),s.jsx("img",{src:a.src,alt:a.title})]}),s.jsx("p",{children:s.jsx("span",{children:a.title})})]}):s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Please wait..."})}),s.jsx("div",{className:"ornament"})]})]})}const _u=e=>e!=="No Data";function c1({animes:e,selectedAnime:t,onSelectedAnime:n}){return s.jsxs(s.Fragment,{children:[s.jsxs("main",{className:"main",children:[t&&_u(t.mal_id)&&s.jsx(Vf,{selectedAnime:t}),e.length>0&&s.jsx(Wf,{animes:e,onSelectedAnime:n})]}),t&&_u(t.mal_id)&&s.jsx("div",{className:"box-separator"})]})}function f1({animes:e,selectedAnime:t,onSelectedAnime:n}){const[r,i]=S.useState([]),[o,l]=S.useState(null);S.useEffect(()=>{fetch("./anime-legacy-data.json").then(u=>u.json()).then(u=>{i(u),l(u[0])})},[]);const a=u=>{l(u)};return s.jsxs(s.Fragment,{children:[s.jsx(c1,{animes:e,selectedAnime:t,onSelectedAnime:n}),s.jsx(n1,{}),s.jsx(r1,{}),s.jsx(l1,{animesLegacy:r,selectedAnimeLegacy:o,onSelectedAnimeLegacy:a}),s.jsx(a1,{}),s.jsx(u1,{})]})}const d1=async()=>{const e=`${ut}/genres/anime`;try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch data");return(await t.json()).data}catch(t){throw console.error("Error fetching data:",t),t}},p1=async e=>{const t=`${ut}/anime?genres=${e}&limit=25`;try{const n=await fetch(t);if(!n.ok)throw new Error("Failed to fetch data");return(await n.json()).data.filter(o=>o.rating!=="R+ - Mild Nudity"&&o.rating!=="R - 17+ (violence & profanity)"&&o.type!=="OVA"&&o.type!=="Movie"&&o.type==="TV"||o.rating!=="R+ - Mild Nudity"&&o.rating!=="R - 17+ (violence & profanity)"&&o.type==="OVA"&&o.type!=="Movie")}catch(n){throw console.error("Error fetching data:",n),n}};function m1(){const[e,t]=S.useState([]),[n,r]=S.useState([]),[i,o]=S.useState(0),[l,a]=S.useState(!1),[u,c]=S.useState(!1),[m,h]=S.useState("");S.useEffect(()=>{(async()=>{try{const f=await d1();t(f)}catch(f){console.error("Error fetching data:",f)}})()},[]);const g=async(d,f)=>{a(!0),h(f);try{const p=await p1(d);r(p),o(0)}catch(p){console.error("Error fetching data:",p)}finally{a(!1)}},x=()=>{c(!0),o(d=>d===0?n.length-1:d-1),setTimeout(()=>{c(!1)},1e3)},v=()=>{c(!0),o(d=>d===n.length-1?0:d+1),setTimeout(()=>{c(!1)},1e3)},y=d=>d[i].rating==="Rx - Hentai"?{filter:"grayscale(1) brightness(0.3) contrast(0.3)",opacity:"0.7"}:{},_=d=>d[i].rating==="Rx - Hentai"?{filter:"grayscale(1)",cursor:"not-allowed"}:{};return s.jsxs(s.Fragment,{children:[s.jsx("aside",{id:"genre",className:"aside left",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"check",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Genre"})," ","Anime"]})}),s.jsx("div",{className:"genre-all",children:e.map(d=>s.jsx("button",{onClick:l?void 0:()=>g(d.mal_id,d.name),className:d.name===m?"selected":"",style:d.name==="Hentai"?{filter:"grayscale(1)",cursor:"not-allowed"}:{},children:d.name},d.mal_id))})]})}),s.jsx("aside",{className:"aside right",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"check",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:m||"Genre"})," ","Anime"]})}),s.jsx("div",{className:"genre-list",children:s.jsx("div",{className:"genre-list-overview",children:l?s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Please wait..."}):n.length>0?s.jsxs(s.Fragment,{children:[s.jsx("button",{tabIndex:"up",onClick:u?void 0:x,children:"⥣"}),s.jsxs("div",{className:"genre-list-image",style:u?{filter:"blur(0.1rem)"}:{transition:"1s"},children:[s.jsx("small",{children:"☆"}),s.jsx("img",{src:n[i].images.jpg.image_url,alt:n[i].title,style:y(n)})]}),s.jsx("p",{style:_(n),children:n[i].title}),s.jsx("button",{className:"arrow",tabIndex:"down",onClick:u?void 0:v,children:"⥥"})]}):s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Select Genre"})})})]})})]})}const h1=async e=>{const t=`${ut}/anime/${e}`;if(!t)throw new Error("Failed to fetch data");const n=await fetch(t);if(!n.ok)throw new Error("Failed to fetch data");return(await n.json()).data};function g1(){const[e,t]=S.useState(null),[n,r]=S.useState(0),[i,o]=S.useState(!0),l=[56785,52742,49785,52196,55855,56840,52299,58488,53889,57152,55318,58739,58822,58082,57616,57557,52093,50613,51122,25517,56785,52742,49785,52196,55855,56840,52299,58488,53889,57152,55318,58739,58822,58082,57616,57557,52093,50613,51122,25517],a=["Detective Conan","Haikyuu!!","Fairy Tail","Date A Live","Kuroshitsuji","T.P BON","Ore dake Level Up na Ken","Sengoku Youko","Ao no Exorcist","Mahoutsukai no Yakusoku","Medalist","Momentary Lily","Izure Saikyou no Renkinjutsushi?","NEET Kunoichi to Nazeka Dousei Hajimemashita","Kimi no Koto ga Daidaisuki na 100-nin no Kanojo","The One Piece","Trigun Stampede","Rurouni Kenshin","Ookami to Koushinryou","Magic Kaito 1412","Conan","Hinata","Natsu","Shido Itsuka","Ciel","Bon Namihira","Jin-woo","Jinka Yamato","Rin","Akira Masaki","Inori Yuitsuka","Yuri Kawazu","Takumi","Shizuri","Rentaro","Monkey D. Luffy","Vash","Kenshin","Kraft Lawrence","KID"];S.useEffect(()=>{(()=>{setTimeout(()=>{u(l[n])},8e3)})()},[n]);const u=async c=>{o(!0);try{const m=await h1(c);t(m)}catch(m){console.error("Error fetching data:",m)}finally{o(!1)}};return s.jsxs(s.Fragment,{children:[s.jsx("aside",{className:"aside last-left",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{id:"recent",className:"recent",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Recent"})," ","Trailer Anime"]})}),s.jsx("div",{className:"trailer-all",children:a.map((c,m)=>s.jsx("button",{onClick:i?void 0:()=>{o(!0),r(m)},className:m===n?"selected":"",style:c==="Magic Kaito 1412"||c==="KID"?{filter:"grayscale(1)",cursor:"default"}:void 0,children:c},c))})]})}),s.jsx("aside",{className:"aside last-right",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"recent",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:e?"Recent":"Loading"})," ","Trailer Anime"]})}),s.jsx("div",{className:"trailer-list",children:s.jsx("div",{className:"trailer-list-overview",children:i?s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Please wait..."}):e.trailer.embed_url?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"trailer-list-video",children:e.trailer.embed_url&&s.jsx("iframe",{width:"100%",height:"100%",src:`${e.trailer.embed_url}?autoplay=0&mute=0`,title:"Watch trailer on YouTube",loading:"lazy",referrerPolicy:"no-referrer",allowFullScreen:!0,style:{border:"0"}})}),s.jsx("p",{children:e.title})]}):s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Select Trailer"})})})]})})]})}const y1=async e=>{const t=`${ut}/anime/${e}/news`;if(!e)throw new Error("Failed to fetch data");const n=await fetch(t);if(!n.ok)throw new Error("Failed to fetch data");return(await n.json()).data};function v1(){const[e,t]=S.useState([]),[n,r]=S.useState(!0),[i,o]=S.useState(null),[l,a]=S.useState(null),u=[56785,52742,49785,52196,55855,56840,52299,58488,53889,57152,55318,58739,58822,58082,57616,57557,52093,50613,51122,25517],c=()=>{const h=Math.floor(Math.random()*u.length);return u[h]};S.useEffect(()=>{a(c())},[]),S.useEffect(()=>{l!==null&&(r(!0),y1(l).then(h=>{t(h),r(!1)}).catch(h=>{o(h),r(!1)}))},[l]);const m=()=>{a(c())};return s.jsx("aside",{className:"aside bottom-left",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{id:"magazine",className:"magazine",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Magazine"})," ","Anime"]})}),s.jsxs("div",{className:"news-all",children:[s.jsx("button",{onClick:m,children:i?"⥁":n?"↻":"⟳"}),s.jsx("ul",{children:e.map(h=>s.jsxs("li",{children:[s.jsx("a",{href:h.url,target:"_blank",rel:"noopener noreferrer nofollow",title:"Read news in My Anime List",children:h.title}),s.jsx("br",{}),s.jsx("span",{children:new Date(h.date).toLocaleDateString()})]},h.mal_id))})]})]})})}function x1(){return s.jsx("aside",{className:"aside bottom-right",children:s.jsx(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:s.jsx("div",{className:"tabloid-all",children:s.jsx("div",{className:"poster",title:"WeeBoo"})})})})}function w1(){const e=[{src:"watch-anime-in-now/BSTATION.webp",alt:"Bstation"},{src:"watch-anime-in-now/CRUNCHYROLL.webp",alt:"Crunchyroll"},{src:"watch-anime-in-now/DISNEYPLUSHOTSTAR.webp",alt:"Disney+ Hotstar"},{src:"watch-anime-in-now/FUNIMATION.webp",alt:"Funimation"},{src:"watch-anime-in-now/GENFLIX.webp",alt:"Genflix"},{src:"watch-anime-in-now/IQIYI.webp",alt:"iQIYI"},{src:"watch-anime-in-now/NETFLIX.webp",alt:"Netflix"},{src:"watch-anime-in-now/PRIMEVIDEO.webp",alt:"Prime Video"},{src:"watch-anime-in-now/VIDIO.webp",alt:"Vidio"},{src:"watch-anime-in-now/VIU.webp",alt:"Viu"},{src:"watch-anime-in-now/WETV.webp",alt:"WeTV"}],t=[{src:"watch-anime-in-then/ANTV.webp",alt:"ANTV (old)",size:"M"},{src:"watch-anime-in-then/GLOBALTV.webp",alt:"Global TV (old renamed)",size:"M"},{src:"watch-anime-in-then/INDOSIAR.webp",alt:"Indosiar (old)",size:"L"},{src:"watch-anime-in-then/RCTI.webp",alt:"RCTI (old)",size:"M"},{src:"watch-anime-in-then/SCTV.webp",alt:"SCTV (old)",size:"L"},{src:"watch-anime-in-then/SPACETOON.webp",alt:"Spacetoon (closed)",size:"L"},{src:"watch-anime-in-then/TPI.webp",alt:"TPI (closed)",size:"XL"},{src:"watch-anime-in-then/TRANSTV.webp",alt:"Trans TV (old)",size:"XL"},{src:"watch-anime-in-then/TV7.webp",alt:"TV7 (closed)",size:"XL"}];return s.jsxs(s.Fragment,{children:[s.jsx("aside",{className:"aside top-left",children:s.jsx(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:s.jsx("div",{className:"channels stream",children:e.map(n=>s.jsx("div",{className:"frame",title:n.alt,children:s.jsx("img",{src:n.src,alt:n.alt})},n.alt))})})}),s.jsx("aside",{className:"aside top-right",children:s.jsx(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:s.jsx("div",{className:"channels tv",children:t.map(n=>s.jsx("div",{className:"frame",title:n.alt,children:s.jsx("img",{src:n.src,alt:n.alt,style:n.size==="L"?{width:"73.5%"}:n.size==="XL"?{width:"65%"}:{}})},n.alt))})})})]})}function S1(){return s.jsxs(s.Fragment,{children:[s.jsx(m1,{}),s.jsx(g1,{}),s.jsx(v1,{}),s.jsx(x1,{}),s.jsx(w1,{}),s.jsx("figure",{className:"closing",children:s.jsxs(Ne,{triggerOnce:!0,duration:1500,direction:"down",easing:"ease-out",children:[s.jsxs("figcaption",{children:[s.jsx("h6",{children:"ハ"}),s.jsx("h6",{children:"!"}),s.jsx("h6",{children:"お"}),s.jsx("h6",{children:"か"}),s.jsx("h6",{children:"え"}),s.jsx("h6",{children:"り"})]}),s.jsxs("figcaption",{children:[s.jsx("h6",{children:"み"}),s.jsx("h6",{children:"な"}),s.jsx("h6",{children:"さ"}),s.jsx("h6",{children:"ん"})]})]})})]})}function j1(){return s.jsx("figure",{className:"separator",children:s.jsx("img",{src:"Detective Conan Logo Internazionale.webp",alt:""})})}const k1="#0A0A23",C1=S.forwardRef(function({title:t="freeCodeCamp",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=k1),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z"})]})}),E1="#181717",N1=S.forwardRef(function({title:t="GitHub",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=E1),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}),_1="#61DAFB",P1=S.forwardRef(function({title:t="React",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=_1),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"})]})}),L1="#149EF2",T1=S.forwardRef(function({title:t="Sololearn",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=L1),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M18.621 16.084a8.483 8.483 0 0 1-2.922 6.427c-.603.53-.19 1.522.613 1.442a9.039 9.039 0 0 0 1.587-.3 8.32 8.32 0 0 0 5.787-5.887 8.555 8.555 0 0 0-8.258-10.832 9.012 9.012 0 0 0-1.045.06c-.794.1-.995 1.161-.29 1.542 2.701 1.452 4.53 4.285 4.53 7.548zM7.906 18.597a8.538 8.538 0 0 1-6.45-2.913c-.532-.6-1.527-.19-1.446.61a8.943 8.943 0 0 0 .3 1.582c.794 2.823 3.064 5.026 5.907 5.766 5.727 1.492 10.87-2.773 10.87-8.229 0-.35-.02-.7-.06-1.04-.1-.792-1.165-.992-1.547-.29a8.597 8.597 0 0 1-7.574 4.514zM5.382 7.916a8.483 8.483 0 0 1 2.924-6.427c.603-.531.19-1.522-.613-1.442a9.93 9.93 0 0 0-1.598.29A8.339 8.339 0 0 0 .31 6.224a8.555 8.555 0 0 0 8.258 10.832c.352 0 .704-.02 1.045-.06.794-.1.995-1.162.29-1.542a8.54 8.541 0 0 1-4.52-7.538zm10.72-2.513a8.538 8.538 0 0 1 6.45 2.913c.53.6 1.526.19 1.445-.61a8.945 8.945 0 0 0-.3-1.583C22.902 3.3 20.632 1.098 17.788.357 12.071-1.145 6.928 3.12 6.928 8.576c0 .35.02.7.06 1.041.1.791 1.168.991 1.549.29A8.58 8.58 0 0 1 16.1 5.404z"})]})}),O1="#000000",z1=S.forwardRef(function({title:t="Vercel",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=O1),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M24 22.525H0l12-21.05 12 21.05z"})]})});function R1(){const[e,t]=S.useState(!1),n=a=>{a.preventDefault()},r=()=>{t(!0),setTimeout(()=>{t(!1)},1250)},[i,o]=S.useState(!1),l=async()=>{try{await navigator.clipboard.writeText(window.location.href),o(!0),setTimeout(()=>o(!1),1e4)}catch(a){console.error("Error fetching data:",a)}};return s.jsxs("footer",{children:[s.jsx(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:s.jsxs("div",{className:"footer",children:[s.jsxs("div",{className:"social-icons",children:[s.jsx("a",{href:"https://nantunggaputra.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:s.jsx(z1,{color:"var(--color-white)",size:24})}),s.jsx("a",{href:"https://github.com/nantunggaputra",target:"_blank",rel:"noopener noreferrer",children:s.jsx(N1,{color:"var(--color-white)",size:24})}),s.jsx("a",{href:"https://www.sololearn.com/en/profile/29010238",target:"_blank",rel:"noopener noreferrer",children:s.jsx(T1,{color:"var(--color-white)",size:24})}),s.jsx("a",{href:"https://www.freecodecamp.org/fcc25a60d51-9b4d-4215-8292-018b8c933994",target:"_blank",rel:"noopener noreferrer",children:s.jsx(C1,{color:"var(--color-white)",size:24})}),s.jsx("a",{style:{cursor:"pointer"},children:s.jsx(P1,{color:"var(--color-white)",size:24})})]}),s.jsx("h3",{children:s.jsxs("a",{href:"https://nantunggaputra.github.io/HTML/",target:"_blank",rel:"noopener noreferrer",children:["web",s.jsx("span",{children:"dev"}),"el",s.jsx("span",{children:"op"}),"er"]})}),s.jsxs("p",{children:["Created by"," ",s.jsxs("a",{href:"https://www.linkedin.com/in/nantungga-putra-451779116/",target:"_blank",rel:"noopener noreferrer",children:["Nan",s.jsx("span",{children:"t"}),"ungga Put",s.jsx("span",{children:"r"}),"a"]})," ","| ©2024"]})]})}),s.jsx("div",{className:"foot",children:s.jsxs("div",{className:"foot-menu",children:[s.jsxs("div",{className:"left-menu",children:[s.jsxs("div",{children:[s.jsx("h2",{children:s.jsxs("a",{href:"https://nantunggaputra.github.io/HTML/",target:"_blank",rel:"noopener noreferrer",children:["WEB",s.jsx("wbr",{}),"DEVELOPER"]})}),s.jsxs("small",{style:{textTransform:"none",color:"#767676",cursor:"text"},children:["anggunnantunggaputra",s.jsx("wbr",{}),"@gmail.com"]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("p",{children:s.jsx("a",{href:"#home",children:"Home"})}),s.jsx("p",{children:s.jsx("a",{href:"#search-container",children:"Search"})}),s.jsx("p",{children:s.jsx("a",{href:"#favorite",children:"Favorite"})}),s.jsx("p",{children:s.jsx("a",{href:"#featured",children:"Featured"})}),s.jsx("p",{children:s.jsx("a",{href:"#legacy",children:"Sunday Morning TV"})}),s.jsx("p",{children:s.jsx("a",{href:"#category",children:"Category"})}),s.jsx("p",{children:s.jsx("a",{href:"#masterpiece",children:"Studio Masterpiece"})}),s.jsx("p",{children:s.jsx("a",{href:"#genre",children:"Genre"})}),s.jsx("p",{children:s.jsx("a",{href:"#recent",children:"Trailer"})}),s.jsx("p",{children:s.jsx("a",{href:"#magazine",children:"Magazine"})})]}),s.jsxs("div",{children:[s.jsx("p",{children:s.jsx("a",{href:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/README.md",target:"_blank",rel:"noopener noreferrer",children:"About Us"})}),s.jsx("p",{children:s.jsx("a",{href:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/CONTACT.md",target:"_blank",rel:"noopener noreferrer",children:"Contact Us"})}),s.jsx("p",{className:"fs",children:s.jsx("a",{href:"https://titipjepang.com/?s=fans+screening&id=125306&post_type=post",target:"_blank",rel:"noopener noreferrer",children:"Fans Screening"})}),s.jsx("p",{className:"afa",children:s.jsx("a",{href:"https://animefestival.asia/afaid24/",target:"_blank",rel:"noopener noreferrer",children:"Anime Festival Asia (ID)"})}),s.jsx("p",{className:"alt",children:s.jsx("a",{href:"https://myanimelist.net/",target:"_blank",rel:"noopener noreferrer",children:"Anime List"})}),s.jsx("p",{className:"ast",children:s.jsx("a",{href:"https://www.bilibili.tv/id",target:"_blank",rel:"noopener noreferrer",children:"Anime Streaming"})}),s.jsx("p",{children:s.jsx("a",{href:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/RIGHTS.md",target:"_blank",rel:"noopener noreferrer",children:"Terms & Conditions"})}),s.jsx("p",{children:s.jsx("a",{href:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/PRIVACY_POLICY.md",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})}),s.jsx("p",{children:"WeeBoo from Anime-App"}),s.jsx("p",{children:"WeeBoo × Detective Conan"})]})]}),s.jsx("div",{className:"right-menu",children:s.jsxs("form",{onSubmit:n,children:[s.jsx("label",{htmlFor:"subs",children:s.jsx("p",{style:{fontSize:"1.4rem",textTransform:"none",letterSpacing:"1.14px",margin:"0.4rem 0",cursor:"pointer"},children:"Subscribe to anime newsletter"})}),s.jsx("input",{type:"email",id:"subs",required:!0}),s.jsxs("button",{type:"submit",title:"Subscribe",onClick:r,children:["🔔",s.jsx("img",{src:"Kaito Kid Logo 3D.webp",alt:""})]})]})})]})}),e&&s.jsx("div",{className:"lights"}),s.jsx("div",{className:"share",children:s.jsx(Ae,{itemKey:"share-button",titleOn:"Copied to clipboard",titleOff:"Share",state:i,toggleState:l,iconOn:"✓",iconOff:"⌗"})}),s.jsx("div",{className:"donation",children:s.jsx(Ae,{itemKey:"donation-button",titleOn:"",titleOff:"",url:"https://trakteer.id/nantunggaputra",target:"_blank",titleLink:"Donation",iconLink:"⛁"})}),s.jsx("div",{className:"pocket",children:s.jsx(Ae,{itemKey:"pocket-button",titleOn:"",titleOff:"",url:"https://contra.com/nantungga_putra_f5y67v1g",target:"_blank",titleLink:"Freelance",iconLink:"✦"})}),s.jsx("div",{className:"gototop",children:s.jsx(Ae,{itemKey:"top-button",titleOn:"",titleOff:"",url:"#",titleLink:"Go to top",iconLink:"⥣"})})]})}function I1(){return s.jsxs("div",{className:"loading-page",children:[s.jsx("h1",{}),s.jsx("audio",{src:"There is Always Only One Truth.aac",autoPlay:!0})]})}function M1(){const e=[{mal_id:"No Data",title:"Minna-san? What is the best anime for you?",year:2024,image:"https://cdn.myanimelist.net/images/anime/7/75199.jpg"}],[t,n]=S.useState(e),[r,i]=S.useState(null),o=async a=>{try{const u=await Yp(a);return n(u),i(u[0]),u}catch(u){return console.error("Error fetching data:",u),alert(`${u}
Minna-san! An error occurred in the result data. Please enter the correct title or try again later.`),window.location.reload(),[]}},l=a=>{i(a)};return s.jsxs(s.Fragment,{children:[s.jsx(Qp,{}),s.jsx(Xp,{}),s.jsx(rm,{fetchAnime:o}),s.jsx(f1,{animes:t,fetchAnime:o,selectedAnime:r,onSelectedAnime:l}),s.jsx(S1,{}),s.jsx(j1,{}),s.jsx(R1,{})]})}function $1(){const[e,t]=S.useState(!0);return S.useEffect(()=>{const n=setTimeout(()=>{t(!1)},4e3);return()=>clearTimeout(n)},[]),s.jsxs(s.Fragment,{children:[e&&s.jsx(I1,{}),!e&&s.jsx(M1,{})]})}el.createRoot(document.getElementById("root")).render(s.jsx(Fu.StrictMode,{children:s.jsx($1,{})}));
