import{n,a5 as d,r as c,d as p,e as u,H as f,p as s,w as m,E as _}from"./vendor.js";import{F as b}from"./index.js";const h={name:"FailedJob-list",components:{SuperTable:d},props:{parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return b}},methods:{openRecord(a,o,e){e.push({name:"/lists/failed-jobs/:rId/:rName",params:{rId:a,rName:a}})}}};function F(a,o,e,i,t,r){const l=c("SuperTable");return p(),u(l,{showMap:!0,model:r.superTableModel,onClickRow:r.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags"])}var y=n(h,[["render",F]]);const g={name:"FailedJob-list-controller",components:{failedJobList:y},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function K(a,o,e,i,t,r){const l=c("failedJobList");return p(),f("div",null,[s(_,{class:"q-pa-md q-mt-md"},{default:m(()=>[s(l,{parentKeyValuePair:t.parentKeyValuePair,fetchFlags:t.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])]),_:1})])}var J=n(g,[["render",K]]);export{J as default};
