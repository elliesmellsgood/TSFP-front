import{Q as u}from"./QBtn.0ecae08c.js";import{Q as V}from"./QSpace.c0f152e9.js";import{Q as y,a as r}from"./QList.8e66e5ec.js";import{Q as n}from"./QItem.d2b8fa3b.js";import{Q as w}from"./QSeparator.cc30faa3.js";import{Q as m}from"./QIcon.5ca772cc.js";import{Q as B,a as T,b as D,c as b,d as L,e as N}from"./QLayout.a2ef5311.js";import{Q as A}from"./QTabs.8c919e46.js";import{Q as I}from"./QScrollArea.5ae14fb9.js";import{Q as P}from"./QPageScroller.86be9d0d.js";import{C as x,_ as R,a as j}from"./logo_1200-300.e5523de4.js";import{R as d}from"./Ripple.cf9a4ce0.js";import{u as H,s as U,r as E,m as a,q as F,d as e,t,v as q,x as o,y as s,z as c,A as i,B as f,C as l,D as M}from"./index.4d875d08.js";import"./use-router-link.2f5a64da.js";import"./vm.594ed3a6.js";import"./focus-manager.db5612a5.js";import"./position-engine.0a8b0a7e.js";import"./selection.efe461ed.js";import"./use-prevent-scroll.867bf119.js";import"./use-timeout.d612f645.js";import"./touch.f68f2699.js";import"./format.2a3572e1.js";import"./rtl.b51694b1.js";const $=l("img",{style:{width:"100%"},src:R},null,-1),G=l("span",{class:"slash"},"/",-1),J=l("span",{class:"slash"},"/",-1),K=l("span",{class:"slash"},"/",-1),O=l("span",{class:"slash"},"/",-1),W=l("span",{class:"slash"},"/",-1),X={class:"user_name"},Y={class:"user_noname"},Z={class:"sidebar2"},tt=l("div",{class:"text-center bg-info q-py-sm q-px-lg",style:{width:"200px"}},[l("img",{style:{width:"100%"},src:j})],-1),et=l("div",{class:"title q-px-xl text-center bg-black q-py-xs"},"\u95DC\u65BC\u6211\u5011",-1),at={class:"row"},st=l("div",{class:"title q-px-xl text-center bg-black q-py-xs"},"\u8B1B\u5EA7\u6D3B\u52D5",-1),lt={class:"row"},ct=l("div",{class:"title q-px-xl text-center bg-black q-py-xs"},"\u9910\u98F2\u4ECB\u7D39",-1),ot={class:"row"},rt=l("div",{class:"title q-px-xl text-center bg-black q-py-xs"},"\u5C08\u6B04\u597D\u6587",-1),nt={class:"row"},it=l("div",{class:"title q-px-xl text-center bg-black q-py-xs"},"\u5BA2\u670D\u8CC7\u8A0A",-1),dt={class:"row"},ut={class:"row"},Pt={__name:"MainLayout",setup(ft){const h=H(),{isLogin:_,isAdmin:p,nickname:z}=U(h),{logout:g}=h,k=E(!1);return(_t,v)=>{const C=q("router-link"),S=q("router-view");return a(),F("div",null,[e(B,{view:"1Hh lpr lFf"},{default:t(()=>[e(T,{reveal:"",elevated:"",class:"bg-dark"},{default:t(()=>[e(D,{class:"topbar text-accent q-px-lg q-pa-xs"},{default:t(()=>[e(u,{round:"",class:"burger",flat:"",onClick:v[0]||(v[0]=Q=>k.value=!k.value),dense:"",icon:"menu"}),e(C,{style:{width:"170px"},to:"/",class:"topbar_logo"},{default:t(()=>[$]),_:1}),e(V),e(u,{flat:"",label:"\u9996\u9801",class:"dropdown text-accent",to:"/"}),G,o((a(),s(u,{flat:"",label:"\u95DC\u65BC\u6211\u5011 \u25BE",class:"dropdown text-accent",style:{cursor:"default"},"no-caps":""},{default:t(()=>[e(y,{style:{"min-width":"100px"},class:"dropdown-content"},{default:t(()=>[o((a(),s(n,{clickable:"",to:"/about",class:"text-white"},{default:t(()=>[e(r,{style:{"font-size":"1rem"}},{default:t(()=>[c("\u54C1\u724C\u6545\u4E8B")]),_:1})]),_:1})),[[x]]),e(w),o((a(),s(n,{clickable:"",to:"/about/location",class:"text-white"},{default:t(()=>[e(r,{style:{"font-size":"1rem"}},{default:t(()=>[c("\u9580\u5E02\u8CC7\u8A0A")]),_:1})]),_:1})),[[x]])]),_:1})]),_:1})),[[d,void 0,void 0,{stop:!0}]]),J,o((a(),s(u,{flat:"",label:"\u8B1B\u5EA7\u6D3B\u52D5 \u25BE",class:"dropdown text-accent",style:{cursor:"default"},"no-caps":""},{default:t(()=>[e(y,{style:{"min-width":"100px"},class:"dropdown-content"},{default:t(()=>[o((a(),s(n,{clickable:"",to:"/products",class:"text-white"},{default:t(()=>[e(r,{style:{"font-size":"1rem"}},{default:t(()=>[c("\u6240\u6709\u6D3B\u52D5")]),_:1})]),_:1})),[[x]]),e(w),i(p)?f("",!0):o((a(),s(n,{key:0,clickable:"",to:"/myaccount/orders",class:"text-white"},{default:t(()=>[e(r,{style:{"font-size":"1rem"}},{default:t(()=>[c("\u5831\u540D\u67E5\u8A62")]),_:1})]),_:1})),[[x]])]),_:1})]),_:1})),[[d,void 0,void 0,{stop:!0}]]),K,e(u,{flat:"",label:"\u9910\u98F2\u4ECB\u7D39",class:"dropdown text-accent",to:"/menu"}),O,e(u,{flat:"",label:"\u5C08\u6B04\u597D\u6587",class:"dropdown text-accent",to:"/articles"}),W,o((a(),s(u,{flat:"",label:"\u5BA2\u670D\u8CC7\u8A0A \u25BE",class:"dropdown text-accent",style:{cursor:"default"},"no-caps":""},{default:t(()=>[e(y,{style:{"min-width":"100px"},class:"dropdown-content"},{default:t(()=>[o((a(),s(n,{clickable:"",to:"/service",class:"text-white"},{default:t(()=>[e(r,{style:{"font-size":"1rem"}},{default:t(()=>[c("\u5E38\u898B\u554F\u984C")]),_:1})]),_:1})),[[x]]),e(w),o((a(),s(n,{clickable:"",to:"/service/contactus",class:"text-white"},{default:t(()=>[e(r,{style:{"font-size":"1rem"}},{default:t(()=>[c("\u806F\u7D61\u6211\u5011")]),_:1})]),_:1})),[[x]])]),_:1})]),_:1})),[[d,void 0,void 0,{stop:!0}]]),e(A,{class:"q-ml-lg"},{default:t(()=>[l("div",null,[i(_)?f("",!0):(a(),s(u,{key:0,class:"q-pa-sm",to:"/login",rounded:"","text-accent":"",flat:""},{default:t(()=>[e(m,{name:"fa-solid fa-user",size:"1.3rem"})]),_:1})),e(b,{class:"bg-info"},{default:t(()=>[c("\u6703\u54E1\u767B\u5165")]),_:1})]),l("div",null,[i(_)&&i(p)?(a(),s(u,{key:0,class:"q-pa-sm",to:"/admin/products",variant:"text",rounded:"","text-accent":"",flat:""},{default:t(()=>[e(m,{name:"fa-solid fa-user-gear",size:"1.3rem"})]),_:1})):f("",!0),e(b,{class:"bg-info"},{default:t(()=>[c("\u7BA1\u7406")]),_:1})]),l("div",X,[i(_)&&!i(p)?(a(),s(u,{key:0,outline:"",dense:"",class:"row flex-center q-px-md q-mr-sm",to:"/myaccount/orders",variant:"text","text-accent":""},{default:t(()=>[l("span",null,"\u55E8!\xA0\xA0"+M(i(z)),1)]),_:1})):f("",!0),e(b,{class:"bg-info"},{default:t(()=>[c("\u6703\u54E1\u5C08\u5340")]),_:1})]),l("div",Y,[i(_)&&!i(p)?(a(),s(u,{key:0,class:"q-pa-sm",to:"/myaccount/orders",variant:"text",rounded:"","text-accent":"",flat:""},{default:t(()=>[e(m,{name:"fa-solid fa-user",size:"1.3rem"})]),_:1})):f("",!0),e(b,{class:"bg-info"},{default:t(()=>[c("\u6703\u54E1\u5C08\u5340")]),_:1})]),l("div",null,[i(_)?(a(),s(u,{key:0,class:"q-pa-sm",onClick:i(g),variant:"text",rounded:"","text-accent":"",flat:""},{default:t(()=>[e(m,{name:"fa-solid fa-arrow-right-from-bracket",size:"1.3rem"})]),_:1},8,["onClick"])):f("",!0),e(b,{class:"bg-info"},{default:t(()=>[c("\u767B\u51FA")]),_:1})])]),_:1})]),_:1})]),_:1}),e(L,{modelValue:k.value,"onUpdate:modelValue":v[1]||(v[1]=Q=>k.value=Q),width:200,breakpoint:990,bordered:"","no-swipe-backdrop":"",class:"bg-primary text-accent sidebar"},{default:t(()=>[e(I,{class:"fit flex justify-center"},{default:t(()=>[l("div",Z,[l("div",null,[tt,et,l("div",at,[o((a(),s(n,{clickable:"",to:"/about",class:"col-6 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u54C1\u724C\u4ECB\u7D39 ")]),_:1})]),_:1})),[[d]]),o((a(),s(n,{clickable:"",to:"/about/location",class:"col-6 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u9580\u5E02\u8CC7\u8A0A ")]),_:1})]),_:1})),[[d]])]),st,l("div",lt,[o((a(),s(n,{clickable:"",to:"/products",class:"col-6 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u6240\u6709\u6D3B\u52D5 ")]),_:1})]),_:1})),[[d]]),o((a(),s(n,{clickable:"",to:"/myaccount/orders",class:"col-6 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u5831\u540D\u67E5\u8A62 ")]),_:1})]),_:1})),[[d]])]),ct,l("div",ot,[o((a(),s(n,{clickable:"",to:"/menu",class:"col-12 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u9910\u98F2\u4ECB\u7D39 ")]),_:1})]),_:1})),[[d]])]),rt,l("div",nt,[o((a(),s(n,{clickable:"",to:"/articles",class:"col-12 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u5C08\u6B04\u597D\u6587 ")]),_:1})]),_:1})),[[d]])]),it,l("div",dt,[o((a(),s(n,{clickable:"",to:"/service",class:"col-6 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u5E38\u898B\u554F\u984C ")]),_:1})]),_:1})),[[d]]),o((a(),s(n,{clickable:"",to:"/service/contactus",class:"col-6 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u806F\u7D61\u6211\u5011 ")]),_:1})]),_:1})),[[d]])])]),l("div",null,[l("div",ut,[i(_)?f("",!0):o((a(),s(n,{key:0,clickable:"",to:"/login",class:"col-6 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u767B\u5165 ")]),_:1})]),_:1})),[[d]]),i(_)?f("",!0):o((a(),s(n,{key:1,clickable:"",to:"/register",class:"col-6 text-center"},{default:t(()=>[e(r,{class:"text-accent",flat:""},{default:t(()=>[c(" \u8A3B\u518A ")]),_:1})]),_:1})),[[d]])]),i(_)&&i(p)?o((a(),s(n,{key:0,clickable:"",to:"/admin/products",class:"text-center row flex-center"},{default:t(()=>[e(m,{name:"fa-solid fa-user-gear",size:"xs",class:"col-2"}),e(r,{class:"col-4",flat:""},{default:t(()=>[c(" \u7BA1\u7406 ")]),_:1})]),_:1})),[[d]]):f("",!0),i(_)&&!i(p)?o((a(),s(n,{key:1,clickable:"",to:"/myaccount/orders",class:"text-center row flex-center"},{default:t(()=>[e(m,{name:"fa-solid fa-user",size:"xs",class:"col-2"}),e(r,{class:"text-accent col-6",flat:""},{default:t(()=>[c(" \u6211\u7684\u6703\u54E1 ")]),_:1})]),_:1})),[[d]]):f("",!0),i(_)?o((a(),s(n,{key:2,clickable:"",onClick:i(g),class:"text-center row flex-center"},{default:t(()=>[e(m,{name:"logout",size:"sm",class:"col-2"}),e(r,{class:"text-accent col-4",flat:""},{default:t(()=>[c(" \u767B\u51FA ")]),_:1})]),_:1},8,["onClick"])),[[d]]):f("",!0),o((a(),s(n,{clickable:"",to:"/",class:"text-center row justify-center"},{default:t(()=>[e(m,{name:"home",size:"sm",class:"col-2"}),e(r,{class:"text-accent col-4",flat:""},{default:t(()=>[c(" \u56DE\u9996\u9801 ")]),_:1})]),_:1})),[[d]])])])]),_:1})]),_:1},8,["modelValue"]),e(N,null,{default:t(()=>[e(S)]),_:1}),e(P,{position:"bottom-right","scroll-offset":120,offset:[18,18]},{default:t(()=>[e(u,{fab:"",icon:"keyboard_arrow_up",color:"info"})]),_:1})]),_:1})])}}};export{Pt as default};
