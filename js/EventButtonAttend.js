import{_ as a,A as r}from"./index.js";import{r as p,e as s,j as l,k as u,a6 as d}from"./vendor.js";import{S as i}from"./SuperTable.js";const m={name:"EventButtonAttend",components:{SuperTable:i},data(){return{model:r}},props:{item:{type:Object,default:()=>{}},superOptions:{type:Object,default:()=>{}}}};function c(f,e,t,_,n,v){const o=p("SuperTable");return s(),l("div",null,[u(o,{onClick:e[0]||(e[0]=d(()=>{},["stop"])),showMap:!0,model:n.model,displayMapField:!1,parentKeyValuePair:{parentFKey:"event_id",parentFVal:+t.item.id,parentItem:t.item},justCreateButton:"",createButtonText:"Attend"},null,8,["model","parentKeyValuePair"])])}const b=a(m,[["render",c],["__file","EventButtonAttend.vue"]]);export{b as default};
