import{n as t,a6 as i,r as s,d as p,e as m,H as u,p as d,w as _,E as $}from"./vendor.js";import{J as f}from"./index.js";const R={name:"Job-read",components:{SuperRecord:i},computed:{superRecordModel(){return f}}};function b(e,o,c,l,a,n){const r=s("SuperRecord");return p(),m(r,{model:n.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:o[0]||(o[0]=j=>e.$emit("initialLoadHappened"))},null,8,["model","id"])}var v=t(R,[["render",b]]);const J={name:"Job-read-controller",components:{jobRead:v},data(){return{id:+this.$route.params.rId}}};function C(e,o,c,l,a,n){const r=s("jobRead");return p(),u("div",null,[d($,{class:"q-mb-md"},{default:_(()=>[d(r,{id:a.id},null,8,["id"])]),_:1})])}var B=t(J,[["render",C]]);export{B as default};