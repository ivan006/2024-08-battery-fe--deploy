import{n as m,d as p,e as u,w as n,p as l,z as w,A as i,C as t,y as a,E as f,F as y}from"./vendor.js";import{U as g}from"./index.js";const h={name:"JoinView",data(){return{entity:{},loading:!1,showPassword:!1,showCPassword:!1,errors:{},itemEmpty:{name:"",email:"",password:"",c_password:""}}},methods:{setErrors(o={}){for(const s in this.itemEmpty)o[s]?this.errors[s]=o[s][0]:this.errors[s]=null},join(){this.$refs.form.validate()&&(this.loading=!0,g.Register(this.entity).then(()=>{this.loading=!1}).catch(o=>{o.response&&o.response.data.errors&&this.setErrors(o.response.data.errors),this.loading=!1}))}},mounted(){this.setErrors()}},V=a("div",{class:"text-h6"},"Register",-1),C={class:"q-mt-md text-center"};function P(o,s,b,v,e,d){return p(),u(y,{class:"q-pa-md flex flex-center"},{default:n(()=>[l(f,{class:"q-pa-md"},{default:n(()=>[l(w,{ref:"form"},{default:n(()=>[V,l(i,{modelValue:e.entity.name,"onUpdate:modelValue":s[0]||(s[0]=r=>e.entity.name=r),label:"Full Name",error:!!e.errors.name,"error-message":e.errors.name,outlined:"",dense:""},null,8,["modelValue","error","error-message"]),l(i,{modelValue:e.entity.email,"onUpdate:modelValue":s[1]||(s[1]=r=>e.entity.email=r),label:"Email",error:!!e.errors.email,"error-message":e.errors.email,outlined:"",dense:""},null,8,["modelValue","error","error-message"]),l(i,{modelValue:e.entity.password,"onUpdate:modelValue":s[2]||(s[2]=r=>e.entity.password=r),type:e.showPassword?"text":"password",append:e.showPassword?"visibility_off":"visibility","onClick:append":s[3]||(s[3]=r=>e.showPassword=!e.showPassword),label:"Password",error:!!e.errors.password,"error-message":e.errors.password,outlined:"",dense:""},null,8,["modelValue","type","append","error","error-message"]),l(i,{modelValue:e.entity.c_password,"onUpdate:modelValue":s[4]||(s[4]=r=>e.entity.c_password=r),type:e.showCPassword?"text":"password",append:e.showCPassword?"visibility_off":"visibility","onClick:append":s[5]||(s[5]=r=>e.showCPassword=!e.showCPassword),label:"Confirm Password",error:!!e.errors.c_password,"error-message":e.errors.c_password,outlined:"",dense:""},null,8,["modelValue","type","append","error","error-message"]),l(t,{block:"",class:"full-width",loading:e.loading,onClick:d.join,label:"Register",color:"primary"},null,8,["loading","onClick"]),a("div",C,[l(t,{label:"Login",class:"full-width",outline:"",color:"primary",onClick:s[6]||(s[6]=r=>o.$router.push({path:"login"}))})])]),_:1},512)]),_:1})]),_:1})}var k=m(h,[["render",P]]);export{k as default};
