import{_ as o,a9 as i,r as c,e as p,d,J as m,s as n,w as f,H as _}from"./vendor.js";import{T as g}from"./index.js";const h={name:"Tag-list",components:{SuperTable:i},props:{parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return g}},methods:{openRecord(a,l,e){e.push({name:"/lists/tags/:rId/:rName",params:{rId:a,rName:a}})}}};function T(a,l,e,u,t,r){const s=c("SuperTable");return p(),d(s,{showMap:!0,model:r.superTableModel,onClickRow:r.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags"])}const y=o(h,[["render",T],["__file","TagList.vue"]]),F={name:"Tag-list-controller",components:{tagList:y},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function K(a,l,e,u,t,r){const s=c("tagList");return p(),m("div",null,[n(_,{class:"q-pa-md q-mt-md"},{default:f(()=>[n(s,{parentKeyValuePair:t.parentKeyValuePair,fetchFlags:t.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])]),_:1})])}const b=o(F,[["render",K],["__file","TagListController.vue"]]);export{b as default};
