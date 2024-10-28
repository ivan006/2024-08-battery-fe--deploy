import{_ as s,ab as o,r as d,e as n,c}from"./vendor.js";import{c as m}from"./index.js";const p={name:"FamilyLink-list",components:{SuperTable:o},props:{colWidth:{type:Number,default:()=>3},parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},data(){return{templateListGrid:{colWidth:this.colWidth,cols:[{width:12,class:"q-pa-md q-col-gutter-sm",cols:[{width:12,dataPoint:{field:"family"}},{width:12,dataPoint:{field:"user"}},{width:12,dataPoint:{hideLabel:!0,field:"actions"}}]}]},templateListTable:[{field:"family"},{field:"user"},{hideLabel:!0,field:"actions"}]}},computed:{superTableModel(){return m}},methods:{openRecord(t,i,e){e.push({name:"/lists/family-links/:rId/:rName",params:{rId:t,rName:t}})}}};function u(t,i,e,f,a,l){const r=d("SuperTable");return n(),c(r,{showMap:!0,model:l.superTableModel,onClickRow:l.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags,templateListGrid:a.templateListGrid,templateListTable:a.templateListTable,viewAs:{show:[],default:"table"},allowedFilters:[],noBorder:""},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags","templateListGrid","templateListTable"])}const L=s(p,[["render",u],["__file","FamilyLinkList.vue"]]);export{L as F};