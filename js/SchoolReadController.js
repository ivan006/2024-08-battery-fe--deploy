import{n,a6 as p,_ as m,r as l,d as s,e as u,H as _,p as d,w as h,E as f}from"./vendor.js";import{g as v}from"./index.js";const $={name:"School-read",components:{SuperRecord:p},data(){return{templateListGrid:{cols:[{width:3,dataPoint:{type:"component",componentPath:()=>m(()=>import("./EventImage.js"),["js/EventImage.js","js/vendor.js","css/vendor.css"]),label:"",hideLabel:!0}},{width:12,class:"q-pa-md q-col-gutter-sm",cols:[{width:12,dataPoint:{type:"function",function:e=>`${e.name}`,label:"",tag:"div",class:"text-h6",hideLabel:!0}},{width:12,dataPoint:{hideLabel:!0,field:"actions"}}]}]}}},computed:{superRecordModel(){return v}}};function R(e,t,i,c,o,r){const a=l("SuperRecord");return s(),u(a,{model:r.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:t[0]||(t[0]=b=>e.$emit("initialLoadHappened")),templateOverview:o.templateListGrid,allowedFilters:[],hideRelations:""},null,8,["model","id","templateOverview"])}var w=n($,[["render",R]]);const L={name:"School-read-controller",components:{schoolRead:w},data(){return{id:+this.$route.params.rId}}};function S(e,t,i,c,o,r){const a=l("schoolRead");return s(),_("div",null,[d(f,{class:"q-mb-md",style:{overflow:"hidden"}},{default:h(()=>[d(a,{id:o.id},null,8,["id"])]),_:1})])}var y=n(L,[["render",S]]);export{y as default};
