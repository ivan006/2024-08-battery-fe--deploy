import{n as v,a6 as x,r as i,d,e as c,V,H as w,p as r,w as o,E as p,a8 as S,a9 as F,y as n,aa as _,L as f}from"./vendor.js";import{U as R}from"./index.js";import{F as h}from"./FamilyTyList.js";import{J as q}from"./JobList.js";const H={name:"User-read",components:{SuperRecord:x},computed:{superRecordModel(){return R}},data(){return{templateListGrid:{class:"q-pa-md q-col-gutter-md",cols:[{width:12,dataPoint:{type:"function",function:s=>`${s.name}`,label:"",tag:"div",class:"text-h6",hideLabel:!0}},{width:3,dataPoint:{type:"function",function:s=>`${s.email}`,label:"Email"}}]}}}};function I(s,e,y,b,t,a){const l=i("SuperRecord");return d(),c(l,{model:a.superRecordModel,id:+s.$route.params.rId,displayMapField:!0,onInitialLoadHappened:e[0]||(e[0]=m=>s.$emit("initialLoadHappened")),templateOverview:t.templateListGrid,hideRelations:""},null,8,["model","id","templateOverview"])}var k=v(H,[["render",I]]);const C={name:"User-read-controller",components:{JobList:q,FamilyTyList:h,userRead:k},data(){return{initialLoadHappened:!1,renderSection1:!1}},computed:{session(){return V.get("VITE_AUTH")}}},K={class:"row q-col-gutter-md"},P={class:"col-xl-6 col-md-6 col-sm-12 col-xs-12"},T={class:"q-pa-md"},U={class:"col-xl-6 col-md-6 col-sm-12 col-xs-12"},E={class:"q-pa-md"};function $(s,e,y,b,t,a){const l=i("userRead"),m=i("FamilyTyList"),L=i("job-list");return d(),w("div",null,[r(p,{class:"q-mb-md"},{default:o(()=>[r(l,{id:+a.session.user.id,onInitialLoadHappened:e[0]||(e[0]=u=>t.initialLoadHappened=!0)},null,8,["id"])]),_:1}),S(n("div",null,[n("div",K,[n("div",P,[r(p,{class:"q-mb-md"},{default:o(()=>[r(_,{label:"Family Ties","expand-separator":"",class:"bordered-expansion-item",onShow:e[1]||(e[1]=u=>t.renderSection1=!0)},{default:o(()=>[n("div",T,[t.renderSection1?(d(),c(m,{key:0,parentKeyValuePair:{parentFKey:"user_id",parentFVal:+a.session.user.id,parentItem:a.session.user}},null,8,["parentKeyValuePair"])):f("",!0)])]),_:1})]),_:1})]),n("div",U,[r(p,{class:"q-mb-md"},{default:o(()=>[r(_,{label:"Jobs","expand-separator":"",class:"bordered-expansion-item",onShow:e[2]||(e[2]=u=>t.renderSection1=!0)},{default:o(()=>[n("div",E,[t.renderSection1?(d(),c(L,{key:0,parentKeyValuePair:{parentFKey:"user_id",parentFVal:+a.session.user.id,parentItem:a.session.user}},null,8,["parentKeyValuePair"])):f("",!0)])]),_:1})]),_:1})])])],512),[[F,t.initialLoadHappened]])])}var N=v(C,[["render",$]]);export{N as default};