import{Q as v}from"./QImg.bccb1aad.js";import{Q as R}from"./QIcon.5ca772cc.js";import{R as le}from"./Ripple.cf9a4ce0.js";import{W as $,r as I,c as x,k as ie,o as re,i as ce,x as de,h as b,a3 as ue,K as O,L as ve,ar as pe,I as me,g as W,aC as _e,H as G,a7 as he,a8 as z,a4 as fe,a9 as ge,U as K,aa as Y,ab as Z,S as D,w as be,n as xe,J as ye,P as X,aL as we,Y as Ee,m as qe,y as Ce,t as o,v as J,d as t,C as e,z as w}from"./index.4d875d08.js";import{i as Pe,Q as Te}from"./QPage.9f43aec5.js";import{Q as Ae}from"./QTabs.8c919e46.js";import{a as m,Q as _}from"./QCard.c6fa8f42.js";import{g as ee,s as te}from"./touch.f68f2699.js";import{c as Me}from"./selection.efe461ed.js";import{b as ke}from"./vm.594ed3a6.js";import{u as Se,a as Ne}from"./focus-manager.db5612a5.js";import{Q as Be}from"./QInput.2b55d701.js";import{_ as Re}from"./logo_1-1-text.e6389406.js";import"./use-timeout.d612f645.js";import"./rtl.b51694b1.js";let je=0;const Ie=["click","keydown"],Ue={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${je++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ze(s,l,d,c){const n=ce(ue,$);if(n===$)return console.error("QTab/QRouteTab component needs to be child of QTabs"),$;const{proxy:a}=W(),i=I(null),h=I(null),E=I(null),k=x(()=>s.disable===!0||s.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},s.ripple===!0?{}:s.ripple)),f=x(()=>n.currentModel.value===s.name),S=x(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(f.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(s.icon&&s.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(s.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(s.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),g=x(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(s.contentClass!==void 0?` ${s.contentClass}`:"")),q=x(()=>s.disable===!0||n.hasFocus.value===!0||f.value===!1&&n.hasActiveTab.value===!0?-1:s.tabindex||0);function T(u,y){if(y!==!0&&i.value!==null&&i.value.focus(),s.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&O(u);return}if(c===void 0){n.updateModel({name:s.name}),d("click",u);return}if(c.hasRouterLink.value===!0){const A=(C={})=>{let P;const Q=C.to===void 0||_e(C.to,s.to)===!0?n.avoidRouteWatcher=Pe():null;return c.navigateToRouterLink(u,{...C,returnRouterError:!0}).catch(N=>{P=N}).then(N=>{if(Q===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,P===void 0&&(N===void 0||N.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:s.name})),C.returnRouterError===!0)return P!==void 0?Promise.reject(P):N})};d("click",u,A),u.defaultPrevented!==!0&&A();return}d("click",u)}function j(u){ve(u,[13,32])?T(u,!0):pe(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&n.onKbdNavigate(u.keyCode,a.$el)===!0&&O(u),d("keydown",u)}function B(){const u=n.tabProps.value.narrowIndicator,y=[],A=b("div",{ref:E,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});s.icon!==void 0&&y.push(b(R,{class:"q-tab__icon",name:s.icon})),s.label!==void 0&&y.push(b("div",{class:"q-tab__label"},s.label)),s.alert!==!1&&y.push(s.alertIcon!==void 0?b(R,{class:"q-tab__alert-icon",color:s.alert!==!0?s.alert:void 0,name:s.alertIcon}):b("div",{class:"q-tab__alert"+(s.alert!==!0?` text-${s.alert}`:"")})),u===!0&&y.push(A);const C=[b("div",{class:"q-focus-helper",tabindex:-1,ref:i}),b("div",{class:g.value},me(l.default,y))];return u===!1&&C.push(A),C}const U={name:x(()=>s.name),rootRef:h,tabIndicatorRef:E,routeData:c};ie(()=>{n.unregisterTab(U)}),re(()=>{n.registerTab(U)});function V(u,y){const A={ref:h,class:S.value,tabindex:q.value,role:"tab","aria-selected":f.value===!0?"true":"false","aria-disabled":s.disable===!0?"true":void 0,onClick:T,onKeydown:j,...y};return de(b(u,A,B()),[[le,k.value]])}return{renderTab:V,$tabs:n}}var F=G({name:"QTab",props:Ue,emits:Ie,setup(s,{slots:l,emit:d}){const{renderTab:c}=ze(s,l,d);return()=>c("div")}});function Oe(s){const l=[.06,6,50];return typeof s=="string"&&s.length&&s.split(":").forEach((d,c)=>{const n=parseFloat(d);n&&(l[c]=n)}),l}var Ve=he({name:"touch-swipe",beforeMount(s,{value:l,arg:d,modifiers:c}){if(c.mouse!==!0&&z.has.touch!==!0)return;const n=c.mouseCapture===!0?"Capture":"",a={handler:l,sensitivity:Oe(d),direction:ee(c),noop:fe,mouseStart(i){te(i,a)&&ge(i)&&(K(a,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(i,!0))},touchStart(i){if(te(i,a)){const h=i.target;K(a,"temp",[[h,"touchmove","move","notPassiveCapture"],[h,"touchcancel","end","notPassiveCapture"],[h,"touchend","end","notPassiveCapture"]]),a.start(i)}},start(i,h){z.is.firefox===!0&&Y(s,!0);const E=Z(i);a.event={x:E.left,y:E.top,time:Date.now(),mouse:h===!0,dir:!1}},move(i){if(a.event===void 0)return;if(a.event.dir!==!1){O(i);return}const h=Date.now()-a.event.time;if(h===0)return;const E=Z(i),k=E.left-a.event.x,f=Math.abs(k),S=E.top-a.event.y,g=Math.abs(S);if(a.event.mouse!==!0){if(f<a.sensitivity[1]&&g<a.sensitivity[1]){a.end(i);return}}else if(f<a.sensitivity[2]&&g<a.sensitivity[2])return;const q=f/h,T=g/h;a.direction.vertical===!0&&f<g&&f<100&&T>a.sensitivity[0]&&(a.event.dir=S<0?"up":"down"),a.direction.horizontal===!0&&f>g&&g<100&&q>a.sensitivity[0]&&(a.event.dir=k<0?"left":"right"),a.direction.up===!0&&f<g&&S<0&&f<100&&T>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&f<g&&S>0&&f<100&&T>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&f>g&&k<0&&g<100&&q>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&f>g&&k>0&&g<100&&q>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(O(i),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Me(),a.styleCleanup=j=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const B=()=>{document.body.classList.remove("no-pointer-events--children")};j===!0?setTimeout(B,50):B()}),a.handler({evt:i,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:h,distance:{x:f,y:g}})):a.end(i)},end(i){a.event!==void 0&&(D(a,"temp"),z.is.firefox===!0&&Y(s,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),i!==void 0&&a.event.dir!==!1&&O(i),a.event=void 0)}};if(s.__qtouchswipe=a,c.mouse===!0){const i=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";K(a,"main",[[s,"mousedown","mouseStart",`passive${i}`]])}z.has.touch===!0&&K(a,"main",[[s,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[s,"touchmove","noop","notPassiveCapture"]])},updated(s,l){const d=s.__qtouchswipe;d!==void 0&&(l.oldValue!==l.value&&(typeof l.value!="function"&&d.end(),d.handler=l.value),d.direction=ee(l.modifiers))},beforeUnmount(s){const l=s.__qtouchswipe;l!==void 0&&(D(l,"main"),D(l,"temp"),z.is.firefox===!0&&Y(s,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete s.__qtouchswipe)}});function Qe(){const s=new Map;return{getCache:function(l,d){return s[l]===void 0?s[l]=d:s[l]},getCacheWithFn:function(l,d){return s[l]===void 0?s[l]=d():s[l]}}}const Le={name:{required:!0},disable:Boolean},se={setup(s,{slots:l}){return()=>b("div",{class:"q-panel scroll",role:"tabpanel"},X(l.default))}},Ke={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},$e=["update:modelValue","beforeTransition","transition"];function Ye(){const{props:s,emit:l,proxy:d}=W(),{getCacheWithFn:c}=Qe();let n,a;const i=I(null),h=I(null);function E(r){const p=s.vertical===!0?"up":"left";P((d.$q.lang.rtl===!0?-1:1)*(r.direction===p?1:-1))}const k=x(()=>[[Ve,E,void 0,{horizontal:s.vertical!==!0,vertical:s.vertical,mouse:!0}]]),f=x(()=>s.transitionPrev||`slide-${s.vertical===!0?"down":"right"}`),S=x(()=>s.transitionNext||`slide-${s.vertical===!0?"up":"left"}`),g=x(()=>`--q-transition-duration: ${s.transitionDuration}ms`),q=x(()=>typeof s.modelValue=="string"||typeof s.modelValue=="number"?s.modelValue:String(s.modelValue)),T=x(()=>({include:s.keepAliveInclude,exclude:s.keepAliveExclude,max:s.keepAliveMax})),j=x(()=>s.keepAliveInclude!==void 0||s.keepAliveExclude!==void 0);be(()=>s.modelValue,(r,p)=>{const M=u(r)===!0?y(r):-1;a!==!0&&C(M===-1?0:M<y(p)?-1:1),i.value!==M&&(i.value=M,l("beforeTransition",r,p),xe(()=>{l("transition",r,p)}))});function B(){P(1)}function U(){P(-1)}function V(r){l("update:modelValue",r)}function u(r){return r!=null&&r!==""}function y(r){return n.findIndex(p=>p.props.name===r&&p.props.disable!==""&&p.props.disable!==!0)}function A(){return n.filter(r=>r.props.disable!==""&&r.props.disable!==!0)}function C(r){const p=r!==0&&s.animated===!0&&i.value!==-1?"q-transition--"+(r===-1?f.value:S.value):null;h.value!==p&&(h.value=p)}function P(r,p=i.value){let M=p+r;for(;M>-1&&M<n.length;){const L=n[M];if(L!==void 0&&L.props.disable!==""&&L.props.disable!==!0){C(r),a=!0,l("update:modelValue",L.props.name),setTimeout(()=>{a=!1});return}M+=r}s.infinite===!0&&n.length>0&&p!==-1&&p!==n.length&&P(r,r===-1?n.length:-1)}function Q(){const r=y(s.modelValue);return i.value!==r&&(i.value=r),!0}function N(){const r=u(s.modelValue)===!0&&Q()&&n[i.value];return s.keepAlive===!0?[b(we,T.value,[b(j.value===!0?c(q.value,()=>({...se,name:q.value})):se,{key:q.value,style:g.value},()=>r)])]:[b("div",{class:"q-panel scroll",style:g.value,key:q.value,role:"tabpanel"},[r])]}function ae(){if(n.length!==0)return s.animated===!0?[b(ye,{name:h.value},N)]:N()}function oe(r){return n=ke(X(r.default,[])).filter(p=>p.props!==null&&p.props.slot===void 0&&u(p.props.name)===!0),n.length}function ne(){return n}return Object.assign(d,{next:B,previous:U,goTo:V}),{panelIndex:i,panelDirectives:k,updatePanelsList:oe,updatePanelIndex:Q,getPanelContent:ae,getEnabledPanels:A,getPanels:ne,isValidPanelName:u,keepAliveProps:T,needsUniqueKeepAliveWrapper:j,goToPanelByOffset:P,goToPanel:V,nextPanel:B,previousPanel:U}}var H=G({name:"QTabPanel",props:Le,setup(s,{slots:l}){return()=>b("div",{class:"q-tab-panel",role:"tabpanel"},X(l.default))}}),De=G({name:"QTabPanels",props:{...Ke,...Se},emits:$e,setup(s,{slots:l}){const d=W(),c=Ne(s,d.proxy.$q),{updatePanelsList:n,getPanelContent:a,panelDirectives:i}=Ye(),h=x(()=>"q-tab-panels q-panel-parent"+(c.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(l),Ee("div",{class:h.value},a(),"pan",s.swipeable,()=>i.value))}}),Fe="/TSFP-front/assets/banner_menu.d647b68b.jpg",He="/TSFP-front/assets/cafe_4.6d3c00e6.png",We="/TSFP-front/assets/pancake.7230b4e0.png",Ge="/TSFP-front/assets/pasta_1.7d098a02.png";const Xe=e("div",{class:"bg-mask mask-text col-12 column flex-center"},[e("p",{class:"col-2 text-h3"},"MENU"),e("p",{class:"col-2 text-h5"},"\u9580\u5E02\u9910\u9EDE")],-1),Ze={class:"section_1 q-px-xl q-pa-md row justify-center"},Je={style:{"max-width":"1000px"},class:"q-px-md"},et={class:"bg-transparent q-py-md",flat:""},tt={class:"col-sm-8"},st=e("div",{class:"col-sm-2"},[e("div",{class:"text-h5 q-mt-sm q-mb-xs"},"\u98F2\u54C1"),e("div",{class:"text-caption text-grey"}," DRINKS ")],-1),at={class:"bg-transparent q-py-md",flat:""},ot={class:"col-sm-8"},nt=e("div",{class:"col-sm-2"},[e("div",{class:"text-h5 q-mt-sm q-mb-xs"},"\u751C\u9EDE"),e("div",{class:"text-caption text-grey"}," DESSERT ")],-1),lt={class:"bg-transparent q-py-md",flat:""},it={class:"col-sm-8"},rt=e("div",{class:"col-sm-2"},[e("div",{class:"text-h5 q-mt-sm q-mb-xs"},"\u4E3B\u9910"),e("div",{class:"text-caption text-grey"}," MAIN ")],-1),ct={class:"q-gutter-y-sm q-mt-xl"},dt=e("div",{class:"text-h6"},"\u7D93\u5178\u7F8E\u5F0F",-1),ut=e("div",{class:"text-caption text-grey"},"AMERICANO",-1),vt=e("div",{class:"text-h6"},"\u62FF\u9435\u5496\u5561",-1),pt=e("div",{class:"text-caption text-grey"},"LATTE",-1),mt=e("div",{class:"text-h6"},"\u5361\u5E03\u5947\u8AFE",-1),_t=e("div",{class:"text-caption text-grey"},"CAPPUCCINO",-1),ht=e("div",{class:"text-h6"},"\u6469\u5361",-1),ft=e("div",{class:"text-caption text-grey"},"MOCHA",-1),gt=e("div",{class:"text-h6"},"\u7FA9\u5F0F\u6FC3\u7E2E",-1),bt=e("div",{class:"text-caption text-grey"},"ESPRESSO",-1),xt=e("div",{class:"text-h6"},"\u8702\u871C\u6AB8\u6AAC\u725B\u5976",-1),yt=e("div",{class:"text-caption text-grey"},"HONEY LEMON MILK",-1),wt=e("div",{class:"text-h6"},"\u975C\u5CA1\u62B9\u8336\u9BAE\u5976",-1),Et=e("div",{class:"text-caption text-grey"},"SHIZUOKA MATCHA MILK",-1),qt=e("div",{class:"text-h6"},"\u73AB\u7470\u82B1\u8336",-1),Ct=e("div",{class:"text-caption text-grey"},"ROSE TEA",-1),Pt=e("div",{class:"text-h6"},"\u5B63\u7BC0\u9650\u5B9A-\u8349\u8393\u6AFB\u6843\u9B06\u9905",-1),Tt=e("div",{class:"text-caption text-grey"},"STRAWBERRY CHERRY PANCAKE",-1),At=e("div",{class:"text-h6"},"\u5B63\u7BC0\u9650\u5B9A-\u8349\u8393\u5854",-1),Mt=e("div",{class:"text-caption text-grey"},"STRAWBERRY TART",-1),kt=e("div",{class:"text-h6"},"\u7D93\u5178\u8393\u679C",-1),St=e("div",{class:"text-caption text-grey"},"BERRY CAKE",-1),Nt=e("div",{class:"text-h6"},"\u6CE2\u58EB\u9813\u6D3E",-1),Bt=e("div",{class:"text-caption text-grey"},"BOSTON CREAM PIE",-1),Rt=e("div",{class:"text-h6"},"\u860B\u679C\u6D3E",-1),jt=e("div",{class:"text-caption text-grey"},"APPLE PIE",-1),It=e("div",{class:"text-h6"},"\u63D0\u62C9\u7C73\u8607",-1),Ut=e("div",{class:"text-caption text-grey"},"TIRAMISU",-1),zt=e("div",{class:"text-h6"},"\u5496\u5561\u5DE7\u514B\u529B\u86CB\u7CD5",-1),Ot=e("div",{class:"text-caption text-grey"},"COFFEE CHOAOLATE CAKE",-1),Vt=e("div",{class:"text-h6"},"\u6CD5\u5F0F\u53EF\u980C",-1),Qt=e("div",{class:"text-caption text-grey"},"CROISSANT",-1),Lt=e("div",{class:"text-h6"},"\u9999\u8FA3\u756A\u8304\u7FA9\u5927\u5229\u9EB5",-1),Kt=e("div",{class:"text-caption text-grey"},"SPICY TOMATO SPAGHETTI",-1),$t=e("div",{class:"text-h6"},"\u91CE\u83C7\u756A\u8304\u87BA\u65CB\u9EB5",-1),Yt=e("div",{class:"text-caption text-grey"},"MUSHROOM TOMATO ROTINI",-1),Dt=e("div",{class:"text-h6"},"\u5976\u6CB9\u8611\u83C7\u7FA9\u5927\u5229\u9EB5",-1),Ft=e("div",{class:"text-caption text-grey"},"CREAMY MUSHROOM SPAGHETTI",-1),Ht=e("div",{class:"text-h6"},"\u70AD\u70E4\u725B\u6392\u7FA9\u5927\u5229\u9EB5",-1),Wt=e("div",{class:"text-caption text-grey"},"GRILLED STEAK SPAGHETTI",-1),Gt={class:"footer"},Xt={class:"row justify-between footer_container q-px-xl"},Zt={class:"footer_map row items-center col-3"},Jt={class:"row"},es={class:"row col-6"},ts=e("p",{class:"col-12"},"\u7DB2\u7AD9\u5C0E\u89BD",-1),ss={class:"col-6 q-pl-md"},as=e("p",null,"\u652F\u63F4\u670D\u52D9",-1),os={class:"footer_center q-pa-md",style:{width:"170px"}},ns=e("img",{style:{width:"100%"},src:Re},null,-1),ls={style:{width:"100%"},class:"text-center"},is={class:"subscribe column justify-center col-3",style:{"max-width":"300px"}},rs=e("p",null,"\u8A02\u95B1\u96FB\u5B50\u5831\u5373\u6642\u638C\u63E1\u6D3B\u52D5\u6D88\u606F",-1),cs=e("section",{class:"copyright row flex-center"}," \u6CF0\u5C71\u8077\u8A13\u524D\u7AEF\u7DB2\u9801\u5C08\u984C(\u50C5\u4F5C\u5B78\u8853\u4F7F\u7528) by SU-YU-ZHEN ",-1),Cs={__name:"MenuView",setup(s){const l=I("drinks");return(d,c)=>{const n=J("q-sectoin"),a=J("router-link");return qe(),Ce(Te,null,{default:o(()=>[t(n,{class:"banner row"},{default:o(()=>[t(v,{src:Fe,style:{"max-height":"35vh",width:"100vw"}}),Xe]),_:1}),e("section",Ze,[e("div",Je,[t(Ae,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=i=>l.value=i),dense:"",class:"text-grey","active-color":"accent","active-bg-color":"primary",align:"justify","indicator-color":"accent"},{default:o(()=>[t(F,{class:"main_tab",name:"drinks"},{default:o(()=>[e("div",et,[e("div",tt,[t(v,{src:He})]),st])]),_:1}),t(F,{class:"main_tab",name:"dessert"},{default:o(()=>[e("div",at,[e("div",ot,[t(v,{src:We})]),nt])]),_:1}),t(F,{class:"main_tab",name:"main"},{default:o(()=>[e("div",lt,[e("div",it,[t(v,{src:Ge})]),rt])]),_:1})]),_:1},8,["modelValue"]),e("div",ct,[t(De,{modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=i=>l.value=i),animated:"","transition-prev":"scale","transition-next":"scale",class:"bg-transparent text-primary text-center"},{default:o(()=>[t(H,{class:"row justify-center",name:"drinks"},{default:o(()=>[t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677699001/MENU/%E9%BB%91%E5%92%96%E5%95%A1_ofxoxd.jpg"})]),t(_,null,{default:o(()=>[dt,ut]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677670502/MENU/americano_ztqjkp.jpg"})]),t(_,null,{default:o(()=>[vt,pt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700105/MENU/Capuccino.jpg_shugah.jpg"})]),t(_,null,{default:o(()=>[mt,_t]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677699275/MENU/Mocha-1fc71f7_vaynnz.png"})]),t(_,null,{default:o(()=>[ht,ft]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677717532/MENU/andres-vera-BewKTZMv7V0-unsplash_1_ddofre.jpg"})]),t(_,null,{default:o(()=>[gt,bt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677699608/MENU/Milk_Tea_hnytwc.jpg"})]),t(_,null,{default:o(()=>[xt,yt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677699913/MENU/Matcha-Tea-640-1-640x360_qesad3.jpg"})]),t(_,null,{default:o(()=>[wt,Et]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677670701/MENU/rosetea_xzz4he.jpg"})]),t(_,null,{default:o(()=>[qt,Ct]),_:1})]),_:1})]),_:1}),t(H,{class:"row justify-center",name:"dessert"},{default:o(()=>[t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677701193/MENU/chad-montano-gf9777gaYjs-unsplash_1_abcqa8.jpg"})]),t(_,null,{default:o(()=>[Pt,Tt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677701432/MENU/monika-grabkowska-oeTBNwtIgDY-unsplash_iez3uv.jpg"})]),t(_,null,{default:o(()=>[At,Mt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677701577/MENU/e4be661f33bf92f7a0060004e9a0bf85_fkstj5.jpg"})]),t(_,null,{default:o(()=>[kt,St]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700727/MENU/%E6%B3%A2%E5%A3%AB%E9%A0%93%E6%B4%BE_v5qmyq.jpg"})]),t(_,null,{default:o(()=>[Nt,Bt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700828/MENU/%E8%98%8B%E6%9E%9C%E8%9B%8B%E7%B3%95_ujjx7p.jpg"})]),t(_,null,{default:o(()=>[Rt,jt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700963/MENU/%E6%8F%90%E6%8B%89%E7%B1%B3%E8%98%87_lrl9d7.jpg"})]),t(_,null,{default:o(()=>[It,Ut]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700407/MENU/%E5%92%96%E5%95%A1%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95_uh4pup.jpg"})]),t(_,null,{default:o(()=>[zt,Ot]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677701788/MENU/c2ca2234cd7db34deb74b1c355cc3eb5_j5aacm.jpg"})]),t(_,null,{default:o(()=>[Vt,Qt]),_:1})]),_:1})]),_:1}),t(H,{class:"row justify-center",name:"main"},{default:o(()=>[t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677702558/MENU/pasta_ogitcf.jpg"})]),t(_,null,{default:o(()=>[Lt,Kt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677702279/MENU/artem-beliaikin-IpxzngYooAw-unsplash_hgy0td.jpg"})]),t(_,null,{default:o(()=>[$t,Yt]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677703305/MENU/bruna-branco-t8hTmte4O_g-unsplash_1_eda4my.jpg"})]),t(_,null,{default:o(()=>[Dt,Ft]),_:1})]),_:1}),t(m,{dense:"",class:"col-5 col-sm-3 q-px-sm bg-transparent shadow-0"},{default:o(()=>[e("div",null,[t(v,{ratio:4/3,src:"https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677703475/MENU/d2555521_1_pr8tyy.jpg"})]),t(_,null,{default:o(()=>[Ht,Wt]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),e("section",Gt,[e("div",Xt,[e("div",Zt,[e("div",Jt,[e("div",es,[ts,t(a,{class:"col-6",to:"/"},{default:o(()=>[w("\u56DE\u9996\u9801")]),_:1}),t(a,{class:"col-6",to:"/menu"},{default:o(()=>[w("\u9910\u98F2\u4ECB\u7D39")]),_:1}),t(a,{class:"col-6",to:"/about"},{default:o(()=>[w("\u54C1\u724C\u6545\u4E8B")]),_:1}),t(a,{class:"col-6",to:"/"},{default:o(()=>[w("\u7DDA\u4E0AMENU")]),_:1}),t(a,{class:"col-6",to:"/products"},{default:o(()=>[w("\u8B1B\u5EA7\u6D3B\u52D5")]),_:1}),t(a,{class:"col-6",to:"/about/location"},{default:o(()=>[w("\u9580\u5E02\u4F4D\u5740")]),_:1}),t(a,{class:"col-6",to:"/articles"},{default:o(()=>[w("\u5C08\u6B04\u597D\u6587")]),_:1}),t(a,{to:"/myaccount/orders"},{default:o(()=>[w("\u6703\u54E1\u5C08\u5340")]),_:1})]),e("div",ss,[as,t(a,{to:"/myaccount/orders"},{default:o(()=>[w("\u5831\u540D\u67E5\u8A62")]),_:1}),t(a,{to:"/service"},{default:o(()=>[w("\u5E38\u898B\u554F\u984C")]),_:1}),t(a,{to:"/service/contactus"},{default:o(()=>[w("\u806F\u7D61\u6211\u5011")]),_:1}),t(a,{to:"/"},{default:o(()=>[w("\u96B1\u79C1\u6B0A\u653F\u7B56")]),_:1})])])]),e("div",os,[ns,e("div",ls,[t(R,{name:"fa-brands fa-instagram",size:"1rem",class:"q-mr-sm"}),t(R,{name:"fa-brands fa-facebook",size:"1rem",class:"q-mr-sm"}),t(R,{name:"fa-brands fa-twitter",size:"1rem"})])]),e("div",is,[rs,t(Be,{dense:"",modelValue:d.text,"onUpdate:modelValue":c[2]||(c[2]=i=>d.text=i),placeholder:"your Email",type:"email","bg-color":"black",color:"accent","input-style":{color:"#E1BF77"}},{prepend:o(()=>[t(R,{name:"mail",class:"q-px-sm"})]),append:o(()=>[t(R,{name:"send",class:"cursor-pointer q-px-sm"})]),_:1},8,["modelValue"])])])]),cs]),_:1})}}};export{Cs as default};
