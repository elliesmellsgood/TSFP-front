import{Q as g}from"./QSpace.c0f152e9.js";import{Q as m}from"./QBtn.0ecae08c.js";import{Q as s}from"./QIcon.5ca772cc.js";import{Q,a as h,b as k,c as p,d as w,e as y}from"./QLayout.a2ef5311.js";import{Q as q,a as t}from"./QList.8e66e5ec.js";import{Q as o}from"./QItem.d2b8fa3b.js";import{Q as z}from"./QScrollArea.5ae14fb9.js";import{Q as C}from"./QImg.bccb1aad.js";import{r as S,u as V,s as L,m as T,q as A,d as a,t as e,v as B,C as r,z as l,A as i,D as f}from"./index.4d875d08.js";import"./Ripple.cf9a4ce0.js";import"./use-router-link.2f5a64da.js";import"./vm.594ed3a6.js";import"./position-engine.0a8b0a7e.js";import"./selection.efe461ed.js";import"./use-prevent-scroll.867bf119.js";import"./focus-manager.db5612a5.js";import"./use-timeout.d612f645.js";import"./touch.f68f2699.js";import"./format.2a3572e1.js";var I="/TSFP-front/assets/about_1.b4761b61.jpg";const D={class:"q-mr-sm"},N={class:"absolute-bottom bg-transparent"},H={class:"text-weight-bold"},oa={__name:"AdminLayout",setup(P){const d=S(!0),n=V(),{email:_,name:b}=L(n),{logout:c}=n;return(U,u)=>{const x=B("router-view");return T(),A("div",null,[a(Q,{view:"lHh Lpr lff",class:"shadow-2"},{default:e(()=>[a(h,{elevated:"",class:"bg-cyan-8"},{default:e(()=>[a(k,{class:"bg-white admin-toolbar q-py-sm q-px-lg"},{default:e(()=>[a(g),a(m,{dense:"",icon:"home",name:"\u56DE\u5B98\u7DB2",label:"\u56DE\u5B98\u7DB2",class:"bg-info text-white q-mr-md q-px-md",to:"/"}),r("div",D,[a(m,{class:"q-pa-sm text-primary",variant:"text",rounded:"","text-accent":"",flat:""},{default:e(()=>[a(s,{name:"fa-solid fa-bell",size:"1.3rem"}),a(p,{class:"bg-primary"},{default:e(()=>[l("\u901A\u77E5")]),_:1})]),_:1})]),r("div",null,[a(m,{class:"q-pa-sm text-primary",variant:"text",rounded:"","text-accent":"",flat:"",onClick:i(c)},{default:e(()=>[a(s,{name:"fa-solid fa-arrow-right-from-bracket",size:"1.3rem"}),a(p,{class:"bg-primary"},{default:e(()=>[l("\u767B\u51FA")]),_:1})]),_:1},8,["onClick"])])]),_:1})]),_:1}),a(w,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=v=>d.value=v),width:200,breakpoint:0,persistent:"","show-if-above":"","no-swipe-close":""},{default:e(()=>[a(z,{class:"bg-primary",style:{height:"calc(100% - 200px)","margin-top":"200px","border-right":"1px solid #ddd"}},{default:e(()=>[a(q,{padding:"",class:"admin-sidebar q-pt-xl text-accent"},{default:e(()=>[a(o,{clickable:"",to:"/admin/products"},{default:e(()=>[a(t,{avatar:""},{default:e(()=>[a(s,{name:"fa-brands fa-codepen",class:"q-px-sm",size:"1.4rem"})]),_:1}),a(t,null,{default:e(()=>[l(" \u6D3B\u52D5\u7BA1\u7406 ")]),_:1})]),_:1}),a(o,{clickable:"",to:"/admin/allorders"},{default:e(()=>[a(t,{avatar:""},{default:e(()=>[a(s,{name:"fa-solid fa-tags",class:"q-px-sm",size:"1.4rem"})]),_:1}),a(t,null,{default:e(()=>[l(" \u8A02\u55AE\u7BA1\u7406 ")]),_:1})]),_:1}),a(o,{clickable:"",to:"/admin/articles"},{default:e(()=>[a(t,{avatar:""},{default:e(()=>[a(s,{name:"fa-solid fa-book-bookmark",class:"q-px-sm",size:"1.2rem"})]),_:1}),a(t,null,{default:e(()=>[l(" \u6587\u7AE0\u7BA1\u7406 ")]),_:1})]),_:1}),a(o,{clickable:"",to:"/admin/allusers"},{default:e(()=>[a(t,{avatar:""},{default:e(()=>[a(s,{name:"fa-solid fa-user-pen",class:"q-px-sm",size:"1.2rem"})]),_:1}),a(t,null,{default:e(()=>[l(" \u6703\u54E1\u7BA1\u7406 ")]),_:1})]),_:1}),a(o,{clickable:"",onClick:i(c),class:"absolute-bottom bg-black"},{default:e(()=>[a(t,{avatar:""},{default:e(()=>[a(s,{name:"fa-solid fa-arrow-right-from-bracket",class:"q-px-sm",size:"1.2rem"})]),_:1}),a(t,null,{default:e(()=>[l(" \u767B\u51FA ")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1}),a(C,{class:"absolute-top",src:I,style:{height:"200px"}},{default:e(()=>[r("div",N,[r("div",H,f(i(b)),1),r("div",null,f(i(_)),1)])]),_:1})]),_:1},8,["modelValue"]),a(y,{style:{width:"calc(100% - 48px)",margin:"auto"}},{default:e(()=>[a(x)]),_:1})]),_:1})])}}};export{oa as default};