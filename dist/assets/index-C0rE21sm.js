(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Mm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nc={exports:{}},xo={},ic={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function z_(){if(Pd)return lt;Pd=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function _(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(w,O,ce){this.props=w,this.context=O,this.refs=E,this.updater=ce||S}y.prototype.isReactComponent={},y.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},y.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function v(){}v.prototype=y.prototype;function N(w,O,ce){this.props=w,this.context=O,this.refs=E,this.updater=ce||S}var R=N.prototype=new v;R.constructor=N,M(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,b=Object.prototype.hasOwnProperty,F={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function K(w,O,ce){var fe,ge={},Te=null,Fe=null;if(O!=null)for(fe in O.ref!==void 0&&(Fe=O.ref),O.key!==void 0&&(Te=""+O.key),O)b.call(O,fe)&&!z.hasOwnProperty(fe)&&(ge[fe]=O[fe]);var Re=arguments.length-2;if(Re===1)ge.children=ce;else if(1<Re){for(var Ie=Array(Re),ct=0;ct<Re;ct++)Ie[ct]=arguments[ct+2];ge.children=Ie}if(w&&w.defaultProps)for(fe in Re=w.defaultProps,Re)ge[fe]===void 0&&(ge[fe]=Re[fe]);return{$$typeof:r,type:w,key:Te,ref:Fe,props:ge,_owner:F.current}}function C(w,O){return{$$typeof:r,type:w.type,key:O,ref:w.ref,props:w.props,_owner:w._owner}}function D(w){return typeof w=="object"&&w!==null&&w.$$typeof===r}function se(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ce){return O[ce]})}var oe=/\/+/g;function le(w,O){return typeof w=="object"&&w!==null&&w.key!=null?se(""+w.key):O.toString(36)}function B(w,O,ce,fe,ge){var Te=typeof w;(Te==="undefined"||Te==="boolean")&&(w=null);var Fe=!1;if(w===null)Fe=!0;else switch(Te){case"string":case"number":Fe=!0;break;case"object":switch(w.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=w,ge=ge(Fe),w=fe===""?"."+le(Fe,0):fe,P(ge)?(ce="",w!=null&&(ce=w.replace(oe,"$&/")+"/"),B(ge,O,ce,"",function(ct){return ct})):ge!=null&&(D(ge)&&(ge=C(ge,ce+(!ge.key||Fe&&Fe.key===ge.key?"":(""+ge.key).replace(oe,"$&/")+"/")+w)),O.push(ge)),1;if(Fe=0,fe=fe===""?".":fe+":",P(w))for(var Re=0;Re<w.length;Re++){Te=w[Re];var Ie=fe+le(Te,Re);Fe+=B(Te,O,ce,Ie,ge)}else if(Ie=_(w),typeof Ie=="function")for(w=Ie.call(w),Re=0;!(Te=w.next()).done;)Te=Te.value,Ie=fe+le(Te,Re++),Fe+=B(Te,O,ce,Ie,ge);else if(Te==="object")throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Fe}function ne(w,O,ce){if(w==null)return w;var fe=[],ge=0;return B(w,fe,"","",function(Te){return O.call(ce,Te,ge++)}),fe}function ue(w){if(w._status===-1){var O=w._result;O=O(),O.then(function(ce){(w._status===0||w._status===-1)&&(w._status=1,w._result=ce)},function(ce){(w._status===0||w._status===-1)&&(w._status=2,w._result=ce)}),w._status===-1&&(w._status=0,w._result=O)}if(w._status===1)return w._result.default;throw w._result}var ie={current:null},Y={transition:null},Z={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:Y,ReactCurrentOwner:F};function G(){throw Error("act(...) is not supported in production builds of React.")}return lt.Children={map:ne,forEach:function(w,O,ce){ne(w,function(){O.apply(this,arguments)},ce)},count:function(w){var O=0;return ne(w,function(){O++}),O},toArray:function(w){return ne(w,function(O){return O})||[]},only:function(w){if(!D(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},lt.Component=y,lt.Fragment=t,lt.Profiler=a,lt.PureComponent=N,lt.StrictMode=s,lt.Suspense=h,lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,lt.act=G,lt.cloneElement=function(w,O,ce){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var fe=M({},w.props),ge=w.key,Te=w.ref,Fe=w._owner;if(O!=null){if(O.ref!==void 0&&(Te=O.ref,Fe=F.current),O.key!==void 0&&(ge=""+O.key),w.type&&w.type.defaultProps)var Re=w.type.defaultProps;for(Ie in O)b.call(O,Ie)&&!z.hasOwnProperty(Ie)&&(fe[Ie]=O[Ie]===void 0&&Re!==void 0?Re[Ie]:O[Ie])}var Ie=arguments.length-2;if(Ie===1)fe.children=ce;else if(1<Ie){Re=Array(Ie);for(var ct=0;ct<Ie;ct++)Re[ct]=arguments[ct+2];fe.children=Re}return{$$typeof:r,type:w.type,key:ge,ref:Te,props:fe,_owner:Fe}},lt.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},lt.createElement=K,lt.createFactory=function(w){var O=K.bind(null,w);return O.type=w,O},lt.createRef=function(){return{current:null}},lt.forwardRef=function(w){return{$$typeof:c,render:w}},lt.isValidElement=D,lt.lazy=function(w){return{$$typeof:m,_payload:{_status:-1,_result:w},_init:ue}},lt.memo=function(w,O){return{$$typeof:p,type:w,compare:O===void 0?null:O}},lt.startTransition=function(w){var O=Y.transition;Y.transition={};try{w()}finally{Y.transition=O}},lt.unstable_act=G,lt.useCallback=function(w,O){return ie.current.useCallback(w,O)},lt.useContext=function(w){return ie.current.useContext(w)},lt.useDebugValue=function(){},lt.useDeferredValue=function(w){return ie.current.useDeferredValue(w)},lt.useEffect=function(w,O){return ie.current.useEffect(w,O)},lt.useId=function(){return ie.current.useId()},lt.useImperativeHandle=function(w,O,ce){return ie.current.useImperativeHandle(w,O,ce)},lt.useInsertionEffect=function(w,O){return ie.current.useInsertionEffect(w,O)},lt.useLayoutEffect=function(w,O){return ie.current.useLayoutEffect(w,O)},lt.useMemo=function(w,O){return ie.current.useMemo(w,O)},lt.useReducer=function(w,O,ce){return ie.current.useReducer(w,O,ce)},lt.useRef=function(w){return ie.current.useRef(w)},lt.useState=function(w){return ie.current.useState(w)},lt.useSyncExternalStore=function(w,O,ce){return ie.current.useSyncExternalStore(w,O,ce)},lt.useTransition=function(){return ie.current.useTransition()},lt.version="18.3.1",lt}var bd;function tf(){return bd||(bd=1,ic.exports=z_()),ic.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function B_(){if(Dd)return xo;Dd=1;var r=tf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,p){var m,x={},_=null,S=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(m in h)s.call(h,m)&&!l.hasOwnProperty(m)&&(x[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)x[m]===void 0&&(x[m]=h[m]);return{$$typeof:e,type:c,key:_,ref:S,props:x,_owner:a.current}}return xo.Fragment=t,xo.jsx=f,xo.jsxs=f,xo}var Ud;function k_(){return Ud||(Ud=1,nc.exports=B_()),nc.exports}var fn=k_(),di=tf();const H_=Mm(di);var ka={},rc={exports:{}},An={},sc={exports:{}},oc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function V_(){return Id||(Id=1,(function(r){function e(Y,Z){var G=Y.length;Y.push(Z);e:for(;0<G;){var w=G-1>>>1,O=Y[w];if(0<a(O,Z))Y[w]=Z,Y[G]=O,G=w;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var Z=Y[0],G=Y.pop();if(G!==Z){Y[0]=G;e:for(var w=0,O=Y.length,ce=O>>>1;w<ce;){var fe=2*(w+1)-1,ge=Y[fe],Te=fe+1,Fe=Y[Te];if(0>a(ge,G))Te<O&&0>a(Fe,ge)?(Y[w]=Fe,Y[Te]=G,w=Te):(Y[w]=ge,Y[fe]=G,w=fe);else if(Te<O&&0>a(Fe,G))Y[w]=Fe,Y[Te]=G,w=Te;else break e}}return Z}function a(Y,Z){var G=Y.sortIndex-Z.sortIndex;return G!==0?G:Y.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();r.unstable_now=function(){return f.now()-c}}var h=[],p=[],m=1,x=null,_=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(Y){for(var Z=t(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=Y)s(p),Z.sortIndex=Z.expirationTime,e(h,Z);else break;Z=t(p)}}function P(Y){if(E=!1,R(Y),!M)if(t(h)!==null)M=!0,ue(b);else{var Z=t(p);Z!==null&&ie(P,Z.startTime-Y)}}function b(Y,Z){M=!1,E&&(E=!1,v(K),K=-1),S=!0;var G=_;try{for(R(Z),x=t(h);x!==null&&(!(x.expirationTime>Z)||Y&&!se());){var w=x.callback;if(typeof w=="function"){x.callback=null,_=x.priorityLevel;var O=w(x.expirationTime<=Z);Z=r.unstable_now(),typeof O=="function"?x.callback=O:x===t(h)&&s(h),R(Z)}else s(h);x=t(h)}if(x!==null)var ce=!0;else{var fe=t(p);fe!==null&&ie(P,fe.startTime-Z),ce=!1}return ce}finally{x=null,_=G,S=!1}}var F=!1,z=null,K=-1,C=5,D=-1;function se(){return!(r.unstable_now()-D<C)}function oe(){if(z!==null){var Y=r.unstable_now();D=Y;var Z=!0;try{Z=z(!0,Y)}finally{Z?le():(F=!1,z=null)}}else F=!1}var le;if(typeof N=="function")le=function(){N(oe)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ne=B.port2;B.port1.onmessage=oe,le=function(){ne.postMessage(null)}}else le=function(){y(oe,0)};function ue(Y){z=Y,F||(F=!0,le())}function ie(Y,Z){K=y(function(){Y(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,ue(b))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(Y){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var G=_;_=Z;try{return Y()}finally{_=G}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,Z){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var G=_;_=Y;try{return Z()}finally{_=G}},r.unstable_scheduleCallback=function(Y,Z,G){var w=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?w+G:w):G=w,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=G+O,Y={id:m++,callback:Z,priorityLevel:Y,startTime:G,expirationTime:O,sortIndex:-1},G>w?(Y.sortIndex=G,e(p,Y),t(h)===null&&Y===t(p)&&(E?(v(K),K=-1):E=!0,ie(P,G-w))):(Y.sortIndex=O,e(h,Y),M||S||(M=!0,ue(b))),Y},r.unstable_shouldYield=se,r.unstable_wrapCallback=function(Y){var Z=_;return function(){var G=_;_=Z;try{return Y.apply(this,arguments)}finally{_=G}}}})(oc)),oc}var Nd;function G_(){return Nd||(Nd=1,sc.exports=V_()),sc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd;function W_(){if(Fd)return An;Fd=1;var r=tf(),e=G_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function _(n){return h.call(x,n)?!0:h.call(m,n)?!1:p.test(n)?x[n]=!0:(m[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,o,u,d,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,N);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,N);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,N);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),F=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),se=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),Y=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var G=Object.assign,w;function O(n){if(w===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+n}var ce=!1;function fe(n,i){if(!n||ce)return"";ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch($){var u=$}Reflect.construct(n,[],i)}else{try{i.call()}catch($){u=$}n.call(i.prototype)}else{try{throw Error()}catch($){u=$}n()}}catch($){if($&&u&&typeof $.stack=="string"){for(var d=$.stack.split(`
`),g=u.stack.split(`
`),T=d.length-1,I=g.length-1;1<=T&&0<=I&&d[T]!==g[I];)I--;for(;1<=T&&0<=I;T--,I--)if(d[T]!==g[I]){if(T!==1||I!==1)do if(T--,I--,0>I||d[T]!==g[I]){var k=`
`+d[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=I);break}}}finally{ce=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?O(n):""}function ge(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=fe(n.type,!1),n;case 11:return n=fe(n.type.render,!1),n;case 1:return n=fe(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case F:return"Portal";case C:return"Profiler";case K:return"StrictMode";case le:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case se:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:Te(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return Te(n(i))}catch{}}return null}function Fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ct(n){var i=Ie(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tt(n){n._valueTracker||(n._valueTracker=ct(n))}function j(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ie(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Yt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function He(n,i){var o=i.checked;return G({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ze(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Re(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function je(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Et(n,i){je(n,i);var o=Re(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?nt(n,i.type,o):i.hasOwnProperty("defaultValue")&&nt(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function it(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function nt(n,i,o){(i!=="number"||Yt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var dt=Array.isArray;function At(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Bt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return G({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(dt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Re(o)}}function A(n,i){var o=Re(i.value),u=Re(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Q(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ye(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ye(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _e,Be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(_e=_e||document.createElement("div"),_e.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=_e.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Me(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(n){$e.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ce[i]=Ce[n]})});function ft(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ce.hasOwnProperty(n)&&Ce[n]?(""+i).trim():i+"px"}function xe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=ft(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var vt=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,i){if(i){if(vt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ye(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ve=null;function be(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ot=null,H=null,we=null;function Se(n){if(n=io(n)){if(typeof ot!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ta(i),ot(n.stateNode,n.type,i))}}function ae(n){H?we?we.push(n):we=[n]:H=n}function Ee(){if(H){var n=H,i=we;if(we=H=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function Xe(n,i){return n(i)}function ht(){}var Pt=!1;function dn(n,i,o){if(Pt)return n(i,o);Pt=!0;try{return Xe(n,i,o)}finally{Pt=!1,(H!==null||we!==null)&&(ht(),Ee())}}function gt(n,i){var o=n.stateNode;if(o===null)return null;var u=ta(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Vt=!1;if(c)try{var rn={};Object.defineProperty(rn,"passive",{get:function(){Vt=!0}}),window.addEventListener("test",rn,rn),window.removeEventListener("test",rn,rn)}catch{Vt=!1}function Io(n,i,o,u,d,g,T,I,k){var $=Array.prototype.slice.call(arguments,3);try{i.apply(o,$)}catch(de){this.onError(de)}}var mr=!1,mi=null,gr=!1,Fi=null,No={onError:function(n){mr=!0,mi=n}};function Fo(n,i,o,u,d,g,T,I,k){mr=!1,mi=null,Io.apply(No,arguments)}function Tl(n,i,o,u,d,g,T,I,k){if(Fo.apply(this,arguments),mr){if(mr){var $=mi;mr=!1,mi=null}else throw Error(t(198));gr||(gr=!0,Fi=$)}}function gi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Oo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function L(n){if(gi(n)!==n)throw Error(t(188))}function X(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return L(d),n;if(g===u)return L(d),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=g;else{for(var T=!1,I=d.child;I;){if(I===o){T=!0,o=d,u=g;break}if(I===u){T=!0,u=d,o=g;break}I=I.sibling}if(!T){for(I=g.child;I;){if(I===o){T=!0,o=g,u=d;break}if(I===u){T=!0,u=g,o=d;break}I=I.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function J(n){return n=X(n),n!==null?te(n):null}function te(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=te(n);if(i!==null)return i;n=n.sibling}return null}var re=e.unstable_scheduleCallback,Le=e.unstable_cancelCallback,ke=e.unstable_shouldYield,qe=e.unstable_requestPaint,De=e.unstable_now,rt=e.unstable_getCurrentPriorityLevel,Je=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,Tt=e.unstable_NormalPriority,pn=e.unstable_LowPriority,Ft=e.unstable_IdlePriority,yn=null,pt=null;function at(n){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(yn,n,void 0,(n.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:zo,It=Math.log,_i=Math.LN2;function zo(n){return n>>>=0,n===0?32:31-(It(n)/_i|0)|0}var ai=64,Oi=4194304;function Ot(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function zn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,g=n.pingedLanes,T=o&268435455;if(T!==0){var I=T&~d;I!==0?u=Ot(I):(g&=T,g!==0&&(u=Ot(g)))}else T=o&~d,T!==0?u=Ot(T):g!==0&&(u=Ot(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-mn(i),d=1<<o,u|=n[o],i&=~d;return u}function Bs(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-mn(g),I=1<<T,k=d[T];k===-1?((I&o)===0||(I&u)!==0)&&(d[T]=Bs(I,i)):k<=i&&(n.expiredLanes|=I),g&=~I}}function _r(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bo(){var n=ai;return ai<<=1,(ai&4194240)===0&&(ai=64),n}function Xr(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function ks(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-mn(i),n[i]=o}function sg(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-mn(o),g=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~g}}function wl(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-mn(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var xt=0;function lf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var uf,Al,cf,ff,hf,Rl=!1,ko=[],zi=null,Bi=null,ki=null,Hs=new Map,Vs=new Map,Hi=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function df(n,i){switch(n){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Hs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(i.pointerId)}}function Gs(n,i,o,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},i!==null&&(i=io(i),i!==null&&Al(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function ag(n,i,o,u,d){switch(i){case"focusin":return zi=Gs(zi,n,i,o,u,d),!0;case"dragenter":return Bi=Gs(Bi,n,i,o,u,d),!0;case"mouseover":return ki=Gs(ki,n,i,o,u,d),!0;case"pointerover":var g=d.pointerId;return Hs.set(g,Gs(Hs.get(g)||null,n,i,o,u,d)),!0;case"gotpointercapture":return g=d.pointerId,Vs.set(g,Gs(Vs.get(g)||null,n,i,o,u,d)),!0}return!1}function pf(n){var i=vr(n.target);if(i!==null){var o=gi(i);if(o!==null){if(i=o.tag,i===13){if(i=Oo(o),i!==null){n.blockedOn=i,hf(n.priority,function(){cf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ho(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Ll(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ve=u,o.target.dispatchEvent(u),Ve=null}else return i=io(o),i!==null&&Al(i),n.blockedOn=o,!1;i.shift()}return!0}function mf(n,i,o){Ho(n)&&o.delete(i)}function lg(){Rl=!1,zi!==null&&Ho(zi)&&(zi=null),Bi!==null&&Ho(Bi)&&(Bi=null),ki!==null&&Ho(ki)&&(ki=null),Hs.forEach(mf),Vs.forEach(mf)}function Ws(n,i){n.blockedOn===i&&(n.blockedOn=null,Rl||(Rl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lg)))}function Xs(n){function i(d){return Ws(d,n)}if(0<ko.length){Ws(ko[0],n);for(var o=1;o<ko.length;o++){var u=ko[o];u.blockedOn===n&&(u.blockedOn=null)}}for(zi!==null&&Ws(zi,n),Bi!==null&&Ws(Bi,n),ki!==null&&Ws(ki,n),Hs.forEach(i),Vs.forEach(i),o=0;o<Hi.length;o++)u=Hi[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Hi.length&&(o=Hi[0],o.blockedOn===null);)pf(o),o.blockedOn===null&&Hi.shift()}var qr=P.ReactCurrentBatchConfig,Vo=!0;function ug(n,i,o,u){var d=xt,g=qr.transition;qr.transition=null;try{xt=1,Cl(n,i,o,u)}finally{xt=d,qr.transition=g}}function cg(n,i,o,u){var d=xt,g=qr.transition;qr.transition=null;try{xt=4,Cl(n,i,o,u)}finally{xt=d,qr.transition=g}}function Cl(n,i,o,u){if(Vo){var d=Ll(n,i,o,u);if(d===null)ql(n,i,u,Go,o),df(n,u);else if(ag(d,n,i,o,u))u.stopPropagation();else if(df(n,u),i&4&&-1<og.indexOf(n)){for(;d!==null;){var g=io(d);if(g!==null&&uf(g),g=Ll(n,i,o,u),g===null&&ql(n,i,u,Go,o),g===d)break;d=g}d!==null&&u.stopPropagation()}else ql(n,i,u,null,o)}}var Go=null;function Ll(n,i,o,u){if(Go=null,n=be(u),n=vr(n),n!==null)if(i=gi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Oo(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Go=n,null}function gf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rt()){case Je:return 1;case et:return 4;case Tt:case pn:return 16;case Ft:return 536870912;default:return 16}default:return 16}}var Vi=null,Pl=null,Wo=null;function _f(){if(Wo)return Wo;var n,i=Pl,o=i.length,u,d="value"in Vi?Vi.value:Vi.textContent,g=d.length;for(n=0;n<o&&i[n]===d[n];n++);var T=o-n;for(u=1;u<=T&&i[o-u]===d[g-u];u++);return Wo=d.slice(n,1<u?1-u:void 0)}function Xo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function qo(){return!0}function vf(){return!1}function bn(n){function i(o,u,d,g,T){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?qo:vf,this.isPropagationStopped=vf,this}return G(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),i}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=bn(Yr),qs=G({},Yr,{view:0,detail:0}),fg=bn(qs),Dl,Ul,Ys,Yo=G({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ys&&(Ys&&n.type==="mousemove"?(Dl=n.screenX-Ys.screenX,Ul=n.screenY-Ys.screenY):Ul=Dl=0,Ys=n),Dl)},movementY:function(n){return"movementY"in n?n.movementY:Ul}}),xf=bn(Yo),hg=G({},Yo,{dataTransfer:0}),dg=bn(hg),pg=G({},qs,{relatedTarget:0}),Il=bn(pg),mg=G({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=bn(mg),_g=G({},Yr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vg=bn(_g),xg=G({},Yr,{data:0}),yf=bn(xg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Mg[n])?!!i[n]:!1}function Nl(){return Eg}var Tg=G({},qs,{key:function(n){if(n.key){var i=yg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Xo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(n){return n.type==="keypress"?Xo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wg=bn(Tg),Ag=G({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=bn(Ag),Rg=G({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),Cg=bn(Rg),Lg=G({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=bn(Lg),bg=G({},Yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=bn(bg),Ug=[9,13,27,32],Fl=c&&"CompositionEvent"in window,js=null;c&&"documentMode"in document&&(js=document.documentMode);var Ig=c&&"TextEvent"in window&&!js,Mf=c&&(!Fl||js&&8<js&&11>=js),Ef=" ",Tf=!1;function wf(n,i){switch(n){case"keyup":return Ug.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var jr=!1;function Ng(n,i){switch(n){case"compositionend":return Af(i);case"keypress":return i.which!==32?null:(Tf=!0,Ef);case"textInput":return n=i.data,n===Ef&&Tf?null:n;default:return null}}function Fg(n,i){if(jr)return n==="compositionend"||!Fl&&wf(n,i)?(n=_f(),Wo=Pl=Vi=null,jr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mf&&i.locale!=="ko"?null:i.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Og[n.type]:i==="textarea"}function Cf(n,i,o,u){ae(u),i=Qo(i,"onChange"),0<i.length&&(o=new bl("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var $s=null,Ks=null;function zg(n){qf(n,0)}function jo(n){var i=Jr(n);if(j(i))return n}function Bg(n,i){if(n==="change")return i}var Lf=!1;if(c){var Ol;if(c){var zl="oninput"in document;if(!zl){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),zl=typeof Pf.oninput=="function"}Ol=zl}else Ol=!1;Lf=Ol&&(!document.documentMode||9<document.documentMode)}function bf(){$s&&($s.detachEvent("onpropertychange",Df),Ks=$s=null)}function Df(n){if(n.propertyName==="value"&&jo(Ks)){var i=[];Cf(i,Ks,n,be(n)),dn(zg,i)}}function kg(n,i,o){n==="focusin"?(bf(),$s=i,Ks=o,$s.attachEvent("onpropertychange",Df)):n==="focusout"&&bf()}function Hg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jo(Ks)}function Vg(n,i){if(n==="click")return jo(i)}function Gg(n,i){if(n==="input"||n==="change")return jo(i)}function Wg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var $n=typeof Object.is=="function"?Object.is:Wg;function Zs(n,i){if($n(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!$n(n[d],i[d]))return!1}return!0}function Uf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function If(n,i){var o=Uf(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Uf(o)}}function Nf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Nf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ff(){for(var n=window,i=Yt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Yt(n.document)}return i}function Bl(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Xg(n){var i=Ff(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Nf(o.ownerDocument.documentElement,o)){if(u!==null&&Bl(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,g=Math.min(u.start,d);u=u.end===void 0?g:Math.min(u.end,d),!n.extend&&g>u&&(d=u,u=g,g=d),d=If(o,g);var T=If(o,u);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qg=c&&"documentMode"in document&&11>=document.documentMode,$r=null,kl=null,Qs=null,Hl=!1;function Of(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Hl||$r==null||$r!==Yt(u)||(u=$r,"selectionStart"in u&&Bl(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Qs&&Zs(Qs,u)||(Qs=u,u=Qo(kl,"onSelect"),0<u.length&&(i=new bl("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=$r)))}function $o(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Kr={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},Vl={},zf={};c&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Ko(n){if(Vl[n])return Vl[n];if(!Kr[n])return n;var i=Kr[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in zf)return Vl[n]=i[o];return n}var Bf=Ko("animationend"),kf=Ko("animationiteration"),Hf=Ko("animationstart"),Vf=Ko("transitionend"),Gf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(n,i){Gf.set(n,i),l(i,[n])}for(var Gl=0;Gl<Wf.length;Gl++){var Wl=Wf[Gl],Yg=Wl.toLowerCase(),jg=Wl[0].toUpperCase()+Wl.slice(1);Gi(Yg,"on"+jg)}Gi(Bf,"onAnimationEnd"),Gi(kf,"onAnimationIteration"),Gi(Hf,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(Vf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function Xf(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Tl(u,i,void 0,n),n.currentTarget=null}function qf(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var T=u.length-1;0<=T;T--){var I=u[T],k=I.instance,$=I.currentTarget;if(I=I.listener,k!==g&&d.isPropagationStopped())break e;Xf(d,I,$),g=k}else for(T=0;T<u.length;T++){if(I=u[T],k=I.instance,$=I.currentTarget,I=I.listener,k!==g&&d.isPropagationStopped())break e;Xf(d,I,$),g=k}}}if(gr)throw n=Fi,gr=!1,Fi=null,n}function Rt(n,i){var o=i[Ql];o===void 0&&(o=i[Ql]=new Set);var u=n+"__bubble";o.has(u)||(Yf(i,n,2,!1),o.add(u))}function Xl(n,i,o){var u=0;i&&(u|=4),Yf(o,n,u,i)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function eo(n){if(!n[Zo]){n[Zo]=!0,s.forEach(function(o){o!=="selectionchange"&&($g.has(o)||Xl(o,!1,n),Xl(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Zo]||(i[Zo]=!0,Xl("selectionchange",!1,i))}}function Yf(n,i,o,u){switch(gf(i)){case 1:var d=ug;break;case 4:d=cg;break;default:d=Cl}o=d.bind(null,i,o,n),d=void 0,!Vt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function ql(n,i,o,u,d){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;T=T.return}for(;I!==null;){if(T=vr(I),T===null)return;if(k=T.tag,k===5||k===6){u=g=T;continue e}I=I.parentNode}}u=u.return}dn(function(){var $=g,de=be(o),pe=[];e:{var he=Gf.get(n);if(he!==void 0){var Pe=bl,Ne=n;switch(n){case"keypress":if(Xo(o)===0)break e;case"keydown":case"keyup":Pe=wg;break;case"focusin":Ne="focus",Pe=Il;break;case"focusout":Ne="blur",Pe=Il;break;case"beforeblur":case"afterblur":Pe=Il;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Pe=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Pe=dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Pe=Cg;break;case Bf:case kf:case Hf:Pe=gg;break;case Vf:Pe=Pg;break;case"scroll":Pe=fg;break;case"wheel":Pe=Dg;break;case"copy":case"cut":case"paste":Pe=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Pe=Sf}var Oe=(i&4)!==0,zt=!Oe&&n==="scroll",W=Oe?he!==null?he+"Capture":null:he;Oe=[];for(var V=$,q;V!==null;){q=V;var ve=q.stateNode;if(q.tag===5&&ve!==null&&(q=ve,W!==null&&(ve=gt(V,W),ve!=null&&Oe.push(to(V,ve,q)))),zt)break;V=V.return}0<Oe.length&&(he=new Pe(he,Ne,null,o,de),pe.push({event:he,listeners:Oe}))}}if((i&7)===0){e:{if(he=n==="mouseover"||n==="pointerover",Pe=n==="mouseout"||n==="pointerout",he&&o!==Ve&&(Ne=o.relatedTarget||o.fromElement)&&(vr(Ne)||Ne[vi]))break e;if((Pe||he)&&(he=de.window===de?de:(he=de.ownerDocument)?he.defaultView||he.parentWindow:window,Pe?(Ne=o.relatedTarget||o.toElement,Pe=$,Ne=Ne?vr(Ne):null,Ne!==null&&(zt=gi(Ne),Ne!==zt||Ne.tag!==5&&Ne.tag!==6)&&(Ne=null)):(Pe=null,Ne=$),Pe!==Ne)){if(Oe=xf,ve="onMouseLeave",W="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Oe=Sf,ve="onPointerLeave",W="onPointerEnter",V="pointer"),zt=Pe==null?he:Jr(Pe),q=Ne==null?he:Jr(Ne),he=new Oe(ve,V+"leave",Pe,o,de),he.target=zt,he.relatedTarget=q,ve=null,vr(de)===$&&(Oe=new Oe(W,V+"enter",Ne,o,de),Oe.target=q,Oe.relatedTarget=zt,ve=Oe),zt=ve,Pe&&Ne)t:{for(Oe=Pe,W=Ne,V=0,q=Oe;q;q=Zr(q))V++;for(q=0,ve=W;ve;ve=Zr(ve))q++;for(;0<V-q;)Oe=Zr(Oe),V--;for(;0<q-V;)W=Zr(W),q--;for(;V--;){if(Oe===W||W!==null&&Oe===W.alternate)break t;Oe=Zr(Oe),W=Zr(W)}Oe=null}else Oe=null;Pe!==null&&jf(pe,he,Pe,Oe,!1),Ne!==null&&zt!==null&&jf(pe,zt,Ne,Oe,!0)}}e:{if(he=$?Jr($):window,Pe=he.nodeName&&he.nodeName.toLowerCase(),Pe==="select"||Pe==="input"&&he.type==="file")var ze=Bg;else if(Rf(he))if(Lf)ze=Gg;else{ze=Hg;var Ge=kg}else(Pe=he.nodeName)&&Pe.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(ze=Vg);if(ze&&(ze=ze(n,$))){Cf(pe,ze,o,de);break e}Ge&&Ge(n,he,$),n==="focusout"&&(Ge=he._wrapperState)&&Ge.controlled&&he.type==="number"&&nt(he,"number",he.value)}switch(Ge=$?Jr($):window,n){case"focusin":(Rf(Ge)||Ge.contentEditable==="true")&&($r=Ge,kl=$,Qs=null);break;case"focusout":Qs=kl=$r=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,Of(pe,o,de);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":Of(pe,o,de)}var We;if(Fl)e:{switch(n){case"compositionstart":var Ke="onCompositionStart";break e;case"compositionend":Ke="onCompositionEnd";break e;case"compositionupdate":Ke="onCompositionUpdate";break e}Ke=void 0}else jr?wf(n,o)&&(Ke="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ke="onCompositionStart");Ke&&(Mf&&o.locale!=="ko"&&(jr||Ke!=="onCompositionStart"?Ke==="onCompositionEnd"&&jr&&(We=_f()):(Vi=de,Pl="value"in Vi?Vi.value:Vi.textContent,jr=!0)),Ge=Qo($,Ke),0<Ge.length&&(Ke=new yf(Ke,n,null,o,de),pe.push({event:Ke,listeners:Ge}),We?Ke.data=We:(We=Af(o),We!==null&&(Ke.data=We)))),(We=Ig?Ng(n,o):Fg(n,o))&&($=Qo($,"onBeforeInput"),0<$.length&&(de=new yf("onBeforeInput","beforeinput",null,o,de),pe.push({event:de,listeners:$}),de.data=We))}qf(pe,i)})}function to(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Qo(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=gt(n,o),g!=null&&u.unshift(to(n,g,d)),g=gt(n,i),g!=null&&u.push(to(n,g,d))),n=n.return}return u}function Zr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jf(n,i,o,u,d){for(var g=i._reactName,T=[];o!==null&&o!==u;){var I=o,k=I.alternate,$=I.stateNode;if(k!==null&&k===u)break;I.tag===5&&$!==null&&(I=$,d?(k=gt(o,g),k!=null&&T.unshift(to(o,k,I))):d||(k=gt(o,g),k!=null&&T.push(to(o,k,I)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var Kg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function $f(n){return(typeof n=="string"?n:""+n).replace(Kg,`
`).replace(Zg,"")}function Jo(n,i,o){if(i=$f(i),$f(n)!==i&&o)throw Error(t(425))}function ea(){}var Yl=null,jl=null;function $l(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(n){return Kf.resolve(null).then(n).catch(e_)}:Kl;function e_(n){setTimeout(function(){throw n})}function Zl(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Xs(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Xs(i)}function Wi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Zf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),li="__reactFiber$"+Qr,no="__reactProps$"+Qr,vi="__reactContainer$"+Qr,Ql="__reactEvents$"+Qr,t_="__reactListeners$"+Qr,n_="__reactHandles$"+Qr;function vr(n){var i=n[li];if(i)return i;for(var o=n.parentNode;o;){if(i=o[vi]||o[li]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Zf(n);n!==null;){if(o=n[li])return o;n=Zf(n)}return i}n=o,o=n.parentNode}return null}function io(n){return n=n[li]||n[vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Jr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ta(n){return n[no]||null}var Jl=[],es=-1;function Xi(n){return{current:n}}function Ct(n){0>es||(n.current=Jl[es],Jl[es]=null,es--)}function wt(n,i){es++,Jl[es]=n.current,n.current=i}var qi={},sn=Xi(qi),Sn=Xi(!1),xr=qi;function ts(n,i){var o=n.type.contextTypes;if(!o)return qi;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in o)d[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Mn(n){return n=n.childContextTypes,n!=null}function na(){Ct(Sn),Ct(sn)}function Qf(n,i,o){if(sn.current!==qi)throw Error(t(168));wt(sn,i),wt(Sn,o)}function Jf(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Fe(n)||"Unknown",d));return G({},o,u)}function ia(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qi,xr=sn.current,wt(sn,n),wt(Sn,Sn.current),!0}function eh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Jf(n,i,xr),u.__reactInternalMemoizedMergedChildContext=n,Ct(Sn),Ct(sn),wt(sn,n)):Ct(Sn),wt(Sn,o)}var xi=null,ra=!1,eu=!1;function th(n){xi===null?xi=[n]:xi.push(n)}function i_(n){ra=!0,th(n)}function Yi(){if(!eu&&xi!==null){eu=!0;var n=0,i=xt;try{var o=xi;for(xt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}xi=null,ra=!1}catch(d){throw xi!==null&&(xi=xi.slice(n+1)),re(Je,Yi),d}finally{xt=i,eu=!1}}return null}var ns=[],is=0,sa=null,oa=0,Bn=[],kn=0,yr=null,yi=1,Si="";function Sr(n,i){ns[is++]=oa,ns[is++]=sa,sa=n,oa=i}function nh(n,i,o){Bn[kn++]=yi,Bn[kn++]=Si,Bn[kn++]=yr,yr=n;var u=yi;n=Si;var d=32-mn(u)-1;u&=~(1<<d),o+=1;var g=32-mn(i)+d;if(30<g){var T=d-d%5;g=(u&(1<<T)-1).toString(32),u>>=T,d-=T,yi=1<<32-mn(i)+d|o<<d|u,Si=g+n}else yi=1<<g|o<<d|u,Si=n}function tu(n){n.return!==null&&(Sr(n,1),nh(n,1,0))}function nu(n){for(;n===sa;)sa=ns[--is],ns[is]=null,oa=ns[--is],ns[is]=null;for(;n===yr;)yr=Bn[--kn],Bn[kn]=null,Si=Bn[--kn],Bn[kn]=null,yi=Bn[--kn],Bn[kn]=null}var Dn=null,Un=null,bt=!1,Kn=null;function ih(n,i){var o=Wn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function rh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Dn=n,Un=Wi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Dn=n,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=yr!==null?{id:yi,overflow:Si}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Wn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Dn=n,Un=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(bt){var i=Un;if(i){var o=i;if(!rh(n,i)){if(iu(n))throw Error(t(418));i=Wi(o.nextSibling);var u=Dn;i&&rh(n,i)?ih(u,o):(n.flags=n.flags&-4097|2,bt=!1,Dn=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,bt=!1,Dn=n}}}function sh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Dn=n}function aa(n){if(n!==Dn)return!1;if(!bt)return sh(n),bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!$l(n.type,n.memoizedProps)),i&&(i=Un)){if(iu(n))throw oh(),Error(t(418));for(;i;)ih(n,i),i=Wi(i.nextSibling)}if(sh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Un=Wi(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Un=null}}else Un=Dn?Wi(n.stateNode.nextSibling):null;return!0}function oh(){for(var n=Un;n;)n=Wi(n.nextSibling)}function rs(){Un=Dn=null,bt=!1}function su(n){Kn===null?Kn=[n]:Kn.push(n)}var r_=P.ReactCurrentBatchConfig;function ro(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var I=d.refs;T===null?delete I[g]:I[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function la(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ah(n){var i=n._init;return i(n._payload)}function lh(n){function i(W,V){if(n){var q=W.deletions;q===null?(W.deletions=[V],W.flags|=16):q.push(V)}}function o(W,V){if(!n)return null;for(;V!==null;)i(W,V),V=V.sibling;return null}function u(W,V){for(W=new Map;V!==null;)V.key!==null?W.set(V.key,V):W.set(V.index,V),V=V.sibling;return W}function d(W,V){return W=tr(W,V),W.index=0,W.sibling=null,W}function g(W,V,q){return W.index=q,n?(q=W.alternate,q!==null?(q=q.index,q<V?(W.flags|=2,V):q):(W.flags|=2,V)):(W.flags|=1048576,V)}function T(W){return n&&W.alternate===null&&(W.flags|=2),W}function I(W,V,q,ve){return V===null||V.tag!==6?(V=Ku(q,W.mode,ve),V.return=W,V):(V=d(V,q),V.return=W,V)}function k(W,V,q,ve){var ze=q.type;return ze===z?de(W,V,q.props.children,ve,q.key):V!==null&&(V.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===ue&&ah(ze)===V.type)?(ve=d(V,q.props),ve.ref=ro(W,V,q),ve.return=W,ve):(ve=Da(q.type,q.key,q.props,null,W.mode,ve),ve.ref=ro(W,V,q),ve.return=W,ve)}function $(W,V,q,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==q.containerInfo||V.stateNode.implementation!==q.implementation?(V=Zu(q,W.mode,ve),V.return=W,V):(V=d(V,q.children||[]),V.return=W,V)}function de(W,V,q,ve,ze){return V===null||V.tag!==7?(V=Lr(q,W.mode,ve,ze),V.return=W,V):(V=d(V,q),V.return=W,V)}function pe(W,V,q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Ku(""+V,W.mode,q),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return q=Da(V.type,V.key,V.props,null,W.mode,q),q.ref=ro(W,null,V),q.return=W,q;case F:return V=Zu(V,W.mode,q),V.return=W,V;case ue:var ve=V._init;return pe(W,ve(V._payload),q)}if(dt(V)||Z(V))return V=Lr(V,W.mode,q,null),V.return=W,V;la(W,V)}return null}function he(W,V,q,ve){var ze=V!==null?V.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return ze!==null?null:I(W,V,""+q,ve);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case b:return q.key===ze?k(W,V,q,ve):null;case F:return q.key===ze?$(W,V,q,ve):null;case ue:return ze=q._init,he(W,V,ze(q._payload),ve)}if(dt(q)||Z(q))return ze!==null?null:de(W,V,q,ve,null);la(W,q)}return null}function Pe(W,V,q,ve,ze){if(typeof ve=="string"&&ve!==""||typeof ve=="number")return W=W.get(q)||null,I(V,W,""+ve,ze);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return W=W.get(ve.key===null?q:ve.key)||null,k(V,W,ve,ze);case F:return W=W.get(ve.key===null?q:ve.key)||null,$(V,W,ve,ze);case ue:var Ge=ve._init;return Pe(W,V,q,Ge(ve._payload),ze)}if(dt(ve)||Z(ve))return W=W.get(q)||null,de(V,W,ve,ze,null);la(V,ve)}return null}function Ne(W,V,q,ve){for(var ze=null,Ge=null,We=V,Ke=V=0,Kt=null;We!==null&&Ke<q.length;Ke++){We.index>Ke?(Kt=We,We=null):Kt=We.sibling;var _t=he(W,We,q[Ke],ve);if(_t===null){We===null&&(We=Kt);break}n&&We&&_t.alternate===null&&i(W,We),V=g(_t,V,Ke),Ge===null?ze=_t:Ge.sibling=_t,Ge=_t,We=Kt}if(Ke===q.length)return o(W,We),bt&&Sr(W,Ke),ze;if(We===null){for(;Ke<q.length;Ke++)We=pe(W,q[Ke],ve),We!==null&&(V=g(We,V,Ke),Ge===null?ze=We:Ge.sibling=We,Ge=We);return bt&&Sr(W,Ke),ze}for(We=u(W,We);Ke<q.length;Ke++)Kt=Pe(We,W,Ke,q[Ke],ve),Kt!==null&&(n&&Kt.alternate!==null&&We.delete(Kt.key===null?Ke:Kt.key),V=g(Kt,V,Ke),Ge===null?ze=Kt:Ge.sibling=Kt,Ge=Kt);return n&&We.forEach(function(nr){return i(W,nr)}),bt&&Sr(W,Ke),ze}function Oe(W,V,q,ve){var ze=Z(q);if(typeof ze!="function")throw Error(t(150));if(q=ze.call(q),q==null)throw Error(t(151));for(var Ge=ze=null,We=V,Ke=V=0,Kt=null,_t=q.next();We!==null&&!_t.done;Ke++,_t=q.next()){We.index>Ke?(Kt=We,We=null):Kt=We.sibling;var nr=he(W,We,_t.value,ve);if(nr===null){We===null&&(We=Kt);break}n&&We&&nr.alternate===null&&i(W,We),V=g(nr,V,Ke),Ge===null?ze=nr:Ge.sibling=nr,Ge=nr,We=Kt}if(_t.done)return o(W,We),bt&&Sr(W,Ke),ze;if(We===null){for(;!_t.done;Ke++,_t=q.next())_t=pe(W,_t.value,ve),_t!==null&&(V=g(_t,V,Ke),Ge===null?ze=_t:Ge.sibling=_t,Ge=_t);return bt&&Sr(W,Ke),ze}for(We=u(W,We);!_t.done;Ke++,_t=q.next())_t=Pe(We,W,Ke,_t.value,ve),_t!==null&&(n&&_t.alternate!==null&&We.delete(_t.key===null?Ke:_t.key),V=g(_t,V,Ke),Ge===null?ze=_t:Ge.sibling=_t,Ge=_t);return n&&We.forEach(function(O_){return i(W,O_)}),bt&&Sr(W,Ke),ze}function zt(W,V,q,ve){if(typeof q=="object"&&q!==null&&q.type===z&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case b:e:{for(var ze=q.key,Ge=V;Ge!==null;){if(Ge.key===ze){if(ze=q.type,ze===z){if(Ge.tag===7){o(W,Ge.sibling),V=d(Ge,q.props.children),V.return=W,W=V;break e}}else if(Ge.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===ue&&ah(ze)===Ge.type){o(W,Ge.sibling),V=d(Ge,q.props),V.ref=ro(W,Ge,q),V.return=W,W=V;break e}o(W,Ge);break}else i(W,Ge);Ge=Ge.sibling}q.type===z?(V=Lr(q.props.children,W.mode,ve,q.key),V.return=W,W=V):(ve=Da(q.type,q.key,q.props,null,W.mode,ve),ve.ref=ro(W,V,q),ve.return=W,W=ve)}return T(W);case F:e:{for(Ge=q.key;V!==null;){if(V.key===Ge)if(V.tag===4&&V.stateNode.containerInfo===q.containerInfo&&V.stateNode.implementation===q.implementation){o(W,V.sibling),V=d(V,q.children||[]),V.return=W,W=V;break e}else{o(W,V);break}else i(W,V);V=V.sibling}V=Zu(q,W.mode,ve),V.return=W,W=V}return T(W);case ue:return Ge=q._init,zt(W,V,Ge(q._payload),ve)}if(dt(q))return Ne(W,V,q,ve);if(Z(q))return Oe(W,V,q,ve);la(W,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,V!==null&&V.tag===6?(o(W,V.sibling),V=d(V,q),V.return=W,W=V):(o(W,V),V=Ku(q,W.mode,ve),V.return=W,W=V),T(W)):o(W,V)}return zt}var ss=lh(!0),uh=lh(!1),ua=Xi(null),ca=null,os=null,ou=null;function au(){ou=os=ca=null}function lu(n){var i=ua.current;Ct(ua),n._currentValue=i}function uu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function as(n,i){ca=n,ou=os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(En=!0),n.firstContext=null)}function Hn(n){var i=n._currentValue;if(ou!==n)if(n={context:n,memoizedValue:i,next:null},os===null){if(ca===null)throw Error(t(308));os=n,ca.dependencies={lanes:0,firstContext:n}}else os=os.next=n;return i}var Mr=null;function cu(n){Mr===null?Mr=[n]:Mr.push(n)}function ch(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,cu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Mi(n,u)}function Mi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ji=!1;function fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ei(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function $i(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(mt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Mi(n,o)}return d=u.interleaved,d===null?(i.next=i,cu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Mi(n,o)}function fa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,wl(n,o)}}function hh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?d=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?d=g=i:g=g.next=i}else d=g=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function ha(n,i,o,u){var d=n.updateQueue;ji=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,$=k.next;k.next=null,T===null?g=$:T.next=$,T=k;var de=n.alternate;de!==null&&(de=de.updateQueue,I=de.lastBaseUpdate,I!==T&&(I===null?de.firstBaseUpdate=$:I.next=$,de.lastBaseUpdate=k))}if(g!==null){var pe=d.baseState;T=0,de=$=k=null,I=g;do{var he=I.lane,Pe=I.eventTime;if((u&he)===he){de!==null&&(de=de.next={eventTime:Pe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ne=n,Oe=I;switch(he=i,Pe=o,Oe.tag){case 1:if(Ne=Oe.payload,typeof Ne=="function"){pe=Ne.call(Pe,pe,he);break e}pe=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Oe.payload,he=typeof Ne=="function"?Ne.call(Pe,pe,he):Ne,he==null)break e;pe=G({},pe,he);break e;case 2:ji=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,he=d.effects,he===null?d.effects=[I]:he.push(I))}else Pe={eventTime:Pe,lane:he,tag:I.tag,payload:I.payload,callback:I.callback,next:null},de===null?($=de=Pe,k=pe):de=de.next=Pe,T|=he;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;he=I,I=he.next,he.next=null,d.lastBaseUpdate=he,d.shared.pending=null}}while(!0);if(de===null&&(k=pe),d.baseState=k,d.firstBaseUpdate=$,d.lastBaseUpdate=de,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);wr|=T,n.lanes=T,n.memoizedState=pe}}function dh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var so={},ui=Xi(so),oo=Xi(so),ao=Xi(so);function Er(n){if(n===so)throw Error(t(174));return n}function hu(n,i){switch(wt(ao,i),wt(oo,n),wt(ui,so),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Ct(ui),wt(ui,i)}function ls(){Ct(ui),Ct(oo),Ct(ao)}function ph(n){Er(ao.current);var i=Er(ui.current),o=me(i,n.type);i!==o&&(wt(oo,n),wt(ui,o))}function du(n){oo.current===n&&(Ct(ui),Ct(oo))}var Dt=Xi(0);function da(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var pa=P.ReactCurrentDispatcher,gu=P.ReactCurrentBatchConfig,Tr=0,Ut=null,Gt=null,jt=null,ma=!1,lo=!1,uo=0,s_=0;function on(){throw Error(t(321))}function _u(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!$n(n[o],i[o]))return!1;return!0}function vu(n,i,o,u,d,g){if(Tr=g,Ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,pa.current=n===null||n.memoizedState===null?u_:c_,n=o(u,d),lo){g=0;do{if(lo=!1,uo=0,25<=g)throw Error(t(301));g+=1,jt=Gt=null,i.updateQueue=null,pa.current=f_,n=o(u,d)}while(lo)}if(pa.current=va,i=Gt!==null&&Gt.next!==null,Tr=0,jt=Gt=Ut=null,ma=!1,i)throw Error(t(300));return n}function xu(){var n=uo!==0;return uo=0,n}function ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ut.memoizedState=jt=n:jt=jt.next=n,jt}function Vn(){if(Gt===null){var n=Ut.alternate;n=n!==null?n.memoizedState:null}else n=Gt.next;var i=jt===null?Ut.memoizedState:jt.next;if(i!==null)jt=i,Gt=n;else{if(n===null)throw Error(t(310));Gt=n,n={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},jt===null?Ut.memoizedState=jt=n:jt=jt.next=n}return jt}function co(n,i){return typeof i=="function"?i(n):i}function yu(n){var i=Vn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Gt,d=u.baseQueue,g=o.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}u.baseQueue=d=g,o.pending=null}if(d!==null){g=d.next,u=u.baseState;var I=T=null,k=null,$=g;do{var de=$.lane;if((Tr&de)===de)k!==null&&(k=k.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),u=$.hasEagerState?$.eagerState:n(u,$.action);else{var pe={lane:de,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};k===null?(I=k=pe,T=u):k=k.next=pe,Ut.lanes|=de,wr|=de}$=$.next}while($!==null&&$!==g);k===null?T=u:k.next=I,$n(u,i.memoizedState)||(En=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do g=d.lane,Ut.lanes|=g,wr|=g,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Su(n){var i=Vn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,g=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do g=n(g,T.action),T=T.next;while(T!==d);$n(g,i.memoizedState)||(En=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function mh(){}function gh(n,i){var o=Ut,u=Vn(),d=i(),g=!$n(u.memoizedState,d);if(g&&(u.memoizedState=d,En=!0),u=u.queue,Mu(xh.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||jt!==null&&jt.memoizedState.tag&1){if(o.flags|=2048,fo(9,vh.bind(null,o,u,d,i),void 0,null),$t===null)throw Error(t(349));(Tr&30)!==0||_h(o,i,d)}return d}function _h(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function vh(n,i,o,u){i.value=o,i.getSnapshot=u,yh(i)&&Sh(n)}function xh(n,i,o){return o(function(){yh(i)&&Sh(n)})}function yh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!$n(n,o)}catch{return!0}}function Sh(n){var i=Mi(n,1);i!==null&&ei(i,n,1,-1)}function Mh(n){var i=ci();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:n},i.queue=n,n=n.dispatch=l_.bind(null,Ut,n),[i.memoizedState,n]}function fo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Eh(){return Vn().memoizedState}function ga(n,i,o,u){var d=ci();Ut.flags|=n,d.memoizedState=fo(1|i,o,void 0,u===void 0?null:u)}function _a(n,i,o,u){var d=Vn();u=u===void 0?null:u;var g=void 0;if(Gt!==null){var T=Gt.memoizedState;if(g=T.destroy,u!==null&&_u(u,T.deps)){d.memoizedState=fo(i,o,g,u);return}}Ut.flags|=n,d.memoizedState=fo(1|i,o,g,u)}function Th(n,i){return ga(8390656,8,n,i)}function Mu(n,i){return _a(2048,8,n,i)}function wh(n,i){return _a(4,2,n,i)}function Ah(n,i){return _a(4,4,n,i)}function Rh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ch(n,i,o){return o=o!=null?o.concat([n]):null,_a(4,4,Rh.bind(null,i,n),o)}function Eu(){}function Lh(n,i){var o=Vn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&_u(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Ph(n,i){var o=Vn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&_u(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function bh(n,i,o){return(Tr&21)===0?(n.baseState&&(n.baseState=!1,En=!0),n.memoizedState=o):($n(o,i)||(o=Bo(),Ut.lanes|=o,wr|=o,n.baseState=!0),i)}function o_(n,i){var o=xt;xt=o!==0&&4>o?o:4,n(!0);var u=gu.transition;gu.transition={};try{n(!1),i()}finally{xt=o,gu.transition=u}}function Dh(){return Vn().memoizedState}function a_(n,i,o){var u=Ji(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Uh(n))Ih(i,o);else if(o=ch(n,i,o,u),o!==null){var d=vn();ei(o,n,u,d),Nh(o,i,u)}}function l_(n,i,o){var u=Ji(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Uh(n))Ih(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,I=g(T,o);if(d.hasEagerState=!0,d.eagerState=I,$n(I,T)){var k=i.interleaved;k===null?(d.next=d,cu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=ch(n,i,d,u),o!==null&&(d=vn(),ei(o,n,u,d),Nh(o,i,u))}}function Uh(n){var i=n.alternate;return n===Ut||i!==null&&i===Ut}function Ih(n,i){lo=ma=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Nh(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,wl(n,o)}}var va={readContext:Hn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},u_={readContext:Hn,useCallback:function(n,i){return ci().memoizedState=[n,i===void 0?null:i],n},useContext:Hn,useEffect:Th,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,ga(4194308,4,Rh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return ga(4194308,4,n,i)},useInsertionEffect:function(n,i){return ga(4,2,n,i)},useMemo:function(n,i){var o=ci();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=ci();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=a_.bind(null,Ut,n),[u.memoizedState,n]},useRef:function(n){var i=ci();return n={current:n},i.memoizedState=n},useState:Mh,useDebugValue:Eu,useDeferredValue:function(n){return ci().memoizedState=n},useTransition:function(){var n=Mh(!1),i=n[0];return n=o_.bind(null,n[1]),ci().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Ut,d=ci();if(bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),$t===null)throw Error(t(349));(Tr&30)!==0||_h(u,i,o)}d.memoizedState=o;var g={value:o,getSnapshot:i};return d.queue=g,Th(xh.bind(null,u,g,n),[n]),u.flags|=2048,fo(9,vh.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=ci(),i=$t.identifierPrefix;if(bt){var o=Si,u=yi;o=(u&~(1<<32-mn(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=uo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=s_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},c_={readContext:Hn,useCallback:Lh,useContext:Hn,useEffect:Mu,useImperativeHandle:Ch,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:yu,useRef:Eh,useState:function(){return yu(co)},useDebugValue:Eu,useDeferredValue:function(n){var i=Vn();return bh(i,Gt.memoizedState,n)},useTransition:function(){var n=yu(co)[0],i=Vn().memoizedState;return[n,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Dh,unstable_isNewReconciler:!1},f_={readContext:Hn,useCallback:Lh,useContext:Hn,useEffect:Mu,useImperativeHandle:Ch,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:Su,useRef:Eh,useState:function(){return Su(co)},useDebugValue:Eu,useDeferredValue:function(n){var i=Vn();return Gt===null?i.memoizedState=n:bh(i,Gt.memoizedState,n)},useTransition:function(){var n=Su(co)[0],i=Vn().memoizedState;return[n,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Dh,unstable_isNewReconciler:!1};function Zn(n,i){if(n&&n.defaultProps){i=G({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Tu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:G({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var xa={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=vn(),d=Ji(n),g=Ei(u,d);g.payload=i,o!=null&&(g.callback=o),i=$i(n,g,d),i!==null&&(ei(i,n,d,u),fa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=vn(),d=Ji(n),g=Ei(u,d);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=$i(n,g,d),i!==null&&(ei(i,n,d,u),fa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=vn(),u=Ji(n),d=Ei(o,u);d.tag=2,i!=null&&(d.callback=i),i=$i(n,d,u),i!==null&&(ei(i,n,u,o),fa(i,n,u))}};function Fh(n,i,o,u,d,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,T):i.prototype&&i.prototype.isPureReactComponent?!Zs(o,u)||!Zs(d,g):!0}function Oh(n,i,o){var u=!1,d=qi,g=i.contextType;return typeof g=="object"&&g!==null?g=Hn(g):(d=Mn(i)?xr:sn.current,u=i.contextTypes,g=(u=u!=null)?ts(n,d):qi),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function zh(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&xa.enqueueReplaceState(i,i.state,null)}function wu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},fu(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Hn(g):(g=Mn(i)?xr:sn.current,d.context=ts(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Tu(n,i,g,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&xa.enqueueReplaceState(d,d.state,null),ha(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function us(n,i){try{var o="",u=i;do o+=ge(u),u=u.return;while(u);var d=o}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Au(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Ru(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var h_=typeof WeakMap=="function"?WeakMap:Map;function Bh(n,i,o){o=Ei(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Aa||(Aa=!0,Vu=u),Ru(n,i)},o}function kh(n,i,o){o=Ei(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Ru(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Ru(n,i),typeof u!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function Hh(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new h_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=A_.bind(null,n,i,o),i.then(n,n))}function Vh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Gh(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ei(-1,1),i.tag=2,$i(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var d_=P.ReactCurrentOwner,En=!1;function _n(n,i,o,u){i.child=n===null?uh(i,null,o,u):ss(i,n.child,o,u)}function Wh(n,i,o,u,d){o=o.render;var g=i.ref;return as(i,d),u=vu(n,i,o,u,g,d),o=xu(),n!==null&&!En?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ti(n,i,d)):(bt&&o&&tu(i),i.flags|=1,_n(n,i,u,d),i.child)}function Xh(n,i,o,u,d){if(n===null){var g=o.type;return typeof g=="function"&&!$u(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,qh(n,i,g,u,d)):(n=Da(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:Zs,o(T,u)&&n.ref===i.ref)return Ti(n,i,d)}return i.flags|=1,n=tr(g,u),n.ref=i.ref,n.return=i,i.child=n}function qh(n,i,o,u,d){if(n!==null){var g=n.memoizedProps;if(Zs(g,u)&&n.ref===i.ref)if(En=!1,i.pendingProps=u=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(En=!0);else return i.lanes=n.lanes,Ti(n,i,d)}return Cu(n,i,o,u,d)}function Yh(n,i,o){var u=i.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(fs,In),In|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,wt(fs,In),In|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,wt(fs,In),In|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,wt(fs,In),In|=u;return _n(n,i,d,o),i.child}function jh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Cu(n,i,o,u,d){var g=Mn(o)?xr:sn.current;return g=ts(i,g),as(i,d),o=vu(n,i,o,u,g,d),u=xu(),n!==null&&!En?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ti(n,i,d)):(bt&&u&&tu(i),i.flags|=1,_n(n,i,o,d),i.child)}function $h(n,i,o,u,d){if(Mn(o)){var g=!0;ia(i)}else g=!1;if(as(i,d),i.stateNode===null)Sa(n,i),Oh(i,o,u),wu(i,o,u,d),u=!0;else if(n===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var k=T.context,$=o.contextType;typeof $=="object"&&$!==null?$=Hn($):($=Mn(o)?xr:sn.current,$=ts(i,$));var de=o.getDerivedStateFromProps,pe=typeof de=="function"||typeof T.getSnapshotBeforeUpdate=="function";pe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==u||k!==$)&&zh(i,T,u,$),ji=!1;var he=i.memoizedState;T.state=he,ha(i,u,T,d),k=i.memoizedState,I!==u||he!==k||Sn.current||ji?(typeof de=="function"&&(Tu(i,o,de,u),k=i.memoizedState),(I=ji||Fh(i,o,I,u,he,k,$))?(pe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),T.props=u,T.state=k,T.context=$,u=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,fh(n,i),I=i.memoizedProps,$=i.type===i.elementType?I:Zn(i.type,I),T.props=$,pe=i.pendingProps,he=T.context,k=o.contextType,typeof k=="object"&&k!==null?k=Hn(k):(k=Mn(o)?xr:sn.current,k=ts(i,k));var Pe=o.getDerivedStateFromProps;(de=typeof Pe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==pe||he!==k)&&zh(i,T,u,k),ji=!1,he=i.memoizedState,T.state=he,ha(i,u,T,d);var Ne=i.memoizedState;I!==pe||he!==Ne||Sn.current||ji?(typeof Pe=="function"&&(Tu(i,o,Pe,u),Ne=i.memoizedState),($=ji||Fh(i,o,$,u,he,Ne,k)||!1)?(de||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Ne,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Ne,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ne),T.props=u,T.state=Ne,T.context=k,u=$):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&he===n.memoizedState||(i.flags|=1024),u=!1)}return Lu(n,i,o,u,g,d)}function Lu(n,i,o,u,d,g){jh(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&eh(i,o,!1),Ti(n,i,g);u=i.stateNode,d_.current=i;var I=T&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=ss(i,n.child,null,g),i.child=ss(i,null,I,g)):_n(n,i,I,g),i.memoizedState=u.state,d&&eh(i,o,!0),i.child}function Kh(n){var i=n.stateNode;i.pendingContext?Qf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Qf(n,i.context,!1),hu(n,i.containerInfo)}function Zh(n,i,o,u,d){return rs(),su(d),i.flags|=256,_n(n,i,o,u),i.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function bu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qh(n,i,o){var u=i.pendingProps,d=Dt.current,g=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),wt(Dt,d&1),n===null)return ru(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,g?(u=i.mode,g=i.child,T={mode:"hidden",children:T},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=Ua(T,u,0,null),n=Lr(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=bu(o),i.memoizedState=Pu,n):Du(i,T));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return p_(n,i,T,u,I,d,o);if(g){g=u.fallback,T=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=tr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?g=tr(I,g):(g=Lr(g,T,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,T=n.child.memoizedState,T=T===null?bu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~o,i.memoizedState=Pu,u}return g=n.child,n=g.sibling,u=tr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Du(n,i){return i=Ua({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ya(n,i,o,u){return u!==null&&su(u),ss(i,n.child,null,o),n=Du(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function p_(n,i,o,u,d,g,T){if(o)return i.flags&256?(i.flags&=-257,u=Au(Error(t(422))),ya(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,d=i.mode,u=Ua({mode:"visible",children:u.children},d,0,null),g=Lr(g,d,T,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&ss(i,n.child,null,T),i.child.memoizedState=bu(T),i.memoizedState=Pu,g);if((i.mode&1)===0)return ya(n,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,g=Error(t(419)),u=Au(g,u,void 0),ya(n,i,T,u)}if(I=(T&n.childLanes)!==0,En||I){if(u=$t,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|T))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Mi(n,d),ei(u,n,d,-1))}return ju(),u=Au(Error(t(421))),ya(n,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=R_.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Un=Wi(d.nextSibling),Dn=i,bt=!0,Kn=null,n!==null&&(Bn[kn++]=yi,Bn[kn++]=Si,Bn[kn++]=yr,yi=n.id,Si=n.overflow,yr=i),i=Du(i,u.children),i.flags|=4096,i)}function Jh(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),uu(n.return,i,o)}function Uu(n,i,o,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=d)}function ed(n,i,o){var u=i.pendingProps,d=u.revealOrder,g=u.tail;if(_n(n,i,u.children,o),u=Dt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Jh(n,o,i);else if(n.tag===19)Jh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(wt(Dt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&da(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Uu(i,!1,d,o,g);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&da(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Uu(i,!0,o,null,g);break;case"together":Uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Sa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ti(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),wr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=tr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=tr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function m_(n,i,o){switch(i.tag){case 3:Kh(i),rs();break;case 5:ph(i);break;case 1:Mn(i.type)&&ia(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;wt(ua,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(wt(Dt,Dt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Qh(n,i,o):(wt(Dt,Dt.current&1),n=Ti(n,i,o),n!==null?n.sibling:null);wt(Dt,Dt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return ed(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),wt(Dt,Dt.current),u)break;return null;case 22:case 23:return i.lanes=0,Yh(n,i,o)}return Ti(n,i,o)}var td,Iu,nd,id;td=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Iu=function(){},nd=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Er(ui.current);var g=null;switch(o){case"input":d=He(n,d),u=He(n,u),g=[];break;case"select":d=G({},d,{value:void 0}),u=G({},u,{value:void 0}),g=[];break;case"textarea":d=Bt(n,d),u=Bt(n,u),g=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ea)}Qe(o,u);var T;o=null;for($ in d)if(!u.hasOwnProperty($)&&d.hasOwnProperty($)&&d[$]!=null)if($==="style"){var I=d[$];for(T in I)I.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(a.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in u){var k=u[$];if(I=d?.[$],u.hasOwnProperty($)&&k!==I&&(k!=null||I!=null))if($==="style")if(I){for(T in I)!I.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in k)k.hasOwnProperty(T)&&I[T]!==k[T]&&(o||(o={}),o[T]=k[T])}else o||(g||(g=[]),g.push($,o)),o=k;else $==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(g=g||[]).push($,k)):$==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push($,""+k):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(a.hasOwnProperty($)?(k!=null&&$==="onScroll"&&Rt("scroll",n),g||I===k||(g=[])):(g=g||[]).push($,k))}o&&(g=g||[]).push("style",o);var $=g;(i.updateQueue=$)&&(i.flags|=4)}},id=function(n,i,o,u){o!==u&&(i.flags|=4)};function ho(n,i){if(!bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function an(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function g_(n,i,o){var u=i.pendingProps;switch(nu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return Mn(i.type)&&na(),an(i),null;case 3:return u=i.stateNode,ls(),Ct(Sn),Ct(sn),mu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(aa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kn!==null&&(Xu(Kn),Kn=null))),Iu(n,i),an(i),null;case 5:du(i);var d=Er(ao.current);if(o=i.type,n!==null&&i.stateNode!=null)nd(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return an(i),null}if(n=Er(ui.current),aa(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[li]=i,u[no]=g,n=(i.mode&1)!==0,o){case"dialog":Rt("cancel",u),Rt("close",u);break;case"iframe":case"object":case"embed":Rt("load",u);break;case"video":case"audio":for(d=0;d<Js.length;d++)Rt(Js[d],u);break;case"source":Rt("error",u);break;case"img":case"image":case"link":Rt("error",u),Rt("load",u);break;case"details":Rt("toggle",u);break;case"input":Ze(u,g),Rt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Rt("invalid",u);break;case"textarea":U(u,g),Rt("invalid",u)}Qe(o,g),d=null;for(var T in g)if(g.hasOwnProperty(T)){var I=g[T];T==="children"?typeof I=="string"?u.textContent!==I&&(g.suppressHydrationWarning!==!0&&Jo(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&Jo(u.textContent,I,n),d=["children",""+I]):a.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Rt("scroll",u)}switch(o){case"input":tt(u),it(u,g,!0);break;case"textarea":tt(u),Q(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=ea)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ye(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(o,{is:u.is}):(n=T.createElement(o),o==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,o),n[li]=i,n[no]=u,td(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ye(o,u),o){case"dialog":Rt("cancel",n),Rt("close",n),d=u;break;case"iframe":case"object":case"embed":Rt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Js.length;d++)Rt(Js[d],n);d=u;break;case"source":Rt("error",n),d=u;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),d=u;break;case"details":Rt("toggle",n),d=u;break;case"input":Ze(n,u),d=He(n,u),Rt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=G({},u,{value:void 0}),Rt("invalid",n);break;case"textarea":U(n,u),d=Bt(n,u),Rt("invalid",n);break;default:d=u}Qe(o,d),I=d;for(g in I)if(I.hasOwnProperty(g)){var k=I[g];g==="style"?xe(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Be(n,k)):g==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Me(n,k):typeof k=="number"&&Me(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Rt("scroll",n):k!=null&&R(n,g,k,T))}switch(o){case"input":tt(n),it(n,u,!1);break;case"textarea":tt(n),Q(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?At(n,!!u.multiple,g,!1):u.defaultValue!=null&&At(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ea)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return an(i),null;case 6:if(n&&i.stateNode!=null)id(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Er(ao.current),Er(ui.current),aa(i)){if(u=i.stateNode,o=i.memoizedProps,u[li]=i,(g=u.nodeValue!==o)&&(n=Dn,n!==null))switch(n.tag){case 3:Jo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Jo(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[li]=i,i.stateNode=u}return an(i),null;case 13:if(Ct(Dt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)oh(),rs(),i.flags|=98560,g=!1;else if(g=aa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[li]=i}else rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),g=!1}else Kn!==null&&(Xu(Kn),Kn=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Dt.current&1)!==0?Wt===0&&(Wt=3):ju())),i.updateQueue!==null&&(i.flags|=4),an(i),null);case 4:return ls(),Iu(n,i),n===null&&eo(i.stateNode.containerInfo),an(i),null;case 10:return lu(i.type._context),an(i),null;case 17:return Mn(i.type)&&na(),an(i),null;case 19:if(Ct(Dt),g=i.memoizedState,g===null)return an(i),null;if(u=(i.flags&128)!==0,T=g.rendering,T===null)if(u)ho(g,!1);else{if(Wt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=da(n),T!==null){for(i.flags|=128,ho(g,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return wt(Dt,Dt.current&1|2),i.child}n=n.sibling}g.tail!==null&&De()>hs&&(i.flags|=128,u=!0,ho(g,!1),i.lanes=4194304)}else{if(!u)if(n=da(T),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ho(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!bt)return an(i),null}else 2*De()-g.renderingStartTime>hs&&o!==1073741824&&(i.flags|=128,u=!0,ho(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(o=g.last,o!==null?o.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=De(),i.sibling=null,o=Dt.current,wt(Dt,u?o&1|2:o&1),i):(an(i),null);case 22:case 23:return Yu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(In&1073741824)!==0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function __(n,i){switch(nu(i),i.tag){case 1:return Mn(i.type)&&na(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ls(),Ct(Sn),Ct(sn),mu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return du(i),null;case 13:if(Ct(Dt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ct(Dt),null;case 4:return ls(),null;case 10:return lu(i.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var Ma=!1,ln=!1,v_=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function cs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Nt(n,i,u)}else o.current=null}function Nu(n,i,o){try{o()}catch(u){Nt(n,i,u)}}var rd=!1;function x_(n,i){if(Yl=Vo,n=Ff(),Bl(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,I=-1,k=-1,$=0,de=0,pe=n,he=null;t:for(;;){for(var Pe;pe!==o||d!==0&&pe.nodeType!==3||(I=T+d),pe!==g||u!==0&&pe.nodeType!==3||(k=T+u),pe.nodeType===3&&(T+=pe.nodeValue.length),(Pe=pe.firstChild)!==null;)he=pe,pe=Pe;for(;;){if(pe===n)break t;if(he===o&&++$===d&&(I=T),he===g&&++de===u&&(k=T),(Pe=pe.nextSibling)!==null)break;pe=he,he=pe.parentNode}pe=Pe}o=I===-1||k===-1?null:{start:I,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(jl={focusedElem:n,selectionRange:o},Vo=!1,Ue=i;Ue!==null;)if(i=Ue,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ue=n;else for(;Ue!==null;){i=Ue;try{var Ne=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ne!==null){var Oe=Ne.memoizedProps,zt=Ne.memoizedState,W=i.stateNode,V=W.getSnapshotBeforeUpdate(i.elementType===i.type?Oe:Zn(i.type,Oe),zt);W.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ve){Nt(i,i.return,ve)}if(n=i.sibling,n!==null){n.return=i.return,Ue=n;break}Ue=i.return}return Ne=rd,rd=!1,Ne}function po(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Nu(i,o,g)}d=d.next}while(d!==u)}}function Ea(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Fu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function sd(n){var i=n.alternate;i!==null&&(n.alternate=null,sd(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[li],delete i[no],delete i[Ql],delete i[t_],delete i[n_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function od(n){return n.tag===5||n.tag===3||n.tag===4}function ad(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||od(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ou(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ea));else if(u!==4&&(n=n.child,n!==null))for(Ou(n,i,o),n=n.sibling;n!==null;)Ou(n,i,o),n=n.sibling}function zu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(zu(n,i,o),n=n.sibling;n!==null;)zu(n,i,o),n=n.sibling}var Qt=null,Qn=!1;function Ki(n,i,o){for(o=o.child;o!==null;)ld(n,i,o),o=o.sibling}function ld(n,i,o){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(yn,o)}catch{}switch(o.tag){case 5:ln||cs(o,i);case 6:var u=Qt,d=Qn;Qt=null,Ki(n,i,o),Qt=u,Qn=d,Qt!==null&&(Qn?(n=Qt,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Qt.removeChild(o.stateNode));break;case 18:Qt!==null&&(Qn?(n=Qt,o=o.stateNode,n.nodeType===8?Zl(n.parentNode,o):n.nodeType===1&&Zl(n,o),Xs(n)):Zl(Qt,o.stateNode));break;case 4:u=Qt,d=Qn,Qt=o.stateNode.containerInfo,Qn=!0,Ki(n,i,o),Qt=u,Qn=d;break;case 0:case 11:case 14:case 15:if(!ln&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var g=d,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&Nu(o,i,T),d=d.next}while(d!==u)}Ki(n,i,o);break;case 1:if(!ln&&(cs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Nt(o,i,I)}Ki(n,i,o);break;case 21:Ki(n,i,o);break;case 22:o.mode&1?(ln=(u=ln)||o.memoizedState!==null,Ki(n,i,o),ln=u):Ki(n,i,o);break;default:Ki(n,i,o)}}function ud(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new v_),i.forEach(function(u){var d=C_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function Jn(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var g=n,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:Qt=I.stateNode,Qn=!1;break e;case 3:Qt=I.stateNode.containerInfo,Qn=!0;break e;case 4:Qt=I.stateNode.containerInfo,Qn=!0;break e}I=I.return}if(Qt===null)throw Error(t(160));ld(g,T,d),Qt=null,Qn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch($){Nt(d,i,$)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cd(i,n),i=i.sibling}function cd(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Jn(i,n),fi(n),u&4){try{po(3,n,n.return),Ea(3,n)}catch(Oe){Nt(n,n.return,Oe)}try{po(5,n,n.return)}catch(Oe){Nt(n,n.return,Oe)}}break;case 1:Jn(i,n),fi(n),u&512&&o!==null&&cs(o,o.return);break;case 5:if(Jn(i,n),fi(n),u&512&&o!==null&&cs(o,o.return),n.flags&32){var d=n.stateNode;try{Me(d,"")}catch(Oe){Nt(n,n.return,Oe)}}if(u&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,T=o!==null?o.memoizedProps:g,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&je(d,g),Ye(I,T);var $=Ye(I,g);for(T=0;T<k.length;T+=2){var de=k[T],pe=k[T+1];de==="style"?xe(d,pe):de==="dangerouslySetInnerHTML"?Be(d,pe):de==="children"?Me(d,pe):R(d,de,pe,$)}switch(I){case"input":Et(d,g);break;case"textarea":A(d,g);break;case"select":var he=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Pe=g.value;Pe!=null?At(d,!!g.multiple,Pe,!1):he!==!!g.multiple&&(g.defaultValue!=null?At(d,!!g.multiple,g.defaultValue,!0):At(d,!!g.multiple,g.multiple?[]:"",!1))}d[no]=g}catch(Oe){Nt(n,n.return,Oe)}}break;case 6:if(Jn(i,n),fi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(Oe){Nt(n,n.return,Oe)}}break;case 3:if(Jn(i,n),fi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Xs(i.containerInfo)}catch(Oe){Nt(n,n.return,Oe)}break;case 4:Jn(i,n),fi(n);break;case 13:Jn(i,n),fi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Hu=De())),u&4&&ud(n);break;case 22:if(de=o!==null&&o.memoizedState!==null,n.mode&1?(ln=($=ln)||de,Jn(i,n),ln=$):Jn(i,n),fi(n),u&8192){if($=n.memoizedState!==null,(n.stateNode.isHidden=$)&&!de&&(n.mode&1)!==0)for(Ue=n,de=n.child;de!==null;){for(pe=Ue=de;Ue!==null;){switch(he=Ue,Pe=he.child,he.tag){case 0:case 11:case 14:case 15:po(4,he,he.return);break;case 1:cs(he,he.return);var Ne=he.stateNode;if(typeof Ne.componentWillUnmount=="function"){u=he,o=he.return;try{i=u,Ne.props=i.memoizedProps,Ne.state=i.memoizedState,Ne.componentWillUnmount()}catch(Oe){Nt(u,o,Oe)}}break;case 5:cs(he,he.return);break;case 22:if(he.memoizedState!==null){dd(pe);continue}}Pe!==null?(Pe.return=he,Ue=Pe):dd(pe)}de=de.sibling}e:for(de=null,pe=n;;){if(pe.tag===5){if(de===null){de=pe;try{d=pe.stateNode,$?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=pe.stateNode,k=pe.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=ft("display",T))}catch(Oe){Nt(n,n.return,Oe)}}}else if(pe.tag===6){if(de===null)try{pe.stateNode.nodeValue=$?"":pe.memoizedProps}catch(Oe){Nt(n,n.return,Oe)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===n)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===n)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===n)break e;de===pe&&(de=null),pe=pe.return}de===pe&&(de=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:Jn(i,n),fi(n),u&4&&ud(n);break;case 21:break;default:Jn(i,n),fi(n)}}function fi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(od(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Me(d,""),u.flags&=-33);var g=ad(n);zu(n,g,d);break;case 3:case 4:var T=u.stateNode.containerInfo,I=ad(n);Ou(n,I,T);break;default:throw Error(t(161))}}catch(k){Nt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function y_(n,i,o){Ue=n,fd(n)}function fd(n,i,o){for(var u=(n.mode&1)!==0;Ue!==null;){var d=Ue,g=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||Ma;if(!T){var I=d.alternate,k=I!==null&&I.memoizedState!==null||ln;I=Ma;var $=ln;if(Ma=T,(ln=k)&&!$)for(Ue=d;Ue!==null;)T=Ue,k=T.child,T.tag===22&&T.memoizedState!==null?pd(d):k!==null?(k.return=T,Ue=k):pd(d);for(;g!==null;)Ue=g,fd(g),g=g.sibling;Ue=d,Ma=I,ln=$}hd(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,Ue=g):hd(n)}}function hd(n){for(;Ue!==null;){var i=Ue;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ln||Ea(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!ln)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&dh(i,g,u);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}dh(i,T,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var $=i.alternate;if($!==null){var de=$.memoizedState;if(de!==null){var pe=de.dehydrated;pe!==null&&Xs(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ln||i.flags&512&&Fu(i)}catch(he){Nt(i,i.return,he)}}if(i===n){Ue=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function dd(n){for(;Ue!==null;){var i=Ue;if(i===n){Ue=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ue=o;break}Ue=i.return}}function pd(n){for(;Ue!==null;){var i=Ue;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ea(4,i)}catch(k){Nt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Nt(i,d,k)}}var g=i.return;try{Fu(i)}catch(k){Nt(i,g,k)}break;case 5:var T=i.return;try{Fu(i)}catch(k){Nt(i,T,k)}}}catch(k){Nt(i,i.return,k)}if(i===n){Ue=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ue=I;break}Ue=i.return}}var S_=Math.ceil,Ta=P.ReactCurrentDispatcher,Bu=P.ReactCurrentOwner,Gn=P.ReactCurrentBatchConfig,mt=0,$t=null,kt=null,Jt=0,In=0,fs=Xi(0),Wt=0,mo=null,wr=0,wa=0,ku=0,go=null,Tn=null,Hu=0,hs=1/0,wi=null,Aa=!1,Vu=null,Zi=null,Ra=!1,Qi=null,Ca=0,_o=0,Gu=null,La=-1,Pa=0;function vn(){return(mt&6)!==0?De():La!==-1?La:La=De()}function Ji(n){return(n.mode&1)===0?1:(mt&2)!==0&&Jt!==0?Jt&-Jt:r_.transition!==null?(Pa===0&&(Pa=Bo()),Pa):(n=xt,n!==0||(n=window.event,n=n===void 0?16:gf(n.type)),n)}function ei(n,i,o,u){if(50<_o)throw _o=0,Gu=null,Error(t(185));ks(n,o,u),((mt&2)===0||n!==$t)&&(n===$t&&((mt&2)===0&&(wa|=o),Wt===4&&er(n,Jt)),wn(n,u),o===1&&mt===0&&(i.mode&1)===0&&(hs=De()+500,ra&&Yi()))}function wn(n,i){var o=n.callbackNode;gn(n,i);var u=zn(n,n===$t?Jt:0);if(u===0)o!==null&&Le(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Le(o),i===1)n.tag===0?i_(gd.bind(null,n)):th(gd.bind(null,n)),Jg(function(){(mt&6)===0&&Yi()}),o=null;else{switch(lf(u)){case 1:o=Je;break;case 4:o=et;break;case 16:o=Tt;break;case 536870912:o=Ft;break;default:o=Tt}o=Td(o,md.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function md(n,i){if(La=-1,Pa=0,(mt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ds()&&n.callbackNode!==o)return null;var u=zn(n,n===$t?Jt:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ba(n,u);else{i=u;var d=mt;mt|=2;var g=vd();($t!==n||Jt!==i)&&(wi=null,hs=De()+500,Rr(n,i));do try{T_();break}catch(I){_d(n,I)}while(!0);au(),Ta.current=g,mt=d,kt!==null?i=0:($t=null,Jt=0,i=Wt)}if(i!==0){if(i===2&&(d=_r(n),d!==0&&(u=d,i=Wu(n,d))),i===1)throw o=mo,Rr(n,0),er(n,u),wn(n,De()),o;if(i===6)er(n,u);else{if(d=n.current.alternate,(u&30)===0&&!M_(d)&&(i=ba(n,u),i===2&&(g=_r(n),g!==0&&(u=g,i=Wu(n,g))),i===1))throw o=mo,Rr(n,0),er(n,u),wn(n,De()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Cr(n,Tn,wi);break;case 3:if(er(n,u),(u&130023424)===u&&(i=Hu+500-De(),10<i)){if(zn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){vn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Kl(Cr.bind(null,n,Tn,wi),i);break}Cr(n,Tn,wi);break;case 4:if(er(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var T=31-mn(u);g=1<<T,T=i[T],T>d&&(d=T),u&=~g}if(u=d,u=De()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*S_(u/1960))-u,10<u){n.timeoutHandle=Kl(Cr.bind(null,n,Tn,wi),u);break}Cr(n,Tn,wi);break;case 5:Cr(n,Tn,wi);break;default:throw Error(t(329))}}}return wn(n,De()),n.callbackNode===o?md.bind(null,n):null}function Wu(n,i){var o=go;return n.current.memoizedState.isDehydrated&&(Rr(n,i).flags|=256),n=ba(n,i),n!==2&&(i=Tn,Tn=o,i!==null&&Xu(i)),n}function Xu(n){Tn===null?Tn=n:Tn.push.apply(Tn,n)}function M_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],g=d.getSnapshot;d=d.value;try{if(!$n(g(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function er(n,i){for(i&=~ku,i&=~wa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-mn(i),u=1<<o;n[o]=-1,i&=~u}}function gd(n){if((mt&6)!==0)throw Error(t(327));ds();var i=zn(n,0);if((i&1)===0)return wn(n,De()),null;var o=ba(n,i);if(n.tag!==0&&o===2){var u=_r(n);u!==0&&(i=u,o=Wu(n,u))}if(o===1)throw o=mo,Rr(n,0),er(n,i),wn(n,De()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Cr(n,Tn,wi),wn(n,De()),null}function qu(n,i){var o=mt;mt|=1;try{return n(i)}finally{mt=o,mt===0&&(hs=De()+500,ra&&Yi())}}function Ar(n){Qi!==null&&Qi.tag===0&&(mt&6)===0&&ds();var i=mt;mt|=1;var o=Gn.transition,u=xt;try{if(Gn.transition=null,xt=1,n)return n()}finally{xt=u,Gn.transition=o,mt=i,(mt&6)===0&&Yi()}}function Yu(){In=fs.current,Ct(fs)}function Rr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Qg(o)),kt!==null)for(o=kt.return;o!==null;){var u=o;switch(nu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&na();break;case 3:ls(),Ct(Sn),Ct(sn),mu();break;case 5:du(u);break;case 4:ls();break;case 13:Ct(Dt);break;case 19:Ct(Dt);break;case 10:lu(u.type._context);break;case 22:case 23:Yu()}o=o.return}if($t=n,kt=n=tr(n.current,null),Jt=In=i,Wt=0,mo=null,ku=wa=wr=0,Tn=go=null,Mr!==null){for(i=0;i<Mr.length;i++)if(o=Mr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,g=o.pending;if(g!==null){var T=g.next;g.next=d,u.next=T}o.pending=u}Mr=null}return n}function _d(n,i){do{var o=kt;try{if(au(),pa.current=va,ma){for(var u=Ut.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}ma=!1}if(Tr=0,jt=Gt=Ut=null,lo=!1,uo=0,Bu.current=null,o===null||o.return===null){Wt=1,mo=i,kt=null;break}e:{var g=n,T=o.return,I=o,k=i;if(i=Jt,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var $=k,de=I,pe=de.tag;if((de.mode&1)===0&&(pe===0||pe===11||pe===15)){var he=de.alternate;he?(de.updateQueue=he.updateQueue,de.memoizedState=he.memoizedState,de.lanes=he.lanes):(de.updateQueue=null,de.memoizedState=null)}var Pe=Vh(T);if(Pe!==null){Pe.flags&=-257,Gh(Pe,T,I,g,i),Pe.mode&1&&Hh(g,$,i),i=Pe,k=$;var Ne=i.updateQueue;if(Ne===null){var Oe=new Set;Oe.add(k),i.updateQueue=Oe}else Ne.add(k);break e}else{if((i&1)===0){Hh(g,$,i),ju();break e}k=Error(t(426))}}else if(bt&&I.mode&1){var zt=Vh(T);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Gh(zt,T,I,g,i),su(us(k,I));break e}}g=k=us(k,I),Wt!==4&&(Wt=2),go===null?go=[g]:go.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var W=Bh(g,k,i);hh(g,W);break e;case 1:I=k;var V=g.type,q=g.stateNode;if((g.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Zi===null||!Zi.has(q)))){g.flags|=65536,i&=-i,g.lanes|=i;var ve=kh(g,I,i);hh(g,ve);break e}}g=g.return}while(g!==null)}yd(o)}catch(ze){i=ze,kt===o&&o!==null&&(kt=o=o.return);continue}break}while(!0)}function vd(){var n=Ta.current;return Ta.current=va,n===null?va:n}function ju(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),$t===null||(wr&268435455)===0&&(wa&268435455)===0||er($t,Jt)}function ba(n,i){var o=mt;mt|=2;var u=vd();($t!==n||Jt!==i)&&(wi=null,Rr(n,i));do try{E_();break}catch(d){_d(n,d)}while(!0);if(au(),mt=o,Ta.current=u,kt!==null)throw Error(t(261));return $t=null,Jt=0,Wt}function E_(){for(;kt!==null;)xd(kt)}function T_(){for(;kt!==null&&!ke();)xd(kt)}function xd(n){var i=Ed(n.alternate,n,In);n.memoizedProps=n.pendingProps,i===null?yd(n):kt=i,Bu.current=null}function yd(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=g_(o,i,In),o!==null){kt=o;return}}else{if(o=__(o,i),o!==null){o.flags&=32767,kt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Wt=6,kt=null;return}}if(i=i.sibling,i!==null){kt=i;return}kt=i=n}while(i!==null);Wt===0&&(Wt=5)}function Cr(n,i,o){var u=xt,d=Gn.transition;try{Gn.transition=null,xt=1,w_(n,i,o,u)}finally{Gn.transition=d,xt=u}return null}function w_(n,i,o,u){do ds();while(Qi!==null);if((mt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(sg(n,g),n===$t&&(kt=$t=null,Jt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ra||(Ra=!0,Td(Tt,function(){return ds(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Gn.transition,Gn.transition=null;var T=xt;xt=1;var I=mt;mt|=4,Bu.current=null,x_(n,o),cd(o,n),Xg(jl),Vo=!!Yl,jl=Yl=null,n.current=o,y_(o),qe(),mt=I,xt=T,Gn.transition=g}else n.current=o;if(Ra&&(Ra=!1,Qi=n,Ca=d),g=n.pendingLanes,g===0&&(Zi=null),at(o.stateNode),wn(n,De()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Aa)throw Aa=!1,n=Vu,Vu=null,n;return(Ca&1)!==0&&n.tag!==0&&ds(),g=n.pendingLanes,(g&1)!==0?n===Gu?_o++:(_o=0,Gu=n):_o=0,Yi(),null}function ds(){if(Qi!==null){var n=lf(Ca),i=Gn.transition,o=xt;try{if(Gn.transition=null,xt=16>n?16:n,Qi===null)var u=!1;else{if(n=Qi,Qi=null,Ca=0,(mt&6)!==0)throw Error(t(331));var d=mt;for(mt|=4,Ue=n.current;Ue!==null;){var g=Ue,T=g.child;if((Ue.flags&16)!==0){var I=g.deletions;if(I!==null){for(var k=0;k<I.length;k++){var $=I[k];for(Ue=$;Ue!==null;){var de=Ue;switch(de.tag){case 0:case 11:case 15:po(8,de,g)}var pe=de.child;if(pe!==null)pe.return=de,Ue=pe;else for(;Ue!==null;){de=Ue;var he=de.sibling,Pe=de.return;if(sd(de),de===$){Ue=null;break}if(he!==null){he.return=Pe,Ue=he;break}Ue=Pe}}}var Ne=g.alternate;if(Ne!==null){var Oe=Ne.child;if(Oe!==null){Ne.child=null;do{var zt=Oe.sibling;Oe.sibling=null,Oe=zt}while(Oe!==null)}}Ue=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Ue=T;else e:for(;Ue!==null;){if(g=Ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:po(9,g,g.return)}var W=g.sibling;if(W!==null){W.return=g.return,Ue=W;break e}Ue=g.return}}var V=n.current;for(Ue=V;Ue!==null;){T=Ue;var q=T.child;if((T.subtreeFlags&2064)!==0&&q!==null)q.return=T,Ue=q;else e:for(T=V;Ue!==null;){if(I=Ue,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ea(9,I)}}catch(ze){Nt(I,I.return,ze)}if(I===T){Ue=null;break e}var ve=I.sibling;if(ve!==null){ve.return=I.return,Ue=ve;break e}Ue=I.return}}if(mt=d,Yi(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(yn,n)}catch{}u=!0}return u}finally{xt=o,Gn.transition=i}}return!1}function Sd(n,i,o){i=us(o,i),i=Bh(n,i,1),n=$i(n,i,1),i=vn(),n!==null&&(ks(n,1,i),wn(n,i))}function Nt(n,i,o){if(n.tag===3)Sd(n,n,o);else for(;i!==null;){if(i.tag===3){Sd(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Zi===null||!Zi.has(u))){n=us(o,n),n=kh(i,n,1),i=$i(i,n,1),n=vn(),i!==null&&(ks(i,1,n),wn(i,n));break}}i=i.return}}function A_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=vn(),n.pingedLanes|=n.suspendedLanes&o,$t===n&&(Jt&o)===o&&(Wt===4||Wt===3&&(Jt&130023424)===Jt&&500>De()-Hu?Rr(n,0):ku|=o),wn(n,i)}function Md(n,i){i===0&&((n.mode&1)===0?i=1:(i=Oi,Oi<<=1,(Oi&130023424)===0&&(Oi=4194304)));var o=vn();n=Mi(n,i),n!==null&&(ks(n,i,o),wn(n,o))}function R_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Md(n,o)}function C_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Md(n,o)}var Ed;Ed=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Sn.current)En=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return En=!1,m_(n,i,o);En=(n.flags&131072)!==0}else En=!1,bt&&(i.flags&1048576)!==0&&nh(i,oa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Sa(n,i),n=i.pendingProps;var d=ts(i,sn.current);as(i,o),d=vu(null,i,u,n,d,o);var g=xu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Mn(u)?(g=!0,ia(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fu(i),d.updater=xa,i.stateNode=d,d._reactInternals=i,wu(i,u,n,o),i=Lu(null,i,u,!0,g,o)):(i.tag=0,bt&&g&&tu(i),_n(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Sa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=P_(u),n=Zn(u,n),d){case 0:i=Cu(null,i,u,n,o);break e;case 1:i=$h(null,i,u,n,o);break e;case 11:i=Wh(null,i,u,n,o);break e;case 14:i=Xh(null,i,u,Zn(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Zn(u,d),Cu(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Zn(u,d),$h(n,i,u,d,o);case 3:e:{if(Kh(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,d=g.element,fh(n,i),ha(i,u,null,o);var T=i.memoizedState;if(u=T.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=us(Error(t(423)),i),i=Zh(n,i,u,o,d);break e}else if(u!==d){d=us(Error(t(424)),i),i=Zh(n,i,u,o,d);break e}else for(Un=Wi(i.stateNode.containerInfo.firstChild),Dn=i,bt=!0,Kn=null,o=uh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(rs(),u===d){i=Ti(n,i,o);break e}_n(n,i,u,o)}i=i.child}return i;case 5:return ph(i),n===null&&ru(i),u=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,T=d.children,$l(u,d)?T=null:g!==null&&$l(u,g)&&(i.flags|=32),jh(n,i),_n(n,i,T,o),i.child;case 6:return n===null&&ru(i),null;case 13:return Qh(n,i,o);case 4:return hu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ss(i,null,u,o):_n(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Zn(u,d),Wh(n,i,u,d,o);case 7:return _n(n,i,i.pendingProps,o),i.child;case 8:return _n(n,i,i.pendingProps.children,o),i.child;case 12:return _n(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,g=i.memoizedProps,T=d.value,wt(ua,u._currentValue),u._currentValue=T,g!==null)if($n(g.value,T)){if(g.children===d.children&&!Sn.current){i=Ti(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){T=g.child;for(var k=I.firstContext;k!==null;){if(k.context===u){if(g.tag===1){k=Ei(-1,o&-o),k.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var de=$.pending;de===null?k.next=k:(k.next=de.next,de.next=k),$.pending=k}}g.lanes|=o,k=g.alternate,k!==null&&(k.lanes|=o),uu(g.return,o,i),I.lanes|=o;break}k=k.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=o,I=T.alternate,I!==null&&(I.lanes|=o),uu(T,o,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}_n(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,as(i,o),d=Hn(d),u=u(d),i.flags|=1,_n(n,i,u,o),i.child;case 14:return u=i.type,d=Zn(u,i.pendingProps),d=Zn(u.type,d),Xh(n,i,u,d,o);case 15:return qh(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Zn(u,d),Sa(n,i),i.tag=1,Mn(u)?(n=!0,ia(i)):n=!1,as(i,o),Oh(i,u,d),wu(i,u,d,o),Lu(null,i,u,!0,n,o);case 19:return ed(n,i,o);case 22:return Yh(n,i,o)}throw Error(t(156,i.tag))};function Td(n,i){return re(n,i)}function L_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(n,i,o,u){return new L_(n,i,o,u)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function P_(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===ne)return 14}return 2}function tr(n,i){var o=n.alternate;return o===null?(o=Wn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Da(n,i,o,u,d,g){var T=2;if(u=n,typeof n=="function")$u(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case z:return Lr(o.children,d,g,i);case K:T=8,d|=8;break;case C:return n=Wn(12,o,i,d|2),n.elementType=C,n.lanes=g,n;case le:return n=Wn(13,o,i,d),n.elementType=le,n.lanes=g,n;case B:return n=Wn(19,o,i,d),n.elementType=B,n.lanes=g,n;case ie:return Ua(o,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:T=10;break e;case se:T=9;break e;case oe:T=11;break e;case ne:T=14;break e;case ue:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Wn(T,o,i,d),i.elementType=n,i.type=u,i.lanes=g,i}function Lr(n,i,o,u){return n=Wn(7,n,u,i),n.lanes=o,n}function Ua(n,i,o,u){return n=Wn(22,n,u,i),n.elementType=ie,n.lanes=o,n.stateNode={isHidden:!1},n}function Ku(n,i,o){return n=Wn(6,n,null,i),n.lanes=o,n}function Zu(n,i,o){return i=Wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function b_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xr(0),this.expirationTimes=Xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qu(n,i,o,u,d,g,T,I,k){return n=new b_(n,i,o,I,k),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Wn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(g),n}function D_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function wd(n){if(!n)return qi;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Mn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Mn(o))return Jf(n,o,i)}return i}function Ad(n,i,o,u,d,g,T,I,k){return n=Qu(o,u,!0,n,d,g,T,I,k),n.context=wd(null),o=n.current,u=vn(),d=Ji(o),g=Ei(u,d),g.callback=i??null,$i(o,g,d),n.current.lanes=d,ks(n,d,u),wn(n,u),n}function Ia(n,i,o,u){var d=i.current,g=vn(),T=Ji(d);return o=wd(o),i.context===null?i.context=o:i.pendingContext=o,i=Ei(g,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=$i(d,i,T),n!==null&&(ei(n,d,T,g),fa(n,d,T)),T}function Na(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rd(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ju(n,i){Rd(n,i),(n=n.alternate)&&Rd(n,i)}function U_(){return null}var Cd=typeof reportError=="function"?reportError:function(n){console.error(n)};function ec(n){this._internalRoot=n}Fa.prototype.render=ec.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ia(n,i,null,null)},Fa.prototype.unmount=ec.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ar(function(){Ia(null,n,null,null)}),i[vi]=null}};function Fa(n){this._internalRoot=n}Fa.prototype.unstable_scheduleHydration=function(n){if(n){var i=ff();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Hi.length&&i!==0&&i<Hi[o].priority;o++);Hi.splice(o,0,n),o===0&&pf(n)}};function tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Oa(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ld(){}function I_(n,i,o,u,d){if(d){if(typeof u=="function"){var g=u;u=function(){var $=Na(T);g.call($)}}var T=Ad(i,u,n,0,null,!1,!1,"",Ld);return n._reactRootContainer=T,n[vi]=T.current,eo(n.nodeType===8?n.parentNode:n),Ar(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var $=Na(k);I.call($)}}var k=Qu(n,0,!1,null,null,!1,!1,"",Ld);return n._reactRootContainer=k,n[vi]=k.current,eo(n.nodeType===8?n.parentNode:n),Ar(function(){Ia(i,k,o,u)}),k}function za(n,i,o,u,d){var g=o._reactRootContainer;if(g){var T=g;if(typeof d=="function"){var I=d;d=function(){var k=Na(T);I.call(k)}}Ia(i,T,n,d)}else T=I_(o,i,n,d,u);return Na(T)}uf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ot(i.pendingLanes);o!==0&&(wl(i,o|1),wn(i,De()),(mt&6)===0&&(hs=De()+500,Yi()))}break;case 13:Ar(function(){var u=Mi(n,1);if(u!==null){var d=vn();ei(u,n,1,d)}}),Ju(n,1)}},Al=function(n){if(n.tag===13){var i=Mi(n,134217728);if(i!==null){var o=vn();ei(i,n,134217728,o)}Ju(n,134217728)}},cf=function(n){if(n.tag===13){var i=Ji(n),o=Mi(n,i);if(o!==null){var u=vn();ei(o,n,i,u)}Ju(n,i)}},ff=function(){return xt},hf=function(n,i){var o=xt;try{return xt=n,i()}finally{xt=o}},ot=function(n,i,o){switch(i){case"input":if(Et(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=ta(u);if(!d)throw Error(t(90));j(u),Et(u,d)}}}break;case"textarea":A(n,o);break;case"select":i=o.value,i!=null&&At(n,!!o.multiple,i,!1)}},Xe=qu,ht=Ar;var N_={usingClientEntryPoint:!1,Events:[io,Jr,ta,ae,Ee,qu]},vo={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F_={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=J(n),n===null?null:n.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||U_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{yn=Ba.inject(F_),pt=Ba}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_,An.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tc(i))throw Error(t(200));return D_(n,i,null,o)},An.createRoot=function(n,i){if(!tc(n))throw Error(t(299));var o=!1,u="",d=Cd;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Qu(n,1,!1,null,null,o,!1,u,d),n[vi]=i.current,eo(n.nodeType===8?n.parentNode:n),new ec(i)},An.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=J(i),n=n===null?null:n.stateNode,n},An.flushSync=function(n){return Ar(n)},An.hydrate=function(n,i,o){if(!Oa(i))throw Error(t(200));return za(null,n,i,!0,o)},An.hydrateRoot=function(n,i,o){if(!tc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,g="",T=Cd;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Ad(i,null,n,1,o??null,d,!1,g,T),n[vi]=i.current,eo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Fa(i)},An.render=function(n,i,o){if(!Oa(i))throw Error(t(200));return za(null,n,i,!1,o)},An.unmountComponentAtNode=function(n){if(!Oa(n))throw Error(t(40));return n._reactRootContainer?(Ar(function(){za(null,null,n,!1,function(){n._reactRootContainer=null,n[vi]=null})}),!0):!1},An.unstable_batchedUpdates=qu,An.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Oa(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return za(n,i,o,!1,u)},An.version="18.3.1-next-f1338f8080-20240426",An}var Od;function X_(){if(Od)return rc.exports;Od=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),rc.exports=W_(),rc.exports}var zd;function q_(){if(zd)return ka;zd=1;var r=X_();return ka.createRoot=r.createRoot,ka.hydrateRoot=r.hydrateRoot,ka}var Y_=q_();const j_=Mm(Y_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="158",$_=0,Bd=1,K_=2,Em=1,Z_=2,bi=3,dr=0,Ln=1,Di=2,cr=0,bs=1,kd=2,Hd=3,Vd=4,Q_=5,Or=100,J_=101,e0=102,Gd=103,Wd=104,t0=200,n0=201,i0=202,r0=203,Gc=204,Wc=205,s0=206,o0=207,a0=208,l0=209,u0=210,c0=211,f0=212,h0=213,d0=214,p0=0,m0=1,g0=2,hl=3,_0=4,v0=5,x0=6,y0=7,Tm=0,S0=1,M0=2,fr=0,E0=1,T0=2,w0=3,A0=4,R0=5,wm=300,Us=301,Is=302,Xc=303,qc=304,xl=306,Yc=1e3,ri=1001,jc=1002,hn=1003,Xd=1004,ac=1005,qn=1006,C0=1007,Co=1008,hr=1009,L0=1010,P0=1011,rf=1012,Am=1013,lr=1014,ur=1015,Lo=1016,Rm=1017,Cm=1018,Br=1020,b0=1021,si=1023,D0=1024,U0=1025,kr=1026,Ns=1027,I0=1028,Lm=1029,N0=1030,Pm=1031,bm=1033,lc=33776,uc=33777,cc=33778,fc=33779,qd=35840,Yd=35841,jd=35842,$d=35843,F0=36196,Kd=37492,Zd=37496,Qd=37808,Jd=37809,ep=37810,tp=37811,np=37812,ip=37813,rp=37814,sp=37815,op=37816,ap=37817,lp=37818,up=37819,cp=37820,fp=37821,hc=36492,hp=36494,dp=36495,O0=36283,pp=36284,mp=36285,gp=36286,Dm=3e3,Hr=3001,z0=3200,B0=3201,k0=0,H0=1,jn="",en="srgb",Ni="srgb-linear",sf="display-p3",yl="display-p3-linear",dl="linear",Lt="srgb",pl="rec709",ml="p3",ps=7680,_p=519,V0=512,G0=513,W0=514,X0=515,q0=516,Y0=517,j0=518,$0=519,vp=35044,xp="300 es",$c=1035,Ui=2e3,gl=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,f=a.length;l<f;l++)a[l].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,Kc=180/Math.PI;function Po(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]).toLowerCase()}function Cn(r,e,t){return Math.max(e,Math.min(t,r))}function K0(r,e){return(r%e+e)%e}function pc(r,e,t){return(1-t)*r+t*e}function yp(r){return(r&r-1)===0&&r!==0}function Zc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Cn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*s-f*a+e.x,this.y=l*a+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,s,a,l,f,c,h,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,f,c,h,p)}set(e,t,s,a,l,f,c,h,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=c,m[3]=t,m[4]=l,m[5]=h,m[6]=s,m[7]=f,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,f=s[0],c=s[3],h=s[6],p=s[1],m=s[4],x=s[7],_=s[2],S=s[5],M=s[8],E=a[0],y=a[3],v=a[6],N=a[1],R=a[4],P=a[7],b=a[2],F=a[5],z=a[8];return l[0]=f*E+c*N+h*b,l[3]=f*y+c*R+h*F,l[6]=f*v+c*P+h*z,l[1]=p*E+m*N+x*b,l[4]=p*y+m*R+x*F,l[7]=p*v+m*P+x*z,l[2]=_*E+S*N+M*b,l[5]=_*y+S*R+M*F,l[8]=_*v+S*P+M*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],m=e[8];return t*f*m-t*c*p-s*l*m+s*c*h+a*l*p-a*f*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],m=e[8],x=m*f-c*p,_=c*h-m*l,S=p*l-f*h,M=t*x+s*_+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=x*E,e[1]=(a*p-m*s)*E,e[2]=(c*s-a*f)*E,e[3]=_*E,e[4]=(m*t-a*h)*E,e[5]=(a*l-c*t)*E,e[6]=S*E,e[7]=(s*h-p*t)*E,e[8]=(f*t-s*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,f,c){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*f+p*c)+f+e,-a*p,a*h,-a*(-p*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new ut;function Um(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _l(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Z0(){const r=_l("canvas");return r.style.display="block",r}const Sp={};function Ao(r){r in Sp||(Sp[r]=!0,console.warn(r))}const Mp=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ep=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ha={[Ni]:{transfer:dl,primaries:pl,toReference:r=>r,fromReference:r=>r},[en]:{transfer:Lt,primaries:pl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[yl]:{transfer:dl,primaries:ml,toReference:r=>r.applyMatrix3(Ep),fromReference:r=>r.applyMatrix3(Mp)},[sf]:{transfer:Lt,primaries:ml,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ep),fromReference:r=>r.applyMatrix3(Mp).convertLinearToSRGB()}},Q0=new Set([Ni,yl]),yt={enabled:!0,_workingColorSpace:Ni,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Q0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const s=Ha[e].toReference,a=Ha[t].fromReference;return a(s(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ha[r].primaries},getTransfer:function(r){return r===jn?dl:Ha[r].transfer}};function Ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ms;class Im{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=_l("canvas")),ms.width=e.width,ms.height=e.height;const s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_l("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let f=0;f<l.length;f++)l[f]=Ds(l[f]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Ds(t[s]/255)*255):t[s]=Ds(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J0=0;class Nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Po(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let f=0,c=a.length;f<c;f++)a[f].isDataTexture?l.push(_c(a[f].image)):l.push(_c(a[f]))}else l=_c(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function _c(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Im.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ev=0;class Pn extends Os{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,s=ri,a=ri,l=qn,f=Co,c=si,h=hr,p=Pn.DEFAULT_ANISOTROPY,m=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Po(),this.name="",this.source=new Nm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Hr?en:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yc:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yc:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===en?Hr:Dm}set encoding(e){Ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hr?en:jn}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=wm;Pn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,s=0,a=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*s+f[8]*a+f[12]*l,this.y=f[1]*t+f[5]*s+f[9]*a+f[13]*l,this.z=f[2]*t+f[6]*s+f[10]*a+f[14]*l,this.w=f[3]*t+f[7]*s+f[11]*a+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],m=h[4],x=h[8],_=h[1],S=h[5],M=h[9],E=h[2],y=h[6],v=h[10];if(Math.abs(m-_)<.01&&Math.abs(x-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(x+E)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,P=(S+1)/2,b=(v+1)/2,F=(m+_)/4,z=(x+E)/4,K=(M+y)/4;return R>P&&R>b?R<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(R),a=F/s,l=z/s):P>b?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=F/a,l=K/a):b<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(b),s=z/l,a=K/l),this.set(s,a,l,t),this}let N=Math.sqrt((y-M)*(y-M)+(x-E)*(x-E)+(_-m)*(_-m));return Math.abs(N)<.001&&(N=1),this.x=(y-M)/N,this.y=(x-E)/N,this.z=(_-m)/N,this.w=Math.acos((p+S+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tv extends Os{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const a={width:e,height:t,depth:1};s.encoding!==void 0&&(Ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Hr?en:jn),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Pn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends tv{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Fm extends Pn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nv extends Pn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,f,c){let h=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];const _=l[f+0],S=l[f+1],M=l[f+2],E=l[f+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(c===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(x!==E||h!==_||p!==S||m!==M){let y=1-c;const v=h*_+p*S+m*M+x*E,N=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const b=Math.sqrt(R),F=Math.atan2(b,v*N);y=Math.sin(y*F)/b,c=Math.sin(c*F)/b}const P=c*N;if(h=h*y+_*P,p=p*y+S*P,m=m*y+M*P,x=x*y+E*P,y===1-c){const b=1/Math.sqrt(h*h+p*p+m*m+x*x);h*=b,p*=b,m*=b,x*=b}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,f){const c=s[a],h=s[a+1],p=s[a+2],m=s[a+3],x=l[f],_=l[f+1],S=l[f+2],M=l[f+3];return e[t]=c*M+m*x+h*S-p*_,e[t+1]=h*M+m*_+p*x-c*S,e[t+2]=p*M+m*S+c*_-h*x,e[t+3]=m*M-c*x-h*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const s=e._x,a=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,p=c(s/2),m=c(a/2),x=c(l/2),_=h(s/2),S=h(a/2),M=h(l/2);switch(f){case"XYZ":this._x=_*m*x+p*S*M,this._y=p*S*x-_*m*M,this._z=p*m*M+_*S*x,this._w=p*m*x-_*S*M;break;case"YXZ":this._x=_*m*x+p*S*M,this._y=p*S*x-_*m*M,this._z=p*m*M-_*S*x,this._w=p*m*x+_*S*M;break;case"ZXY":this._x=_*m*x-p*S*M,this._y=p*S*x+_*m*M,this._z=p*m*M+_*S*x,this._w=p*m*x-_*S*M;break;case"ZYX":this._x=_*m*x-p*S*M,this._y=p*S*x+_*m*M,this._z=p*m*M-_*S*x,this._w=p*m*x+_*S*M;break;case"YZX":this._x=_*m*x+p*S*M,this._y=p*S*x+_*m*M,this._z=p*m*M-_*S*x,this._w=p*m*x-_*S*M;break;case"XZY":this._x=_*m*x-p*S*M,this._y=p*S*x-_*m*M,this._z=p*m*M+_*S*x,this._w=p*m*x+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],f=t[1],c=t[5],h=t[9],p=t[2],m=t[6],x=t[10],_=s+c+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(m-h)*S,this._y=(l-p)*S,this._z=(f-a)*S}else if(s>c&&s>x){const S=2*Math.sqrt(1+s-c-x);this._w=(m-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(l+p)/S}else if(c>x){const S=2*Math.sqrt(1+c-s-x);this._w=(l-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+x-s-c);this._w=(f-a)/S,this._x=(l+p)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,f=e._w,c=t._x,h=t._y,p=t._z,m=t._w;return this._x=s*m+f*c+a*p-l*h,this._y=a*m+f*h+l*c-s*p,this._z=l*m+f*p+s*h-a*c,this._w=f*m-s*c-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,f=this._w;let c=f*e._w+s*e._x+a*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=s,this._y=a,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(h),m=Math.atan2(p,c),x=Math.sin((1-t)*m)/p,_=Math.sin(t*m)/p;return this._w=f*x+this._w*_,this._x=s*x+this._x*_,this._y=a*x+this._y*_,this._z=l*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(a),s*Math.sin(l),s*Math.cos(l),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,s=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,f=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*f,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*f,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*f,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,f=e.y,c=e.z,h=e.w,p=2*(f*a-c*s),m=2*(c*t-l*a),x=2*(l*s-f*t);return this.x=t+h*p+f*x-c*m,this.y=s+h*m+c*p-l*x,this.z=a+h*x+l*m-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=a*h-l*c,this.y=l*f-s*h,this.z=s*c-a*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Cn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new ee,Tp=new bo;class Do{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=l.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,ti):ti.fromBufferAttribute(l,f),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Va.copy(s.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const a=e.children;for(let l=0,f=a.length;l<f;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Ga.subVectors(this.max,So),gs.subVectors(e.a,So),_s.subVectors(e.b,So),vs.subVectors(e.c,So),ir.subVectors(_s,gs),rr.subVectors(vs,_s),Pr.subVectors(gs,vs);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Pr.z,Pr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Pr.z,0,-Pr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Pr.y,Pr.x,0];return!xc(t,gs,_s,vs,Ga)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,gs,_s,vs,Ga))?!1:(Wa.crossVectors(ir,rr),t=[Wa.x,Wa.y,Wa.z],xc(t,gs,_s,vs,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],ti=new ee,Va=new Do,gs=new ee,_s=new ee,vs=new ee,ir=new ee,rr=new ee,Pr=new ee,So=new ee,Ga=new ee,Wa=new ee,br=new ee;function xc(r,e,t,s,a){for(let l=0,f=r.length-3;l<=f;l+=3){br.fromArray(r,l);const c=a.x*Math.abs(br.x)+a.y*Math.abs(br.y)+a.z*Math.abs(br.z),h=e.dot(br),p=t.dot(br),m=s.dot(br);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>c)return!1}return!0}const iv=new Do,Mo=new ee,yc=new ee;class of{constructor(e=new ee,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):iv.setFromPoints(e).getCenter(s);let a=0;for(let l=0,f=e.length;l<f;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Mo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(yc)),this.expandByPoint(Mo.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new ee,Sc=new ee,Xa=new ee,sr=new ee,Mc=new ee,qa=new ee,Ec=new ee;class rv{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Sc.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Sc);const l=e.distanceTo(t)*.5,f=-this.direction.dot(Xa),c=sr.dot(this.direction),h=-sr.dot(Xa),p=sr.lengthSq(),m=Math.abs(1-f*f);let x,_,S,M;if(m>0)if(x=f*h-c,_=f*c-h,M=l*m,x>=0)if(_>=-M)if(_<=M){const E=1/m;x*=E,_*=E,S=x*(x+f*_+2*c)+_*(f*x+_+2*h)+p}else _=l,x=Math.max(0,-(f*_+c)),S=-x*x+_*(_+2*h)+p;else _=-l,x=Math.max(0,-(f*_+c)),S=-x*x+_*(_+2*h)+p;else _<=-M?(x=Math.max(0,-(-f*l+c)),_=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+_*(_+2*h)+p):_<=M?(x=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+p):(x=Math.max(0,-(f*l+c)),_=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+_*(_+2*h)+p);else _=f>0?-l:l,x=Math.max(0,-(f*_+c)),S=-x*x+_*(_+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Sc).addScaledVector(Xa,_),S}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const s=Ri.dot(this.direction),a=Ri.dot(Ri)-s*s,l=e.radius*e.radius;if(a>l)return null;const f=Math.sqrt(l-a),c=s-f,h=s+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,f,c,h;const p=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),m>=0?(l=(e.min.y-_.y)*m,f=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,f=(e.min.y-_.y)*m),s>f||l>a||((l>s||isNaN(s))&&(s=l),(f<a||isNaN(a))&&(a=f),x>=0?(c=(e.min.z-_.z)*x,h=(e.max.z-_.z)*x):(c=(e.max.z-_.z)*x,h=(e.min.z-_.z)*x),s>h||c>a)||((c>s||s!==s)&&(s=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,s,a,l){Mc.subVectors(t,e),qa.subVectors(s,e),Ec.crossVectors(Mc,qa);let f=this.direction.dot(Ec),c;if(f>0){if(a)return null;c=1}else if(f<0)c=-1,f=-f;else return null;sr.subVectors(this.origin,e);const h=c*this.direction.dot(qa.crossVectors(sr,qa));if(h<0)return null;const p=c*this.direction.dot(Mc.cross(sr));if(p<0||h+p>f)return null;const m=-c*sr.dot(Ec);return m<0?null:this.at(m/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,t,s,a,l,f,c,h,p,m,x,_,S,M,E,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,f,c,h,p,m,x,_,S,M,E,y)}set(e,t,s,a,l,f,c,h,p,m,x,_,S,M,E,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=a,v[1]=l,v[5]=f,v[9]=c,v[13]=h,v[2]=p,v[6]=m,v[10]=x,v[14]=_,v[3]=S,v[7]=M,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/xs.setFromMatrixColumn(e,0).length(),l=1/xs.setFromMatrixColumn(e,1).length(),f=1/xs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*f,t[9]=s[9]*f,t[10]=s[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,f=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a),m=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=f*m,S=f*x,M=c*m,E=c*x;t[0]=h*m,t[4]=-h*x,t[8]=p,t[1]=S+M*p,t[5]=_-E*p,t[9]=-c*h,t[2]=E-_*p,t[6]=M+S*p,t[10]=f*h}else if(e.order==="YXZ"){const _=h*m,S=h*x,M=p*m,E=p*x;t[0]=_+E*c,t[4]=M*c-S,t[8]=f*p,t[1]=f*x,t[5]=f*m,t[9]=-c,t[2]=S*c-M,t[6]=E+_*c,t[10]=f*h}else if(e.order==="ZXY"){const _=h*m,S=h*x,M=p*m,E=p*x;t[0]=_-E*c,t[4]=-f*x,t[8]=M+S*c,t[1]=S+M*c,t[5]=f*m,t[9]=E-_*c,t[2]=-f*p,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const _=f*m,S=f*x,M=c*m,E=c*x;t[0]=h*m,t[4]=M*p-S,t[8]=_*p+E,t[1]=h*x,t[5]=E*p+_,t[9]=S*p-M,t[2]=-p,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const _=f*h,S=f*p,M=c*h,E=c*p;t[0]=h*m,t[4]=E-_*x,t[8]=M*x+S,t[1]=x,t[5]=f*m,t[9]=-c*m,t[2]=-p*m,t[6]=S*x+M,t[10]=_-E*x}else if(e.order==="XZY"){const _=f*h,S=f*p,M=c*h,E=c*p;t[0]=h*m,t[4]=-x,t[8]=p*m,t[1]=_*x+E,t[5]=f*m,t[9]=S*x-M,t[2]=M*x-S,t[6]=c*m,t[10]=E*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sv,e,ov)}lookAt(e,t,s){const a=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),or.crossVectors(s,Nn),or.lengthSq()===0&&(Math.abs(s.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),or.crossVectors(s,Nn)),or.normalize(),Ya.crossVectors(Nn,or),a[0]=or.x,a[4]=Ya.x,a[8]=Nn.x,a[1]=or.y,a[5]=Ya.y,a[9]=Nn.y,a[2]=or.z,a[6]=Ya.z,a[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,f=s[0],c=s[4],h=s[8],p=s[12],m=s[1],x=s[5],_=s[9],S=s[13],M=s[2],E=s[6],y=s[10],v=s[14],N=s[3],R=s[7],P=s[11],b=s[15],F=a[0],z=a[4],K=a[8],C=a[12],D=a[1],se=a[5],oe=a[9],le=a[13],B=a[2],ne=a[6],ue=a[10],ie=a[14],Y=a[3],Z=a[7],G=a[11],w=a[15];return l[0]=f*F+c*D+h*B+p*Y,l[4]=f*z+c*se+h*ne+p*Z,l[8]=f*K+c*oe+h*ue+p*G,l[12]=f*C+c*le+h*ie+p*w,l[1]=m*F+x*D+_*B+S*Y,l[5]=m*z+x*se+_*ne+S*Z,l[9]=m*K+x*oe+_*ue+S*G,l[13]=m*C+x*le+_*ie+S*w,l[2]=M*F+E*D+y*B+v*Y,l[6]=M*z+E*se+y*ne+v*Z,l[10]=M*K+E*oe+y*ue+v*G,l[14]=M*C+E*le+y*ie+v*w,l[3]=N*F+R*D+P*B+b*Y,l[7]=N*z+R*se+P*ne+b*Z,l[11]=N*K+R*oe+P*ue+b*G,l[15]=N*C+R*le+P*ie+b*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],f=e[1],c=e[5],h=e[9],p=e[13],m=e[2],x=e[6],_=e[10],S=e[14],M=e[3],E=e[7],y=e[11],v=e[15];return M*(+l*h*x-a*p*x-l*c*_+s*p*_+a*c*S-s*h*S)+E*(+t*h*S-t*p*_+l*f*_-a*f*S+a*p*m-l*h*m)+y*(+t*p*x-t*c*S-l*f*x+s*f*S+l*c*m-s*p*m)+v*(-a*c*m-t*h*x+t*c*_+a*f*x-s*f*_+s*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],m=e[8],x=e[9],_=e[10],S=e[11],M=e[12],E=e[13],y=e[14],v=e[15],N=x*y*p-E*_*p+E*h*S-c*y*S-x*h*v+c*_*v,R=M*_*p-m*y*p-M*h*S+f*y*S+m*h*v-f*_*v,P=m*E*p-M*x*p+M*c*S-f*E*S-m*c*v+f*x*v,b=M*x*h-m*E*h-M*c*_+f*E*_+m*c*y-f*x*y,F=t*N+s*R+a*P+l*b;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=N*z,e[1]=(E*_*l-x*y*l-E*a*S+s*y*S+x*a*v-s*_*v)*z,e[2]=(c*y*l-E*h*l+E*a*p-s*y*p-c*a*v+s*h*v)*z,e[3]=(x*h*l-c*_*l-x*a*p+s*_*p+c*a*S-s*h*S)*z,e[4]=R*z,e[5]=(m*y*l-M*_*l+M*a*S-t*y*S-m*a*v+t*_*v)*z,e[6]=(M*h*l-f*y*l-M*a*p+t*y*p+f*a*v-t*h*v)*z,e[7]=(f*_*l-m*h*l+m*a*p-t*_*p-f*a*S+t*h*S)*z,e[8]=P*z,e[9]=(M*x*l-m*E*l-M*s*S+t*E*S+m*s*v-t*x*v)*z,e[10]=(f*E*l-M*c*l+M*s*p-t*E*p-f*s*v+t*c*v)*z,e[11]=(m*c*l-f*x*l-m*s*p+t*x*p+f*s*S-t*c*S)*z,e[12]=b*z,e[13]=(m*E*a-M*x*a+M*s*_-t*E*_-m*s*y+t*x*y)*z,e[14]=(M*c*a-f*E*a-M*s*h+t*E*h+f*s*y-t*c*y)*z,e[15]=(f*x*a-m*c*a+m*s*h-t*x*h-f*s*_+t*c*_)*z,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,f=e.x,c=e.y,h=e.z,p=l*f,m=l*c;return this.set(p*f+s,p*c-a*h,p*h+a*c,0,p*c+a*h,m*c+s,m*h-a*f,0,p*h-a*c,m*h+a*f,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,f){return this.set(1,s,l,0,e,1,f,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,p=l+l,m=f+f,x=c+c,_=l*p,S=l*m,M=l*x,E=f*m,y=f*x,v=c*x,N=h*p,R=h*m,P=h*x,b=s.x,F=s.y,z=s.z;return a[0]=(1-(E+v))*b,a[1]=(S+P)*b,a[2]=(M-R)*b,a[3]=0,a[4]=(S-P)*F,a[5]=(1-(_+v))*F,a[6]=(y+N)*F,a[7]=0,a[8]=(M+R)*z,a[9]=(y-N)*z,a[10]=(1-(_+E))*z,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=xs.set(a[0],a[1],a[2]).length();const f=xs.set(a[4],a[5],a[6]).length(),c=xs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const p=1/l,m=1/f,x=1/c;return ni.elements[0]*=p,ni.elements[1]*=p,ni.elements[2]*=p,ni.elements[4]*=m,ni.elements[5]*=m,ni.elements[6]*=m,ni.elements[8]*=x,ni.elements[9]*=x,ni.elements[10]*=x,t.setFromRotationMatrix(ni),s.x=l,s.y=f,s.z=c,this}makePerspective(e,t,s,a,l,f,c=Ui){const h=this.elements,p=2*l/(t-e),m=2*l/(s-a),x=(t+e)/(t-e),_=(s+a)/(s-a);let S,M;if(c===Ui)S=-(f+l)/(f-l),M=-2*f*l/(f-l);else if(c===gl)S=-f/(f-l),M=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=m,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,f,c=Ui){const h=this.elements,p=1/(t-e),m=1/(s-a),x=1/(f-l),_=(t+e)*p,S=(s+a)*m;let M,E;if(c===Ui)M=(f+l)*x,E=-2*x;else if(c===gl)M=l*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const xs=new ee,ni=new nn,sv=new ee(0,0,0),ov=new ee(1,1,1),or=new ee,Ya=new ee,Nn=new ee,wp=new nn,Ap=new bo;let Om=class zm{constructor(e=0,t=0,s=0,a=zm.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],f=a[4],c=a[8],h=a[1],p=a[5],m=a[9],x=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Cn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Om.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let av=0;const Rp=new ee,ys=new bo,Ci=new nn,ja=new ee,Eo=new ee,lv=new ee,uv=new bo,Cp=new ee(1,0,0),Lp=new ee(0,1,0),Pp=new ee(0,0,1),cv={type:"added"},fv={type:"removed"};class On extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ee,t=new Om,s=new bo,a=new ee(1,1,1);function l(){s.setFromEuler(t,!1)}function f(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new nn},normalMatrix:{value:new ut}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Cp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,t){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?ja.copy(e):ja.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Eo,ja,this.up):Ci.lookAt(ja,Eo,this.up),this.quaternion.setFromRotationMatrix(Ci),a&&(Ci.extractRotation(a.matrixWorld),ys.setFromRotationMatrix(Ci),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const f=this.children[s].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t){let s=[];this[e]===t&&s.push(this);for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectsByProperty(e,t);f.length>0&&(s=s.concat(f))}return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,f=a.length;l<f;l++){const c=a[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(l(e.materials,this.material[h]));a.material=c}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),p=f(e.textures),m=f(e.images),x=f(e.shapes),_=f(e.skeletons),S=f(e.animations),M=f(e.nodes);c.length>0&&(s.geometries=c),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),m.length>0&&(s.images=m),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function f(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}On.DEFAULT_UP=new ee(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new ee,Li=new ee,Tc=new ee,Pi=new ee,Ss=new ee,Ms=new ee,bp=new ee,wc=new ee,Ac=new ee,Rc=new ee;let $a=!1,Ka=class Ir{constructor(e=new ee,t=new ee,s=new ee){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),ii.subVectors(e,t),a.cross(ii);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){ii.subVectors(a,t),Li.subVectors(s,t),Tc.subVectors(e,t);const f=ii.dot(ii),c=ii.dot(Li),h=ii.dot(Tc),p=Li.dot(Li),m=Li.dot(Tc),x=f*p-c*c;if(x===0)return l.set(-2,-1,-1);const _=1/x,S=(p*h-c*m)*_,M=(f*m-c*h)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Pi),Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,t,s,a,l,f,c,h){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),this.getInterpolation(e,t,s,a,l,f,c,h)}static getInterpolation(e,t,s,a,l,f,c,h){return this.getBarycoord(e,t,s,a,Pi),h.setScalar(0),h.addScaledVector(l,Pi.x),h.addScaledVector(f,Pi.y),h.addScaledVector(c,Pi.z),h}static isFrontFacing(e,t,s,a){return ii.subVectors(s,t),Li.subVectors(e,t),ii.cross(Li).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ir.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ir.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,a,l){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),Ir.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}getInterpolation(e,t,s,a,l){return Ir.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Ir.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ir.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let f,c;Ss.subVectors(a,s),Ms.subVectors(l,s),wc.subVectors(e,s);const h=Ss.dot(wc),p=Ms.dot(wc);if(h<=0&&p<=0)return t.copy(s);Ac.subVectors(e,a);const m=Ss.dot(Ac),x=Ms.dot(Ac);if(m>=0&&x<=m)return t.copy(a);const _=h*x-m*p;if(_<=0&&h>=0&&m<=0)return f=h/(h-m),t.copy(s).addScaledVector(Ss,f);Rc.subVectors(e,l);const S=Ss.dot(Rc),M=Ms.dot(Rc);if(M>=0&&S<=M)return t.copy(l);const E=S*p-h*M;if(E<=0&&p>=0&&M<=0)return c=p/(p-M),t.copy(s).addScaledVector(Ms,c);const y=m*M-S*x;if(y<=0&&x-m>=0&&S-M>=0)return bp.subVectors(l,a),c=(x-m)/(x-m+(S-M)),t.copy(a).addScaledVector(bp,c);const v=1/(y+E+_);return f=E*v,c=_*v,t.copy(s).addScaledVector(Ss,f).addScaledVector(Ms,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Cc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class St{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=yt.workingColorSpace){return this.r=e,this.g=t,this.b=s,yt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=yt.workingColorSpace){if(e=K0(e,1),t=Cn(t,0,1),s=Cn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,f=2*s-l;this.r=Cc(f,l,e+1/3),this.g=Cc(f,l,e),this.b=Cc(f,l,e-1/3)}return yt.toWorkingColorSpace(this,a),this}setStyle(e,t=en){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=a[1],c=a[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const s=km[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return yt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Cn(cn.r*255,0,255))*65536+Math.round(Cn(cn.g*255,0,255))*256+Math.round(Cn(cn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(cn.copy(this),t);const s=cn.r,a=cn.g,l=cn.b,f=Math.max(s,a,l),c=Math.min(s,a,l);let h,p;const m=(c+f)/2;if(c===f)h=0,p=0;else{const x=f-c;switch(p=m<=.5?x/(f+c):x/(2-f-c),f){case s:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-s)/x+2;break;case l:h=(s-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=en){yt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,s=cn.g,a=cn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Za);const s=pc(ar.h,Za.h,t),a=pc(ar.s,Za.s,t),l=pc(ar.l,Za.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new St;St.NAMES=km;let hv=0;class Sl extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=bs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(s.blending=this.blending),this.side!==dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Gc&&(s.blendSrc=this.blendSrc),this.blendDst!==Wc&&(s.blendDst=this.blendDst),this.blendEquation!==Or&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==hl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_p&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=a(e.textures),f=a(e.images);l.length>0&&(s.textures=l),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hm extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new ee,Qa=new Mt;class pi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=vp,this.updateRange={offset:0,count:-1},this.gpuType=ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=yo(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Rn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),a=Rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),a=Rn(a,this.array),l=Rn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Vm extends pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Gm extends pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Vr extends pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let dv=0;const Xn=new nn,Lc=new On,Es=new ee,Fn=new Do,To=new Do,Zt=new ee;class Wr extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?Gm:Vm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,s){return Xn.makeTranslation(e,t,s),this.applyMatrix4(Xn),this}scale(e,t,s){return Xn.makeScale(e,t,s),this.applyMatrix4(Xn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Vr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Fn.setFromBufferAttribute(l),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new of);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const s=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];To.setFromBufferAttribute(c),this.morphTargetsRelative?(Zt.addVectors(Fn.min,To.min),Fn.expandByPoint(Zt),Zt.addVectors(Fn.max,To.max),Fn.expandByPoint(Zt)):(Fn.expandByPoint(To.min),Fn.expandByPoint(To.max))}Fn.getCenter(s);let a=0;for(let l=0,f=e.count;l<f;l++)Zt.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Zt));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let p=0,m=c.count;p<m;p++)Zt.fromBufferAttribute(c,p),h&&(Es.fromBufferAttribute(e,p),Zt.add(Es)),a=Math.max(a,s.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,a=t.position.array,l=t.normal.array,f=t.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,p=[],m=[];for(let D=0;D<c;D++)p[D]=new ee,m[D]=new ee;const x=new ee,_=new ee,S=new ee,M=new Mt,E=new Mt,y=new Mt,v=new ee,N=new ee;function R(D,se,oe){x.fromArray(a,D*3),_.fromArray(a,se*3),S.fromArray(a,oe*3),M.fromArray(f,D*2),E.fromArray(f,se*2),y.fromArray(f,oe*2),_.sub(x),S.sub(x),E.sub(M),y.sub(M);const le=1/(E.x*y.y-y.x*E.y);isFinite(le)&&(v.copy(_).multiplyScalar(y.y).addScaledVector(S,-E.y).multiplyScalar(le),N.copy(S).multiplyScalar(E.x).addScaledVector(_,-y.x).multiplyScalar(le),p[D].add(v),p[se].add(v),p[oe].add(v),m[D].add(N),m[se].add(N),m[oe].add(N))}let P=this.groups;P.length===0&&(P=[{start:0,count:s.length}]);for(let D=0,se=P.length;D<se;++D){const oe=P[D],le=oe.start,B=oe.count;for(let ne=le,ue=le+B;ne<ue;ne+=3)R(s[ne+0],s[ne+1],s[ne+2])}const b=new ee,F=new ee,z=new ee,K=new ee;function C(D){z.fromArray(l,D*3),K.copy(z);const se=p[D];b.copy(se),b.sub(z.multiplyScalar(z.dot(se))).normalize(),F.crossVectors(K,se);const le=F.dot(m[D])<0?-1:1;h[D*4]=b.x,h[D*4+1]=b.y,h[D*4+2]=b.z,h[D*4+3]=le}for(let D=0,se=P.length;D<se;++D){const oe=P[D],le=oe.start,B=oe.count;for(let ne=le,ue=le+B;ne<ue;ne+=3)C(s[ne+0]),C(s[ne+1]),C(s[ne+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const a=new ee,l=new ee,f=new ee,c=new ee,h=new ee,p=new ee,m=new ee,x=new ee;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),E=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),f.fromBufferAttribute(t,y),m.subVectors(f,l),x.subVectors(a,l),m.cross(x),c.fromBufferAttribute(s,M),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,y),c.add(m),h.add(m),p.add(m),s.setXYZ(M,c.x,c.y,c.z),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),f.fromBufferAttribute(t,_+2),m.subVectors(f,l),x.subVectors(a,l),m.cross(x),s.setXYZ(_+0,m.x,m.y,m.z),s.setXYZ(_+1,m.x,m.y,m.z),s.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(c,h){const p=c.array,m=c.itemSize,x=c.normalized,_=new p.constructor(h.length*m);let S=0,M=0;for(let E=0,y=h.length;E<y;E++){c.isInterleavedBufferAttribute?S=h[E]*c.data.stride+c.offset:S=h[E]*m;for(let v=0;v<m;v++)_[M++]=p[S++]}return new pi(_,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wr,s=this.index.array,a=this.attributes;for(const c in a){const h=a[c],p=e(h,s);t.setAttribute(c,p)}const l=this.morphAttributes;for(const c in l){const h=[],p=l[c];for(let m=0,x=p.length;m<x;m++){const _=p[m],S=e(_,s);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const p=f[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let x=0,_=p.length;x<_;x++){const S=p[x];m.push(S.toJSON(e.data))}m.length>0&&(a[h]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],x=l[p];for(let _=0,S=x.length;_<S;_++)m.push(x[_].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,m=f.length;p<m;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new nn,Dr=new rv,Ja=new of,Up=new ee,Ts=new ee,ws=new ee,As=new ee,Pc=new ee,el=new ee,tl=new Mt,nl=new Mt,il=new Mt,Ip=new ee,Np=new ee,Fp=new ee,rl=new ee,sl=new ee;let Ii=class extends On{constructor(e=new Wr,t=new Hm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=a.length;l<f;l++){const c=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,f=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(l&&c){el.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const m=c[h],x=l[h];m!==0&&(Pc.fromBufferAttribute(x,e),f?el.addScaledVector(Pc,m):el.addScaledVector(Pc.sub(t),m))}t.add(el)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ja.copy(s.boundingSphere),Ja.applyMatrix4(l),Dr.copy(e.ray).recast(e.near),!(Ja.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Ja,Up)===null||Dr.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Dp.copy(l).invert(),Dr.copy(e.ray).applyMatrix4(Dp),!(s.boundingBox!==null&&Dr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,x=l.attributes.normal,_=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let M=0,E=_.length;M<E;M++){const y=_[M],v=f[y.materialIndex],N=Math.max(y.start,S.start),R=Math.min(c.count,Math.min(y.start+y.count,S.start+S.count));for(let P=N,b=R;P<b;P+=3){const F=c.getX(P),z=c.getX(P+1),K=c.getX(P+2);a=ol(this,v,e,s,p,m,x,F,z,K),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(c.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const N=c.getX(y),R=c.getX(y+1),P=c.getX(y+2);a=ol(this,f,e,s,p,m,x,N,R,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let M=0,E=_.length;M<E;M++){const y=_[M],v=f[y.materialIndex],N=Math.max(y.start,S.start),R=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let P=N,b=R;P<b;P+=3){const F=P,z=P+1,K=P+2;a=ol(this,v,e,s,p,m,x,F,z,K),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const N=y,R=y+1,P=y+2;a=ol(this,f,e,s,p,m,x,N,R,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}};function pv(r,e,t,s,a,l,f,c){let h;if(e.side===Ln?h=s.intersectTriangle(f,l,a,!0,c):h=s.intersectTriangle(a,l,f,e.side===dr,c),h===null)return null;sl.copy(c),sl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(sl);return p<t.near||p>t.far?null:{distance:p,point:sl.clone(),object:r}}function ol(r,e,t,s,a,l,f,c,h,p){r.getVertexPosition(c,Ts),r.getVertexPosition(h,ws),r.getVertexPosition(p,As);const m=pv(r,e,t,s,Ts,ws,As,rl);if(m){a&&(tl.fromBufferAttribute(a,c),nl.fromBufferAttribute(a,h),il.fromBufferAttribute(a,p),m.uv=Ka.getInterpolation(rl,Ts,ws,As,tl,nl,il,new Mt)),l&&(tl.fromBufferAttribute(l,c),nl.fromBufferAttribute(l,h),il.fromBufferAttribute(l,p),m.uv1=Ka.getInterpolation(rl,Ts,ws,As,tl,nl,il,new Mt),m.uv2=m.uv1),f&&(Ip.fromBufferAttribute(f,c),Np.fromBufferAttribute(f,h),Fp.fromBufferAttribute(f,p),m.normal=Ka.getInterpolation(rl,Ts,ws,As,Ip,Np,Fp,new ee),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const x={a:c,b:h,c:p,normal:new ee,materialIndex:0};Ka.getNormal(Ts,ws,As,x.normal),m.face=x}return m}class Uo extends Wr{constructor(e=1,t=1,s=1,a=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:f};const c=this;a=Math.floor(a),l=Math.floor(l),f=Math.floor(f);const h=[],p=[],m=[],x=[];let _=0,S=0;M("z","y","x",-1,-1,s,t,e,f,l,0),M("z","y","x",1,-1,s,t,-e,f,l,1),M("x","z","y",1,1,e,s,t,a,f,2),M("x","z","y",1,-1,e,s,-t,a,f,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Vr(p,3)),this.setAttribute("normal",new Vr(m,3)),this.setAttribute("uv",new Vr(x,2));function M(E,y,v,N,R,P,b,F,z,K,C){const D=P/z,se=b/K,oe=P/2,le=b/2,B=F/2,ne=z+1,ue=K+1;let ie=0,Y=0;const Z=new ee;for(let G=0;G<ue;G++){const w=G*se-le;for(let O=0;O<ne;O++){const ce=O*D-oe;Z[E]=ce*N,Z[y]=w*R,Z[v]=B,p.push(Z.x,Z.y,Z.z),Z[E]=0,Z[y]=0,Z[v]=F>0?1:-1,m.push(Z.x,Z.y,Z.z),x.push(O/z),x.push(1-G/K),ie+=1}}for(let G=0;G<K;G++)for(let w=0;w<z;w++){const O=_+w+ne*G,ce=_+w+ne*(G+1),fe=_+(w+1)+ne*(G+1),ge=_+(w+1)+ne*G;h.push(O,ce,ge),h.push(ce,fe,ge),Y+=6}c.addGroup(S,Y,C),S+=Y,_+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function xn(r){const e={};for(let t=0;t<r.length;t++){const s=Fs(r[t]);for(const a in s)e[a]=s[a]}return e}function mv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wm(r){return r.getRenderTarget()===null?r.outputColorSpace:yt.workingColorSpace}const gv={clone:Fs,merge:xn};var _v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=mv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?t.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[a]={type:"m4",value:f.toArray()}:t.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Xm extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yn extends Xm{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kc*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,a,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dc*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;l+=f.offsetX*a/h,t-=f.offsetY*s/p,a*=f.width/h,s*=f.height/p}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rs=-90,Cs=1;class xv extends On{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const l=new Yn(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const f=new Yn(Rs,Cs,e,t);f.layers=this.layers,this.add(f);const c=new Yn(Rs,Cs,e,t);c.layers=this.layers,this.add(c);const h=new Yn(Rs,Cs,e,t);h.layers=this.layers,this.add(h);const p=new Yn(Rs,Cs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,f,c,h]=t;for(const p of t)this.remove(p);if(e===Ui)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===gl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,f,c,h,p,m]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,f),e.setRenderTarget(s,2,a),e.render(t,c),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=E,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(x,_,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class qm extends Pn{constructor(e,t,s,a,l,f,c,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,s,a,l,f,c,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yv extends Gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];t.encoding!==void 0&&(Ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hr?en:jn),this.texture=new qm(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Uo(5,5,5),l=new pr({name:"CubemapFromEquirect",uniforms:Fs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Ln,blending:cr});l.uniforms.tEquirect.value=t;const f=new Ii(a,l),c=t.minFilter;return t.minFilter===Co&&(t.minFilter=qn),new xv(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,s,a);e.setRenderTarget(l)}}const bc=new ee,Sv=new ee,Mv=new ut;class Nr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=bc.subVectors(s,t).cross(Sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(bc),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Mv.getNormalMatrix(e),a=this.coplanarPoint(bc).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new of,al=new ee;class Ym{constructor(e=new Nr,t=new Nr,s=new Nr,a=new Nr,l=new Nr,f=new Nr){this.planes=[e,t,s,a,l,f]}set(e,t,s,a,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(s),c[3].copy(a),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ui){const s=this.planes,a=e.elements,l=a[0],f=a[1],c=a[2],h=a[3],p=a[4],m=a[5],x=a[6],_=a[7],S=a[8],M=a[9],E=a[10],y=a[11],v=a[12],N=a[13],R=a[14],P=a[15];if(s[0].setComponents(h-l,_-p,y-S,P-v).normalize(),s[1].setComponents(h+l,_+p,y+S,P+v).normalize(),s[2].setComponents(h+f,_+m,y+M,P+N).normalize(),s[3].setComponents(h-f,_-m,y-M,P-N).normalize(),s[4].setComponents(h-c,_-x,y-E,P-R).normalize(),t===Ui)s[5].setComponents(h+c,_+x,y+E,P+R).normalize();else if(t===gl)s[5].setComponents(c,x,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(al.x=a.normal.x>0?e.max.x:e.min.x,al.y=a.normal.y>0?e.max.y:e.min.y,al.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jm(){let r=null,e=!1,t=null,s=null;function a(l,f){t(l,f),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Ev(r,e){const t=e.isWebGL2,s=new WeakMap;function a(p,m){const x=p.array,_=p.usage,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,x,_),p.onUploadCallback();let M;if(x instanceof Float32Array)M=r.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)M=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=r.UNSIGNED_SHORT;else if(x instanceof Int16Array)M=r.SHORT;else if(x instanceof Uint32Array)M=r.UNSIGNED_INT;else if(x instanceof Int32Array)M=r.INT;else if(x instanceof Int8Array)M=r.BYTE;else if(x instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:S,type:M,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version}}function l(p,m,x){const _=m.array,S=m.updateRange;r.bindBuffer(x,p),S.count===-1?r.bufferSubData(x,0,_):(t?r.bufferSubData(x,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):r.bufferSubData(x,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),m.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),s.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=s.get(p);m&&(r.deleteBuffer(m.buffer),s.delete(p))}function h(p,m){if(p.isGLBufferAttribute){const _=s.get(p);(!_||_.version<p.version)&&s.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=s.get(p);x===void 0?s.set(p,a(p,m)):x.version<p.version&&(l(x.buffer,p,m),x.version=p.version)}return{get:f,remove:c,update:h}}class Ml extends Wr{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,f=t/2,c=Math.floor(s),h=Math.floor(a),p=c+1,m=h+1,x=e/c,_=t/h,S=[],M=[],E=[],y=[];for(let v=0;v<m;v++){const N=v*_-f;for(let R=0;R<p;R++){const P=R*x-l;M.push(P,-N,0),E.push(0,0,1),y.push(R/c),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let N=0;N<c;N++){const R=N+p*v,P=N+p*(v+1),b=N+1+p*(v+1),F=N+1+p*v;S.push(R,P,F),S.push(P,b,F)}this.setIndex(S),this.setAttribute("position",new Vr(M,3)),this.setAttribute("normal",new Vr(E,3)),this.setAttribute("uv",new Vr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wv=`#ifdef USE_ALPHAHASH
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
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pv=`#ifdef USE_AOMAP
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
#endif`,bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
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
#endif`,Fv=`#ifdef USE_BUMPMAP
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xv=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,qv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Yv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ex=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
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
}`,cx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Mx=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dx=`#if defined( USE_POINTS_UV )
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
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gy=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ly=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Py=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ny=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Fy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,zy=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ky=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vy=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Wy=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,qy=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,jy=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$y=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Qy=`uniform vec3 color;
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
}`,Jy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,eS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,st={alphahash_fragment:Tv,alphahash_pars_fragment:wv,alphamap_fragment:Av,alphamap_pars_fragment:Rv,alphatest_fragment:Cv,alphatest_pars_fragment:Lv,aomap_fragment:Pv,aomap_pars_fragment:bv,begin_vertex:Dv,beginnormal_vertex:Uv,bsdfs:Iv,iridescence_fragment:Nv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Bv,clipping_planes_vertex:kv,color_fragment:Hv,color_pars_fragment:Vv,color_pars_vertex:Gv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:qv,defaultnormal_vertex:Yv,displacementmap_pars_vertex:jv,displacementmap_vertex:$v,emissivemap_fragment:Kv,emissivemap_pars_fragment:Zv,colorspace_fragment:Qv,colorspace_pars_fragment:Jv,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:mx,envmap_vertex:rx,fog_vertex:sx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:ux,lightmap_fragment:cx,lightmap_pars_fragment:fx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:dx,lights_pars_begin:px,lights_toon_fragment:gx,lights_toon_pars_fragment:_x,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:Ex,lights_fragment_end:Tx,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Lx,map_pars_fragment:Px,map_particle_fragment:bx,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Ix,morphcolor_vertex:Nx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:zx,normal_fragment_begin:Bx,normal_fragment_maps:kx,normal_pars_fragment:Hx,normal_pars_vertex:Vx,normal_vertex:Gx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:jx,opaque_fragment:$x,packing:Kx,premultiplied_alpha_fragment:Zx,project_vertex:Qx,dithering_fragment:Jx,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ry,shadowmap_vertex:sy,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:uy,skinnormal_vertex:cy,specularmap_fragment:fy,specularmap_pars_fragment:hy,tonemapping_fragment:dy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:_y,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:yy,background_vert:Sy,background_frag:My,backgroundCube_vert:Ey,backgroundCube_frag:Ty,cube_vert:wy,cube_frag:Ay,depth_vert:Ry,depth_frag:Cy,distanceRGBA_vert:Ly,distanceRGBA_frag:Py,equirect_vert:by,equirect_frag:Dy,linedashed_vert:Uy,linedashed_frag:Iy,meshbasic_vert:Ny,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:zy,meshmatcap_vert:By,meshmatcap_frag:ky,meshnormal_vert:Hy,meshnormal_frag:Vy,meshphong_vert:Gy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:qy,meshtoon_vert:Yy,meshtoon_frag:jy,points_vert:$y,points_frag:Ky,shadow_vert:Zy,shadow_frag:Qy,sprite_vert:Jy,sprite_frag:eS},Ae={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},hi={basic:{uniforms:xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new St(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new St(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:xn([Ae.common,Ae.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:xn([Ae.lights,Ae.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};hi.physical={uniforms:xn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const ll={r:0,b:0,g:0};function tS(r,e,t,s,a,l,f){const c=new St(0);let h=l===!0?0:1,p,m,x=null,_=0,S=null;function M(y,v){let N=!1,R=v.isScene===!0?v.background:null;R&&R.isTexture&&(R=(v.backgroundBlurriness>0?t:e).get(R)),R===null?E(c,h):R&&R.isColor&&(E(R,1),N=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?s.buffers.color.setClear(0,0,0,1,f):P==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||N)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),R&&(R.isCubeTexture||R.mapping===xl)?(m===void 0&&(m=new Ii(new Uo(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Fs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(b,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=yt.getTransfer(R.colorSpace)!==Lt,(x!==R||_!==R.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,x=R,_=R.version,S=r.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Ii(new Ml(2,2),new pr({name:"BackgroundMaterial",uniforms:Fs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=yt.getTransfer(R.colorSpace)!==Lt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||_!==R.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,x=R,_=R.version,S=r.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null))}function E(y,v){y.getRGB(ll,Wm(r)),s.buffers.color.setClear(ll.r,ll.g,ll.b,v,f)}return{getClearColor:function(){return c},setClearColor:function(y,v=1){c.set(y),h=v,E(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,E(c,h)},render:M}}function nS(r,e,t,s){const a=r.getParameter(r.MAX_VERTEX_ATTRIBS),l=s.isWebGL2?null:e.get("OES_vertex_array_object"),f=s.isWebGL2||l!==null,c={},h=y(null);let p=h,m=!1;function x(B,ne,ue,ie,Y){let Z=!1;if(f){const G=E(ie,ue,ne);p!==G&&(p=G,S(p.object)),Z=v(B,ie,ue,Y),Z&&N(B,ie,ue,Y)}else{const G=ne.wireframe===!0;(p.geometry!==ie.id||p.program!==ue.id||p.wireframe!==G)&&(p.geometry=ie.id,p.program=ue.id,p.wireframe=G,Z=!0)}Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(Z||m)&&(m=!1,K(B,ne,ue,ie),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function _(){return s.isWebGL2?r.createVertexArray():l.createVertexArrayOES()}function S(B){return s.isWebGL2?r.bindVertexArray(B):l.bindVertexArrayOES(B)}function M(B){return s.isWebGL2?r.deleteVertexArray(B):l.deleteVertexArrayOES(B)}function E(B,ne,ue){const ie=ue.wireframe===!0;let Y=c[B.id];Y===void 0&&(Y={},c[B.id]=Y);let Z=Y[ne.id];Z===void 0&&(Z={},Y[ne.id]=Z);let G=Z[ie];return G===void 0&&(G=y(_()),Z[ie]=G),G}function y(B){const ne=[],ue=[],ie=[];for(let Y=0;Y<a;Y++)ne[Y]=0,ue[Y]=0,ie[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:ue,attributeDivisors:ie,object:B,attributes:{},index:null}}function v(B,ne,ue,ie){const Y=p.attributes,Z=ne.attributes;let G=0;const w=ue.getAttributes();for(const O in w)if(w[O].location>=0){const fe=Y[O];let ge=Z[O];if(ge===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(ge=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(ge=B.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;G++}return p.attributesNum!==G||p.index!==ie}function N(B,ne,ue,ie){const Y={},Z=ne.attributes;let G=0;const w=ue.getAttributes();for(const O in w)if(w[O].location>=0){let fe=Z[O];fe===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(fe=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(fe=B.instanceColor));const ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),Y[O]=ge,G++}p.attributes=Y,p.attributesNum=G,p.index=ie}function R(){const B=p.newAttributes;for(let ne=0,ue=B.length;ne<ue;ne++)B[ne]=0}function P(B){b(B,0)}function b(B,ne){const ue=p.newAttributes,ie=p.enabledAttributes,Y=p.attributeDivisors;ue[B]=1,ie[B]===0&&(r.enableVertexAttribArray(B),ie[B]=1),Y[B]!==ne&&((s.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,ne),Y[B]=ne)}function F(){const B=p.newAttributes,ne=p.enabledAttributes;for(let ue=0,ie=ne.length;ue<ie;ue++)ne[ue]!==B[ue]&&(r.disableVertexAttribArray(ue),ne[ue]=0)}function z(B,ne,ue,ie,Y,Z,G){G===!0?r.vertexAttribIPointer(B,ne,ue,Y,Z):r.vertexAttribPointer(B,ne,ue,ie,Y,Z)}function K(B,ne,ue,ie){if(s.isWebGL2===!1&&(B.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const Y=ie.attributes,Z=ue.getAttributes(),G=ne.defaultAttributeValues;for(const w in Z){const O=Z[w];if(O.location>=0){let ce=Y[w];if(ce===void 0&&(w==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),w==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){const fe=ce.normalized,ge=ce.itemSize,Te=t.get(ce);if(Te===void 0)continue;const Fe=Te.buffer,Re=Te.type,Ie=Te.bytesPerElement,ct=s.isWebGL2===!0&&(Re===r.INT||Re===r.UNSIGNED_INT||ce.gpuType===Am);if(ce.isInterleavedBufferAttribute){const tt=ce.data,j=tt.stride,Yt=ce.offset;if(tt.isInstancedInterleavedBuffer){for(let He=0;He<O.locationSize;He++)b(O.location+He,tt.meshPerAttribute);B.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let He=0;He<O.locationSize;He++)P(O.location+He);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let He=0;He<O.locationSize;He++)z(O.location+He,ge/O.locationSize,Re,fe,j*Ie,(Yt+ge/O.locationSize*He)*Ie,ct)}else{if(ce.isInstancedBufferAttribute){for(let tt=0;tt<O.locationSize;tt++)b(O.location+tt,ce.meshPerAttribute);B.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let tt=0;tt<O.locationSize;tt++)P(O.location+tt);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let tt=0;tt<O.locationSize;tt++)z(O.location+tt,ge/O.locationSize,Re,fe,ge*Ie,ge/O.locationSize*tt*Ie,ct)}}else if(G!==void 0){const fe=G[w];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(O.location,fe);break;case 3:r.vertexAttrib3fv(O.location,fe);break;case 4:r.vertexAttrib4fv(O.location,fe);break;default:r.vertexAttrib1fv(O.location,fe)}}}}F()}function C(){oe();for(const B in c){const ne=c[B];for(const ue in ne){const ie=ne[ue];for(const Y in ie)M(ie[Y].object),delete ie[Y];delete ne[ue]}delete c[B]}}function D(B){if(c[B.id]===void 0)return;const ne=c[B.id];for(const ue in ne){const ie=ne[ue];for(const Y in ie)M(ie[Y].object),delete ie[Y];delete ne[ue]}delete c[B.id]}function se(B){for(const ne in c){const ue=c[ne];if(ue[B.id]===void 0)continue;const ie=ue[B.id];for(const Y in ie)M(ie[Y].object),delete ie[Y];delete ue[B.id]}}function oe(){le(),m=!0,p!==h&&(p=h,S(p.object))}function le(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:x,reset:oe,resetDefaultState:le,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:se,initAttributes:R,enableAttribute:P,disableUnusedAttributes:F}}function iS(r,e,t,s){const a=s.isWebGL2;let l;function f(p){l=p}function c(p,m){r.drawArrays(l,p,m),t.update(m,l,1)}function h(p,m,x){if(x===0)return;let _,S;if(a)_=r,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](l,p,m,x),t.update(m,l,x)}this.setMode=f,this.render=c,this.renderInstances=h}function rS(r,e,t){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=f||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),E=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,P=f||e.has("OES_texture_float"),b=R&&P,F=f?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:m,maxTextures:x,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:N,vertexTextures:R,floatFragmentTextures:P,floatVertexTextures:b,maxSamples:F}}function sS(r){const e=this;let t=null,s=0,a=!1,l=!1;const f=new Nr,c=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||s!==0||a;return a=_,s=x.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=m(x,_,0)},this.setState=function(x,_,S){const M=x.clippingPlanes,E=x.clipIntersection,y=x.clipShadows,v=r.get(x);if(!a||M===null||M.length===0||l&&!y)l?m(null):p();else{const N=l?0:s,R=N*4;let P=v.clippingState||null;h.value=P,P=m(M,_,R,S);for(let b=0;b!==R;++b)P[b]=t[b];v.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(x,_,S,M){const E=x!==null?x.length:0;let y=null;if(E!==0){if(y=h.value,M!==!0||y===null){const v=S+E*4,N=_.matrixWorldInverse;c.getNormalMatrix(N),(y===null||y.length<v)&&(y=new Float32Array(v));for(let R=0,P=S;R!==E;++R,P+=4)f.copy(x[R]).applyMatrix4(N,c),f.normal.toArray(y,P),y[P+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function oS(r){let e=new WeakMap;function t(f,c){return c===Xc?f.mapping=Us:c===qc&&(f.mapping=Is),f}function s(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const c=f.mapping;if(c===Xc||c===qc)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new yv(h.height/2);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",a),t(p.texture,f.mapping)}else return null}}return f}function a(f){const c=f.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class aS extends Xm{constructor(e=-1,t=1,s=1,a=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,f=s+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,f=l+p*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,Op=[.125,.215,.35,.446,.526,.582],zr=20,Dc=new aS,zp=new St;let Uc=null,Ic=0,Nc=0;const Fr=(1+Math.sqrt(5))/2,Ls=1/Fr,Bp=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,Fr,Ls),new ee(0,Fr,-Ls),new ee(Ls,0,Fr),new ee(-Ls,0,Fr),new ee(Fr,Ls,0),new ee(-Fr,Ls,0)];class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){Uc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Ic,Nc),e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Lo,format:si,colorSpace:Ni,depthBuffer:!1},a=Hp(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(l)),this._blurMaterial=uS(l,e,t)}return a}_compileMaterial(e){const t=new Ii(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,s,a){const c=new Yn(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,_=m.toneMapping;m.getClearColor(zp),m.toneMapping=fr,m.autoClear=!1;const S=new Hm({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),M=new Ii(new Uo,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(zp),E=!0);for(let v=0;v<6;v++){const N=v%3;N===0?(c.up.set(0,h[v],0),c.lookAt(p[v],0,0)):N===1?(c.up.set(0,0,h[v]),c.lookAt(0,p[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,p[v]));const R=this._cubeSize;ul(a,N*R,v>2?R:0,R,R),m.setRenderTarget(a),E&&m.render(M,c),m.render(e,c)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Us||e.mapping===Is;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vp());const l=a?this._cubemapMaterial:this._equirectMaterial,f=new Ii(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;ul(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(f,Dc)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=Bp[(a-1)%Bp.length];this._blur(e,a-1,a,l,f)}t.autoClear=s}_blur(e,t,s,a,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,s,a,"latitudinal",l),this._halfBlur(f,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,f,c){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new Ii(this._lodPlanes[a],p),_=p.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*zr-1),E=l/M,y=isFinite(l)?1+Math.floor(m*E):zr;y>zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${zr}`);const v=[];let N=0;for(let z=0;z<zr;++z){const K=z/E,C=Math.exp(-K*K/2);v.push(C),z===0?N+=C:z<y&&(N+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/N;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=f==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:R}=this;_.dTheta.value=M,_.mipInt.value=R-s;const P=this._sizeLods[a],b=3*P*(a>R-Ps?a-R+Ps:0),F=4*(this._cubeSize-P);ul(t,b,F,3*P,2*P),h.setRenderTarget(t),h.render(x,Dc)}}function lS(r){const e=[],t=[],s=[];let a=r;const l=r-Ps+1+Op.length;for(let f=0;f<l;f++){const c=Math.pow(2,a);t.push(c);let h=1/c;f>r-Ps?h=Op[f-r+Ps-1]:f===0&&(h=0),s.push(h);const p=1/(c-2),m=-p,x=1+p,_=[m,m,x,m,x,x,m,m,x,x,m,x],S=6,M=6,E=3,y=2,v=1,N=new Float32Array(E*M*S),R=new Float32Array(y*M*S),P=new Float32Array(v*M*S);for(let F=0;F<S;F++){const z=F%3*2/3-1,K=F>2?0:-1,C=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];N.set(C,E*M*F),R.set(_,y*M*F);const D=[F,F,F,F,F,F];P.set(D,v*M*F)}const b=new Wr;b.setAttribute("position",new pi(N,E)),b.setAttribute("uv",new pi(R,y)),b.setAttribute("faceIndex",new pi(P,v)),e.push(b),a>Ps&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Hp(r,e,t){const s=new Gr(r,e,t);return s.texture.mapping=xl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ul(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function uS(r,e,t){const s=new Float32Array(zr),a=new ee(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:af(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Vp(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Gp(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function af(){return`

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
	`}function cS(r){let e=new WeakMap,t=null;function s(c){if(c&&c.isTexture){const h=c.mapping,p=h===Xc||h===qc,m=h===Us||h===Is;if(p||m)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let x=e.get(c);return t===null&&(t=new kp(r)),x=p?t.fromEquirectangular(c,x):t.fromCubemap(c,x),e.set(c,x),x.texture}else{if(e.has(c))return e.get(c).texture;{const x=c.image;if(p&&x&&x.height>0||m&&x&&a(x)){t===null&&(t=new kp(r));const _=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",l),_.texture}else return null}}}return c}function a(c){let h=0;const p=6;for(let m=0;m<p;m++)c[m]!==void 0&&h++;return h===p}function l(c){const h=c.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:f}}function fS(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const a=t(s);return a===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function hS(r,e,t,s){const a={},l=new WeakMap;function f(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const E=_.morphAttributes[M];for(let y=0,v=E.length;y<v;y++)e.remove(E[y])}_.removeEventListener("dispose",f),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(x,_){return a[_.id]===!0||(_.addEventListener("dispose",f),a[_.id]=!0,t.memory.geometries++),_}function h(x){const _=x.attributes;for(const M in _)e.update(_[M],r.ARRAY_BUFFER);const S=x.morphAttributes;for(const M in S){const E=S[M];for(let y=0,v=E.length;y<v;y++)e.update(E[y],r.ARRAY_BUFFER)}}function p(x){const _=[],S=x.index,M=x.attributes.position;let E=0;if(S!==null){const N=S.array;E=S.version;for(let R=0,P=N.length;R<P;R+=3){const b=N[R+0],F=N[R+1],z=N[R+2];_.push(b,F,F,z,z,b)}}else if(M!==void 0){const N=M.array;E=M.version;for(let R=0,P=N.length/3-1;R<P;R+=3){const b=R+0,F=R+1,z=R+2;_.push(b,F,F,z,z,b)}}else return;const y=new(Um(_)?Gm:Vm)(_,1);y.version=E;const v=l.get(x);v&&e.remove(v),l.set(x,y)}function m(x){const _=l.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&p(x)}else p(x);return l.get(x)}return{get:c,update:h,getWireframeAttribute:m}}function dS(r,e,t,s){const a=s.isWebGL2;let l;function f(_){l=_}let c,h;function p(_){c=_.type,h=_.bytesPerElement}function m(_,S){r.drawElements(l,S,c,_*h),t.update(S,l,1)}function x(_,S,M){if(M===0)return;let E,y;if(a)E=r,y="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[y](l,S,c,_*h,M),t.update(S,l,M)}this.setMode=f,this.setIndex=p,this.render=m,this.renderInstances=x}function pS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,f,c){switch(t.calls++,f){case r.TRIANGLES:t.triangles+=c*(l/3);break;case r.LINES:t.lines+=c*(l/2);break;case r.LINE_STRIP:t.lines+=c*(l-1);break;case r.LINE_LOOP:t.lines+=c*l;break;case r.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function mS(r,e){return r[0]-e[0]}function gS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function _S(r,e,t){const s={},a=new Float32Array(8),l=new WeakMap,f=new tn,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function h(p,m,x){const _=p.morphTargetInfluences;if(e.isWebGL2===!0){const M=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,E=M!==void 0?M.length:0;let y=l.get(m);if(y===void 0||y.count!==E){let ne=function(){le.dispose(),l.delete(m),m.removeEventListener("dispose",ne)};var S=ne;y!==void 0&&y.texture.dispose();const R=m.morphAttributes.position!==void 0,P=m.morphAttributes.normal!==void 0,b=m.morphAttributes.color!==void 0,F=m.morphAttributes.position||[],z=m.morphAttributes.normal||[],K=m.morphAttributes.color||[];let C=0;R===!0&&(C=1),P===!0&&(C=2),b===!0&&(C=3);let D=m.attributes.position.count*C,se=1;D>e.maxTextureSize&&(se=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const oe=new Float32Array(D*se*4*E),le=new Fm(oe,D,se,E);le.type=ur,le.needsUpdate=!0;const B=C*4;for(let ue=0;ue<E;ue++){const ie=F[ue],Y=z[ue],Z=K[ue],G=D*se*4*ue;for(let w=0;w<ie.count;w++){const O=w*B;R===!0&&(f.fromBufferAttribute(ie,w),oe[G+O+0]=f.x,oe[G+O+1]=f.y,oe[G+O+2]=f.z,oe[G+O+3]=0),P===!0&&(f.fromBufferAttribute(Y,w),oe[G+O+4]=f.x,oe[G+O+5]=f.y,oe[G+O+6]=f.z,oe[G+O+7]=0),b===!0&&(f.fromBufferAttribute(Z,w),oe[G+O+8]=f.x,oe[G+O+9]=f.y,oe[G+O+10]=f.z,oe[G+O+11]=Z.itemSize===4?f.w:1)}}y={count:E,texture:le,size:new Mt(D,se)},l.set(m,y),m.addEventListener("dispose",ne)}let v=0;for(let R=0;R<_.length;R++)v+=_[R];const N=m.morphTargetsRelative?1:1-v;x.getUniforms().setValue(r,"morphTargetBaseInfluence",N),x.getUniforms().setValue(r,"morphTargetInfluences",_),x.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),x.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const M=_===void 0?0:_.length;let E=s[m.id];if(E===void 0||E.length!==M){E=[];for(let P=0;P<M;P++)E[P]=[P,0];s[m.id]=E}for(let P=0;P<M;P++){const b=E[P];b[0]=P,b[1]=_[P]}E.sort(gS);for(let P=0;P<8;P++)P<M&&E[P][1]?(c[P][0]=E[P][0],c[P][1]=E[P][1]):(c[P][0]=Number.MAX_SAFE_INTEGER,c[P][1]=0);c.sort(mS);const y=m.morphAttributes.position,v=m.morphAttributes.normal;let N=0;for(let P=0;P<8;P++){const b=c[P],F=b[0],z=b[1];F!==Number.MAX_SAFE_INTEGER&&z?(y&&m.getAttribute("morphTarget"+P)!==y[F]&&m.setAttribute("morphTarget"+P,y[F]),v&&m.getAttribute("morphNormal"+P)!==v[F]&&m.setAttribute("morphNormal"+P,v[F]),a[P]=z,N+=z):(y&&m.hasAttribute("morphTarget"+P)===!0&&m.deleteAttribute("morphTarget"+P),v&&m.hasAttribute("morphNormal"+P)===!0&&m.deleteAttribute("morphNormal"+P),a[P]=0)}const R=m.morphTargetsRelative?1:1-N;x.getUniforms().setValue(r,"morphTargetBaseInfluence",R),x.getUniforms().setValue(r,"morphTargetInfluences",a)}}return{update:h}}function vS(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,m=h.geometry,x=e.get(h,m);if(a.get(x)!==p&&(e.update(x),a.set(x,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return x}function f(){a=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:f}}const $m=new Pn,Km=new Fm,Zm=new nv,Qm=new qm,Wp=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),jp=new Float32Array(4);function zs(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Wp[a];if(l===void 0&&(l=new Float32Array(a),Wp[a]=l),e!==0){s.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,r[f].toArray(l,c)}return l}function Xt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function qt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function El(r,e){let t=Xp[e];t===void 0&&(t=new Int32Array(e),Xp[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function xS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function yS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2fv(this.addr,e),qt(t,e)}}function SS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;r.uniform3fv(this.addr,e),qt(t,e)}}function MS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4fv(this.addr,e),qt(t,e)}}function ES(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,s))return;jp.set(s),r.uniformMatrix2fv(this.addr,!1,jp),qt(t,s)}}function TS(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,s))return;Yp.set(s),r.uniformMatrix3fv(this.addr,!1,Yp),qt(t,s)}}function wS(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,s))return;qp.set(s),r.uniformMatrix4fv(this.addr,!1,qp),qt(t,s)}}function AS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2iv(this.addr,e),qt(t,e)}}function CS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3iv(this.addr,e),qt(t,e)}}function LS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4iv(this.addr,e),qt(t,e)}}function PS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function bS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2uiv(this.addr,e),qt(t,e)}}function DS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3uiv(this.addr,e),qt(t,e)}}function US(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4uiv(this.addr,e),qt(t,e)}}function IS(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2D(e||$m,a)}function NS(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Zm,a)}function FS(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Qm,a)}function OS(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Km,a)}function zS(r){switch(r){case 5126:return xS;case 35664:return yS;case 35665:return SS;case 35666:return MS;case 35674:return ES;case 35675:return TS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return RS;case 35668:case 35672:return CS;case 35669:case 35673:return LS;case 5125:return PS;case 36294:return bS;case 36295:return DS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return IS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}function BS(r,e){r.uniform1fv(this.addr,e)}function kS(r,e){const t=zs(e,this.size,2);r.uniform2fv(this.addr,t)}function HS(r,e){const t=zs(e,this.size,3);r.uniform3fv(this.addr,t)}function VS(r,e){const t=zs(e,this.size,4);r.uniform4fv(this.addr,t)}function GS(r,e){const t=zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function WS(r,e){const t=zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function XS(r,e){const t=zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qS(r,e){r.uniform1iv(this.addr,e)}function YS(r,e){r.uniform2iv(this.addr,e)}function jS(r,e){r.uniform3iv(this.addr,e)}function $S(r,e){r.uniform4iv(this.addr,e)}function KS(r,e){r.uniform1uiv(this.addr,e)}function ZS(r,e){r.uniform2uiv(this.addr,e)}function QS(r,e){r.uniform3uiv(this.addr,e)}function JS(r,e){r.uniform4uiv(this.addr,e)}function eM(r,e,t){const s=this.cache,a=e.length,l=El(t,a);Xt(s,l)||(r.uniform1iv(this.addr,l),qt(s,l));for(let f=0;f!==a;++f)t.setTexture2D(e[f]||$m,l[f])}function tM(r,e,t){const s=this.cache,a=e.length,l=El(t,a);Xt(s,l)||(r.uniform1iv(this.addr,l),qt(s,l));for(let f=0;f!==a;++f)t.setTexture3D(e[f]||Zm,l[f])}function nM(r,e,t){const s=this.cache,a=e.length,l=El(t,a);Xt(s,l)||(r.uniform1iv(this.addr,l),qt(s,l));for(let f=0;f!==a;++f)t.setTextureCube(e[f]||Qm,l[f])}function iM(r,e,t){const s=this.cache,a=e.length,l=El(t,a);Xt(s,l)||(r.uniform1iv(this.addr,l),qt(s,l));for(let f=0;f!==a;++f)t.setTexture2DArray(e[f]||Km,l[f])}function rM(r){switch(r){case 5126:return BS;case 35664:return kS;case 35665:return HS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return qS;case 35667:case 35671:return YS;case 35668:case 35672:return jS;case 35669:case 35673:return $S;case 5125:return KS;case 36294:return ZS;case 36295:return QS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.setValue=zS(t.type)}}class oM{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.size=t.size,this.setValue=rM(t.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,f=a.length;l!==f;++l){const c=a[l];c.setValue(e,t[c.id],s)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function $p(r,e){r.seq.push(e),r.map[e.id]=e}function lM(r,e,t){const s=r.name,a=s.length;for(Fc.lastIndex=0;;){const l=Fc.exec(s),f=Fc.lastIndex;let c=l[1];const h=l[2]==="]",p=l[3];if(h&&(c=c|0),p===void 0||p==="["&&f+2===a){$p(t,p===void 0?new sM(c,r,e):new oM(c,r,e));break}else{let x=t.map[c];x===void 0&&(x=new aM(c),$p(t,x)),t=x}}}class fl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),f=e.getUniformLocation(t,l.name);lM(l,f,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=s[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const f=e[a];f.id in t&&s.push(f)}return s}}function Kp(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const uM=37297;let cM=0;function fM(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=a;f<l;f++){const c=f+1;s.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return s.join(`
`)}function hM(r){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(r);let s;switch(e===t?s="":e===ml&&t===pl?s="LinearDisplayP3ToLinearSRGB":e===pl&&t===ml&&(s="LinearSRGBToLinearDisplayP3"),r){case Ni:case yl:return[s,"LinearTransferOETF"];case en:case sf:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function Zp(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+fM(r.getShaderSource(e),f)}else return a}function dM(r,e){const t=hM(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pM(r,e){let t;switch(e){case E0:t="Linear";break;case T0:t="Reinhard";break;case w0:t="OptimizedCineon";break;case A0:t="ACESFilmic";break;case R0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wo).join(`
`)}function gM(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function _M(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),f=l.name;let c=1;l.type===r.FLOAT_MAT2&&(c=2),l.type===r.FLOAT_MAT3&&(c=3),l.type===r.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:r.getAttribLocation(e,f),locationSize:c}}return t}function wo(r){return r!==""}function Qp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(r){return r.replace(vM,yM)}const xM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yM(r,e){let t=st[e];if(t===void 0){const s=xM.get(e);if(s!==void 0)t=st[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(r){return r.replace(SM,MM)}function MM(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function tm(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Em?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Us:case Is:e="ENVMAP_TYPE_CUBE";break;case xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function AM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Tm:e="ENVMAP_BLENDING_MULTIPLY";break;case S0:e="ENVMAP_BLENDING_MIX";break;case M0:e="ENVMAP_BLENDING_ADD";break}return e}function RM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function CM(r,e,t,s){const a=r.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=EM(t),p=TM(t),m=wM(t),x=AM(t),_=RM(t),S=t.isWebGL2?"":mM(t),M=gM(l),E=a.createProgram();let y,v,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wo).join(`
`),y.length>0&&(y+=`
`),v=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wo).join(`
`),v.length>0&&(v+=`
`)):(y=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),v=[S,tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?st.tonemapping_pars_fragment:"",t.toneMapping!==fr?pM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,dM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),f=Qc(f),f=Qp(f,t),f=Jp(f,t),c=Qc(c),c=Qp(c,t),c=Jp(c,t),f=em(f),c=em(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const R=N+y+f,P=N+v+c,b=Kp(a,a.VERTEX_SHADER,R),F=Kp(a,a.FRAGMENT_SHADER,P);a.attachShader(E,b),a.attachShader(E,F),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function z(se){if(r.debug.checkShaderErrors){const oe=a.getProgramInfoLog(E).trim(),le=a.getShaderInfoLog(b).trim(),B=a.getShaderInfoLog(F).trim();let ne=!0,ue=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,E,b,F);else{const ie=Zp(a,b,"vertex"),Y=Zp(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+ie+`
`+Y)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(le===""||B==="")&&(ue=!1);ue&&(se.diagnostics={runnable:ne,programLog:oe,vertexShader:{log:le,prefix:y},fragmentShader:{log:B,prefix:v}})}a.deleteShader(b),a.deleteShader(F),K=new fl(a,E),C=_M(a,E)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(E,uM)),D},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=F,this}let LM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new bM(e),t.set(e,s)),s}}class bM{constructor(e){this.id=LM++,this.code=e,this.usedTimes=0}}function DM(r,e,t,s,a,l,f){const c=new Bm,h=new PM,p=[],m=a.isWebGL2,x=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return C===0?"uv":`uv${C}`}function y(C,D,se,oe,le){const B=oe.fog,ne=le.geometry,ue=C.isMeshStandardMaterial?oe.environment:null,ie=(C.isMeshStandardMaterial?t:e).get(C.envMap||ue),Y=ie&&ie.mapping===xl?ie.image.height:null,Z=M[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const G=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,w=G!==void 0?G.length:0;let O=0;ne.morphAttributes.position!==void 0&&(O=1),ne.morphAttributes.normal!==void 0&&(O=2),ne.morphAttributes.color!==void 0&&(O=3);let ce,fe,ge,Te;if(Z){const Pt=hi[Z];ce=Pt.vertexShader,fe=Pt.fragmentShader}else ce=C.vertexShader,fe=C.fragmentShader,h.update(C),ge=h.getVertexShaderID(C),Te=h.getFragmentShaderID(C);const Fe=r.getRenderTarget(),Re=le.isInstancedMesh===!0,Ie=!!C.map,ct=!!C.matcap,tt=!!ie,j=!!C.aoMap,Yt=!!C.lightMap,He=!!C.bumpMap,Ze=!!C.normalMap,je=!!C.displacementMap,Et=!!C.emissiveMap,it=!!C.metalnessMap,nt=!!C.roughnessMap,dt=C.anisotropy>0,At=C.clearcoat>0,Bt=C.iridescence>0,U=C.sheen>0,A=C.transmission>0,Q=dt&&!!C.anisotropyMap,ye=At&&!!C.clearcoatMap,me=At&&!!C.clearcoatNormalMap,_e=At&&!!C.clearcoatRoughnessMap,Be=Bt&&!!C.iridescenceMap,Me=Bt&&!!C.iridescenceThicknessMap,Ce=U&&!!C.sheenColorMap,$e=U&&!!C.sheenRoughnessMap,ft=!!C.specularMap,xe=!!C.specularColorMap,vt=!!C.specularIntensityMap,Qe=A&&!!C.transmissionMap,Ye=A&&!!C.thicknessMap,Ve=!!C.gradientMap,be=!!C.alphaMap,ot=C.alphaTest>0,H=!!C.alphaHash,we=!!C.extensions,Se=!!ne.attributes.uv1,ae=!!ne.attributes.uv2,Ee=!!ne.attributes.uv3;let Xe=fr;return C.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Xe=r.toneMapping),{isWebGL2:m,shaderID:Z,shaderType:C.type,shaderName:C.name,vertexShader:ce,fragmentShader:fe,defines:C.defines,customVertexShaderID:ge,customFragmentShaderID:Te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,instancing:Re,instancingColor:Re&&le.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Fe===null?r.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Ni,map:Ie,matcap:ct,envMap:tt,envMapMode:tt&&ie.mapping,envMapCubeUVHeight:Y,aoMap:j,lightMap:Yt,bumpMap:He,normalMap:Ze,displacementMap:_&&je,emissiveMap:Et,normalMapObjectSpace:Ze&&C.normalMapType===H0,normalMapTangentSpace:Ze&&C.normalMapType===k0,metalnessMap:it,roughnessMap:nt,anisotropy:dt,anisotropyMap:Q,clearcoat:At,clearcoatMap:ye,clearcoatNormalMap:me,clearcoatRoughnessMap:_e,iridescence:Bt,iridescenceMap:Be,iridescenceThicknessMap:Me,sheen:U,sheenColorMap:Ce,sheenRoughnessMap:$e,specularMap:ft,specularColorMap:xe,specularIntensityMap:vt,transmission:A,transmissionMap:Qe,thicknessMap:Ye,gradientMap:Ve,opaque:C.transparent===!1&&C.blending===bs,alphaMap:be,alphaTest:ot,alphaHash:H,combine:C.combine,mapUv:Ie&&E(C.map.channel),aoMapUv:j&&E(C.aoMap.channel),lightMapUv:Yt&&E(C.lightMap.channel),bumpMapUv:He&&E(C.bumpMap.channel),normalMapUv:Ze&&E(C.normalMap.channel),displacementMapUv:je&&E(C.displacementMap.channel),emissiveMapUv:Et&&E(C.emissiveMap.channel),metalnessMapUv:it&&E(C.metalnessMap.channel),roughnessMapUv:nt&&E(C.roughnessMap.channel),anisotropyMapUv:Q&&E(C.anisotropyMap.channel),clearcoatMapUv:ye&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:me&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:$e&&E(C.sheenRoughnessMap.channel),specularMapUv:ft&&E(C.specularMap.channel),specularColorMapUv:xe&&E(C.specularColorMap.channel),specularIntensityMapUv:vt&&E(C.specularIntensityMap.channel),transmissionMapUv:Qe&&E(C.transmissionMap.channel),thicknessMapUv:Ye&&E(C.thicknessMap.channel),alphaMapUv:be&&E(C.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ze||dt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:ae,vertexUv3s:Ee,pointsUvs:le.isPoints===!0&&!!ne.attributes.uv&&(Ie||be),fog:!!B,useFog:C.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:le.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:O,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&se.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ie&&C.map.isVideoTexture===!0&&yt.getTransfer(C.map.colorSpace)===Lt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Di,flipSided:C.side===Ln,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:we&&C.extensions.derivatives===!0,extensionFragDepth:we&&C.extensions.fragDepth===!0,extensionDrawBuffers:we&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const se in C.defines)D.push(se),D.push(C.defines[se]);return C.isRawShaderMaterial===!1&&(N(D,C),R(D,C),D.push(r.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function N(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function R(C,D){c.disableAll(),D.isWebGL2&&c.enable(0),D.supportsVertexTextures&&c.enable(1),D.instancing&&c.enable(2),D.instancingColor&&c.enable(3),D.matcap&&c.enable(4),D.envMap&&c.enable(5),D.normalMapObjectSpace&&c.enable(6),D.normalMapTangentSpace&&c.enable(7),D.clearcoat&&c.enable(8),D.iridescence&&c.enable(9),D.alphaTest&&c.enable(10),D.vertexColors&&c.enable(11),D.vertexAlphas&&c.enable(12),D.vertexUv1s&&c.enable(13),D.vertexUv2s&&c.enable(14),D.vertexUv3s&&c.enable(15),D.vertexTangents&&c.enable(16),D.anisotropy&&c.enable(17),D.alphaHash&&c.enable(18),C.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.skinning&&c.enable(4),D.morphTargets&&c.enable(5),D.morphNormals&&c.enable(6),D.morphColors&&c.enable(7),D.premultipliedAlpha&&c.enable(8),D.shadowMapEnabled&&c.enable(9),D.useLegacyLights&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),C.push(c.mask)}function P(C){const D=M[C.type];let se;if(D){const oe=hi[D];se=gv.clone(oe.uniforms)}else se=C.uniforms;return se}function b(C,D){let se;for(let oe=0,le=p.length;oe<le;oe++){const B=p[oe];if(B.cacheKey===D){se=B,++se.usedTimes;break}}return se===void 0&&(se=new CM(r,D,C,l),p.push(se)),se}function F(C){if(--C.usedTimes===0){const D=p.indexOf(C);p[D]=p[p.length-1],p.pop(),C.destroy()}}function z(C){h.remove(C)}function K(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:P,acquireProgram:b,releaseProgram:F,releaseShaderCache:z,programs:p,dispose:K}}function UM(){let r=new WeakMap;function e(l){let f=r.get(l);return f===void 0&&(f={},r.set(l,f)),f}function t(l){r.delete(l)}function s(l,f,c){r.get(l)[f]=c}function a(){r=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function IM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function im(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function f(x,_,S,M,E,y){let v=r[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:M,renderOrder:x.renderOrder,z:E,group:y},r[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=M,v.renderOrder=x.renderOrder,v.z=E,v.group=y),e++,v}function c(x,_,S,M,E,y){const v=f(x,_,S,M,E,y);S.transmission>0?s.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(x,_,S,M,E,y){const v=f(x,_,S,M,E,y);S.transmission>0?s.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(x,_){t.length>1&&t.sort(x||IM),s.length>1&&s.sort(_||nm),a.length>1&&a.sort(_||nm)}function m(){for(let x=e,_=r.length;x<_;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:c,unshift:h,finish:m,sort:p}}function NM(){let r=new WeakMap;function e(s,a){const l=r.get(s);let f;return l===void 0?(f=new im,r.set(s,[f])):a>=l.length?(f=new im,l.push(f)):f=l[a],f}function t(){r=new WeakMap}return{get:e,dispose:t}}function FM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new St};break;case"SpotLight":t={position:new ee,direction:new ee,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return r[e.id]=t,t}}}function OM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zM=0;function BM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function kM(r,e){const t=new FM,s=OM(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new ee);const l=new ee,f=new nn,c=new nn;function h(m,x){let _=0,S=0,M=0;for(let oe=0;oe<9;oe++)a.probe[oe].set(0,0,0);let E=0,y=0,v=0,N=0,R=0,P=0,b=0,F=0,z=0,K=0,C=0;m.sort(BM);const D=x===!0?Math.PI:1;for(let oe=0,le=m.length;oe<le;oe++){const B=m[oe],ne=B.color,ue=B.intensity,ie=B.distance,Y=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ne.r*ue*D,S+=ne.g*ue*D,M+=ne.b*ue*D;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(B.sh.coefficients[Z],ue);C++}else if(B.isDirectionalLight){const Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*D),B.castShadow){const G=B.shadow,w=s.get(B);w.shadowBias=G.bias,w.shadowNormalBias=G.normalBias,w.shadowRadius=G.radius,w.shadowMapSize=G.mapSize,a.directionalShadow[E]=w,a.directionalShadowMap[E]=Y,a.directionalShadowMatrix[E]=B.shadow.matrix,P++}a.directional[E]=Z,E++}else if(B.isSpotLight){const Z=t.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(ne).multiplyScalar(ue*D),Z.distance=ie,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,a.spot[v]=Z;const G=B.shadow;if(B.map&&(a.spotLightMap[z]=B.map,z++,G.updateMatrices(B),B.castShadow&&K++),a.spotLightMatrix[v]=G.matrix,B.castShadow){const w=s.get(B);w.shadowBias=G.bias,w.shadowNormalBias=G.normalBias,w.shadowRadius=G.radius,w.shadowMapSize=G.mapSize,a.spotShadow[v]=w,a.spotShadowMap[v]=Y,F++}v++}else if(B.isRectAreaLight){const Z=t.get(B);Z.color.copy(ne).multiplyScalar(ue),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),a.rectArea[N]=Z,N++}else if(B.isPointLight){const Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*D),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const G=B.shadow,w=s.get(B);w.shadowBias=G.bias,w.shadowNormalBias=G.normalBias,w.shadowRadius=G.radius,w.shadowMapSize=G.mapSize,w.shadowCameraNear=G.camera.near,w.shadowCameraFar=G.camera.far,a.pointShadow[y]=w,a.pointShadowMap[y]=Y,a.pointShadowMatrix[y]=B.shadow.matrix,b++}a.point[y]=Z,y++}else if(B.isHemisphereLight){const Z=t.get(B);Z.skyColor.copy(B.color).multiplyScalar(ue*D),Z.groundColor.copy(B.groundColor).multiplyScalar(ue*D),a.hemi[R]=Z,R++}}N>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_FLOAT_1,a.rectAreaLTC2=Ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Ae.LTC_HALF_1,a.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=_,a.ambient[1]=S,a.ambient[2]=M;const se=a.hash;(se.directionalLength!==E||se.pointLength!==y||se.spotLength!==v||se.rectAreaLength!==N||se.hemiLength!==R||se.numDirectionalShadows!==P||se.numPointShadows!==b||se.numSpotShadows!==F||se.numSpotMaps!==z||se.numLightProbes!==C)&&(a.directional.length=E,a.spot.length=v,a.rectArea.length=N,a.point.length=y,a.hemi.length=R,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=b,a.pointShadowMap.length=b,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=b,a.spotLightMatrix.length=F+z-K,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=K,a.numLightProbes=C,se.directionalLength=E,se.pointLength=y,se.spotLength=v,se.rectAreaLength=N,se.hemiLength=R,se.numDirectionalShadows=P,se.numPointShadows=b,se.numSpotShadows=F,se.numSpotMaps=z,se.numLightProbes=C,a.version=zM++)}function p(m,x){let _=0,S=0,M=0,E=0,y=0;const v=x.matrixWorldInverse;for(let N=0,R=m.length;N<R;N++){const P=m[N];if(P.isDirectionalLight){const b=a.directional[_];b.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(v),_++}else if(P.isSpotLight){const b=a.spot[M];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(v),M++}else if(P.isRectAreaLight){const b=a.rectArea[E];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(v),c.identity(),f.copy(P.matrixWorld),f.premultiply(v),c.extractRotation(f),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const b=a.point[S];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(v),S++}else if(P.isHemisphereLight){const b=a.hemi[y];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(v),y++}}}return{setup:h,setupView:p,state:a}}function rm(r,e){const t=new kM(r,e),s=[],a=[];function l(){s.length=0,a.length=0}function f(x){s.push(x)}function c(x){a.push(x)}function h(x){t.setup(s,x)}function p(x){t.setupView(s,x)}return{init:l,state:{lightsArray:s,shadowsArray:a,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:c}}function HM(r,e){let t=new WeakMap;function s(l,f=0){const c=t.get(l);let h;return c===void 0?(h=new rm(r,e),t.set(l,[h])):f>=c.length?(h=new rm(r,e),c.push(h)):h=c[f],h}function a(){t=new WeakMap}return{get:s,dispose:a}}class VM extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
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
}`;function qM(r,e,t){let s=new Ym;const a=new Mt,l=new Mt,f=new tn,c=new VM({depthPacking:B0}),h=new GM,p={},m=t.maxTextureSize,x={[dr]:Ln,[Ln]:dr,[Di]:Di},_=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:WM,fragmentShader:XM}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Wr;M.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ii(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Em;let v=this.type;this.render=function(b,F,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||b.length===0)return;const K=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),se=r.state;se.setBlending(cr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const oe=v!==bi&&this.type===bi,le=v===bi&&this.type!==bi;for(let B=0,ne=b.length;B<ne;B++){const ue=b[B],ie=ue.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;a.copy(ie.mapSize);const Y=ie.getFrameExtents();if(a.multiply(Y),l.copy(ie.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/Y.x),a.x=l.x*Y.x,ie.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/Y.y),a.y=l.y*Y.y,ie.mapSize.y=l.y)),ie.map===null||oe===!0||le===!0){const G=this.type!==bi?{minFilter:hn,magFilter:hn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Gr(a.x,a.y,G),ie.map.texture.name=ue.name+".shadowMap",ie.camera.updateProjectionMatrix()}r.setRenderTarget(ie.map),r.clear();const Z=ie.getViewportCount();for(let G=0;G<Z;G++){const w=ie.getViewport(G);f.set(l.x*w.x,l.y*w.y,l.x*w.z,l.y*w.w),se.viewport(f),ie.updateMatrices(ue,G),s=ie.getFrustum(),P(F,z,ie.camera,ue,this.type)}ie.isPointLightShadow!==!0&&this.type===bi&&N(ie,z),ie.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(K,C,D)};function N(b,F){const z=e.update(E);_.defines.VSM_SAMPLES!==b.blurSamples&&(_.defines.VSM_SAMPLES=b.blurSamples,S.defines.VSM_SAMPLES=b.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gr(a.x,a.y)),_.uniforms.shadow_pass.value=b.map.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(F,null,z,_,E,null),S.uniforms.shadow_pass.value=b.mapPass.texture,S.uniforms.resolution.value=b.mapSize,S.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(F,null,z,S,E,null)}function R(b,F,z,K){let C=null;const D=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=z.isPointLight===!0?h:c,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const se=C.uuid,oe=F.uuid;let le=p[se];le===void 0&&(le={},p[se]=le);let B=le[oe];B===void 0&&(B=C.clone(),le[oe]=B),C=B}if(C.visible=F.visible,C.wireframe=F.wireframe,K===bi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:x[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const se=r.properties.get(C);se.light=z}return C}function P(b,F,z,K,C){if(b.visible===!1)return;if(b.layers.test(F.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===bi)&&(!b.frustumCulled||s.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);const oe=e.update(b),le=b.material;if(Array.isArray(le)){const B=oe.groups;for(let ne=0,ue=B.length;ne<ue;ne++){const ie=B[ne],Y=le[ie.materialIndex];if(Y&&Y.visible){const Z=R(b,Y,K,C);r.renderBufferDirect(z,null,oe,Z,b,ie)}}}else if(le.visible){const B=R(b,le,K,C);r.renderBufferDirect(z,null,oe,B,b,null)}}const se=b.children;for(let oe=0,le=se.length;oe<le;oe++)P(se[oe],F,z,K,C)}}function YM(r,e,t){const s=t.isWebGL2;function a(){let H=!1;const we=new tn;let Se=null;const ae=new tn(0,0,0,0);return{setMask:function(Ee){Se!==Ee&&!H&&(r.colorMask(Ee,Ee,Ee,Ee),Se=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,Xe,ht,Pt,dn){dn===!0&&(Ee*=Pt,Xe*=Pt,ht*=Pt),we.set(Ee,Xe,ht,Pt),ae.equals(we)===!1&&(r.clearColor(Ee,Xe,ht,Pt),ae.copy(we))},reset:function(){H=!1,Se=null,ae.set(-1,0,0,0)}}}function l(){let H=!1,we=null,Se=null,ae=null;return{setTest:function(Ee){Ee?Ie(r.DEPTH_TEST):ct(r.DEPTH_TEST)},setMask:function(Ee){we!==Ee&&!H&&(r.depthMask(Ee),we=Ee)},setFunc:function(Ee){if(Se!==Ee){switch(Ee){case p0:r.depthFunc(r.NEVER);break;case m0:r.depthFunc(r.ALWAYS);break;case g0:r.depthFunc(r.LESS);break;case hl:r.depthFunc(r.LEQUAL);break;case _0:r.depthFunc(r.EQUAL);break;case v0:r.depthFunc(r.GEQUAL);break;case x0:r.depthFunc(r.GREATER);break;case y0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Se=Ee}},setLocked:function(Ee){H=Ee},setClear:function(Ee){ae!==Ee&&(r.clearDepth(Ee),ae=Ee)},reset:function(){H=!1,we=null,Se=null,ae=null}}}function f(){let H=!1,we=null,Se=null,ae=null,Ee=null,Xe=null,ht=null,Pt=null,dn=null;return{setTest:function(gt){H||(gt?Ie(r.STENCIL_TEST):ct(r.STENCIL_TEST))},setMask:function(gt){we!==gt&&!H&&(r.stencilMask(gt),we=gt)},setFunc:function(gt,Vt,rn){(Se!==gt||ae!==Vt||Ee!==rn)&&(r.stencilFunc(gt,Vt,rn),Se=gt,ae=Vt,Ee=rn)},setOp:function(gt,Vt,rn){(Xe!==gt||ht!==Vt||Pt!==rn)&&(r.stencilOp(gt,Vt,rn),Xe=gt,ht=Vt,Pt=rn)},setLocked:function(gt){H=gt},setClear:function(gt){dn!==gt&&(r.clearStencil(gt),dn=gt)},reset:function(){H=!1,we=null,Se=null,ae=null,Ee=null,Xe=null,ht=null,Pt=null,dn=null}}}const c=new a,h=new l,p=new f,m=new WeakMap,x=new WeakMap;let _={},S={},M=new WeakMap,E=[],y=null,v=!1,N=null,R=null,P=null,b=null,F=null,z=null,K=null,C=new St(0,0,0),D=0,se=!1,oe=null,le=null,B=null,ne=null,ue=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=Z>=2);let w=null,O={};const ce=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),ge=new tn().fromArray(ce),Te=new tn().fromArray(fe);function Fe(H,we,Se,ae){const Ee=new Uint8Array(4),Xe=r.createTexture();r.bindTexture(H,Xe),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<Se;ht++)s&&(H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY)?r.texImage3D(we,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(we+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return Xe}const Re={};Re[r.TEXTURE_2D]=Fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Re[r.TEXTURE_CUBE_MAP]=Fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Re[r.TEXTURE_2D_ARRAY]=Fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Re[r.TEXTURE_3D]=Fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Ie(r.DEPTH_TEST),h.setFunc(hl),it(!1),nt(Bd),Ie(r.CULL_FACE),je(cr);function Ie(H){_[H]!==!0&&(r.enable(H),_[H]=!0)}function ct(H){_[H]!==!1&&(r.disable(H),_[H]=!1)}function tt(H,we){return S[H]!==we?(r.bindFramebuffer(H,we),S[H]=we,s&&(H===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=we),H===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=we)),!0):!1}function j(H,we){let Se=E,ae=!1;if(H)if(Se=M.get(we),Se===void 0&&(Se=[],M.set(we,Se)),H.isWebGLMultipleRenderTargets){const Ee=H.texture;if(Se.length!==Ee.length||Se[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,ht=Ee.length;Xe<ht;Xe++)Se[Xe]=r.COLOR_ATTACHMENT0+Xe;Se.length=Ee.length,ae=!0}}else Se[0]!==r.COLOR_ATTACHMENT0&&(Se[0]=r.COLOR_ATTACHMENT0,ae=!0);else Se[0]!==r.BACK&&(Se[0]=r.BACK,ae=!0);ae&&(t.isWebGL2?r.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function Yt(H){return y!==H?(r.useProgram(H),y=H,!0):!1}const He={[Or]:r.FUNC_ADD,[J_]:r.FUNC_SUBTRACT,[e0]:r.FUNC_REVERSE_SUBTRACT};if(s)He[Gd]=r.MIN,He[Wd]=r.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(He[Gd]=H.MIN_EXT,He[Wd]=H.MAX_EXT)}const Ze={[t0]:r.ZERO,[n0]:r.ONE,[i0]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[u0]:r.SRC_ALPHA_SATURATE,[a0]:r.DST_COLOR,[s0]:r.DST_ALPHA,[r0]:r.ONE_MINUS_SRC_COLOR,[Wc]:r.ONE_MINUS_SRC_ALPHA,[l0]:r.ONE_MINUS_DST_COLOR,[o0]:r.ONE_MINUS_DST_ALPHA,[c0]:r.CONSTANT_COLOR,[f0]:r.ONE_MINUS_CONSTANT_COLOR,[h0]:r.CONSTANT_ALPHA,[d0]:r.ONE_MINUS_CONSTANT_ALPHA};function je(H,we,Se,ae,Ee,Xe,ht,Pt,dn,gt){if(H===cr){v===!0&&(ct(r.BLEND),v=!1);return}if(v===!1&&(Ie(r.BLEND),v=!0),H!==Q_){if(H!==N||gt!==se){if((R!==Or||F!==Or)&&(r.blendEquation(r.FUNC_ADD),R=Or,F=Or),gt)switch(H){case bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.ONE,r.ONE);break;case Hd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Hd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,b=null,z=null,K=null,C.set(0,0,0),D=0,N=H,se=gt}return}Ee=Ee||we,Xe=Xe||Se,ht=ht||ae,(we!==R||Ee!==F)&&(r.blendEquationSeparate(He[we],He[Ee]),R=we,F=Ee),(Se!==P||ae!==b||Xe!==z||ht!==K)&&(r.blendFuncSeparate(Ze[Se],Ze[ae],Ze[Xe],Ze[ht]),P=Se,b=ae,z=Xe,K=ht),(Pt.equals(C)===!1||dn!==D)&&(r.blendColor(Pt.r,Pt.g,Pt.b,dn),C.copy(Pt),D=dn),N=H,se=!1}function Et(H,we){H.side===Di?ct(r.CULL_FACE):Ie(r.CULL_FACE);let Se=H.side===Ln;we&&(Se=!Se),it(Se),H.blending===bs&&H.transparent===!1?je(cr):je(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),c.setMask(H.colorWrite);const ae=H.stencilWrite;p.setTest(ae),ae&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),At(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ie(r.SAMPLE_ALPHA_TO_COVERAGE):ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function it(H){oe!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),oe=H)}function nt(H){H!==$_?(Ie(r.CULL_FACE),H!==le&&(H===Bd?r.cullFace(r.BACK):H===K_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ct(r.CULL_FACE),le=H}function dt(H){H!==B&&(Y&&r.lineWidth(H),B=H)}function At(H,we,Se){H?(Ie(r.POLYGON_OFFSET_FILL),(ne!==we||ue!==Se)&&(r.polygonOffset(we,Se),ne=we,ue=Se)):ct(r.POLYGON_OFFSET_FILL)}function Bt(H){H?Ie(r.SCISSOR_TEST):ct(r.SCISSOR_TEST)}function U(H){H===void 0&&(H=r.TEXTURE0+ie-1),w!==H&&(r.activeTexture(H),w=H)}function A(H,we,Se){Se===void 0&&(w===null?Se=r.TEXTURE0+ie-1:Se=w);let ae=O[Se];ae===void 0&&(ae={type:void 0,texture:void 0},O[Se]=ae),(ae.type!==H||ae.texture!==we)&&(w!==Se&&(r.activeTexture(Se),w=Se),r.bindTexture(H,we||Re[H]),ae.type=H,ae.texture=we)}function Q(){const H=O[w];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ye(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(H){ge.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),ge.copy(H))}function Ye(H){Te.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function Ve(H,we){let Se=x.get(we);Se===void 0&&(Se=new WeakMap,x.set(we,Se));let ae=Se.get(H);ae===void 0&&(ae=r.getUniformBlockIndex(we,H.name),Se.set(H,ae))}function be(H,we){const ae=x.get(we).get(H);m.get(we)!==ae&&(r.uniformBlockBinding(we,ae,H.__bindingPointIndex),m.set(we,ae))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),s===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},w=null,O={},S={},M=new WeakMap,E=[],y=null,v=!1,N=null,R=null,P=null,b=null,F=null,z=null,K=null,C=new St(0,0,0),D=0,se=!1,oe=null,le=null,B=null,ne=null,ue=null,ge.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Ie,disable:ct,bindFramebuffer:tt,drawBuffers:j,useProgram:Yt,setBlending:je,setMaterial:Et,setFlipSided:it,setCullFace:nt,setLineWidth:dt,setPolygonOffset:At,setScissorTest:Bt,activeTexture:U,bindTexture:A,unbindTexture:Q,compressedTexImage2D:ye,compressedTexImage3D:me,texImage2D:xe,texImage3D:vt,updateUBOMapping:Ve,uniformBlockBinding:be,texStorage2D:$e,texStorage3D:ft,texSubImage2D:_e,texSubImage3D:Be,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ce,scissor:Qe,viewport:Ye,reset:ot}}function jM(r,e,t,s,a,l,f){const c=a.isWebGL2,h=a.maxTextures,p=a.maxCubemapSize,m=a.maxTextureSize,x=a.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let E;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(U,A){return v?new OffscreenCanvas(U,A):_l("canvas")}function R(U,A,Q,ye){let me=1;if((U.width>ye||U.height>ye)&&(me=ye/Math.max(U.width,U.height)),me<1||A===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const _e=A?Zc:Math.floor,Be=_e(me*U.width),Me=_e(me*U.height);E===void 0&&(E=N(Be,Me));const Ce=Q?N(Be,Me):E;return Ce.width=Be,Ce.height=Me,Ce.getContext("2d").drawImage(U,0,0,Be,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Be+"x"+Me+")."),Ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function P(U){return yp(U.width)&&yp(U.height)}function b(U){return c?!1:U.wrapS!==ri||U.wrapT!==ri||U.minFilter!==hn&&U.minFilter!==qn}function F(U,A){return U.generateMipmaps&&A&&U.minFilter!==hn&&U.minFilter!==qn}function z(U){r.generateMipmap(U)}function K(U,A,Q,ye,me=!1){if(c===!1)return A;if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let _e=A;if(A===r.RED&&(Q===r.FLOAT&&(_e=r.R32F),Q===r.HALF_FLOAT&&(_e=r.R16F),Q===r.UNSIGNED_BYTE&&(_e=r.R8)),A===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(_e=r.R8UI),Q===r.UNSIGNED_SHORT&&(_e=r.R16UI),Q===r.UNSIGNED_INT&&(_e=r.R32UI),Q===r.BYTE&&(_e=r.R8I),Q===r.SHORT&&(_e=r.R16I),Q===r.INT&&(_e=r.R32I)),A===r.RG&&(Q===r.FLOAT&&(_e=r.RG32F),Q===r.HALF_FLOAT&&(_e=r.RG16F),Q===r.UNSIGNED_BYTE&&(_e=r.RG8)),A===r.RGBA){const Be=me?dl:yt.getTransfer(ye);Q===r.FLOAT&&(_e=r.RGBA32F),Q===r.HALF_FLOAT&&(_e=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(_e=Be===Lt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(_e=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(_e=r.RGB5_A1)}return(_e===r.R16F||_e===r.R32F||_e===r.RG16F||_e===r.RG32F||_e===r.RGBA16F||_e===r.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function C(U,A,Q){return F(U,Q)===!0||U.isFramebufferTexture&&U.minFilter!==hn&&U.minFilter!==qn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function D(U){return U===hn||U===Xd||U===ac?r.NEAREST:r.LINEAR}function se(U){const A=U.target;A.removeEventListener("dispose",se),le(A),A.isVideoTexture&&M.delete(A)}function oe(U){const A=U.target;A.removeEventListener("dispose",oe),ne(A)}function le(U){const A=s.get(U);if(A.__webglInit===void 0)return;const Q=U.source,ye=y.get(Q);if(ye){const me=ye[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&B(U),Object.keys(ye).length===0&&y.delete(Q)}s.remove(U)}function B(U){const A=s.get(U);r.deleteTexture(A.__webglTexture);const Q=U.source,ye=y.get(Q);delete ye[A.__cacheKey],f.memory.textures--}function ne(U){const A=U.texture,Q=s.get(U),ye=s.get(A);if(ye.__webglTexture!==void 0&&(r.deleteTexture(ye.__webglTexture),f.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(Q.__webglFramebuffer[me]))for(let _e=0;_e<Q.__webglFramebuffer[me].length;_e++)r.deleteFramebuffer(Q.__webglFramebuffer[me][_e]);else r.deleteFramebuffer(Q.__webglFramebuffer[me]);Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer[me])}else{if(Array.isArray(Q.__webglFramebuffer))for(let me=0;me<Q.__webglFramebuffer.length;me++)r.deleteFramebuffer(Q.__webglFramebuffer[me]);else r.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let me=0;me<Q.__webglColorRenderbuffer.length;me++)Q.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(Q.__webglColorRenderbuffer[me]);Q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let me=0,_e=A.length;me<_e;me++){const Be=s.get(A[me]);Be.__webglTexture&&(r.deleteTexture(Be.__webglTexture),f.memory.textures--),s.remove(A[me])}s.remove(A),s.remove(U)}let ue=0;function ie(){ue=0}function Y(){const U=ue;return U>=h&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+h),ue+=1,U}function Z(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function G(U,A){const Q=s.get(U);if(U.isVideoTexture&&At(U),U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){const ye=U.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(Q,U,A);return}}t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+A)}function w(U,A){const Q=s.get(U);if(U.version>0&&Q.__version!==U.version){Ie(Q,U,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+A)}function O(U,A){const Q=s.get(U);if(U.version>0&&Q.__version!==U.version){Ie(Q,U,A);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+A)}function ce(U,A){const Q=s.get(U);if(U.version>0&&Q.__version!==U.version){ct(Q,U,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+A)}const fe={[Yc]:r.REPEAT,[ri]:r.CLAMP_TO_EDGE,[jc]:r.MIRRORED_REPEAT},ge={[hn]:r.NEAREST,[Xd]:r.NEAREST_MIPMAP_NEAREST,[ac]:r.NEAREST_MIPMAP_LINEAR,[qn]:r.LINEAR,[C0]:r.LINEAR_MIPMAP_NEAREST,[Co]:r.LINEAR_MIPMAP_LINEAR},Te={[V0]:r.NEVER,[$0]:r.ALWAYS,[G0]:r.LESS,[X0]:r.LEQUAL,[W0]:r.EQUAL,[j0]:r.GEQUAL,[q0]:r.GREATER,[Y0]:r.NOTEQUAL};function Fe(U,A,Q){if(Q?(r.texParameteri(U,r.TEXTURE_WRAP_S,fe[A.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,fe[A.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,fe[A.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,ge[A.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,ge[A.minFilter])):(r.texParameteri(U,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(U,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(A.wrapS!==ri||A.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(U,r.TEXTURE_MAG_FILTER,D(A.magFilter)),r.texParameteri(U,r.TEXTURE_MIN_FILTER,D(A.minFilter)),A.minFilter!==hn&&A.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===hn||A.minFilter!==ac&&A.minFilter!==Co||A.type===ur&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===Lo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||s.get(A).__currentAnisotropy)&&(r.texParameterf(U,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy)}}function Re(U,A){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",se));const ye=A.source;let me=y.get(ye);me===void 0&&(me={},y.set(ye,me));const _e=Z(A);if(_e!==U.__cacheKey){me[_e]===void 0&&(me[_e]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),me[_e].usedTimes++;const Be=me[U.__cacheKey];Be!==void 0&&(me[U.__cacheKey].usedTimes--,Be.usedTimes===0&&B(A)),U.__cacheKey=_e,U.__webglTexture=me[_e].texture}return Q}function Ie(U,A,Q){let ye=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ye=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ye=r.TEXTURE_3D);const me=Re(U,A),_e=A.source;t.bindTexture(ye,U.__webglTexture,r.TEXTURE0+Q);const Be=s.get(_e);if(_e.version!==Be.__version||me===!0){t.activeTexture(r.TEXTURE0+Q);const Me=yt.getPrimaries(yt.workingColorSpace),Ce=A.colorSpace===jn?null:yt.getPrimaries(A.colorSpace),$e=A.colorSpace===jn||Me===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const ft=b(A)&&P(A.image)===!1;let xe=R(A.image,ft,!1,m);xe=Bt(A,xe);const vt=P(xe)||c,Qe=l.convert(A.format,A.colorSpace);let Ye=l.convert(A.type),Ve=K(A.internalFormat,Qe,Ye,A.colorSpace,A.isVideoTexture);Fe(ye,A,vt);let be;const ot=A.mipmaps,H=c&&A.isVideoTexture!==!0,we=Be.__version===void 0||me===!0,Se=C(A,xe,vt);if(A.isDepthTexture)Ve=r.DEPTH_COMPONENT,c?A.type===ur?Ve=r.DEPTH_COMPONENT32F:A.type===lr?Ve=r.DEPTH_COMPONENT24:A.type===Br?Ve=r.DEPTH24_STENCIL8:Ve=r.DEPTH_COMPONENT16:A.type===ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===kr&&Ve===r.DEPTH_COMPONENT&&A.type!==rf&&A.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=lr,Ye=l.convert(A.type)),A.format===Ns&&Ve===r.DEPTH_COMPONENT&&(Ve=r.DEPTH_STENCIL,A.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Br,Ye=l.convert(A.type))),we&&(H?t.texStorage2D(r.TEXTURE_2D,1,Ve,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Qe,Ye,null));else if(A.isDataTexture)if(ot.length>0&&vt){H&&we&&t.texStorage2D(r.TEXTURE_2D,Se,Ve,ot[0].width,ot[0].height);for(let ae=0,Ee=ot.length;ae<Ee;ae++)be=ot[ae],H?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,be.width,be.height,Qe,Ye,be.data):t.texImage2D(r.TEXTURE_2D,ae,Ve,be.width,be.height,0,Qe,Ye,be.data);A.generateMipmaps=!1}else H?(we&&t.texStorage2D(r.TEXTURE_2D,Se,Ve,xe.width,xe.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe.width,xe.height,Qe,Ye,xe.data)):t.texImage2D(r.TEXTURE_2D,0,Ve,xe.width,xe.height,0,Qe,Ye,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){H&&we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Ve,ot[0].width,ot[0].height,xe.depth);for(let ae=0,Ee=ot.length;ae<Ee;ae++)be=ot[ae],A.format!==si?Qe!==null?H?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,xe.depth,Qe,be.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Ve,be.width,be.height,xe.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,xe.depth,Qe,Ye,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Ve,be.width,be.height,xe.depth,0,Qe,Ye,be.data)}else{H&&we&&t.texStorage2D(r.TEXTURE_2D,Se,Ve,ot[0].width,ot[0].height);for(let ae=0,Ee=ot.length;ae<Ee;ae++)be=ot[ae],A.format!==si?Qe!==null?H?t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,be.width,be.height,Qe,be.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Ve,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,be.width,be.height,Qe,Ye,be.data):t.texImage2D(r.TEXTURE_2D,ae,Ve,be.width,be.height,0,Qe,Ye,be.data)}else if(A.isDataArrayTexture)H?(we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,Ve,xe.width,xe.height,xe.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Qe,Ye,xe.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,xe.width,xe.height,xe.depth,0,Qe,Ye,xe.data);else if(A.isData3DTexture)H?(we&&t.texStorage3D(r.TEXTURE_3D,Se,Ve,xe.width,xe.height,xe.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Qe,Ye,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Ve,xe.width,xe.height,xe.depth,0,Qe,Ye,xe.data);else if(A.isFramebufferTexture){if(we)if(H)t.texStorage2D(r.TEXTURE_2D,Se,Ve,xe.width,xe.height);else{let ae=xe.width,Ee=xe.height;for(let Xe=0;Xe<Se;Xe++)t.texImage2D(r.TEXTURE_2D,Xe,Ve,ae,Ee,0,Qe,Ye,null),ae>>=1,Ee>>=1}}else if(ot.length>0&&vt){H&&we&&t.texStorage2D(r.TEXTURE_2D,Se,Ve,ot[0].width,ot[0].height);for(let ae=0,Ee=ot.length;ae<Ee;ae++)be=ot[ae],H?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Qe,Ye,be):t.texImage2D(r.TEXTURE_2D,ae,Ve,Qe,Ye,be);A.generateMipmaps=!1}else H?(we&&t.texStorage2D(r.TEXTURE_2D,Se,Ve,xe.width,xe.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Qe,Ye,xe)):t.texImage2D(r.TEXTURE_2D,0,Ve,Qe,Ye,xe);F(A,vt)&&z(ye),Be.__version=_e.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ct(U,A,Q){if(A.image.length!==6)return;const ye=Re(U,A),me=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Q);const _e=s.get(me);if(me.version!==_e.__version||ye===!0){t.activeTexture(r.TEXTURE0+Q);const Be=yt.getPrimaries(yt.workingColorSpace),Me=A.colorSpace===jn?null:yt.getPrimaries(A.colorSpace),Ce=A.colorSpace===jn||Be===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,ft=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!$e&&!ft?xe[ae]=R(A.image[ae],!1,!0,p):xe[ae]=ft?A.image[ae].image:A.image[ae],xe[ae]=Bt(A,xe[ae]);const vt=xe[0],Qe=P(vt)||c,Ye=l.convert(A.format,A.colorSpace),Ve=l.convert(A.type),be=K(A.internalFormat,Ye,Ve,A.colorSpace),ot=c&&A.isVideoTexture!==!0,H=_e.__version===void 0||ye===!0;let we=C(A,vt,Qe);Fe(r.TEXTURE_CUBE_MAP,A,Qe);let Se;if($e){ot&&H&&t.texStorage2D(r.TEXTURE_CUBE_MAP,we,be,vt.width,vt.height);for(let ae=0;ae<6;ae++){Se=xe[ae].mipmaps;for(let Ee=0;Ee<Se.length;Ee++){const Xe=Se[Ee];A.format!==si?Ye!==null?ot?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,Xe.width,Xe.height,Ye,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,be,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,Xe.width,Xe.height,Ye,Ve,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,be,Xe.width,Xe.height,0,Ye,Ve,Xe.data)}}}else{Se=A.mipmaps,ot&&H&&(Se.length>0&&we++,t.texStorage2D(r.TEXTURE_CUBE_MAP,we,be,xe[0].width,xe[0].height));for(let ae=0;ae<6;ae++)if(ft){ot?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Ye,Ve,xe[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,be,xe[ae].width,xe[ae].height,0,Ye,Ve,xe[ae].data);for(let Ee=0;Ee<Se.length;Ee++){const ht=Se[Ee].image[ae].image;ot?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,ht.width,ht.height,Ye,Ve,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,be,ht.width,ht.height,0,Ye,Ve,ht.data)}}else{ot?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ye,Ve,xe[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,be,Ye,Ve,xe[ae]);for(let Ee=0;Ee<Se.length;Ee++){const Xe=Se[Ee];ot?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,Ye,Ve,Xe.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,be,Ye,Ve,Xe.image[ae])}}}F(A,Qe)&&z(r.TEXTURE_CUBE_MAP),_e.__version=me.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function tt(U,A,Q,ye,me,_e){const Be=l.convert(Q.format,Q.colorSpace),Me=l.convert(Q.type),Ce=K(Q.internalFormat,Be,Me,Q.colorSpace);if(!s.get(A).__hasExternalTextures){const ft=Math.max(1,A.width>>_e),xe=Math.max(1,A.height>>_e);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?t.texImage3D(me,_e,Ce,ft,xe,A.depth,0,Be,Me,null):t.texImage2D(me,_e,Ce,ft,xe,0,Be,Me,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),dt(A)?_.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,me,s.get(Q).__webglTexture,0,nt(A)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ye,me,s.get(Q).__webglTexture,_e),t.bindFramebuffer(r.FRAMEBUFFER,null)}function j(U,A,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),A.depthBuffer&&!A.stencilBuffer){let ye=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Q||dt(A)){const me=A.depthTexture;me&&me.isDepthTexture&&(me.type===ur?ye=r.DEPTH_COMPONENT32F:me.type===lr&&(ye=r.DEPTH_COMPONENT24));const _e=nt(A);dt(A)?_.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,ye,A.width,A.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,ye,A.width,A.height)}else r.renderbufferStorage(r.RENDERBUFFER,ye,A.width,A.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,U)}else if(A.depthBuffer&&A.stencilBuffer){const ye=nt(A);Q&&dt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,r.DEPTH24_STENCIL8,A.width,A.height):dt(A)?_.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,r.DEPTH24_STENCIL8,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,U)}else{const ye=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let me=0;me<ye.length;me++){const _e=ye[me],Be=l.convert(_e.format,_e.colorSpace),Me=l.convert(_e.type),Ce=K(_e.internalFormat,Be,Me,_e.colorSpace),$e=nt(A);Q&&dt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ce,A.width,A.height):dt(A)?_.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,Ce,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const ye=s.get(A.depthTexture).__webglTexture,me=nt(A);if(A.depthTexture.format===kr)dt(A)?_.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(A.depthTexture.format===Ns)dt(A)?_.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function He(U){const A=s.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Yt(A.__webglFramebuffer,U)}else if(Q){A.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ye]),A.__webglDepthbuffer[ye]=r.createRenderbuffer(),j(A.__webglDepthbuffer[ye],U,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),j(A.__webglDepthbuffer,U,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(U,A,Q){const ye=s.get(U);A!==void 0&&tt(ye.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&He(U)}function je(U){const A=U.texture,Q=s.get(U),ye=s.get(A);U.addEventListener("dispose",oe),U.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture()),ye.__version=A.version,f.memory.textures++);const me=U.isWebGLCubeRenderTarget===!0,_e=U.isWebGLMultipleRenderTargets===!0,Be=P(U)||c;if(me){Q.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(c&&A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Me]=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)Q.__webglFramebuffer[Me][Ce]=r.createFramebuffer()}else Q.__webglFramebuffer[Me]=r.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Me=0;Me<A.mipmaps.length;Me++)Q.__webglFramebuffer[Me]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(_e)if(a.drawBuffers){const Me=U.texture;for(let Ce=0,$e=Me.length;Ce<$e;Ce++){const ft=s.get(Me[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&U.samples>0&&dt(U)===!1){const Me=_e?A:[A];Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Me.length;Ce++){const $e=Me[Ce];Q.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const ft=l.convert($e.format,$e.colorSpace),xe=l.convert($e.type),vt=K($e.internalFormat,ft,xe,$e.colorSpace,U.isXRRenderTarget===!0),Qe=nt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,vt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),j(Q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,A,Be);for(let Me=0;Me<6;Me++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)tt(Q.__webglFramebuffer[Me][Ce],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ce);else tt(Q.__webglFramebuffer[Me],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);F(A,Be)&&z(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const Me=U.texture;for(let Ce=0,$e=Me.length;Ce<$e;Ce++){const ft=Me[Ce],xe=s.get(ft);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),Fe(r.TEXTURE_2D,ft,Be),tt(Q.__webglFramebuffer,U,ft,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),F(ft,Be)&&z(r.TEXTURE_2D)}t.unbindTexture()}else{let Me=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(c?Me=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,ye.__webglTexture),Fe(Me,A,Be),c&&A.mipmaps&&A.mipmaps.length>0)for(let Ce=0;Ce<A.mipmaps.length;Ce++)tt(Q.__webglFramebuffer[Ce],U,A,r.COLOR_ATTACHMENT0,Me,Ce);else tt(Q.__webglFramebuffer,U,A,r.COLOR_ATTACHMENT0,Me,0);F(A,Be)&&z(Me),t.unbindTexture()}U.depthBuffer&&He(U)}function Et(U){const A=P(U)||c,Q=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ye=0,me=Q.length;ye<me;ye++){const _e=Q[ye];if(F(_e,A)){const Be=U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Me=s.get(_e).__webglTexture;t.bindTexture(Be,Me),z(Be),t.unbindTexture()}}}function it(U){if(c&&U.samples>0&&dt(U)===!1){const A=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],Q=U.width,ye=U.height;let me=r.COLOR_BUFFER_BIT;const _e=[],Be=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=s.get(U),Ce=U.isWebGLMultipleRenderTargets===!0;if(Ce)for(let $e=0;$e<A.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let $e=0;$e<A.length;$e++){_e.push(r.COLOR_ATTACHMENT0+$e),U.depthBuffer&&_e.push(Be);const ft=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(ft===!1&&(U.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[$e]),ft===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Be]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Be])),Ce){const xe=s.get(A[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,Q,ye,0,0,Q,ye,me,r.NEAREST),S&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let $e=0;$e<A.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Me.__webglColorRenderbuffer[$e]);const ft=s.get(A[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function nt(U){return Math.min(x,U.samples)}function dt(U){const A=s.get(U);return c&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function At(U){const A=f.render.frame;M.get(U)!==A&&(M.set(U,A),U.update())}function Bt(U,A){const Q=U.colorSpace,ye=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===$c||Q!==Ni&&Q!==jn&&(yt.getTransfer(Q)===Lt?c===!1?e.has("EXT_sRGB")===!0&&ye===si?(U.format=$c,U.minFilter=qn,U.generateMipmaps=!1):A=Im.sRGBToLinear(A):(ye!==si||me!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}this.allocateTextureUnit=Y,this.resetTextureUnits=ie,this.setTexture2D=G,this.setTexture2DArray=w,this.setTexture3D=O,this.setTextureCube=ce,this.rebindTextures=Ze,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=dt}function $M(r,e,t){const s=t.isWebGL2;function a(l,f=jn){let c;const h=yt.getTransfer(f);if(l===hr)return r.UNSIGNED_BYTE;if(l===Rm)return r.UNSIGNED_SHORT_4_4_4_4;if(l===Cm)return r.UNSIGNED_SHORT_5_5_5_1;if(l===L0)return r.BYTE;if(l===P0)return r.SHORT;if(l===rf)return r.UNSIGNED_SHORT;if(l===Am)return r.INT;if(l===lr)return r.UNSIGNED_INT;if(l===ur)return r.FLOAT;if(l===Lo)return s?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===b0)return r.ALPHA;if(l===si)return r.RGBA;if(l===D0)return r.LUMINANCE;if(l===U0)return r.LUMINANCE_ALPHA;if(l===kr)return r.DEPTH_COMPONENT;if(l===Ns)return r.DEPTH_STENCIL;if(l===$c)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===I0)return r.RED;if(l===Lm)return r.RED_INTEGER;if(l===N0)return r.RG;if(l===Pm)return r.RG_INTEGER;if(l===bm)return r.RGBA_INTEGER;if(l===lc||l===uc||l===cc||l===fc)if(h===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===cc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===qd||l===Yd||l===jd||l===$d)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===qd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===$d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===F0)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Kd||l===Zd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Kd)return h===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Zd)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Qd||l===Jd||l===ep||l===tp||l===np||l===ip||l===rp||l===sp||l===op||l===ap||l===lp||l===up||l===cp||l===fp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===Qd)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Jd)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===ep)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===tp)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===np)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===ip)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===rp)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===sp)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===op)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===ap)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===lp)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===up)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===cp)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===fp)return h===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===hc||l===hp||l===dp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===hc)return h===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===O0||l===pp||l===mp||l===gp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===hc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Br?s?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[l]!==void 0?r[l]:null}return{convert:a}}class KM extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,f=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,s),v=this._getHandJoint(p,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const m=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=m.position.distanceTo(x.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new cl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class QM extends Pn{constructor(e,t,s,a,l,f,c,h,p,m){if(m=m!==void 0?m:kr,m!==kr&&m!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===kr&&(s=lr),s===void 0&&m===Ns&&(s=Br),super(null,a,l,f,c,h,m,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:hn,this.minFilter=h!==void 0?h:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class JM extends Os{constructor(e,t){super();const s=this;let a=null,l=1,f=null,c="local-floor",h=1,p=null,m=null,x=null,_=null,S=null,M=null;const E=t.getContextAttributes();let y=null,v=null;const N=[],R=[],P=new Yn;P.layers.enable(1),P.viewport=new tn;const b=new Yn;b.layers.enable(2),b.viewport=new tn;const F=[P,b],z=new KM;z.layers.enable(1),z.layers.enable(2);let K=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let O=N[w];return O===void 0&&(O=new Oc,N[w]=O),O.getTargetRaySpace()},this.getControllerGrip=function(w){let O=N[w];return O===void 0&&(O=new Oc,N[w]=O),O.getGripSpace()},this.getHand=function(w){let O=N[w];return O===void 0&&(O=new Oc,N[w]=O),O.getHandSpace()};function D(w){const O=R.indexOf(w.inputSource);if(O===-1)return;const ce=N[O];ce!==void 0&&(ce.update(w.inputSource,w.frame,p||f),ce.dispatchEvent({type:w.type,data:w.inputSource}))}function se(){a.removeEventListener("select",D),a.removeEventListener("selectstart",D),a.removeEventListener("selectend",D),a.removeEventListener("squeeze",D),a.removeEventListener("squeezestart",D),a.removeEventListener("squeezeend",D),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",oe);for(let w=0;w<N.length;w++){const O=R[w];O!==null&&(R[w]=null,N[w].disconnect(O))}K=null,C=null,e.setRenderTarget(y),S=null,_=null,x=null,a=null,v=null,G.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){l=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){c=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(w){p=w},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(w){if(a=w,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",D),a.addEventListener("selectstart",D),a.addEventListener("selectend",D),a.addEventListener("squeeze",D),a.addEventListener("squeezestart",D),a.addEventListener("squeezeend",D),a.addEventListener("end",se),a.addEventListener("inputsourceschange",oe),E.xrCompatible!==!0&&await t.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,O),a.updateRenderState({baseLayer:S}),v=new Gr(S.framebufferWidth,S.framebufferHeight,{format:si,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let O=null,ce=null,fe=null;E.depth&&(fe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=E.stencil?Ns:kr,ce=E.stencil?Br:lr);const ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:l};x=new XRWebGLBinding(a,t),_=x.createProjectionLayer(ge),a.updateRenderState({layers:[_]}),v=new Gr(_.textureWidth,_.textureHeight,{format:si,type:hr,depthTexture:new QM(_.textureWidth,_.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Te=e.properties.get(v);Te.__ignoreDepthValues=_.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await a.requestReferenceSpace(c),G.setContext(a),G.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function oe(w){for(let O=0;O<w.removed.length;O++){const ce=w.removed[O],fe=R.indexOf(ce);fe>=0&&(R[fe]=null,N[fe].disconnect(ce))}for(let O=0;O<w.added.length;O++){const ce=w.added[O];let fe=R.indexOf(ce);if(fe===-1){for(let Te=0;Te<N.length;Te++)if(Te>=R.length){R.push(ce),fe=Te;break}else if(R[Te]===null){R[Te]=ce,fe=Te;break}if(fe===-1)break}const ge=N[fe];ge&&ge.connect(ce)}}const le=new ee,B=new ee;function ne(w,O,ce){le.setFromMatrixPosition(O.matrixWorld),B.setFromMatrixPosition(ce.matrixWorld);const fe=le.distanceTo(B),ge=O.projectionMatrix.elements,Te=ce.projectionMatrix.elements,Fe=ge[14]/(ge[10]-1),Re=ge[14]/(ge[10]+1),Ie=(ge[9]+1)/ge[5],ct=(ge[9]-1)/ge[5],tt=(ge[8]-1)/ge[0],j=(Te[8]+1)/Te[0],Yt=Fe*tt,He=Fe*j,Ze=fe/(-tt+j),je=Ze*-tt;O.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(je),w.translateZ(Ze),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();const Et=Fe+Ze,it=Re+Ze,nt=Yt-je,dt=He+(fe-je),At=Ie*Re/it*Et,Bt=ct*Re/it*Et;w.projectionMatrix.makePerspective(nt,dt,At,Bt,Et,it),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}function ue(w,O){O===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(O.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(a===null)return;z.near=b.near=P.near=w.near,z.far=b.far=P.far=w.far,(K!==z.near||C!==z.far)&&(a.updateRenderState({depthNear:z.near,depthFar:z.far}),K=z.near,C=z.far);const O=w.parent,ce=z.cameras;ue(z,O);for(let fe=0;fe<ce.length;fe++)ue(ce[fe],O);ce.length===2?ne(z,P,b):z.projectionMatrix.copy(P.projectionMatrix),ie(w,z,O)};function ie(w,O,ce){ce===null?w.matrix.copy(O.matrixWorld):(w.matrix.copy(ce.matrixWorld),w.matrix.invert(),w.matrix.multiply(O.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(O.projectionMatrix),w.projectionMatrixInverse.copy(O.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Kc*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(w){h=w,_!==null&&(_.fixedFoveation=w),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=w)};let Y=null;function Z(w,O){if(m=O.getViewerPose(p||f),M=O,m!==null){const ce=m.views;S!==null&&(e.setRenderTargetFramebuffer(v,S.framebuffer),e.setRenderTarget(v));let fe=!1;ce.length!==z.cameras.length&&(z.cameras.length=0,fe=!0);for(let ge=0;ge<ce.length;ge++){const Te=ce[ge];let Fe=null;if(S!==null)Fe=S.getViewport(Te);else{const Ie=x.getViewSubImage(_,Te);Fe=Ie.viewport,ge===0&&(e.setRenderTargetTextures(v,Ie.colorTexture,_.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(v))}let Re=F[ge];Re===void 0&&(Re=new Yn,Re.layers.enable(ge),Re.viewport=new tn,F[ge]=Re),Re.matrix.fromArray(Te.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Te.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ge===0&&(z.matrix.copy(Re.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),fe===!0&&z.cameras.push(Re)}}for(let ce=0;ce<N.length;ce++){const fe=R[ce],ge=N[ce];fe!==null&&ge!==void 0&&ge.update(fe,O,p||f)}Y&&Y(w,O),O.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:O}),M=null}const G=new jm;G.setAnimationLoop(Z),this.setAnimationLoop=function(w){Y=w},this.dispose=function(){}}}function eE(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Wm(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,N,R,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),x(y,v)):v.isMeshPhongMaterial?(l(y,v),m(y,v)):v.isMeshStandardMaterial?(l(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,P)):v.isMeshMatcapMaterial?(l(y,v),M(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),E(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&c(y,v)):v.isPointsMaterial?h(y,v,N,R):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Ln&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Ln&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const N=e.get(v).envMap;if(N&&(y.envMap.value=N,y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*R,t(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function c(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,N,R){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*N,y.scale.value=R*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),e.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,N){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ln&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const N=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function tE(r,e,t,s){let a={},l={},f=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(N,R){const P=R.program;s.uniformBlockBinding(N,P)}function p(N,R){let P=a[N.id];P===void 0&&(M(N),P=m(N),a[N.id]=P,N.addEventListener("dispose",y));const b=R.program;s.updateUBOMapping(N,b);const F=e.render.frame;l[N.id]!==F&&(_(N),l[N.id]=F)}function m(N){const R=x();N.__bindingPointIndex=R;const P=r.createBuffer(),b=N.__size,F=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,b,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,P),P}function x(){for(let N=0;N<c;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(N){const R=a[N.id],P=N.uniforms,b=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let F=0,z=P.length;F<z;F++){const K=P[F];if(S(K,F,b)===!0){const C=K.__offset,D=Array.isArray(K.value)?K.value:[K.value];let se=0;for(let oe=0;oe<D.length;oe++){const le=D[oe],B=E(le);typeof le=="number"?(K.__data[0]=le,r.bufferSubData(r.UNIFORM_BUFFER,C+se,K.__data)):le.isMatrix3?(K.__data[0]=le.elements[0],K.__data[1]=le.elements[1],K.__data[2]=le.elements[2],K.__data[3]=le.elements[0],K.__data[4]=le.elements[3],K.__data[5]=le.elements[4],K.__data[6]=le.elements[5],K.__data[7]=le.elements[0],K.__data[8]=le.elements[6],K.__data[9]=le.elements[7],K.__data[10]=le.elements[8],K.__data[11]=le.elements[0]):(le.toArray(K.__data,se),se+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,C,K.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(N,R,P){const b=N.value;if(P[R]===void 0){if(typeof b=="number")P[R]=b;else{const F=Array.isArray(b)?b:[b],z=[];for(let K=0;K<F.length;K++)z.push(F[K].clone());P[R]=z}return!0}else if(typeof b=="number"){if(P[R]!==b)return P[R]=b,!0}else{const F=Array.isArray(P[R])?P[R]:[P[R]],z=Array.isArray(b)?b:[b];for(let K=0;K<F.length;K++){const C=F[K];if(C.equals(z[K])===!1)return C.copy(z[K]),!0}}return!1}function M(N){const R=N.uniforms;let P=0;const b=16;let F=0;for(let z=0,K=R.length;z<K;z++){const C=R[z],D={boundary:0,storage:0},se=Array.isArray(C.value)?C.value:[C.value];for(let oe=0,le=se.length;oe<le;oe++){const B=se[oe],ne=E(B);D.boundary+=ne.boundary,D.storage+=ne.storage}if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=P,z>0){F=P%b;const oe=b-F;F!==0&&oe-D.boundary<0&&(P+=b-F,C.__offset=P)}P+=D.storage}return F=P%b,F>0&&(P+=b-F),N.__size=P,N.__cache={},this}function E(N){const R={boundary:0,storage:0};return typeof N=="number"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),R}function y(N){const R=N.target;R.removeEventListener("dispose",y);const P=f.indexOf(R.__bindingPointIndex);f.splice(P,1),r.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function v(){for(const N in a)r.deleteBuffer(a[N]);f=[],a={},l={}}return{bind:h,update:p,dispose:v}}class Jm{constructor(e={}){const{canvas:t=Z0(),context:s=null,depth:a=!0,stencil:l=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let _;s!==null?_=s.getContextAttributes().alpha:_=f;const S=new Uint32Array(4),M=new Int32Array(4);let E=null,y=null;const v=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const R=this;let P=!1,b=0,F=0,z=null,K=-1,C=null;const D=new tn,se=new tn;let oe=null;const le=new St(0);let B=0,ne=t.width,ue=t.height,ie=1,Y=null,Z=null;const G=new tn(0,0,ne,ue),w=new tn(0,0,ne,ue);let O=!1;const ce=new Ym;let fe=!1,ge=!1,Te=null;const Fe=new nn,Re=new Mt,Ie=new ee,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return z===null?ie:1}let j=s;function Yt(L,X){for(let J=0;J<L.length;J++){const te=L[J],re=t.getContext(te,X);if(re!==null)return re}return null}try{const L={alpha:!0,depth:a,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nf}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",we,!1),j===null){const X=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&X.shift(),j=Yt(X,L),j===null)throw Yt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let He,Ze,je,Et,it,nt,dt,At,Bt,U,A,Q,ye,me,_e,Be,Me,Ce,$e,ft,xe,vt,Qe,Ye;function Ve(){He=new fS(j),Ze=new rS(j,He,e),He.init(Ze),vt=new $M(j,He,Ze),je=new YM(j,He,Ze),Et=new pS(j),it=new UM,nt=new jM(j,He,je,it,Ze,vt,Et),dt=new oS(R),At=new cS(R),Bt=new Ev(j,Ze),Qe=new nS(j,He,Bt,Ze),U=new hS(j,Bt,Et,Qe),A=new vS(j,U,Bt,Et),$e=new _S(j,Ze,nt),Be=new sS(it),Q=new DM(R,dt,At,He,Ze,Qe,Be),ye=new eE(R,it),me=new NM,_e=new HM(He,Ze),Ce=new tS(R,dt,At,je,A,_,h),Me=new qM(R,A,Ze),Ye=new tE(j,Et,Ze,je),ft=new iS(j,He,Et,Ze),xe=new dS(j,He,Et,Ze),Et.programs=Q.programs,R.capabilities=Ze,R.extensions=He,R.properties=it,R.renderLists=me,R.shadowMap=Me,R.state=je,R.info=Et}Ve();const be=new JM(R,j);this.xr=be,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=He.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=He.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(L){L!==void 0&&(ie=L,this.setSize(ne,ue,!1))},this.getSize=function(L){return L.set(ne,ue)},this.setSize=function(L,X,J=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=L,ue=X,t.width=Math.floor(L*ie),t.height=Math.floor(X*ie),J===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(ne*ie,ue*ie).floor()},this.setDrawingBufferSize=function(L,X,J){ne=L,ue=X,ie=J,t.width=Math.floor(L*J),t.height=Math.floor(X*J),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(G)},this.setViewport=function(L,X,J,te){L.isVector4?G.set(L.x,L.y,L.z,L.w):G.set(L,X,J,te),je.viewport(D.copy(G).multiplyScalar(ie).floor())},this.getScissor=function(L){return L.copy(w)},this.setScissor=function(L,X,J,te){L.isVector4?w.set(L.x,L.y,L.z,L.w):w.set(L,X,J,te),je.scissor(se.copy(w).multiplyScalar(ie).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(L){je.setScissorTest(O=L)},this.setOpaqueSort=function(L){Y=L},this.setTransparentSort=function(L){Z=L},this.getClearColor=function(L){return L.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(L=!0,X=!0,J=!0){let te=0;if(L){let re=!1;if(z!==null){const Le=z.texture.format;re=Le===bm||Le===Pm||Le===Lm}if(re){const Le=z.texture.type,ke=Le===hr||Le===lr||Le===rf||Le===Br||Le===Rm||Le===Cm,qe=Ce.getClearColor(),De=Ce.getClearAlpha(),rt=qe.r,Je=qe.g,et=qe.b;ke?(S[0]=rt,S[1]=Je,S[2]=et,S[3]=De,j.clearBufferuiv(j.COLOR,0,S)):(M[0]=rt,M[1]=Je,M[2]=et,M[3]=De,j.clearBufferiv(j.COLOR,0,M))}else te|=j.COLOR_BUFFER_BIT}X&&(te|=j.DEPTH_BUFFER_BIT),J&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",we,!1),me.dispose(),_e.dispose(),it.dispose(),dt.dispose(),At.dispose(),A.dispose(),Qe.dispose(),Ye.dispose(),Q.dispose(),be.dispose(),be.removeEventListener("sessionstart",dn),be.removeEventListener("sessionend",gt),Te&&(Te.dispose(),Te=null),Vt.stop()};function ot(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const L=Et.autoReset,X=Me.enabled,J=Me.autoUpdate,te=Me.needsUpdate,re=Me.type;Ve(),Et.autoReset=L,Me.enabled=X,Me.autoUpdate=J,Me.needsUpdate=te,Me.type=re}function we(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Se(L){const X=L.target;X.removeEventListener("dispose",Se),ae(X)}function ae(L){Ee(L),it.remove(L)}function Ee(L){const X=it.get(L).programs;X!==void 0&&(X.forEach(function(J){Q.releaseProgram(J)}),L.isShaderMaterial&&Q.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,J,te,re,Le){X===null&&(X=ct);const ke=re.isMesh&&re.matrixWorld.determinant()<0,qe=Tl(L,X,J,te,re);je.setMaterial(te,ke);let De=J.index,rt=1;if(te.wireframe===!0){if(De=U.getWireframeAttribute(J),De===void 0)return;rt=2}const Je=J.drawRange,et=J.attributes.position;let Tt=Je.start*rt,pn=(Je.start+Je.count)*rt;Le!==null&&(Tt=Math.max(Tt,Le.start*rt),pn=Math.min(pn,(Le.start+Le.count)*rt)),De!==null?(Tt=Math.max(Tt,0),pn=Math.min(pn,De.count)):et!=null&&(Tt=Math.max(Tt,0),pn=Math.min(pn,et.count));const Ft=pn-Tt;if(Ft<0||Ft===1/0)return;Qe.setup(re,te,qe,J,De);let yn,pt=ft;if(De!==null&&(yn=Bt.get(De),pt=xe,pt.setIndex(yn)),re.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*tt()),pt.setMode(j.LINES)):pt.setMode(j.TRIANGLES);else if(re.isLine){let at=te.linewidth;at===void 0&&(at=1),je.setLineWidth(at*tt()),re.isLineSegments?pt.setMode(j.LINES):re.isLineLoop?pt.setMode(j.LINE_LOOP):pt.setMode(j.LINE_STRIP)}else re.isPoints?pt.setMode(j.POINTS):re.isSprite&&pt.setMode(j.TRIANGLES);if(re.isInstancedMesh)pt.renderInstances(Tt,Ft,re.count);else if(J.isInstancedBufferGeometry){const at=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,mn=Math.min(J.instanceCount,at);pt.renderInstances(Tt,Ft,mn)}else pt.render(Tt,Ft)};function Xe(L,X,J){L.transparent===!0&&L.side===Di&&L.forceSinglePass===!1?(L.side=Ln,L.needsUpdate=!0,Fi(L,X,J),L.side=dr,L.needsUpdate=!0,Fi(L,X,J),L.side=Di):Fi(L,X,J)}this.compile=function(L,X,J=null){J===null&&(J=L),y=_e.get(J),y.init(),N.push(y),J.traverseVisible(function(re){re.isLight&&re.layers.test(X.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),L!==J&&L.traverseVisible(function(re){re.isLight&&re.layers.test(X.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights(R._useLegacyLights);const te=new Set;return L.traverse(function(re){const Le=re.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const qe=Le[ke];Xe(qe,J,re),te.add(qe)}else Xe(Le,J,re),te.add(Le)}),N.pop(),y=null,te},this.compileAsync=function(L,X,J=null){const te=this.compile(L,X,J);return new Promise(re=>{function Le(){if(te.forEach(function(ke){it.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){re(L);return}setTimeout(Le,10)}He.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ht=null;function Pt(L){ht&&ht(L)}function dn(){Vt.stop()}function gt(){Vt.start()}const Vt=new jm;Vt.setAnimationLoop(Pt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(L){ht=L,be.setAnimationLoop(L),L===null?Vt.stop():Vt.start()},be.addEventListener("sessionstart",dn),be.addEventListener("sessionend",gt),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(X),X=be.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,X,z),y=_e.get(L,N.length),y.init(),N.push(y),Fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ce.setFromProjectionMatrix(Fe),ge=this.localClippingEnabled,fe=Be.init(this.clippingPlanes,ge),E=me.get(L,v.length),E.init(),v.push(E),rn(L,X,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(Y,Z),this.info.render.frame++,fe===!0&&Be.beginShadows();const J=y.state.shadowsArray;if(Me.render(J,L,X),fe===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(E,L),y.setupLights(R._useLegacyLights),X.isArrayCamera){const te=X.cameras;for(let re=0,Le=te.length;re<Le;re++){const ke=te[re];Io(E,L,ke,ke.viewport)}}else Io(E,L,X);z!==null&&(nt.updateMultisampleRenderTarget(z),nt.updateRenderTargetMipmap(z)),L.isScene===!0&&L.onAfterRender(R,L,X),Qe.resetDefaultState(),K=-1,C=null,N.pop(),N.length>0?y=N[N.length-1]:y=null,v.pop(),v.length>0?E=v[v.length-1]:E=null};function rn(L,X,J,te){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)J=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ce.intersectsSprite(L)){te&&Ie.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Fe);const ke=A.update(L),qe=L.material;qe.visible&&E.push(L,ke,qe,J,Ie.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ce.intersectsObject(L))){const ke=A.update(L),qe=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ie.copy(L.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Ie.copy(ke.boundingSphere.center)),Ie.applyMatrix4(L.matrixWorld).applyMatrix4(Fe)),Array.isArray(qe)){const De=ke.groups;for(let rt=0,Je=De.length;rt<Je;rt++){const et=De[rt],Tt=qe[et.materialIndex];Tt&&Tt.visible&&E.push(L,ke,Tt,J,Ie.z,et)}}else qe.visible&&E.push(L,ke,qe,J,Ie.z,null)}}const Le=L.children;for(let ke=0,qe=Le.length;ke<qe;ke++)rn(Le[ke],X,J,te)}function Io(L,X,J,te){const re=L.opaque,Le=L.transmissive,ke=L.transparent;y.setupLightsView(J),fe===!0&&Be.setGlobalState(R.clippingPlanes,J),Le.length>0&&mr(re,Le,X,J),te&&je.viewport(D.copy(te)),re.length>0&&mi(re,X,J),Le.length>0&&mi(Le,X,J),ke.length>0&&mi(ke,X,J),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function mr(L,X,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Le=Ze.isWebGL2;Te===null&&(Te=new Gr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?Lo:hr,minFilter:Co,samples:Le?4:0})),R.getDrawingBufferSize(Re),Le?Te.setSize(Re.x,Re.y):Te.setSize(Zc(Re.x),Zc(Re.y));const ke=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(le),B=R.getClearAlpha(),B<1&&R.setClearColor(16777215,.5),R.clear();const qe=R.toneMapping;R.toneMapping=fr,mi(L,J,te),nt.updateMultisampleRenderTarget(Te),nt.updateRenderTargetMipmap(Te);let De=!1;for(let rt=0,Je=X.length;rt<Je;rt++){const et=X[rt],Tt=et.object,pn=et.geometry,Ft=et.material,yn=et.group;if(Ft.side===Di&&Tt.layers.test(te.layers)){const pt=Ft.side;Ft.side=Ln,Ft.needsUpdate=!0,gr(Tt,J,te,pn,Ft,yn),Ft.side=pt,Ft.needsUpdate=!0,De=!0}}De===!0&&(nt.updateMultisampleRenderTarget(Te),nt.updateRenderTargetMipmap(Te)),R.setRenderTarget(ke),R.setClearColor(le,B),R.toneMapping=qe}function mi(L,X,J){const te=X.isScene===!0?X.overrideMaterial:null;for(let re=0,Le=L.length;re<Le;re++){const ke=L[re],qe=ke.object,De=ke.geometry,rt=te===null?ke.material:te,Je=ke.group;qe.layers.test(J.layers)&&gr(qe,X,J,De,rt,Je)}}function gr(L,X,J,te,re,Le){L.onBeforeRender(R,X,J,te,re,Le),L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(R,X,J,te,L,Le),re.transparent===!0&&re.side===Di&&re.forceSinglePass===!1?(re.side=Ln,re.needsUpdate=!0,R.renderBufferDirect(J,X,te,re,L,Le),re.side=dr,re.needsUpdate=!0,R.renderBufferDirect(J,X,te,re,L,Le),re.side=Di):R.renderBufferDirect(J,X,te,re,L,Le),L.onAfterRender(R,X,J,te,re,Le)}function Fi(L,X,J){X.isScene!==!0&&(X=ct);const te=it.get(L),re=y.state.lights,Le=y.state.shadowsArray,ke=re.state.version,qe=Q.getParameters(L,re.state,Le,X,J),De=Q.getProgramCacheKey(qe);let rt=te.programs;te.environment=L.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(L.isMeshStandardMaterial?At:dt).get(L.envMap||te.environment),rt===void 0&&(L.addEventListener("dispose",Se),rt=new Map,te.programs=rt);let Je=rt.get(De);if(Je!==void 0){if(te.currentProgram===Je&&te.lightsStateVersion===ke)return Fo(L,qe),Je}else qe.uniforms=Q.getUniforms(L),L.onBuild(J,qe,R),L.onBeforeCompile(qe,R),Je=Q.acquireProgram(qe,De),rt.set(De,Je),te.uniforms=qe.uniforms;const et=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(et.clippingPlanes=Be.uniform),Fo(L,qe),te.needsLights=Oo(L),te.lightsStateVersion=ke,te.needsLights&&(et.ambientLightColor.value=re.state.ambient,et.lightProbe.value=re.state.probe,et.directionalLights.value=re.state.directional,et.directionalLightShadows.value=re.state.directionalShadow,et.spotLights.value=re.state.spot,et.spotLightShadows.value=re.state.spotShadow,et.rectAreaLights.value=re.state.rectArea,et.ltc_1.value=re.state.rectAreaLTC1,et.ltc_2.value=re.state.rectAreaLTC2,et.pointLights.value=re.state.point,et.pointLightShadows.value=re.state.pointShadow,et.hemisphereLights.value=re.state.hemi,et.directionalShadowMap.value=re.state.directionalShadowMap,et.directionalShadowMatrix.value=re.state.directionalShadowMatrix,et.spotShadowMap.value=re.state.spotShadowMap,et.spotLightMatrix.value=re.state.spotLightMatrix,et.spotLightMap.value=re.state.spotLightMap,et.pointShadowMap.value=re.state.pointShadowMap,et.pointShadowMatrix.value=re.state.pointShadowMatrix),te.currentProgram=Je,te.uniformsList=null,Je}function No(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=fl.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Fo(L,X){const J=it.get(L);J.outputColorSpace=X.outputColorSpace,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Tl(L,X,J,te,re){X.isScene!==!0&&(X=ct),nt.resetTextureUnits();const Le=X.fog,ke=te.isMeshStandardMaterial?X.environment:null,qe=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ni,De=(te.isMeshStandardMaterial?At:dt).get(te.envMap||ke),rt=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),et=!!J.morphAttributes.position,Tt=!!J.morphAttributes.normal,pn=!!J.morphAttributes.color;let Ft=fr;te.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ft=R.toneMapping);const yn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pt=yn!==void 0?yn.length:0,at=it.get(te),mn=y.state.lights;if(fe===!0&&(ge===!0||L!==C)){const gn=L===C&&te.id===K;Be.setState(te,L,gn)}let It=!1;te.version===at.__version?(at.needsLights&&at.lightsStateVersion!==mn.state.version||at.outputColorSpace!==qe||re.isInstancedMesh&&at.instancing===!1||!re.isInstancedMesh&&at.instancing===!0||re.isSkinnedMesh&&at.skinning===!1||!re.isSkinnedMesh&&at.skinning===!0||re.isInstancedMesh&&at.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&at.instancingColor===!1&&re.instanceColor!==null||at.envMap!==De||te.fog===!0&&at.fog!==Le||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Be.numPlanes||at.numIntersection!==Be.numIntersection)||at.vertexAlphas!==rt||at.vertexTangents!==Je||at.morphTargets!==et||at.morphNormals!==Tt||at.morphColors!==pn||at.toneMapping!==Ft||Ze.isWebGL2===!0&&at.morphTargetsCount!==pt)&&(It=!0):(It=!0,at.__version=te.version);let _i=at.currentProgram;It===!0&&(_i=Fi(te,X,re));let zo=!1,ai=!1,Oi=!1;const Ot=_i.getUniforms(),zn=at.uniforms;if(je.useProgram(_i.program)&&(zo=!0,ai=!0,Oi=!0),te.id!==K&&(K=te.id,ai=!0),zo||C!==L){Ot.setValue(j,"projectionMatrix",L.projectionMatrix),Ot.setValue(j,"viewMatrix",L.matrixWorldInverse);const gn=Ot.map.cameraPosition;gn!==void 0&&gn.setValue(j,Ie.setFromMatrixPosition(L.matrixWorld)),Ze.logarithmicDepthBuffer&&Ot.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ot.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,ai=!0,Oi=!0)}if(re.isSkinnedMesh){Ot.setOptional(j,re,"bindMatrix"),Ot.setOptional(j,re,"bindMatrixInverse");const gn=re.skeleton;gn&&(Ze.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ot.setValue(j,"boneTexture",gn.boneTexture,nt),Ot.setValue(j,"boneTextureSize",gn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bs=J.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0&&Ze.isWebGL2===!0)&&$e.update(re,J,_i),(ai||at.receiveShadow!==re.receiveShadow)&&(at.receiveShadow=re.receiveShadow,Ot.setValue(j,"receiveShadow",re.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(zn.envMap.value=De,zn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ai&&(Ot.setValue(j,"toneMappingExposure",R.toneMappingExposure),at.needsLights&&gi(zn,Oi),Le&&te.fog===!0&&ye.refreshFogUniforms(zn,Le),ye.refreshMaterialUniforms(zn,te,ie,ue,Te),fl.upload(j,No(at),zn,nt)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(fl.upload(j,No(at),zn,nt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ot.setValue(j,"center",re.center),Ot.setValue(j,"modelViewMatrix",re.modelViewMatrix),Ot.setValue(j,"normalMatrix",re.normalMatrix),Ot.setValue(j,"modelMatrix",re.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const gn=te.uniformsGroups;for(let _r=0,Bo=gn.length;_r<Bo;_r++)if(Ze.isWebGL2){const Xr=gn[_r];Ye.update(Xr,_i),Ye.bind(Xr,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function gi(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function Oo(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(L,X,J){it.get(L.texture).__webglTexture=X,it.get(L.depthTexture).__webglTexture=J;const te=it.get(L);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,X){const J=it.get(L);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,J=0){z=L,b=X,F=J;let te=!0,re=null,Le=!1,ke=!1;if(L){const De=it.get(L);De.__useDefaultFramebuffer!==void 0?(je.bindFramebuffer(j.FRAMEBUFFER,null),te=!1):De.__webglFramebuffer===void 0?nt.setupRenderTarget(L):De.__hasExternalTextures&&nt.rebindTextures(L,it.get(L.texture).__webglTexture,it.get(L.depthTexture).__webglTexture);const rt=L.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(ke=!0);const Je=it.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?re=Je[X][J]:re=Je[X],Le=!0):Ze.isWebGL2&&L.samples>0&&nt.useMultisampledRTT(L)===!1?re=it.get(L).__webglMultisampledFramebuffer:Array.isArray(Je)?re=Je[J]:re=Je,D.copy(L.viewport),se.copy(L.scissor),oe=L.scissorTest}else D.copy(G).multiplyScalar(ie).floor(),se.copy(w).multiplyScalar(ie).floor(),oe=O;if(je.bindFramebuffer(j.FRAMEBUFFER,re)&&Ze.drawBuffers&&te&&je.drawBuffers(L,re),je.viewport(D),je.scissor(se),je.setScissorTest(oe),Le){const De=it.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,J)}else if(ke){const De=it.get(L.texture),rt=X||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,De.__webglTexture,J||0,rt)}K=-1},this.readRenderTargetPixels=function(L,X,J,te,re,Le,ke){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=it.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){je.bindFramebuffer(j.FRAMEBUFFER,qe);try{const De=L.texture,rt=De.format,Je=De.type;if(rt!==si&&vt.convert(rt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Je===Lo&&(He.has("EXT_color_buffer_half_float")||Ze.isWebGL2&&He.has("EXT_color_buffer_float"));if(Je!==hr&&vt.convert(Je)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===ur&&(Ze.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-te&&J>=0&&J<=L.height-re&&j.readPixels(X,J,te,re,vt.convert(rt),vt.convert(Je),Le)}finally{const De=z!==null?it.get(z).__webglFramebuffer:null;je.bindFramebuffer(j.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(L,X,J=0){const te=Math.pow(2,-J),re=Math.floor(X.image.width*te),Le=Math.floor(X.image.height*te);nt.setTexture2D(X,0),j.copyTexSubImage2D(j.TEXTURE_2D,J,0,0,L.x,L.y,re,Le),je.unbindTexture()},this.copyTextureToTexture=function(L,X,J,te=0){const re=X.image.width,Le=X.image.height,ke=vt.convert(J.format),qe=vt.convert(J.type);nt.setTexture2D(J,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,J.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,te,L.x,L.y,re,Le,ke,qe,X.image.data):X.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,te,L.x,L.y,X.mipmaps[0].width,X.mipmaps[0].height,ke,X.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,te,L.x,L.y,ke,qe,X.image),te===0&&J.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),je.unbindTexture()},this.copyTextureToTexture3D=function(L,X,J,te,re=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=L.max.x-L.min.x+1,ke=L.max.y-L.min.y+1,qe=L.max.z-L.min.z+1,De=vt.convert(te.format),rt=vt.convert(te.type);let Je;if(te.isData3DTexture)nt.setTexture3D(te,0),Je=j.TEXTURE_3D;else if(te.isDataArrayTexture)nt.setTexture2DArray(te,0),Je=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,te.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,te.unpackAlignment);const et=j.getParameter(j.UNPACK_ROW_LENGTH),Tt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),pn=j.getParameter(j.UNPACK_SKIP_PIXELS),Ft=j.getParameter(j.UNPACK_SKIP_ROWS),yn=j.getParameter(j.UNPACK_SKIP_IMAGES),pt=J.isCompressedTexture?J.mipmaps[0]:J.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,pt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,L.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,L.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,L.min.z),J.isDataTexture||J.isData3DTexture?j.texSubImage3D(Je,re,X.x,X.y,X.z,Le,ke,qe,De,rt,pt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Je,re,X.x,X.y,X.z,Le,ke,qe,De,pt.data)):j.texSubImage3D(Je,re,X.x,X.y,X.z,Le,ke,qe,De,rt,pt),j.pixelStorei(j.UNPACK_ROW_LENGTH,et),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,pn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ft),j.pixelStorei(j.UNPACK_SKIP_IMAGES,yn),re===0&&te.generateMipmaps&&j.generateMipmap(Je),je.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?nt.setTextureCube(L,0):L.isData3DTexture?nt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?nt.setTexture2DArray(L,0):nt.setTexture2D(L,0),je.unbindTexture()},this.resetState=function(){b=0,F=0,z=null,je.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sf?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===yl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===en?Hr:Dm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hr?en:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nE extends Jm{}nE.prototype.isWebGL1Renderer=!0;class iE extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class rE extends Pn{constructor(e,t,s,a,l,f,c,h,p){super(e,t,s,a,l,f,c,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);const sE=`
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;

    float waveFactor = uEnableWaves;

    vec3 transformed = position;

    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`,oE=`
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;Math.map=function(r,e,t,s,a){return(r-e)/(t-e)*(a-s)+s};const sm=typeof window<"u"?window.devicePixelRatio:1;class aE{constructor(e,{fontSize:t,fontFamily:s,charset:a,invert:l}={}){this.renderer=e,this.domElement=document.createElement("div"),this.domElement.style.position="absolute",this.domElement.style.top="0",this.domElement.style.left="0",this.domElement.style.width="100%",this.domElement.style.height="100%",this.pre=document.createElement("pre"),this.domElement.appendChild(this.pre),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.domElement.appendChild(this.canvas),this.deg=0,this.invert=l??!0,this.fontSize=t??12,this.fontFamily=s??"'Courier New', monospace",this.charset=a??" .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",this.context.webkitImageSmoothingEnabled=!1,this.context.mozImageSmoothingEnabled=!1,this.context.msImageSmoothingEnabled=!1,this.context.imageSmoothingEnabled=!1,this.onMouseMove=this.onMouseMove.bind(this),document.addEventListener("mousemove",this.onMouseMove)}setSize(e,t){this.width=e,this.height=t,this.renderer.setSize(e,t),this.reset(),this.center={x:e/2,y:t/2},this.mouse={x:this.center.x,y:this.center.y}}reset(){this.context.font=`${this.fontSize}px ${this.fontFamily}`;const e=this.context.measureText("A").width;this.cols=Math.floor(this.width/(this.fontSize*(e/this.fontSize))),this.rows=Math.floor(this.height/this.fontSize),this.canvas.width=this.cols,this.canvas.height=this.rows,this.pre.style.fontFamily=this.fontFamily,this.pre.style.fontSize=`${this.fontSize}px`,this.pre.style.margin="0",this.pre.style.padding="0",this.pre.style.lineHeight="1em",this.pre.style.position="absolute",this.pre.style.left="50%",this.pre.style.top="50%",this.pre.style.transform="translate(-50%, -50%)",this.pre.style.zIndex="9",this.pre.style.backgroundAttachment="fixed",this.pre.style.color="#6B7280"}render(e,t){this.renderer.render(e,t);const s=this.canvas.width,a=this.canvas.height;this.context.clearRect(0,0,s,a),this.context&&s&&a&&this.context.drawImage(this.renderer.domElement,0,0,s,a),this.asciify(this.context,s,a),this.hue()}onMouseMove(e){this.mouse={x:e.clientX*sm,y:e.clientY*sm}}get dx(){return this.mouse.x-this.center.x}get dy(){return this.mouse.y-this.center.y}hue(){const e=Math.atan2(this.dy,this.dx)*180/Math.PI;this.deg+=(e-this.deg)*.075,this.domElement.style.filter=`hue-rotate(${this.deg.toFixed(1)}deg)`}asciify(e,t,s){if(t&&s){const a=e.getImageData(0,0,t,s).data;let l="";for(let f=0;f<s;f++){for(let c=0;c<t;c++){const h=c*4+f*4*t,[p,m,x,_]=[a[h],a[h+1],a[h+2],a[h+3]];if(_===0){l+=" ";continue}let S=(.3*p+.6*m+.1*x)/255,M=Math.floor((1-S)*(this.charset.length-1));this.invert&&(M=this.charset.length-M-1),l+=this.charset[M]}l+=`
`}this.pre.innerHTML=l}}dispose(){document.removeEventListener("mousemove",this.onMouseMove)}}class lE{constructor(e,{fontSize:t=200,fontFamily:s="Arial",color:a="#fdf9f3"}={}){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.txt=e,this.fontSize=t,this.fontFamily=s,this.color=a,this.font=`600 ${this.fontSize}px ${this.fontFamily}`}resize(){this.context.font=this.font;const e=this.context.measureText(this.txt),t=Math.ceil(e.width)+20,s=Math.ceil(e.actualBoundingBoxAscent+e.actualBoundingBoxDescent)+20;this.canvas.width=t,this.canvas.height=s}render(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.font=this.font;const t=10+this.context.measureText(this.txt).actualBoundingBoxAscent;this.context.fillText(this.txt,10,t)}get width(){return this.canvas.width}get height(){return this.canvas.height}get texture(){return this.canvas}}class om{constructor({text:e,asciiFontSize:t,textFontSize:s,textColor:a,planeBaseHeight:l,enableWaves:f},c,h,p){this.textString=e,this.asciiFontSize=t,this.textFontSize=s,this.textColor=a,this.planeBaseHeight=l,this.container=c,this.width=h,this.height=p,this.enableWaves=f,this.camera=new Yn(45,this.width/this.height,1,1e3),this.camera.position.z=30,this.scene=new iE,this.mouse={x:0,y:0},this.onMouseMove=this.onMouseMove.bind(this),this.setMesh(),this.setRenderer()}setMesh(){this.textCanvas=new lE(this.textString,{fontSize:this.textFontSize,fontFamily:"IBM Plex Mono",color:this.textColor}),this.textCanvas.resize(),this.textCanvas.render(),this.texture=new rE(this.textCanvas.texture),this.texture.minFilter=hn;const e=this.textCanvas.width/this.textCanvas.height,t=this.planeBaseHeight,s=t*e,a=t;this.geometry=new Ml(s,a,36,36),this.material=new pr({vertexShader:sE,fragmentShader:oE,transparent:!0,uniforms:{uTime:{value:0},mouse:{value:1},uTexture:{value:this.texture},uEnableWaves:{value:this.enableWaves?1:0}}}),this.mesh=new Ii(this.geometry,this.material),this.scene.add(this.mesh)}setRenderer(){this.renderer=new Jm({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(15984895,0),this.filter=new aE(this.renderer,{fontFamily:"IBM Plex Mono",fontSize:this.asciiFontSize,invert:!0}),this.container.appendChild(this.filter.domElement),this.setSize(this.width,this.height),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("touchmove",this.onMouseMove)}setSize(e,t){this.width=e,this.height=t,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.filter.setSize(e,t),this.center={x:e/2,y:t/2}}load(){this.animate()}onMouseMove(e){const t=e.touches?e.touches[0]:e,s=t.clientX,a=t.clientY;this.mouse={x:s,y:a}}animate(){const e=()=>{this.animationFrameId=requestAnimationFrame(e),this.render()};e()}render(){const e=new Date().getTime()*.001;this.textCanvas.render(),this.texture.needsUpdate=!0,this.mesh.material.uniforms.uTime.value=Math.sin(e),this.updateRotation(),this.filter.render(this.scene,this.camera)}updateRotation(){const e=window.innerWidth,t=window.innerHeight,s=Math.map(this.mouse.y,0,t,.25,-.25),a=Math.map(this.mouse.x,0,e,-.25,.25);this.mesh.rotation.x+=(s-this.mesh.rotation.x)*.05,this.mesh.rotation.y+=(a-this.mesh.rotation.y)*.05}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(t=>{const s=e.material[t];s!==null&&typeof s=="object"&&typeof s.dispose=="function"&&s.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){cancelAnimationFrame(this.animationFrameId),this.filter.dispose(),this.container.removeChild(this.filter.domElement),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("touchmove",this.onMouseMove),this.clear(),this.renderer.dispose()}}function uE({text:r="David!",asciiFontSize:e=8,textFontSize:t=200,textColor:s="#fdf9f3",planeBaseHeight:a=8,enableWaves:l=!0}){const f=di.useRef(null),c=di.useRef(null);return di.useEffect(()=>{if(!f.current)return;setTimeout(()=>{const{width:p,height:m}=f.current.getBoundingClientRect();if(p===0||m===0){const _=new IntersectionObserver(([S])=>{if(S.isIntersecting&&S.boundingClientRect.width>0&&S.boundingClientRect.height>0){const{width:M,height:E}=S.boundingClientRect;c.current=new om({text:r,asciiFontSize:e,textFontSize:t,textColor:s,planeBaseHeight:a,enableWaves:l},f.current,M,E),c.current.load(),_.disconnect()}},{threshold:.1});return _.observe(f.current),()=>{_.disconnect(),c.current&&c.current.dispose()}}c.current=new om({text:r,asciiFontSize:e,textFontSize:t,textColor:s,planeBaseHeight:a,enableWaves:l},f.current,p,m),c.current.load();const x=new ResizeObserver(_=>{if(!_[0]||!c.current)return;const{width:S,height:M}=_[0].contentRect;S>0&&M>0&&c.current.setSize(S,M)});return x.observe(f.current),()=>{x.disconnect(),c.current&&c.current.dispose()}},100)},[r,e,t,s,a,l]),fn.jsx("div",{ref:f,className:"ascii-text-container",style:{position:"relative",width:"100%",height:"100%"},children:fn.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');

        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }

        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: left;
          position: absolute;
          left: 0;
          top: 0;
          color: black !important;
          z-index: 9;
        }
      `})})}function Ro(r){let e=r[0],t=r[1],s=r[2];return Math.sqrt(e*e+t*t+s*s)}function Jc(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r}function cE(r,e,t,s){return r[0]=e,r[1]=t,r[2]=s,r}function am(r,e,t){return r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r}function lm(r,e,t){return r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r}function fE(r,e,t){return r[0]=e[0]*t[0],r[1]=e[1]*t[1],r[2]=e[2]*t[2],r}function hE(r,e,t){return r[0]=e[0]/t[0],r[1]=e[1]/t[1],r[2]=e[2]/t[2],r}function zc(r,e,t){return r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r}function dE(r,e){let t=e[0]-r[0],s=e[1]-r[1],a=e[2]-r[2];return Math.sqrt(t*t+s*s+a*a)}function pE(r,e){let t=e[0]-r[0],s=e[1]-r[1],a=e[2]-r[2];return t*t+s*s+a*a}function um(r){let e=r[0],t=r[1],s=r[2];return e*e+t*t+s*s}function mE(r,e){return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r}function gE(r,e){return r[0]=1/e[0],r[1]=1/e[1],r[2]=1/e[2],r}function ef(r,e){let t=e[0],s=e[1],a=e[2],l=t*t+s*s+a*a;return l>0&&(l=1/Math.sqrt(l)),r[0]=e[0]*l,r[1]=e[1]*l,r[2]=e[2]*l,r}function eg(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function cm(r,e,t){let s=e[0],a=e[1],l=e[2],f=t[0],c=t[1],h=t[2];return r[0]=a*h-l*c,r[1]=l*f-s*h,r[2]=s*c-a*f,r}function _E(r,e,t,s){let a=e[0],l=e[1],f=e[2];return r[0]=a+s*(t[0]-a),r[1]=l+s*(t[1]-l),r[2]=f+s*(t[2]-f),r}function vE(r,e,t,s,a){const l=Math.exp(-s*a);let f=e[0],c=e[1],h=e[2];return r[0]=t[0]+(f-t[0])*l,r[1]=t[1]+(c-t[1])*l,r[2]=t[2]+(h-t[2])*l,r}function xE(r,e,t){let s=e[0],a=e[1],l=e[2],f=t[3]*s+t[7]*a+t[11]*l+t[15];return f=f||1,r[0]=(t[0]*s+t[4]*a+t[8]*l+t[12])/f,r[1]=(t[1]*s+t[5]*a+t[9]*l+t[13])/f,r[2]=(t[2]*s+t[6]*a+t[10]*l+t[14])/f,r}function yE(r,e,t){let s=e[0],a=e[1],l=e[2],f=t[3]*s+t[7]*a+t[11]*l+t[15];return f=f||1,r[0]=(t[0]*s+t[4]*a+t[8]*l)/f,r[1]=(t[1]*s+t[5]*a+t[9]*l)/f,r[2]=(t[2]*s+t[6]*a+t[10]*l)/f,r}function SE(r,e,t){let s=e[0],a=e[1],l=e[2];return r[0]=s*t[0]+a*t[3]+l*t[6],r[1]=s*t[1]+a*t[4]+l*t[7],r[2]=s*t[2]+a*t[5]+l*t[8],r}function ME(r,e,t){let s=e[0],a=e[1],l=e[2],f=t[0],c=t[1],h=t[2],p=t[3],m=c*l-h*a,x=h*s-f*l,_=f*a-c*s,S=c*_-h*x,M=h*m-f*_,E=f*x-c*m,y=p*2;return m*=y,x*=y,_*=y,S*=2,M*=2,E*=2,r[0]=s+m+S,r[1]=a+x+M,r[2]=l+_+E,r}const EE=(function(){const r=[0,0,0],e=[0,0,0];return function(t,s){Jc(r,t),Jc(e,s),ef(r,r),ef(e,e);let a=eg(r,e);return a>1?0:a<-1?Math.PI:Math.acos(a)}})();function TE(r,e){return r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]}class oi extends Array{constructor(e=0,t=e,s=e){return super(e,t,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,t=e,s=e){return e.length?this.copy(e):(cE(this,e,t,s),this)}copy(e){return Jc(this,e),this}add(e,t){return t?am(this,e,t):am(this,this,e),this}sub(e,t){return t?lm(this,e,t):lm(this,this,e),this}multiply(e){return e.length?fE(this,this,e):zc(this,this,e),this}divide(e){return e.length?hE(this,this,e):zc(this,this,1/e),this}inverse(e=this){return gE(this,e),this}len(){return Ro(this)}distance(e){return e?dE(this,e):Ro(this)}squaredLen(){return um(this)}squaredDistance(e){return e?pE(this,e):um(this)}negate(e=this){return mE(this,e),this}cross(e,t){return t?cm(this,e,t):cm(this,this,e),this}scale(e){return zc(this,this,e),this}normalize(){return ef(this,this),this}dot(e){return eg(this,e)}equals(e){return TE(this,e)}applyMatrix3(e){return SE(this,this,e),this}applyMatrix4(e){return xE(this,this,e),this}scaleRotateMatrix4(e){return yE(this,this,e),this}applyQuaternion(e){return ME(this,this,e),this}angle(e){return EE(this,e)}lerp(e,t){return _E(this,this,e,t),this}smoothLerp(e,t,s){return vE(this,this,e,t,s),this}clone(){return new oi(this[0],this[1],this[2])}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}transformDirection(e){const t=this[0],s=this[1],a=this[2];return this[0]=e[0]*t+e[4]*s+e[8]*a,this[1]=e[1]*t+e[5]*s+e[9]*a,this[2]=e[2]*t+e[6]*s+e[10]*a,this.normalize()}}const fm=new oi;let wE=1,AE=1,hm=!1;class RE{constructor(e,t={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=t,this.id=wE++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in t)this.addAttribute(s,t[s])}addAttribute(e,t){if(this.attributes[e]=t,t.id=AE++,t.size=t.size||1,t.type=t.type||(t.data.constructor===Float32Array?this.gl.FLOAT:t.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),t.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,t.normalized=t.normalized||!1,t.stride=t.stride||0,t.offset=t.offset||0,t.count=t.count||(t.stride?t.data.byteLength/t.stride:t.data.length/t.size),t.divisor=t.instanced||0,t.needsUpdate=!1,t.usage=t.usage||this.gl.STATIC_DRAW,t.buffer||this.updateAttribute(t),t.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==t.count*t.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,t.count*t.divisor);this.instancedCount=t.count*t.divisor}else e==="index"?this.drawRange.count=t.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,t.count))}updateAttribute(e){const t=!e.buffer;t&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),t?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((t,{name:s,type:a})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const l=this.attributes[s];this.gl.bindBuffer(l.target,l.buffer),this.glState.boundBuffer=l.buffer;let f=1;a===35674&&(f=2),a===35675&&(f=3),a===35676&&(f=4);const c=l.size/f,h=f===1?0:f*f*4,p=f===1?0:f*4;for(let m=0;m<f;m++)this.gl.vertexAttribPointer(t+m,c,l.type,l.normalized,l.stride+h,l.offset+m*p),this.gl.enableVertexAttribArray(t+m),this.gl.renderer.vertexAttribDivisor(t+m,l.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:t=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((a,{name:l})=>{const f=this.attributes[l];f.needsUpdate&&this.updateAttribute(f)});let s=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(t,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(t,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(t,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!hm)return console.warn("No position buffer data found to compute bounds"),hm=!0}computeBoundingBox(e){e||(e=this.getPosition());const t=e.data,s=e.size;this.bounds||(this.bounds={min:new oi,max:new oi,center:new oi,scale:new oi,radius:1/0});const a=this.bounds.min,l=this.bounds.max,f=this.bounds.center,c=this.bounds.scale;a.set(1/0),l.set(-1/0);for(let h=0,p=t.length;h<p;h+=s){const m=t[h],x=t[h+1],_=t[h+2];a.x=Math.min(m,a.x),a.y=Math.min(x,a.y),a.z=Math.min(_,a.z),l.x=Math.max(m,l.x),l.y=Math.max(x,l.y),l.z=Math.max(_,l.z)}c.sub(l,a),f.add(a,l).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const t=e.data,s=e.size;this.bounds||this.computeBoundingBox(e);let a=0;for(let l=0,f=t.length;l<f;l+=s)fm.fromArray(t,l),a=Math.max(a,this.bounds.center.squaredDistance(fm));this.bounds.radius=Math.sqrt(a)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let CE=1;const dm={};class LE{constructor(e,{vertex:t,fragment:s,uniforms:a={},transparent:l=!1,cullFace:f=e.BACK,frontFace:c=e.CCW,depthTest:h=!0,depthWrite:p=!0,depthFunc:m=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=a,this.id=CE++,t||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=l,this.cullFace=f,this.frontFace=c,this.depthTest=h,this.depthWrite=p,this.depthFunc=m,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:t,fragment:s})}setShaders({vertex:e,fragment:t}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${pm(e)}`)),t&&(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${pm(t)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let f=0;f<s;f++){let c=this.gl.getActiveUniform(this.program,f);this.uniformLocations.set(c,this.gl.getUniformLocation(this.program,c.name));const h=c.name.match(/(\w+)/g);c.uniformName=h[0],c.nameComponents=h.slice(1)}this.attributeLocations=new Map;const a=[],l=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let f=0;f<l;f++){const c=this.gl.getActiveAttrib(this.program,f),h=this.gl.getAttribLocation(this.program,c.name);h!==-1&&(a[h]=c.name,this.attributeLocations.set(c,h))}this.attributeOrder=a.join("")}setBlendFunc(e,t,s,a){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=a,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,s){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=s}setStencilOp(e,t,s){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let t=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((a,l)=>{let f=this.uniforms[l.uniformName];for(const c of l.nameComponents){if(!f)break;if(c in f)f=f[c];else{if(Array.isArray(f.value))break;f=void 0;break}}if(!f)return mm(`Active uniform ${l.name} has not been supplied`);if(f&&f.value===void 0)return mm(`${l.name} uniform is missing a value parameter`);if(f.value.texture)return t=t+1,f.value.update(t),Bc(this.gl,l.type,a,t);if(f.value.length&&f.value[0].texture){const c=[];return f.value.forEach(h=>{t=t+1,h.update(t),c.push(t)}),Bc(this.gl,l.type,a,c)}Bc(this.gl,l.type,a,f.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Bc(r,e,t,s){s=s.length?PE(s):s;const a=r.renderer.state.uniformLocations.get(t);if(s.length)if(a===void 0||a.length!==s.length)r.renderer.state.uniformLocations.set(t,s.slice(0));else{if(bE(a,s))return;a.set?a.set(s):DE(a,s),r.renderer.state.uniformLocations.set(t,a)}else{if(a===s)return;r.renderer.state.uniformLocations.set(t,s)}switch(e){case 5126:return s.length?r.uniform1fv(t,s):r.uniform1f(t,s);case 35664:return r.uniform2fv(t,s);case 35665:return r.uniform3fv(t,s);case 35666:return r.uniform4fv(t,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?r.uniform1iv(t,s):r.uniform1i(t,s);case 35671:case 35667:return r.uniform2iv(t,s);case 35672:case 35668:return r.uniform3iv(t,s);case 35673:case 35669:return r.uniform4iv(t,s);case 35674:return r.uniformMatrix2fv(t,!1,s);case 35675:return r.uniformMatrix3fv(t,!1,s);case 35676:return r.uniformMatrix4fv(t,!1,s)}}function pm(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function PE(r){const e=r.length,t=r[0].length;if(t===void 0)return r;const s=e*t;let a=dm[s];a||(dm[s]=a=new Float32Array(s));for(let l=0;l<e;l++)a.set(r[l],l*t);return a}function bE(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function DE(r,e){for(let t=0,s=r.length;t<s;t++)r[t]=e[t]}let kc=0;function mm(r){kc>100||(console.warn(r),kc++,kc>100&&console.warn("More than 100 program warnings - stopping logs."))}const Hc=new oi;let UE=1;class IE{constructor({canvas:e=document.createElement("canvas"),width:t=300,height:s=150,dpr:a=1,alpha:l=!1,depth:f=!0,stencil:c=!1,antialias:h=!1,premultipliedAlpha:p=!1,preserveDrawingBuffer:m=!1,powerPreference:x="default",autoClear:_=!0,webgl:S=2}={}){const M={alpha:l,depth:f,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x};this.dpr=a,this.alpha=l,this.color=!0,this.depth=f,this.stencil=c,this.premultipliedAlpha=p,this.autoClear=_,this.id=UE++,S===2&&(this.gl=e.getContext("webgl2",M)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",M)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(t,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:t+"px"})}setViewport(e,t,s=0,a=0){this.state.viewport.width===e&&this.state.viewport.height===t||(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=s,this.state.viewport.y=a,this.gl.viewport(s,a,e,t))}setScissor(e,t,s=0,a=0){this.gl.scissor(s,a,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,s,a){this.state.blendFunc.src===e&&this.state.blendFunc.dst===t&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===a||(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=a,s!==void 0?this.gl.blendFuncSeparate(e,t,s,a):this.gl.blendFunc(e,t))}setBlendEquation(e,t){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t!==void 0?this.gl.blendEquationSeparate(e,t):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,s){this.state.stencilFunc===e&&this.state.stencilRef===t&&this.state.stencilFuncMask===s||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,s||0))}setStencilOp(e,t,s){this.state.stencilFail===e&&this.state.stencilDepthFail===t&&this.state.stencilDepthPass===s||(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=s,this.gl.stencilOp(e,t,s))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,s){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][s].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:e.zDepth!==t.zDepth?e.zDepth-t.zDepth:t.id-e.id}sortTransparent(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.zDepth!==t.zDepth?t.zDepth-e.zDepth:t.id-e.id}sortUI(e,t){return e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program.id!==t.program.id?e.program.id-t.program.id:t.id-e.id}getRenderList({scene:e,camera:t,frustumCull:s,sort:a}){let l=[];if(t&&s&&t.updateFrustum(),e.traverse(f=>{if(!f.visible)return!0;f.draw&&(s&&f.frustumCulled&&t&&!t.frustumIntersectsMesh(f)||l.push(f))}),a){const f=[],c=[],h=[];l.forEach(p=>{p.program.transparent?p.program.depthTest?c.push(p):h.push(p):f.push(p),p.zDepth=0,!(p.renderOrder!==0||!p.program.depthTest||!t)&&(p.worldMatrix.getTranslation(Hc),Hc.applyMatrix4(t.projectionViewMatrix),p.zDepth=Hc.z)}),f.sort(this.sortOpaque),c.sort(this.sortTransparent),h.sort(this.sortUI),l=f.concat(c,h)}return l}render({scene:e,camera:t,target:s=null,update:a=!0,sort:l=!0,frustumCull:f=!0,clear:c}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(c||this.autoClear&&c!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),a&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:f,sort:l}).forEach(p=>{p.draw({camera:t})})}}function NE(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r}function FE(r,e,t,s,a){return r[0]=e,r[1]=t,r[2]=s,r[3]=a,r}function OE(r,e){let t=e[0],s=e[1],a=e[2],l=e[3],f=t*t+s*s+a*a+l*l;return f>0&&(f=1/Math.sqrt(f)),r[0]=t*f,r[1]=s*f,r[2]=a*f,r[3]=l*f,r}function zE(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]+r[3]*e[3]}function BE(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r}function kE(r,e,t){t=t*.5;let s=Math.sin(t);return r[0]=s*e[0],r[1]=s*e[1],r[2]=s*e[2],r[3]=Math.cos(t),r}function gm(r,e,t){let s=e[0],a=e[1],l=e[2],f=e[3],c=t[0],h=t[1],p=t[2],m=t[3];return r[0]=s*m+f*c+a*p-l*h,r[1]=a*m+f*h+l*c-s*p,r[2]=l*m+f*p+s*h-a*c,r[3]=f*m-s*c-a*h-l*p,r}function HE(r,e,t){t*=.5;let s=e[0],a=e[1],l=e[2],f=e[3],c=Math.sin(t),h=Math.cos(t);return r[0]=s*h+f*c,r[1]=a*h+l*c,r[2]=l*h-a*c,r[3]=f*h-s*c,r}function VE(r,e,t){t*=.5;let s=e[0],a=e[1],l=e[2],f=e[3],c=Math.sin(t),h=Math.cos(t);return r[0]=s*h-l*c,r[1]=a*h+f*c,r[2]=l*h+s*c,r[3]=f*h-a*c,r}function GE(r,e,t){t*=.5;let s=e[0],a=e[1],l=e[2],f=e[3],c=Math.sin(t),h=Math.cos(t);return r[0]=s*h+a*c,r[1]=a*h-s*c,r[2]=l*h+f*c,r[3]=f*h-l*c,r}function WE(r,e,t,s){let a=e[0],l=e[1],f=e[2],c=e[3],h=t[0],p=t[1],m=t[2],x=t[3],_,S,M,E,y;return S=a*h+l*p+f*m+c*x,S<0&&(S=-S,h=-h,p=-p,m=-m,x=-x),1-S>1e-6?(_=Math.acos(S),M=Math.sin(_),E=Math.sin((1-s)*_)/M,y=Math.sin(s*_)/M):(E=1-s,y=s),r[0]=E*a+y*h,r[1]=E*l+y*p,r[2]=E*f+y*m,r[3]=E*c+y*x,r}function XE(r,e){let t=e[0],s=e[1],a=e[2],l=e[3],f=t*t+s*s+a*a+l*l,c=f?1/f:0;return r[0]=-t*c,r[1]=-s*c,r[2]=-a*c,r[3]=l*c,r}function qE(r,e){return r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=e[3],r}function YE(r,e){let t=e[0]+e[4]+e[8],s;if(t>0)s=Math.sqrt(t+1),r[3]=.5*s,s=.5/s,r[0]=(e[5]-e[7])*s,r[1]=(e[6]-e[2])*s,r[2]=(e[1]-e[3])*s;else{let a=0;e[4]>e[0]&&(a=1),e[8]>e[a*3+a]&&(a=2);let l=(a+1)%3,f=(a+2)%3;s=Math.sqrt(e[a*3+a]-e[l*3+l]-e[f*3+f]+1),r[a]=.5*s,s=.5/s,r[3]=(e[l*3+f]-e[f*3+l])*s,r[l]=(e[l*3+a]+e[a*3+l])*s,r[f]=(e[f*3+a]+e[a*3+f])*s}return r}function jE(r,e,t="YXZ"){let s=Math.sin(e[0]*.5),a=Math.cos(e[0]*.5),l=Math.sin(e[1]*.5),f=Math.cos(e[1]*.5),c=Math.sin(e[2]*.5),h=Math.cos(e[2]*.5);return t==="XYZ"?(r[0]=s*f*h+a*l*c,r[1]=a*l*h-s*f*c,r[2]=a*f*c+s*l*h,r[3]=a*f*h-s*l*c):t==="YXZ"?(r[0]=s*f*h+a*l*c,r[1]=a*l*h-s*f*c,r[2]=a*f*c-s*l*h,r[3]=a*f*h+s*l*c):t==="ZXY"?(r[0]=s*f*h-a*l*c,r[1]=a*l*h+s*f*c,r[2]=a*f*c+s*l*h,r[3]=a*f*h-s*l*c):t==="ZYX"?(r[0]=s*f*h-a*l*c,r[1]=a*l*h+s*f*c,r[2]=a*f*c-s*l*h,r[3]=a*f*h+s*l*c):t==="YZX"?(r[0]=s*f*h+a*l*c,r[1]=a*l*h+s*f*c,r[2]=a*f*c-s*l*h,r[3]=a*f*h-s*l*c):t==="XZY"&&(r[0]=s*f*h-a*l*c,r[1]=a*l*h-s*f*c,r[2]=a*f*c+s*l*h,r[3]=a*f*h+s*l*c),r}const $E=NE,KE=FE,ZE=zE,QE=OE;class JE extends Array{constructor(e=0,t=0,s=0,a=1){super(e,t,s,a),this.onChange=()=>{},this._target=this;const l=["0","1","2","3"];return new Proxy(this,{set(f,c){const h=Reflect.set(...arguments);return h&&l.includes(c)&&f.onChange(),h}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return BE(this._target),this.onChange(),this}set(e,t,s,a){return e.length?this.copy(e):(KE(this._target,e,t,s,a),this.onChange(),this)}rotateX(e){return HE(this._target,this._target,e),this.onChange(),this}rotateY(e){return VE(this._target,this._target,e),this.onChange(),this}rotateZ(e){return GE(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return XE(this._target,e),this.onChange(),this}conjugate(e=this._target){return qE(this._target,e),this.onChange(),this}copy(e){return $E(this._target,e),this.onChange(),this}normalize(e=this._target){return QE(this._target,e),this.onChange(),this}multiply(e,t){return t?gm(this._target,e,t):gm(this._target,this._target,e),this.onChange(),this}dot(e){return ZE(this._target,e)}fromMatrix3(e){return YE(this._target,e),this.onChange(),this}fromEuler(e,t){return jE(this._target,e,e.order),t||this.onChange(),this}fromAxisAngle(e,t){return kE(this._target,e,t),this.onChange(),this}slerp(e,t){return WE(this._target,this._target,e,t),this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this._target[3]=e[t+3],this.onChange(),this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const e1=1e-6;function t1(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function n1(r,e,t,s,a,l,f,c,h,p,m,x,_,S,M,E,y){return r[0]=e,r[1]=t,r[2]=s,r[3]=a,r[4]=l,r[5]=f,r[6]=c,r[7]=h,r[8]=p,r[9]=m,r[10]=x,r[11]=_,r[12]=S,r[13]=M,r[14]=E,r[15]=y,r}function i1(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function r1(r,e){let t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],m=e[8],x=e[9],_=e[10],S=e[11],M=e[12],E=e[13],y=e[14],v=e[15],N=t*c-s*f,R=t*h-a*f,P=t*p-l*f,b=s*h-a*c,F=s*p-l*c,z=a*p-l*h,K=m*E-x*M,C=m*y-_*M,D=m*v-S*M,se=x*y-_*E,oe=x*v-S*E,le=_*v-S*y,B=N*le-R*oe+P*se+b*D-F*C+z*K;return B?(B=1/B,r[0]=(c*le-h*oe+p*se)*B,r[1]=(a*oe-s*le-l*se)*B,r[2]=(E*z-y*F+v*b)*B,r[3]=(_*F-x*z-S*b)*B,r[4]=(h*D-f*le-p*C)*B,r[5]=(t*le-a*D+l*C)*B,r[6]=(y*P-M*z-v*R)*B,r[7]=(m*z-_*P+S*R)*B,r[8]=(f*oe-c*D+p*K)*B,r[9]=(s*D-t*oe-l*K)*B,r[10]=(M*F-E*P+v*N)*B,r[11]=(x*P-m*F-S*N)*B,r[12]=(c*C-f*se-h*K)*B,r[13]=(t*se-s*C+a*K)*B,r[14]=(E*R-M*b-y*N)*B,r[15]=(m*b-x*R+_*N)*B,r):null}function tg(r){let e=r[0],t=r[1],s=r[2],a=r[3],l=r[4],f=r[5],c=r[6],h=r[7],p=r[8],m=r[9],x=r[10],_=r[11],S=r[12],M=r[13],E=r[14],y=r[15],v=e*f-t*l,N=e*c-s*l,R=e*h-a*l,P=t*c-s*f,b=t*h-a*f,F=s*h-a*c,z=p*M-m*S,K=p*E-x*S,C=p*y-_*S,D=m*E-x*M,se=m*y-_*M,oe=x*y-_*E;return v*oe-N*se+R*D+P*C-b*K+F*z}function _m(r,e,t){let s=e[0],a=e[1],l=e[2],f=e[3],c=e[4],h=e[5],p=e[6],m=e[7],x=e[8],_=e[9],S=e[10],M=e[11],E=e[12],y=e[13],v=e[14],N=e[15],R=t[0],P=t[1],b=t[2],F=t[3];return r[0]=R*s+P*c+b*x+F*E,r[1]=R*a+P*h+b*_+F*y,r[2]=R*l+P*p+b*S+F*v,r[3]=R*f+P*m+b*M+F*N,R=t[4],P=t[5],b=t[6],F=t[7],r[4]=R*s+P*c+b*x+F*E,r[5]=R*a+P*h+b*_+F*y,r[6]=R*l+P*p+b*S+F*v,r[7]=R*f+P*m+b*M+F*N,R=t[8],P=t[9],b=t[10],F=t[11],r[8]=R*s+P*c+b*x+F*E,r[9]=R*a+P*h+b*_+F*y,r[10]=R*l+P*p+b*S+F*v,r[11]=R*f+P*m+b*M+F*N,R=t[12],P=t[13],b=t[14],F=t[15],r[12]=R*s+P*c+b*x+F*E,r[13]=R*a+P*h+b*_+F*y,r[14]=R*l+P*p+b*S+F*v,r[15]=R*f+P*m+b*M+F*N,r}function s1(r,e,t){let s=t[0],a=t[1],l=t[2],f,c,h,p,m,x,_,S,M,E,y,v;return e===r?(r[12]=e[0]*s+e[4]*a+e[8]*l+e[12],r[13]=e[1]*s+e[5]*a+e[9]*l+e[13],r[14]=e[2]*s+e[6]*a+e[10]*l+e[14],r[15]=e[3]*s+e[7]*a+e[11]*l+e[15]):(f=e[0],c=e[1],h=e[2],p=e[3],m=e[4],x=e[5],_=e[6],S=e[7],M=e[8],E=e[9],y=e[10],v=e[11],r[0]=f,r[1]=c,r[2]=h,r[3]=p,r[4]=m,r[5]=x,r[6]=_,r[7]=S,r[8]=M,r[9]=E,r[10]=y,r[11]=v,r[12]=f*s+m*a+M*l+e[12],r[13]=c*s+x*a+E*l+e[13],r[14]=h*s+_*a+y*l+e[14],r[15]=p*s+S*a+v*l+e[15]),r}function o1(r,e,t){let s=t[0],a=t[1],l=t[2];return r[0]=e[0]*s,r[1]=e[1]*s,r[2]=e[2]*s,r[3]=e[3]*s,r[4]=e[4]*a,r[5]=e[5]*a,r[6]=e[6]*a,r[7]=e[7]*a,r[8]=e[8]*l,r[9]=e[9]*l,r[10]=e[10]*l,r[11]=e[11]*l,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function a1(r,e,t,s){let a=s[0],l=s[1],f=s[2],c=Math.hypot(a,l,f),h,p,m,x,_,S,M,E,y,v,N,R,P,b,F,z,K,C,D,se,oe,le,B,ne;return Math.abs(c)<e1?null:(c=1/c,a*=c,l*=c,f*=c,h=Math.sin(t),p=Math.cos(t),m=1-p,x=e[0],_=e[1],S=e[2],M=e[3],E=e[4],y=e[5],v=e[6],N=e[7],R=e[8],P=e[9],b=e[10],F=e[11],z=a*a*m+p,K=l*a*m+f*h,C=f*a*m-l*h,D=a*l*m-f*h,se=l*l*m+p,oe=f*l*m+a*h,le=a*f*m+l*h,B=l*f*m-a*h,ne=f*f*m+p,r[0]=x*z+E*K+R*C,r[1]=_*z+y*K+P*C,r[2]=S*z+v*K+b*C,r[3]=M*z+N*K+F*C,r[4]=x*D+E*se+R*oe,r[5]=_*D+y*se+P*oe,r[6]=S*D+v*se+b*oe,r[7]=M*D+N*se+F*oe,r[8]=x*le+E*B+R*ne,r[9]=_*le+y*B+P*ne,r[10]=S*le+v*B+b*ne,r[11]=M*le+N*B+F*ne,e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r)}function l1(r,e){return r[0]=e[12],r[1]=e[13],r[2]=e[14],r}function ng(r,e){let t=e[0],s=e[1],a=e[2],l=e[4],f=e[5],c=e[6],h=e[8],p=e[9],m=e[10];return r[0]=Math.hypot(t,s,a),r[1]=Math.hypot(l,f,c),r[2]=Math.hypot(h,p,m),r}function u1(r){let e=r[0],t=r[1],s=r[2],a=r[4],l=r[5],f=r[6],c=r[8],h=r[9],p=r[10];const m=e*e+t*t+s*s,x=a*a+l*l+f*f,_=c*c+h*h+p*p;return Math.sqrt(Math.max(m,x,_))}const ig=(function(){const r=[1,1,1];return function(e,t){let s=r;ng(s,t);let a=1/s[0],l=1/s[1],f=1/s[2],c=t[0]*a,h=t[1]*l,p=t[2]*f,m=t[4]*a,x=t[5]*l,_=t[6]*f,S=t[8]*a,M=t[9]*l,E=t[10]*f,y=c+x+E,v=0;return y>0?(v=Math.sqrt(y+1)*2,e[3]=.25*v,e[0]=(_-M)/v,e[1]=(S-p)/v,e[2]=(h-m)/v):c>x&&c>E?(v=Math.sqrt(1+c-x-E)*2,e[3]=(_-M)/v,e[0]=.25*v,e[1]=(h+m)/v,e[2]=(S+p)/v):x>E?(v=Math.sqrt(1+x-c-E)*2,e[3]=(S-p)/v,e[0]=(h+m)/v,e[1]=.25*v,e[2]=(_+M)/v):(v=Math.sqrt(1+E-c-x)*2,e[3]=(h-m)/v,e[0]=(S+p)/v,e[1]=(_+M)/v,e[2]=.25*v),e}})();function c1(r,e,t,s){let a=Ro([r[0],r[1],r[2]]);const l=Ro([r[4],r[5],r[6]]),f=Ro([r[8],r[9],r[10]]);tg(r)<0&&(a=-a),t[0]=r[12],t[1]=r[13],t[2]=r[14];const h=r.slice(),p=1/a,m=1/l,x=1/f;h[0]*=p,h[1]*=p,h[2]*=p,h[4]*=m,h[5]*=m,h[6]*=m,h[8]*=x,h[9]*=x,h[10]*=x,ig(e,h),s[0]=a,s[1]=l,s[2]=f}function f1(r,e,t,s){const a=r,l=e[0],f=e[1],c=e[2],h=e[3],p=l+l,m=f+f,x=c+c,_=l*p,S=l*m,M=l*x,E=f*m,y=f*x,v=c*x,N=h*p,R=h*m,P=h*x,b=s[0],F=s[1],z=s[2];return a[0]=(1-(E+v))*b,a[1]=(S+P)*b,a[2]=(M-R)*b,a[3]=0,a[4]=(S-P)*F,a[5]=(1-(_+v))*F,a[6]=(y+N)*F,a[7]=0,a[8]=(M+R)*z,a[9]=(y-N)*z,a[10]=(1-(_+E))*z,a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function h1(r,e){let t=e[0],s=e[1],a=e[2],l=e[3],f=t+t,c=s+s,h=a+a,p=t*f,m=s*f,x=s*c,_=a*f,S=a*c,M=a*h,E=l*f,y=l*c,v=l*h;return r[0]=1-x-M,r[1]=m+v,r[2]=_-y,r[3]=0,r[4]=m-v,r[5]=1-p-M,r[6]=S+E,r[7]=0,r[8]=_+y,r[9]=S-E,r[10]=1-p-x,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function d1(r,e,t,s,a){let l=1/Math.tan(e/2),f=1/(s-a);return r[0]=l/t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=l,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(a+s)*f,r[11]=-1,r[12]=0,r[13]=0,r[14]=2*a*s*f,r[15]=0,r}function p1(r,e,t,s,a,l,f){let c=1/(e-t),h=1/(s-a),p=1/(l-f);return r[0]=-2*c,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*h,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*p,r[11]=0,r[12]=(e+t)*c,r[13]=(a+s)*h,r[14]=(f+l)*p,r[15]=1,r}function m1(r,e,t,s){let a=e[0],l=e[1],f=e[2],c=s[0],h=s[1],p=s[2],m=a-t[0],x=l-t[1],_=f-t[2],S=m*m+x*x+_*_;S===0?_=1:(S=1/Math.sqrt(S),m*=S,x*=S,_*=S);let M=h*_-p*x,E=p*m-c*_,y=c*x-h*m;return S=M*M+E*E+y*y,S===0&&(p?c+=1e-6:h?p+=1e-6:h+=1e-6,M=h*_-p*x,E=p*m-c*_,y=c*x-h*m,S=M*M+E*E+y*y),S=1/Math.sqrt(S),M*=S,E*=S,y*=S,r[0]=M,r[1]=E,r[2]=y,r[3]=0,r[4]=x*y-_*E,r[5]=_*M-m*y,r[6]=m*E-x*M,r[7]=0,r[8]=m,r[9]=x,r[10]=_,r[11]=0,r[12]=a,r[13]=l,r[14]=f,r[15]=1,r}function vm(r,e,t){return r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r[3]=e[3]+t[3],r[4]=e[4]+t[4],r[5]=e[5]+t[5],r[6]=e[6]+t[6],r[7]=e[7]+t[7],r[8]=e[8]+t[8],r[9]=e[9]+t[9],r[10]=e[10]+t[10],r[11]=e[11]+t[11],r[12]=e[12]+t[12],r[13]=e[13]+t[13],r[14]=e[14]+t[14],r[15]=e[15]+t[15],r}function xm(r,e,t){return r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r[3]=e[3]-t[3],r[4]=e[4]-t[4],r[5]=e[5]-t[5],r[6]=e[6]-t[6],r[7]=e[7]-t[7],r[8]=e[8]-t[8],r[9]=e[9]-t[9],r[10]=e[10]-t[10],r[11]=e[11]-t[11],r[12]=e[12]-t[12],r[13]=e[13]-t[13],r[14]=e[14]-t[14],r[15]=e[15]-t[15],r}function g1(r,e,t){return r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r[3]=e[3]*t,r[4]=e[4]*t,r[5]=e[5]*t,r[6]=e[6]*t,r[7]=e[7]*t,r[8]=e[8]*t,r[9]=e[9]*t,r[10]=e[10]*t,r[11]=e[11]*t,r[12]=e[12]*t,r[13]=e[13]*t,r[14]=e[14]*t,r[15]=e[15]*t,r}class vl extends Array{constructor(e=1,t=0,s=0,a=0,l=0,f=1,c=0,h=0,p=0,m=0,x=1,_=0,S=0,M=0,E=0,y=1){return super(e,t,s,a,l,f,c,h,p,m,x,_,S,M,E,y),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,s,a,l,f,c,h,p,m,x,_,S,M,E,y){return e.length?this.copy(e):(n1(this,e,t,s,a,l,f,c,h,p,m,x,_,S,M,E,y),this)}translate(e,t=this){return s1(this,t,e),this}rotate(e,t,s=this){return a1(this,s,e,t),this}scale(e,t=this){return o1(this,t,typeof e=="number"?[e,e,e]:e),this}add(e,t){return t?vm(this,e,t):vm(this,this,e),this}sub(e,t){return t?xm(this,e,t):xm(this,this,e),this}multiply(e,t){return e.length?t?_m(this,e,t):_m(this,this,e):g1(this,this,e),this}identity(){return i1(this),this}copy(e){return t1(this,e),this}fromPerspective({fov:e,aspect:t,near:s,far:a}={}){return d1(this,e,t,s,a),this}fromOrthogonal({left:e,right:t,bottom:s,top:a,near:l,far:f}){return p1(this,e,t,s,a,l,f),this}fromQuaternion(e){return h1(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return r1(this,e),this}compose(e,t,s){return f1(this,e,t,s),this}decompose(e,t,s){return c1(this,e,t,s),this}getRotation(e){return ig(e,this),this}getTranslation(e){return l1(e,this),this}getScaling(e){return ng(e,this),this}getMaxScaleOnAxis(){return u1(this)}lookAt(e,t,s){return m1(this,e,t,s),this}determinant(){return tg(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}}function _1(r,e,t="YXZ"){return t==="XYZ"?(r[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(r[0]=Math.atan2(-e[9],e[10]),r[2]=Math.atan2(-e[4],e[0])):(r[0]=Math.atan2(e[6],e[5]),r[2]=0)):t==="YXZ"?(r[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(r[1]=Math.atan2(e[8],e[10]),r[2]=Math.atan2(e[1],e[5])):(r[1]=Math.atan2(-e[2],e[0]),r[2]=0)):t==="ZXY"?(r[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(r[1]=Math.atan2(-e[2],e[10]),r[2]=Math.atan2(-e[4],e[5])):(r[1]=0,r[2]=Math.atan2(e[1],e[0]))):t==="ZYX"?(r[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(r[0]=Math.atan2(e[6],e[10]),r[2]=Math.atan2(e[1],e[0])):(r[0]=0,r[2]=Math.atan2(-e[4],e[5]))):t==="YZX"?(r[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(r[0]=Math.atan2(-e[9],e[5]),r[1]=Math.atan2(-e[2],e[0])):(r[0]=0,r[1]=Math.atan2(e[8],e[10]))):t==="XZY"&&(r[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(r[0]=Math.atan2(e[6],e[5]),r[1]=Math.atan2(e[8],e[0])):(r[0]=Math.atan2(-e[9],e[10]),r[1]=0)),r}const ym=new vl;class v1 extends Array{constructor(e=0,t=e,s=e,a="YXZ"){super(e,t,s),this.order=a,this.onChange=()=>{},this._target=this;const l=["0","1","2"];return new Proxy(this,{set(f,c){const h=Reflect.set(...arguments);return h&&l.includes(c)&&f.onChange(),h}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,s=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=s,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return _1(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,s){return ym.fromQuaternion(e),this._target.fromRotationMatrix(ym,t),s||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}}class x1{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new vl,this.worldMatrix=new vl,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new oi,this.quaternion=new JE,this.scale=new oi(1),this.rotation=new v1,this.up=new oi(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,s=this.children.length;t<s;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,s=this.children.length;t<s;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function y1(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[4],r[4]=e[5],r[5]=e[6],r[6]=e[8],r[7]=e[9],r[8]=e[10],r}function S1(r,e){let t=e[0],s=e[1],a=e[2],l=e[3],f=t+t,c=s+s,h=a+a,p=t*f,m=s*f,x=s*c,_=a*f,S=a*c,M=a*h,E=l*f,y=l*c,v=l*h;return r[0]=1-x-M,r[3]=m-v,r[6]=_+y,r[1]=m+v,r[4]=1-p-M,r[7]=S-E,r[2]=_-y,r[5]=S+E,r[8]=1-p-x,r}function M1(r,e){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function E1(r,e,t,s,a,l,f,c,h,p){return r[0]=e,r[1]=t,r[2]=s,r[3]=a,r[4]=l,r[5]=f,r[6]=c,r[7]=h,r[8]=p,r}function T1(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function w1(r,e){let t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],m=e[8],x=m*f-c*p,_=-m*l+c*h,S=p*l-f*h,M=t*x+s*_+a*S;return M?(M=1/M,r[0]=x*M,r[1]=(-m*s+a*p)*M,r[2]=(c*s-a*f)*M,r[3]=_*M,r[4]=(m*t-a*h)*M,r[5]=(-c*t+a*l)*M,r[6]=S*M,r[7]=(-p*t+s*h)*M,r[8]=(f*t-s*l)*M,r):null}function Sm(r,e,t){let s=e[0],a=e[1],l=e[2],f=e[3],c=e[4],h=e[5],p=e[6],m=e[7],x=e[8],_=t[0],S=t[1],M=t[2],E=t[3],y=t[4],v=t[5],N=t[6],R=t[7],P=t[8];return r[0]=_*s+S*f+M*p,r[1]=_*a+S*c+M*m,r[2]=_*l+S*h+M*x,r[3]=E*s+y*f+v*p,r[4]=E*a+y*c+v*m,r[5]=E*l+y*h+v*x,r[6]=N*s+R*f+P*p,r[7]=N*a+R*c+P*m,r[8]=N*l+R*h+P*x,r}function A1(r,e,t){let s=e[0],a=e[1],l=e[2],f=e[3],c=e[4],h=e[5],p=e[6],m=e[7],x=e[8],_=t[0],S=t[1];return r[0]=s,r[1]=a,r[2]=l,r[3]=f,r[4]=c,r[5]=h,r[6]=_*s+S*f+p,r[7]=_*a+S*c+m,r[8]=_*l+S*h+x,r}function R1(r,e,t){let s=e[0],a=e[1],l=e[2],f=e[3],c=e[4],h=e[5],p=e[6],m=e[7],x=e[8],_=Math.sin(t),S=Math.cos(t);return r[0]=S*s+_*f,r[1]=S*a+_*c,r[2]=S*l+_*h,r[3]=S*f-_*s,r[4]=S*c-_*a,r[5]=S*h-_*l,r[6]=p,r[7]=m,r[8]=x,r}function C1(r,e,t){let s=t[0],a=t[1];return r[0]=s*e[0],r[1]=s*e[1],r[2]=s*e[2],r[3]=a*e[3],r[4]=a*e[4],r[5]=a*e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function L1(r,e){let t=e[0],s=e[1],a=e[2],l=e[3],f=e[4],c=e[5],h=e[6],p=e[7],m=e[8],x=e[9],_=e[10],S=e[11],M=e[12],E=e[13],y=e[14],v=e[15],N=t*c-s*f,R=t*h-a*f,P=t*p-l*f,b=s*h-a*c,F=s*p-l*c,z=a*p-l*h,K=m*E-x*M,C=m*y-_*M,D=m*v-S*M,se=x*y-_*E,oe=x*v-S*E,le=_*v-S*y,B=N*le-R*oe+P*se+b*D-F*C+z*K;return B?(B=1/B,r[0]=(c*le-h*oe+p*se)*B,r[1]=(h*D-f*le-p*C)*B,r[2]=(f*oe-c*D+p*K)*B,r[3]=(a*oe-s*le-l*se)*B,r[4]=(t*le-a*D+l*C)*B,r[5]=(s*D-t*oe-l*K)*B,r[6]=(E*z-y*F+v*b)*B,r[7]=(y*P-M*z-v*R)*B,r[8]=(M*F-E*P+v*N)*B,r):null}class P1 extends Array{constructor(e=1,t=0,s=0,a=0,l=1,f=0,c=0,h=0,p=1){return super(e,t,s,a,l,f,c,h,p),this}set(e,t,s,a,l,f,c,h,p){return e.length?this.copy(e):(E1(this,e,t,s,a,l,f,c,h,p),this)}translate(e,t=this){return A1(this,t,e),this}rotate(e,t=this){return R1(this,t,e),this}scale(e,t=this){return C1(this,t,e),this}multiply(e,t){return t?Sm(this,e,t):Sm(this,this,e),this}identity(){return T1(this),this}copy(e){return M1(this,e),this}fromMatrix4(e){return y1(this,e),this}fromQuaternion(e){return S1(this,e),this}fromBasis(e,t,s){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],s[0],s[1],s[2]),this}inverse(e=this){return w1(this,e),this}getNormalMatrix(e){return L1(this,e),this}}let b1=0;class D1 extends x1{constructor(e,{geometry:t,program:s,mode:a=e.TRIANGLES,frustumCulled:l=!0,renderOrder:f=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=b1++,this.geometry=t,this.program=s,this.mode=a,this.frustumCulled=l,this.renderOrder=f,this.modelViewMatrix=new vl,this.normalMatrix=new P1,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}))}}class U1 extends RE{constructor(e,{attributes:t={}}={}){Object.assign(t,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,t)}}function Vc(r){let e=r.replace("#",""),t=0,s=0,a=0,l=1;return e.length===6?(t=parseInt(e.slice(0,2),16)/255,s=parseInt(e.slice(2,4),16)/255,a=parseInt(e.slice(4,6),16)/255):e.length===8&&(t=parseInt(e.slice(0,2),16)/255,s=parseInt(e.slice(2,4),16)/255,a=parseInt(e.slice(4,6),16)/255,l=parseInt(e.slice(6,8),16)/255),[t,s,a,l]}const I1=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,N1=`
precision highp float;

#define PI 3.14159265359

uniform float iTime;
uniform vec3 iResolution;
uniform float uSpinRotation;
uniform float uSpinSpeed;
uniform vec2 uOffset;
uniform vec4 uColor1;
uniform vec4 uColor2;
uniform vec4 uColor3;
uniform float uContrast;
uniform float uLighting;
uniform float uSpinAmount;
uniform float uPixelFilter;
uniform float uSpinEase;
uniform bool uIsRotate;
uniform vec2 uMouse;

varying vec2 vUv;

vec4 effect(vec2 screenSize, vec2 screen_coords) {
    float pixel_size = length(screenSize.xy) / uPixelFilter;
    vec2 uv = (floor(screen_coords.xy * (1.0 / pixel_size)) * pixel_size - 0.5 * screenSize.xy) / length(screenSize.xy) - uOffset;
    float uv_len = length(uv);
    
    float speed = (uSpinRotation * uSpinEase * 0.2);
    if(uIsRotate){
       speed = iTime * speed;
    }
    speed += 302.2;
    
    float mouseInfluence = (uMouse.x * 2.0 - 1.0);
    speed += mouseInfluence * 0.1;
    
    float new_pixel_angle = atan(uv.y, uv.x) + speed - uSpinEase * 20.0 * (uSpinAmount * uv_len + (1.0 - uSpinAmount));
    vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
    uv = (vec2(uv_len * cos(new_pixel_angle) + mid.x, uv_len * sin(new_pixel_angle) + mid.y) - mid);
    
    uv *= 30.0;
    float baseSpeed = iTime * uSpinSpeed;
    speed = baseSpeed + mouseInfluence * 2.0;
    
    vec2 uv2 = vec2(uv.x + uv.y);
    
    for(int i = 0; i < 5; i++) {
        uv2 += sin(max(uv.x, uv.y)) + uv;
        uv += 0.5 * vec2(
            cos(5.1123314 + 0.353 * uv2.y + speed * 0.131121),
            sin(uv2.x - 0.113 * speed)
        );
        uv -= cos(uv.x + uv.y) - sin(uv.x * 0.711 - uv.y);
    }
    
    float contrast_mod = (0.25 * uContrast + 0.5 * uSpinAmount + 1.2);
    float paint_res = min(2.0, max(0.0, length(uv) * 0.035 * contrast_mod));
    float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
    float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
    float c3p = 1.0 - min(1.0, c1p + c2p);
    float light = (uLighting - 0.2) * max(c1p * 5.0 - 4.0, 0.0) + uLighting * max(c2p * 5.0 - 4.0, 0.0);
    
    return (0.3 / uContrast) * uColor1 + (1.0 - 0.3 / uContrast) * (uColor1 * c1p + uColor2 * c2p + vec4(c3p * uColor3.rgb, c3p * uColor1.a)) + light;
}

void main() {
    vec2 uv = vUv * iResolution.xy;
    gl_FragColor = effect(iResolution.xy, uv);
}
`;function F1({spinRotation:r=-2,spinSpeed:e=7,offset:t=[0,0],color1:s="#DE443B",color2:a="#006BB4",color3:l="#162325",contrast:f=3.5,lighting:c=.4,spinAmount:h=.25,pixelFilter:p=745,spinEase:m=1,isRotate:x=!1,mouseInteraction:_=!0}){const S=di.useRef(null);return di.useEffect(()=>{if(!S.current)return;const M=S.current,E=new IE,y=E.gl;y.clearColor(0,0,0,1);let v;function N(){E.setSize(M.offsetWidth,M.offsetHeight),v&&(v.uniforms.iResolution.value=[y.canvas.width,y.canvas.height,y.canvas.width/y.canvas.height])}window.addEventListener("resize",N),N();const R=new U1(y);v=new LE(y,{vertex:I1,fragment:N1,uniforms:{iTime:{value:0},iResolution:{value:[y.canvas.width,y.canvas.height,y.canvas.width/y.canvas.height]},uSpinRotation:{value:r},uSpinSpeed:{value:e},uOffset:{value:t},uColor1:{value:Vc(s)},uColor2:{value:Vc(a)},uColor3:{value:Vc(l)},uContrast:{value:f},uLighting:{value:c},uSpinAmount:{value:h},uPixelFilter:{value:p},uSpinEase:{value:m},uIsRotate:{value:x},uMouse:{value:[.5,.5]}}});const P=new D1(y,{geometry:R,program:v});let b;function F(K){b=requestAnimationFrame(F),v.uniforms.iTime.value=K*.001,E.render({scene:P})}b=requestAnimationFrame(F),M.appendChild(y.canvas);function z(K){if(!_)return;const C=M.getBoundingClientRect(),D=(K.clientX-C.left)/C.width,se=1-(K.clientY-C.top)/C.height;v.uniforms.uMouse.value=[D,se]}return M.addEventListener("mousemove",z),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",N),M.removeEventListener("mousemove",z),M.contains(y.canvas)&&M.removeChild(y.canvas),y.getExtension("WEBGL_lose_context")?.loseContext()}},[r,e,t,s,a,l,f,c,h,p,m,x,_,S]),fn.jsx("div",{ref:S,className:"balatro-container"})}function O1(){const[r,e]=di.useState(1);return di.useEffect(()=>{const t=setInterval(()=>{e(s=>s===1?0:1)},4e3);return()=>clearInterval(t)},[]),fn.jsxs("div",{style:{position:"absolute",inset:0,zIndex:0},children:[fn.jsx("div",{style:{position:"absolute",inset:0,backgroundColor:"#000000",zIndex:1}}),fn.jsx("div",{style:{position:"absolute",inset:0,opacity:r,transition:"opacity 1s ease-in-out",zIndex:2},children:fn.jsx(F1,{isRotate:!1,mouseInteraction:!0,pixelFilter:400,color1:"#f3e8ff",color2:"#d8b4fe",color3:"#9ca3af",contrast:2.8,lighting:.2})})]})}function z1(){const r=di.useRef(null);return di.useEffect(()=>{(async()=>{try{r.current&&await r.current.play()}catch(t){console.log("Audio autoplay blocked:",t);const s=()=>{r.current?.play(),document.removeEventListener("click",s),document.removeEventListener("keydown",s)};document.addEventListener("click",s),document.addEventListener("keydown",s)}})()},[]),fn.jsxs("div",{style:{width:"100vw",height:"100vh",margin:0,padding:0,position:"relative",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"},children:[fn.jsx(O1,{}),fn.jsxs("div",{style:{position:"relative",zIndex:1,width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[fn.jsx("div",{style:{flex:"0 0 auto",width:"100vw",height:"70vh",display:"flex",alignItems:"center",justifyContent:"center"},children:fn.jsx(uE,{text:"antipublic",enableWaves:!1,asciiFontSize:11,textFontSize:180,textColor:"#ffffff",planeBaseHeight:9})}),fn.jsx("div",{style:{marginTop:"20px",fontSize:"16px",fontFamily:"IBM Plex Mono, monospace",color:"#374151",letterSpacing:"1px"},children:"owner@antipublic.org"})]}),fn.jsx("audio",{ref:r,src:"./main.mp3",loop:!0,preload:"auto",style:{display:"none"}})]})}const B1=`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000000;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`,rg=document.createElement("style");rg.textContent=B1;document.head.appendChild(rg);j_.createRoot(document.getElementById("root")).render(fn.jsx(H_.StrictMode,{children:fn.jsx(z1,{})}));
