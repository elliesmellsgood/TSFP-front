import{v as w,g as v}from"./vm.594ed3a6.js";import{w as S,o as C,g as A,n as H,r as M,a as D,ag as E,h as Q,ah as U,ai as _,aj as j,c as T,k as y,ak as F,al as G}from"./index.4d875d08.js";import{r as q,b as k}from"./focus-manager.db5612a5.js";const L={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},z=["beforeShow","show","beforeHide","hide"];function J({showing:e,canShow:o,hideOnRouteChange:a,handleShow:n,handleHide:l,processOnMount:f}){const s=A(),{props:r,emit:i,proxy:m}=s;let u;function c(t){e.value===!0?g(t):p(t)}function p(t){if(r.disable===!0||t!==void 0&&t.qAnchorHandled===!0||o!==void 0&&o(t)!==!0)return;const d=r["onUpdate:modelValue"]!==void 0;d===!0&&(i("update:modelValue",!0),u=t,H(()=>{u===t&&(u=void 0)})),(r.modelValue===null||d===!1)&&b(t)}function b(t){e.value!==!0&&(e.value=!0,i("beforeShow",t),n!==void 0?n(t):i("show",t))}function g(t){if(r.disable===!0)return;const d=r["onUpdate:modelValue"]!==void 0;d===!0&&(i("update:modelValue",!1),u=t,H(()=>{u===t&&(u=void 0)})),(r.modelValue===null||d===!1)&&h(t)}function h(t){e.value!==!1&&(e.value=!1,i("beforeHide",t),l!==void 0?l(t):i("hide",t))}function $(t){r.disable===!0&&t===!0?r["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!1):t===!0!==e.value&&(t===!0?b:h)(u)}S(()=>r.modelValue,$),a!==void 0&&w(s)===!0&&S(()=>m.$route.fullPath,()=>{a.value===!0&&e.value===!0&&g()}),f===!0&&C(()=>{$(r.modelValue)});const V={show:p,hide:g,toggle:c};return Object.assign(m,V),V}const P=[];function K(e){return P.find(o=>o.contentEl!==null&&o.contentEl.contains(e))}function B(e,o){do{if(e.$options.name==="QMenu"){if(e.hide(o),e.$props.separateClosePopup===!0)return v(e)}else if(e.__qPortal===!0){const a=v(e);return a!==void 0&&a.$options.name==="QPopupProxy"?(e.hide(o),a):e}e=v(e)}while(e!=null)}function R(e,o,a){for(;a!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(a--,e.$options.name==="QMenu"){e=B(e,o);continue}e.hide(o)}e=v(e)}}function I(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function X(e,o,a,n){const l=M(!1),f=M(!1);let s=null;const r={},i=n==="dialog"&&I(e);function m(c){if(c===!0){q(r),f.value=!0;return}f.value=!1,l.value===!1&&(i===!1&&s===null&&(s=_(!1,n)),l.value=!0,P.push(e.proxy),k(r))}function u(c){if(f.value=!1,c!==!0)return;q(r),l.value=!1;const p=P.indexOf(e.proxy);p!==-1&&P.splice(p,1),s!==null&&(j(s),s=null)}return D(()=>{u(!0)}),e.proxy.__qPortal=!0,E(e.proxy,"contentEl",()=>o.value),{showPortal:m,hidePortal:u,portalIsActive:l,portalIsAccessible:f,renderPortal:()=>i===!0?a():l.value===!0?[Q(U,{to:s},a())]:void 0}}const Y={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Z(e,o=()=>{},a=()=>{}){return{transitionProps:T(()=>{const n=`q-transition--${e.transitionShow||o()}`,l=`q-transition--${e.transitionHide||a()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:T(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function x(e,o,a){let n;function l(){n!==void 0&&(F.remove(n),n=void 0)}return y(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){n={condition:()=>a.value===!0,handler:o},F.add(n)}}}function ee(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,G(o))}}}export{Y as a,z as b,Z as c,J as d,X as e,x as f,ee as g,K as h,R as i,B as j,P as p,L as u};