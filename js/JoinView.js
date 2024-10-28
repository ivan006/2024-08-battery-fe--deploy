import{_ as h,V as g,e as m,c as p,w as u,y as V,A as i,s as r,B as b,C as a,aa as c,G as w,I as v,K as q,J as C,H as _}from"./vendor.js";import{F as f,a as y,U as P}from"./index.js";const k={name:"JoinView",data(){return{groupName:"",intention:"Customer",options:[{label:"Family",value:"Customer"},{label:"School",value:"Provider"}],entity:{},loading:!1,checkEmail:!1,showPassword:!1,showCPassword:!1,errors:{},itemEmpty:{name:"",email:"",password:"",c_password:""}}},methods:{setErrors(l={}){for(const o in this.itemEmpty)l[o]?this.errors[o]=l[o][0]:this.errors[o]=null},join(){if(this.$refs.form.validate()){this.loading=!0,g.get("VITE_AUTH");let l=null;this.intention==="Customer"?l=f.Store({name:this.groupName},[],{},{}):l=y.Store({name:this.groupName},[],{},{}),l.then(o=>{const d=o.response.data.data;this.intention==="Customer"&&(this.entity.primary_family_id=d.id),P.Register(this.entity).then(t=>{const e=t.response.data.user;let n=null;this.intention==="Customer"?n=f.Update({id:d.id,creator_id:e.id,updater_id:e.id},[],{},{}):n=y.Update({id:d.id,creator_id:e.id,updater_id:e.id},[],{},{}),n.then(s=>{this.checkEmail=!0,this.loading=!1}).catch(s=>{s.response&&s.response.data.errors&&this.setErrors(s.response.data.errors)})}).catch(t=>{t.response&&t.response.data.errors&&this.setErrors(t.response.data.errors),this.loading=!1})}).catch(()=>{this.loading=!1})}}},mounted(){this.setErrors()}},F={class:"row q-col-gutter-md"},x=i("div",{class:"col-xl-3 col-md-3 col-sm-12 col-xs-12"},null,-1),U={class:"col-xl-6 col-md-6 col-sm-12 col-xs-12"},E=i("div",{class:"text-h6 q-mb-md"},"Register",-1),N=i("div",{class:"q-mb-sm"}," Please make a group ",-1),S={class:"q-mt-md text-center"};function B(l,o,d,t,e,n){return m(),p(V,{class:"q-pa-md"},{default:u(()=>[i("div",F,[x,i("div",U,[r(_,{class:"q-pa-md"},{default:u(()=>[e.checkEmail?(m(),v(C,{key:1},[q(" Check your emails ")],64)):(m(),p(b,{key:0,ref:"form",onSubmit:n.join},{default:u(()=>[E,r(a,{modelValue:e.entity.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.entity.name=s),label:"Full Name",error:!!e.errors.name,"error-message":e.errors.name,rules:[s=>!!s||"Field is required"],outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue","error","error-message","rules"]),r(a,{type:"email",modelValue:e.entity.email,"onUpdate:modelValue":o[1]||(o[1]=s=>e.entity.email=s),label:"Email",error:!!e.errors.email,"error-message":e.errors.email,rules:[s=>!!s||"Field is required"],outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue","error","error-message","rules"]),r(a,{modelValue:e.entity.password,"onUpdate:modelValue":o[2]||(o[2]=s=>e.entity.password=s),type:e.showPassword?"text":"password",append:e.showPassword?"visibility_off":"visibility","onClick:append":o[3]||(o[3]=s=>e.showPassword=!e.showPassword),label:"Password",error:!!e.errors.password,"error-message":e.errors.password,rules:[s=>!!s||"Field is required"],outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue","type","append","error","error-message","rules"]),r(a,{modelValue:e.entity.c_password,"onUpdate:modelValue":o[4]||(o[4]=s=>e.entity.c_password=s),type:e.showCPassword?"text":"password",append:e.showCPassword?"visibility_off":"visibility","onClick:append":o[5]||(o[5]=s=>e.showCPassword=!e.showCPassword),label:"Confirm Password",error:!!e.errors.c_password,"error-message":e.errors.c_password,rules:[s=>!!s||"Field is required"],outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue","type","append","error","error-message","rules"]),N,i("div",null,[r(c,{rules:[s=>!!s||"Field is required"],modelValue:e.intention,"onUpdate:modelValue":o[6]||(o[6]=s=>e.intention=s),val:"Customer",label:"Family",color:"primary",outlined:"",dense:"",class:"q-mb-sm"},null,8,["rules","modelValue"])]),i("div",null,[r(c,{rules:[s=>!!s||"Field is required"],modelValue:e.intention,"onUpdate:modelValue":o[7]||(o[7]=s=>e.intention=s),val:"Provider",label:"School",color:"primary",outlined:"",dense:"",class:"q-mb-md"},null,8,["rules","modelValue"])]),r(a,{modelValue:e.groupName,"onUpdate:modelValue":o[8]||(o[8]=s=>e.groupName=s),type:"text",label:e.intention==="Customer"?"Family Name":"School Name",rules:[s=>!!s||"Field is required"],outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue","label","rules"]),r(w,{block:"",class:"full-width",loading:e.loading,type:"submit",label:"Register",color:"primary"},null,8,["loading"]),i("div",S,[r(w,{label:"Login",class:"full-width",outline:"",color:"primary",onClick:o[9]||(o[9]=s=>l.$router.push({path:"login"}))})])]),_:1},8,["onSubmit"]))]),_:1})])])]),_:1})}const J=h(k,[["render",B],["__file","JoinView.vue"]]);export{J as default};
