import{r as d,e as s,c as i,j as m,k as n,w as u,aT as _}from"./vendor.js";import{_ as p,T as f}from"./index.js";import{S as $}from"./SuperRecord.js";import"./SuperTable.js";const R={name:"Tag-read",components:{SuperRecord:$},computed:{superRecordModel(){return f}}};function g(e,o,c,l,a,t){const r=d("SuperRecord");return s(),i(r,{model:t.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:o[0]||(o[0]=k=>e.$emit("initialLoadHappened"))},null,8,["model","id"])}const T=p(R,[["render",g],["__file","TagRead.vue"]]),v={name:"Tag-read-controller",components:{tagRead:T},data(){return{id:+this.$route.params.rId}}};function C(e,o,c,l,a,t){const r=d("tagRead");return s(),m("div",null,[n(_,{class:"q-mb-md",style:{overflow:"hidden"}},{default:u(()=>[n(r,{id:a.id},null,8,["id"])]),_:1})])}const B=p(v,[["render",C],["__file","TagReadController.vue"]]);export{B as default};
