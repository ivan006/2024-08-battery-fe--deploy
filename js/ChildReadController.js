import{r as i,e as l,c as p,j as m,k as a,w as u,aT as h}from"./vendor.js";import{_ as n,C as _}from"./index.js";import{S as f}from"./SuperRecord.js";import"./SuperTable.js";const v={name:"Child-read",components:{SuperRecord:f},data(){return{templateListGrid:{colWidth:this.colWidth,cols:[{width:12,class:"q-pa-md q-col-gutter-sm",cols:[{width:12,dataPoint:{field:"name",tag:"div",class:"text-h6",hideLabel:!0}},{width:12,dataPoint:{hideLabel:!0,field:"actions"}}]}]}}},computed:{superRecordModel(){return _}}};function C(e,t,s,c,d,r){const o=i("SuperRecord");return l(),p(o,{model:r.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:t[0]||(t[0]=L=>e.$emit("initialLoadHappened")),templateOverview:d.templateListGrid,allowedTabs:["overview"]},null,8,["model","id","templateOverview"])}const R=n(v,[["render",C],["__file","ChildRead.vue"]]),$={name:"Child-read-controller",components:{childRead:R},data(){return{id:+this.$route.params.rId}}};function w(e,t,s,c,d,r){const o=i("childRead");return l(),m("div",null,[a(h,{class:"q-mb-md",style:{overflow:"hidden"}},{default:u(()=>[a(o,{id:d.id},null,8,["id"])]),_:1})])}const q=n($,[["render",w],["__file","ChildReadController.vue"]]);export{q as default};
