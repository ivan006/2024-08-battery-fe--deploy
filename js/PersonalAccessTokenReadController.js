import{_ as c,ad as i,r as d,e as t,c as u,I as m,s as a,w as _,H as f}from"./vendor.js";import{d as k}from"./index.js";const $={name:"PersonalAccessToken-read",components:{SuperRecord:i},computed:{superRecordModel(){return k}}};function R(e,o,l,p,n,r){const s=d("SuperRecord");return t(),u(s,{model:r.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:o[0]||(o[0]=P=>e.$emit("initialLoadHappened"))},null,8,["model","id"])}const A=c($,[["render",R],["__file","PersonalAccessTokenRead.vue"]]),T={name:"PersonalAccessToken-read-controller",components:{personalAccessTokenRead:A},data(){return{id:+this.$route.params.rId}}};function v(e,o,l,p,n,r){const s=d("personalAccessTokenRead");return t(),m("div",null,[a(f,{class:"q-mb-md",style:{overflow:"hidden"}},{default:_(()=>[a(s,{id:n.id},null,8,["id"])]),_:1})])}const h=c(T,[["render",v],["__file","PersonalAccessTokenReadController.vue"]]);export{h as default};
