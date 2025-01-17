import{d as w,ar as p,e as l,j as _,k as t,w as r,aU as N,aV as S,a8 as V,c as g,aR as Q,n as q,l as b,t as T,aa as U,aW as W,a1 as y,as as h,o as A,aX as $,aY as X,aZ as O,a_ as z,a$ as j,aS as Z,b0 as Y,b1 as G,X as k,m as f,aL as J,u as D,b2 as x,b3 as F,ab as H,b4 as K,b5 as P,aB as E,r as ee,aM as te,Z as I}from"./vendor.js";import{_ as R}from"./index.js";const ae=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},route:{type:String,default:null},function:{type:Function,default:()=>{}},external:{type:String,default:null},icon:{type:String,default:""},activeRoute:{type:String,required:!0},indent:{type:Boolean,default:!1}},setup(c,{expose:i}){i();const o=w(),e=c,a=p(()=>e.route&&e.route===e.activeRoute),s={router:o,props:e,isActive:a,click:()=>{e.route?o.push({path:e.route}):e.function()},computed:p,get useRouter(){return w}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function re(c,i,o,e,a,m){return l(),_(y,null,[t(W,{clickable:"",tag:e.props.external?"a":"router-link",href:e.props.external,onClick:e.click,target:"_blank","active-class":"q-item--highlighted",class:U({"q-pl-lg":e.props.indent}),style:V(e.isActive?"background-color: rgba(0, 31, 63, 0.1)":"")},{default:r(()=>[t(N,null,{default:r(()=>[t(S,{style:V(e.isActive?"font-weight: bold;":"")},{default:r(()=>[e.props.icon?(l(),g(Q,{key:0,name:e.props.icon,size:"sm",style:{opacity:"50%"}},null,8,["name"])):q("",!0),b(" "+T(e.props.title),1)]),_:1},8,["style"]),e.props.caption?(l(),g(S,{key:0,caption:""},{default:r(()=>[b(T(e.props.caption),1)]),_:1})):q("",!0)]),_:1})]),_:1},8,["tag","href","class","style"]),q("",!0)],64)}const ne=R(ae,[["render",re],["__file","EssentialLink.vue"]]),oe={__name:"MainLayoutHelper",setup(c,{expose:i}){i();const o=h(!1),e=()=>{o.value=window.innerWidth<=1151},a=h(!1);function m(){a.value=!a.value}A(()=>{e(),window.addEventListener("resize",e)}),$(()=>{window.removeEventListener("resize",e)});const s={isSmallScreen:o,checkScreenWidth:e,leftDrawerOpen:a,toggleLeftDrawer:m,ref:h,onMounted:A,onUnmounted:$};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},se={class:"q-px-md"},le={class:"q-pb-md"},ie={class:"container-md row no-wrap items-center bg-primary text-white"},ue={class:"container-md"},ce={class:"q-px-md"},de={class:"q-pb-md"};function me(c,i,o,e,a,m){return l(),_("div",null,[e.isSmallScreen?(l(),g(J,{key:0,view:"lHh Lpr lFf",style:{"background-color":"#F8F8F8","padding-bottom":"50px"}},{default:r(()=>[t(X,{elevated:"",style:{},class:"bg-primary"},{default:r(()=>[t(O,null,{default:r(()=>[t(z,null,{default:r(()=>[t(Q,{name:"school",size:"lg",style:{opacity:"50%"}})]),_:1}),t(j,null,{default:r(()=>[b("Home-Ed Community Hub")]),_:1}),t(Z,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer})]),_:1})]),_:1}),t(Y,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[0]||(i[0]=s=>e.leftDrawerOpen=s),"show-if-above":"",bordered:"",side:"right"},{default:r(()=>[t(G,null,{default:r(()=>[t(S,{header:""},{default:r(()=>[b("   ")]),_:1}),k(c.$slots,"menu")]),_:3})]),_:3},8,["modelValue"]),f("div",se,[f("div",le,[k(c.$slots,"default")])])]),_:3})):(l(),_(y,{key:1},[t(O,{class:"bg-primary text-white"},{default:r(()=>[f("div",ie,[t(z,null,{default:r(()=>[t(Q,{name:"school",size:"lg",style:{opacity:"50%"}})]),_:1}),t(j,null,{default:r(()=>[b("Home-Ed Community Hub")]),_:1}),k(c.$slots,"menu")])]),_:3}),f("div",ue,[f("div",ce,[f("div",de,[k(c.$slots,"default")])])])],64))])}const pe=R(oe,[["render",me],["__file","MainLayoutHelper.vue"]]),_e={__name:"BreadcrumbsComp",setup(c,{expose:i}){i();const o=D(),e=x(),a=w();function m(d){return typeof d=="string"?d.replace(/^\//,""):""}const s=p(()=>o.$db().model("routeLineages").query().get()),u=d=>{a.push({name:d,params:e.params,query:e.query})},n=p(()=>a.resolve(e.path)),C=p(()=>{const d=n.value.matched[n.value.matched.length-1];m(d.path);const v=o.$db().model("routeLineages").query().where("name",d.name).first();return v?v.lineage.map(M=>o.$db().model("routeLineages").query().where("name",M).first()):[]}),L={store:o,route:e,router:a,standardizePath:m,lineages:s,goToRoute:u,routeMatch:n,breadcrumbs:C,getBreadcrumbLabel:d=>{if(d){const v=d.label.match(/:(\w+)/);if(v){const M=v[1];return e.params[M]||d.label}return d.label}return""},get useStore(){return D},computed:p,get useRoute(){return x},get useRouter(){return w}};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}};function fe(c,i,o,e,a,m){return l(),_("div",null,[t(K,{class:"q-mt-md"},{default:r(()=>[t(F,{class:"text-subtitle2",label:"Home",to:{path:"/"}}),(l(!0),_(y,null,H(e.breadcrumbs,(s,u)=>(l(),g(F,{class:"text-subtitle2",key:u,label:e.getBreadcrumbLabel(s),onClick:n=>e.goToRoute(s.name)},null,8,["label","onClick"]))),128))]),_:1})])}const ye=R(_e,[["render",fe],["__file","BreadcrumbsComp.vue"]]),ge=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(c,{expose:i}){i();const o=x(),e=h(o.path);P(o,n=>{e.value=n.path});const a=p(()=>E.get("VITE_AUTH")),m=p(()=>{const n=[{icon:"manage_search",title:"Events",route:"/lists/events"},{icon:"school",title:"Schools",route:"/lists/schools"}];if(a.value){const C=`/lists/users/${a.value.user.id}/${a.value.user.name}`;if(a.value.user.primary_family_id){const B=a.value.user.primary_family,L=`/lists/families/${B.id}/${B.name}`;n.push({icon:"book",title:"My Family",route:L})}n.push({icon:"person",title:"My Account",route:C}),n.push({icon:"logout",title:"Logout",function:()=>{E.remove("VITE_AUTH"),window.location.href="/"}})}else n.push({icon:"person",title:"Login",route:"/login"}),n.push({icon:"edit",title:"Register",route:"/register"});return n.push({icon:"info",title:"About",route:"/about"}),n});function s(n){e.value=n}const u={route:o,activeRoute:e,session:a,linksList:m,updateActiveRoute:s,computed:p,ref:h,watch:P,get useRoute(){return x},EssentialLink:ne,MainLayoutHelper:pe,BreadcrumbsComp:ye,get VueCookies(){return E}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),be={class:"q-mb-md"};function ve(c,i,o,e,a,m){const s=ee("router-view");return l(),g(e.MainLayoutHelper,null,{menu:r(()=>[(l(!0),_(y,null,H(e.linksList,u=>(l(),_(y,{key:u.title||u.groupTitle},[u.groupTitle?(l(),_(y,{key:0},[t(S,{header:""},{default:r(()=>[b(T(u.groupTitle),1)]),_:2},1024),(l(!0),_(y,null,H(u.links,n=>(l(),g(e.EssentialLink,I({key:n.title,ref_for:!0},n,{"active-route":e.activeRoute,indent:!0}),null,16,["active-route"]))),128))],64)):(l(),g(e.EssentialLink,I({key:1,ref_for:!0},u,{"active-route":e.activeRoute,indent:!1}),null,16,["active-route"]))],64))),128))]),default:r(()=>[t(te,null,{default:r(()=>[f("div",be,[t(e.BreadcrumbsComp)]),t(s,{onRouteChanged:e.updateActiveRoute})]),_:1})]),_:1})}const ke=R(ge,[["render",ve],["__file","MainLayout.vue"]]);export{ke as default};
