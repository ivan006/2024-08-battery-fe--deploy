const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/EventImage.js","js/vendor.js","css/vendor.css"])))=>i.map(i=>d[i]);
import{_ as l,a8 as p,h as m,r as n,e as s,d as u,J as _,s as d,w as h,H as f}from"./vendor.js";import{g as v}from"./index.js";const R={name:"School-read",components:{SuperRecord:p},data(){return{templateListGrid:{cols:[{width:3,dataPoint:{type:"component",componentPath:()=>m(()=>import("./EventImage.js"),__vite__mapDeps([0,1,2])),label:"",hideLabel:!0}},{width:12,class:"q-pa-md q-col-gutter-sm",cols:[{width:12,dataPoint:{type:"function",function:e=>`${e.name}`,label:"",tag:"div",class:"text-h6",hideLabel:!0}},{width:12,dataPoint:{hideLabel:!0,field:"actions"}}]}]}}},computed:{superRecordModel(){return v}}};function $(e,o,i,c,t,r){const a=n("SuperRecord");return s(),u(a,{model:r.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:o[0]||(o[0]=b=>e.$emit("initialLoadHappened")),templateOverview:t.templateListGrid,allowedFilters:[],hideRelations:""},null,8,["model","id","templateOverview"])}const w=l(R,[["render",$],["__file","SchoolRead.vue"]]),S={name:"School-read-controller",components:{schoolRead:w},data(){return{id:+this.$route.params.rId}}};function L(e,o,i,c,t,r){const a=n("schoolRead");return s(),_("div",null,[d(f,{class:"q-mb-md",style:{overflow:"hidden"}},{default:h(()=>[d(a,{id:t.id},null,8,["id"])]),_:1})])}const x=l(S,[["render",L],["__file","SchoolReadController.vue"]]);export{x as default};
