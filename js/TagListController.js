import{_ as s,ab as i,r as c,e as p,c as d,I as f,s as n,w as m,H as _}from"./vendor.js";import{T as g}from"./index.js";const h={name:"Tag-list",components:{SuperTable:i},props:{noBorder:{type:Boolean,default:()=>!1},parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return g}},methods:{openRecord(a,l,e){e.push({name:"/lists/tags/:rId/:rName",params:{rId:a,rName:a}})}}};function y(a,l,e,u,t,r){const o=c("SuperTable");return p(),d(o,{showMap:!0,model:r.superTableModel,onClickRow:r.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags,noBorder:e.noBorder},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags","noBorder"])}const T=s(h,[["render",y],["__file","TagList.vue"]]),F={name:"Tag-list-controller",components:{tagList:T},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function b(a,l,e,u,t,r){const o=c("tagList");return p(),f("div",null,[n(_,{class:"q-pa-md q-mt-md"},{default:m(()=>[n(o,{parentKeyValuePair:t.parentKeyValuePair,fetchFlags:t.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])]),_:1})])}const P=s(F,[["render",b],["__file","TagListController.vue"]]);export{P as default};
