import{v as b,d as a,e as u,w as t,N as w,p as s,B as Q,L,O as f,P as H,J as v,K as h,R as C,S as B,t as S,o as I,T as N,H as m,U as z,W as A,C as U,X as D,Y as R,Z as q,y as g,s as O,u as P,$ as T,a as W,a0 as V,I as y,a1 as $,a2 as j,a3 as J,V as K,r as X,a4 as E,q as Y}from"./vendor.js";const M=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},route:{type:String,default:null},external:{type:String,default:null},icon:{type:String,default:""},activeRoute:{type:String,required:!0},indent:{type:Boolean,default:!1}},setup(k){const e=k,n=b(()=>e.route&&e.route===e.activeRoute);return(o,p)=>e.route?(a(),u(B,{key:0,clickable:"",tag:"router-link",to:e.route,"active-class":"q-item--highlighted",class:C({"q-item--active":n.value,"q-pl-lg":e.indent})},{default:t(()=>[e.icon?(a(),u(w,{key:0,avatar:""},{default:t(()=>[s(Q,{name:e.icon},null,8,["name"])]),_:1})):L("",!0),s(w,null,{default:t(()=>[s(f,{style:H(n.value?"font-weight: bold;":"")},{default:t(()=>[v(h(e.title),1)]),_:1},8,["style"]),e.caption?(a(),u(f,{key:0,caption:""},{default:t(()=>[v(h(e.caption),1)]),_:1})):L("",!0)]),_:1})]),_:1},8,["to","class"])):(a(),u(B,{key:1,clickable:"",tag:"a",href:e.external,target:"_blank",class:C({"q-ml-md":e.indent})},{default:t(()=>[e.icon?(a(),u(w,{key:0,avatar:""},{default:t(()=>[s(Q,{name:e.icon},null,8,["name"])]),_:1})):L("",!0),s(w,null,{default:t(()=>[s(f,null,{default:t(()=>[v(h(e.title),1)]),_:1}),e.caption?(a(),u(f,{key:0,caption:""},{default:t(()=>[v(h(e.caption),1)]),_:1})):L("",!0)]),_:1})]),_:1},8,["href","class"]))}}),Z={class:"q-px-md"},G={key:1,class:"row no-wrap"},ee={class:"",style:{width:"300px","border-right":"1px solid rgba(0, 0, 0, 0.12)"}},te={class:"",style:{flex:"1",overflow:"auto","background-color":"#F8F8F8","min-height":"100vh"}},ae={class:"q-pa-md container-md"},se={__name:"MainLayoutHelper",setup(k){const e=S(!1),n=()=>{e.value=window.innerWidth<=1151},o=S(!1);function p(){o.value=!o.value}return I(()=>{n(),window.addEventListener("resize",n)}),N(()=>{window.removeEventListener("resize",n)}),(c,_)=>(a(),m("div",null,[e.value?(a(),u(O,{key:0,view:"lHh Lpr lFf",style:{"background-color":"#F8F8F8"}},{default:t(()=>[s(z,{elevated:"",style:{"background-color":"rgb(0, 31, 63)"}},{default:t(()=>[s(A,null,{default:t(()=>[s(U,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:p})]),_:1})]),_:1}),s(D,{modelValue:o.value,"onUpdate:modelValue":_[0]||(_[0]=d=>o.value=d),"show-if-above":"",bordered:""},{default:t(()=>[s(R,null,{default:t(()=>[s(f,{header:""},{default:t(()=>[v(" \xA0 ")]),_:1}),q(c.$slots,"menu")]),_:3})]),_:3},8,["modelValue"]),g("div",Z,[q(c.$slots,"default")])]),_:3})):(a(),m("div",G,[g("div",ee,[s(R,{style:{"padding-top":"10px"}},{default:t(()=>[q(c.$slots,"menu")]),_:3})]),g("div",te,[g("div",ae,[q(c.$slots,"default")])])]))]))}},ne={__name:"BreadcrumbsComp",setup(k){const e=P(),n=T(),o=W();function p(l){return typeof l=="string"?l.replace(/^\//,""):""}b(()=>e.$db().model("routeLineages").query().get());const c=l=>{o.push({name:l,params:n.params,query:n.query})},_=b(()=>o.resolve(n.path)),d=b(()=>{const l=_.value.matched[_.value.matched.length-1];p(l.path);const r=e.$db().model("routeLineages").query().where("name",l.name).first();return r?r.lineage.map(i=>e.$db().model("routeLineages").query().where("name",i).first()):[]}),x=l=>{if(l){const r=l.label.match(/:(\w+)/);if(r){const i=r[1];return n.params[i]||l.label}return l.label}return""};return(l,r)=>(a(),m("div",null,[s(j,{class:"q-mt-md"},{default:t(()=>[s(V,{class:"text-subtitle2",label:"Home",to:{path:"/"}}),(a(!0),m(y,null,$(d.value,(i,F)=>(a(),u(V,{class:"text-subtitle2",key:F,label:x(i),onClick:re=>c(i.name)},null,8,["label","onClick"]))),128))]),_:1})]))}},le={class:"q-mb-md"},ue=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(k){const e=T(),n=S(e.path);J(e,d=>{n.value=d.path});const o=b(()=>K.get("VITE_AUTH")),p=`/lists/users/${o.value.user.id}/${o.value.user.name}`,c=[{title:"Events",route:"/lists/events"},{title:"Schools",route:"/lists/schools"},{title:"Users",route:"/lists/users"},{title:"My Account",route:p}];function _(d){n.value=d}return(d,x)=>{const l=X("router-view");return a(),u(se,null,{menu:t(()=>[(a(),m(y,null,$(c,r=>(a(),m(y,{key:r.title||r.groupTitle},[r.groupTitle?(a(),m(y,{key:0},[s(f,{header:""},{default:t(()=>[v(h(r.groupTitle),1)]),_:2},1024),(a(!0),m(y,null,$(r.links,i=>(a(),u(M,E({key:i.title,ref_for:!0},i,{"active-route":n.value,indent:!0}),null,16,["active-route"]))),128))],64)):(a(),u(M,E({key:1,ref_for:!0},r,{"active-route":n.value,indent:!1}),null,16,["active-route"]))],64))),64))]),default:t(()=>[s(Y,null,{default:t(()=>[g("div",le,[s(ne)]),s(l,{onRouteChanged:_})]),_:1})]),_:1})}}});export{ue as default};
