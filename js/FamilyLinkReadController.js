import{_ as d,ac as m,r as i,e as l,c as p,I as u,s as t,w as _,H as f}from"./vendor.js";import{c as k}from"./index.js";const $={name:"FamilyLink-read",components:{SuperRecord:m},computed:{superRecordModel(){return k}}};function y(e,n,s,c,a,r){const o=i("SuperRecord");return l(),p(o,{model:r.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:n[0]||(n[0]=v=>e.$emit("initialLoadHappened"))},null,8,["model","id"])}const L=d($,[["render",y],["__file","FamilyLinkRead.vue"]]),R={name:"FamilyLink-read-controller",components:{familyLinkRead:L},data(){return{id:+this.$route.params.rId}}};function F(e,n,s,c,a,r){const o=i("familyLinkRead");return l(),u("div",null,[t(f,{class:"q-mb-md",style:{overflow:"hidden"}},{default:_(()=>[t(o,{id:a.id},null,8,["id"])]),_:1})])}const h=d(R,[["render",F],["__file","FamilyLinkReadController.vue"]]);export{h as default};
