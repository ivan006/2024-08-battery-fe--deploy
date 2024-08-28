import{r as n,e as c,d,X as u,z as s,x as f,T as m}from"./vendor.js";import{_ as i,F as _}from"./index.js";import{S as b}from"./SuperTable.js";const F={name:"FailedJob-list",components:{SuperTable:b},props:{parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return _}},methods:{openRecord(a,o,e){e.push({name:"/lists/failed-jobs/:rId/:rName",params:{rId:a,rName:a}})}}};function h(a,o,e,p,t,l){const r=n("SuperTable");return c(),d(r,{showMap:!0,model:l.superTableModel,onClickRow:l.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags"])}const y=i(F,[["render",h],["__file","FailedJobList.vue"]]),J={name:"FailedJob-list-controller",components:{failedJobList:y},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function g(a,o,e,p,t,l){const r=n("failedJobList");return c(),u("div",null,[s(m,{class:"q-pa-md q-mt-md"},{default:f(()=>[s(r,{parentKeyValuePair:t.parentKeyValuePair,fetchFlags:t.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])]),_:1})])}const C=i(J,[["render",g],["__file","FailedJobListController.vue"]]);export{C as default};
