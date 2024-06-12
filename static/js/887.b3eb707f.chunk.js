/*! For license information please see 887.b3eb707f.chunk.js.LICENSE.txt */
(self.webpackChunkmultiview_dataset_downloader=self.webpackChunkmultiview_dataset_downloader||[]).push([[887],{232:(t,e,n)=>{"use strict";n.d(e,{A:()=>o});var r=n(43);const o=function(t){const e=(0,r.useRef)(t);return(0,r.useEffect)((()=>{e.current=t}),[t]),e}},456:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(43),o=n(232);function i(t){const e=(0,o.A)(t);return(0,r.useCallback)((function(){return e.current&&e.current(...arguments)}),[e])}},293:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(43);const o=t=>t&&"function"!==typeof t?e=>{t.current=e}:t;const i=function(t,e){return(0,r.useMemo)((()=>function(t,e){const n=o(t),r=o(e);return t=>{n&&n(t),r&&r(t)}}(t,e)),[t,e])}},187:(t,e,n)=>{"use strict";n.d(e,{A:()=>a});var r=n(456),o=n(293),i=n(43);const a=function(t){let{children:e,in:n,onExited:a,mountOnEnter:s,unmountOnExit:u}=t;const c=(0,i.useRef)(null),l=(0,i.useRef)(n),d=(0,r.A)(a);(0,i.useEffect)((()=>{n?l.current=!0:d(c.current)}),[n,d]);const f=(0,o.A)(c,e.ref),p=(0,i.cloneElement)(e,{ref:f});return n?p:u||!l.current&&s?null:p}},901:(t,e,n)=>{"use strict";n.d(e,{A:()=>i,u:()=>o});var r=n(43);const o=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=t?String(t):e||null},i=r.createContext(null)},466:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});const r=n(43).createContext(null)},763:(t,e,n)=>{"use strict";n.d(e,{A:()=>v,J:()=>f});var r=n(43),o=n(466),i=n(901),a=n(187),s=n(579);const u=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],l=["as"];function d(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function f(t){let{active:e,eventKey:n,mountOnEnter:a,transition:s,unmountOnExit:l,role:f="tabpanel",onEnter:p,onEntering:v,onEntered:E,onExit:x,onExiting:m,onExited:h}=t,b=d(t,u);const y=(0,r.useContext)(o.A);if(!y)return[Object.assign({},b,{role:f}),{eventKey:n,isActive:e,mountOnEnter:a,transition:s,unmountOnExit:l,onEnter:p,onEntering:v,onEntered:E,onExit:x,onExiting:m,onExited:h}];const{activeKey:g,getControlledId:O,getControllerId:C}=y,w=d(y,c),A=(0,i.u)(n);return[Object.assign({},b,{role:f,id:O(n),"aria-labelledby":C(n)}),{eventKey:n,isActive:null==e&&null!=A?(0,i.u)(g)===A:e,transition:s||w.transition,mountOnEnter:null!=a?a:w.mountOnEnter,unmountOnExit:null!=l?l:w.unmountOnExit,onEnter:p,onEntering:v,onEntered:E,onExit:x,onExiting:m,onExited:h}]}const p=r.forwardRef(((t,e)=>{let{as:n="div"}=t,r=d(t,l);const[u,{isActive:c,onEnter:p,onEntering:v,onEntered:E,onExit:x,onExiting:m,onExited:h,mountOnEnter:b,unmountOnExit:y,transition:g=a.A}]=f(r);return(0,s.jsx)(o.A.Provider,{value:null,children:(0,s.jsx)(i.A.Provider,{value:null,children:(0,s.jsx)(g,{in:c,onEnter:p,onEntering:v,onEntered:E,onExit:x,onExiting:m,onExited:h,mountOnEnter:b,unmountOnExit:y,children:(0,s.jsx)(n,Object.assign({},u,{ref:e,hidden:!c,"aria-hidden":!c}))})})})}));p.displayName="TabPanel";const v=p},731:(t,e,n)=>{"use strict";n.d(e,{A:()=>y});var r=n(43);function o(t,e,n){const o=(0,r.useRef)(void 0!==t),[i,a]=(0,r.useState)(e),s=void 0!==t,u=o.current;return o.current=s,!s&&u&&i!==e&&a(e),[s?t:i,(0,r.useCallback)((function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];const[o,...i]=e;let s=null==n?void 0:n(o,...i);return a(o),s}),[n])]}const i={prefix:String(Math.round(1e10*Math.random())),current:0},a=r.createContext(i),s=r.createContext(!1);let u=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),c=new WeakMap;function l(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,r.useContext)(a),n=(0,r.useRef)(null);if(null===n.current&&!t){var o,i;let t=null===(i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===i||null===(o=i.ReactCurrentOwner)||void 0===o?void 0:o.current;if(t){let n=c.get(t);null==n?c.set(t,{id:e.current,state:t.memoizedState}):t.memoizedState!==n.state&&(e.current=n.id,c.delete(t))}n.current=++e.current}return n.current}const d="function"===typeof r.useId?function(t){let e=r.useId(),[n]=(0,r.useState)("function"===typeof r.useSyncExternalStore?r.useSyncExternalStore(v,f,p):(0,r.useContext)(s)),o=n?"react-aria":"react-aria".concat(i.prefix);return t||"".concat(o,"-").concat(e)}:function(t){let e=(0,r.useContext)(a);e!==i||u||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=l(!!t),o="react-aria".concat(e.prefix);return t||"".concat(o,"-").concat(n)};function f(){return!1}function p(){return!0}function v(t){return()=>{}}var E=n(466),x=n(901),m=n(763),h=n(579);const b=t=>{const{id:e,generateChildId:n,onSelect:i,activeKey:a,defaultActiveKey:s,transition:u,mountOnEnter:c,unmountOnExit:l,children:f}=t,[p,v]=o(a,s,i),m=d(e),b=(0,r.useMemo)((()=>n||((t,e)=>m?"".concat(m,"-").concat(e,"-").concat(t):null)),[m,n]),y=(0,r.useMemo)((()=>({onSelect:v,activeKey:p,transition:u,mountOnEnter:c||!1,unmountOnExit:l||!1,getControlledId:t=>b(t,"tabpane"),getControllerId:t=>b(t,"tab")})),[v,p,u,c,l,b]);return(0,h.jsx)(E.A.Provider,{value:y,children:(0,h.jsx)(x.A.Provider,{value:v||null,children:f})})};b.Panel=m.A;const y=b},740:t=>{"use strict";t.exports=function(t,e,n,r,o,i,a,s){if(!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],l=0;(u=new Error(e.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},197:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,i.default)((function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=null;return e.forEach((function(t){if(null==o){var e=t.apply(void 0,n);null!=e&&(o=e)}})),o}))};var r,o=n(534),i=(r=o)&&r.__esModule?r:{default:r};t.exports=e.default},534:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){function e(e,n,r,o,i,a){var s=o||"<<anonymous>>",u=a||r;if(null==n[r])return e?new Error("Required "+i+" `"+u+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,l=Array(c>6?c-6:0),d=6;d<c;d++)l[d-6]=arguments[d];return t.apply(void 0,[n,r,s,i,u].concat(l))}var n=e.bind(null,!1);return n.isRequired=e.bind(null,!0),n},t.exports=e.default},497:(t,e,n)=>{"use strict";var r=n(218);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},173:(t,e,n)=>{t.exports=n(497)()},218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},51:(t,e,n)=>{"use strict";n.d(e,{A:()=>W});var r=n(139),o=n.n(r),i=n(43),a=n(587);function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}var u=n(950);const c=!1,l=i.createContext(null);var d="unmounted",f="exited",p="entering",v="entered",E="exiting",x=function(t){var e,n;function r(e,n){var r;r=t.call(this,e,n)||this;var o,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(o=f,r.appearStatus=p):o=v:o=e.unmountOnExit||e.mountOnEnter?d:f,r.state={status:o},r.nextCallback=null,r}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,s(e,n),r.getDerivedStateFromProps=function(t,e){return t.in&&e.status===d?{status:f}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==v&&(e=p):n!==p&&n!==v||(e=E)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!==typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},o.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:d})},o.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[u.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!t&&!n||c?this.safeSetState({status:v},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:p},(function(){e.props.onEntering(i,a),e.onTransitionEnd(l,(function(){e.safeSetState({status:v},(function(){e.props.onEntered(i,a)}))}))})))},o.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:u.findDOMNode(this);e&&!c?(this.props.onExit(r),this.safeSetState({status:E},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},o.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},o.render=function(){var t=this.state.status;if(t===d)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,a.A)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(l.Provider,{value:null},"function"===typeof n?n(t,r):i.cloneElement(i.Children.only(n),r))},r}(i.Component);function m(){}x.contextType=l,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},x.UNMOUNTED=d,x.EXITED=f,x.ENTERING=p,x.ENTERED=v,x.EXITING=E;const h=x;function b(t){var e=function(t){return t&&t.ownerDocument||document}(t);return e&&e.defaultView||window}var y=/([A-Z])/g;var g=/^ms-/;function O(t){return function(t){return t.replace(y,"-$1").toLowerCase()}(t).replace(g,"-ms-")}var C=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const w=function(t,e){var n="",r="";if("string"===typeof e)return t.style.getPropertyValue(O(e))||function(t,e){return b(t).getComputedStyle(t,e)}(t).getPropertyValue(O(e));Object.keys(e).forEach((function(o){var i=e[o];i||0===i?!function(t){return!(!t||!C.test(t))}(o)?n+=O(o)+": "+i+";":r+=o+"("+i+") ":t.style.removeProperty(O(o))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n},A=!("undefined"===typeof window||!window.document||!window.document.createElement);var S=!1,j=!1;try{var N={get passive(){return S=!0},get once(){return j=S=!0}};A&&(window.addEventListener("test",N,N),window.removeEventListener("test",N,!0))}catch(B){}const k=function(t,e,n,r){if(r&&"boolean"!==typeof r&&!j){var o=r.once,i=r.capture,a=n;!j&&o&&(a=n.__once||function t(r){this.removeEventListener(e,t,i),n.call(this,r)},n.__once=a),t.addEventListener(e,a,S?r:i)}t.addEventListener(e,n,r)};const R=function(t,e,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;t.removeEventListener(e,n,o),n.__once&&t.removeEventListener(e,n.__once,o)};const _=function(t,e,n,r){return k(t,e,n,r),function(){R(t,e,n,r)}};function P(t,e,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent(e,n,r),t.dispatchEvent(o)}}(t,"transitionend",!0)}),e+n),i=_(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function T(t,e,n,r){null==n&&(n=function(t){var e=w(t,"transitionDuration")||"",n=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*n}(t)||0);var o=P(t,n,r),i=_(t,"transitionend",e);return function(){o(),i()}}function I(t,e){const n=w(t,e)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function D(t,e){const n=I(t,"transitionDuration"),r=I(t,"transitionDelay"),o=T(t,(n=>{n.target===t&&(o(),e(n))}),n+r)}var K=n(293);var L=n(579);const M=i.forwardRef(((t,e)=>{let{onEnter:n,onEntering:r,onEntered:o,onExit:a,onExiting:s,onExited:c,addEndListener:l,children:d,childRef:f,...p}=t;const v=(0,i.useRef)(null),E=(0,K.A)(v,f),x=t=>{var e;E((e=t)&&"setState"in e?u.findDOMNode(e):null!=e?e:null)},m=t=>e=>{t&&v.current&&t(v.current,e)},b=(0,i.useCallback)(m(n),[n]),y=(0,i.useCallback)(m(r),[r]),g=(0,i.useCallback)(m(o),[o]),O=(0,i.useCallback)(m(a),[a]),C=(0,i.useCallback)(m(s),[s]),w=(0,i.useCallback)(m(c),[c]),A=(0,i.useCallback)(m(l),[l]);return(0,L.jsx)(h,{ref:e,...p,onEnter:b,onEntered:g,onEntering:y,onExit:O,onExited:w,onExiting:C,addEndListener:A,nodeRef:v,children:"function"===typeof d?(t,e)=>d(t,{...e,ref:x}):i.cloneElement(d,{ref:x})})})),U={[p]:"show",[v]:"show"},F=i.forwardRef(((t,e)=>{let{className:n,children:r,transitionClasses:a={},onEnter:s,...u}=t;const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},l=(0,i.useCallback)(((t,e)=>{!function(t){t.offsetHeight}(t),null==s||s(t,e)}),[s]);return(0,L.jsx)(M,{ref:e,addEndListener:D,...c,onEnter:l,childRef:r.ref,children:(t,e)=>i.cloneElement(r,{...e,className:o()("fade",n,r.props.className,U[t],a[t])})})}));F.displayName="Fade";const W=F},328:(t,e,n)=>{"use strict";n.d(e,{A:()=>v});var r=n(173),o=n.n(r),i=(n(43),n(731)),a=n(599),s=n(579);const u=t=>{let{transition:e,...n}=t;return(0,s.jsx)(i.A,{...n,transition:(0,a.A)(e)})};u.displayName="TabContainer";const c=u;var l=n(706),d=n(429);const f={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},p=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};p.propTypes=f;const v=Object.assign(p,{Container:c,Content:l.A,Pane:d.A})},706:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(43),o=n(139),i=n.n(o),a=n(852),s=n(579);const u=r.forwardRef(((t,e)=>{let{className:n,bsPrefix:r,as:o="div",...u}=t;return r=(0,a.oU)(r,"tab-content"),(0,s.jsx)(o,{ref:e,className:i()(n,r),...u})}));u.displayName="TabContent";const c=u},429:(t,e,n)=>{"use strict";n.d(e,{A:()=>v});var r=n(139),o=n.n(r),i=n(43),a=n(901),s=n(466),u=n(763),c=n(852),l=n(51),d=n(599),f=n(579);const p=i.forwardRef(((t,e)=>{let{bsPrefix:n,transition:r,...i}=t;const[{className:p,as:v="div",...E},{isActive:x,onEnter:m,onEntering:h,onEntered:b,onExit:y,onExiting:g,onExited:O,mountOnEnter:C,unmountOnExit:w,transition:A=l.A}]=(0,u.J)({...i,transition:(0,d.A)(r)}),S=(0,c.oU)(n,"tab-pane");return(0,f.jsx)(s.A.Provider,{value:null,children:(0,f.jsx)(a.A.Provider,{value:null,children:(0,f.jsx)(A,{in:x,onEnter:m,onEntering:h,onEntered:b,onExit:y,onExiting:g,onExited:O,mountOnEnter:C,unmountOnExit:w,children:(0,f.jsx)(v,{...E,ref:e,className:o()(p,S,x&&"active")})})})})}));p.displayName="TabPane";const v=p},434:(t,e,n)=>{"use strict";n.d(e,{A:()=>it});var r=n(43);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(null,arguments)}var i=n(587);n(740);function a(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function s(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}function u(t,e){return Object.keys(e).reduce((function(n,u){var c,l=n,d=l[a(u)],f=l[u],p=(0,i.A)(l,[a(u),u].map(s)),v=e[u],E=function(t,e,n){var o=(0,r.useRef)(void 0!==t),i=(0,r.useState)(e),a=i[0],s=i[1],u=void 0!==t,c=o.current;return o.current=u,!u&&c&&a!==e&&s(e),[u?t:a,(0,r.useCallback)((function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[t].concat(r)),s(t)}),[n])]}(f,d,t[v]),x=E[0],m=E[1];return o({},p,((c={})[u]=x,c[v]=m,c))}),t)}function c(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function l(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!==n&&void 0!==n?n:null}.bind(this))}function d(t,e){try{var n=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}c.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0;var f=n(731),p=n(139),v=n.n(p),E=(n(197),Function.prototype.bind.call(Function.prototype.call,[].slice));var x=n(293);const m=r.createContext(null);m.displayName="NavContext";const h=m;var b=n(901),y=n(466);const g="data-rr-ui-";function O(t){return"".concat(g).concat(t)}var C=n(456),w=n(579);const A=["as","disabled"];function S(t){let{tagName:e,disabled:n,href:r,target:o,rel:i,role:a,onClick:s,tabIndex:u=0,type:c}=t;e||(e=null!=r||null!=o||null!=i?"a":"button");const l={tagName:e};if("button"===e)return[{type:c||"button",disabled:n},l];const d=t=>{(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==s||s(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===e?o:void 0,"aria-disabled":n||void 0,rel:"a"===e?i:void 0,onClick:d,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),d(t))}},l]}const j=r.forwardRef(((t,e)=>{let{as:n,disabled:r}=t,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,A);const[i,{tagName:a}]=S(Object.assign({tagName:n,disabled:r},o));return(0,w.jsx)(a,Object.assign({},o,i,{ref:e}))}));j.displayName="Button";const N=j,k=["as","active","eventKey"];function R(t){let{key:e,onClick:n,active:o,id:i,role:a,disabled:s}=t;const u=(0,r.useContext)(b.A),c=(0,r.useContext)(h),l=(0,r.useContext)(y.A);let d=o;const f={role:a};if(c){a||"tablist"!==c.role||(f.role="tab");const t=c.getControllerId(null!=e?e:null),n=c.getControlledId(null!=e?e:null);f[O("event-key")]=e,f.id=t||i,d=null==o&&null!=e?c.activeKey===e:o,!d&&(null!=l&&l.unmountOnExit||null!=l&&l.mountOnEnter)||(f["aria-controls"]=n)}return"tab"===f.role&&(f["aria-selected"]=d,d||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=(0,C.A)((t=>{s||(null==n||n(t),null!=e&&u&&!t.isPropagationStopped()&&u(e,t))})),[f,{isActive:d}]}const _=r.forwardRef(((t,e)=>{let{as:n=N,active:r,eventKey:o}=t,i=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,k);const[a,s]=R(Object.assign({key:(0,b.u)(o,i.href),active:r},i));return a[O("active")]=s.isActive,(0,w.jsx)(n,Object.assign({},i,a,{ref:e}))}));_.displayName="NavItem";const P=_,T=["as","onSelect","activeKey","role","onKeyDown"];const I=()=>{},D=O("event-key"),K=r.forwardRef(((t,e)=>{let{as:n="div",onSelect:o,activeKey:i,role:a,onKeyDown:s}=t,u=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,T);const c=function(){const[,t]=(0,r.useReducer)((t=>!t),!1);return t}(),l=(0,r.useRef)(!1),d=(0,r.useContext)(b.A),f=(0,r.useContext)(y.A);let p,v;f&&(a=a||"tablist",i=f.activeKey,p=f.getControlledId,v=f.getControllerId);const m=(0,r.useRef)(null),g=t=>{const e=m.current;if(!e)return null;const n=(r=e,o="[".concat(D,"]:not([aria-disabled=true])"),E(r.querySelectorAll(o)));var r,o;const i=e.querySelector("[aria-selected=true]");if(!i||i!==document.activeElement)return null;const a=n.indexOf(i);if(-1===a)return null;let s=a+t;return s>=n.length&&(s=0),s<0&&(s=n.length-1),n[s]},O=(t,e)=>{null!=t&&(null==o||o(t,e),null==d||d(t,e))};(0,r.useEffect)((()=>{if(m.current&&l.current){const t=m.current.querySelector("[".concat(D,"][aria-selected=true]"));null==t||t.focus()}l.current=!1}));const C=(0,x.A)(e,m);return(0,w.jsx)(b.A.Provider,{value:O,children:(0,w.jsx)(h.Provider,{value:{role:a,activeKey:(0,b.u)(i),getControlledId:p||I,getControllerId:v||I},children:(0,w.jsx)(n,Object.assign({},u,{onKeyDown:t=>{if(null==s||s(t),!f)return;let e;switch(t.key){case"ArrowLeft":case"ArrowUp":e=g(-1);break;case"ArrowRight":case"ArrowDown":e=g(1);break;default:return}var n;e&&(t.preventDefault(),O(e.dataset[(n="EventKey","".concat("rrUi").concat(n))]||null,t),l.current=!0,c())},ref:C,role:a}))})})}));K.displayName="Nav";const L=Object.assign(K,{Item:P});var M=n(852);const U=r.createContext(null);U.displayName="NavbarContext";const F=U,W=r.createContext(null);W.displayName="CardHeaderContext";const B=W,q=r.forwardRef(((t,e)=>{let{className:n,bsPrefix:r,as:o="div",...i}=t;return r=(0,M.oU)(r,"nav-item"),(0,w.jsx)(o,{ref:e,className:v()(n,r),...i})}));q.displayName="NavItem";const V=q;n(232);"undefined"!==typeof n.g&&n.g.navigator&&n.g.navigator.product,new WeakMap;const H=["onKeyDown"];const X=r.forwardRef(((t,e)=>{let{onKeyDown:n}=t,r=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,H);const[o]=S(Object.assign({tagName:"a"},r)),i=(0,C.A)((t=>{o.onKeyDown(t),null==n||n(t)}));return(a=r.href)&&"#"!==a.trim()&&"button"!==r.role?(0,w.jsx)("a",Object.assign({ref:e},r,{onKeyDown:n})):(0,w.jsx)("a",Object.assign({ref:e},r,o,{onKeyDown:i}));var a}));X.displayName="Anchor";const Y=X,z=r.forwardRef(((t,e)=>{let{bsPrefix:n,className:r,as:o=Y,active:i,eventKey:a,disabled:s=!1,...u}=t;n=(0,M.oU)(n,"nav-link");const[c,l]=R({key:(0,b.u)(a,u.href),active:i,disabled:s,...u});return(0,w.jsx)(o,{...u,...c,ref:e,disabled:s,className:v()(r,n,s&&"disabled",l.isActive&&"active")})}));z.displayName="NavLink";const G=z,J=r.forwardRef(((t,e)=>{const{as:n="div",bsPrefix:o,variant:i,fill:a=!1,justify:s=!1,navbar:c,navbarScroll:l,className:d,activeKey:f,...p}=u(t,{activeKey:"onSelect"}),E=(0,M.oU)(o,"nav");let x,m,h=!1;const b=(0,r.useContext)(F),y=(0,r.useContext)(B);return b?(x=b.bsPrefix,h=null==c||c):y&&({cardHeaderBsPrefix:m}=y),(0,w.jsx)(L,{as:n,ref:e,activeKey:f,className:v()(d,{[E]:!h,["".concat(x,"-nav")]:h,["".concat(x,"-nav-scroll")]:h&&l,["".concat(m,"-").concat(i)]:!!m,["".concat(E,"-").concat(i)]:!!i,["".concat(E,"-fill")]:a,["".concat(E,"-justified")]:s}),...p})}));J.displayName="Nav";const Z=Object.assign(J,{Item:V,Link:G});var $=n(706),Q=n(429);function tt(t,e){let n=0;return r.Children.map(t,(t=>r.isValidElement(t)?e(t,n++):t))}var et=n(599);function nt(t){let e;return function(t,e){let n=0;r.Children.forEach(t,(t=>{r.isValidElement(t)&&e(t,n++)}))}(t,(t=>{null==e&&(e=t.props.eventKey)})),e}function rt(t){const{title:e,eventKey:n,disabled:r,tabClassName:o,tabAttrs:i,id:a}=t.props;return null==e?null:(0,w.jsx)(V,{as:"li",role:"presentation",children:(0,w.jsx)(G,{as:"button",type:"button",eventKey:n,disabled:r,id:a,className:o,...i,children:e})})}const ot=t=>{const{id:e,onSelect:n,transition:r,mountOnEnter:o=!1,unmountOnExit:i=!1,variant:a="tabs",children:s,activeKey:c=nt(s),...l}=u(t,{activeKey:"onSelect"});return(0,w.jsxs)(f.A,{id:e,activeKey:c,onSelect:n,transition:(0,et.A)(r),mountOnEnter:o,unmountOnExit:i,children:[(0,w.jsx)(Z,{id:e,...l,role:"tablist",as:"ul",variant:a,children:tt(s,rt)}),(0,w.jsx)($.A,{children:tt(s,(t=>{const e={...t.props};return delete e.title,delete e.disabled,delete e.tabClassName,delete e.tabAttrs,(0,w.jsx)(Q.A,{...e})}))})]})};ot.displayName="Tabs";const it=ot},852:(t,e,n)=>{"use strict";n.d(e,{oU:()=>c});var r=n(43);n(579);const o=["xxl","xl","lg","md","sm","xs"],i="xs",a=r.createContext({prefixes:{},breakpoints:o,minBreakpoint:i}),{Consumer:s,Provider:u}=a;function c(t,e){const{prefixes:n}=(0,r.useContext)(a);return t||n[e]||e}},599:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var r=n(187),o=n(51);function i(t){return"boolean"===typeof t?t?o.A:r.A:t}},139:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=a(t,i(n)))}return t}function i(t){if("string"===typeof t||"number"===typeof t)return t;if("object"!==typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=a(e,n));return e}function a(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},587:(t,e,n)=>{"use strict";function r(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}n.d(e,{A:()=>r})}}]);
//# sourceMappingURL=887.b3eb707f.chunk.js.map