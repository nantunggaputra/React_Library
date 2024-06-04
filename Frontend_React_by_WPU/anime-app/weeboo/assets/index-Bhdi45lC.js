function L0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function z0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kc={exports:{}},eo={},Ec={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=Symbol.for("react.element"),M0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),I0=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),B0=Symbol.for("react.forward_ref"),U0=Symbol.for("react.suspense"),H0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),Wa=Symbol.iterator;function W0(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var Cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jc=Object.assign,Nc={};function An(e,t,n){this.props=e,this.context=t,this.refs=Nc,this.updater=n||Cc}An.prototype.isReactComponent={};An.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};An.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _c(){}_c.prototype=An.prototype;function Ll(e,t,n){this.props=e,this.context=t,this.refs=Nc,this.updater=n||Cc}var zl=Ll.prototype=new _c;zl.constructor=Ll;jc(zl,An.prototype);zl.isPureReactComponent=!0;var Ka=Array.isArray,Rc=Object.prototype.hasOwnProperty,Ml={current:null},Tc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Rc.call(t,r)&&!Tc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Mr,type:e,key:o,ref:s,props:i,_owner:Ml.current}}function K0(e,t){return{$$typeof:Mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Al(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr}function Q0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qa=/\/+/g;function Xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q0(""+e.key):t.toString(36)}function ci(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Mr:case M0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Xo(s,0):r,Ka(i)?(n="",e!=null&&(n=e.replace(Qa,"$&/")+"/"),ci(i,t,n,"",function(u){return u})):i!=null&&(Al(i)&&(i=K0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Qa,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Ka(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Xo(o,l);s+=ci(o,t,n,a,i)}else if(a=W0(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Xo(o,l++),s+=ci(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Wr(e,t,n){if(e==null)return e;var r=[],i=0;return ci(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},fi={transition:null},X0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:fi,ReactCurrentOwner:Ml};function Oc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Wr,forEach:function(e,t,n){Wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wr(e,function(){t++}),t},toArray:function(e){return Wr(e,function(t){return t})||[]},only:function(e){if(!Al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=An;A.Fragment=A0;A.Profiler=I0;A.PureComponent=Ll;A.StrictMode=F0;A.Suspense=U0;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;A.act=Oc;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ml.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Rc.call(t,a)&&!Tc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Mr,type:e.type,key:i,ref:o,props:r,_owner:s}};A.createContext=function(e){return e={$$typeof:$0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:D0,_context:e},e.Consumer=e};A.createElement=Pc;A.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:B0,render:e}};A.isValidElement=Al;A.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:Y0}};A.memo=function(e,t){return{$$typeof:H0,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=fi.transition;fi.transition={};try{e()}finally{fi.transition=t}};A.unstable_act=Oc;A.useCallback=function(e,t){return xe.current.useCallback(e,t)};A.useContext=function(e){return xe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};A.useEffect=function(e,t){return xe.current.useEffect(e,t)};A.useId=function(){return xe.current.useId()};A.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return xe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};A.useRef=function(e){return xe.current.useRef(e)};A.useState=function(e){return xe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return xe.current.useTransition()};A.version="18.3.1";Ec.exports=A;var P=Ec.exports;const Lc=z0(P),Ya=L0({__proto__:null,default:Lc},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=P,b0=Symbol.for("react.element"),q0=Symbol.for("react.fragment"),J0=Object.prototype.hasOwnProperty,Z0=G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ep={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)J0.call(t,r)&&!ep.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:b0,type:e,key:o,ref:s,props:i,_owner:Z0.current}}eo.Fragment=q0;eo.jsx=zc;eo.jsxs=zc;kc.exports=eo;var c=kc.exports,_s={},Mc={exports:{}},Ae={},Ac={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var M=T.length;T.push(z);e:for(;0<M;){var J=M-1>>>1,oe=T[J];if(0<i(oe,z))T[J]=z,T[M]=oe,M=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],M=T.pop();if(M!==z){T[0]=M;e:for(var J=0,oe=T.length,Hr=oe>>>1;J<Hr;){var Ut=2*(J+1)-1,Yo=T[Ut],Ht=Ut+1,Vr=T[Ht];if(0>i(Yo,M))Ht<oe&&0>i(Vr,Yo)?(T[J]=Vr,T[Ht]=M,J=Ht):(T[J]=Yo,T[Ut]=M,J=Ut);else if(Ht<oe&&0>i(Vr,M))T[J]=Vr,T[Ht]=M,J=Ht;else break e}}return z}function i(T,z){var M=T.sortIndex-z.sortIndex;return M!==0?M:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],f=1,h=null,y=3,S=!1,g=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(u)}}function x(T){if(v=!1,m(T),!g)if(n(a)!==null)g=!0,Ko(j);else{var z=n(u);z!==null&&Qo(x,z.startTime-T)}}function j(T,z){g=!1,v&&(v=!1,p(O),O=-1),S=!0;var M=y;try{for(m(z),h=n(a);h!==null&&(!(h.expirationTime>z)||T&&!Qe());){var J=h.callback;if(typeof J=="function"){h.callback=null,y=h.priorityLevel;var oe=J(h.expirationTime<=z);z=e.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(a)&&r(a),m(z)}else r(a);h=n(a)}if(h!==null)var Hr=!0;else{var Ut=n(u);Ut!==null&&Qo(x,Ut.startTime-z),Hr=!1}return Hr}finally{h=null,y=M,S=!1}}var N=!1,E=null,O=-1,q=5,F=-1;function Qe(){return!(e.unstable_now()-F<q)}function Un(){if(E!==null){var T=e.unstable_now();F=T;var z=!0;try{z=E(!0,T)}finally{z?Hn():(N=!1,E=null)}}else N=!1}var Hn;if(typeof d=="function")Hn=function(){d(Un)};else if(typeof MessageChannel<"u"){var Va=new MessageChannel,O0=Va.port2;Va.port1.onmessage=Un,Hn=function(){O0.postMessage(null)}}else Hn=function(){R(Un,0)};function Ko(T){E=T,N||(N=!0,Hn())}function Qo(T,z){O=R(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||S||(g=!0,Ko(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(y){case 1:case 2:case 3:var z=3;break;default:z=y}var M=y;y=z;try{return T()}finally{y=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=y;y=T;try{return z()}finally{y=M}},e.unstable_scheduleCallback=function(T,z,M){var J=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,T){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=M+oe,T={id:f++,callback:z,priorityLevel:T,startTime:M,expirationTime:oe,sortIndex:-1},M>J?(T.sortIndex=M,t(u,T),n(a)===null&&T===n(u)&&(v?(p(O),O=-1):v=!0,Qo(x,M-J))):(T.sortIndex=oe,t(a,T),g||S||(g=!0,Ko(j))),T},e.unstable_shouldYield=Qe,e.unstable_wrapCallback=function(T){var z=y;return function(){var M=y;y=z;try{return T.apply(this,arguments)}finally{y=M}}}})(Fc);Ac.exports=Fc;var tp=Ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np=P,Me=tp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,dr={};function rn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(dr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=Object.prototype.hasOwnProperty,rp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xa={},Ga={};function ip(e){return Rs.call(Ga,e)?!0:Rs.call(Xa,e)?!1:rp.test(e)?Ga[e]=!0:(Xa[e]=!0,!1)}function op(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sp(e,t,n,r){if(t===null||typeof t>"u"||op(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fl=/[\-:]([a-z])/g;function Il(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fl,Il);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fl,Il);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fl,Il);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dl(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sp(t,n,i,r)&&(n=null),r||i===null?ip(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kr=Symbol.for("react.element"),an=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Ts=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),$c=Symbol.for("react.context"),Bl=Symbol.for("react.forward_ref"),Ps=Symbol.for("react.suspense"),Os=Symbol.for("react.suspense_list"),Ul=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Bc=Symbol.for("react.offscreen"),ba=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=ba&&e[ba]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Go;function Zn(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||""}return`
`+Go+e}var bo=!1;function qo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function lp(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function Ls(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case an:return"Portal";case Ts:return"Profiler";case $l:return"StrictMode";case Ps:return"Suspense";case Os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $c:return(e.displayName||"Context")+".Consumer";case Dc:return(e._context.displayName||"Context")+".Provider";case Bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ul:return t=e.displayName||null,t!==null?t:Ls(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return Ls(e(t))}catch{}}return null}function ap(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ls(t);case 8:return t===$l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function up(e){var t=Uc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qr(e){e._valueTracker||(e._valueTracker=up(e))}function Hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zs(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vc(e,t){t=t.checked,t!=null&&Dl(e,"checked",t,!1)}function Ms(e,t){Vc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?As(e,t.type,n):t.hasOwnProperty("defaultValue")&&As(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ja(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function As(e,t,n){(t!=="number"||_i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var er=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(er(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Wc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cp=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(e){cp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rr[t]=rr[e]})});function Yc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rr.hasOwnProperty(e)&&rr[e]?(""+t).trim():t+"px"}function Xc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fp=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,t){if(t){if(fp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function $s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bs=null;function Hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,xn=null,kn=null;function tu(e){if(e=Ir(e)){if(typeof Us!="function")throw Error(k(280));var t=e.stateNode;t&&(t=oo(t),Us(e.stateNode,e.type,t))}}function Gc(e){xn?kn?kn.push(e):kn=[e]:xn=e}function bc(){if(xn){var e=xn,t=kn;if(kn=xn=null,tu(e),t)for(e=0;e<t.length;e++)tu(t[e])}}function qc(e,t){return e(t)}function Jc(){}var Jo=!1;function Zc(e,t,n){if(Jo)return e(t,n);Jo=!0;try{return qc(e,t,n)}finally{Jo=!1,(xn!==null||kn!==null)&&(Jc(),bc())}}function mr(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Hs=!1;if(ht)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Hs=!1}function dp(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ir=!1,Ri=null,Ti=!1,Vs=null,pp={onError:function(e){ir=!0,Ri=e}};function mp(e,t,n,r,i,o,s,l,a){ir=!1,Ri=null,dp.apply(pp,arguments)}function hp(e,t,n,r,i,o,s,l,a){if(mp.apply(this,arguments),ir){if(ir){var u=Ri;ir=!1,Ri=null}else throw Error(k(198));Ti||(Ti=!0,Vs=u)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ef(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(on(e)!==e)throw Error(k(188))}function yp(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return nu(i),e;if(o===r)return nu(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function tf(e){return e=yp(e),e!==null?nf(e):null}function nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nf(e);if(t!==null)return t;e=e.sibling}return null}var rf=Me.unstable_scheduleCallback,ru=Me.unstable_cancelCallback,gp=Me.unstable_shouldYield,vp=Me.unstable_requestPaint,Z=Me.unstable_now,wp=Me.unstable_getCurrentPriorityLevel,Vl=Me.unstable_ImmediatePriority,of=Me.unstable_UserBlockingPriority,Pi=Me.unstable_NormalPriority,Sp=Me.unstable_LowPriority,sf=Me.unstable_IdlePriority,to=null,lt=null;function xp(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Cp,kp=Math.log,Ep=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(kp(e)/Ep|0)|0}var Xr=64,Gr=4194304;function tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=tr(l):(o&=s,o!==0&&(r=tr(o)))}else s=n&~i,s!==0?r=tr(s):o!==0&&(r=tr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),i=1<<n,r|=e[n],t&=~i;return r}function jp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Np(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-qe(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=jp(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lf(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function Zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function _p(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function af(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uf,Kl,cf,ff,df,Ks=!1,br=[],Rt=null,Tt=null,Pt=null,hr=new Map,yr=new Map,Ct=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Kn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ir(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case"focusin":return Rt=Kn(Rt,e,t,n,r,i),!0;case"dragenter":return Tt=Kn(Tt,e,t,n,r,i),!0;case"mouseover":return Pt=Kn(Pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return hr.set(o,Kn(hr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yr.set(o,Kn(yr.get(o)||null,e,t,n,r,i)),!0}return!1}function pf(e){var t=Kt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=ef(n),t!==null){e.blockedOn=t,df(e.priority,function(){cf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bs=r,n.target.dispatchEvent(r),Bs=null}else return t=Ir(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function ou(e,t,n){di(e)&&n.delete(t)}function Pp(){Ks=!1,Rt!==null&&di(Rt)&&(Rt=null),Tt!==null&&di(Tt)&&(Tt=null),Pt!==null&&di(Pt)&&(Pt=null),hr.forEach(ou),yr.forEach(ou)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ks||(Ks=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Pp)))}function gr(e){function t(i){return Qn(i,e)}if(0<br.length){Qn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Qn(Rt,e),Tt!==null&&Qn(Tt,e),Pt!==null&&Qn(Pt,e),hr.forEach(t),yr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)pf(n),n.blockedOn===null&&Ct.shift()}var En=wt.ReactCurrentBatchConfig,Li=!0;function Op(e,t,n,r){var i=B,o=En.transition;En.transition=null;try{B=1,Ql(e,t,n,r)}finally{B=i,En.transition=o}}function Lp(e,t,n,r){var i=B,o=En.transition;En.transition=null;try{B=4,Ql(e,t,n,r)}finally{B=i,En.transition=o}}function Ql(e,t,n,r){if(Li){var i=Qs(e,t,n,r);if(i===null)us(e,t,r,zi,n),iu(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(iu(e,r),t&4&&-1<Rp.indexOf(e)){for(;i!==null;){var o=Ir(i);if(o!==null&&uf(o),o=Qs(e,t,n,r),o===null&&us(e,t,r,zi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else us(e,t,r,null,n)}}var zi=null;function Qs(e,t,n,r){if(zi=null,e=Hl(r),e=Kt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ef(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zi=e,null}function mf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wp()){case Vl:return 1;case of:return 4;case Pi:case Sp:return 16;case sf:return 536870912;default:return 16}default:return 16}}var Nt=null,Yl=null,pi=null;function hf(){if(pi)return pi;var e,t=Yl,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return pi=i.slice(e,1<r?1-r:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function su(){return!1}function Fe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qr:su,this.isPropagationStopped=su,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Fe(Fn),Fr=G({},Fn,{view:0,detail:0}),zp=Fe(Fr),es,ts,Yn,no=G({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(es=e.screenX-Yn.screenX,ts=e.screenY-Yn.screenY):ts=es=0,Yn=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),lu=Fe(no),Mp=G({},no,{dataTransfer:0}),Ap=Fe(Mp),Fp=G({},Fr,{relatedTarget:0}),ns=Fe(Fp),Ip=G({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=Fe(Ip),$p=G({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bp=Fe($p),Up=G({},Fn,{data:0}),au=Fe(Up),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wp[e])?!!t[e]:!1}function Gl(){return Kp}var Qp=G({},Fr,{key:function(e){if(e.key){var t=Hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=Fe(Qp),Xp=G({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=Fe(Xp),Gp=G({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),bp=Fe(Gp),qp=G({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=Fe(qp),Zp=G({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),em=Fe(Zp),tm=[9,13,27,32],bl=ht&&"CompositionEvent"in window,or=null;ht&&"documentMode"in document&&(or=document.documentMode);var nm=ht&&"TextEvent"in window&&!or,yf=ht&&(!bl||or&&8<or&&11>=or),cu=" ",fu=!1;function gf(e,t){switch(e){case"keyup":return tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function rm(e,t){switch(e){case"compositionend":return vf(t);case"keypress":return t.which!==32?null:(fu=!0,cu);case"textInput":return e=t.data,e===cu&&fu?null:e;default:return null}}function im(e,t){if(cn)return e==="compositionend"||!bl&&gf(e,t)?(e=hf(),pi=Yl=Nt=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yf&&t.locale!=="ko"?null:t.data;default:return null}}var om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!om[e.type]:t==="textarea"}function wf(e,t,n,r){Gc(r),t=Mi(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,vr=null;function sm(e){Pf(e,0)}function ro(e){var t=pn(e);if(Hc(t))return e}function lm(e,t){if(e==="change")return t}var Sf=!1;if(ht){var rs;if(ht){var is="oninput"in document;if(!is){var pu=document.createElement("div");pu.setAttribute("oninput","return;"),is=typeof pu.oninput=="function"}rs=is}else rs=!1;Sf=rs&&(!document.documentMode||9<document.documentMode)}function mu(){sr&&(sr.detachEvent("onpropertychange",xf),vr=sr=null)}function xf(e){if(e.propertyName==="value"&&ro(vr)){var t=[];wf(t,vr,e,Hl(e)),Zc(sm,t)}}function am(e,t,n){e==="focusin"?(mu(),sr=t,vr=n,sr.attachEvent("onpropertychange",xf)):e==="focusout"&&mu()}function um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ro(vr)}function cm(e,t){if(e==="click")return ro(t)}function fm(e,t){if(e==="input"||e==="change")return ro(t)}function dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:dm;function wr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rs.call(t,i)||!et(e[i],t[i]))return!1}return!0}function hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yu(e,t){var n=hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hu(n)}}function kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ef(){for(var e=window,t=_i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pm(e){var t=Ef(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kf(n.ownerDocument.documentElement,n)){if(r!==null&&ql(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=yu(n,o);var s=yu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mm=ht&&"documentMode"in document&&11>=document.documentMode,fn=null,Ys=null,lr=null,Xs=!1;function gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xs||fn==null||fn!==_i(r)||(r=fn,"selectionStart"in r&&ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&wr(lr,r)||(lr=r,r=Mi(Ys,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},os={},Cf={};ht&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function io(e){if(os[e])return os[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cf)return os[e]=t[n];return e}var jf=io("animationend"),Nf=io("animationiteration"),_f=io("animationstart"),Rf=io("transitionend"),Tf=new Map,vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Tf.set(e,t),rn(t,[e])}for(var ss=0;ss<vu.length;ss++){var ls=vu[ss],hm=ls.toLowerCase(),ym=ls[0].toUpperCase()+ls.slice(1);Dt(hm,"on"+ym)}Dt(jf,"onAnimationEnd");Dt(Nf,"onAnimationIteration");Dt(_f,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(Rf,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hp(r,t,void 0,e),e.currentTarget=null}function Pf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;wu(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;wu(i,l,u),o=a}}}if(Ti)throw e=Vs,Ti=!1,Vs=null,e}function W(e,t){var n=t[Zs];n===void 0&&(n=t[Zs]=new Set);var r=e+"__bubble";n.has(r)||(Of(t,e,2,!1),n.add(r))}function as(e,t,n){var r=0;t&&(r|=4),Of(n,e,r,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[Zr]){e[Zr]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(gm.has(n)||as(n,!1,e),as(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,as("selectionchange",!1,t))}}function Of(e,t,n,r){switch(mf(t)){case 1:var i=Op;break;case 4:i=Lp;break;default:i=Ql}n=i.bind(null,t,n,e),i=void 0,!Hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function us(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Kt(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Zc(function(){var u=o,f=Hl(n),h=[];e:{var y=Tf.get(e);if(y!==void 0){var S=Xl,g=e;switch(e){case"keypress":if(mi(n)===0)break e;case"keydown":case"keyup":S=Yp;break;case"focusin":g="focus",S=ns;break;case"focusout":g="blur",S=ns;break;case"beforeblur":case"afterblur":S=ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=bp;break;case jf:case Nf:case _f:S=Dp;break;case Rf:S=Jp;break;case"scroll":S=zp;break;case"wheel":S=em;break;case"copy":case"cut":case"paste":S=Bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=uu}var v=(t&4)!==0,R=!v&&e==="scroll",p=v?y!==null?y+"Capture":null:y;v=[];for(var d=u,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=mr(d,p),x!=null&&v.push(xr(d,x,m)))),R)break;d=d.return}0<v.length&&(y=new S(y,g,null,n,f),h.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&n!==Bs&&(g=n.relatedTarget||n.fromElement)&&(Kt(g)||g[yt]))break e;if((S||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,S?(g=n.relatedTarget||n.toElement,S=u,g=g?Kt(g):null,g!==null&&(R=on(g),g!==R||g.tag!==5&&g.tag!==6)&&(g=null)):(S=null,g=u),S!==g)){if(v=lu,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=uu,x="onPointerLeave",p="onPointerEnter",d="pointer"),R=S==null?y:pn(S),m=g==null?y:pn(g),y=new v(x,d+"leave",S,n,f),y.target=R,y.relatedTarget=m,x=null,Kt(f)===u&&(v=new v(p,d+"enter",g,n,f),v.target=m,v.relatedTarget=R,x=v),R=x,S&&g)t:{for(v=S,p=g,d=0,m=v;m;m=sn(m))d++;for(m=0,x=p;x;x=sn(x))m++;for(;0<d-m;)v=sn(v),d--;for(;0<m-d;)p=sn(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=sn(v),p=sn(p)}v=null}else v=null;S!==null&&Su(h,y,S,v,!1),g!==null&&R!==null&&Su(h,R,g,v,!0)}}e:{if(y=u?pn(u):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var j=lm;else if(du(y))if(Sf)j=fm;else{j=um;var N=am}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=cm);if(j&&(j=j(e,u))){wf(h,j,n,f);break e}N&&N(e,y,u),e==="focusout"&&(N=y._wrapperState)&&N.controlled&&y.type==="number"&&As(y,"number",y.value)}switch(N=u?pn(u):window,e){case"focusin":(du(N)||N.contentEditable==="true")&&(fn=N,Ys=u,lr=null);break;case"focusout":lr=Ys=fn=null;break;case"mousedown":Xs=!0;break;case"contextmenu":case"mouseup":case"dragend":Xs=!1,gu(h,n,f);break;case"selectionchange":if(mm)break;case"keydown":case"keyup":gu(h,n,f)}var E;if(bl)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else cn?gf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(yf&&n.locale!=="ko"&&(cn||O!=="onCompositionStart"?O==="onCompositionEnd"&&cn&&(E=hf()):(Nt=f,Yl="value"in Nt?Nt.value:Nt.textContent,cn=!0)),N=Mi(u,O),0<N.length&&(O=new au(O,e,null,n,f),h.push({event:O,listeners:N}),E?O.data=E:(E=vf(n),E!==null&&(O.data=E)))),(E=nm?rm(e,n):im(e,n))&&(u=Mi(u,"onBeforeInput"),0<u.length&&(f=new au("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=E))}Pf(h,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mr(e,n),o!=null&&r.unshift(xr(e,o,i)),o=mr(e,t),o!=null&&r.push(xr(e,o,i))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Su(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=mr(n,o),a!=null&&s.unshift(xr(n,a,l))):i||(a=mr(n,o),a!=null&&s.push(xr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var vm=/\r\n?/g,wm=/\u0000|\uFFFD/g;function xu(e){return(typeof e=="string"?e:""+e).replace(vm,`
`).replace(wm,"")}function ei(e,t,n){if(t=xu(t),xu(e)!==t&&n)throw Error(k(425))}function Ai(){}var Gs=null,bs=null;function qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Js=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,xm=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(km)}:Js;function km(e){setTimeout(function(){throw e})}function cs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var In=Math.random().toString(36).slice(2),st="__reactFiber$"+In,kr="__reactProps$"+In,yt="__reactContainer$"+In,Zs="__reactEvents$"+In,Em="__reactListeners$"+In,Cm="__reactHandles$"+In;function Kt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eu(e);e!==null;){if(n=e[st])return n;e=Eu(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[st]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function oo(e){return e[kr]||null}var el=[],mn=-1;function $t(e){return{current:e}}function K(e){0>mn||(e.current=el[mn],el[mn]=null,mn--)}function V(e,t){mn++,el[mn]=e.current,e.current=t}var It={},ve=$t(It),je=$t(!1),qt=It;function Rn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function Fi(){K(je),K(ve)}function Cu(e,t,n){if(ve.current!==It)throw Error(k(168));V(ve,t),V(je,n)}function Lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,ap(e)||"Unknown",i));return G({},n,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,qt=ve.current,V(ve,e),V(je,je.current),!0}function ju(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Lf(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,K(je),K(ve),V(ve,e)):K(je),V(je,n)}var ft=null,so=!1,fs=!1;function zf(e){ft===null?ft=[e]:ft.push(e)}function jm(e){so=!0,zf(e)}function Bt(){if(!fs&&ft!==null){fs=!0;var e=0,t=B;try{var n=ft;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,so=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),rf(Vl,Bt),i}finally{B=t,fs=!1}}return null}var hn=[],yn=0,Di=null,$i=0,De=[],$e=0,Jt=null,dt=1,pt="";function Vt(e,t){hn[yn++]=$i,hn[yn++]=Di,Di=e,$i=t}function Mf(e,t,n){De[$e++]=dt,De[$e++]=pt,De[$e++]=Jt,Jt=e;var r=dt;e=pt;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,dt=1<<32-qe(t)+i|n<<i|r,pt=o+e}else dt=1<<o|n<<i|r,pt=e}function Jl(e){e.return!==null&&(Vt(e,1),Mf(e,1,0))}function Zl(e){for(;e===Di;)Di=hn[--yn],hn[yn]=null,$i=hn[--yn],hn[yn]=null;for(;e===Jt;)Jt=De[--$e],De[$e]=null,pt=De[--$e],De[$e]=null,dt=De[--$e],De[$e]=null}var Le=null,Oe=null,Q=!1,be=null;function Af(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Oe=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Oe=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(Q){var t=Oe;if(t){var n=t;if(!Nu(e,t)){if(tl(e))throw Error(k(418));t=Ot(n.nextSibling);var r=Le;t&&Nu(e,t)?Af(r,n):(e.flags=e.flags&-4097|2,Q=!1,Le=e)}}else{if(tl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,Le=e}}}function _u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ti(e){if(e!==Le)return!1;if(!Q)return _u(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qs(e.type,e.memoizedProps)),t&&(t=Oe)){if(tl(e))throw Ff(),Error(k(418));for(;t;)Af(e,t),t=Ot(t.nextSibling)}if(_u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Le?Ot(e.stateNode.nextSibling):null;return!0}function Ff(){for(var e=Oe;e;)e=Ot(e.nextSibling)}function Tn(){Oe=Le=null,Q=!1}function ea(e){be===null?be=[e]:be.push(e)}var Nm=wt.ReactCurrentBatchConfig;function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ni(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ru(e){var t=e._init;return t(e._payload)}function If(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=At(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,m,x){return d===null||d.tag!==6?(d=vs(m,p.mode,x),d.return=p,d):(d=i(d,m),d.return=p,d)}function a(p,d,m,x){var j=m.type;return j===un?f(p,d,m.props.children,x,m.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===kt&&Ru(j)===d.type)?(x=i(d,m.props),x.ref=Xn(p,d,m),x.return=p,x):(x=xi(m.type,m.key,m.props,null,p.mode,x),x.ref=Xn(p,d,m),x.return=p,x)}function u(p,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ws(m,p.mode,x),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function f(p,d,m,x,j){return d===null||d.tag!==7?(d=Gt(m,p.mode,x,j),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=vs(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Kr:return m=xi(d.type,d.key,d.props,null,p.mode,m),m.ref=Xn(p,null,d),m.return=p,m;case an:return d=ws(d,p.mode,m),d.return=p,d;case kt:var x=d._init;return h(p,x(d._payload),m)}if(er(d)||Vn(d))return d=Gt(d,p.mode,m,null),d.return=p,d;ni(p,d)}return null}function y(p,d,m,x){var j=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:l(p,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Kr:return m.key===j?a(p,d,m,x):null;case an:return m.key===j?u(p,d,m,x):null;case kt:return j=m._init,y(p,d,j(m._payload),x)}if(er(m)||Vn(m))return j!==null?null:f(p,d,m,x,null);ni(p,m)}return null}function S(p,d,m,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,l(d,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Kr:return p=p.get(x.key===null?m:x.key)||null,a(d,p,x,j);case an:return p=p.get(x.key===null?m:x.key)||null,u(d,p,x,j);case kt:var N=x._init;return S(p,d,m,N(x._payload),j)}if(er(x)||Vn(x))return p=p.get(m)||null,f(d,p,x,j,null);ni(d,x)}return null}function g(p,d,m,x){for(var j=null,N=null,E=d,O=d=0,q=null;E!==null&&O<m.length;O++){E.index>O?(q=E,E=null):q=E.sibling;var F=y(p,E,m[O],x);if(F===null){E===null&&(E=q);break}e&&E&&F.alternate===null&&t(p,E),d=o(F,d,O),N===null?j=F:N.sibling=F,N=F,E=q}if(O===m.length)return n(p,E),Q&&Vt(p,O),j;if(E===null){for(;O<m.length;O++)E=h(p,m[O],x),E!==null&&(d=o(E,d,O),N===null?j=E:N.sibling=E,N=E);return Q&&Vt(p,O),j}for(E=r(p,E);O<m.length;O++)q=S(E,p,O,m[O],x),q!==null&&(e&&q.alternate!==null&&E.delete(q.key===null?O:q.key),d=o(q,d,O),N===null?j=q:N.sibling=q,N=q);return e&&E.forEach(function(Qe){return t(p,Qe)}),Q&&Vt(p,O),j}function v(p,d,m,x){var j=Vn(m);if(typeof j!="function")throw Error(k(150));if(m=j.call(m),m==null)throw Error(k(151));for(var N=j=null,E=d,O=d=0,q=null,F=m.next();E!==null&&!F.done;O++,F=m.next()){E.index>O?(q=E,E=null):q=E.sibling;var Qe=y(p,E,F.value,x);if(Qe===null){E===null&&(E=q);break}e&&E&&Qe.alternate===null&&t(p,E),d=o(Qe,d,O),N===null?j=Qe:N.sibling=Qe,N=Qe,E=q}if(F.done)return n(p,E),Q&&Vt(p,O),j;if(E===null){for(;!F.done;O++,F=m.next())F=h(p,F.value,x),F!==null&&(d=o(F,d,O),N===null?j=F:N.sibling=F,N=F);return Q&&Vt(p,O),j}for(E=r(p,E);!F.done;O++,F=m.next())F=S(E,p,O,F.value,x),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?O:F.key),d=o(F,d,O),N===null?j=F:N.sibling=F,N=F);return e&&E.forEach(function(Un){return t(p,Un)}),Q&&Vt(p,O),j}function R(p,d,m,x){if(typeof m=="object"&&m!==null&&m.type===un&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Kr:e:{for(var j=m.key,N=d;N!==null;){if(N.key===j){if(j=m.type,j===un){if(N.tag===7){n(p,N.sibling),d=i(N,m.props.children),d.return=p,p=d;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===kt&&Ru(j)===N.type){n(p,N.sibling),d=i(N,m.props),d.ref=Xn(p,N,m),d.return=p,p=d;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===un?(d=Gt(m.props.children,p.mode,x,m.key),d.return=p,p=d):(x=xi(m.type,m.key,m.props,null,p.mode,x),x.ref=Xn(p,d,m),x.return=p,p=x)}return s(p);case an:e:{for(N=m.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ws(m,p.mode,x),d.return=p,p=d}return s(p);case kt:return N=m._init,R(p,d,N(m._payload),x)}if(er(m))return g(p,d,m,x);if(Vn(m))return v(p,d,m,x);ni(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=vs(m,p.mode,x),d.return=p,p=d),s(p)):n(p,d)}return R}var Pn=If(!0),Df=If(!1),Bi=$t(null),Ui=null,gn=null,ta=null;function na(){ta=gn=Ui=null}function ra(e){var t=Bi.current;K(Bi),e._currentValue=t}function rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Ui=e,ta=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(ta!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Ui===null)throw Error(k(308));gn=e,Ui.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Qt=null;function ia(e){Qt===null?Qt=[e]:Qt.push(e)}function $f(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ia(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,ia(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wl(e,n)}}function Tu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var i=e.updateQueue;Et=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;s=0,f=u=a=null,l=o;do{var y=l.lane,S=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(y=t,S=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(S,h,y);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,y=typeof g=="function"?g.call(S,h,y):g,y==null)break e;h=G({},h,y);break e;case 2:Et=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else S={eventTime:S,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=S,a=h):f=f.next=S,s|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);en|=s,e.lanes=s,e.memoizedState=h}}function Pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Dr={},at=$t(Dr),Er=$t(Dr),Cr=$t(Dr);function Yt(e){if(e===Dr)throw Error(k(174));return e}function sa(e,t){switch(V(Cr,t),V(Er,e),V(at,Dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Is(t,e)}K(at),V(at,t)}function On(){K(at),K(Er),K(Cr)}function Uf(e){Yt(Cr.current);var t=Yt(at.current),n=Is(t,e.type);t!==n&&(V(Er,e),V(at,n))}function la(e){Er.current===e&&(K(at),K(Er))}var Y=$t(0);function Vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ds=[];function aa(){for(var e=0;e<ds.length;e++)ds[e]._workInProgressVersionPrimary=null;ds.length=0}var yi=wt.ReactCurrentDispatcher,ps=wt.ReactCurrentBatchConfig,Zt=0,X=null,re=null,le=null,Wi=!1,ar=!1,jr=0,_m=0;function me(){throw Error(k(321))}function ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function ca(e,t,n,r,i,o){if(Zt=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?Om:Lm,e=n(r,i),ar){o=0;do{if(ar=!1,jr=0,25<=o)throw Error(k(301));o+=1,le=re=null,t.updateQueue=null,yi.current=zm,e=n(r,i)}while(ar)}if(yi.current=Ki,t=re!==null&&re.next!==null,Zt=0,le=re=X=null,Wi=!1,t)throw Error(k(300));return e}function fa(){var e=jr!==0;return jr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function We(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(k(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function Nr(e,t){return typeof t=="function"?t(e):t}function ms(e){var t=We(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var f=u.lane;if((Zt&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,s=r):a=a.next=h,X.lanes|=f,en|=f}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,et(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,en|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hs(e){var t=We(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);et(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hf(){}function Vf(e,t){var n=X,r=We(),i=t(),o=!et(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,da(Qf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,_r(9,Kf.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(k(349));Zt&30||Wf(n,t,i)}return i}function Wf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kf(e,t,n,r){t.value=n,t.getSnapshot=r,Yf(t)&&Xf(e)}function Qf(e,t,n){return n(function(){Yf(t)&&Xf(e)})}function Yf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Xf(e){var t=gt(e,1);t!==null&&Je(t,e,1,-1)}function Ou(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Pm.bind(null,X,e),[t.memoizedState,e]}function _r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gf(){return We().memoizedState}function gi(e,t,n,r){var i=rt();X.flags|=e,i.memoizedState=_r(1|t,n,void 0,r===void 0?null:r)}function lo(e,t,n,r){var i=We();r=r===void 0?null:r;var o=void 0;if(re!==null){var s=re.memoizedState;if(o=s.destroy,r!==null&&ua(r,s.deps)){i.memoizedState=_r(t,n,o,r);return}}X.flags|=e,i.memoizedState=_r(1|t,n,o,r)}function Lu(e,t){return gi(8390656,8,e,t)}function da(e,t){return lo(2048,8,e,t)}function bf(e,t){return lo(4,2,e,t)}function qf(e,t){return lo(4,4,e,t)}function Jf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zf(e,t,n){return n=n!=null?n.concat([e]):null,lo(4,4,Jf.bind(null,t,e),n)}function pa(){}function ed(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function td(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function nd(e,t,n){return Zt&21?(et(n,t)||(n=lf(),X.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Rm(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ps.transition;ps.transition={};try{e(!1),t()}finally{B=n,ps.transition=r}}function rd(){return We().memoizedState}function Tm(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},id(e))od(t,n);else if(n=$f(e,t,n,r),n!==null){var i=Se();Je(n,e,r,i),sd(n,t,r)}}function Pm(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(id(e))od(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,et(l,s)){var a=t.interleaved;a===null?(i.next=i,ia(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=$f(e,t,i,r),n!==null&&(i=Se(),Je(n,e,r,i),sd(n,t,r))}}function id(e){var t=e.alternate;return e===X||t!==null&&t===X}function od(e,t){ar=Wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wl(e,n)}}var Ki={readContext:Ve,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Om={readContext:Ve,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,Jf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tm.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Ou,useDebugValue:pa,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Ou(!1),t=e[0];return e=Rm.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=rt();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));Zt&30||Wf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Lu(Qf.bind(null,r,o,e),[e]),r.flags|=2048,_r(9,Kf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(Q){var n=pt,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_m++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lm={readContext:Ve,useCallback:ed,useContext:Ve,useEffect:da,useImperativeHandle:Zf,useInsertionEffect:bf,useLayoutEffect:qf,useMemo:td,useReducer:ms,useRef:Gf,useState:function(){return ms(Nr)},useDebugValue:pa,useDeferredValue:function(e){var t=We();return nd(t,re.memoizedState,e)},useTransition:function(){var e=ms(Nr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Vf,useId:rd,unstable_isNewReconciler:!1},zm={readContext:Ve,useCallback:ed,useContext:Ve,useEffect:da,useImperativeHandle:Zf,useInsertionEffect:bf,useLayoutEffect:qf,useMemo:td,useReducer:hs,useRef:Gf,useState:function(){return hs(Nr)},useDebugValue:pa,useDeferredValue:function(e){var t=We();return re===null?t.memoizedState=e:nd(t,re.memoizedState,e)},useTransition:function(){var e=hs(Nr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Vf,useId:rd,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function il(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ao={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Mt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(Je(t,e,i,r),hi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Mt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(Je(t,e,i,r),hi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Mt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&(Je(t,e,r,n),hi(t,e,r))}};function zu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,o):!0}function ld(e,t,n){var r=!1,i=It,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Ne(t)?qt:ve.current,r=t.contextTypes,o=(r=r!=null)?Rn(e,i):It),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Mu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ao.enqueueReplaceState(t,t.state,null)}function ol(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},oa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Ne(t)?qt:ve.current,i.context=Rn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(il(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ao.enqueueReplaceState(i,i.state,null),Hi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var n="",r=t;do n+=lp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ys(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mm=typeof WeakMap=="function"?WeakMap:Map;function ad(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yi||(Yi=!0,yl=r),sl(e,t)},n}function ud(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sl(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Au(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xm.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var Am=wt.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?Df(t,null,n,r):Pn(t,e.child,n,r)}function Du(e,t,n,r,i){n=n.render;var o=t.ref;return Cn(t,i),r=ca(e,t,n,r,o,i),n=fa(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(Q&&n&&Jl(t),t.flags|=1,we(e,t,r,i),t.child)}function $u(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,cd(e,t,o,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:wr,n(s,r)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=At(o,r),e.ref=t.ref,e.return=t,t.child=e}function cd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(wr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,vt(e,t,i)}return ll(e,t,n,r,i)}function fd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(wn,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(wn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(wn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(wn,Pe),Pe|=r;return we(e,t,i,n),t.child}function dd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ll(e,t,n,r,i){var o=Ne(n)?qt:ve.current;return o=Rn(t,o),Cn(t,i),n=ca(e,t,n,r,o,i),r=fa(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(Q&&r&&Jl(t),t.flags|=1,we(e,t,n,i),t.child)}function Bu(e,t,n,r,i){if(Ne(n)){var o=!0;Ii(t)}else o=!1;if(Cn(t,i),t.stateNode===null)vi(e,t),ld(t,n,r),ol(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ne(n)?qt:ve.current,u=Rn(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Mu(t,s,r,u),Et=!1;var y=t.memoizedState;s.state=y,Hi(t,r,s,i),a=t.memoizedState,l!==r||y!==a||je.current||Et?(typeof f=="function"&&(il(t,n,f,r),a=t.memoizedState),(l=Et||zu(t,n,l,r,y,a,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Bf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Xe(t.type,l),s.props=u,h=t.pendingProps,y=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ve(a):(a=Ne(n)?qt:ve.current,a=Rn(t,a));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||y!==a)&&Mu(t,s,r,a),Et=!1,y=t.memoizedState,s.state=y,Hi(t,r,s,i);var g=t.memoizedState;l!==h||y!==g||je.current||Et?(typeof S=="function"&&(il(t,n,S,r),g=t.memoizedState),(u=Et||zu(t,n,u,r,y,g,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return al(e,t,n,r,o,i)}function al(e,t,n,r,i,o){dd(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&ju(t,n,!1),vt(e,t,o);r=t.stateNode,Am.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Pn(t,e.child,null,o),t.child=Pn(t,null,l,o)):we(e,t,l,o),t.memoizedState=r.state,i&&ju(t,n,!0),t.child}function pd(e){var t=e.stateNode;t.pendingContext?Cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cu(e,t.context,!1),sa(e,t.containerInfo)}function Uu(e,t,n,r,i){return Tn(),ea(i),t.flags|=256,we(e,t,n,r),t.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function md(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Y,i&1),e===null)return nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fo(s,r,0,null),e=Gt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cl(n),t.memoizedState=ul,e):ma(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Fm(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=At(l,o):(o=Gt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?cl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ul,r}return o=e.child,e=o.sibling,r=At(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ma(e,t){return t=fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ri(e,t,n,r){return r!==null&&ea(r),Pn(t,e.child,null,n),e=ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fm(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ys(Error(k(422))),ri(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=fo({mode:"visible",children:r.children},i,0,null),o=Gt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pn(t,e.child,null,s),t.child.memoizedState=cl(s),t.memoizedState=ul,o);if(!(t.mode&1))return ri(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(k(419)),r=ys(o,r,void 0),ri(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ce||l){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gt(e,i),Je(r,e,i,-1))}return Sa(),r=ys(Error(k(421))),ri(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Gm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Oe=Ot(i.nextSibling),Le=t,Q=!0,be=null,e!==null&&(De[$e++]=dt,De[$e++]=pt,De[$e++]=Jt,dt=e.id,pt=e.overflow,Jt=t),t=ma(t,r.children),t.flags|=4096,t)}function Hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rl(e.return,t,n)}function gs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function hd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hu(e,n,t);else if(e.tag===19)Hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),gs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}gs(t,!0,n,null,o);break;case"together":gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Im(e,t,n){switch(t.tag){case 3:pd(t),Tn();break;case 5:Uf(t);break;case 1:Ne(t.type)&&Ii(t);break;case 4:sa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Bi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?md(e,t,n):(V(Y,Y.current&1),e=vt(e,t,n),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,fd(e,t,n)}return vt(e,t,n)}var yd,fl,gd,vd;yd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fl=function(){};gd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(at.current);var o=null;switch(n){case"input":i=zs(e,i),r=zs(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Fs(e,i),r=Fs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}Ds(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(dr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(dr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&W("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};vd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dm(e,t,n){var r=t.pendingProps;switch(Zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ne(t.type)&&Fi(),he(t),null;case 3:return r=t.stateNode,On(),K(je),K(ve),aa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(wl(be),be=null))),fl(e,t),he(t),null;case 5:la(t);var i=Yt(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)gd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return he(t),null}if(e=Yt(at.current),ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[kr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<nr.length;i++)W(nr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":qa(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Za(r,o),W("invalid",r)}Ds(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ei(r.textContent,l,e),i=["children",""+l]):dr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&W("scroll",r)}switch(n){case"input":Qr(r),Ja(r,o,!0);break;case"textarea":Qr(r),eu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[kr]=r,yd(e,t,!1,!1),t.stateNode=e;e:{switch(s=$s(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<nr.length;i++)W(nr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":qa(e,r),i=zs(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),W("invalid",e);break;case"textarea":Za(e,r),i=Fs(e,r),W("invalid",e);break;default:i=r}Ds(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Xc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qc(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&pr(e,a):typeof a=="number"&&pr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(dr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&W("scroll",e):a!=null&&Dl(e,o,a,s))}switch(n){case"input":Qr(e),Ja(e,r,!1);break;case"textarea":Qr(e),eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)vd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Yt(Cr.current),Yt(at.current),ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return he(t),null;case 13:if(K(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Oe!==null&&t.mode&1&&!(t.flags&128))Ff(),Tn(),t.flags|=98560,o=!1;else if(o=ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[st]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else be!==null&&(wl(be),be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ie===0&&(ie=3):Sa())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return On(),fl(e,t),e===null&&Sr(t.stateNode.containerInfo),he(t),null;case 10:return ra(t.type._context),he(t),null;case 17:return Ne(t.type)&&Fi(),he(t),null;case 19:if(K(Y),o=t.memoizedState,o===null)return he(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Gn(o,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Vi(e),s!==null){for(t.flags|=128,Gn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>zn&&(t.flags|=128,r=!0,Gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Vi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Q)return he(t),null}else 2*Z()-o.renderingStartTime>zn&&n!==1073741824&&(t.flags|=128,r=!0,Gn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return wa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function $m(e,t){switch(Zl(t),t.tag){case 1:return Ne(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),K(je),K(ve),aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return la(t),null;case 13:if(K(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Y),null;case 4:return On(),null;case 10:return ra(t.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var ii=!1,ge=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,_=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){b(e,t,r)}else n.current=null}function dl(e,t,n){try{n()}catch(r){b(e,t,r)}}var Vu=!1;function Um(e,t){if(Gs=Li,e=Ef(),ql(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,f=0,h=e,y=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(a=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(S=h.firstChild)!==null;)y=h,h=S;for(;;){if(h===e)break t;if(y===n&&++u===i&&(l=s),y===o&&++f===r&&(a=s),(S=h.nextSibling)!==null)break;h=y,y=h.parentNode}h=S}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(bs={focusedElem:e,selectionRange:n},Li=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,R=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xe(t.type,v),R);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){b(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return g=Vu,Vu=!1,g}function ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&dl(t,n,o)}i=i.next}while(i!==r)}}function uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wd(e){var t=e.alternate;t!==null&&(e.alternate=null,wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[kr],delete t[Zs],delete t[Em],delete t[Cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}var ce=null,Ge=!1;function St(e,t,n){for(n=n.child;n!==null;)xd(e,t,n),n=n.sibling}function xd(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:ge||vn(n,t);case 6:var r=ce,i=Ge;ce=null,St(e,t,n),ce=r,Ge=i,ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?cs(e.parentNode,n):e.nodeType===1&&cs(e,n),gr(e)):cs(ce,n.stateNode));break;case 4:r=ce,i=Ge,ce=n.stateNode.containerInfo,Ge=!0,St(e,t,n),ce=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dl(n,t,s),i=i.next}while(i!==r)}St(e,t,n);break;case 1:if(!ge&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){b(n,t,l)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,St(e,t,n),ge=r):St(e,t,n);break;default:St(e,t,n)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bm),t.forEach(function(r){var i=bm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,Ge=!1;break e;case 3:ce=l.stateNode.containerInfo,Ge=!0;break e;case 4:ce=l.stateNode.containerInfo,Ge=!0;break e}l=l.return}if(ce===null)throw Error(k(160));xd(o,s,i),ce=null,Ge=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){b(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kd(t,e),t=t.sibling}function kd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),nt(e),r&4){try{ur(3,e,e.return),uo(3,e)}catch(v){b(e,e.return,v)}try{ur(5,e,e.return)}catch(v){b(e,e.return,v)}}break;case 1:Ye(t,e),nt(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(Ye(t,e),nt(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var i=e.stateNode;try{pr(i,"")}catch(v){b(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Vc(i,o),$s(l,s);var u=$s(l,o);for(s=0;s<a.length;s+=2){var f=a[s],h=a[s+1];f==="style"?Xc(i,h):f==="dangerouslySetInnerHTML"?Qc(i,h):f==="children"?pr(i,h):Dl(i,f,h,u)}switch(l){case"input":Ms(i,o);break;case"textarea":Wc(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Sn(i,!!o.multiple,S,!1):y!==!!o.multiple&&(o.defaultValue!=null?Sn(i,!!o.multiple,o.defaultValue,!0):Sn(i,!!o.multiple,o.multiple?[]:"",!1))}i[kr]=o}catch(v){b(e,e.return,v)}}break;case 6:if(Ye(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){b(e,e.return,v)}}break;case 3:if(Ye(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(v){b(e,e.return,v)}break;case 4:Ye(t,e),nt(e);break;case 13:Ye(t,e),nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ga=Z())),r&4&&Ku(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||f,Ye(t,e),ge=u):Ye(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(h=_=f;_!==null;){switch(y=_,S=y.child,y.tag){case 0:case 11:case 14:case 15:ur(4,y,y.return);break;case 1:vn(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){b(r,n,v)}}break;case 5:vn(y,y.return);break;case 22:if(y.memoizedState!==null){Yu(h);continue}}S!==null?(S.return=y,_=S):Yu(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,a=h.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Yc("display",s))}catch(v){b(e,e.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){b(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ye(t,e),nt(e),r&4&&Ku(e);break;case 21:break;default:Ye(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pr(i,""),r.flags&=-33);var o=Wu(e);hl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Wu(e);ml(e,l,s);break;default:throw Error(k(161))}}catch(a){b(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hm(e,t,n){_=e,Ed(e)}function Ed(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ii;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ge;l=ii;var u=ge;if(ii=s,(ge=a)&&!u)for(_=i;_!==null;)s=_,a=s.child,s.tag===22&&s.memoizedState!==null?Xu(i):a!==null?(a.return=s,_=a):Xu(i);for(;o!==null;)_=o,Ed(o),o=o.sibling;_=i,ii=l,ge=u}Qu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):Qu(e)}}function Qu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Pu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&gr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ge||t.flags&512&&pl(t)}catch(y){b(t,t.return,y)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Yu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Xu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uo(4,t)}catch(a){b(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){b(t,i,a)}}var o=t.return;try{pl(t)}catch(a){b(t,o,a)}break;case 5:var s=t.return;try{pl(t)}catch(a){b(t,s,a)}}}catch(a){b(t,t.return,a)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var Vm=Math.ceil,Qi=wt.ReactCurrentDispatcher,ha=wt.ReactCurrentOwner,Ue=wt.ReactCurrentBatchConfig,I=0,ae=null,ne=null,de=0,Pe=0,wn=$t(0),ie=0,Rr=null,en=0,co=0,ya=0,cr=null,Ee=null,ga=0,zn=1/0,ct=null,Yi=!1,yl=null,zt=null,oi=!1,_t=null,Xi=0,fr=0,gl=null,wi=-1,Si=0;function Se(){return I&6?Z():wi!==-1?wi:wi=Z()}function Mt(e){return e.mode&1?I&2&&de!==0?de&-de:Nm.transition!==null?(Si===0&&(Si=lf()),Si):(e=B,e!==0||(e=window.event,e=e===void 0?16:mf(e.type)),e):1}function Je(e,t,n,r){if(50<fr)throw fr=0,gl=null,Error(k(185));Ar(e,n,r),(!(I&2)||e!==ae)&&(e===ae&&(!(I&2)&&(co|=n),ie===4&&jt(e,de)),_e(e,r),n===1&&I===0&&!(t.mode&1)&&(zn=Z()+500,so&&Bt()))}function _e(e,t){var n=e.callbackNode;Np(e,t);var r=Oi(e,e===ae?de:0);if(r===0)n!==null&&ru(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ru(n),t===1)e.tag===0?jm(Gu.bind(null,e)):zf(Gu.bind(null,e)),xm(function(){!(I&6)&&Bt()}),n=null;else{switch(af(r)){case 1:n=Vl;break;case 4:n=of;break;case 16:n=Pi;break;case 536870912:n=sf;break;default:n=Pi}n=Od(n,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cd(e,t){if(wi=-1,Si=0,I&6)throw Error(k(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=Oi(e,e===ae?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gi(e,r);else{t=r;var i=I;I|=2;var o=Nd();(ae!==e||de!==t)&&(ct=null,zn=Z()+500,Xt(e,t));do try{Qm();break}catch(l){jd(e,l)}while(!0);na(),Qi.current=o,I=i,ne!==null?t=0:(ae=null,de=0,t=ie)}if(t!==0){if(t===2&&(i=Ws(e),i!==0&&(r=i,t=vl(e,i))),t===1)throw n=Rr,Xt(e,0),jt(e,r),_e(e,Z()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wm(i)&&(t=Gi(e,r),t===2&&(o=Ws(e),o!==0&&(r=o,t=vl(e,o))),t===1))throw n=Rr,Xt(e,0),jt(e,r),_e(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Wt(e,Ee,ct);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=ga+500-Z(),10<t)){if(Oi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Js(Wt.bind(null,e,Ee,ct),t);break}Wt(e,Ee,ct);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-qe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vm(r/1960))-r,10<r){e.timeoutHandle=Js(Wt.bind(null,e,Ee,ct),r);break}Wt(e,Ee,ct);break;case 5:Wt(e,Ee,ct);break;default:throw Error(k(329))}}}return _e(e,Z()),e.callbackNode===n?Cd.bind(null,e):null}function vl(e,t){var n=cr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=Gi(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&wl(t)),e}function wl(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function Wm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~ya,t&=~co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function Gu(e){if(I&6)throw Error(k(327));jn();var t=Oi(e,0);if(!(t&1))return _e(e,Z()),null;var n=Gi(e,t);if(e.tag!==0&&n===2){var r=Ws(e);r!==0&&(t=r,n=vl(e,r))}if(n===1)throw n=Rr,Xt(e,0),jt(e,t),_e(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Ee,ct),_e(e,Z()),null}function va(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(zn=Z()+500,so&&Bt())}}function tn(e){_t!==null&&_t.tag===0&&!(I&6)&&jn();var t=I;I|=1;var n=Ue.transition,r=B;try{if(Ue.transition=null,B=1,e)return e()}finally{B=r,Ue.transition=n,I=t,!(I&6)&&Bt()}}function wa(){Pe=wn.current,K(wn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sm(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(Zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fi();break;case 3:On(),K(je),K(ve),aa();break;case 5:la(r);break;case 4:On();break;case 13:K(Y);break;case 19:K(Y);break;case 10:ra(r.type._context);break;case 22:case 23:wa()}n=n.return}if(ae=e,ne=e=At(e.current,null),de=Pe=t,ie=0,Rr=null,ya=co=en=0,Ee=cr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qt=null}return e}function jd(e,t){do{var n=ne;try{if(na(),yi.current=Ki,Wi){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wi=!1}if(Zt=0,le=re=X=null,ar=!1,jr=0,ha.current=null,n===null||n.return===null){ie=1,Rr=t,ne=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=de,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Fu(s);if(S!==null){S.flags&=-257,Iu(S,s,l,o,t),S.mode&1&&Au(o,u,t),t=S,a=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(a),t.updateQueue=v}else g.add(a);break e}else{if(!(t&1)){Au(o,u,t),Sa();break e}a=Error(k(426))}}else if(Q&&l.mode&1){var R=Fu(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Iu(R,s,l,o,t),ea(Ln(a,l));break e}}o=a=Ln(a,l),ie!==4&&(ie=2),cr===null?cr=[o]:cr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ad(o,a,t);Tu(o,p);break e;case 1:l=a;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zt===null||!zt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ud(o,l,t);Tu(o,x);break e}}o=o.return}while(o!==null)}Rd(n)}catch(j){t=j,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function Nd(){var e=Qi.current;return Qi.current=Ki,e===null?Ki:e}function Sa(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(en&268435455)&&!(co&268435455)||jt(ae,de)}function Gi(e,t){var n=I;I|=2;var r=Nd();(ae!==e||de!==t)&&(ct=null,Xt(e,t));do try{Km();break}catch(i){jd(e,i)}while(!0);if(na(),I=n,Qi.current=r,ne!==null)throw Error(k(261));return ae=null,de=0,ie}function Km(){for(;ne!==null;)_d(ne)}function Qm(){for(;ne!==null&&!gp();)_d(ne)}function _d(e){var t=Pd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Rd(e):ne=t,ha.current=null}function Rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$m(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=Dm(n,t,Pe),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function Wt(e,t,n){var r=B,i=Ue.transition;try{Ue.transition=null,B=1,Ym(e,t,n,r)}finally{Ue.transition=i,B=r}return null}function Ym(e,t,n,r){do jn();while(_t!==null);if(I&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(_p(e,o),e===ae&&(ne=ae=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oi||(oi=!0,Od(Pi,function(){return jn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var s=B;B=1;var l=I;I|=4,ha.current=null,Um(e,n),kd(n,e),pm(bs),Li=!!Gs,bs=Gs=null,e.current=n,Hm(n),vp(),I=l,B=s,Ue.transition=o}else e.current=n;if(oi&&(oi=!1,_t=e,Xi=i),o=e.pendingLanes,o===0&&(zt=null),xp(n.stateNode),_e(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yi)throw Yi=!1,e=yl,yl=null,e;return Xi&1&&e.tag!==0&&jn(),o=e.pendingLanes,o&1?e===gl?fr++:(fr=0,gl=e):fr=0,Bt(),null}function jn(){if(_t!==null){var e=af(Xi),t=Ue.transition,n=B;try{if(Ue.transition=null,B=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,Xi=0,I&6)throw Error(k(331));var i=I;for(I|=4,_=e.current;_!==null;){var o=_,s=o.child;if(_.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:ur(8,f,o)}var h=f.child;if(h!==null)h.return=f,_=h;else for(;_!==null;){f=_;var y=f.sibling,S=f.return;if(wd(f),f===u){_=null;break}if(y!==null){y.return=S,_=y;break}_=S}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}_=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,_=s;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ur(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,_=p;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){s=_;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,_=m;else e:for(s=d;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uo(9,l)}}catch(j){b(l,l.return,j)}if(l===s){_=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,_=x;break e}_=l.return}}if(I=i,Bt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(to,e)}catch{}r=!0}return r}finally{B=n,Ue.transition=t}}return!1}function bu(e,t,n){t=Ln(n,t),t=ad(e,t,1),e=Lt(e,t,1),t=Se(),e!==null&&(Ar(e,1,t),_e(e,t))}function b(e,t,n){if(e.tag===3)bu(e,e,n);else for(;t!==null;){if(t.tag===3){bu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Ln(n,e),e=ud(t,e,1),t=Lt(t,e,1),e=Se(),t!==null&&(Ar(t,1,e),_e(t,e));break}}t=t.return}}function Xm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(de&n)===n&&(ie===4||ie===3&&(de&130023424)===de&&500>Z()-ga?Xt(e,0):ya|=n),_e(e,t)}function Td(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var n=Se();e=gt(e,t),e!==null&&(Ar(e,t,n),_e(e,n))}function Gm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Td(e,n)}function bm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Td(e,n)}var Pd;Pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Im(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,Q&&t.flags&1048576&&Mf(t,$i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vi(e,t),e=t.pendingProps;var i=Rn(t,ve.current);Cn(t,n),i=ca(null,t,r,e,i,n);var o=fa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,Ii(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,oa(t),i.updater=ao,t.stateNode=i,i._reactInternals=t,ol(t,r,e,n),t=al(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&Jl(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Jm(r),e=Xe(r,e),i){case 0:t=ll(null,t,r,e,n);break e;case 1:t=Bu(null,t,r,e,n);break e;case 11:t=Du(null,t,r,e,n);break e;case 14:t=$u(null,t,r,Xe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),ll(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Bu(e,t,r,i,n);case 3:e:{if(pd(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Bf(e,t),Hi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ln(Error(k(423)),t),t=Uu(e,t,r,n,i);break e}else if(r!==i){i=Ln(Error(k(424)),t),t=Uu(e,t,r,n,i);break e}else for(Oe=Ot(t.stateNode.containerInfo.firstChild),Le=t,Q=!0,be=null,n=Df(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=vt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Uf(t),e===null&&nl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,qs(r,i)?s=null:o!==null&&qs(r,o)&&(t.flags|=32),dd(e,t),we(e,t,s,n),t.child;case 6:return e===null&&nl(t),null;case 13:return md(e,t,n);case 4:return sa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Du(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,V(Bi,r._currentValue),r._currentValue=s,o!==null)if(et(o.value,s)){if(o.children===i.children&&!je.current){t=vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=mt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rl(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Cn(t,n),i=Ve(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),$u(e,t,r,i,n);case 15:return cd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),vi(e,t),t.tag=1,Ne(r)?(e=!0,Ii(t)):e=!1,Cn(t,n),ld(t,r,i),ol(t,r,i,n),al(null,t,r,!0,e,n);case 19:return hd(e,t,n);case 22:return fd(e,t,n)}throw Error(k(156,t.tag))};function Od(e,t){return rf(e,t)}function qm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new qm(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jm(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bl)return 11;if(e===Ul)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")xa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case un:return Gt(n.children,i,o,t);case $l:s=8,i|=8;break;case Ts:return e=Be(12,n,t,i|2),e.elementType=Ts,e.lanes=o,e;case Ps:return e=Be(13,n,t,i),e.elementType=Ps,e.lanes=o,e;case Os:return e=Be(19,n,t,i),e.elementType=Os,e.lanes=o,e;case Bc:return fo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dc:s=10;break e;case $c:s=9;break e;case Bl:s=11;break e;case Ul:s=14;break e;case kt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Be(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Gt(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function fo(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Bc,e.lanes=n,e.stateNode={isHidden:!1},e}function vs(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ka(e,t,n,r,i,o,s,l,a){return e=new Zm(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oa(o),e}function e1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ld(e){if(!e)return It;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Lf(e,n,t)}return t}function zd(e,t,n,r,i,o,s,l,a){return e=ka(n,r,!0,e,i,o,s,l,a),e.context=Ld(null),n=e.current,r=Se(),i=Mt(n),o=mt(r,i),o.callback=t??null,Lt(n,o,i),e.current.lanes=i,Ar(e,i,r),_e(e,r),e}function po(e,t,n,r){var i=t.current,o=Se(),s=Mt(i);return n=Ld(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,s),e!==null&&(Je(e,i,s,o),hi(e,i,s)),s}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ea(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}function t1(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}mo.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));po(e,t,null,null)};mo.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){po(null,e,null,null)}),t[yt]=null}};function mo(e){this._internalRoot=e}mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&pf(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function n1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=bi(s);o.call(u)}}var s=zd(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=s,e[yt]=s.current,Sr(e.nodeType===8?e.parentNode:e),tn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=bi(a);l.call(u)}}var a=ka(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=a,e[yt]=a.current,Sr(e.nodeType===8?e.parentNode:e),tn(function(){po(t,a,n,r)}),a}function yo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=bi(s);l.call(a)}}po(t,s,e,i)}else s=n1(n,t,e,i,r);return bi(s)}uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tr(t.pendingLanes);n!==0&&(Wl(t,n|1),_e(t,Z()),!(I&6)&&(zn=Z()+500,Bt()))}break;case 13:tn(function(){var r=gt(e,1);if(r!==null){var i=Se();Je(r,e,1,i)}}),Ea(e,1)}};Kl=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=Se();Je(t,e,134217728,n)}Ea(e,134217728)}};cf=function(e){if(e.tag===13){var t=Mt(e),n=gt(e,t);if(n!==null){var r=Se();Je(n,e,t,r)}Ea(e,t)}};ff=function(){return B};df=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Us=function(e,t,n){switch(t){case"input":if(Ms(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oo(r);if(!i)throw Error(k(90));Hc(r),Ms(r,i)}}}break;case"textarea":Wc(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};qc=va;Jc=tn;var r1={usingClientEntryPoint:!1,Events:[Ir,pn,oo,Gc,bc,va]},bn={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i1={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tf(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||t1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{to=si.inject(i1),lt=si}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(t))throw Error(k(200));return e1(e,t,null,n)};Ae.createRoot=function(e,t){if(!ja(e))throw Error(k(299));var n=!1,r="",i=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ka(e,1,!1,null,null,n,!1,r,i),e[yt]=t.current,Sr(e.nodeType===8?e.parentNode:e),new Ca(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=tf(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return tn(e)};Ae.hydrate=function(e,t,n){if(!ho(t))throw Error(k(200));return yo(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!ja(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Md;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=zd(t,null,e,1,n??null,i,!1,o,s),e[yt]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new mo(t)};Ae.render=function(e,t,n){if(!ho(t))throw Error(k(200));return yo(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!ho(e))throw Error(k(40));return e._reactRootContainer?(tn(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ae.unstable_batchedUpdates=va;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ho(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return yo(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function Ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ad)}catch(e){console.error(e)}}Ad(),Mc.exports=Ae;var o1=Mc.exports,Zu=o1;_s.createRoot=Zu.createRoot,_s.hydrateRoot=Zu.hydrateRoot;function Fd(e,t){return function(){return e.apply(t,arguments)}}const{toString:s1}=Object.prototype,{getPrototypeOf:Na}=Object,go=(e=>t=>{const n=s1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),tt=e=>(e=e.toLowerCase(),t=>go(t)===e),vo=e=>t=>typeof t===e,{isArray:Dn}=Array,Tr=vo("undefined");function l1(e){return e!==null&&!Tr(e)&&e.constructor!==null&&!Tr(e.constructor)&&He(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Id=tt("ArrayBuffer");function a1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Id(e.buffer),t}const u1=vo("string"),He=vo("function"),Dd=vo("number"),wo=e=>e!==null&&typeof e=="object",c1=e=>e===!0||e===!1,ki=e=>{if(go(e)!=="object")return!1;const t=Na(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},f1=tt("Date"),d1=tt("File"),p1=tt("Blob"),m1=tt("FileList"),h1=e=>wo(e)&&He(e.pipe),y1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||He(e.append)&&((t=go(e))==="formdata"||t==="object"&&He(e.toString)&&e.toString()==="[object FormData]"))},g1=tt("URLSearchParams"),[v1,w1,S1,x1]=["ReadableStream","Request","Response","Headers"].map(tt),k1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $r(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Dn(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function $d(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Bd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ud=e=>!Tr(e)&&e!==Bd;function Sl(){const{caseless:e}=Ud(this)&&this||{},t={},n=(r,i)=>{const o=e&&$d(t,i)||i;ki(t[o])&&ki(r)?t[o]=Sl(t[o],r):ki(r)?t[o]=Sl({},r):Dn(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&$r(arguments[r],n);return t}const E1=(e,t,n,{allOwnKeys:r}={})=>($r(t,(i,o)=>{n&&He(i)?e[o]=Fd(i,n):e[o]=i},{allOwnKeys:r}),e),C1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),j1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},N1=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Na(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},_1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},R1=e=>{if(!e)return null;if(Dn(e))return e;let t=e.length;if(!Dd(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},T1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Na(Uint8Array)),P1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},O1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},L1=tt("HTMLFormElement"),z1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ec=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),M1=tt("RegExp"),Hd=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$r(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},A1=e=>{Hd(e,(t,n)=>{if(He(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(He(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},F1=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Dn(e)?r(e):r(String(e).split(t)),n},I1=()=>{},D1=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ss="abcdefghijklmnopqrstuvwxyz",tc="0123456789",Vd={DIGIT:tc,ALPHA:Ss,ALPHA_DIGIT:Ss+Ss.toUpperCase()+tc},$1=(e=16,t=Vd.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function B1(e){return!!(e&&He(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const U1=e=>{const t=new Array(10),n=(r,i)=>{if(wo(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Dn(r)?[]:{};return $r(r,(s,l)=>{const a=n(s,i+1);!Tr(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},H1=tt("AsyncFunction"),V1=e=>e&&(wo(e)||He(e))&&He(e.then)&&He(e.catch),w={isArray:Dn,isArrayBuffer:Id,isBuffer:l1,isFormData:y1,isArrayBufferView:a1,isString:u1,isNumber:Dd,isBoolean:c1,isObject:wo,isPlainObject:ki,isReadableStream:v1,isRequest:w1,isResponse:S1,isHeaders:x1,isUndefined:Tr,isDate:f1,isFile:d1,isBlob:p1,isRegExp:M1,isFunction:He,isStream:h1,isURLSearchParams:g1,isTypedArray:T1,isFileList:m1,forEach:$r,merge:Sl,extend:E1,trim:k1,stripBOM:C1,inherits:j1,toFlatObject:N1,kindOf:go,kindOfTest:tt,endsWith:_1,toArray:R1,forEachEntry:P1,matchAll:O1,isHTMLForm:L1,hasOwnProperty:ec,hasOwnProp:ec,reduceDescriptors:Hd,freezeMethods:A1,toObjectSet:F1,toCamelCase:z1,noop:I1,toFiniteNumber:D1,findKey:$d,global:Bd,isContextDefined:Ud,ALPHABET:Vd,generateString:$1,isSpecCompliantForm:B1,toJSONObject:U1,isAsyncFn:H1,isThenable:V1};function L(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}w.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Wd=L.prototype,Kd={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Kd[e]={value:e}});Object.defineProperties(L,Kd);Object.defineProperty(Wd,"isAxiosError",{value:!0});L.from=(e,t,n,r,i,o)=>{const s=Object.create(Wd);return w.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),L.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const W1=null;function xl(e){return w.isPlainObject(e)||w.isArray(e)}function Qd(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function nc(e,t,n){return e?e.concat(t).map(function(i,o){return i=Qd(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function K1(e){return w.isArray(e)&&!e.some(xl)}const Q1=w.toFlatObject(w,{},null,function(t){return/^is[A-Z]/.test(t)});function So(e,t,n){if(!w.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,R){return!w.isUndefined(R[v])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(t);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(w.isDate(g))return g.toISOString();if(!a&&w.isBlob(g))throw new L("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(g)||w.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,v,R){let p=g;if(g&&!R&&typeof g=="object"){if(w.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(w.isArray(g)&&K1(g)||(w.isFileList(g)||w.endsWith(v,"[]"))&&(p=w.toArray(g)))return v=Qd(v),p.forEach(function(m,x){!(w.isUndefined(m)||m===null)&&t.append(s===!0?nc([v],x,o):s===null?v:v+"[]",u(m))}),!1}return xl(g)?!0:(t.append(nc(R,v,o),u(g)),!1)}const h=[],y=Object.assign(Q1,{defaultVisitor:f,convertValue:u,isVisitable:xl});function S(g,v){if(!w.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(g),w.forEach(g,function(p,d){(!(w.isUndefined(p)||p===null)&&i.call(t,p,w.isString(d)?d.trim():d,v,y))===!0&&S(p,v?v.concat(d):[d])}),h.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return S(e),t}function rc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function _a(e,t){this._pairs=[],e&&So(e,this,t)}const Yd=_a.prototype;Yd.append=function(t,n){this._pairs.push([t,n])};Yd.toString=function(t){const n=t?function(r){return t.call(this,r,rc)}:rc;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Y1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xd(e,t,n){if(!t)return e;const r=n&&n.encode||Y1,i=n&&n.serialize;let o;if(i?o=i(t,n):o=w.isURLSearchParams(t)?t.toString():new _a(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ic{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){w.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Gd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},X1=typeof URLSearchParams<"u"?URLSearchParams:_a,G1=typeof FormData<"u"?FormData:null,b1=typeof Blob<"u"?Blob:null,q1={isBrowser:!0,classes:{URLSearchParams:X1,FormData:G1,Blob:b1},protocols:["http","https","file","blob","url","data"]},Ra=typeof window<"u"&&typeof document<"u",J1=(e=>Ra&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Z1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",eh=Ra&&window.location.href||"http://localhost",th=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ra,hasStandardBrowserEnv:J1,hasStandardBrowserWebWorkerEnv:Z1,origin:eh},Symbol.toStringTag,{value:"Module"})),Ze={...th,...q1};function nh(e,t){return So(e,new Ze.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ze.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function rh(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ih(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function bd(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&w.isArray(i)?i.length:s,a?(w.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!w.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&w.isArray(i[s])&&(i[s]=ih(i[s])),!l)}if(w.isFormData(e)&&w.isFunction(e.entries)){const n={};return w.forEachEntry(e,(r,i)=>{t(rh(r),i,n,0)}),n}return null}function oh(e,t,n){if(w.isString(e))try{return(t||JSON.parse)(e),w.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Br={transitional:Gd,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=w.isObject(t);if(o&&w.isHTMLForm(t)&&(t=new FormData(t)),w.isFormData(t))return i?JSON.stringify(bd(t)):t;if(w.isArrayBuffer(t)||w.isBuffer(t)||w.isStream(t)||w.isFile(t)||w.isBlob(t)||w.isReadableStream(t))return t;if(w.isArrayBufferView(t))return t.buffer;if(w.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return nh(t,this.formSerializer).toString();if((l=w.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return So(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),oh(t)):t}],transformResponse:[function(t){const n=this.transitional||Br.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(w.isResponse(t)||w.isReadableStream(t))return t;if(t&&w.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?L.from(l,L.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ze.classes.FormData,Blob:Ze.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{Br.headers[e]={}});const sh=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lh=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&sh[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},oc=Symbol("internals");function qn(e){return e&&String(e).trim().toLowerCase()}function Ei(e){return e===!1||e==null?e:w.isArray(e)?e.map(Ei):String(e)}function ah(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const uh=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function xs(e,t,n,r,i){if(w.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!w.isString(t)){if(w.isString(r))return t.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(t)}}function ch(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fh(e,t){const n=w.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Re{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,u){const f=qn(a);if(!f)throw new Error("header name must be a non-empty string");const h=w.findKey(i,f);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||a]=Ei(l))}const s=(l,a)=>w.forEach(l,(u,f)=>o(u,f,a));if(w.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(w.isString(t)&&(t=t.trim())&&!uh(t))s(lh(t),n);else if(w.isHeaders(t))for(const[l,a]of t.entries())o(a,l,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=qn(t),t){const r=w.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return ah(i);if(w.isFunction(n))return n.call(this,i,r);if(w.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=qn(t),t){const r=w.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||xs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=qn(s),s){const l=w.findKey(r,s);l&&(!n||xs(r,r[l],l,n))&&(delete r[l],i=!0)}}return w.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||xs(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return w.forEach(this,(i,o)=>{const s=w.findKey(r,o);if(s){n[s]=Ei(i),delete n[o];return}const l=t?ch(o):String(o).trim();l!==o&&delete n[o],n[l]=Ei(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return w.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[oc]=this[oc]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=qn(s);r[l]||(fh(i,s),r[l]=!0)}return w.isArray(t)?t.forEach(o):o(t),this}}Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(Re.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});w.freezeMethods(Re);function ks(e,t){const n=this||Br,r=t||n,i=Re.from(r.headers);let o=r.data;return w.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function qd(e){return!!(e&&e.__CANCEL__)}function $n(e,t,n){L.call(this,e??"canceled",L.ERR_CANCELED,t,n),this.name="CanceledError"}w.inherits($n,L,{__CANCEL__:!0});function Jd(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new L("Request failed with status code "+n.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function dh(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ph(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),f=r[o];s||(s=u),n[i]=a,r[i]=u;let h=o,y=0;for(;h!==i;)y+=n[h++],h=h%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const S=f&&u-f;return S?Math.round(y*1e3/S):void 0}}function mh(e,t){let n=0;const r=1e3/t;let i=null;return function(){const s=this===!0,l=Date.now();if(s||l-n>r)return i&&(clearTimeout(i),i=null),n=l,e.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),e.apply(null,arguments)),r-(l-n)))}}const qi=(e,t,n=3)=>{let r=0;const i=ph(50,250);return mh(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,a=s-r,u=i(a),f=s<=l;r=s;const h={loaded:s,total:l,progress:l?s/l:void 0,bytes:a,rate:u||void 0,estimated:u&&l&&f?(l-s)/u:void 0,event:o,lengthComputable:l!=null};h[t?"download":"upload"]=!0,e(h)},n)},hh=Ze.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=w.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),yh=Ze.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];w.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),w.isString(r)&&s.push("path="+r),w.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gh(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function vh(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Zd(e,t){return e&&!gh(t)?vh(e,t):t}const sc=e=>e instanceof Re?{...e}:e;function nn(e,t){t=t||{};const n={};function r(u,f,h){return w.isPlainObject(u)&&w.isPlainObject(f)?w.merge.call({caseless:h},u,f):w.isPlainObject(f)?w.merge({},f):w.isArray(f)?f.slice():f}function i(u,f,h){if(w.isUndefined(f)){if(!w.isUndefined(u))return r(void 0,u,h)}else return r(u,f,h)}function o(u,f){if(!w.isUndefined(f))return r(void 0,f)}function s(u,f){if(w.isUndefined(f)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,h){if(h in t)return r(u,f);if(h in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,f)=>i(sc(u),sc(f),!0)};return w.forEach(Object.keys(Object.assign({},e,t)),function(f){const h=a[f]||i,y=h(e[f],t[f],f);w.isUndefined(y)&&h!==l||(n[f]=y)}),n}const e0=e=>{const t=nn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=t;t.headers=s=Re.from(s),t.url=Xd(Zd(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(w.isFormData(n)){if(Ze.hasStandardBrowserEnv||Ze.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((a=s.getContentType())!==!1){const[u,...f]=a?a.split(";").map(h=>h.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...f].join("; "))}}if(Ze.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(t)),r||r!==!1&&hh(t.url))){const u=i&&o&&yh.read(o);u&&s.set(i,u)}return t},wh=typeof XMLHttpRequest<"u",Sh=wh&&function(e){return new Promise(function(n,r){const i=e0(e);let o=i.data;const s=Re.from(i.headers).normalize();let{responseType:l}=i,a;function u(){i.cancelToken&&i.cancelToken.unsubscribe(a),i.signal&&i.signal.removeEventListener("abort",a)}let f=new XMLHttpRequest;f.open(i.method.toUpperCase(),i.url,!0),f.timeout=i.timeout;function h(){if(!f)return;const S=Re.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),v={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:S,config:e,request:f};Jd(function(p){n(p),u()},function(p){r(p),u()},v),f=null}"onloadend"in f?f.onloadend=h:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(h)},f.onabort=function(){f&&(r(new L("Request aborted",L.ECONNABORTED,i,f)),f=null)},f.onerror=function(){r(new L("Network Error",L.ERR_NETWORK,i,f)),f=null},f.ontimeout=function(){let g=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const v=i.transitional||Gd;i.timeoutErrorMessage&&(g=i.timeoutErrorMessage),r(new L(g,v.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,i,f)),f=null},o===void 0&&s.setContentType(null),"setRequestHeader"in f&&w.forEach(s.toJSON(),function(g,v){f.setRequestHeader(v,g)}),w.isUndefined(i.withCredentials)||(f.withCredentials=!!i.withCredentials),l&&l!=="json"&&(f.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&f.addEventListener("progress",qi(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",qi(i.onUploadProgress)),(i.cancelToken||i.signal)&&(a=S=>{f&&(r(!S||S.type?new $n(null,e,f):S),f.abort(),f=null)},i.cancelToken&&i.cancelToken.subscribe(a),i.signal&&(i.signal.aborted?a():i.signal.addEventListener("abort",a)));const y=dh(i.url);if(y&&Ze.protocols.indexOf(y)===-1){r(new L("Unsupported protocol "+y+":",L.ERR_BAD_REQUEST,e));return}f.send(o||null)})},xh=(e,t)=>{let n=new AbortController,r;const i=function(a){if(!r){r=!0,s();const u=a instanceof Error?a:this.reason;n.abort(u instanceof L?u:new $n(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{i(new L(`timeout ${t} of ms exceeded`,L.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(a=>{a&&(a.removeEventListener?a.removeEventListener("abort",i):a.unsubscribe(i))}),e=null)};e.forEach(a=>a&&a.addEventListener&&a.addEventListener("abort",i));const{signal:l}=n;return l.unsubscribe=s,[l,()=>{o&&clearTimeout(o),o=null}]},kh=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Eh=async function*(e,t,n){for await(const r of e)yield*kh(ArrayBuffer.isView(r)?r:await n(String(r)),t)},lc=(e,t,n,r,i)=>{const o=Eh(e,t,i);let s=0;return new ReadableStream({type:"bytes",async pull(l){const{done:a,value:u}=await o.next();if(a){l.close(),r();return}let f=u.byteLength;n&&n(s+=f),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),o.return()}},{highWaterMark:2})},ac=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},xo=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",t0=xo&&typeof ReadableStream=="function",kl=xo&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ch=t0&&(()=>{let e=!1;const t=new Request(Ze.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),uc=64*1024,El=t0&&!!(()=>{try{return w.isReadableStream(new Response("").body)}catch{}})(),Ji={stream:El&&(e=>e.body)};xo&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ji[t]&&(Ji[t]=w.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new L(`Response type '${t}' is not supported`,L.ERR_NOT_SUPPORT,r)})})})(new Response);const jh=async e=>{if(e==null)return 0;if(w.isBlob(e))return e.size;if(w.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(w.isArrayBufferView(e))return e.byteLength;if(w.isURLSearchParams(e)&&(e=e+""),w.isString(e))return(await kl(e)).byteLength},Nh=async(e,t)=>{const n=w.toFiniteNumber(e.getContentLength());return n??jh(t)},_h=xo&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:a,responseType:u,headers:f,withCredentials:h="same-origin",fetchOptions:y}=e0(e);u=u?(u+"").toLowerCase():"text";let[S,g]=i||o||s?xh([i,o],s):[],v,R;const p=()=>{!v&&setTimeout(()=>{S&&S.unsubscribe()}),v=!0};let d;try{if(a&&Ch&&n!=="get"&&n!=="head"&&(d=await Nh(f,r))!==0){let N=new Request(t,{method:"POST",body:r,duplex:"half"}),E;w.isFormData(r)&&(E=N.headers.get("content-type"))&&f.setContentType(E),N.body&&(r=lc(N.body,uc,ac(d,qi(a)),null,kl))}w.isString(h)||(h=h?"cors":"omit"),R=new Request(t,{...y,signal:S,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let m=await fetch(R);const x=El&&(u==="stream"||u==="response");if(El&&(l||x)){const N={};["status","statusText","headers"].forEach(O=>{N[O]=m[O]});const E=w.toFiniteNumber(m.headers.get("content-length"));m=new Response(lc(m.body,uc,l&&ac(E,qi(l,!0)),x&&p,kl),N)}u=u||"text";let j=await Ji[w.findKey(Ji,u)||"text"](m,e);return!x&&p(),g&&g(),await new Promise((N,E)=>{Jd(N,E,{data:j,headers:Re.from(m.headers),status:m.status,statusText:m.statusText,config:e,request:R})})}catch(m){throw p(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new L("Network Error",L.ERR_NETWORK,e,R),{cause:m.cause||m}):L.from(m,m&&m.code,e,R)}}),Cl={http:W1,xhr:Sh,fetch:_h};w.forEach(Cl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const cc=e=>`- ${e}`,Rh=e=>w.isFunction(e)||e===null||e===!1,n0={getAdapter:e=>{e=w.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!Rh(n)&&(r=Cl[(s=String(n)).toLowerCase()],r===void 0))throw new L(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(cc).join(`
`):" "+cc(o[0]):"as no adapter specified";throw new L("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Cl};function Es(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $n(null,e)}function fc(e){return Es(e),e.headers=Re.from(e.headers),e.data=ks.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),n0.getAdapter(e.adapter||Br.adapter)(e).then(function(r){return Es(e),r.data=ks.call(e,e.transformResponse,r),r.headers=Re.from(r.headers),r},function(r){return qd(r)||(Es(e),r&&r.response&&(r.response.data=ks.call(e,e.transformResponse,r.response),r.response.headers=Re.from(r.response.headers))),Promise.reject(r)})}const r0="1.7.2",Ta={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ta[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const dc={};Ta.transitional=function(t,n,r){function i(o,s){return"[Axios v"+r0+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new L(i(s," has been removed"+(n?" in "+n:"")),L.ERR_DEPRECATED);return n&&!dc[s]&&(dc[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function Th(e,t,n){if(typeof e!="object")throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new L("option "+o+" must be "+a,L.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new L("Unknown option "+o,L.ERR_BAD_OPTION)}}const jl={assertOptions:Th,validators:Ta},xt=jl.validators;class bt{constructor(t){this.defaults=t,this.interceptors={request:new ic,response:new ic}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=nn(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&jl.assertOptions(r,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),i!=null&&(w.isFunction(i)?n.paramsSerializer={serialize:i}:jl.assertOptions(i,{encode:xt.function,serialize:xt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&w.merge(o.common,o[n.method]);o&&w.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Re.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(a=a&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let f,h=0,y;if(!a){const g=[fc.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),y=g.length,f=Promise.resolve(n);h<y;)f=f.then(g[h++],g[h++]);return f}y=l.length;let S=n;for(h=0;h<y;){const g=l[h++],v=l[h++];try{S=g(S)}catch(R){v.call(this,R);break}}try{f=fc.call(this,S)}catch(g){return Promise.reject(g)}for(h=0,y=u.length;h<y;)f=f.then(u[h++],u[h++]);return f}getUri(t){t=nn(this.defaults,t);const n=Zd(t.baseURL,t.url);return Xd(n,t.params,t.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(t){bt.prototype[t]=function(n,r){return this.request(nn(r||{},{method:t,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(nn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}bt.prototype[t]=n(),bt.prototype[t+"Form"]=n(!0)});class Pa{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new $n(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Pa(function(i){t=i}),cancel:t}}}function Ph(e){return function(n){return e.apply(null,n)}}function Oh(e){return w.isObject(e)&&e.isAxiosError===!0}const Nl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Nl).forEach(([e,t])=>{Nl[t]=e});function i0(e){const t=new bt(e),n=Fd(bt.prototype.request,t);return w.extend(n,bt.prototype,t,{allOwnKeys:!0}),w.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return i0(nn(e,i))},n}const ee=i0(Br);ee.Axios=bt;ee.CanceledError=$n;ee.CancelToken=Pa;ee.isCancel=qd;ee.VERSION=r0;ee.toFormData=So;ee.AxiosError=L;ee.Cancel=ee.CanceledError;ee.all=function(t){return Promise.all(t)};ee.spread=Ph;ee.isAxiosError=Oh;ee.mergeConfig=nn;ee.AxiosHeaders=Re;ee.formToJSON=e=>bd(w.isHTMLForm(e)?new FormData(e):e);ee.getAdapter=n0.getAdapter;ee.HttpStatusCode=Nl;ee.default=ee;function Lh(){const[e,t]=P.useState(!0),n=()=>{t(!e)};P.useEffect(()=>{e?document.querySelector(".background-container").classList.add("clouds"):document.querySelector(".background-container").classList.remove("clouds")},[e]);const[r,i]=P.useState(!0),o=()=>{i(!r)};return P.useEffect(()=>{r?(document.body.classList.add("body-transition"),document.querySelector(".silhouette-off").classList.add("silhouette-on")):(document.body.classList.remove("body-transition"),document.querySelector(".silhouette-off").classList.remove("silhouette-on"))},[r]),c.jsxs(c.Fragment,{children:[c.jsx("img",{src:"./Silhouette Kaito Kid.png",alt:" ",className:"silhouette-off"}),c.jsx("div",{className:"background-container"}),c.jsx("div",{className:"transitions",children:c.jsx("div",{className:"container",children:c.jsx("button",{onClick:o,title:r?"Background transitions on (30s to 90s)":"Background transitions off",children:r?"☯︎":" "})})}),c.jsx("div",{className:"animations",children:c.jsx("div",{className:"container",children:c.jsx("button",{onClick:n,title:e?"Background animations on (Clouds)":"Background animations off",children:e?"⛈":" "})})})]})}function zh(){return c.jsxs("a",{href:"",className:"logo",children:[c.jsx("span",{role:"img",children:c.jsx("img",{src:"WeeBoo.ico",alt:" "})}),c.jsxs("h1",{children:["W",c.jsx("span",{children:"ee"}),"B",c.jsx("span",{children:"oo"})]}),c.jsx("span",{role:"img",children:c.jsx("img",{src:"WeeBoo.ico",alt:" "})})]})}function Mh(){const[e,t]=P.useState(!0),n=()=>{t(!1)},r=()=>{t(!0)};return c.jsx("div",{className:"hamburger-menu",children:e?c.jsx("div",{className:"container",children:c.jsx("button",{className:"button-parrent",style:{fontWeight:"bolder",fontSize:"2.85rem"},onClick:n,title:"Menu",children:"="})}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"container",children:c.jsx("button",{className:"button-parrent",style:{fontWeight:"lighter",fontSize:"1.85rem"},onClick:r,title:"Close",children:"✖"})}),c.jsx("div",{className:"container",children:c.jsx("button",{className:"button-child button-home",onClick:r,title:"Home",children:c.jsx("a",{href:"#",children:"♤"})})}),c.jsx("div",{className:"container",children:c.jsx("button",{className:"button-child button-genre",onClick:r,title:"Genre",children:c.jsx("a",{href:"#check",children:"♧"})})}),c.jsx("div",{className:"container",children:c.jsx("button",{className:"button-child button-favorite",onClick:r,title:"Favorite",children:c.jsx("a",{href:"#choice",children:"♡"})})}),c.jsx("div",{className:"container",children:c.jsx("button",{className:"button-child button-category",onClick:r,title:"Category",children:c.jsx("a",{href:"#choose",children:"♢"})})})]})})}function Ah(){const[e,t]=P.useState(!1),n=()=>{t(!e)};return c.jsx("div",{className:"container",children:c.jsx("div",{className:"toggle-div",onClick:n,children:e?c.jsxs("div",{className:"links",children:[c.jsx("a",{children:" Home "}),"|",c.jsx("a",{href:"#check",children:" Genre "}),"|",c.jsx("a",{href:"#choice",children:" Favorite "}),"|",c.jsx("a",{href:"#choose",children:" Category "})]}):c.jsx("div",{className:"arrow",children:"▼"})})})}function Fh({count:e}){return c.jsxs("p",{className:"search-results",children:[c.jsx("span",{children:"\\(≧▽≦)/"})," Subarashii, Sensei! Wee found breathtaking"," ",c.jsx("strong",{children:e})," anime..."]})}function Ih(){return c.jsx("div",{className:"search-kanji",children:c.jsx("img",{src:"Success.png"})})}function Dh({fetchAnime:e,setResultCount:t,setLoading:n,loading:r}){const[i,o]=P.useState(""),s=P.useRef(null),l=async()=>{if(i.trim()){n(!0),s.current&&s.current.play();const a=await e(i);t(a.length),n(!1),o("")}};return c.jsxs("div",{className:"search-container",children:[c.jsx("audio",{ref:s,src:"There is Always Only One Truth.mp3"}),r&&c.jsx(Ih,{}),c.jsx("div",{className:"search-label",children:c.jsx("div",{className:"container",children:c.jsx("label",{htmlFor:"search-anime",children:c.jsx("span",{title:"Search",children:"⌕"})})})}),c.jsx("input",{className:"search",id:"search-anime",type:"text",placeholder:"Search anime...",value:i,onChange:a=>o(a.target.value),onKeyPress:a=>{a.key==="Enter"&&l()}}),c.jsx("button",{className:"search-btn",onClick:l,children:r?"Please wait...":"Search"}),c.jsx("div",{className:"search-icon",children:c.jsx("img",{src:"Conan Edogawa Search.png",alt:" "})})]})}function $h({fetchAnime:e}){const[t,n]=P.useState(0),[r,i]=P.useState(!1);return c.jsx("div",{className:"search-container",children:c.jsxs(c.Fragment,{children:[c.jsx(Dh,{fetchAnime:e,setResultCount:n,setLoading:i,loading:r}),t>0&&c.jsx(Fh,{count:t})]})})}function Bh({fetchAnime:e}){return c.jsxs("nav",{className:"nav-bar",children:[c.jsx(zh,{}),c.jsx(Mh,{}),c.jsx(Ah,{}),c.jsx($h,{fetchAnime:e})]})}function Uh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Hh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Vh=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Hh(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Uh(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",Zi="-moz-",D="-webkit-",o0="comm",Oa="rule",La="decl",Wh="@import",s0="@keyframes",Kh="@layer",Qh=Math.abs,ko=String.fromCharCode,Yh=Object.assign;function Xh(e,t){return fe(e,0)^45?(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function l0(e){return e.trim()}function Gh(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function _l(e,t){return e.indexOf(t)}function fe(e,t){return e.charCodeAt(t)|0}function Pr(e,t,n){return e.slice(t,n)}function it(e){return e.length}function za(e){return e.length}function li(e,t){return t.push(e),e}function bh(e,t){return e.map(t).join("")}var Eo=1,Mn=1,a0=0,Te=0,te=0,Bn="";function Co(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Eo,column:Mn,length:s,return:""}}function Jn(e,t){return Yh(Co("",null,null,"",null,null,0),e,{length:-e.length},t)}function qh(){return te}function Jh(){return te=Te>0?fe(Bn,--Te):0,Mn--,te===10&&(Mn=1,Eo--),te}function ze(){return te=Te<a0?fe(Bn,Te++):0,Mn++,te===10&&(Mn=1,Eo++),te}function ut(){return fe(Bn,Te)}function Ci(){return Te}function Ur(e,t){return Pr(Bn,e,t)}function Or(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function u0(e){return Eo=Mn=1,a0=it(Bn=e),Te=0,[]}function c0(e){return Bn="",e}function ji(e){return l0(Ur(Te-1,Rl(e===91?e+2:e===40?e+1:e)))}function Zh(e){for(;(te=ut())&&te<33;)ze();return Or(e)>2||Or(te)>3?"":" "}function ey(e,t){for(;--t&&ze()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return Ur(e,Ci()+(t<6&&ut()==32&&ze()==32))}function Rl(e){for(;ze();)switch(te){case e:return Te;case 34:case 39:e!==34&&e!==39&&Rl(te);break;case 40:e===41&&Rl(e);break;case 92:ze();break}return Te}function ty(e,t){for(;ze()&&e+te!==57;)if(e+te===84&&ut()===47)break;return"/*"+Ur(t,Te-1)+"*"+ko(e===47?e:ze())}function ny(e){for(;!Or(ut());)ze();return Ur(e,Te)}function ry(e){return c0(Ni("",null,null,null,[""],e=u0(e),0,[0],e))}function Ni(e,t,n,r,i,o,s,l,a){for(var u=0,f=0,h=s,y=0,S=0,g=0,v=1,R=1,p=1,d=0,m="",x=i,j=o,N=r,E=m;R;)switch(g=d,d=ze()){case 40:if(g!=108&&fe(E,h-1)==58){_l(E+=$(ji(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=ji(d);break;case 9:case 10:case 13:case 32:E+=Zh(g);break;case 92:E+=ey(Ci()-1,7);continue;case 47:switch(ut()){case 42:case 47:li(iy(ty(ze(),Ci()),t,n),a);break;default:E+="/"}break;case 123*v:l[u++]=it(E)*p;case 125*v:case 59:case 0:switch(d){case 0:case 125:R=0;case 59+f:p==-1&&(E=$(E,/\f/g,"")),S>0&&it(E)-h&&li(S>32?mc(E+";",r,n,h-1):mc($(E," ","")+";",r,n,h-2),a);break;case 59:E+=";";default:if(li(N=pc(E,t,n,u,f,i,l,m,x=[],j=[],h),o),d===123)if(f===0)Ni(E,t,N,N,x,o,h,l,j);else switch(y===99&&fe(E,3)===110?100:y){case 100:case 108:case 109:case 115:Ni(e,N,N,r&&li(pc(e,N,N,0,0,i,l,m,i,x=[],h),j),i,j,h,l,r?x:j);break;default:Ni(E,N,N,N,[""],j,0,l,j)}}u=f=S=0,v=p=1,m=E="",h=s;break;case 58:h=1+it(E),S=g;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&Jh()==125)continue}switch(E+=ko(d),d*v){case 38:p=f>0?1:(E+="\f",-1);break;case 44:l[u++]=(it(E)-1)*p,p=1;break;case 64:ut()===45&&(E+=ji(ze())),y=ut(),f=h=it(m=E+=ny(Ci())),d++;break;case 45:g===45&&it(E)==2&&(v=0)}}return o}function pc(e,t,n,r,i,o,s,l,a,u,f){for(var h=i-1,y=i===0?o:[""],S=za(y),g=0,v=0,R=0;g<r;++g)for(var p=0,d=Pr(e,h+1,h=Qh(v=s[g])),m=e;p<S;++p)(m=l0(v>0?y[p]+" "+d:$(d,/&\f/g,y[p])))&&(a[R++]=m);return Co(e,t,n,i===0?Oa:l,a,u,f)}function iy(e,t,n){return Co(e,t,n,o0,ko(qh()),Pr(e,2,-2),0)}function mc(e,t,n,r){return Co(e,t,n,La,Pr(e,0,r),Pr(e,r+1,-1),r)}function Nn(e,t){for(var n="",r=za(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function oy(e,t,n,r){switch(e.type){case Kh:if(e.children.length)break;case Wh:case La:return e.return=e.return||e.value;case o0:return"";case s0:return e.return=e.value+"{"+Nn(e.children,r)+"}";case Oa:e.value=e.props.join(",")}return it(n=Nn(e.children,r))?e.return=e.value+"{"+n+"}":""}function sy(e){var t=za(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function ly(e){return function(t){t.root||(t=t.return)&&e(t)}}function ay(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var uy=function(t,n,r){for(var i=0,o=0;i=o,o=ut(),i===38&&o===12&&(n[r]=1),!Or(o);)ze();return Ur(t,Te)},cy=function(t,n){var r=-1,i=44;do switch(Or(i)){case 0:i===38&&ut()===12&&(n[r]=1),t[r]+=uy(Te-1,n,r);break;case 2:t[r]+=ji(i);break;case 4:if(i===44){t[++r]=ut()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ko(i)}while(i=ze());return t},fy=function(t,n){return c0(cy(u0(t),n))},hc=new WeakMap,dy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!hc.get(r))&&!i){hc.set(t,!0);for(var o=[],s=fy(n,o),l=r.props,a=0,u=0;a<s.length;a++)for(var f=0;f<l.length;f++,u++)t.props[u]=o[a]?s[a].replace(/&\f/g,l[f]):l[f]+" "+s[a]}}},py=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function f0(e,t){switch(Xh(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Zi+e+ye+e+e;case 6828:case 4268:return D+e+ye+e+e;case 6165:return D+e+ye+"flex-"+e+e;case 5187:return D+e+$(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return D+e+ye+"flex-item-"+$(e,/flex-|-self/,"")+e;case 4675:return D+e+ye+"flex-line-pack"+$(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+ye+$(e,"shrink","negative")+e;case 5292:return D+e+ye+$(e,"basis","preferred-size")+e;case 6060:return D+"box-"+$(e,"-grow","")+D+e+ye+$(e,"grow","positive")+e;case 4554:return D+$(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(fe(e,t+1)){case 109:if(fe(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Zi+(fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_l(e,"stretch")?f0($(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(fe(e,t+1)!==115)break;case 6444:switch(fe(e,it(e)-3-(~_l(e,"!important")&&10))){case 107:return $(e,":",":"+D)+e;case 101:return $(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(fe(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(fe(e,t+11)){case 114:return D+e+ye+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+ye+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+ye+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+ye+e+e}return e}var my=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case La:t.return=f0(t.value,t.length);break;case s0:return Nn([Jn(t,{value:$(t.value,"@","@"+D)})],i);case Oa:if(t.length)return bh(t.props,function(o){switch(Gh(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Nn([Jn(t,{props:[$(o,/:(read-\w+)/,":"+Zi+"$1")]})],i);case"::placeholder":return Nn([Jn(t,{props:[$(o,/:(plac\w+)/,":"+D+"input-$1")]}),Jn(t,{props:[$(o,/:(plac\w+)/,":"+Zi+"$1")]}),Jn(t,{props:[$(o,/:(plac\w+)/,ye+"input-$1")]})],i)}return""})}},hy=[my],yy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var R=v.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||hy,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var R=v.getAttribute("data-emotion").split(" "),p=1;p<R.length;p++)o[R[p]]=!0;l.push(v)});var a,u=[dy,py];{var f,h=[oy,ly(function(v){f.insert(v)})],y=sy(u.concat(i,h)),S=function(R){return Nn(ry(R),y)};a=function(R,p,d,m){f=d,S(R?R+"{"+p.styles+"}":p.styles),m&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new Vh({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return g.sheet.hydrate(l),g},d0={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue=typeof Symbol=="function"&&Symbol.for,Ma=ue?Symbol.for("react.element"):60103,Aa=ue?Symbol.for("react.portal"):60106,jo=ue?Symbol.for("react.fragment"):60107,No=ue?Symbol.for("react.strict_mode"):60108,_o=ue?Symbol.for("react.profiler"):60114,Ro=ue?Symbol.for("react.provider"):60109,To=ue?Symbol.for("react.context"):60110,Fa=ue?Symbol.for("react.async_mode"):60111,Po=ue?Symbol.for("react.concurrent_mode"):60111,Oo=ue?Symbol.for("react.forward_ref"):60112,Lo=ue?Symbol.for("react.suspense"):60113,gy=ue?Symbol.for("react.suspense_list"):60120,zo=ue?Symbol.for("react.memo"):60115,Mo=ue?Symbol.for("react.lazy"):60116,vy=ue?Symbol.for("react.block"):60121,wy=ue?Symbol.for("react.fundamental"):60117,Sy=ue?Symbol.for("react.responder"):60118,xy=ue?Symbol.for("react.scope"):60119;function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ma:switch(e=e.type,e){case Fa:case Po:case jo:case _o:case No:case Lo:return e;default:switch(e=e&&e.$$typeof,e){case To:case Oo:case Mo:case zo:case Ro:return e;default:return t}}case Aa:return t}}}function p0(e){return Ie(e)===Po}U.AsyncMode=Fa;U.ConcurrentMode=Po;U.ContextConsumer=To;U.ContextProvider=Ro;U.Element=Ma;U.ForwardRef=Oo;U.Fragment=jo;U.Lazy=Mo;U.Memo=zo;U.Portal=Aa;U.Profiler=_o;U.StrictMode=No;U.Suspense=Lo;U.isAsyncMode=function(e){return p0(e)||Ie(e)===Fa};U.isConcurrentMode=p0;U.isContextConsumer=function(e){return Ie(e)===To};U.isContextProvider=function(e){return Ie(e)===Ro};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ma};U.isForwardRef=function(e){return Ie(e)===Oo};U.isFragment=function(e){return Ie(e)===jo};U.isLazy=function(e){return Ie(e)===Mo};U.isMemo=function(e){return Ie(e)===zo};U.isPortal=function(e){return Ie(e)===Aa};U.isProfiler=function(e){return Ie(e)===_o};U.isStrictMode=function(e){return Ie(e)===No};U.isSuspense=function(e){return Ie(e)===Lo};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===jo||e===Po||e===_o||e===No||e===Lo||e===gy||typeof e=="object"&&e!==null&&(e.$$typeof===Mo||e.$$typeof===zo||e.$$typeof===Ro||e.$$typeof===To||e.$$typeof===Oo||e.$$typeof===wy||e.$$typeof===Sy||e.$$typeof===xy||e.$$typeof===vy)};U.typeOf=Ie;d0.exports=U;var ky=d0.exports,m0=ky,Ey={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h0={};h0[m0.ForwardRef]=Ey;h0[m0.Memo]=Cy;var jy=!0;function y0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Ia=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||jy===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},g0=function(t,n,r){Ia(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Ny(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var _y={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ry=/[A-Z]|^ms/g,Ty=/_EMO_([^_]+?)_([^]*?)_EMO_/g,v0=function(t){return t.charCodeAt(1)===45},yc=function(t){return t!=null&&typeof t!="boolean"},Cs=ay(function(e){return v0(e)?e:e.replace(Ry,"-$&").toLowerCase()}),gc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ty,function(r,i,o){return ot={name:i,styles:o,next:ot},i})}return _y[t]!==1&&!v0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Lr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ot={name:n.name,styles:n.styles,next:ot},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ot={name:r.name,styles:r.styles,next:ot},r=r.next;var i=n.styles+";";return i}return Py(e,t,n)}case"function":{if(e!==void 0){var o=ot,s=n(e);return ot=o,Lr(e,t,s)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function Py(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Lr(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":yc(s)&&(r+=Cs(o)+":"+gc(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)yc(s[l])&&(r+=Cs(o)+":"+gc(o,s[l])+";");else{var a=Lr(e,t,s);switch(o){case"animation":case"animationName":{r+=Cs(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var vc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ot,Da=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";ot=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=Lr(r,n,s)):o+=s[0];for(var l=1;l<t.length;l++)o+=Lr(r,n,t[l]),i&&(o+=s[l]);vc.lastIndex=0;for(var a="",u;(u=vc.exec(o))!==null;)a+="-"+u[1];var f=Ny(o)+a;return{name:f,styles:o,next:ot}},Oy=function(t){return t()},Ly=Ya.useInsertionEffect?Ya.useInsertionEffect:!1,w0=Ly||Oy,$a={}.hasOwnProperty,S0=P.createContext(typeof HTMLElement<"u"?yy({key:"css"}):null);S0.Provider;var x0=function(t){return P.forwardRef(function(n,r){var i=P.useContext(S0);return t(n,i,r)})},k0=P.createContext({}),Tl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",zy=function(t,n){var r={};for(var i in n)$a.call(n,i)&&(r[i]=n[i]);return r[Tl]=t,r},My=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Ia(n,r,i),w0(function(){return g0(n,r,i)}),null},Ay=x0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Tl],o=[r],s="";typeof e.className=="string"?s=y0(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var l=Da(o,void 0,P.useContext(k0));s+=t.key+"-"+l.name;var a={};for(var u in e)$a.call(e,u)&&u!=="css"&&u!==Tl&&(a[u]=e[u]);return a.ref=n,a.className=s,P.createElement(P.Fragment,null,P.createElement(My,{cache:t,serialized:l,isStringTag:typeof i=="string"}),P.createElement(i,a))}),Fy=Ay,Iy=c.Fragment;function se(e,t,n){return $a.call(t,"css")?c.jsx(Fy,zy(e,t),n):c.jsx(e,t,n)}function E0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Da(t)}var C=function(){var t=E0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Dy=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=e(o);else{s="";for(var l in o)o[l]&&l&&(s&&(s+=" "),s+=l)}break}default:s=o}s&&(i&&(i+=" "),i+=s)}}return i};function $y(e,t,n){var r=[],i=y0(e,r,n);return r.length<2?n:i+t(r)}var By=function(t){var n=t.cache,r=t.serializedArr;return w0(function(){for(var i=0;i<r.length;i++)g0(n,r[i],!1)}),null},js=x0(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,f=new Array(u),h=0;h<u;h++)f[h]=arguments[h];var y=Da(f,t.registered);return r.push(y),Ia(t,y,!1),t.key+"-"+y.name},o=function(){for(var u=arguments.length,f=new Array(u),h=0;h<u;h++)f[h]=arguments[h];return $y(t.registered,i,Dy(f))},s={css:i,cx:o,theme:P.useContext(k0)},l=e.children(s);return n=!0,P.createElement(P.Fragment,null,P.createElement(By,{cache:t,serializedArr:r}),l)}),Uy=Object.defineProperty,Hy=(e,t,n)=>t in e?Uy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ai=(e,t,n)=>(Hy(e,typeof t!="symbol"?t+"":t,n),n),Pl=new Map,ui=new WeakMap,wc=0,Vy=void 0;function Wy(e){return e?(ui.has(e)||(wc+=1,ui.set(e,wc.toString())),ui.get(e)):"0"}function Ky(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Wy(e.root):e[t]}`).toString()}function Qy(e){const t=Ky(e);let n=Pl.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(s=>{s.forEach(l=>{var a;const u=l.isIntersecting&&i.some(f=>l.intersectionRatio>=f);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(a=r.get(l.target))==null||a.forEach(f=>{f(u,l)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Pl.set(t,n)}return n}function C0(e,t,n={},r=Vy){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:i,observer:o,elements:s}=Qy(n),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),Pl.delete(i))}}function Yy(e){return typeof e.children!="function"}var Sc=class extends P.Component{constructor(e){super(e),ai(this,"node",null),ai(this,"_unobserveCb",null),ai(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ai(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Yy(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=C0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:S,entry:g}=this.state;return e({inView:S,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:s,skip:l,trackVisibility:a,delay:u,initialInView:f,fallbackInView:h,...y}=this.props;return P.createElement(t||"div",{ref:this.handleNode,...y},e)}};function j0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:s,initialInView:l,fallbackInView:a,onChange:u}={}){var f;const[h,y]=P.useState(null),S=P.useRef(),[g,v]=P.useState({inView:!!l,entry:void 0});S.current=u,P.useEffect(()=>{if(s||!h)return;let m;return m=C0(h,(x,j)=>{v({inView:x,entry:j}),S.current&&S.current(x,j),j.isIntersecting&&o&&m&&(m(),m=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,h,i,r,o,s,n,a,t]);const R=(f=g.entry)==null?void 0:f.target,p=P.useRef();!h&&R&&!o&&!s&&p.current!==R&&(p.current=R,v({inView:!!l,entry:void 0}));const d=[y,g.inView,g.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}var N0={exports:{}},H={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),Ua=Symbol.for("react.portal"),Ao=Symbol.for("react.fragment"),Fo=Symbol.for("react.strict_mode"),Io=Symbol.for("react.profiler"),Do=Symbol.for("react.provider"),$o=Symbol.for("react.context"),Xy=Symbol.for("react.server_context"),Bo=Symbol.for("react.forward_ref"),Uo=Symbol.for("react.suspense"),Ho=Symbol.for("react.suspense_list"),Vo=Symbol.for("react.memo"),Wo=Symbol.for("react.lazy"),Gy=Symbol.for("react.offscreen"),_0;_0=Symbol.for("react.module.reference");function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ba:switch(e=e.type,e){case Ao:case Io:case Fo:case Uo:case Ho:return e;default:switch(e=e&&e.$$typeof,e){case Xy:case $o:case Bo:case Wo:case Vo:case Do:return e;default:return t}}case Ua:return t}}}H.ContextConsumer=$o;H.ContextProvider=Do;H.Element=Ba;H.ForwardRef=Bo;H.Fragment=Ao;H.Lazy=Wo;H.Memo=Vo;H.Portal=Ua;H.Profiler=Io;H.StrictMode=Fo;H.Suspense=Uo;H.SuspenseList=Ho;H.isAsyncMode=function(){return!1};H.isConcurrentMode=function(){return!1};H.isContextConsumer=function(e){return Ke(e)===$o};H.isContextProvider=function(e){return Ke(e)===Do};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ba};H.isForwardRef=function(e){return Ke(e)===Bo};H.isFragment=function(e){return Ke(e)===Ao};H.isLazy=function(e){return Ke(e)===Wo};H.isMemo=function(e){return Ke(e)===Vo};H.isPortal=function(e){return Ke(e)===Ua};H.isProfiler=function(e){return Ke(e)===Io};H.isStrictMode=function(e){return Ke(e)===Fo};H.isSuspense=function(e){return Ke(e)===Uo};H.isSuspenseList=function(e){return Ke(e)===Ho};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ao||e===Io||e===Fo||e===Uo||e===Ho||e===Gy||typeof e=="object"&&e!==null&&(e.$$typeof===Wo||e.$$typeof===Vo||e.$$typeof===Do||e.$$typeof===$o||e.$$typeof===Bo||e.$$typeof===_0||e.getModuleId!==void 0)};H.typeOf=Ke;N0.exports=H;var by=N0.exports;C`
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
`;const qy=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Jy=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zy=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,eg=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tg=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ha=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ng=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rg=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ig=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,og=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sg=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lg=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ag=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ug({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ha,iterationCount:i=1}){return E0`
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
  `}function cg(e){return e==null}function fg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function R0(e,t){return n=>n?e():t()}function zr(e){return R0(e,()=>null)}function Ol(e){return zr(()=>({opacity:0}))(e)}const T0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:s=Ha,triggerOnce:l=!1,className:a,style:u,childClassName:f,childStyle:h,children:y,onVisibilityChange:S}=e,g=P.useMemo(()=>ug({keyframes:s,duration:i}),[i,s]);return cg(y)?null:fg(y)?se(pg,{...e,animationStyles:g,children:String(y)}):by.isFragment(y)?se(P0,{...e,animationStyles:g}):se(Iy,{children:P.Children.map(y,(v,R)=>{if(!P.isValidElement(v))return null;const p=r+(t?R*i*n:0);switch(v.type){case"ol":case"ul":return se(js,{children:({cx:d})=>se(v.type,{...v.props,className:d(a,v.props.className),style:Object.assign({},u,v.props.style),children:se(T0,{...e,children:v.props.children})})});case"li":return se(Sc,{threshold:o,triggerOnce:l,onChange:S,children:({inView:d,ref:m})=>se(js,{children:({cx:x})=>se(v.type,{...v.props,ref:m,className:x(f,v.props.className),css:zr(()=>g)(d),style:Object.assign({},h,v.props.style,Ol(!d),{animationDelay:p+"ms"})})})});default:return se(Sc,{threshold:o,triggerOnce:l,onChange:S,children:({inView:d,ref:m})=>se("div",{ref:m,className:a,css:zr(()=>g)(d),style:Object.assign({},u,Ol(!d),{animationDelay:p+"ms"}),children:se(js,{children:({cx:x})=>se(v.type,{...v.props,className:x(f,v.props.className),style:Object.assign({},h,v.props.style)})})})})}})})},dg={display:"inline-block",whiteSpace:"pre"},pg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:s=0,triggerOnce:l=!1,className:a,style:u,children:f,onVisibilityChange:h}=e,{ref:y,inView:S}=j0({triggerOnce:l,threshold:s,onChange:h});return R0(()=>se("div",{ref:y,className:a,style:Object.assign({},u,dg),children:f.split("").map((g,v)=>se("span",{css:zr(()=>t)(S),style:{animationDelay:i+v*o*r+"ms"},children:g},v))}),()=>se(P0,{...e,children:f}))(n)},P0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:s,onVisibilityChange:l}=e,{ref:a,inView:u}=j0({triggerOnce:r,threshold:n,onChange:l});return se("div",{ref:a,className:i,css:zr(()=>t)(u),style:Object.assign({},o,Ol(!u)),children:s})};C`
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
`;const mg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,hg=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,yg=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,gg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,vg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,wg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Sg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,xg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,kg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Eg=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Cg=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,jg=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ng=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function _g(e,t,n){switch(n){case"bottom-left":return t?hg:Jy;case"bottom-right":return t?yg:Zy;case"down":return e?t?vg:tg:t?gg:eg;case"left":return e?t?Sg:ng:t?wg:Ha;case"right":return e?t?kg:ig:t?xg:rg;case"top-left":return t?Eg:og;case"top-right":return t?Cg:sg;case"up":return e?t?Ng:ag:t?jg:lg;default:return t?mg:qy}}const Rg=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=P.useMemo(()=>_g(t,r,n),[t,n,r]);return se(T0,{keyframes:o,...i})};C`
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
`;function Tg({anime:e,onSelectedAnime:t}){return c.jsx("li",{tabIndex:e.mal_id,onClick:()=>t(e),children:e.images&&e.images.jpg&&e.images.jpg.large_image_url?c.jsxs(c.Fragment,{children:[c.jsx("img",{src:e.images.jpg.large_image_url,alt:`${e.title} Cover`}),c.jsx("h3",{children:e.title}),c.jsx("div",{children:c.jsx("p",{children:c.jsx("span",{children:e.aired.prop.from.year?e.aired.prop.from.year:"Year"})})})]}):c.jsxs(c.Fragment,{children:[c.jsx("img",{src:e.image,alt:"Anime Cover"}),c.jsx("h3",{children:e.title}),c.jsx("div",{children:c.jsx("p",{children:c.jsx("span",{children:e.year})})})]})})}function Pg({animes:e,onSelectedAnime:t}){return c.jsx("ul",{className:"list list-anime",children:e==null?void 0:e.map(n=>c.jsx(Tg,{anime:n,onSelectedAnime:t},n.mal_id))})}function Og({children:e}){return c.jsx("span",{style:{paddingLeft:"33px"},children:e})}function Lg({selectedAnime:e}){return c.jsxs("div",{className:"details",children:[c.jsxs("header",{children:[e.images&&e.images.jpg&&e.images.jpg.large_image_url&&e.aired?c.jsx("a",{href:`https://myanimelist.net/search/all?q=${e.title}&cat=all`,title:"Search in My Anime List",target:"_blank",rel:"noopener noreferrer nofollow",children:c.jsx("img",{src:e.images.jpg.large_image_url,alt:`${e.title} Cover`})}):setTimeout(()=>{alert("Sensei? What is the best anime for you? Let's Search"),window.location.reload()}),c.jsxs("div",{className:"details-overview",children:[c.jsx("h2",{children:c.jsx("a",{href:`https://www.bilibili.tv/id/search-result?q=${e.title}`,title:"Search in BiliBili | Bstation",target:"_blank",rel:"noopener noreferrer nofollow",children:e.title})}),c.jsxs("small",{children:[e.aired.prop.from.year?e.aired.prop.from.year:"",e.aired.prop.from.year&&e.score?" | ":"",e.score?"IMDb ★ "+e.score.toFixed(1)+"/10":"",c.jsx("br",{}),e.rating?"Rating for "+e.rating:""]}),c.jsx("p",{children:c.jsx("b",{children:e.status?"Status: "+e.status:""})})]})]}),c.jsxs("section",{children:[c.jsxs("p",{children:[c.jsx("em",{children:e.synopsis}),c.jsx("br",{}),c.jsx("br",{style:{marginTop:"1.6rem"}}),c.jsxs("em",{children:[c.jsx(Og,{children:" "}),c.jsx("strong",{children:"Warning: "}),c.jsx("span",{style:{color:"#ef4444"},children:"Wee strongly advise against watching the listed anime titles through illegal means."})," ","Engaging in piracy harms the creators and the industry as a whole. Please support the hardworking creators by purchasing the original"," DVDs "+e.title+" ","or subscribing to official streaming services. Sensei, your support ensures the continued production of quality content. Sankyuu~"]}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("img",{src:"WeeBoo.ico",style:{width:"100%",margin:"-7rem",transform:"translateX(3rem) scale(2.5)",opacity:"0.05",filter:"grayscale(1) brightness(0.75) contrast(2.75)"}})]}),c.jsx("p",{style:{textAlign:"right",color:"#e1e8ed",fontWeight:"600"},children:c.jsx("em",{children:"WeeBoo"})})]})]})}const ln=[{src:"https://cdn.myanimelist.net/images/anime/1665/140360l.jpg",title:"Haikyuu!! Movie: Gomisuteba no Kessen"},{src:"https://cdn.myanimelist.net/images/anime/1138/133101l.jpg",title:"Meitantei Conan Movie 26: Black Iron Submarine"},{src:"https://cdn.myanimelist.net/images/anime/1765/135099l.jpg",title:"Kimetsu no Yaiba: Katanakaji no Sato-hen"},{src:"https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",title:"Frieren: Beyond Journey's End"},{src:"https://cdn.myanimelist.net/images/anime/1233/128920l.jpg",title:"JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 3"},{src:"https://cdn.myanimelist.net/images/anime/1744/120789l.jpg",title:"Meitantei Conan Movie 25: The Bride of Halloween"},{src:"https://cdn.myanimelist.net/images/anime/1908/135431l.jpg",title:"Bleach: Sennen Kessen-hen"},{src:"https://cdn.myanimelist.net/images/anime/1668/125323l.jpg",title:"One Piece Film: Red"},{src:"https://cdn.myanimelist.net/images/anime/1049/115605l.jpg",title:"Boku no Hero Academia the Movie 3: World Heroes' Mission"},{src:"https://cdn.myanimelist.net/images/anime/1121/119044l.jpg",title:"Jujutsu Kaisen 0 Movie"},{src:"https://cdn.myanimelist.net/images/anime/1306/112616l.jpg",title:"Meitantei Conan Movie 24: The Scarlet Bullet"},{src:"https://cdn.myanimelist.net/images/anime/1245/116760l.jpg",title:"Gintama: The Final"},{src:"https://cdn.myanimelist.net/images/anime/1590/116274l.jpg",title:"Sword Art Online: Progressive Movie - Hoshi Naki Yoru no Aria"},{src:"https://cdn.myanimelist.net/images/anime/1704/106947l.jpg",title:"Kimetsu no Yaiba Movie: Mugen Ressha-hen"},{src:"https://cdn.myanimelist.net/images/anime/1453/106768l.jpg",title:"Haikyuu!! To the Top Part 2"},{src:"https://cdn.myanimelist.net/images/anime/1654/104884l.jpg",title:"Digimon Adventure: Last Evolution Kizuna"},{src:"https://cdn.myanimelist.net/images/anime/1010/98309l.jpg",title:"Meitantei Conan Movie 23: The Fist of Blue Sapphire"},{src:"https://cdn.myanimelist.net/images/anime/1221/100550l.jpg",title:"One Piece Movie 14: Stampede"},{src:"https://cdn.myanimelist.net/images/anime/1091/101664l.jpg",title:"Saint Seiya: Knights of the Zodiac"},{src:"https://cdn.myanimelist.net/images/anime/12/90104l.jpg",title:"Meitantei Conan Movie 22: Zero the Enforcer"},{src:"https://cdn.myanimelist.net/images/anime/1575/93498l.jpg",title:"Dragon Ball Super: Broly"},{src:"https://cdn.myanimelist.net/images/anime/1736/93138l.jpg",title:"Boku no Hero Academia the Movie 1: Futari no Hero"},{src:"https://cdn.myanimelist.net/images/anime/9/86001l.jpg",title:"Kuroko no Basket Movie 4: Last Game"},{src:"https://cdn.myanimelist.net/images/anime/1557/123313l.jpg",title:"Sword Art Online Movie: Ordinal Scale"},{src:"https://cdn.myanimelist.net/images/anime/13/85391l.jpg",title:"Fairy Tail Movie 2: Dragon Cry"},{src:"https://cdn.myanimelist.net/images/anime/12/77614l.jpg",title:"Yu☆Gi☆Oh! The Dark Side of Dimensions"},{src:"https://cdn.myanimelist.net/images/anime/10/78894l.jpg",title:"Meitantei Conan Movie 20: The Darkest Nightmare"},{src:"https://cdn.myanimelist.net/images/anime/6/77678l.jpg",title:"Boruto: Naruto the Movie - Naruto ga Hokage ni Natta Hi"},{src:"https://cdn.myanimelist.net/images/anime/7/80729l.jpg",title:"Kuroko no Basket Movie 3: Winter Cup - Tobira no Mukou"},{src:"https://cdn.myanimelist.net/images/anime/11/75045l.jpg",title:"JoJo no Kimyou na Bouken Part 3: Stardust Crusaders 2nd Season"},{src:"https://cdn.myanimelist.net/images/anime/4/78280l.jpg",title:"Boruto: Naruto the Movie"},{src:"https://cdn.myanimelist.net/images/anime/1491/134498l.jpg",title:"The Last: Naruto the Movie"},{src:"https://cdn.myanimelist.net/images/anime/11/60289l.jpg",title:"Meitantei Conan Movie 18: The Sniper from Another Dimension"},{src:"https://cdn.myanimelist.net/images/anime/10/62337l.jpg",title:"Hunter x Hunter Movie 2: The Last Mission"},{src:"https://cdn.myanimelist.net/images/anime/10/51723l.jpg",title:"Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare"},{src:"https://cdn.myanimelist.net/images/anime/1734/93678l.jpg",title:"Dragon Ball Z Movie 14: Kami to Kami"},{src:"https://cdn.myanimelist.net/images/anime/1620/94336l.jpg",title:"Road to Ninja: Naruto the Movie"},{src:"https://cdn.myanimelist.net/images/anime/13/47083l.jpg",title:"Fairy Tail Movie 1: Houou no Miko"},{src:"https://cdn.myanimelist.net/images/anime/13/50871l.jpg",title:"Sengoku Basara Movie: The Last Party"},{src:"https://cdn.myanimelist.net/images/anime/1554/134492l.jpg",title:"Bleach Movie 4: Jigoku-hen"},{src:"https://cdn.myanimelist.net/images/anime/3/30085l.jpg",title:"Yu☆Gi☆Oh! Movie: Bonds Beyond Time"}];function zg(){const[e,t]=P.useState(0),[n,r]=P.useState(!1),i=P.useRef(null),o=()=>{t(u=>u===0?ln.length-1:u-1)},s=()=>{t(u=>u===ln.length-1?0:u+1)};P.useEffect(()=>{const u=document.getElementById("canvas"),f=u.getContext("2d");u.width=u.offsetWidth,u.height=u.offsetHeight;const h=()=>{cancelAnimationFrame(i.current),f.clearRect(0,0,u.width,u.height)};if(n){const y=new Image;return y.src=ln[e].src,y.onload=()=>{const S=f.createPattern(y,"no-repeat");let g=1.5;f.fillStyle=S;class v{constructor(m,x){this.x=m,this.y=x,this.radius=g,this.speed=Math.random()*2,this.vx=this.speed,this.vy=this.vx*2}draw(){f.beginPath(),f.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),f.fill(),f.closePath()}update(){this.y>u.height&&(this.x=Math.random()*u.width,this.y=-5),this.x+=this.vx,this.y+=this.vy,this.draw()}}let R=[];for(let d=0;d<15;d++){let m=Math.random()*u.width,x=Math.random()*u.height;R.push(new v(m,x))}const p=()=>{f.clearRect(0,0,u.width,u.height),R.forEach(d=>d.update()),i.current=requestAnimationFrame(p)};p()},h}else h()},[e,n]);const l=()=>{r(!0)},a=()=>{r(!1)};return c.jsxs(c.Fragment,{children:[c.jsx("div",{id:"choice",className:"choice",children:c.jsxs("h2",{children:[c.jsx("span",{style:{color:"#0377b9"},children:"Editor"}),"'s Choice Anime"]})}),c.jsx("div",{className:"love",children:c.jsxs("div",{className:"love-overview",children:[c.jsx("button",{tabIndex:"up",onClick:o,children:"⥣"}),c.jsxs("div",{className:"love-image",children:[c.jsx("canvas",{id:"canvas"}),c.jsx("img",{src:ln[e].src,alt:ln[e].title,onMouseEnter:l,onMouseLeave:a})]}),c.jsxs("p",{children:[c.jsx("span",{style:{color:"#d372b8"},children:"Wee ♡ "}),ln[e].title]}),c.jsx("button",{className:"arrow",tabIndex:"down",onClick:s,children:"⥥"})]})})]})}let xc=new Date().getHours();const Ns=xc<8?[{src:"https://cdn.myanimelist.net/images/anime/1799/139199l.jpg",title:"Medalist (Manga)"}]:xc<16?[{src:"https://cdn.myanimelist.net/images/anime/1530/143202l.jpg",title:"Momentary Lily (TV)"}]:[{src:"https://cdn.myanimelist.net/images/anime/1011/142918l.jpg",title:"Izure Saikyou no Renkinjutsushi?"}];function Mg(){return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"featured",children:c.jsxs("h2",{children:[c.jsx("span",{style:{color:"#d372b8"},children:"Featured"})," in Winter Anime"]})}),c.jsx("div",{className:"winter",children:c.jsxs("div",{className:"winter-overview",children:[c.jsxs("div",{className:"winter-image",children:[c.jsx("small",{children:"❄"}),c.jsx("img",{src:Ns[0].src,alt:Ns[0].title})]}),c.jsx("p",{children:c.jsx("span",{children:Ns[0].title})})]})})]})}const Ag=["Season Now","Top Anime","Top Manga","Top Characters"];function Fg(){const[e,t]=P.useState(""),[n,r]=P.useState([]),[i,o]=P.useState(!1),[s,l]=P.useState(0),a=async y=>{o(!0);try{const S=y==="Season Now"&&"https://api.jikan.moe/v4/seasons/now"||y==="Top Anime"&&"https://api.jikan.moe/v4/top/anime"||y==="Top Manga"&&"https://api.jikan.moe/v4/top/manga"||y==="Top Characters"&&"https://api.jikan.moe/v4/top/characters",g=await ee.get(S);g.data.data?(r(g.data.data),l(0)):r([])}catch(S){console.log("Error fetching data:",S)}finally{o(!1)}};P.useEffect(()=>{e&&a(e)},[e]);const u=()=>{l(y=>y===0?n.length-1:y-1)},f=()=>{l(y=>y===n.length-1?0:y+1)};let h="";return s+1==1||s+1==21?h="ˢᵗ":s+1==2||s+1==22?h="ⁿᵈ":s+1==3||s+1==23?h="ʳᵈ":h="ᵗʰ",c.jsxs(c.Fragment,{children:[c.jsx("div",{id:"choose",className:"choose",children:c.jsxs("h2",{children:[c.jsx("span",{style:{color:"#fcbe14"},children:"Recommended"})," for you"]})}),c.jsxs("div",{className:"category",style:{minHeight:"43rem"},children:[c.jsx("div",{className:"category-all",children:Ag.map(y=>c.jsx("button",{onClick:()=>t(y),className:y===e?"selected":"",children:y},y))}),c.jsxs("div",{className:"category-overview",children:[c.jsx("h2",{style:{color:"#e1e8ed",position:"absolute",left:"50%",transform:"translateX(-50%) translateY(22rem)",cursor:"default"},children:e?i&&"Please wait...":"Sensei! Select a category"}),i?"":n.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("button",{tabIndex:"up",onClick:u,children:"⥣"}),c.jsxs("div",{className:"category-image",children:[c.jsx("small",{children:e=="Season Now"?"▸":`${s+1}${h}`}),c.jsx("img",{style:e=="Top Characters"?{border:"0.2rem solid #e1e8ed",filter:"grayscale(1)",display:"block",margin:"0 auto"}:{display:"block",margin:"0 auto"},src:n[s].images.jpg.image_url,alt:n[s].title||n[s].name}),c.jsx("p",{children:n[s].title||n[s].name})]}),c.jsx("button",{className:"arrow",tabIndex:"down",onClick:f,children:"⥥"})]})]})]})]})}function Ig({animes:e,onSelectedAnime:t}){const[n,r]=P.useState(!0);return c.jsxs("div",{className:"box",children:[c.jsx("button",{className:"btn-toggle",onClick:()=>r(i=>!i),children:n?"+":"±"}),n&&c.jsx(Pg,{animes:e,onSelectedAnime:t})]})}function Dg({selectedAnime:e}){const[t,n]=P.useState(!0);return c.jsx(c.Fragment,{children:c.jsxs("div",{className:"box",children:[c.jsx("button",{className:"btn-toggle",onClick:()=>n(r=>!r),children:t?"+":"±"}),t&&c.jsx(Lg,{selectedAnime:e})]})})}function $g({animes:e,selectedAnime:t,onSelectedAnime:n}){return c.jsx(c.Fragment,{children:c.jsxs(Rg,{durations:2e3,children:[c.jsxs("main",{className:"main",children:[e.length>0&&c.jsx(Ig,{animes:e,onSelectedAnime:n}),t&&c.jsx(Dg,{selectedAnime:t})]}),t&&c.jsx("div",{className:"box-separator"}),c.jsx(zg,{}),c.jsx(Mg,{}),c.jsx(Fg,{})]})})}const Bg="#0A0A23",Ug=P.forwardRef(function({title:t="freeCodeCamp",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=Bg),c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[c.jsx("title",{children:t}),c.jsx("path",{d:"M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z"})]})}),Hg="#181717",Vg=P.forwardRef(function({title:t="GitHub",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=Hg),c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[c.jsx("title",{children:t}),c.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}),Wg="#61DAFB",Kg=P.forwardRef(function({title:t="React",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=Wg),c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[c.jsx("title",{children:t}),c.jsx("path",{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"})]})}),Qg="#149EF2",Yg=P.forwardRef(function({title:t="Sololearn",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=Qg),c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[c.jsx("title",{children:t}),c.jsx("path",{d:"M18.621 16.084a8.483 8.483 0 0 1-2.922 6.427c-.603.53-.19 1.522.613 1.442a9.039 9.039 0 0 0 1.587-.3 8.32 8.32 0 0 0 5.787-5.887 8.555 8.555 0 0 0-8.258-10.832 9.012 9.012 0 0 0-1.045.06c-.794.1-.995 1.161-.29 1.542 2.701 1.452 4.53 4.285 4.53 7.548zM7.906 18.597a8.538 8.538 0 0 1-6.45-2.913c-.532-.6-1.527-.19-1.446.61a8.943 8.943 0 0 0 .3 1.582c.794 2.823 3.064 5.026 5.907 5.766 5.727 1.492 10.87-2.773 10.87-8.229 0-.35-.02-.7-.06-1.04-.1-.792-1.165-.992-1.547-.29a8.597 8.597 0 0 1-7.574 4.514zM5.382 7.916a8.483 8.483 0 0 1 2.924-6.427c.603-.531.19-1.522-.613-1.442a9.93 9.93 0 0 0-1.598.29A8.339 8.339 0 0 0 .31 6.224a8.555 8.555 0 0 0 8.258 10.832c.352 0 .704-.02 1.045-.06.794-.1.995-1.162.29-1.542a8.54 8.541 0 0 1-4.52-7.538zm10.72-2.513a8.538 8.538 0 0 1 6.45 2.913c.53.6 1.526.19 1.445-.61a8.945 8.945 0 0 0-.3-1.583C22.902 3.3 20.632 1.098 17.788.357 12.071-1.145 6.928 3.12 6.928 8.576c0 .35.02.7.06 1.041.1.791 1.168.991 1.549.29A8.58 8.58 0 0 1 16.1 5.404z"})]})}),Xg="#000000",Gg=P.forwardRef(function({title:t="Vercel",color:n="currentColor",size:r=24,...i},o){return n==="default"&&(n=Xg),c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:n,viewBox:"0 0 24 24",ref:o,...i,children:[c.jsx("title",{children:t}),c.jsx("path",{d:"M24 22.525H0l12-21.05 12 21.05z"})]})});function bg(){const[e,t]=P.useState(!0),n=P.useRef(null),r=()=>{n.current&&(e?n.current.pause():n.current.play(),t(!e))},i=o=>{o.preventDefault()};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"gototop",children:c.jsx("div",{className:"container",children:c.jsx("a",{href:"#",children:c.jsx("button",{title:"Go to top",children:"⥣"})})})}),c.jsx("div",{className:"music",children:c.jsx("div",{className:"container",children:c.jsx("button",{title:e?"Backsound on (Outro Song)":"Backsound off",onClick:r,children:e?"♪":"ᯤ"})})}),c.jsxs("div",{className:"footer",children:[c.jsx("div",{className:"audio-background",children:c.jsx("audio",{ref:n,src:"Detective Conan feat TheFatRat - Xenogenesis (Outro Song).mp3",autoPlay:!0,loop:!0})}),c.jsxs("div",{className:"social-icons",children:[c.jsx("a",{href:"https://nantunggaputra.vercel.app/",target:"_blank",rel:"noopener",children:c.jsx(Gg,{color:"#ffffff",size:24})}),c.jsx("a",{href:"https://github.com/nantunggaputra",target:"_blank",rel:"noopener",children:c.jsx(Vg,{color:"#ffffff",size:24})}),c.jsx("a",{href:"https://www.sololearn.com/en/profile/29010238",target:"_blank",rel:"noopener",children:c.jsx(Yg,{color:"#ffffff",size:24})}),c.jsx("a",{href:"https://www.freecodecamp.org/fcc25a60d51-9b4d-4215-8292-018b8c933994",target:"_blank",rel:"noopener",children:c.jsx(Ug,{color:"#ffffff",size:24})}),c.jsx("a",{style:{cursor:"pointer"},children:c.jsx(Kg,{color:"#ffffff",size:24})})]}),c.jsx("h3",{children:c.jsxs("a",{href:"https://nantunggaputra.github.io/HTML/",target:"_blank",rel:"noopener",children:["web",c.jsx("span",{children:"dev"}),"el",c.jsx("span",{children:"op"}),"er"]})}),c.jsxs("p",{children:["Created by"," ",c.jsxs("a",{href:"https://www.linkedin.com/in/nantungga-putra-451779116/",target:"_blank",rel:"noopener",children:["Nan",c.jsx("span",{children:"t"}),"ungga Put",c.jsx("span",{children:"r"}),"a"]})," ","| ©2024"]})]}),c.jsx("div",{className:"foot",children:c.jsxs("div",{className:"foot-menu",children:[c.jsxs("div",{className:"left-menu",children:[c.jsxs("div",{children:[c.jsx("h2",{children:c.jsx("a",{href:"https://nantunggaputra.github.io/HTML/",target:"_blank",rel:"noopener",children:"WEBDEVELOPER"})}),c.jsx("small",{style:{textTransform:"none",color:"#767676",cursor:"text"},children:"anggunnantunggaputra@gmail.com"}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("p",{children:"About Us"}),c.jsx("p",{children:"Contact Us"}),c.jsx("p",{className:"fs",children:"Fans Screening"}),c.jsx("p",{className:"afa",children:"Anime Festival Asia (ID)"})]}),c.jsxs("div",{children:[c.jsx("p",{className:"rss",children:"RSS"}),c.jsx("p",{className:"sitemap",children:"Sitemap"}),c.jsx("p",{children:"Privacy Policy"}),c.jsx("p",{children:"Terms & Conditions"})]})]}),c.jsx("div",{className:"right-menu",children:c.jsxs("form",{onSubmit:i,children:[c.jsx("label",{htmlFor:"subs",children:c.jsx("p",{style:{fontSize:"1.4rem",textTransform:"none",letterSpacing:"1.14px",margin:"0.4rem 0",cursor:"pointer"},children:"Subscribe to anime newsletter"})}),c.jsx("input",{type:"email",id:"subs",required:!0}),c.jsxs("button",{type:"submit",title:"Subscribe",children:["🔔",c.jsx("img",{src:"./Kaito Kid Logo 3D.png",alt:" "})]})]})})]})})]})}function qg(){return c.jsx("div",{className:"separator",children:c.jsx("img",{src:"Detective Conan Logo Internazionale.png",alt:" "})})}function Jg(){return c.jsxs(c.Fragment,{children:[c.jsx("div",{id:"check",className:"aside left"}),c.jsx("div",{id:"blog",className:"aside right"})]})}const Zg=[{mal_id:1e9,title:"Sensei? What is the best anime for you? Let's Search",year:2024,image:"https://cdn.myanimelist.net/images/anime/7/75199.jpg",score:10,synopsis:""}];function ev(){const[e,t]=P.useState(Zg),[n,r]=P.useState(null),[i,o]=P.useState(!0),s=async a=>{try{const f=(await ee.get(`https://api.jikan.moe/v4/anime?q=${a}`)).data.data;return t(f),r(f.length>0?f[0]:null),f}catch(u){return console.error("Error fetching data:",u),setTimeout(()=>{alert(`${u}
Sensei! An error occurred in the result data. Please enter another anime title or try again later.`),window.location.reload()}),[]}},l=a=>{r(a)};return P.useEffect(()=>{const a=setTimeout(()=>{o(!1)},1500);return()=>clearTimeout(a)},[]),i?c.jsx("div",{className:"loading-page"}):c.jsxs(c.Fragment,{children:[c.jsx(Lh,{}),c.jsx(Bh,{fetchAnime:s}),c.jsx($g,{animes:e,fetchAnime:s,selectedAnime:n,onSelectedAnime:l}),c.jsx(Jg,{}),c.jsx(qg,{}),c.jsx(bg,{})]})}_s.createRoot(document.getElementById("root")).render(c.jsx(Lc.StrictMode,{children:c.jsx(ev,{})}));
