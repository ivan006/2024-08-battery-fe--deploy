import{n as d,a6 as i,r as s,d as p,e as m,H as u,p as n,w as _,E as f}from"./vendor.js";import{f as $}from"./index.js";const R={name:"Post-read",components:{SuperRecord:i},computed:{superRecordModel(){return $}}};function v(e,o,c,l,t,a){const r=s("SuperRecord");return p(),m(r,{model:a.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:o[0]||(o[0]=k=>e.$emit("initialLoadHappened"))},null,8,["model","id"])}var C=d(R,[["render",v]]);const P={name:"Post-read-controller",components:{postRead:C},data(){return{id:+this.$route.params.rId}}};function h(e,o,c,l,t,a){const r=s("postRead");return p(),u("div",null,[n(f,{class:"q-mb-md",style:{overflow:"hidden"}},{default:_(()=>[n(r,{id:t.id},null,8,["id"])]),_:1})])}var B=d(P,[["render",h]]);export{B as default};
