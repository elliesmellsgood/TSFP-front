import{Q as c}from"./QIcon.5ca772cc.js";import{Q as h}from"./QBtn.0ecae08c.js";import{Q as b}from"./QItem.d2b8fa3b.js";import{Q as k}from"./QImg.bccb1aad.js";import{Q}from"./QScrollArea.5ae14fb9.js";import{Q as C}from"./QInput.2b55d701.js";import{Q as E}from"./QPage.9f43aec5.js";import{_ as B}from"./logo_1-1-text.e6389406.js";import{u as N,a0 as V,an as A,aJ as S,m as n,y,t as o,aK as U,av as F,v as x,C as e,D as i,q as u,B as m,d as t,z as a,A as j}from"./index.4d875d08.js";import"./Ripple.cf9a4ce0.js";import"./use-router-link.2f5a64da.js";import"./vm.594ed3a6.js";import"./focus-manager.db5612a5.js";import"./touch.f68f2699.js";import"./selection.efe461ed.js";import"./format.2a3572e1.js";const z={class:"row justify-center q-pa-xl q-gutter-xl"},D={class:"column justify-between col-12 col-md-6"},I={class:"bg-accent text-white q-px-sm rounded-borders q-mr-sm"},W={key:0,class:"bg-warning text-white q-px-sm rounded-borders"},M={class:"q-mb-xl q-mt-md"},O={key:1,class:"text-h6"},R={key:2,class:"text-h6"},T={class:"q-my-xl"},$={class:"col-12 col-md-5"},H={class:"q-mt-lg pre"},J=e("h5",null,"\u5DF2\u4E0B\u67B6",-1),K={class:"footer"},L={class:"row justify-between footer_container q-px-xl"},P={class:"footer_map row items-center col-3"},Y={class:"row"},Z={class:"row col-6"},G=e("p",{class:"col-12"},"\u7DB2\u7AD9\u5C0E\u89BD",-1),X={class:"col-6 q-pl-md"},tt=e("p",null,"\u652F\u63F4\u670D\u52D9",-1),et={class:"footer_center q-pa-md",style:{width:"170px"}},st=e("img",{style:{width:"100%"},src:B},null,-1),ot={style:{width:"100%"},class:"text-center"},at={class:"subscribe column justify-center col-3",style:{"max-width":"300px"}},rt=e("p",null,"\u8A02\u95B1\u96FB\u5B50\u5831\u5373\u6642\u638C\u63E1\u6D3B\u52D5\u6D88\u606F",-1),lt=e("section",{class:"copyright row flex-center"}," \u6CF0\u5C71\u8077\u8A13\u524D\u7AEF\u7DB2\u9801\u5C08\u984C(\u50C5\u4F5C\u5B78\u8853\u4F7F\u7528) by SU-YU-ZHEN ",-1),kt={__name:"EventView",setup(ct){const _=U(),p=F(),g=N(),{signup:v}=g,s=V({_id:"",name:"",price:0,description:"",date:"",starttime:"",endedtime:"",image:"",sell:!0,category:"",keyWord:""}),w=async()=>{await v(_.params.id)};return(async()=>{try{const{data:r}=await A.get("/products/"+_.params.id);s._id=r.result._id,s.name=r.result.name,s.price=r.result.price,s.description=r.result.description,s.date=r.result.date,s.starttime=r.result.starttime,s.endedtime=r.result.endedtime,s.image=r.result.image,s.keyWord=r.result.keyWord,s.sell=r.result.sell,s.category=r.result.category,document.title="MAUNA COFFEE - "+s.name}catch{S.exports.Swal.fire({width:"18rem",icon:"error",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557",iconColor:"#C5A768",confirmButtonColor:"#2b2b2b"}),p.go(-1)}})(),(r,d)=>{const q=x("q-overlay"),l=x("router-link");return n(),y(E,null,{default:o(()=>[e("div",z,[e("div",D,[e("div",null,[e("span",I,i(s.category),1),s.price===0?(n(),u("span",W,"\u514D\u8CBB")):m("",!0),e("h4",M,i(s.name),1),e("p",null,i(s.keyWord),1),e("p",null,[t(c,{name:"fa-regular fa-clock",class:"q-mr-xs"}),a(i(new Date(s.date).toLocaleDateString())+" \xA0 "+i(s.starttime),1)]),e("p",null,[t(c,{name:"fa-solid fa-location-dot",class:"q-mr-xs"}),a("110\u53F0\u5317\u5E02\u4FE1\u7FA9\u5340\u4FE1\u7FA9\u8DEF\u4E94\u6BB595\u865F2F\u3010MAUNA COFFEE - \u8C61\u5C71\u6982\u5FF5\u5E97\u3011")]),s.price!==0?(n(),u("p",O,"\u6D3B\u52D5\u8CBB\u7528\uFF1ANT$ "+i(s.price),1)):m("",!0),s.price===0?(n(),u("p",R,"\u6D3B\u52D5\u8CBB\u7528\uFF1A\u514D\u8CBB")):m("",!0),e("div",T,[t(h,{style:{width:"200px"},type:"button",color:"warning",onClick:w},{default:o(()=>[a("\u7ACB\u5373\u5831\u540D")]),_:1})])]),t(b,{class:"bg-accent rounded-borders q-pa-md"},{default:o(()=>[t(c,{name:"fa-solid fa-circle-exclamation q-pt-xs q-mr-xs"}),a(" \u4E3B\u8FA6\u55AE\u4F4D\u627F\u8AFE\u63D0\u4F9B\u9152\u7CBE\u6D88\u6BD2\u624B\u90E8\u3001\u91CF\u6E2C\u9AD4\u6EAB\u53CA\u914D\u6234\u53E3\u7F69\u7684\u63AA\u65BD\uFF0C\u8A18\u9304\u5BE6\u969B\u5831\u5230\u72C0\u6CC1\uFF0C\u4E26\u7981\u6B62\u9AD4\u6EAB\u8D85\u904E37.5\u8005\u5165\u5834\u3002 ")]),_:1})]),e("div",$,[t(k,{src:s.image,ratio:16/9},null,8,["src"]),t(Q,{class:"q-mt-lg scroll-area",style:{height:"300px",width:"100%"}},{default:o(()=>[e("div",H,i(s.description),1)]),_:1})])]),s.sell?m("",!0):(n(),y(q,{key:0,persistent:""},{default:o(()=>[J,t(h,{onClick:d[0]||(d[0]=f=>j(p).go(-1))},{default:o(()=>[a("\u56DE\u4E0A\u9801")]),_:1})]),_:1})),e("section",K,[e("div",L,[e("div",P,[e("div",Y,[e("div",Z,[G,t(l,{class:"col-6",to:"/"},{default:o(()=>[a("\u56DE\u9996\u9801")]),_:1}),t(l,{class:"col-6",to:"/menu"},{default:o(()=>[a("\u9910\u98F2\u4ECB\u7D39")]),_:1}),t(l,{class:"col-6",to:"/about"},{default:o(()=>[a("\u54C1\u724C\u6545\u4E8B")]),_:1}),t(l,{class:"col-6",to:"/"},{default:o(()=>[a("\u7DDA\u4E0AMENU")]),_:1}),t(l,{class:"col-6",to:"/products"},{default:o(()=>[a("\u8B1B\u5EA7\u6D3B\u52D5")]),_:1}),t(l,{class:"col-6",to:"/about/location"},{default:o(()=>[a("\u9580\u5E02\u4F4D\u5740")]),_:1}),t(l,{class:"col-6",to:"/articles"},{default:o(()=>[a("\u5C08\u6B04\u597D\u6587")]),_:1}),t(l,{to:"/myaccount/orders"},{default:o(()=>[a("\u6703\u54E1\u5C08\u5340")]),_:1})]),e("div",X,[tt,t(l,{to:"/myaccount/orders"},{default:o(()=>[a("\u5831\u540D\u67E5\u8A62")]),_:1}),t(l,{to:"/service"},{default:o(()=>[a("\u5E38\u898B\u554F\u984C")]),_:1}),t(l,{to:"/service/contactus"},{default:o(()=>[a("\u806F\u7D61\u6211\u5011")]),_:1}),t(l,{to:"/"},{default:o(()=>[a("\u96B1\u79C1\u6B0A\u653F\u7B56")]),_:1})])])]),e("div",et,[st,e("div",ot,[t(c,{name:"fa-brands fa-instagram",size:"1rem",class:"q-mr-sm"}),t(c,{name:"fa-brands fa-facebook",size:"1rem",class:"q-mr-sm"}),t(c,{name:"fa-brands fa-twitter",size:"1rem"})])]),e("div",at,[rt,t(C,{dense:"",modelValue:r.text,"onUpdate:modelValue":d[1]||(d[1]=f=>r.text=f),placeholder:"your Email",type:"email","bg-color":"black",color:"accent","input-style":{color:"#E1BF77"}},{prepend:o(()=>[t(c,{name:"mail",class:"q-px-sm"})]),append:o(()=>[t(c,{name:"send",class:"cursor-pointer q-px-sm"})]),_:1},8,["modelValue"])])])]),lt]),_:1})}}};export{kt as default};
