import{n as d,a6 as i,r as s,d as p,e as m,H as u,p as n,w as _,E as $}from"./vendor.js";import{T as f}from"./index.js";const R={name:"Tag-read",components:{SuperRecord:i},computed:{superRecordModel(){return f}}};function g(e,r,c,l,o,t){const a=s("SuperRecord");return p(),m(a,{model:t.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:r[0]||(r[0]=k=>e.$emit("initialLoadHappened"))},null,8,["model","id"])}var v=d(R,[["render",g]]);const T={name:"Tag-read-controller",components:{tagRead:v},data(){return{id:+this.$route.params.rId}}};function C(e,r,c,l,o,t){const a=s("tagRead");return p(),u("div",null,[n($,{class:"q-mb-md"},{default:_(()=>[n(a,{id:o.id},null,8,["id"])]),_:1})])}var H=d(T,[["render",C]]);export{H as default};
