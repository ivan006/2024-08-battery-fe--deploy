import{n,a5 as i,r as c,d as p,e as d,H as m,p as l,w as f,E as _}from"./vendor.js";import{f as h}from"./index.js";const P={name:"Post-list",components:{SuperTable:i},props:{parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return h}},methods:{openRecord(a,o,e){e.push({name:"/lists/posts/:rId/:rName",params:{rId:a,rName:a}})}}};function y(a,o,e,u,t,r){const s=c("SuperTable");return p(),d(s,{showMap:!0,model:r.superTableModel,onClickRow:r.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags"])}var F=n(P,[["render",y]]);const g={name:"Post-list-controller",components:{postList:F},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function K(a,o,e,u,t,r){const s=c("postList");return p(),m("div",null,[l(_,{class:"q-pa-md q-mt-md"},{default:f(()=>[l(s,{parentKeyValuePair:t.parentKeyValuePair,fetchFlags:t.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])]),_:1})])}var C=n(g,[["render",K]]);export{C as default};