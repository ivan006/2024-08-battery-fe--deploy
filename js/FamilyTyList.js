import{r as s,e as o,d}from"./vendor.js";import{_ as c,c as m}from"./index.js";import{S as n}from"./SuperTable.js";const p={name:"FamilyTy-list",components:{SuperTable:n},props:{colWidth:{type:Number,default:()=>3},parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},data(){return{templateListGrid:{colWidth:this.colWidth,cols:[{width:12,class:"q-pa-md q-col-gutter-sm",cols:[{width:12,dataPoint:{field:"family"}},{width:12,dataPoint:{field:"user"}},{width:12,dataPoint:{hideLabel:!0,field:"actions"}}]}]}}},computed:{superTableModel(){return m}},methods:{openRecord(t,l,e){e.push({name:"/lists/family-ties/:rId/:rName",params:{rId:t,rName:t}})}}};function u(t,l,e,f,r,a){const i=s("SuperTable");return o(),d(i,{showMap:!0,model:a.superTableModel,onClickRow:a.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags,templateListGrid:r.templateListGrid,viewAs:{show:[],default:"grid"},allowedFilters:[]},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags","templateListGrid"])}const F=c(p,[["render",u],["__file","FamilyTyList.vue"]]);export{F};
