import{Q as s}from"./QImg.bccb1aad.js";import{Q as n}from"./QTd.1bea88d2.js";import{Q as m}from"./QTable.caf83e39.js";import{Q as c}from"./QPage.9f43aec5.js";import{a0 as u,az as p,ao as d,m as f,y as h,t,C as o,d as a}from"./index.4d875d08.js";import"./QIcon.5ca772cc.js";import"./QSeparator.cc30faa3.js";import"./focus-manager.db5612a5.js";import"./QList.8e66e5ec.js";import"./rtl.b51694b1.js";import"./Ripple.cf9a4ce0.js";import"./QItem.d2b8fa3b.js";import"./use-router-link.2f5a64da.js";import"./vm.594ed3a6.js";import"./QItemLabel.548a6ea4.js";import"./position-engine.0a8b0a7e.js";import"./selection.efe461ed.js";import"./use-prevent-scroll.867bf119.js";import"./use-timeout.d612f645.js";import"./QDialog.70ecafb3.js";import"./format.2a3572e1.js";import"./option-sizes.645a7745.js";import"./QBtn.0ecae08c.js";const g={class:"q-px-lg q-py-xl row justify-between",style:{width:"100%"}},b=o("h5",{class:"col-6"},"\u6703\u54E1\u5E33\u6236",-1),I={__name:"UserList",setup(_){const r=u([]),i=[{name:"photo",required:!0,label:"PHOTO",align:"center"},{name:"username",required:!0,label:"\u59D3\u540D",align:"center",field:e=>e.name},{name:"usernickname",required:!0,label:"\u66B1\u7A31",align:"center",field:e=>e.nickname},{name:"gender",required:!0,label:"\u6027\u5225",align:"center",field:e=>e.gender},{name:"useremail",required:!0,label:"\u96FB\u5B50\u4FE1\u7BB1",align:"center",field:e=>e.email},{name:"userphone",required:!0,label:"\u806F\u7D61\u96FB\u8A71",align:"center",field:e=>e.phone},{name:"date",required:!0,label:"\u8A3B\u518A\u65E5\u671F",align:"center",field:e=>e.date,sortable:!0,format:e=>`${new Date(e).toLocaleDateString()}`}];return(async()=>{try{const{data:e}=await p.get("/users/allusers");r.push(...e.result),console.log(r),r.reverse()}catch{d.fire({width:"18rem",icon:"error",text:"\u53D6\u5F97\u8CC7\u6599\u5931\u6557",iconColor:"#C5A768",confirmButtonColor:"#2b2b2b",allowOutsideClick:!1})}})(),(e,w)=>(f(),h(c,null,{default:t(()=>[o("div",g,[b,a(m,{rows:r,"row-key":"name",columns:i,class:"text-center col-12 q-mt-md"},{"body-cell-photo":t(l=>[a(n,null,{default:t(()=>[a(s,{src:`https://source.boringavatars.com/bauhaus/256/${l.row.email}?colors=2B2B2B,BFB4AA,B99555,E1BF77,636363`,width:"50px",height:"50px"},null,8,["src"])]),_:2},1024)]),_:1},8,["rows"])])]),_:1}))}};export{I as default};
