import{_ as o,ab as r,r as s,e as l,I as p,s as u,a9 as d}from"./vendor.js";import{A as i}from"./index.js";const m={name:"EventButtonAttend",components:{SuperTable:r},data(){return{model:i}},props:{item:{type:Object,default:()=>{}},superOptions:{type:Object,default:()=>{}}}};function c(f,e,t,_,n,v){const a=s("SuperTable");return l(),p("div",null,[u(a,{onClick:e[0]||(e[0]=d(()=>{},["stop"])),showMap:!0,model:n.model,displayMapField:!1,parentKeyValuePair:{parentFKey:"event_id",parentFVal:+t.item.id,parentItem:t.item},justCreateButton:"",createButtonText:"Attend"},null,8,["model","parentKeyValuePair"])])}const y=o(m,[["render",c],["__file","EventButtonAttend.vue"]]);export{y as default};
