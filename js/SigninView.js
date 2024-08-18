import{n as g,V as w,d as r,e as h,w as n,p as l,z as V,G as S,H as u,A as p,C as c,y as d,I as f,J as b,K as x,E as y,F as _}from"./vendor.js";import{S as m}from"./index.js";const k={name:"SigninView",data(){return{form:{email:"",password:""},loading:!1,emailRule:t=>!!t||"Email is required"}},computed:{loginSession(){return m.query().withAllRecursive().first()}},methods:{submit(){m.deleteAll(),this.loading=!0,m.signIn(this.form).then(t=>{const e=t.response.data,a=new Date;a.setDate(a.getDate()+7),e.expireDate=a.toISOString(),w.set("VITE_AUTH",e,"7d"),this.$router.push({path:"/"}),this.loading=!1}).catch(()=>{this.loading=!1})}},mounted(){}},D=d("div",{class:"text-h6"},"Login",-1),q={class:"q-mt-md text-center"};function v(t,e,a,B,s,i){return r(),h(_,{class:"q-pa-md flex flex-center"},{default:n(()=>[l(y,{class:"q-pa-md"},{default:n(()=>[l(V,{onSubmit:S(i.submit,["prevent"])},{default:n(()=>[D,i.loginSession?(r(),u(f,{key:1},[b(" Welcome "),d("b",null,x(i.loginSession.user.email),1)],64)):(r(),u(f,{key:0},[l(p,{modelValue:s.form.email,"onUpdate:modelValue":e[0]||(e[0]=o=>s.form.email=o),label:"Email",type:"email",outlined:"",dense:"",rules:[s.emailRule],autocomplete:"email",name:"email"},null,8,["modelValue","rules"]),l(p,{modelValue:s.form.password,"onUpdate:modelValue":e[1]||(e[1]=o=>s.form.password=o),label:"Password",type:"password",outlined:"",dense:"",autocomplete:"password",name:"password"},null,8,["modelValue"]),l(c,{type:"submit",block:"",class:"q-mt-md full-width",loading:s.loading,label:"Login",color:"primary"},null,8,["loading"]),d("div",q,[l(c,{label:"Register",class:"full-width",outline:"",color:"primary",onClick:e[2]||(e[2]=o=>t.$router.push({path:"register"}))})])],64))]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var I=g(k,[["render",v]]);export{I as default};
