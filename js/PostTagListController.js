import{_ as n,a9 as i,r as c,e as p,d,J as m,s as l,w as f,H as _}from"./vendor.js";import{d as g}from"./index.js";const h={name:"PostTag-list",components:{SuperTable:i},props:{parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return g}},methods:{openRecord(a,o,e){e.push({name:"/lists/post-tags/:rId/:rName",params:{rId:a,rName:a}})}}};function P(a,o,e,u,t,s){const r=c("SuperTable");return p(),d(r,{showMap:!0,model:s.superTableModel,onClickRow:s.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags"])}const T=n(h,[["render",P],["__file","PostTagList.vue"]]),y={name:"PostTag-list-controller",components:{postTagList:T},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function F(a,o,e,u,t,s){const r=c("postTagList");return p(),m("div",null,[l(_,{class:"q-pa-md q-mt-md"},{default:f(()=>[l(r,{parentKeyValuePair:t.parentKeyValuePair,fetchFlags:t.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])]),_:1})])}const b=n(y,[["render",F],["__file","PostTagListController.vue"]]);export{b as default};
