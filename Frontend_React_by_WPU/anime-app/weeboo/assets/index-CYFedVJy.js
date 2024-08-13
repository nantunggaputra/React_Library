function gd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _u={exports:{}},$i={},Pu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),vd=Symbol.for("react.portal"),xd=Symbol.for("react.fragment"),wd=Symbol.for("react.strict_mode"),Sd=Symbol.for("react.profiler"),kd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Ed=Symbol.for("react.suspense"),Nd=Symbol.for("react.memo"),_d=Symbol.for("react.lazy"),oa=Symbol.iterator;function Pd(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,zu={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=zu,this.updater=n||Tu}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ou(){}Ou.prototype=Nn.prototype;function bo(e,t,n){this.props=e,this.context=t,this.refs=zu,this.updater=n||Tu}var es=bo.prototype=new Ou;es.constructor=bo;Lu(es,Nn.prototype);es.isPureReactComponent=!0;var sa=Array.isArray,Ru=Object.prototype.hasOwnProperty,ts={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Ru.call(t,r)&&!Iu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sr,type:e,key:l,ref:o,props:i,_owner:ts.current}}function Td(e,t){return{$$typeof:Sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ns(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function Ld(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var aa=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ld(""+e.key):t.toString(36)}function Zr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Sr:case vd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Cl(o,0):r,sa(i)?(n="",e!=null&&(n=e.replace(aa,"$&/")+"/"),Zr(i,t,n,"",function(c){return c})):i!=null&&(ns(i)&&(i=Td(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(aa,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",sa(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Cl(l,a);o+=Zr(l,t,n,u,i)}else if(u=Pd(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Cl(l,a++),o+=Zr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Tr(e,t,n){if(e==null)return e;var r=[],i=0;return Zr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Jr={transition:null},Od={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Jr,ReactCurrentOwner:ts};function $u(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!ns(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Nn;I.Fragment=xd;I.Profiler=Sd;I.PureComponent=bo;I.StrictMode=wd;I.Suspense=Ed;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od;I.act=$u;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=ts.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ru.call(t,u)&&!Iu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Sr,type:e.type,key:i,ref:l,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kd,_context:e},e.Consumer=e};I.createElement=Mu;I.createFactory=function(e){var t=Mu.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Cd,render:e}};I.isValidElement=ns;I.lazy=function(e){return{$$typeof:_d,_payload:{_status:-1,_result:e},_init:zd}};I.memo=function(e,t){return{$$typeof:Nd,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Jr.transition;Jr.transition={};try{e()}finally{Jr.transition=t}};I.unstable_act=$u;I.useCallback=function(e,t){return ve.current.useCallback(e,t)};I.useContext=function(e){return ve.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};I.useEffect=function(e,t){return ve.current.useEffect(e,t)};I.useId=function(){return ve.current.useId()};I.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ve.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};I.useRef=function(e){return ve.current.useRef(e)};I.useState=function(e){return ve.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ve.current.useTransition()};I.version="18.3.1";Pu.exports=I;var S=Pu.exports;const Au=yd(S),ua=gd({__proto__:null,default:Au},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=S,Id=Symbol.for("react.element"),Md=Symbol.for("react.fragment"),$d=Object.prototype.hasOwnProperty,Ad=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fd={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)$d.call(t,r)&&!Fd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Id,type:e,key:l,ref:o,props:i,_owner:Ad.current}}$i.Fragment=Md;$i.jsx=Fu;$i.jsxs=Fu;_u.exports=$i;var s=_u.exports,ql={},Du={exports:{}},Oe={},Bu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var R=T.length;T.push(z);e:for(;0<R;){var Z=R-1>>>1,ne=T[Z];if(0<i(ne,z))T[Z]=z,T[R]=ne,R=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],R=T.pop();if(R!==z){T[0]=R;e:for(var Z=0,ne=T.length,_r=ne>>>1;Z<_r;){var Mt=2*(Z+1)-1,jl=T[Mt],$t=Mt+1,Pr=T[$t];if(0>i(jl,R))$t<ne&&0>i(Pr,jl)?(T[Z]=Pr,T[$t]=R,Z=$t):(T[Z]=jl,T[Mt]=R,Z=Mt);else if($t<ne&&0>i(Pr,R))T[Z]=Pr,T[$t]=R,Z=$t;else break e}}return z}function i(T,z){var R=T.sortIndex-z.sortIndex;return R!==0?R:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],m=1,h=null,g=3,w=!1,v=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=T)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function x(T){if(y=!1,p(T),!v)if(n(u)!==null)v=!0,Sl(E);else{var z=n(c);z!==null&&kl(x,z.startTime-T)}}function E(T,z){v=!1,y&&(y=!1,d(L),L=-1),w=!0;var R=g;try{for(p(z),h=n(u);h!==null&&(!(h.expirationTime>z)||T&&!Ue());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,g=h.priorityLevel;var ne=Z(h.expirationTime<=z);z=e.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(u)&&r(u),p(z)}else r(u);h=n(u)}if(h!==null)var _r=!0;else{var Mt=n(c);Mt!==null&&kl(x,Mt.startTime-z),_r=!1}return _r}finally{h=null,g=R,w=!1}}var N=!1,j=null,L=-1,U=5,O=-1;function Ue(){return!(e.unstable_now()-O<U)}function Ln(){if(j!==null){var T=e.unstable_now();O=T;var z=!0;try{z=j(!0,T)}finally{z?zn():(N=!1,j=null)}}else N=!1}var zn;if(typeof f=="function")zn=function(){f(Ln)};else if(typeof MessageChannel<"u"){var la=new MessageChannel,hd=la.port2;la.port1.onmessage=Ln,zn=function(){hd.postMessage(null)}}else zn=function(){P(Ln,0)};function Sl(T){j=T,N||(N=!0,zn())}function kl(T,z){L=P(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Sl(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var R=g;g=z;try{return T()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=g;g=T;try{return z()}finally{g=R}},e.unstable_scheduleCallback=function(T,z,R){var Z=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Z+R:Z):R=Z,T){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=R+ne,T={id:m++,callback:z,priorityLevel:T,startTime:R,expirationTime:ne,sortIndex:-1},R>Z?(T.sortIndex=R,t(c,T),n(u)===null&&T===n(c)&&(y?(d(L),L=-1):y=!0,kl(x,R-Z))):(T.sortIndex=ne,t(u,T),v||w||(v=!0,Sl(E))),T},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(T){var z=g;return function(){var R=g;g=z;try{return T.apply(this,arguments)}finally{g=R}}}})(Vu);Bu.exports=Vu;var Dd=Bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd=S,ze=Dd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uu=new Set,er={};function Gt(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(er[e]=t,e=0;e<t.length;e++)Uu.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,Vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ca={},fa={};function Ud(e){return bl.call(fa,e)?!0:bl.call(ca,e)?!1:Vd.test(e)?fa[e]=!0:(ca[e]=!0,!1)}function Wd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hd(e,t,n,r){if(t===null||typeof t>"u"||Wd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var rs=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(rs,is);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(rs,is);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(rs,is);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ls(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hd(t,n,i,r)&&(n=null),r||i===null?Ud(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),os=Symbol.for("react.strict_mode"),eo=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),ss=Symbol.for("react.forward_ref"),to=Symbol.for("react.suspense"),no=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),da=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,El;function Vn(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Nl=!1;function _l(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vn(e):""}function Yd(e){switch(e.tag){case 5:return Vn(e.type);case 16:return Vn("Lazy");case 13:return Vn("Suspense");case 19:return Vn("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case qt:return"Portal";case eo:return"Profiler";case os:return"StrictMode";case to:return"Suspense";case no:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:ro(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return ro(e(t))}catch{}}return null}function Qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ro(t);case 8:return t===os?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kd(e){var t=Qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Kd(e))}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function io(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&ls(e,"checked",t,!1)}function lo(e,t){Xu(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oo(e,t.type,n):t.hasOwnProperty("defaultValue")&&oo(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oo(e,t,n){(t!=="number"||fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function so(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ha(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Un(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function Gu(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Or,Ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Or=Or||document.createElement("div"),Or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xd=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){Xd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function qu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function bu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(e,t){if(t){if(Gd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,dn=null,pn=null;function ya(e){if(e=Cr(e)){if(typeof po!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Vi(t),po(e.stateNode,e.type,t))}}function ec(e){dn?pn?pn.push(e):pn=[e]:dn=e}function tc(){if(dn){var e=dn,t=pn;if(pn=dn=null,ya(e),t)for(e=0;e<t.length;e++)ya(t[e])}}function nc(e,t){return e(t)}function rc(){}var Pl=!1;function ic(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return nc(e,t,n)}finally{Pl=!1,(dn!==null||pn!==null)&&(rc(),tc())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var mo=!1;if(ct)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){mo=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{mo=!1}function Zd(e,t,n,r,i,l,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Qn=!1,di=null,pi=!1,ho=null,Jd={onError:function(e){Qn=!0,di=e}};function qd(e,t,n,r,i,l,o,a,u){Qn=!1,di=null,Zd.apply(Jd,arguments)}function bd(e,t,n,r,i,l,o,a,u){if(qd.apply(this,arguments),Qn){if(Qn){var c=di;Qn=!1,di=null}else throw Error(k(198));pi||(pi=!0,ho=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function va(e){if(Zt(e)!==e)throw Error(k(188))}function e0(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return va(i),e;if(l===r)return va(i),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function oc(e){return e=e0(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var ac=ze.unstable_scheduleCallback,xa=ze.unstable_cancelCallback,t0=ze.unstable_shouldYield,n0=ze.unstable_requestPaint,J=ze.unstable_now,r0=ze.unstable_getCurrentPriorityLevel,cs=ze.unstable_ImmediatePriority,uc=ze.unstable_UserBlockingPriority,mi=ze.unstable_NormalPriority,i0=ze.unstable_LowPriority,cc=ze.unstable_IdlePriority,Ai=null,tt=null;function l0(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:a0,o0=Math.log,s0=Math.LN2;function a0(e){return e>>>=0,e===0?32:31-(o0(e)/s0|0)|0}var Rr=64,Ir=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Wn(a):(l&=o,l!==0&&(r=Wn(l)))}else o=n&~i,o!==0?r=Wn(o):l!==0&&(r=Wn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function u0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ke(l),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=u0(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=Rr;return Rr<<=1,!(Rr&4194240)&&(Rr=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function f0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function fs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pc,ds,mc,hc,gc,yo=!1,Mr=[],kt=null,jt=null,Ct=null,rr=new Map,ir=new Map,vt=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wa(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function In(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Cr(t),t!==null&&ds(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function p0(e,t,n,r,i){switch(t){case"focusin":return kt=In(kt,e,t,n,r,i),!0;case"dragenter":return jt=In(jt,e,t,n,r,i),!0;case"mouseover":return Ct=In(Ct,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return rr.set(l,In(rr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,ir.set(l,In(ir.get(l)||null,e,t,n,r,i)),!0}return!1}function yc(e){var t=Dt(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,gc(e.priority,function(){mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fo=r,n.target.dispatchEvent(r),fo=null}else return t=Cr(n),t!==null&&ds(t),e.blockedOn=n,!1;t.shift()}return!0}function Sa(e,t,n){qr(e)&&n.delete(t)}function m0(){yo=!1,kt!==null&&qr(kt)&&(kt=null),jt!==null&&qr(jt)&&(jt=null),Ct!==null&&qr(Ct)&&(Ct=null),rr.forEach(Sa),ir.forEach(Sa)}function Mn(e,t){e.blockedOn===t&&(e.blockedOn=null,yo||(yo=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,m0)))}function lr(e){function t(i){return Mn(i,e)}if(0<Mr.length){Mn(Mr[0],e);for(var n=1;n<Mr.length;n++){var r=Mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Mn(kt,e),jt!==null&&Mn(jt,e),Ct!==null&&Mn(Ct,e),rr.forEach(t),ir.forEach(t),n=0;n<vt.length;n++)r=vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vt.length&&(n=vt[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&vt.shift()}var mn=mt.ReactCurrentBatchConfig,gi=!0;function h0(e,t,n,r){var i=F,l=mn.transition;mn.transition=null;try{F=1,ps(e,t,n,r)}finally{F=i,mn.transition=l}}function g0(e,t,n,r){var i=F,l=mn.transition;mn.transition=null;try{F=4,ps(e,t,n,r)}finally{F=i,mn.transition=l}}function ps(e,t,n,r){if(gi){var i=vo(e,t,n,r);if(i===null)Dl(e,t,r,yi,n),wa(e,r);else if(p0(i,e,t,n,r))r.stopPropagation();else if(wa(e,r),t&4&&-1<d0.indexOf(e)){for(;i!==null;){var l=Cr(i);if(l!==null&&pc(l),l=vo(e,t,n,r),l===null&&Dl(e,t,r,yi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var yi=null;function vo(e,t,n,r){if(yi=null,e=us(r),e=Dt(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yi=e,null}function vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r0()){case cs:return 1;case uc:return 4;case mi:case i0:return 16;case cc:return 536870912;default:return 16}default:return 16}}var wt=null,ms=null,br=null;function xc(){if(br)return br;var e,t=ms,n=t.length,r,i="value"in wt?wt.value:wt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return br=i.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function ka(){return!1}function Re(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?$r:ka,this.isPropagationStopped=ka,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hs=Re(_n),jr=X({},_n,{view:0,detail:0}),y0=Re(jr),Ll,zl,$n,Fi=X({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ll=e.screenX-$n.screenX,zl=e.screenY-$n.screenY):zl=Ll=0,$n=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),ja=Re(Fi),v0=X({},Fi,{dataTransfer:0}),x0=Re(v0),w0=X({},jr,{relatedTarget:0}),Ol=Re(w0),S0=X({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=Re(S0),j0=X({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C0=Re(j0),E0=X({},_n,{data:0}),Ca=Re(E0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P0[e])?!!t[e]:!1}function gs(){return T0}var L0=X({},jr,{key:function(e){if(e.key){var t=N0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),z0=Re(L0),O0=X({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=Re(O0),R0=X({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),I0=Re(R0),M0=X({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=Re(M0),A0=X({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F0=Re(A0),D0=[9,13,27,32],ys=ct&&"CompositionEvent"in window,Kn=null;ct&&"documentMode"in document&&(Kn=document.documentMode);var B0=ct&&"TextEvent"in window&&!Kn,wc=ct&&(!ys||Kn&&8<Kn&&11>=Kn),Na=" ",_a=!1;function Sc(e,t){switch(e){case"keyup":return D0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function V0(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(_a=!0,Na);case"textInput":return e=t.data,e===Na&&_a?null:e;default:return null}}function U0(e,t){if(en)return e==="compositionend"||!ys&&Sc(e,t)?(e=xc(),br=ms=wt=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wc&&t.locale!=="ko"?null:t.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!W0[e.type]:t==="textarea"}function jc(e,t,n,r){ec(r),t=vi(t,"onChange"),0<t.length&&(n=new hs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,or=null;function H0(e){Ic(e,0)}function Di(e){var t=rn(e);if(Ku(t))return e}function Y0(e,t){if(e==="change")return t}var Cc=!1;if(ct){var Rl;if(ct){var Il="oninput"in document;if(!Il){var Ta=document.createElement("div");Ta.setAttribute("oninput","return;"),Il=typeof Ta.oninput=="function"}Rl=Il}else Rl=!1;Cc=Rl&&(!document.documentMode||9<document.documentMode)}function La(){Xn&&(Xn.detachEvent("onpropertychange",Ec),or=Xn=null)}function Ec(e){if(e.propertyName==="value"&&Di(or)){var t=[];jc(t,or,e,us(e)),ic(H0,t)}}function Q0(e,t,n){e==="focusin"?(La(),Xn=t,or=n,Xn.attachEvent("onpropertychange",Ec)):e==="focusout"&&La()}function K0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(or)}function X0(e,t){if(e==="click")return Di(t)}function G0(e,t){if(e==="input"||e==="change")return Di(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Z0;function sr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bl.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oa(e,t){var n=za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=za(n)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fi(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function J0(e){var t=_c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nc(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Oa(n,l);var o=Oa(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q0=ct&&"documentMode"in document&&11>=document.documentMode,tn=null,xo=null,Gn=null,wo=!1;function Ra(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wo||tn==null||tn!==fi(r)||(r=tn,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&sr(Gn,r)||(Gn=r,r=vi(xo,"onSelect"),0<r.length&&(t=new hs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Ml={},Pc={};ct&&(Pc=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Bi(e){if(Ml[e])return Ml[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pc)return Ml[e]=t[n];return e}var Tc=Bi("animationend"),Lc=Bi("animationiteration"),zc=Bi("animationstart"),Oc=Bi("transitionend"),Rc=new Map,Ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Rc.set(e,t),Gt(t,[e])}for(var $l=0;$l<Ia.length;$l++){var Al=Ia[$l],b0=Al.toLowerCase(),ep=Al[0].toUpperCase()+Al.slice(1);Ot(b0,"on"+ep)}Ot(Tc,"onAnimationEnd");Ot(Lc,"onAnimationIteration");Ot(zc,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Oc,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function Ma(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bd(r,t,void 0,e),e.currentTarget=null}function Ic(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;Ma(i,a,c),l=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;Ma(i,a,c),l=u}}}if(pi)throw e=ho,pi=!1,ho=null,e}function W(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(Mc(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),Mc(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Fr]){e[Fr]=!0,Uu.forEach(function(n){n!=="selectionchange"&&(tp.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,Fl("selectionchange",!1,t))}}function Mc(e,t,n,r){switch(vc(t)){case 1:var i=h0;break;case 4:i=g0;break;default:i=ps}n=i.bind(null,t,n,e),i=void 0,!mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Dt(a),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}a=a.parentNode}}r=r.return}ic(function(){var c=l,m=us(n),h=[];e:{var g=Rc.get(e);if(g!==void 0){var w=hs,v=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":w=z0;break;case"focusin":v="focus",w=Ol;break;case"focusout":v="blur",w=Ol;break;case"beforeblur":case"afterblur":w=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=I0;break;case Tc:case Lc:case zc:w=k0;break;case Oc:w=$0;break;case"scroll":w=y0;break;case"wheel":w=F0;break;case"copy":case"cut":case"paste":w=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ea}var y=(t&4)!==0,P=!y&&e==="scroll",d=y?g!==null?g+"Capture":null:g;y=[];for(var f=c,p;f!==null;){p=f;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,d!==null&&(x=nr(f,d),x!=null&&y.push(ur(f,x,p)))),P)break;f=f.return}0<y.length&&(g=new w(g,v,null,n,m),h.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==fo&&(v=n.relatedTarget||n.fromElement)&&(Dt(v)||v[ft]))break e;if((w||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?Dt(v):null,v!==null&&(P=Zt(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(y=ja,x="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ea,x="onPointerLeave",d="onPointerEnter",f="pointer"),P=w==null?g:rn(w),p=v==null?g:rn(v),g=new y(x,f+"leave",w,n,m),g.target=P,g.relatedTarget=p,x=null,Dt(m)===c&&(y=new y(d,f+"enter",v,n,m),y.target=p,y.relatedTarget=P,x=y),P=x,w&&v)t:{for(y=w,d=v,f=0,p=y;p;p=Jt(p))f++;for(p=0,x=d;x;x=Jt(x))p++;for(;0<f-p;)y=Jt(y),f--;for(;0<p-f;)d=Jt(d),p--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break t;y=Jt(y),d=Jt(d)}y=null}else y=null;w!==null&&$a(h,g,w,y,!1),v!==null&&P!==null&&$a(h,P,v,y,!0)}}e:{if(g=c?rn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=Y0;else if(Pa(g))if(Cc)E=G0;else{E=K0;var N=Q0}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=X0);if(E&&(E=E(e,c))){jc(h,E,n,m);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&oo(g,"number",g.value)}switch(N=c?rn(c):window,e){case"focusin":(Pa(N)||N.contentEditable==="true")&&(tn=N,xo=c,Gn=null);break;case"focusout":Gn=xo=tn=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,Ra(h,n,m);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":Ra(h,n,m)}var j;if(ys)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else en?Sc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(wc&&n.locale!=="ko"&&(en||L!=="onCompositionStart"?L==="onCompositionEnd"&&en&&(j=xc()):(wt=m,ms="value"in wt?wt.value:wt.textContent,en=!0)),N=vi(c,L),0<N.length&&(L=new Ca(L,e,null,n,m),h.push({event:L,listeners:N}),j?L.data=j:(j=kc(n),j!==null&&(L.data=j)))),(j=B0?V0(e,n):U0(e,n))&&(c=vi(c,"onBeforeInput"),0<c.length&&(m=new Ca("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=j))}Ic(h,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=nr(e,n),l!=null&&r.unshift(ur(e,l,i)),l=nr(e,t),l!=null&&r.push(ur(e,l,i))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $a(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=nr(n,l),u!=null&&o.unshift(ur(n,u,a))):i||(u=nr(n,l),u!=null&&o.push(ur(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var np=/\r\n?/g,rp=/\u0000|\uFFFD/g;function Aa(e){return(typeof e=="string"?e:""+e).replace(np,`
`).replace(rp,"")}function Dr(e,t,n){if(t=Aa(t),Aa(e)!==t&&n)throw Error(k(425))}function xi(){}var So=null,ko=null;function jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,ip=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,lp=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(op)}:Co;function op(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);lr(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),et="__reactFiber$"+Pn,cr="__reactProps$"+Pn,ft="__reactContainer$"+Pn,Eo="__reactEvents$"+Pn,sp="__reactListeners$"+Pn,ap="__reactHandles$"+Pn;function Dt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Da(e);e!==null;){if(n=e[et])return n;e=Da(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[et]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Vi(e){return e[cr]||null}var No=[],ln=-1;function Rt(e){return{current:e}}function H(e){0>ln||(e.current=No[ln],No[ln]=null,ln--)}function V(e,t){ln++,No[ln]=e.current,e.current=t}var zt={},he=Rt(zt),ke=Rt(!1),Ht=zt;function xn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function wi(){H(ke),H(he)}function Ba(e,t,n){if(he.current!==zt)throw Error(k(168));V(he,t),V(ke,n)}function $c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Qd(e)||"Unknown",i));return X({},n,r)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Ht=he.current,V(he,e),V(ke,ke.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=$c(e,t,Ht),r.__reactInternalMemoizedMergedChildContext=e,H(ke),H(he),V(he,e)):H(ke),V(ke,n)}var lt=null,Ui=!1,Vl=!1;function Ac(e){lt===null?lt=[e]:lt.push(e)}function up(e){Ui=!0,Ac(e)}function It(){if(!Vl&&lt!==null){Vl=!0;var e=0,t=F;try{var n=lt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Ui=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),ac(cs,It),i}finally{F=t,Vl=!1}}return null}var on=[],sn=0,ki=null,ji=0,Me=[],$e=0,Yt=null,st=1,at="";function At(e,t){on[sn++]=ji,on[sn++]=ki,ki=e,ji=t}function Fc(e,t,n){Me[$e++]=st,Me[$e++]=at,Me[$e++]=Yt,Yt=e;var r=st;e=at;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var l=32-Ke(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,st=1<<32-Ke(t)+i|n<<i|r,at=l+e}else st=1<<l|n<<i|r,at=e}function xs(e){e.return!==null&&(At(e,1),Fc(e,1,0))}function ws(e){for(;e===ki;)ki=on[--sn],on[sn]=null,ji=on[--sn],on[sn]=null;for(;e===Yt;)Yt=Me[--$e],Me[$e]=null,at=Me[--$e],Me[$e]=null,st=Me[--$e],Me[$e]=null}var Te=null,Pe=null,Y=!1,Qe=null;function Dc(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ua(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Pe=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yt!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Pe=null,!0):!1;default:return!1}}function _o(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Po(e){if(Y){var t=Pe;if(t){var n=t;if(!Ua(e,t)){if(_o(e))throw Error(k(418));t=Et(n.nextSibling);var r=Te;t&&Ua(e,t)?Dc(r,n):(e.flags=e.flags&-4097|2,Y=!1,Te=e)}}else{if(_o(e))throw Error(k(418));e.flags=e.flags&-4097|2,Y=!1,Te=e}}}function Wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Br(e){if(e!==Te)return!1;if(!Y)return Wa(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jo(e.type,e.memoizedProps)),t&&(t=Pe)){if(_o(e))throw Bc(),Error(k(418));for(;t;)Dc(e,t),t=Et(t.nextSibling)}if(Wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Te?Et(e.stateNode.nextSibling):null;return!0}function Bc(){for(var e=Pe;e;)e=Et(e.nextSibling)}function wn(){Pe=Te=null,Y=!1}function Ss(e){Qe===null?Qe=[e]:Qe.push(e)}var cp=mt.ReactCurrentBatchConfig;function An(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Vr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ha(e){var t=e._init;return t(e._payload)}function Vc(e){function t(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=Tt(d,f),d.index=0,d.sibling=null,d}function l(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,f,p,x){return f===null||f.tag!==6?(f=Xl(p,d.mode,x),f.return=d,f):(f=i(f,p),f.return=d,f)}function u(d,f,p,x){var E=p.type;return E===bt?m(d,f,p.props.children,x,p.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gt&&Ha(E)===f.type)?(x=i(f,p.props),x.ref=An(d,f,p),x.return=d,x):(x=si(p.type,p.key,p.props,null,d.mode,x),x.ref=An(d,f,p),x.return=d,x)}function c(d,f,p,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Gl(p,d.mode,x),f.return=d,f):(f=i(f,p.children||[]),f.return=d,f)}function m(d,f,p,x,E){return f===null||f.tag!==7?(f=Wt(p,d.mode,x,E),f.return=d,f):(f=i(f,p),f.return=d,f)}function h(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xl(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Lr:return p=si(f.type,f.key,f.props,null,d.mode,p),p.ref=An(d,null,f),p.return=d,p;case qt:return f=Gl(f,d.mode,p),f.return=d,f;case gt:var x=f._init;return h(d,x(f._payload),p)}if(Un(f)||On(f))return f=Wt(f,d.mode,p,null),f.return=d,f;Vr(d,f)}return null}function g(d,f,p,x){var E=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(d,f,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Lr:return p.key===E?u(d,f,p,x):null;case qt:return p.key===E?c(d,f,p,x):null;case gt:return E=p._init,g(d,f,E(p._payload),x)}if(Un(p)||On(p))return E!==null?null:m(d,f,p,x,null);Vr(d,p)}return null}function w(d,f,p,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(p)||null,a(f,d,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Lr:return d=d.get(x.key===null?p:x.key)||null,u(f,d,x,E);case qt:return d=d.get(x.key===null?p:x.key)||null,c(f,d,x,E);case gt:var N=x._init;return w(d,f,p,N(x._payload),E)}if(Un(x)||On(x))return d=d.get(p)||null,m(f,d,x,E,null);Vr(f,x)}return null}function v(d,f,p,x){for(var E=null,N=null,j=f,L=f=0,U=null;j!==null&&L<p.length;L++){j.index>L?(U=j,j=null):U=j.sibling;var O=g(d,j,p[L],x);if(O===null){j===null&&(j=U);break}e&&j&&O.alternate===null&&t(d,j),f=l(O,f,L),N===null?E=O:N.sibling=O,N=O,j=U}if(L===p.length)return n(d,j),Y&&At(d,L),E;if(j===null){for(;L<p.length;L++)j=h(d,p[L],x),j!==null&&(f=l(j,f,L),N===null?E=j:N.sibling=j,N=j);return Y&&At(d,L),E}for(j=r(d,j);L<p.length;L++)U=w(j,d,L,p[L],x),U!==null&&(e&&U.alternate!==null&&j.delete(U.key===null?L:U.key),f=l(U,f,L),N===null?E=U:N.sibling=U,N=U);return e&&j.forEach(function(Ue){return t(d,Ue)}),Y&&At(d,L),E}function y(d,f,p,x){var E=On(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var N=E=null,j=f,L=f=0,U=null,O=p.next();j!==null&&!O.done;L++,O=p.next()){j.index>L?(U=j,j=null):U=j.sibling;var Ue=g(d,j,O.value,x);if(Ue===null){j===null&&(j=U);break}e&&j&&Ue.alternate===null&&t(d,j),f=l(Ue,f,L),N===null?E=Ue:N.sibling=Ue,N=Ue,j=U}if(O.done)return n(d,j),Y&&At(d,L),E;if(j===null){for(;!O.done;L++,O=p.next())O=h(d,O.value,x),O!==null&&(f=l(O,f,L),N===null?E=O:N.sibling=O,N=O);return Y&&At(d,L),E}for(j=r(d,j);!O.done;L++,O=p.next())O=w(j,d,L,O.value,x),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?L:O.key),f=l(O,f,L),N===null?E=O:N.sibling=O,N=O);return e&&j.forEach(function(Ln){return t(d,Ln)}),Y&&At(d,L),E}function P(d,f,p,x){if(typeof p=="object"&&p!==null&&p.type===bt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Lr:e:{for(var E=p.key,N=f;N!==null;){if(N.key===E){if(E=p.type,E===bt){if(N.tag===7){n(d,N.sibling),f=i(N,p.props.children),f.return=d,d=f;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gt&&Ha(E)===N.type){n(d,N.sibling),f=i(N,p.props),f.ref=An(d,N,p),f.return=d,d=f;break e}n(d,N);break}else t(d,N);N=N.sibling}p.type===bt?(f=Wt(p.props.children,d.mode,x,p.key),f.return=d,d=f):(x=si(p.type,p.key,p.props,null,d.mode,x),x.ref=An(d,f,p),x.return=d,d=x)}return o(d);case qt:e:{for(N=p.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),f=i(f,p.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=Gl(p,d.mode,x),f.return=d,d=f}return o(d);case gt:return N=p._init,P(d,f,N(p._payload),x)}if(Un(p))return v(d,f,p,x);if(On(p))return y(d,f,p,x);Vr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,p),f.return=d,d=f):(n(d,f),f=Xl(p,d.mode,x),f.return=d,d=f),o(d)):n(d,f)}return P}var Sn=Vc(!0),Uc=Vc(!1),Ci=Rt(null),Ei=null,an=null,ks=null;function js(){ks=an=Ei=null}function Cs(e){var t=Ci.current;H(Ci),e._currentValue=t}function To(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){Ei=e,ks=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(Ei===null)throw Error(k(308));an=e,Ei.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Bt=null;function Es(e){Bt===null?Bt=[e]:Bt.push(e)}function Wc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Es(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,Es(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ni(e,t,n,r){var i=e.updateQueue;yt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?l=c:o.next=c,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(l!==null){var h=i.baseState;o=0,m=c=u=null,a=l;do{var g=a.lane,w=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(g=t,w=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(w,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(w,h,g):v,g==null)break e;h=X({},h,g);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=w,u=h):m=m.next=w,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Kt|=o,e.lanes=o,e.memoizedState=h}}function Qa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Er={},nt=Rt(Er),fr=Rt(Er),dr=Rt(Er);function Vt(e){if(e===Er)throw Error(k(174));return e}function _s(e,t){switch(V(dr,t),V(fr,e),V(nt,Er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ao(t,e)}H(nt),V(nt,t)}function kn(){H(nt),H(fr),H(dr)}function Yc(e){Vt(dr.current);var t=Vt(nt.current),n=ao(t,e.type);t!==n&&(V(fr,e),V(nt,n))}function Ps(e){fr.current===e&&(H(nt),H(fr))}var Q=Rt(0);function _i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Ts(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var ni=mt.ReactCurrentDispatcher,Wl=mt.ReactCurrentBatchConfig,Qt=0,K=null,ee=null,ie=null,Pi=!1,Zn=!1,pr=0,fp=0;function fe(){throw Error(k(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function zs(e,t,n,r,i,l){if(Qt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?hp:gp,e=n(r,i),Zn){l=0;do{if(Zn=!1,pr=0,25<=l)throw Error(k(301));l+=1,ie=ee=null,t.updateQueue=null,ni.current=yp,e=n(r,i)}while(Zn)}if(ni.current=Ti,t=ee!==null&&ee.next!==null,Qt=0,ie=ee=K=null,Pi=!1,t)throw Error(k(300));return e}function Os(){var e=pr!==0;return pr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function Be(){if(ee===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,ee=e;else{if(e===null)throw Error(k(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function mr(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,u=null,c=l;do{var m=c.lane;if((Qt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,K.lanes|=m,Kt|=m}c=c.next}while(c!==null&&c!==l);u===null?o=r:u.next=a,Ge(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,K.lanes|=l,Kt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ge(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Qc(){}function Kc(e,t){var n=K,r=Be(),i=t(),l=!Ge(r.memoizedState,i);if(l&&(r.memoizedState=i,Se=!0),r=r.queue,Rs(Zc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,hr(9,Gc.bind(null,n,r,i,t),void 0,null),le===null)throw Error(k(349));Qt&30||Xc(n,t,i)}return i}function Xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gc(e,t,n,r){t.value=n,t.getSnapshot=r,Jc(t)&&qc(e)}function Zc(e,t,n){return n(function(){Jc(t)&&qc(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function qc(e){var t=dt(e,1);t!==null&&Xe(t,e,1,-1)}function Ka(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=mp.bind(null,K,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bc(){return Be().memoizedState}function ri(e,t,n,r){var i=Je();K.flags|=e,i.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Wi(e,t,n,r){var i=Be();r=r===void 0?null:r;var l=void 0;if(ee!==null){var o=ee.memoizedState;if(l=o.destroy,r!==null&&Ls(r,o.deps)){i.memoizedState=hr(t,n,l,r);return}}K.flags|=e,i.memoizedState=hr(1|t,n,l,r)}function Xa(e,t){return ri(8390656,8,e,t)}function Rs(e,t){return Wi(2048,8,e,t)}function ef(e,t){return Wi(4,2,e,t)}function tf(e,t){return Wi(4,4,e,t)}function nf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rf(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4,4,nf.bind(null,t,e),n)}function Is(){}function lf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function of(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sf(e,t,n){return Qt&21?(Ge(n,t)||(n=fc(),K.lanes|=n,Kt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function dp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{F=n,Wl.transition=r}}function af(){return Be().memoizedState}function pp(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uf(e))cf(t,n);else if(n=Wc(e,t,n,r),n!==null){var i=ye();Xe(n,e,r,i),ff(n,t,r)}}function mp(e,t,n){var r=Pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uf(e))cf(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ge(a,o)){var u=t.interleaved;u===null?(i.next=i,Es(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Wc(e,t,i,r),n!==null&&(i=ye(),Xe(n,e,r,i),ff(n,t,r))}}function uf(e){var t=e.alternate;return e===K||t!==null&&t===K}function cf(e,t){Zn=Pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ff(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}var Ti={readContext:De,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},hp={readContext:De,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pp.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:Ka,useDebugValue:Is,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=Ka(!1),t=e[0];return e=dp.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Je();if(Y){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),le===null)throw Error(k(349));Qt&30||Xc(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Xa(Zc.bind(null,r,l,e),[e]),r.flags|=2048,hr(9,Gc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Je(),t=le.identifierPrefix;if(Y){var n=at,r=st;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gp={readContext:De,useCallback:lf,useContext:De,useEffect:Rs,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:of,useReducer:Hl,useRef:bc,useState:function(){return Hl(mr)},useDebugValue:Is,useDeferredValue:function(e){var t=Be();return sf(t,ee.memoizedState,e)},useTransition:function(){var e=Hl(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Kc,useId:af,unstable_isNewReconciler:!1},yp={readContext:De,useCallback:lf,useContext:De,useEffect:Rs,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:of,useReducer:Yl,useRef:bc,useState:function(){return Yl(mr)},useDebugValue:Is,useDeferredValue:function(e){var t=Be();return ee===null?t.memoizedState=e:sf(t,ee.memoizedState,e)},useTransition:function(){var e=Yl(mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Kc,useId:af,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Lo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hi={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Pt(e),l=ut(r,i);l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,i),t!==null&&(Xe(t,e,i,r),ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Pt(e),l=ut(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,i),t!==null&&(Xe(t,e,i,r),ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Pt(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,r),t!==null&&(Xe(t,e,r,n),ti(t,e,r))}};function Ga(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(i,l):!0}function df(e,t,n){var r=!1,i=zt,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(i=je(t)?Ht:he.current,r=t.contextTypes,l=(r=r!=null)?xn(e,i):zt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hi.enqueueReplaceState(t,t.state,null)}function zo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ns(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=De(l):(l=je(t)?Ht:he.current,i.context=xn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Lo(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hi.enqueueReplaceState(i,i.state,null),Ni(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",r=t;do n+=Yd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vp=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,Uo=r),Oo(e,t)},n}function mf(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oo(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Oo(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ja(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Op.bind(null,e,t,n),t.then(e,e))}function qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ba(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var xp=mt.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Uc(t,null,n,r):Sn(t,e.child,n,r)}function eu(e,t,n,r,i){n=n.render;var l=t.ref;return hn(t,i),r=zs(e,t,n,r,l,i),n=Os(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Y&&n&&xs(t),t.flags|=1,ge(e,t,r,i),t.child)}function tu(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Us(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,hf(e,t,l,r,i)):(e=si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(o,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Tt(l,r),e.ref=t.ref,e.return=t,t.child=e}function hf(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(sr(l,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,pt(e,t,i)}return Ro(e,t,n,r,i)}function gf(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(cn,_e),_e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(cn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,V(cn,_e),_e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,V(cn,_e),_e|=r;return ge(e,t,i,n),t.child}function yf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ro(e,t,n,r,i){var l=je(n)?Ht:he.current;return l=xn(t,l),hn(t,i),n=zs(e,t,n,r,l,i),r=Os(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Y&&r&&xs(t),t.flags|=1,ge(e,t,n,i),t.child)}function nu(e,t,n,r,i){if(je(n)){var l=!0;Si(t)}else l=!1;if(hn(t,i),t.stateNode===null)ii(e,t),df(t,n,r),zo(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=je(n)?Ht:he.current,c=xn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Za(t,o,r,c),yt=!1;var g=t.memoizedState;o.state=g,Ni(t,r,o,i),u=t.memoizedState,a!==r||g!==u||ke.current||yt?(typeof m=="function"&&(Lo(t,n,m,r),u=t.memoizedState),(a=yt||Ga(t,n,a,r,g,u,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Hc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:He(t.type,a),o.props=c,h=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=je(n)?Ht:he.current,u=xn(t,u));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==u)&&Za(t,o,r,u),yt=!1,g=t.memoizedState,o.state=g,Ni(t,r,o,i);var v=t.memoizedState;a!==h||g!==v||ke.current||yt?(typeof w=="function"&&(Lo(t,n,w,r),v=t.memoizedState),(c=yt||Ga(t,n,c,r,g,v,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Io(e,t,n,r,l,i)}function Io(e,t,n,r,i,l){yf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Va(t,n,!1),pt(e,t,l);r=t.stateNode,xp.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Sn(t,e.child,null,l),t.child=Sn(t,null,a,l)):ge(e,t,a,l),t.memoizedState=r.state,i&&Va(t,n,!0),t.child}function vf(e){var t=e.stateNode;t.pendingContext?Ba(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ba(e,t.context,!1),_s(e,t.containerInfo)}function ru(e,t,n,r,i){return wn(),Ss(i),t.flags|=256,ge(e,t,n,r),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function $o(e){return{baseLanes:e,cachePool:null,transitions:null}}function xf(e,t,n){var r=t.pendingProps,i=Q.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Q,i&1),e===null)return Po(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ki(o,r,0,null),e=Wt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=$o(n),t.memoizedState=Mo,e):Ms(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wp(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Tt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Tt(a,l):(l=Wt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?$o(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Mo,r}return l=e.child,e=l.sibling,r=Tt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ms(e,t){return t=Ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&Ss(r),Sn(t,e.child,null,n),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wp(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(k(422))),Ur(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ki({mode:"visible",children:r.children},i,0,null),l=Wt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Sn(t,e.child,null,o),t.child.memoizedState=$o(o),t.memoizedState=Mo,l);if(!(t.mode&1))return Ur(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(k(419)),r=Ql(l,r,void 0),Ur(e,t,o,r)}if(a=(o&e.childLanes)!==0,Se||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,dt(e,i),Xe(r,e,i,-1))}return Vs(),r=Ql(Error(k(421))),Ur(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Rp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Pe=Et(i.nextSibling),Te=t,Y=!0,Qe=null,e!==null&&(Me[$e++]=st,Me[$e++]=at,Me[$e++]=Yt,st=e.id,at=e.overflow,Yt=t),t=Ms(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),To(e.return,t,n)}function Kl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function wf(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ge(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_i(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_i(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kl(t,!0,n,null,l);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ii(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sp(e,t,n){switch(t.tag){case 3:vf(t),wn();break;case 5:Yc(t);break;case 1:je(t.type)&&Si(t);break;case 4:_s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Ci,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?xf(e,t,n):(V(Q,Q.current&1),e=pt(e,t,n),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,gf(e,t,n)}return pt(e,t,n)}var Sf,Ao,kf,jf;Sf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ao=function(){};kf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vt(nt.current);var l=null;switch(n){case"input":i=io(e,i),r=io(e,r),l=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":i=so(e,i),r=so(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xi)}uo(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kp(e,t,n){var r=t.pendingProps;switch(ws(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return je(t.type)&&wi(),de(t),null;case 3:return r=t.stateNode,kn(),H(ke),H(he),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Yo(Qe),Qe=null))),Ao(e,t),de(t),null;case 5:Ps(t);var i=Vt(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return de(t),null}if(e=Vt(nt.current),Br(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[et]=t,r[cr]=l,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Hn.length;i++)W(Hn[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":pa(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":ha(r,l),W("invalid",r)}uo(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Dr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Dr(r.textContent,a,e),i=["children",""+a]):er.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":zr(r),ma(r,l,!0);break;case"textarea":zr(r),ga(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=xi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[et]=t,e[cr]=r,Sf(e,t,!1,!1),t.stateNode=e;e:{switch(o=co(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hn.length;i++)W(Hn[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":pa(e,r),i=io(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),W("invalid",e);break;case"textarea":ha(e,r),i=so(e,r),W("invalid",e);break;default:i=r}uo(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?bu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ju(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&tr(e,u):typeof u=="number"&&tr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(er.hasOwnProperty(l)?u!=null&&l==="onScroll"&&W("scroll",e):u!=null&&ls(e,l,u,o))}switch(n){case"input":zr(e),ma(e,r,!1);break;case"textarea":zr(e),ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?fn(e,!!r.multiple,l,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Vt(dr.current),Vt(nt.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(l=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return de(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&t.mode&1&&!(t.flags&128))Bc(),wn(),t.flags|=98560,l=!1;else if(l=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[et]=t}else wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),l=!1}else Qe!==null&&(Yo(Qe),Qe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):Vs())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return kn(),Ao(e,t),e===null&&ar(t.stateNode.containerInfo),de(t),null;case 10:return Cs(t.type._context),de(t),null;case 17:return je(t.type)&&wi(),de(t),null;case 19:if(H(Q),l=t.memoizedState,l===null)return de(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Fn(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_i(e),o!==null){for(t.flags|=128,Fn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>Cn&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304)}else{if(!r)if(e=_i(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Y)return de(t),null}else 2*J()-l.renderingStartTime>Cn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=Q.current,V(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function jp(e,t){switch(ws(t),t.tag){case 1:return je(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(),H(ke),H(he),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ps(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return kn(),null;case 10:return Cs(t.type._context),null;case 22:case 23:return Bs(),null;case 24:return null;default:return null}}var Wr=!1,me=!1,Cp=typeof WeakSet=="function"?WeakSet:Set,_=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Fo(e,t,n){try{n()}catch(r){G(e,t,r)}}var lu=!1;function Ep(e,t){if(So=gi,e=_c(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var w;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==l||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)g=h,h=w;for(;;){if(h===e)break t;if(g===n&&++c===i&&(a=o),g===l&&++m===r&&(u=o),(w=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ko={focusedElem:e,selectionRange:n},gi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,P=v.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:He(t.type,y),P);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return v=lu,lu=!1,v}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Fo(t,n,l)}i=i.next}while(i!==r)}}function Yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Do(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cf(e){var t=e.alternate;t!==null&&(e.alternate=null,Cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[cr],delete t[Eo],delete t[sp],delete t[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ef(e){return e.tag===5||e.tag===3||e.tag===4}function ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(Bo(e,t,n),e=e.sibling;e!==null;)Bo(e,t,n),e=e.sibling}function Vo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vo(e,t,n),e=e.sibling;e!==null;)Vo(e,t,n),e=e.sibling}var se=null,Ye=!1;function ht(e,t,n){for(n=n.child;n!==null;)Nf(e,t,n),n=n.sibling}function Nf(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:me||un(n,t);case 6:var r=se,i=Ye;se=null,ht(e,t,n),se=r,Ye=i,se!==null&&(Ye?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Ye?(e=se,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),lr(e)):Bl(se,n.stateNode));break;case 4:r=se,i=Ye,se=n.stateNode.containerInfo,Ye=!0,ht(e,t,n),se=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Fo(n,t,o),i=i.next}while(i!==r)}ht(e,t,n);break;case 1:if(!me&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}ht(e,t,n);break;case 21:ht(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,ht(e,t,n),me=r):ht(e,t,n);break;default:ht(e,t,n)}}function su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cp),t.forEach(function(r){var i=Ip.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Ye=!1;break e;case 3:se=a.stateNode.containerInfo,Ye=!0;break e;case 4:se=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(se===null)throw Error(k(160));Nf(l,o,i),se=null,Ye=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}function _f(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Ze(e),r&4){try{Jn(3,e,e.return),Yi(3,e)}catch(y){G(e,e.return,y)}try{Jn(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:We(t,e),Ze(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(We(t,e),Ze(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var i=e.stateNode;try{tr(i,"")}catch(y){G(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Xu(i,l),co(a,o);var c=co(a,l);for(o=0;o<u.length;o+=2){var m=u[o],h=u[o+1];m==="style"?bu(i,h):m==="dangerouslySetInnerHTML"?Ju(i,h):m==="children"?tr(i,h):ls(i,m,h,c)}switch(a){case"input":lo(i,l);break;case"textarea":Gu(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?fn(i,!!l.multiple,w,!1):g!==!!l.multiple&&(l.defaultValue!=null?fn(i,!!l.multiple,l.defaultValue,!0):fn(i,!!l.multiple,l.multiple?[]:"",!1))}i[cr]=l}catch(y){G(e,e.return,y)}}break;case 6:if(We(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){G(e,e.return,y)}}break;case 3:if(We(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:We(t,e),Ze(e);break;case 13:We(t,e),Ze(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Fs=J())),r&4&&su(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||m,We(t,e),me=c):We(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(_=e,m=e.child;m!==null;){for(h=_=m;_!==null;){switch(g=_,w=g.child,g.tag){case 0:case 11:case 14:case 15:Jn(4,g,g.return);break;case 1:un(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){G(r,n,y)}}break;case 5:un(g,g.return);break;case 22:if(g.memoizedState!==null){uu(h);continue}}w!==null?(w.return=g,_=w):uu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qu("display",o))}catch(y){G(e,e.return,y)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){G(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(t,e),Ze(e),r&4&&su(e);break;case 21:break;default:We(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ef(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(tr(i,""),r.flags&=-33);var l=ou(e);Vo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ou(e);Bo(e,a,o);break;default:throw Error(k(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Np(e,t,n){_=e,Pf(e)}function Pf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wr;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||me;a=Wr;var c=me;if(Wr=o,(me=u)&&!c)for(_=i;_!==null;)o=_,u=o.child,o.tag===22&&o.memoizedState!==null?cu(i):u!==null?(u.return=o,_=u):cu(i);for(;l!==null;)_=l,Pf(l),l=l.sibling;_=i,Wr=a,me=c}au(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):au(e)}}function au(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Qa(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qa(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&lr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||t.flags&512&&Do(t)}catch(g){G(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function uu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function cu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yi(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var l=t.return;try{Do(t)}catch(u){G(t,l,u)}break;case 5:var o=t.return;try{Do(t)}catch(u){G(t,o,u)}}}catch(u){G(t,t.return,u)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var _p=Math.ceil,Li=mt.ReactCurrentDispatcher,$s=mt.ReactCurrentOwner,Fe=mt.ReactCurrentBatchConfig,M=0,le=null,b=null,ue=0,_e=0,cn=Rt(0),te=0,gr=null,Kt=0,Qi=0,As=0,qn=null,we=null,Fs=0,Cn=1/0,it=null,zi=!1,Uo=null,_t=null,Hr=!1,St=null,Oi=0,bn=0,Wo=null,li=-1,oi=0;function ye(){return M&6?J():li!==-1?li:li=J()}function Pt(e){return e.mode&1?M&2&&ue!==0?ue&-ue:cp.transition!==null?(oi===0&&(oi=fc()),oi):(e=F,e!==0||(e=window.event,e=e===void 0?16:vc(e.type)),e):1}function Xe(e,t,n,r){if(50<bn)throw bn=0,Wo=null,Error(k(185));kr(e,n,r),(!(M&2)||e!==le)&&(e===le&&(!(M&2)&&(Qi|=n),te===4&&xt(e,ue)),Ce(e,r),n===1&&M===0&&!(t.mode&1)&&(Cn=J()+500,Ui&&It()))}function Ce(e,t){var n=e.callbackNode;c0(e,t);var r=hi(e,e===le?ue:0);if(r===0)n!==null&&xa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xa(n),t===1)e.tag===0?up(fu.bind(null,e)):Ac(fu.bind(null,e)),lp(function(){!(M&6)&&It()}),n=null;else{switch(dc(r)){case 1:n=cs;break;case 4:n=uc;break;case 16:n=mi;break;case 536870912:n=cc;break;default:n=mi}n=$f(n,Tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tf(e,t){if(li=-1,oi=0,M&6)throw Error(k(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=hi(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ri(e,r);else{t=r;var i=M;M|=2;var l=zf();(le!==e||ue!==t)&&(it=null,Cn=J()+500,Ut(e,t));do try{Lp();break}catch(a){Lf(e,a)}while(!0);js(),Li.current=l,M=i,b!==null?t=0:(le=null,ue=0,t=te)}if(t!==0){if(t===2&&(i=go(e),i!==0&&(r=i,t=Ho(e,i))),t===1)throw n=gr,Ut(e,0),xt(e,r),Ce(e,J()),n;if(t===6)xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Pp(i)&&(t=Ri(e,r),t===2&&(l=go(e),l!==0&&(r=l,t=Ho(e,l))),t===1))throw n=gr,Ut(e,0),xt(e,r),Ce(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ft(e,we,it);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=Fs+500-J(),10<t)){if(hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Co(Ft.bind(null,e,we,it),t);break}Ft(e,we,it);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ke(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_p(r/1960))-r,10<r){e.timeoutHandle=Co(Ft.bind(null,e,we,it),r);break}Ft(e,we,it);break;case 5:Ft(e,we,it);break;default:throw Error(k(329))}}}return Ce(e,J()),e.callbackNode===n?Tf.bind(null,e):null}function Ho(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=we,we=n,t!==null&&Yo(t)),e}function Yo(e){we===null?we=e:we.push.apply(we,e)}function Pp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ge(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~As,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function fu(e){if(M&6)throw Error(k(327));gn();var t=hi(e,0);if(!(t&1))return Ce(e,J()),null;var n=Ri(e,t);if(e.tag!==0&&n===2){var r=go(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=gr,Ut(e,0),xt(e,t),Ce(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,we,it),Ce(e,J()),null}function Ds(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Cn=J()+500,Ui&&It())}}function Xt(e){St!==null&&St.tag===0&&!(M&6)&&gn();var t=M;M|=1;var n=Fe.transition,r=F;try{if(Fe.transition=null,F=1,e)return e()}finally{F=r,Fe.transition=n,M=t,!(M&6)&&It()}}function Bs(){_e=cn.current,H(cn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ip(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(ws(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:kn(),H(ke),H(he),Ts();break;case 5:Ps(r);break;case 4:kn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:Cs(r.type._context);break;case 22:case 23:Bs()}n=n.return}if(le=e,b=e=Tt(e.current,null),ue=_e=t,te=0,gr=null,As=Qi=Kt=0,we=qn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Bt=null}return e}function Lf(e,t){do{var n=b;try{if(js(),ni.current=Ti,Pi){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pi=!1}if(Qt=0,ie=ee=K=null,Zn=!1,pr=0,$s.current=null,n===null||n.return===null){te=1,gr=t,b=null;break}e:{var l=e,o=n.return,a=n,u=t;if(t=ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=qa(o);if(w!==null){w.flags&=-257,ba(w,o,a,l,t),w.mode&1&&Ja(l,c,t),t=w,u=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){Ja(l,c,t),Vs();break e}u=Error(k(426))}}else if(Y&&a.mode&1){var P=qa(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),ba(P,o,a,l,t),Ss(jn(u,a));break e}}l=u=jn(u,a),te!==4&&(te=2),qn===null?qn=[l]:qn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=pf(l,u,t);Ya(l,d);break e;case 1:a=u;var f=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(_t===null||!_t.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=mf(l,a,t);Ya(l,x);break e}}l=l.return}while(l!==null)}Rf(n)}catch(E){t=E,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function zf(){var e=Li.current;return Li.current=Ti,e===null?Ti:e}function Vs(){(te===0||te===3||te===2)&&(te=4),le===null||!(Kt&268435455)&&!(Qi&268435455)||xt(le,ue)}function Ri(e,t){var n=M;M|=2;var r=zf();(le!==e||ue!==t)&&(it=null,Ut(e,t));do try{Tp();break}catch(i){Lf(e,i)}while(!0);if(js(),M=n,Li.current=r,b!==null)throw Error(k(261));return le=null,ue=0,te}function Tp(){for(;b!==null;)Of(b)}function Lp(){for(;b!==null&&!t0();)Of(b)}function Of(e){var t=Mf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Rf(e):b=t,$s.current=null}function Rf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jp(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,b=null;return}}else if(n=kp(n,t,_e),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);te===0&&(te=5)}function Ft(e,t,n){var r=F,i=Fe.transition;try{Fe.transition=null,F=1,zp(e,t,n,r)}finally{Fe.transition=i,F=r}return null}function zp(e,t,n,r){do gn();while(St!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(f0(e,l),e===le&&(b=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,$f(mi,function(){return gn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var o=F;F=1;var a=M;M|=4,$s.current=null,Ep(e,n),_f(n,e),J0(ko),gi=!!So,ko=So=null,e.current=n,Np(n),n0(),M=a,F=o,Fe.transition=l}else e.current=n;if(Hr&&(Hr=!1,St=e,Oi=i),l=e.pendingLanes,l===0&&(_t=null),l0(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zi)throw zi=!1,e=Uo,Uo=null,e;return Oi&1&&e.tag!==0&&gn(),l=e.pendingLanes,l&1?e===Wo?bn++:(bn=0,Wo=e):bn=0,It(),null}function gn(){if(St!==null){var e=dc(Oi),t=Fe.transition,n=F;try{if(Fe.transition=null,F=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,Oi=0,M&6)throw Error(k(331));var i=M;for(M|=4,_=e.current;_!==null;){var l=_,o=l.child;if(_.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(_=c;_!==null;){var m=_;switch(m.tag){case 0:case 11:case 15:Jn(8,m,l)}var h=m.child;if(h!==null)h.return=m,_=h;else for(;_!==null;){m=_;var g=m.sibling,w=m.return;if(Cf(m),m===c){_=null;break}if(g!==null){g.return=w,_=g;break}_=w}}}var v=l.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}_=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,_=o;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Jn(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,_=d;break e}_=l.return}}var f=e.current;for(_=f;_!==null;){o=_;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,_=p;else e:for(o=f;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yi(9,a)}}catch(E){G(a,a.return,E)}if(a===o){_=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,_=x;break e}_=a.return}}if(M=i,It(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Ai,e)}catch{}r=!0}return r}finally{F=n,Fe.transition=t}}return!1}function du(e,t,n){t=jn(n,t),t=pf(e,t,1),e=Nt(e,t,1),t=ye(),e!==null&&(kr(e,1,t),Ce(e,t))}function G(e,t,n){if(e.tag===3)du(e,e,n);else for(;t!==null;){if(t.tag===3){du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=jn(n,e),e=mf(t,e,1),t=Nt(t,e,1),e=ye(),t!==null&&(kr(t,1,e),Ce(t,e));break}}t=t.return}}function Op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-Fs?Ut(e,0):As|=n),Ce(e,t)}function If(e,t){t===0&&(e.mode&1?(t=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):t=1);var n=ye();e=dt(e,t),e!==null&&(kr(e,t,n),Ce(e,n))}function Rp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),If(e,n)}function Ip(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),If(e,n)}var Mf;Mf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Sp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Y&&t.flags&1048576&&Fc(t,ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ii(e,t),e=t.pendingProps;var i=xn(t,he.current);hn(t,n),i=zs(null,t,r,e,i,n);var l=Os();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(l=!0,Si(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ns(t),i.updater=Hi,t.stateNode=i,i._reactInternals=t,zo(t,r,e,n),t=Io(null,t,r,!0,l,n)):(t.tag=0,Y&&l&&xs(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ii(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$p(r),e=He(r,e),i){case 0:t=Ro(null,t,r,e,n);break e;case 1:t=nu(null,t,r,e,n);break e;case 11:t=eu(null,t,r,e,n);break e;case 14:t=tu(null,t,r,He(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Ro(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),nu(e,t,r,i,n);case 3:e:{if(vf(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Hc(e,t),Ni(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=jn(Error(k(423)),t),t=ru(e,t,r,n,i);break e}else if(r!==i){i=jn(Error(k(424)),t),t=ru(e,t,r,n,i);break e}else for(Pe=Et(t.stateNode.containerInfo.firstChild),Te=t,Y=!0,Qe=null,n=Uc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===i){t=pt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Yc(t),e===null&&Po(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,jo(r,i)?o=null:l!==null&&jo(r,l)&&(t.flags|=32),yf(e,t),ge(e,t,o,n),t.child;case 6:return e===null&&Po(t),null;case 13:return xf(e,t,n);case 4:return _s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),eu(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,V(Ci,r._currentValue),r._currentValue=o,l!==null)if(Ge(l.value,o)){if(l.children===i.children&&!ke.current){t=pt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=ut(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),To(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),To(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hn(t,n),i=De(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),tu(e,t,r,i,n);case 15:return hf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),ii(e,t),t.tag=1,je(r)?(e=!0,Si(t)):e=!1,hn(t,n),df(t,r,i),zo(t,r,i,n),Io(null,t,r,!0,e,n);case 19:return wf(e,t,n);case 22:return gf(e,t,n)}throw Error(k(156,t.tag))};function $f(e,t){return ac(e,t)}function Mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new Mp(e,t,n,r)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $p(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ss)return 11;if(e===as)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function si(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Us(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case bt:return Wt(n.children,i,l,t);case os:o=8,i|=8;break;case eo:return e=Ae(12,n,t,i|2),e.elementType=eo,e.lanes=l,e;case to:return e=Ae(13,n,t,i),e.elementType=to,e.lanes=l,e;case no:return e=Ae(19,n,t,i),e.elementType=no,e.lanes=l,e;case Yu:return Ki(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:o=10;break e;case Hu:o=9;break e;case ss:o=11;break e;case as:o=14;break e;case gt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ae(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Wt(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function Ki(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=Yu,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ap(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ws(e,t,n,r,i,l,o,a,u){return e=new Ap(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ae(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(l),e}function Fp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Af(e){if(!e)return zt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(je(n))return $c(e,n,t)}return t}function Ff(e,t,n,r,i,l,o,a,u){return e=Ws(n,r,!0,e,i,l,o,a,u),e.context=Af(null),n=e.current,r=ye(),i=Pt(n),l=ut(r,i),l.callback=t??null,Nt(n,l,i),e.current.lanes=i,kr(e,i,r),Ce(e,r),e}function Xi(e,t,n,r){var i=t.current,l=ye(),o=Pt(i);return n=Af(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(i,t,o),e!==null&&(Xe(e,i,o,l),ti(e,i,o)),o}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hs(e,t){pu(e,t),(e=e.alternate)&&pu(e,t)}function Dp(){return null}var Df=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ys(e){this._internalRoot=e}Gi.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Xi(e,t,null,null)};Gi.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xt(function(){Xi(null,e,null,null)}),t[ft]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=hc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vt.length&&t!==0&&t<vt[n].priority;n++);vt.splice(n,0,e),n===0&&yc(e)}};function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function Bp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Ii(o);l.call(c)}}var o=Ff(t,r,e,0,null,!1,!1,"",mu);return e._reactRootContainer=o,e[ft]=o.current,ar(e.nodeType===8?e.parentNode:e),Xt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ii(u);a.call(c)}}var u=Ws(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=u,e[ft]=u.current,ar(e.nodeType===8?e.parentNode:e),Xt(function(){Xi(t,u,n,r)}),u}function Ji(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var u=Ii(o);a.call(u)}}Xi(t,o,e,i)}else o=Bp(n,t,e,i,r);return Ii(o)}pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(fs(t,n|1),Ce(t,J()),!(M&6)&&(Cn=J()+500,It()))}break;case 13:Xt(function(){var r=dt(e,1);if(r!==null){var i=ye();Xe(r,e,1,i)}}),Hs(e,1)}};ds=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ye();Xe(t,e,134217728,n)}Hs(e,134217728)}};mc=function(e){if(e.tag===13){var t=Pt(e),n=dt(e,t);if(n!==null){var r=ye();Xe(n,e,t,r)}Hs(e,t)}};hc=function(){return F};gc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};po=function(e,t,n){switch(t){case"input":if(lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vi(r);if(!i)throw Error(k(90));Ku(r),lo(r,i)}}}break;case"textarea":Gu(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};nc=Ds;rc=Xt;var Vp={usingClientEntryPoint:!1,Events:[Cr,rn,Vi,ec,tc,Ds]},Dn={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Up={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oc(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||Dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Ai=Yr.inject(Up),tt=Yr}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vp;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(k(200));return Fp(e,t,null,n)};Oe.createRoot=function(e,t){if(!Qs(e))throw Error(k(299));var n=!1,r="",i=Df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ws(e,1,!1,null,null,n,!1,r,i),e[ft]=t.current,ar(e.nodeType===8?e.parentNode:e),new Ys(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=oc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Xt(e)};Oe.hydrate=function(e,t,n){if(!Zi(t))throw Error(k(200));return Ji(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Qs(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Df;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ff(t,null,e,1,n??null,i,!1,l,o),e[ft]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gi(t)};Oe.render=function(e,t,n){if(!Zi(t))throw Error(k(200));return Ji(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!Zi(e))throw Error(k(40));return e._reactRootContainer?(Xt(function(){Ji(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Oe.unstable_batchedUpdates=Ds;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ji(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function Bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf)}catch(e){console.error(e)}}Bf(),Du.exports=Oe;var Wp=Du.exports,hu=Wp;ql.createRoot=hu.createRoot,ql.hydrateRoot=hu.hydrateRoot;function Qr({className:e,url:t,textLink:n}){return s.jsxs("div",{className:e,children:[s.jsx("hr",{style:{opacity:"0.2"}}),s.jsx("p",{children:s.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n})}),s.jsx("hr",{style:{opacity:"0.2"}})]})}function Hp({toggleOverlay:e}){return s.jsx("div",{className:"about",children:s.jsxs("div",{className:"about-container",children:[s.jsx("button",{onClick:e,children:"×"}),s.jsx("img",{className:"logo",src:"WeeBoo.png",alt:""}),s.jsxs("div",{className:"anime-app-version",children:[s.jsx("h1",{children:"WeeBoo"}),s.jsxs("h5",{children:["v0.1.7"," (","Public Beta",")"]}),s.jsx("h4",{children:"WeeBoo from Anime-App"}),s.jsx("p",{children:"WeeBoo | My Anime List is a Front-End SPA (Single Page Application) Web project built using React to display a list of anime. This project uses Vite for bundling and Visual Studio Code as the code editor. Mostly anime data is fetched from the Jikan - Unofficial MyAnimeList API."}),s.jsx("p",{children:"WeeBoo is designed and developed by Nantungga Putra, also later dedicated development team under Open Source Contribution."}),s.jsxs("p",{children:["For Developers,"," ",s.jsx("b",{children:s.jsx("a",{href:"https://github.com/nantunggaputra/React_Library/issues/5",target:"_blank",rel:"noopener noreferrer",children:"get involved"})}),"!"]})]}),s.jsx(Qr,{className:"title",url:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/README.md",textLink:"Anime-App"}),s.jsx(Qr,{className:"license",url:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/LICENSE",textLink:"Licensing Information"}),s.jsx(Qr,{className:"rights",url:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/RIGHTS.md",textLink:"End-User Rights"}),s.jsx(Qr,{className:"privacy-policy",url:"https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/PRIVACY_POLICY.md",textLink:"Privacy Policy"}),s.jsx("div",{className:"trademarks",children:s.jsx("small",{children:s.jsx("b",{children:"WeeBoo and the WeeBoo logos are trademarks of the Anime-App on Nantungga Putra's GitHub Project"})})})]})})}function ot({itemKey:e,state:t,titleOn:n,titleOff:r,url:i,toggleState:l,toggleStateLink:o,styleOn:a,styleOff:u,className:c,titleLink:m,iconLink:h,iconOn:g,iconOff:w}){return s.jsx("div",{className:"container",children:s.jsx("button",{title:t?n:r,onClick:l,style:t?a:u,className:c,children:i?s.jsx("a",{href:i,onClick:o,title:m,children:h}):t?g:w})},e)}function Yp(){const[e,t]=S.useState("offline"),n=()=>{t(navigator.onLine?"online":"offline")},r=()=>{navigator.onLine?t("online"):(t("offline"),window.location.reload())};S.useEffect(()=>{const p=()=>n();window.addEventListener("online",p),window.addEventListener("offline",p);const x=setInterval(n,1e3);return()=>{window.removeEventListener("online",p),window.removeEventListener("offline",p),clearInterval(x)}},[]);const[i,l]=S.useState(!1),o=()=>{l(!i)},[a,u]=S.useState(!0),c=()=>{u(!a)};S.useEffect(()=>{document.body.classList.toggle("body-transition",a),document.querySelector(".silhouette-off").classList.toggle("silhouette-on",a)},[a]);const[m,h]=S.useState(!0),g=()=>{h(!m)};S.useEffect(()=>{document.querySelector(".background-container").classList.toggle("clouds",m)},[m]);const[w,v]=S.useState(!0),y=S.useRef(null),P=()=>{y.current&&(w?y.current.play():y.current.pause()),v(!w)},d=new Date().getHours(),f=d<12?"Departure to the Front Lines (Yasuharu Takanashi).mp3":d<18?"The Last Magic II (Yasuharu Takanashi).mp3":"The Last Magic I (Yasuharu Takanashi).mp3";return s.jsxs(s.Fragment,{children:[i&&s.jsx(Hp,{toggleOverlay:o}),s.jsx("img",{src:"Silhouette Kaito Kid.webp",alt:"",className:"silhouette-off"}),s.jsx("div",{className:"background-container"}),s.jsx("div",{className:"background-audio",children:s.jsx("audio",{ref:y,src:f,loop:!0})}),s.jsx("div",{className:"connection",children:s.jsx(ot,{titleOn:"You are online",titleOff:"No connection",state:e==="online",toggleState:r,iconOn:"•",iconOff:"•",styleOn:{color:"#13e713",fontSize:"2.5rem",cursor:"progress"},styleOff:{color:"#ff0000",fontSize:"2.5rem",cursor:"wait"}})}),s.jsx("div",{className:"informations",children:s.jsx(ot,{titleOn:"About WeeBoo",titleOff:"About WeeBoo",state:i,toggleState:o,iconOn:s.jsx("span",{style:{fontSize:"1.2rem"},children:"𝐢"}),iconOff:s.jsx("span",{style:{fontSize:"1.2rem"},children:"𝐢"})})}),s.jsx("div",{className:"transitions",children:s.jsx(ot,{titleOn:"Background transitions on (30s to 90s)",titleOff:"Background transitions off",state:a,toggleState:c,iconOn:"☯︎",iconOff:"⊙"})}),s.jsx("div",{className:"animations",children:s.jsx(ot,{titleOn:"Background animations on (Clouds)",titleOff:"Background animations off",state:m,toggleState:g,iconOn:"𖣐",iconOff:"𖤐"})}),s.jsx("div",{className:"music",children:s.jsx(ot,{titleOn:"Backsound on (Yasuharu Takanashi)",titleOff:"Backsound off",state:!w,toggleState:P,iconOn:"♪",iconOff:"♬"})})]})}function gu(){return s.jsx("span",{role:"img",children:s.jsx("img",{src:"WeeBoo.png",alt:""})})}function Qp(){return s.jsxs("header",{id:"home",className:"logo",title:"WeeBoo",children:[s.jsx(gu,{}),s.jsxs("h1",{children:["W",s.jsx("span",{children:"ee"}),"B",s.jsx("span",{children:"oo"})]}),s.jsx(gu,{})]})}function Kp(){const[e,t]=S.useState(!0),n=()=>{t(!1)},r=()=>{t(!0)},i=["Home","Favorite","Category","Genre"];return s.jsx("div",{className:"hamburger-menu",children:e?s.jsx(ot,{titleOn:"Menu",titleOff:"",state:!0,toggleState:n,styleOn:{fontWeight:"bolder",fontSize:"2.85rem"},styleOff:{},className:"button-parrent",iconOn:"=",iconOff:""}):s.jsxs(s.Fragment,{children:[s.jsx(ot,{titleOn:"",titleOff:"Close",state:!1,toggleState:r,styleOn:{},styleOff:{fontWeight:"lighter",fontSize:"1.85rem"},className:"button-parrent",iconOn:"",iconOff:"✖"}),i.map(l=>s.jsx(ot,{itemKey:l,state:!1,toggleState:null,className:"button-child",url:"#"+l.toLowerCase(),toggleStateLink:r,titleLink:l,iconLink:l==="Home"&&"♤"||l==="Favorite"&&"♡"||l==="Category"&&"♢"||l==="Genre"&&"♧"},l))]})})}function Xp({href:e,onClick:t,label:n}){return s.jsxs(s.Fragment,{children:[s.jsx("li",{children:s.jsx("a",{href:e,onClick:t,children:n})}),n==="Genre"?"":"|"]})}function Gp(){const e=[{href:"#home",label:"Home"},{href:"#favorite",label:"Favorite"},{href:"#category",label:"Category"},{href:"#genre",label:"Genre"}],[t,n]=S.useState(!1),r=()=>{n(!t)};return s.jsx("div",{className:"container",children:s.jsx("div",{className:"toggle-div",children:t?s.jsx("menu",{className:"links",children:e.map((i,l)=>s.jsx(Xp,{href:i.href,onClick:r,label:i.label},l))}):s.jsx("div",{className:"arrow",onClick:r,title:"Menu",children:"▼"})})})}function Zp(){return s.jsx("figure",{className:"search-kanji",children:s.jsxs("figcaption",{children:[s.jsx("h6",{children:"コ"}),s.jsx("h6",{children:"ナ"}),s.jsx("h6",{children:"ン"})]})})}function Jp({fetchAnime:e,setResultCount:t,setLoading:n,loading:r}){const[i,l]=S.useState("Search anime..."),[o,a]=S.useState(""),u=S.useRef(null),c=async()=>{if(o.trim()){n(!0),u.current&&u.current.play();const m=await e(o);t(m.length),n(!1),a(""),l(m.length>0?o.trim():"Search anime...")}};return s.jsxs("div",{className:"search-container",children:[s.jsx("div",{className:"search-label",children:s.jsx("div",{className:"container",children:s.jsx("label",{htmlFor:"search-anime",children:s.jsx("span",{title:"Search",children:"⌕"})})})}),s.jsx("input",{className:"search",id:"search-anime",type:"text",placeholder:i,value:o,onChange:m=>a(m.target.value),onKeyPress:m=>{m.key==="Enter"&&c()}}),s.jsx("button",{className:"search-btn",onClick:c,children:r?"Please wait...":"Search"}),s.jsx("div",{className:"search-icon",children:s.jsx("img",{src:"Conan Edogawa Search.webp",alt:""})}),s.jsx("audio",{ref:u,src:"There is Always Only One Truth.aac"}),r&&s.jsx(Zp,{})]})}const yu=e=>e!==0;function qp({count:e}){return s.jsx(s.Fragment,{children:s.jsxs("p",{className:"search-results",style:{cursor:"default"},children:[s.jsx("span",{children:yu(e)?"⋋≧▽≦⋌":"(T_T)"})," ",s.jsx("strong",{children:yu(e)?`Subarashi Minna-san! Wee found breathtaking of ${e} anime...`:"Gomennasai Minna-san! Please search another anime..."})]})})}function bp({fetchAnime:e}){const[t,n]=S.useState(void 0),[r,i]=S.useState(!1);return s.jsxs("div",{className:"search-container",children:[s.jsx(Jp,{fetchAnime:e,setResultCount:n,setLoading:i,loading:r}),t>=0&&s.jsx(qp,{count:t})]})}function em({fetchAnime:e}){return s.jsxs("nav",{className:"nav-bar",children:[s.jsx(Qp,{}),s.jsx(Kp,{}),s.jsx(Gp,{}),s.jsx(bp,{fetchAnime:e})]})}function tm({children:e}){return s.jsx("span",{style:{paddingLeft:"33px"},children:e})}function nm({selectedAnime:e}){var d;if(!e)return null;const{title:t,images:n,aired:r,score:i,rating:l,synopsis:o}=e,a=(d=n==null?void 0:n.jpg)==null?void 0:d.large_image_url,u=f=>{var p,x,E;return((E=(x=(p=f.aired)==null?void 0:p.prop)==null?void 0:x.from)==null?void 0:E.year)||""},c=f=>f.score?`MAL ★ ${f.score.toFixed(1)}/10`:"",m=f=>f.rating?`Rating for ${f.rating}`:"",h=f=>f.status?`Status: ${f.status}`:"",g=(f,p,x)=>f==="Rx - Hentai"?{}:{href:p,title:x,target:"_blank",rel:"noopener noreferrer nofollow"},w=g(l,`https://myanimelist.net/search/all?q=${t}&cat=all`,"Search anime in My Anime List"),v=g(l,`https://www.bilibili.tv/id/search-result?q=${t}`,"Search anime in BiliBili | Bstation"),y=f=>f==="Rx - Hentai"?{filter:"grayscale(1) brightness(0.3) contrast(0.3)",opacity:"0.7"}:{},P=f=>f==="Rx - Hentai"?{filter:"grayscale(1)",cursor:"help"}:{};return s.jsxs("div",{className:"details",children:[s.jsxs("header",{children:[a&&r&&s.jsx("a",{...w,children:s.jsx("img",{src:a,alt:t,style:y(l)})}),s.jsxs("div",{className:"details-overview",children:[s.jsx("h2",{children:s.jsx("a",{...v,style:P(l),children:t})}),s.jsxs("small",{children:[u(e),u(e)&&i?" | ":"",c(e),s.jsx("br",{}),m(e)]}),s.jsx("p",{children:s.jsx("b",{children:h(e)})})]})]}),s.jsxs("section",{children:[s.jsxs("p",{children:[s.jsx("em",{children:o}),s.jsx("br",{}),s.jsx("br",{style:{marginTop:"1.6rem"}}),s.jsxs("em",{children:[s.jsx(tm,{children:" "}),s.jsx("strong",{children:"Warning: "}),s.jsx("span",{style:{color:"#ef4444"},children:"Wee strongly advise against watching the listed anime titles through illegal means."})," ","Engaging in piracy harms the creators and the industry as a whole. Please support the hardworking creators by purchasing the original"," DVDs "+t+" ","or subscribing to official streaming services. Minna, your support ensures the continued production of quality content. Sankyuu~"]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("img",{src:"WeeBoo.png",style:{width:"100%",margin:"-7rem",transform:"translateX(3rem) scale(2.5)",opacity:"0.05",filter:"grayscale(1) brightness(0.75) contrast(2.75)"}})]}),s.jsx("p",{style:{textAlign:"right",color:"var(--color-white)",fontWeight:"600"},children:s.jsx("em",{children:"WeeBoo"})})]})]})}function rm({children:e}){return s.jsx("span",{style:{paddingLeft:"33px"},children:e})}function im({selectedAnimeLegacy:e}){var m,h,g;const{title:t,images:n,aired:r,score:i,rating:l,status:o,synopsis:a}=e,u=(m=n==null?void 0:n.jpg)==null?void 0:m.large_image_url,c=(g=(h=r==null?void 0:r.prop)==null?void 0:h.from)==null?void 0:g.year;return s.jsxs("div",{className:"details",children:[s.jsxs("header",{children:[s.jsx("a",{href:`https://myanimelist.net/search/all?q=${t}&cat=all`,title:"Search anime in My Anime List",target:"_blank",rel:"noopener noreferrer nofollow",children:s.jsx("img",{src:u,alt:t})}),s.jsxs("div",{className:"details-overview",children:[s.jsx("h2",{children:s.jsx("a",{href:`https://www.bilibili.tv/id/search-result?q=${t}`,title:"Search anime in BiliBili | Bstation",target:"_blank",rel:"noopener noreferrer nofollow",children:t})}),s.jsxs("small",{children:[c||"",c&&i?" | ":"",i?`MAL ★ ${i.toFixed(1)}/10`:"",s.jsx("br",{}),l?`Rating for ${l}`:""]}),s.jsx("p",{children:s.jsx("b",{children:o?`Channel: ${o}`:""})})]})]}),s.jsxs("section",{children:[s.jsxs("p",{children:[s.jsx("em",{children:a}),s.jsx("br",{}),s.jsx("br",{style:{marginTop:"1.6rem"}}),s.jsxs("em",{children:[s.jsx(rm,{children:" "}),s.jsx("strong",{children:"Warning: "}),s.jsx("span",{style:{color:"#ef4444"},children:"Wee strongly advise against watching the listed anime titles through illegal means."})," ","Engaging in piracy harms the creators and the industry as a whole. Please support the hardworking creators by purchasing the original"," DVDs "+t+" ","or subscribing to official streaming services. Minna, your support ensures the continued production of quality content. Sankyuu~"]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("img",{src:"WeeBoo.png",style:{width:"100%",margin:"-7rem",transform:"translateX(3rem) scale(2.5)",opacity:"0.05",filter:"grayscale(1) brightness(0.75) contrast(2.75)"}})]}),s.jsx("p",{style:{textAlign:"right",color:"var(--color-white)",fontWeight:"600"},children:s.jsx("em",{children:"WeeBoo"})})]})]})}function Vf({selectedAnime:e,legacy:t}){const n=l=>()=>l(o=>!o),[r,i]=S.useState(!0);return s.jsxs("div",{className:"box",children:[s.jsx("button",{className:"btn-toggle",onClick:n(i),children:r?"+":"±"}),r&&(t?s.jsx(im,{selectedAnimeLegacy:e}):s.jsx(nm,{selectedAnime:e}))]})}function lm({anime:e,onSelectedAnime:t,isSelected:n}){const r=a=>{var u,c;return((c=(u=a.images)==null?void 0:u.jpg)==null?void 0:c.large_image_url)||a.image},i=a=>{var u,c,m;return((m=(c=(u=a.aired)==null?void 0:u.prop)==null?void 0:c.from)==null?void 0:m.year)||a.year||"Year"},l=a=>a==="Rx - Hentai"?{filter:"grayscale(1) brightness(0.3) contrast(0.3)",opacity:"0.7"}:{},o=a=>a==="Rx - Hentai"?{filter:"grayscale(1)",cursor:"help"}:{};return s.jsxs("li",{tabIndex:e.mal_id,onClick:()=>t(e),className:n?"selected":"",style:o(e.rating),children:[s.jsx("img",{src:r(e),alt:e.title,style:l(e.rating)}),s.jsx("h3",{children:e.title}),s.jsx("div",{children:s.jsx("p",{children:s.jsx("span",{children:i(e)})})})]})}function om({animes:e,onSelectedAnime:t}){const[n,r]=S.useState(null),i=l=>{r(l.mal_id),t(l)};return s.jsx("ul",{className:"list list-anime",children:e==null?void 0:e.map(l=>s.jsx(lm,{anime:l,onSelectedAnime:i,isSelected:l.mal_id===n},l.mal_id))})}function sm({animeLegacy:e,onSelectedAnimeLegacy:t,isSelectedLegacy:n}){var h,g,w;const{mal_id:r,title:i,images:l,aired:o,image:a,year:u}=e,c=(h=l==null?void 0:l.jpg)==null?void 0:h.large_image_url,m=(w=(g=o==null?void 0:o.prop)==null?void 0:g.from)==null?void 0:w.year;return s.jsx("li",{tabIndex:r,onClick:()=>t(e),className:n?"selected":"",children:c?s.jsxs(s.Fragment,{children:[s.jsx("img",{src:c,alt:i}),s.jsx("h3",{children:i}),s.jsx("div",{children:s.jsx("p",{children:s.jsx("span",{children:m||"Year"})})})]}):s.jsxs(s.Fragment,{children:[s.jsx("img",{src:a,alt:i}),s.jsx("h3",{children:i}),s.jsx("div",{children:s.jsx("p",{children:s.jsx("span",{children:u})})})]})})}function am({animesLegacy:e,onSelectedAnimeLegacy:t}){const[n,r]=S.useState(null),i=l=>{r(l.mal_id),t(l)};return s.jsx("ul",{className:"list list-anime",children:e==null?void 0:e.map(l=>s.jsx(sm,{animeLegacy:l,onSelectedAnimeLegacy:i,isSelectedLegacy:l.mal_id===n},l.mal_id))})}function Uf({animes:e,onSelectedAnime:t,legacy:n}){const r=o=>()=>o(a=>!a),[i,l]=S.useState(!0);return s.jsxs("div",{className:"box",style:e.length>1?{}:{overflow:"hidden"},children:[s.jsx("button",{className:"btn-toggle",onClick:r(l),children:i?"+":"±"}),i&&(n?s.jsx(am,{animesLegacy:e,onSelectedAnimeLegacy:t}):s.jsx(om,{animes:e,onSelectedAnime:t}))]})}var um=!1;function cm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function fm(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var dm=function(){function e(n){var r=this;this._insertTag=function(i){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,l),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!um:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(fm(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var l=cm(i);try{l.insertRule(r,l.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",Mi="-moz-",$="-webkit-",Wf="comm",Ks="rule",Xs="decl",pm="@import",Hf="@keyframes",mm="@layer",hm=Math.abs,qi=String.fromCharCode,gm=Object.assign;function ym(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Yf(e){return e.trim()}function vm(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Qo(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function yr(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Gs(e){return e.length}function Kr(e,t){return t.push(e),e}function xm(e,t){return e.map(t).join("")}var bi=1,En=1,Qf=0,Ee=0,q=0,Tn="";function el(e,t,n,r,i,l,o){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:bi,column:En,length:o,return:""}}function Bn(e,t){return gm(el("",null,null,"",null,null,0),e,{length:-e.length},t)}function wm(){return q}function Sm(){return q=Ee>0?ae(Tn,--Ee):0,En--,q===10&&(En=1,bi--),q}function Le(){return q=Ee<Qf?ae(Tn,Ee++):0,En++,q===10&&(En=1,bi++),q}function rt(){return ae(Tn,Ee)}function ai(){return Ee}function Nr(e,t){return yr(Tn,e,t)}function vr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kf(e){return bi=En=1,Qf=qe(Tn=e),Ee=0,[]}function Xf(e){return Tn="",e}function ui(e){return Yf(Nr(Ee-1,Ko(e===91?e+2:e===40?e+1:e)))}function km(e){for(;(q=rt())&&q<33;)Le();return vr(e)>2||vr(q)>3?"":" "}function jm(e,t){for(;--t&&Le()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Nr(e,ai()+(t<6&&rt()==32&&Le()==32))}function Ko(e){for(;Le();)switch(q){case e:return Ee;case 34:case 39:e!==34&&e!==39&&Ko(q);break;case 40:e===41&&Ko(e);break;case 92:Le();break}return Ee}function Cm(e,t){for(;Le()&&e+q!==57;)if(e+q===84&&rt()===47)break;return"/*"+Nr(t,Ee-1)+"*"+qi(e===47?e:Le())}function Em(e){for(;!vr(rt());)Le();return Nr(e,Ee)}function Nm(e){return Xf(ci("",null,null,null,[""],e=Kf(e),0,[0],e))}function ci(e,t,n,r,i,l,o,a,u){for(var c=0,m=0,h=o,g=0,w=0,v=0,y=1,P=1,d=1,f=0,p="",x=i,E=l,N=r,j=p;P;)switch(v=f,f=Le()){case 40:if(v!=108&&ae(j,h-1)==58){Qo(j+=A(ui(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:j+=ui(f);break;case 9:case 10:case 13:case 32:j+=km(v);break;case 92:j+=jm(ai()-1,7);continue;case 47:switch(rt()){case 42:case 47:Kr(_m(Cm(Le(),ai()),t,n),u);break;default:j+="/"}break;case 123*y:a[c++]=qe(j)*d;case 125*y:case 59:case 0:switch(f){case 0:case 125:P=0;case 59+m:d==-1&&(j=A(j,/\f/g,"")),w>0&&qe(j)-h&&Kr(w>32?xu(j+";",r,n,h-1):xu(A(j," ","")+";",r,n,h-2),u);break;case 59:j+=";";default:if(Kr(N=vu(j,t,n,c,m,i,a,p,x=[],E=[],h),l),f===123)if(m===0)ci(j,t,N,N,x,l,h,a,E);else switch(g===99&&ae(j,3)===110?100:g){case 100:case 108:case 109:case 115:ci(e,N,N,r&&Kr(vu(e,N,N,0,0,i,a,p,i,x=[],h),E),i,E,h,a,r?x:E);break;default:ci(j,N,N,N,[""],E,0,a,E)}}c=m=w=0,y=d=1,p=j="",h=o;break;case 58:h=1+qe(j),w=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Sm()==125)continue}switch(j+=qi(f),f*y){case 38:d=m>0?1:(j+="\f",-1);break;case 44:a[c++]=(qe(j)-1)*d,d=1;break;case 64:rt()===45&&(j+=ui(Le())),g=rt(),m=h=qe(p=j+=Em(ai())),f++;break;case 45:v===45&&qe(j)==2&&(y=0)}}return l}function vu(e,t,n,r,i,l,o,a,u,c,m){for(var h=i-1,g=i===0?l:[""],w=Gs(g),v=0,y=0,P=0;v<r;++v)for(var d=0,f=yr(e,h+1,h=hm(y=o[v])),p=e;d<w;++d)(p=Yf(y>0?g[d]+" "+f:A(f,/&\f/g,g[d])))&&(u[P++]=p);return el(e,t,n,i===0?Ks:a,u,c,m)}function _m(e,t,n){return el(e,t,n,Wf,qi(wm()),yr(e,2,-2),0)}function xu(e,t,n,r){return el(e,t,n,Xs,yr(e,0,r),yr(e,r+1,-1),r)}function yn(e,t){for(var n="",r=Gs(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Pm(e,t,n,r){switch(e.type){case mm:if(e.children.length)break;case pm:case Xs:return e.return=e.return||e.value;case Wf:return"";case Hf:return e.return=e.value+"{"+yn(e.children,r)+"}";case Ks:e.value=e.props.join(",")}return qe(n=yn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Tm(e){var t=Gs(e);return function(n,r,i,l){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,l)||"";return o}}function Lm(e){return function(t){t.root||(t=t.return)&&e(t)}}function zm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Om=function(t,n,r){for(var i=0,l=0;i=l,l=rt(),i===38&&l===12&&(n[r]=1),!vr(l);)Le();return Nr(t,Ee)},Rm=function(t,n){var r=-1,i=44;do switch(vr(i)){case 0:i===38&&rt()===12&&(n[r]=1),t[r]+=Om(Ee-1,n,r);break;case 2:t[r]+=ui(i);break;case 4:if(i===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=qi(i)}while(i=Le());return t},Im=function(t,n){return Xf(Rm(Kf(t),n))},wu=new WeakMap,Mm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!wu.get(r))&&!i){wu.set(t,!0);for(var l=[],o=Im(n,l),a=r.props,u=0,c=0;u<o.length;u++)for(var m=0;m<a.length;m++,c++)t.props[c]=l[u]?o[u].replace(/&\f/g,a[m]):a[m]+" "+o[u]}}},$m=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Gf(e,t){switch(ym(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Mi+e+pe+e+e;case 6828:case 4268:return $+e+pe+e+e;case 6165:return $+e+pe+"flex-"+e+e;case 5187:return $+e+A(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return $+e+pe+"flex-item-"+A(e,/flex-|-self/,"")+e;case 4675:return $+e+pe+"flex-line-pack"+A(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+pe+A(e,"shrink","negative")+e;case 5292:return $+e+pe+A(e,"basis","preferred-size")+e;case 6060:return $+"box-"+A(e,"-grow","")+$+e+pe+A(e,"grow","positive")+e;case 4554:return $+A(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Mi+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qo(e,"stretch")?Gf(A(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,qe(e)-3-(~Qo(e,"!important")&&10))){case 107:return A(e,":",":"+$)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return $+e+pe+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+pe+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+pe+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+pe+e+e}return e}var Am=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Xs:t.return=Gf(t.value,t.length);break;case Hf:return yn([Bn(t,{value:A(t.value,"@","@"+$)})],i);case Ks:if(t.length)return xm(t.props,function(l){switch(vm(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return yn([Bn(t,{props:[A(l,/:(read-\w+)/,":"+Mi+"$1")]})],i);case"::placeholder":return yn([Bn(t,{props:[A(l,/:(plac\w+)/,":"+$+"input-$1")]}),Bn(t,{props:[A(l,/:(plac\w+)/,":"+Mi+"$1")]}),Bn(t,{props:[A(l,/:(plac\w+)/,pe+"input-$1")]})],i)}return""})}},Fm=[Am],Dm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var P=y.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||Fm,l={},o,a=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var P=y.getAttribute("data-emotion").split(" "),d=1;d<P.length;d++)l[P[d]]=!0;a.push(y)});var u,c=[Mm,$m];{var m,h=[Pm,Lm(function(y){m.insert(y)})],g=Tm(c.concat(i,h)),w=function(P){return yn(Nm(P),g)};u=function(P,d,f,p){m=f,w(P?P+"{"+d.styles+"}":d.styles),p&&(v.inserted[d.name]=!0)}}var v={key:n,sheet:new dm({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:u};return v.sheet.hydrate(a),v},Zf={exports:{}},D={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe=typeof Symbol=="function"&&Symbol.for,Zs=oe?Symbol.for("react.element"):60103,Js=oe?Symbol.for("react.portal"):60106,tl=oe?Symbol.for("react.fragment"):60107,nl=oe?Symbol.for("react.strict_mode"):60108,rl=oe?Symbol.for("react.profiler"):60114,il=oe?Symbol.for("react.provider"):60109,ll=oe?Symbol.for("react.context"):60110,qs=oe?Symbol.for("react.async_mode"):60111,ol=oe?Symbol.for("react.concurrent_mode"):60111,sl=oe?Symbol.for("react.forward_ref"):60112,al=oe?Symbol.for("react.suspense"):60113,Bm=oe?Symbol.for("react.suspense_list"):60120,ul=oe?Symbol.for("react.memo"):60115,cl=oe?Symbol.for("react.lazy"):60116,Vm=oe?Symbol.for("react.block"):60121,Um=oe?Symbol.for("react.fundamental"):60117,Wm=oe?Symbol.for("react.responder"):60118,Hm=oe?Symbol.for("react.scope"):60119;function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zs:switch(e=e.type,e){case qs:case ol:case tl:case rl:case nl:case al:return e;default:switch(e=e&&e.$$typeof,e){case ll:case sl:case cl:case ul:case il:return e;default:return t}}case Js:return t}}}function Jf(e){return Ie(e)===ol}D.AsyncMode=qs;D.ConcurrentMode=ol;D.ContextConsumer=ll;D.ContextProvider=il;D.Element=Zs;D.ForwardRef=sl;D.Fragment=tl;D.Lazy=cl;D.Memo=ul;D.Portal=Js;D.Profiler=rl;D.StrictMode=nl;D.Suspense=al;D.isAsyncMode=function(e){return Jf(e)||Ie(e)===qs};D.isConcurrentMode=Jf;D.isContextConsumer=function(e){return Ie(e)===ll};D.isContextProvider=function(e){return Ie(e)===il};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zs};D.isForwardRef=function(e){return Ie(e)===sl};D.isFragment=function(e){return Ie(e)===tl};D.isLazy=function(e){return Ie(e)===cl};D.isMemo=function(e){return Ie(e)===ul};D.isPortal=function(e){return Ie(e)===Js};D.isProfiler=function(e){return Ie(e)===rl};D.isStrictMode=function(e){return Ie(e)===nl};D.isSuspense=function(e){return Ie(e)===al};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tl||e===ol||e===rl||e===nl||e===al||e===Bm||typeof e=="object"&&e!==null&&(e.$$typeof===cl||e.$$typeof===ul||e.$$typeof===il||e.$$typeof===ll||e.$$typeof===sl||e.$$typeof===Um||e.$$typeof===Wm||e.$$typeof===Hm||e.$$typeof===Vm)};D.typeOf=Ie;Zf.exports=D;var Ym=Zf.exports,qf=Ym,Qm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Km={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bf={};bf[qf.ForwardRef]=Qm;bf[qf.Memo]=Km;var Xm=!0;function ed(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var bs=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Xm===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},td=function(t,n,r){bs(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+i:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function Gm(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Zm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jm=!1,qm=/[A-Z]|^ms/g,bm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,nd=function(t){return t.charCodeAt(1)===45},Su=function(t){return t!=null&&typeof t!="boolean"},Zl=zm(function(e){return nd(e)?e:e.replace(qm,"-$&").toLowerCase()}),ku=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(bm,function(r,i,l){return be={name:i,styles:l,next:be},i})}return Zm[t]!==1&&!nd(t)&&typeof n=="number"&&n!==0?n+"px":n},e1="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function xr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return be={name:i.name,styles:i.styles,next:be},i.name;var l=n;if(l.styles!==void 0){var o=l.next;if(o!==void 0)for(;o!==void 0;)be={name:o.name,styles:o.styles,next:be},o=o.next;var a=l.styles+";";return a}return t1(e,t,n)}case"function":{if(e!==void 0){var u=be,c=n(e);return be=u,xr(e,t,c)}break}}var m=n;if(t==null)return m;var h=t[m];return h!==void 0?h:m}function t1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=xr(e,t,n[i])+";";else for(var l in n){var o=n[l];if(typeof o!="object"){var a=o;t!=null&&t[a]!==void 0?r+=l+"{"+t[a]+"}":Su(a)&&(r+=Zl(l)+":"+ku(l,a)+";")}else{if(l==="NO_COMPONENT_SELECTOR"&&Jm)throw new Error(e1);if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var u=0;u<o.length;u++)Su(o[u])&&(r+=Zl(l)+":"+ku(l,o[u])+";");else{var c=xr(e,t,o);switch(l){case"animation":case"animationName":{r+=Zl(l)+":"+c+";";break}default:r+=l+"{"+c+"}"}}}}return r}var ju=/label:\s*([^\s;\n{]+)\s*(;|$)/g,be;function ea(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";be=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,i+=xr(n,t,l);else{var o=l;i+=o[0]}for(var a=1;a<e.length;a++)if(i+=xr(n,t,e[a]),r){var u=l;i+=u[a]}ju.lastIndex=0;for(var c="",m;(m=ju.exec(i))!==null;)c+="-"+m[1];var h=Gm(i)+c;return{name:h,styles:i,next:be}}var n1=function(t){return t()},r1=ua.useInsertionEffect?ua.useInsertionEffect:!1,rd=r1||n1,Xo=!1,id=S.createContext(typeof HTMLElement<"u"?Dm({key:"css"}):null);id.Provider;var ld=function(t){return S.forwardRef(function(n,r){var i=S.useContext(id);return t(n,i,r)})},od=S.createContext({}),ta={}.hasOwnProperty,Go="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",i1=function(t,n){var r={};for(var i in n)ta.call(n,i)&&(r[i]=n[i]);return r[Go]=t,r},l1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return bs(n,r,i),rd(function(){return td(n,r,i)}),null},o1=ld(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Go],l=[r],o="";typeof e.className=="string"?o=ed(t.registered,l,e.className):e.className!=null&&(o=e.className+" ");var a=ea(l,void 0,S.useContext(od));o+=t.key+"-"+a.name;var u={};for(var c in e)ta.call(e,c)&&c!=="css"&&c!==Go&&!Xo&&(u[c]=e[c]);return u.className=o,n&&(u.ref=n),S.createElement(S.Fragment,null,S.createElement(l1,{cache:t,serialized:a,isStringTag:typeof i=="string"}),S.createElement(i,u))}),s1=o1,a1=s.Fragment;function re(e,t,n){return ta.call(t,"css")?s.jsx(s1,i1(e,t),n):s.jsx(e,t,n)}function sd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ea(t)}var C=function(){var t=sd.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},u1=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var l=t[r];if(l!=null){var o=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))o=e(l);else{o="";for(var a in l)l[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=l}o&&(i&&(i+=" "),i+=o)}}return i};function c1(e,t,n){var r=[],i=ed(e,r,n);return r.length<2?n:i+t(r)}var f1=function(t){var n=t.cache,r=t.serializedArr;return rd(function(){for(var i=0;i<r.length;i++)td(n,r[i],!1)}),null},Jl=ld(function(e,t){var n=!1,r=[],i=function(){if(n&&Xo)throw new Error("css can only be used during render");for(var c=arguments.length,m=new Array(c),h=0;h<c;h++)m[h]=arguments[h];var g=ea(m,t.registered);return r.push(g),bs(t,g,!1),t.key+"-"+g.name},l=function(){if(n&&Xo)throw new Error("cx can only be used during render");for(var c=arguments.length,m=new Array(c),h=0;h<c;h++)m[h]=arguments[h];return c1(t.registered,i,u1(m))},o={css:i,cx:l,theme:S.useContext(od)},a=e.children(o);return n=!0,S.createElement(S.Fragment,null,S.createElement(f1,{cache:t,serializedArr:r}),a)}),d1=Object.defineProperty,p1=(e,t,n)=>t in e?d1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t,n)=>p1(e,typeof t!="symbol"?t+"":t,n),Zo=new Map,Gr=new WeakMap,Cu=0,m1=void 0;function h1(e){return e?(Gr.has(e)||(Cu+=1,Gr.set(e,Cu.toString())),Gr.get(e)):"0"}function g1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?h1(e.root):e[t]}`).toString()}function y1(e){const t=g1(e);let n=Zo.get(t);if(!n){const r=new Map;let i;const l=new IntersectionObserver(o=>{o.forEach(a=>{var u;const c=a.isIntersecting&&i.some(m=>a.intersectionRatio>=m);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(u=r.get(a.target))==null||u.forEach(m=>{m(c,a)})})},e);i=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},Zo.set(t,n)}return n}function ad(e,t,n={},r=m1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const u=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:i,observer:l,elements:o}=y1(n),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),l.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(o.delete(e),l.unobserve(e)),o.size===0&&(l.disconnect(),Zo.delete(i))}}function v1(e){return typeof e.children!="function"}var Eu=class extends S.Component{constructor(e){super(e),Xr(this,"node",null),Xr(this,"_unobserveCb",null),Xr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Xr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),v1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:l}=this.props;this._unobserveCb=ad(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:v}=this.state;return e({inView:w,entry:v,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:l,onChange:o,skip:a,trackVisibility:u,delay:c,initialInView:m,fallbackInView:h,...g}=this.props;return S.createElement(t||"div",{ref:this.handleNode,...g},e)}};function ud({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:l,skip:o,initialInView:a,fallbackInView:u,onChange:c}={}){var m;const[h,g]=S.useState(null),w=S.useRef(),[v,y]=S.useState({inView:!!a,entry:void 0});w.current=c,S.useEffect(()=>{if(o||!h)return;let p;return p=ad(h,(x,E)=>{y({inView:x,entry:E}),w.current&&w.current(x,E),E.isIntersecting&&l&&p&&(p(),p=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},u),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,h,i,r,l,o,n,u,t]);const P=(m=v.entry)==null?void 0:m.target,d=S.useRef();!h&&P&&!l&&!o&&d.current!==P&&(d.current=P,y({inView:!!a,entry:void 0}));const f=[g,v.inView,v.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var cd={exports:{}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),ra=Symbol.for("react.portal"),fl=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),ml=Symbol.for("react.provider"),hl=Symbol.for("react.context"),x1=Symbol.for("react.server_context"),gl=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),wl=Symbol.for("react.lazy"),w1=Symbol.for("react.offscreen"),fd;fd=Symbol.for("react.module.reference");function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case na:switch(e=e.type,e){case fl:case pl:case dl:case yl:case vl:return e;default:switch(e=e&&e.$$typeof,e){case x1:case hl:case gl:case wl:case xl:case ml:return e;default:return t}}case ra:return t}}}B.ContextConsumer=hl;B.ContextProvider=ml;B.Element=na;B.ForwardRef=gl;B.Fragment=fl;B.Lazy=wl;B.Memo=xl;B.Portal=ra;B.Profiler=pl;B.StrictMode=dl;B.Suspense=yl;B.SuspenseList=vl;B.isAsyncMode=function(){return!1};B.isConcurrentMode=function(){return!1};B.isContextConsumer=function(e){return Ve(e)===hl};B.isContextProvider=function(e){return Ve(e)===ml};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===na};B.isForwardRef=function(e){return Ve(e)===gl};B.isFragment=function(e){return Ve(e)===fl};B.isLazy=function(e){return Ve(e)===wl};B.isMemo=function(e){return Ve(e)===xl};B.isPortal=function(e){return Ve(e)===ra};B.isProfiler=function(e){return Ve(e)===pl};B.isStrictMode=function(e){return Ve(e)===dl};B.isSuspense=function(e){return Ve(e)===yl};B.isSuspenseList=function(e){return Ve(e)===vl};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fl||e===pl||e===dl||e===yl||e===vl||e===w1||typeof e=="object"&&e!==null&&(e.$$typeof===wl||e.$$typeof===xl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===gl||e.$$typeof===fd||e.getModuleId!==void 0)};B.typeOf=Ve;cd.exports=B;var S1=cd.exports;C`
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
`;const k1=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,j1=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E1=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,N1=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ia=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_1=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T1=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,L1=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,z1=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,O1=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R1=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function I1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ia,iterationCount:i=1}){return sd`
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
  `}function M1(e){return e==null}function $1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function dd(e,t){return n=>n?e():t()}function wr(e){return dd(e,()=>null)}function Jo(e){return wr(()=>({opacity:0}))(e)}const pd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:l=0,keyframes:o=ia,triggerOnce:a=!1,className:u,style:c,childClassName:m,childStyle:h,children:g,onVisibilityChange:w}=e,v=S.useMemo(()=>I1({keyframes:o,duration:i}),[i,o]);return M1(g)?null:$1(g)?re(F1,{...e,animationStyles:v,children:String(g)}):S1.isFragment(g)?re(md,{...e,animationStyles:v}):re(a1,{children:S.Children.map(g,(y,P)=>{if(!S.isValidElement(y))return null;const d=r+(t?P*i*n:0);switch(y.type){case"ol":case"ul":return re(Jl,{children:({cx:f})=>re(y.type,{...y.props,className:f(u,y.props.className),style:Object.assign({},c,y.props.style),children:re(pd,{...e,children:y.props.children})})});case"li":return re(Eu,{threshold:l,triggerOnce:a,onChange:w,children:({inView:f,ref:p})=>re(Jl,{children:({cx:x})=>re(y.type,{...y.props,ref:p,className:x(m,y.props.className),css:wr(()=>v)(f),style:Object.assign({},h,y.props.style,Jo(!f),{animationDelay:d+"ms"})})})});default:return re(Eu,{threshold:l,triggerOnce:a,onChange:w,children:({inView:f,ref:p})=>re("div",{ref:p,className:u,css:wr(()=>v)(f),style:Object.assign({},c,Jo(!f),{animationDelay:d+"ms"}),children:re(Jl,{children:({cx:x})=>re(y.type,{...y.props,className:x(m,y.props.className),style:Object.assign({},h,y.props.style)})})})})}})})},A1={display:"inline-block",whiteSpace:"pre"},F1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:l=1e3,fraction:o=0,triggerOnce:a=!1,className:u,style:c,children:m,onVisibilityChange:h}=e,{ref:g,inView:w}=ud({triggerOnce:a,threshold:o,onChange:h});return dd(()=>re("div",{ref:g,className:u,style:Object.assign({},c,A1),children:m.split("").map((v,y)=>re("span",{css:wr(()=>t)(w),style:{animationDelay:i+y*l*r+"ms"},children:v},y))}),()=>re(md,{...e,children:m}))(n)},md=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:l,children:o,onVisibilityChange:a}=e,{ref:u,inView:c}=ud({triggerOnce:r,threshold:n,onChange:a});return re("div",{ref:u,className:i,css:wr(()=>t)(c),style:Object.assign({},l,Jo(!c)),children:o})};C`
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
`;const D1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,B1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,V1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,U1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,W1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,H1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Y1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Q1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,K1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,X1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,G1=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Z1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,J1=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function q1(e,t,n){switch(n){case"bottom-left":return t?B1:j1;case"bottom-right":return t?V1:C1;case"down":return e?t?W1:N1:t?U1:E1;case"left":return e?t?Y1:_1:t?H1:ia;case"right":return e?t?K1:T1:t?Q1:P1;case"top-left":return t?X1:L1;case"top-right":return t?G1:z1;case"up":return e?t?J1:R1:t?Z1:O1;default:return t?D1:k1}}const Ne=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,l=S.useMemo(()=>q1(t,r,n),[t,n,r]);return re(pd,{keyframes:l,...i})};C`
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
`;function b1(){const[e,t]=S.useState([]),[n,r]=S.useState(0),[i,l]=S.useState(!1),[o,a]=S.useState(!1),u=S.useRef(null);S.useEffect(()=>{fetch("./anime-love-data.json").then(y=>y.json()).then(y=>t(y))},[]);const c=()=>{a(!1),l(!0),r(y=>y===0?e.length-1:y-1),setTimeout(()=>{l(!1)},1e3)},m=()=>{a(!1),l(!0),r(y=>y===e.length-1?0:y+1),setTimeout(()=>{l(!1)},1e3)};S.useEffect(()=>{if(e.length===0)return;const y=document.getElementById("canvas"),P=y.getContext("2d");y.width=y.offsetWidth,y.height=y.offsetHeight;const d=()=>{cancelAnimationFrame(u.current),P.clearRect(0,0,y.width,y.height)};if(o){const f=new Image;return f.src=e[n].src,f.onload=()=>{const p=P.createPattern(f,"no-repeat");let x=1.5;P.fillStyle=p;class E{constructor(U,O){this.x=U,this.y=O,this.radius=x,this.speed=Math.random()*2,this.vx=this.speed,this.vy=this.vx*2}draw(){P.beginPath(),P.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),P.fill(),P.closePath()}update(){this.y>y.height&&(this.x=Math.random()*y.width,this.y=-5),this.x+=this.vx,this.y+=this.vy,this.draw()}}let N=[];for(let L=0;L<25;L++){let U=Math.random()*y.width,O=Math.random()*y.height;N.push(new E(U,O))}const j=()=>{P.clearRect(0,0,y.width,y.height),N.forEach(L=>L.update()),u.current=requestAnimationFrame(j)};j()},d}else d()},[n,o,e]);const h=()=>{a(!0)},g=()=>{a(!1)};if(e.length===0)return s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{id:"favorite",className:"choice",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Loading"})," ","Favorite Anime"]})}),s.jsx("div",{className:"love",children:s.jsxs("div",{className:"love-overview",children:[s.jsxs("div",{className:"love-image",children:[s.jsx("canvas",{id:"canvas"}),s.jsx("img",{src:"",alt:"",onMouseEnter:h,onMouseLeave:g})]}),s.jsx("h2",{style:{color:"var(--color-red)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(22rem)",cursor:"default"},children:"Please wait..."})]})})]});const{src:w,title:v}=e[n];return s.jsxs(s.Fragment,{children:[s.jsx("div",{id:"favorite",className:"choice",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Editor"}),"'s Choice Anime"]})}),s.jsx("div",{className:"love",children:s.jsxs("div",{className:"love-overview",children:[s.jsx("button",{tabIndex:"up",onClick:i?void 0:c,children:"⥣"}),s.jsxs("div",{className:"love-image",style:i?{filter:"blur(0.1rem)"}:{},children:[s.jsx("canvas",{id:"canvas"}),s.jsx("img",{src:w,alt:v,onMouseEnter:h,onMouseLeave:g})]}),s.jsxs("p",{children:[s.jsx("span",{style:{color:"var(--color-red)"},children:"Wee ♡ "}),v]}),s.jsx("button",{tabIndex:"down",onClick:i?void 0:m,children:"⥥"})]})})]})}function eh(){const e=["Sponsored","Featured","Remake","Hiatus"],[t,n]=S.useState(!1),[r,i]=S.useState("Featured"),l=new Date().getHours(),o=(d,f)=>{for(let p of f)if(d<p.limit)return[p.image];return[f[f.length-1].image]},a=[{limit:8,image:{src:"https://cdn.myanimelist.net/images/anime/1003/142645l.jpg",title:"T.P BON"}},{limit:14,image:{src:"https://cdn.myanimelist.net/images/anime/1801/142390l.jpg",title:"Ore dake Level Up na Ken"}},{limit:20,image:{src:"https://cdn.myanimelist.net/images/anime/1948/143550l.jpg",title:"Sengoku Youko: Senma Konton-hen"}},{limit:24,image:{src:"https://cdn.myanimelist.net/images/anime/1239/140803l.jpg",title:"Ao no Exorcist: Shimane Illuminati-hen"}}],u=[{limit:4,image:{src:"https://cdn.myanimelist.net/images/anime/1607/143049l.jpg",title:"Mahoutsukai no Yakusoku"}},{limit:8,image:{src:"https://cdn.myanimelist.net/images/anime/1799/139199l.jpg",title:"Medalist"}},{limit:12,image:{src:"https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",title:"Momentary Lily"}},{limit:16,image:{src:"https://cdn.myanimelist.net/images/anime/1011/142918l.jpg",title:"Izure Saikyou no Renkinjutsushi?"}},{limit:20,image:{src:"https://cdn.myanimelist.net/images/anime/1501/143569l.jpg",title:"NEET Kunoichi to Nazeka Dousei Hajimemashita"}},{limit:24,image:{src:"https://cdn.myanimelist.net/images/anime/1718/143481l.jpg",title:"Kimi no Koto ga Daidaisuki na 100-nin no Kanojo 2nd Season"}}],c=[{limit:8,image:{src:"https://cdn.myanimelist.net/images/anime/1105/140422l.jpg",title:"The One Piece"}},{limit:14,image:{src:"https://cdn.myanimelist.net/images/anime/1426/129194l.jpg",title:"Trigun Stampede"}},{limit:20,image:{src:"https://cdn.myanimelist.net/images/anime/1599/136532l.jpg",title:"Rurouni Kenshin: Meiji Kenkaku Romantan"}},{limit:24,image:{src:"https://cdn.myanimelist.net/images/anime/1059/142414l.jpg",title:"Ookami to Koushinryou: Merchant Meets the Wise Wolf"}}],m=[{src:"https://cdn.myanimelist.net/images/anime/3/67807l.jpg",title:"Magic Kaito 1412"}],h=o(l,a),g=o(l,u),w=o(l,c),y={Sponsored:h,Featured:g,Remake:w,Hiatus:m}[r],P=d=>{n(!0),i(d),setTimeout(()=>{n(!1)},1e3)};return s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"featured",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-red)"},children:r})," ",r==="Featured"?"in Winter Anime":"Anime"]})}),s.jsxs("div",{className:"winter",children:[s.jsx("div",{className:"winter-all",children:e.map(d=>s.jsx("button",{onClick:t?void 0:()=>P(d),className:d===r?"selected":"",children:d},d))}),s.jsxs("div",{className:"winter-overview",children:[s.jsxs("div",{className:"winter-image",style:t?{filter:"blur(0.1rem)"}:{},children:[s.jsx("small",{children:r==="Sponsored"&&"$"||r==="Featured"&&"❅ ❄ ❆"||r==="Remake"&&"♲"||r==="Hiatus"&&"zᶻ"}),s.jsx("img",{src:y[0].src,alt:y[0].title})]}),s.jsx("p",{children:s.jsx("span",{children:y[0].title})})]})]})]})}const qo=e=>e!==0;function th({animesLegacy:e}){return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("p",{className:"search-results",style:{margin:"0.2rem auto -0.4rem",cursor:"default"},children:[s.jsx("span",{children:qo(e.length)?"Remember":"Yameru"})," ",s.jsx("strong",{children:qo(e.length)?"Sunday Morning TV? Wee present 2000s childhood anime...":"Minna-san! Sorry for the inconvenience during its loading..."})]}),s.jsx("br",{})]})}function nh({animesLegacy:e,selectedAnimeLegacy:t,onSelectedAnimeLegacy:n}){return s.jsxs(s.Fragment,{children:[s.jsxs("main",{className:"main-legacy",children:[t&&s.jsx(Vf,{selectedAnime:t,legacy:!0}),e.length>=0&&s.jsx(Uf,{animes:e,onSelectedAnime:n,legacy:!0})]}),t&&qo(t.mal_id)&&s.jsx("div",{className:"box-separator"})]})}function rh({animesLegacy:e,selectedAnimeLegacy:t,onSelectedAnimeLegacy:n}){return s.jsxs(s.Fragment,{children:[s.jsx(th,{animesLegacy:e}),s.jsx(nh,{animesLegacy:e,selectedAnimeLegacy:t,onSelectedAnimeLegacy:n})]})}function ih(){const e=["Season Now","Top Anime","Top Manga","Top Characters"],[t,n]=S.useState(""),[r,i]=S.useState([]),[l,o]=S.useState(!1),[a,u]=S.useState(!1),[c,m]=S.useState(0),h=async y=>{o(!0);try{const d=await fetch(y==="Season Now"&&"https://api.jikan.moe/v4/seasons/now?limit=25"||y==="Top Anime"&&"https://api.jikan.moe/v4/top/anime?limit=25"||y==="Top Manga"&&"https://api.jikan.moe/v4/top/manga?limit=25"||y==="Top Characters"&&"https://api.jikan.moe/v4/top/characters?limit=25");if(!d.ok)throw new Error("Failed to fetch data");const f=await d.json();f.data?(i(f.data),m(0)):i([])}catch(P){console.log("Error fetching data:",P)}finally{o(!1)}};S.useEffect(()=>{t&&h(t)},[t]);const g=()=>{u(!0),m(y=>y===0?r.length-1:y-1),setTimeout(()=>{u(!1)},1e3)},w=()=>{u(!0),m(y=>y===r.length-1?0:y+1),setTimeout(()=>{u(!1)},1e3)};let v="";return c+1==1||c+1==21?v="ˢᵗ":c+1==2||c+1==22?v="ⁿᵈ":c+1==3||c+1==23?v="ʳᵈ":v="ᵗʰ",s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{id:"category",className:"choose",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-orange)"},children:t||"Recommended"})," ","for you"]})}),s.jsxs("div",{className:"category",style:{minHeight:"43rem"},children:[s.jsx("div",{className:"category-all",children:e.map(y=>s.jsx("button",{onClick:l?void 0:()=>n(y),className:y===t?"selected":"",children:y},y))}),s.jsxs("div",{className:"category-overview",children:[s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(22rem)",cursor:"default"},children:t?l&&"Please wait...":"Select Category"}),l?"":r.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("button",{tabIndex:"up",onClick:a?void 0:g,children:"⥣"}),s.jsxs("div",{className:"category-image",children:[s.jsx("small",{children:t=="Season Now"?"▸":`${c+1}${v}`}),s.jsx("img",{style:!a&&t=="Top Characters"?{border:"0.2rem solid var(--color-white)",filter:"grayscale(1)",display:"block",margin:"0 auto"}:!a&&t!="Top Characters"?{display:"block",margin:"0 auto"}:a&&t!="Top Characters"?{display:"block",margin:"0 auto",filter:"blur(0.1rem)"}:{border:"0.2rem solid var(--color-white)",display:"block",margin:"0 auto",filter:"grayscale(1) blur(0.25rem)"},src:r[c].images.jpg.image_url,alt:r[c].title||r[c].name}),s.jsx("p",{children:r[c].title||r[c].name})]}),s.jsx("button",{className:"arrow",tabIndex:"down",onClick:a?void 0:w,children:"⥥"})]})]})]})]})}function lh(){var u;const[e,t]=S.useState([]),[n,r]=S.useState(!1),[i,l]=S.useState("Studio Ghibli");S.useEffect(()=>{fetch("./anime-studio-data.json").then(c=>{if(!c.ok)throw new Error("No Network");return c.json()}).then(c=>{t(c)}).catch(c=>{console.error("Error fetching data:",c)})},[]);const o=c=>{r(!0),l(c),setTimeout(()=>{r(!1)},1e3)},a=(u=e.find(c=>c.studio===i))==null?void 0:u.image;return s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsxs("div",{className:"masterpiece",children:[s.jsx("div",{className:"ornament"}),s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-red)"},children:e.length>0?i:"The Gift"})," ",e.length>0?"Masterpiece":"from Studio Anime"]})]}),s.jsxs("div",{className:"studio",children:[a&&s.jsx("div",{className:"studio-all",children:e.map(c=>s.jsx("button",{onClick:n?void 0:()=>o(c.studio),className:c.studio===i?"selected":"",children:c.studio},c.studio))}),s.jsx("div",{className:"studio-overview",children:a?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"studio-image",style:n?{filter:"blur(0.1rem)"}:{},children:[s.jsx("small",{children:"✦"}),s.jsx("img",{src:a.src,alt:a.title})]}),s.jsx("p",{children:s.jsx("span",{children:a.title})})]}):s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Please wait..."})}),s.jsx("div",{className:"ornament"})]})]})}const Nu=e=>e!=="No Data";function oh({animes:e,selectedAnime:t,onSelectedAnime:n}){return s.jsxs(s.Fragment,{children:[s.jsxs("main",{className:"main",children:[t&&Nu(t.mal_id)&&s.jsx(Vf,{selectedAnime:t}),e.length>0&&s.jsx(Uf,{animes:e,onSelectedAnime:n})]}),t&&Nu(t.mal_id)&&s.jsx("div",{className:"box-separator"})]})}function sh({animes:e,selectedAnime:t,onSelectedAnime:n}){const[r,i]=S.useState([]),[l,o]=S.useState(null);S.useEffect(()=>{fetch("./anime-legacy-data.json").then(u=>u.json()).then(u=>{i(u),o(u[0])})},[]);const a=u=>{o(u)};return s.jsxs(s.Fragment,{children:[s.jsx(oh,{animes:e,selectedAnime:t,onSelectedAnime:n}),s.jsx(b1,{}),s.jsx(eh,{}),s.jsx(rh,{animesLegacy:r,selectedAnimeLegacy:l,onSelectedAnimeLegacy:a}),s.jsx(ih,{}),s.jsx(lh,{})]})}function ah(){const[e,t]=S.useState([]),[n,r]=S.useState([]),[i,l]=S.useState(0),[o,a]=S.useState(!1),[u,c]=S.useState(!1),[m,h]=S.useState("");S.useEffect(()=>{(async()=>{try{const p=await(await fetch("https://api.jikan.moe/v4/genres/anime")).json();t(p.data)}catch(f){console.error("Error fetching genres:",f)}})()},[]);const g=async(d,f)=>{a(!0),h(f);try{const E=(await(await fetch(`https://api.jikan.moe/v4/anime?genres=${d}&limit=25`)).json()).data.filter(N=>N.rating!=="R+ - Mild Nudity"&&N.rating!=="R - 17+ (violence & profanity)"&&N.type!=="OVA"&&N.type!=="Movie"&&N.type==="TV"||N.rating!=="R+ - Mild Nudity"&&N.rating!=="R - 17+ (violence & profanity)"&&N.type==="OVA"&&N.type!=="Movie");r(E),l(0)}catch(p){console.error("Error fetching anime:",p)}finally{a(!1)}},w=()=>{c(!0),l(d=>d===0?n.length-1:d-1),setTimeout(()=>{c(!1)},1e3)},v=()=>{c(!0),l(d=>d===n.length-1?0:d+1),setTimeout(()=>{c(!1)},1e3)},y=d=>d[i].rating==="Rx - Hentai"?{filter:"grayscale(1) brightness(0.3) contrast(0.3)",opacity:"0.7"}:{},P=d=>d[i].rating==="Rx - Hentai"?{filter:"grayscale(1)",cursor:"help"}:{};return s.jsxs(s.Fragment,{children:[s.jsx("aside",{id:"genre",className:"aside left",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"check",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Genre"})," ","Anime"]})}),s.jsx("div",{className:"genre-all",children:e.map(d=>s.jsx("button",{onClick:o?void 0:()=>g(d.mal_id,d.name),className:d.name===m?"selected":"",style:d.name==="Hentai"?{filter:"grayscale(1)",cursor:"help"}:{},children:d.name},d.mal_id))})]})}),s.jsx("aside",{className:"aside right",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"check",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:m||"Genre"})," ","Anime"]})}),s.jsx("div",{className:"genre-list",children:s.jsx("div",{className:"genre-list-overview",children:o?s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Please wait..."}):n.length>0?s.jsxs(s.Fragment,{children:[s.jsx("button",{tabIndex:"up",onClick:u?void 0:w,children:"⥣"}),s.jsxs("div",{className:"genre-list-image",style:u?{filter:"blur(0.1rem)"}:{},children:[s.jsx("small",{children:"☆"}),s.jsx("img",{src:n[i].images.jpg.image_url,alt:n[i].title,style:y(n)})]}),s.jsx("p",{style:P(n),children:n[i].title}),s.jsx("button",{className:"arrow",tabIndex:"down",onClick:u?void 0:v,children:"⥥"})]}):s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Select Genre"})})})]})})]})}function uh(){const[e,t]=S.useState(null),[n,r]=S.useState(0),[i,l]=S.useState(!0),o=[56785,52742,49785,52196,55855,56840,52299,58488,53889,57152,55318,58739,58822,58082,57616,57557,52093,50613,51122,25517,56785,52742,49785,52196,55855,56840,52299,58488,53889,57152,55318,58739,58822,58082,57616,57557,52093,50613,51122,25517],a=["Detective Conan","Haikyuu!!","Fairy Tail","Date A Live","Kuroshitsuji","T.P BON","Ore dake Level Up na Ken","Sengoku Youko","Ao no Exorcist","Mahoutsukai no Yakusoku","Medalist","Momentary Lily","Izure Saikyou no Renkinjutsushi?","NEET Kunoichi to Nazeka Dousei Hajimemashita","Kimi no Koto ga Daidaisuki na 100-nin no Kanojo","The One Piece","Trigun Stampede","Rurouni Kenshin","Ookami to Koushinryou","Magic Kaito 1412","Conan","Hinata","Natsu","Shido Itsuka","Ciel","Bon Namihira","Jin-woo","Jinka Yamato","Rin","Akira Masaki","Inori Yuitsuka","Yuri Kawazu","Takumi","Shizuri","Rentaro","Monkey D. Luffy","Vash","Kenshin","Kraft Lawrence","KID"];S.useEffect(()=>{(()=>{setTimeout(()=>{u(o[n])},15e3)})()},[n]);const u=async c=>{l(!0);try{const m=await fetch(`https://api.jikan.moe/v4/anime/${c}`);if(!m.ok)throw new Error("Failed to fetch data");const h=await m.json();t(h.data)}catch(m){console.error("Error fetching trailers:",m)}finally{l(!1)}};return s.jsxs(s.Fragment,{children:[s.jsx("aside",{className:"aside last-left",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"recent",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Recent"})," ","Trailer Anime"]})}),s.jsx("div",{className:"trailer-all",children:a.map((c,m)=>s.jsx("button",{onClick:i?void 0:()=>{l(!0),r(m)},className:m===n?"selected":"",style:c==="Magic Kaito 1412"||c==="KID"?{filter:"grayscale(1)",cursor:"not-allowed"}:void 0,children:c},c))})]})}),s.jsx("aside",{className:"aside last-right",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"recent",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:e?"Recent":"Loading"})," ","Trailer Anime"]})}),s.jsx("div",{className:"trailer-list",children:s.jsx("div",{className:"trailer-list-overview",children:i?s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Please wait..."}):e?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"trailer-list-video",children:e.trailer.embed_url&&s.jsx("iframe",{width:"100%",height:"100%",src:`${e.trailer.embed_url}?autoplay=0&mute=0`,title:"Watch trailer on YouTube",loading:"lazy",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0,style:{border:"0"}})}),s.jsx("p",{children:e.title})]}):s.jsx("h2",{style:{color:"var(--color-white)",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(16rem)",cursor:"default"},children:"Select Trailer"})})})]})})]})}function ch(){const[e,t]=S.useState([]),[n,r]=S.useState(!0),[i,l]=S.useState(null),[o,a]=S.useState(null),u=[56785,52742,49785,52196,55855,56840,52299,58488,53889,57152,55318,58739,58822,58082,57616,57557,52093,50613,51122,25517],c=()=>{const h=Math.floor(Math.random()*u.length);return u[h]};S.useEffect(()=>{a(c())},[]),S.useEffect(()=>{o!==null&&(r(!0),fetch(`https://api.jikan.moe/v4/anime/${o}/news`).then(h=>{if(!h.ok)throw new Error("Network response was not ok");return h.json()}).then(h=>{t(h.data),r(!1)}).catch(h=>{l(h),r(!1)}))},[o]);const m=()=>{a(c())};return s.jsx("aside",{className:"aside bottom-left",children:s.jsxs(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:[s.jsx("div",{className:"magazine",children:s.jsxs("h2",{children:[s.jsx("span",{style:{color:"var(--color-blue-light)"},children:"Magazine"})," ","Anime"]})}),s.jsxs("div",{className:"news-all",children:[s.jsx("button",{onClick:m,children:i?"⥁":n?"↻":"⟳"}),s.jsx("ul",{children:e.map(h=>s.jsxs("li",{children:[s.jsx("a",{href:h.url,target:"_blank",rel:"noopener noreferrer nofollow",title:"Read news in My Anime List",children:h.title}),s.jsx("br",{}),s.jsx("span",{children:new Date(h.date).toLocaleDateString()})]},h.mal_id))})]})]})})}function fh(){return s.jsx("aside",{className:"aside bottom-right",children:s.jsx(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:s.jsx("div",{className:"tabloid-all",children:s.jsx("div",{className:"poster",title:"WeeBoo"})})})})}function dh(){const e=[{src:"watch-anime-in-now/BSTATION.webp",alt:"Bstation"},{src:"watch-anime-in-now/CRUNCHYROLL.webp",alt:"Crunchyroll"},{src:"watch-anime-in-now/DISNEYPLUSHOTSTAR.webp",alt:"Disney+ Hotstar"},{src:"watch-anime-in-now/FUNIMATION.webp",alt:"Funimation"},{src:"watch-anime-in-now/GENFLIX.webp",alt:"Genflix"},{src:"watch-anime-in-now/IQIYI.webp",alt:"iQIYI"},{src:"watch-anime-in-now/NETFLIX.webp",alt:"Netflix"},{src:"watch-anime-in-now/PRIMEVIDEO.webp",alt:"Prime Video"},{src:"watch-anime-in-now/VIDIO.webp",alt:"Vidio"},{src:"watch-anime-in-now/VIU.webp",alt:"Viu"},{src:"watch-anime-in-now/WETV.webp",alt:"WeTV"}],t=[{src:"watch-anime-in-then/ANTV.webp",alt:"ANTV (old)",size:"M"},{src:"watch-anime-in-then/GLOBALTV.webp",alt:"Global TV (old renamed)",size:"M"},{src:"watch-anime-in-then/INDOSIAR.webp",alt:"Indosiar (old)",size:"L"},{src:"watch-anime-in-then/RCTI.webp",alt:"RCTI (old)",size:"M"},{src:"watch-anime-in-then/SCTV.webp",alt:"SCTV (old)",size:"L"},{src:"watch-anime-in-then/SPACETOON.webp",alt:"Spacetoon (closed)",size:"L"},{src:"watch-anime-in-then/TPI.webp",alt:"TPI (closed)",size:"XL"},{src:"watch-anime-in-then/TRANSTV.webp",alt:"Trans TV (old)",size:"XL"},{src:"watch-anime-in-then/TV7.webp",alt:"TV7 (closed)",size:"XL"}];return s.jsxs(s.Fragment,{children:[s.jsx("aside",{className:"aside top-left",children:s.jsx(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:s.jsx("div",{className:"channels stream",children:e.map(n=>s.jsx("div",{className:"frame",title:n.alt,children:s.jsx("img",{src:n.src,alt:n.alt})},n.alt))})})}),s.jsx("aside",{className:"aside top-right",children:s.jsx(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:s.jsx("div",{className:"channels tv",children:t.map(n=>s.jsx("div",{className:"frame",title:n.alt,children:s.jsx("img",{src:n.src,alt:n.alt,style:n.size==="L"?{width:"73.5%"}:n.size==="XL"?{width:"65%"}:{}})},n.alt))})})})]})}function ph(){return s.jsxs(s.Fragment,{children:[s.jsx(ah,{}),s.jsx(uh,{}),s.jsx(ch,{}),s.jsx(fh,{}),s.jsx(dh,{}),s.jsx("figure",{className:"closing",children:s.jsxs(Ne,{triggerOnce:!0,duration:1500,direction:"down",easing:"ease-out",children:[s.jsxs("figcaption",{children:[s.jsx("h6",{children:"い"}),s.jsx("h6",{children:"ら"}),s.jsx("h6",{children:"っ"}),s.jsx("h6",{children:"し"}),s.jsx("h6",{children:"ゃ"}),s.jsx("h6",{children:"い"}),s.jsx("h6",{children:"ま"}),s.jsx("h6",{children:"せ"})]}),s.jsxs("figcaption",{children:[s.jsx("h6",{children:"み"}),s.jsx("h6",{children:"な"}),s.jsx("h6",{children:"さ"}),s.jsx("h6",{children:"ん"})]})]})})]})}function mh(){return s.jsx("figure",{className:"separator",children:s.jsx("img",{src:"Detective Conan Logo Internazionale.webp",alt:""})})}const hh="#0A0A23",gh=S.forwardRef(function({title:t="freeCodeCamp",color:n="currentColor",size:r=24,...i},l){return n==="default"&&(n=hh),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:l,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z"})]})}),yh="#181717",vh=S.forwardRef(function({title:t="GitHub",color:n="currentColor",size:r=24,...i},l){return n==="default"&&(n=yh),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:l,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}),xh="#61DAFB",wh=S.forwardRef(function({title:t="React",color:n="currentColor",size:r=24,...i},l){return n==="default"&&(n=xh),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:l,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"})]})}),Sh="#149EF2",kh=S.forwardRef(function({title:t="Sololearn",color:n="currentColor",size:r=24,...i},l){return n==="default"&&(n=Sh),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:l,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M18.621 16.084a8.483 8.483 0 0 1-2.922 6.427c-.603.53-.19 1.522.613 1.442a9.039 9.039 0 0 0 1.587-.3 8.32 8.32 0 0 0 5.787-5.887 8.555 8.555 0 0 0-8.258-10.832 9.012 9.012 0 0 0-1.045.06c-.794.1-.995 1.161-.29 1.542 2.701 1.452 4.53 4.285 4.53 7.548zM7.906 18.597a8.538 8.538 0 0 1-6.45-2.913c-.532-.6-1.527-.19-1.446.61a8.943 8.943 0 0 0 .3 1.582c.794 2.823 3.064 5.026 5.907 5.766 5.727 1.492 10.87-2.773 10.87-8.229 0-.35-.02-.7-.06-1.04-.1-.792-1.165-.992-1.547-.29a8.597 8.597 0 0 1-7.574 4.514zM5.382 7.916a8.483 8.483 0 0 1 2.924-6.427c.603-.531.19-1.522-.613-1.442a9.93 9.93 0 0 0-1.598.29A8.339 8.339 0 0 0 .31 6.224a8.555 8.555 0 0 0 8.258 10.832c.352 0 .704-.02 1.045-.06.794-.1.995-1.162.29-1.542a8.54 8.541 0 0 1-4.52-7.538zm10.72-2.513a8.538 8.538 0 0 1 6.45 2.913c.53.6 1.526.19 1.445-.61a8.945 8.945 0 0 0-.3-1.583C22.902 3.3 20.632 1.098 17.788.357 12.071-1.145 6.928 3.12 6.928 8.576c0 .35.02.7.06 1.041.1.791 1.168.991 1.549.29A8.58 8.58 0 0 1 16.1 5.404z"})]})}),jh="#000000",Ch=S.forwardRef(function({title:t="Vercel",color:n="currentColor",size:r=24,...i},l){return n==="default"&&(n=jh),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:l,...i,children:[s.jsx("title",{children:t}),s.jsx("path",{d:"M24 22.525H0l12-21.05 12 21.05z"})]})});function Eh(){const[e,t]=S.useState(!1),n=i=>{i.preventDefault()},r=()=>{t(!0),setTimeout(()=>{t(!1)},1250)};return s.jsxs("footer",{children:[s.jsx(Ne,{triggerOnce:!0,delay:250,duration:1e3,children:s.jsxs("div",{className:"footer",children:[s.jsxs("div",{className:"social-icons",children:[s.jsx("a",{href:"https://nantunggaputra.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:s.jsx(Ch,{color:"var(--color-white)",size:24})}),s.jsx("a",{href:"https://github.com/nantunggaputra",target:"_blank",rel:"noopener noreferrer",children:s.jsx(vh,{color:"var(--color-white)",size:24})}),s.jsx("a",{href:"https://www.sololearn.com/en/profile/29010238",target:"_blank",rel:"noopener noreferrer",children:s.jsx(kh,{color:"var(--color-white)",size:24})}),s.jsx("a",{href:"https://www.freecodecamp.org/fcc25a60d51-9b4d-4215-8292-018b8c933994",target:"_blank",rel:"noopener noreferrer",children:s.jsx(gh,{color:"var(--color-white)",size:24})}),s.jsx("a",{style:{cursor:"pointer"},children:s.jsx(wh,{color:"var(--color-white)",size:24})})]}),s.jsx("h3",{children:s.jsxs("a",{href:"https://nantunggaputra.github.io/HTML/",target:"_blank",rel:"noopener noreferrer",children:["web",s.jsx("span",{children:"dev"}),"el",s.jsx("span",{children:"op"}),"er"]})}),s.jsxs("p",{children:["Created by"," ",s.jsxs("a",{href:"https://www.linkedin.com/in/nantungga-putra-451779116/",target:"_blank",rel:"noopener noreferrer",children:["Nan",s.jsx("span",{children:"t"}),"ungga Put",s.jsx("span",{children:"r"}),"a"]})," ","| ©2024"]})]})}),s.jsx("div",{className:"foot",children:s.jsxs("div",{className:"foot-menu",children:[s.jsxs("div",{className:"left-menu",children:[s.jsxs("div",{children:[s.jsx("h2",{children:s.jsxs("a",{href:"https://nantunggaputra.github.io/HTML/",target:"_blank",rel:"noopener noreferrer",children:["WEB",s.jsx("wbr",{}),"DEVELOPER"]})}),s.jsxs("small",{style:{textTransform:"none",color:"#767676",cursor:"text"},children:["anggunnantunggaputra",s.jsx("wbr",{}),"@gmail.com"]}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("p",{children:"About Us"}),s.jsx("p",{children:"Contact Us"}),s.jsx("p",{className:"fs",children:"Fans Screening"}),s.jsx("p",{className:"afa",children:"Anime Festival Asia (ID)"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"rss",children:"RSS"}),s.jsx("p",{className:"sitemap",children:"Sitemap"}),s.jsx("p",{children:"Privacy Policy"}),s.jsx("p",{children:"Terms & Conditions"})]})]}),s.jsx("div",{className:"right-menu",children:s.jsxs("form",{onSubmit:n,children:[s.jsx("label",{htmlFor:"subs",children:s.jsx("p",{style:{fontSize:"1.4rem",textTransform:"none",letterSpacing:"1.14px",margin:"0.4rem 0",cursor:"pointer"},children:"Subscribe to anime newsletter"})}),s.jsx("input",{type:"email",id:"subs",required:!0}),s.jsxs("button",{type:"submit",title:"Subscribe",onClick:r,children:["🔔",s.jsx("img",{src:"Kaito Kid Logo 3D.webp",alt:""})]})]})})]})}),e&&s.jsx("div",{className:"lights"}),s.jsx("div",{className:"gototop",children:s.jsx(ot,{itemKey:"top-button",titleOn:"",titleOff:"Go to top",url:"#",titleLink:"Go to top",iconLink:"⥣"})})]})}function Nh(){return s.jsx("div",{className:"loading-page",children:s.jsx("h1",{})})}function _h(){const e=[{mal_id:"No Data",title:"Minna-san? What is the best anime for you?",year:2024,image:"https://cdn.myanimelist.net/images/anime/7/75199.jpg"}],[t,n]=S.useState(e),[r,i]=S.useState(null),l=async a=>{try{const u=await fetch(`https://api.jikan.moe/v4/anime?q=${a}&limit=25`);if(!u.ok)throw new Error("Failed to fetch data");const m=(await u.json()).data;return n(m),i(m[0]||null),m}catch(u){return console.error("Error fetching data:",u),alert(`${u}
Minna-san! An error occurred in the result data. Please enter the correct title or try again later.`),window.location.reload(),[]}},o=a=>{i(a)};return s.jsxs(s.Fragment,{children:[s.jsx(Yp,{}),s.jsx(em,{fetchAnime:l}),s.jsx(sh,{animes:t,fetchAnime:l,selectedAnime:r,onSelectedAnime:o}),s.jsx(ph,{}),s.jsx(mh,{}),s.jsx(Eh,{})]})}function Ph(){const[e,t]=S.useState(!0);return S.useEffect(()=>{const n=setTimeout(()=>{t(!1)},4e3);return()=>clearTimeout(n)},[]),s.jsxs(s.Fragment,{children:[e&&s.jsx(Nh,{}),!e&&s.jsx(_h,{})]})}ql.createRoot(document.getElementById("root")).render(s.jsx(Au.StrictMode,{children:s.jsx(Ph,{})}));
