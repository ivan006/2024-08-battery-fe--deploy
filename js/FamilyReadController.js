import{n as f,a6 as x,r as n,d as s,e as d,H as S,p as a,w as l,E as i,a8 as V,a9 as w,y as o,aa as c,L as u}from"./vendor.js";import{a as I}from"./index.js";import{s as $}from"./SchoolFamilyEnrollmentList.js";import{C as R}from"./ChildList.js";import{F as b}from"./FamilyTyList.js";const K={name:"Family-read",components:{SuperRecord:x},computed:{superRecordModel(){return I}}};function C(r,e,v,h,t,_){const p=n("SuperRecord");return s(),d(p,{model:_.superRecordModel,id:+r.$route.params.rId,displayMapField:!0,onInitialLoadHappened:e[0]||(e[0]=y=>r.$emit("initialLoadHappened"))},null,8,["model","id"])}var E=f(K,[["render",C]]);const q={name:"Family-read-controller",components:{FamilyTyList:b,ChildList:R,SchoolFamilyEnrollmentList:$,familyRead:E},data(){return{initialLoadHappened:!1,renderSection1:!1,id:+this.$route.params.rId,templateListGrid:{class:"q-pa-md q-col-gutter-md",cols:[{width:12,dataPoint:{type:"function",function:r=>`${r.name}`,label:"",tag:"div",class:"text-h6",hideLabel:!0}}]}}}},H={class:"row q-col-gutter-md"},P={class:"col-xl-6 col-md-6 col-sm-12 col-xs-12"},k={class:"q-pa-md"},B={class:"col-xl-6 col-md-6 col-sm-12 col-xs-12"},g={class:"q-pa-md"},M={class:"col-xl-6 col-md-6 col-sm-12 col-xs-12"},N={class:"q-pa-md"};function T(r,e,v,h,t,_){const p=n("familyRead"),y=n("child-list"),F=n("FamilyTyList"),L=n("schoolFamilyEnrollmentList");return s(),S("div",null,[a(i,{class:"q-mb-md"},{default:l(()=>[a(p,{id:t.id,templateOverview:t.templateListGrid,hideRelations:"",onInitialLoadHappened:e[0]||(e[0]=m=>t.initialLoadHappened=!0)},null,8,["id","templateOverview"])]),_:1}),V(o("div",null,[o("div",H,[o("div",P,[a(i,{class:""},{default:l(()=>[a(c,{label:"Children","expand-separator":"",class:"bordered-expansion-item",onShow:e[1]||(e[1]=m=>t.renderSection1=!0)},{default:l(()=>[o("div",k,[t.renderSection1?(s(),d(y,{key:0,parentKeyValuePair:{parentFKey:"family_id",parentFVal:+this.$route.params.rId,parentItem:{}}},null,8,["parentKeyValuePair"])):u("",!0)])]),_:1})]),_:1})]),o("div",B,[a(i,{class:""},{default:l(()=>[a(c,{label:"Adults","expand-separator":"",class:"bordered-expansion-item",onShow:e[2]||(e[2]=m=>t.renderSection1=!0)},{default:l(()=>[o("div",g,[t.renderSection1?(s(),d(F,{key:0,parentKeyValuePair:{parentFKey:"family_id",parentFVal:+this.$route.params.rId,parentItem:{}}},null,8,["parentKeyValuePair"])):u("",!0)])]),_:1})]),_:1})]),o("div",M,[a(i,{class:""},{default:l(()=>[a(c,{label:"School Enrollments","expand-separator":"",class:"bordered-expansion-item",onShow:e[3]||(e[3]=m=>t.renderSection1=!0)},{default:l(()=>[o("div",N,[t.renderSection1?(s(),d(L,{key:0,parentKeyValuePair:{parentFKey:"family_id",parentFVal:+this.$route.params.rId,parentItem:{}}},null,8,["parentKeyValuePair"])):u("",!0)])]),_:1})]),_:1})])])],512),[[w,t.initialLoadHappened]])])}var j=f(q,[["render",T]]);export{j as default};