import{r as n,e as c,d as u,X as m,z as l,x as d,T as f}from"./vendor.js";import{_ as p,f as _}from"./index.js";import{S as h}from"./SuperTable.js";const P={name:"Post-list",components:{SuperTable:h},props:{parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return _}},methods:{openRecord(t,o,e){e.push({name:"/lists/posts/:rId/:rName",params:{rId:t,rName:t}})}}};function y(t,o,e,i,a,s){const r=n("SuperTable");return c(),u(r,{showMap:!0,model:s.superTableModel,onClickRow:s.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags"])}const F=p(P,[["render",y],["__file","PostList.vue"]]),g={name:"Post-list-controller",components:{postList:F},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function K(t,o,e,i,a,s){const r=n("postList");return c(),m("div",null,[l(f,{class:"q-pa-md q-mt-md"},{default:d(()=>[l(r,{parentKeyValuePair:a.parentKeyValuePair,fetchFlags:a.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])]),_:1})])}const x=p(g,[["render",K],["__file","PostListController.vue"]]);export{x as default};
