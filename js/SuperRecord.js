import{r as v,e as s,X as m,Y as u,I as C,z as n,aD as O,ad as h,x as d,aa as D,aE as F,aF as _,d as c,a$ as E,Z as p,_ as Q,b0 as q,b1 as g,b2 as j,$ as w,aq as S,ao as L,ap as T,ar as B,am as V}from"./vendor.js";import{D as H,R as M,a as P,b as x,S as U,Q as b}from"./SuperTable.js";import{_ as K}from"./index.js";import N from"./CreateEditForm.js";const G={name:"OverviewTab",components:{DatapointForDisplayInner:H,RecordFieldsForDisplayCustom:M,RecordFieldsForDisplayGeneric:P},props:{templateOverview:{type:Object,default(){return{}}},filteredChildRelations:{type:Array,default(){return[]}},childRelations:{type:Array,default(){return[]}},item:{type:Object,default(){return{}}},superOptions:{type:Object,default(){return{headers:[],modelFields:[],displayMapField:!1,model:{},canEdit:!1,currentParentRecord:{}}}}},methods:{deleteItem(e){this.$emit("deleteItem",e)},editItem(e){this.$emit("editItem",e)},clickRow(e){this.$emit("clickRow",e)}}},z={key:0,class:"text-center q-pa-md"},W={key:0,style:{"padding-top":"0.03px"}},X={class:"row q-col-gutter-xs"};function Y(e,t,l,y,r,a){const I=v("RecordFieldsForDisplayCustom"),R=v("RecordFieldsForDisplayGeneric");return s(),m("div",null,[!l.item||l.item.constructor===Object&&Object.keys(l.item).length===0?(s(),m("div",z,"No data available")):(s(),m(u,{key:1},[l.templateOverview&&l.templateOverview.cols?(s(),m("div",W,[C("div",X,[n(I,{item:l.item,childRelations:l.childRelations,filteredChildRelations:l.filteredChildRelations,superOptions:l.superOptions,template:l.templateOverview,onEditItem:a.editItem,onDeleteItem:a.deleteItem},O({_:2},[h(e.$slots,(k,i)=>({name:i,fn:d(o=>[D(e.$slots,i,F(_(o)))])}))]),1032,["item","childRelations","filteredChildRelations","superOptions","template","onEditItem","onDeleteItem"])])])):(s(),c(R,{key:1,item:l.item,superOptions:l.superOptions,onEditItem:a.editItem,onDeleteItem:a.deleteItem},null,8,["item","superOptions","onEditItem","onDeleteItem"]))],64))])}const Z=K(G,[["render",Y],["__file","OverviewTab.vue"]]),J={name:"SuperRecord",components:{CreateEditForm:N,OverviewTab:Z,SuperTableTable:x,RecordFieldsForDisplayCustom:M,RecordFieldsForDisplayGeneric:P,SuperTable:U},props:{hideRelations:{type:Boolean,default(){return!1}},templateOverview:{type:Object,default(){return{}}},templateForm:{type:Object,default(){return{}}},model:{type:[Object,Function],required:!0},id:{type:Number,required:!0},displayMapField:{type:Boolean,default:!1},relationships:{type:Array,default(){return[]}}},data(){return{deleteItemData:{showModal:!1,data:null},editItemData:{showModal:!1,data:null},activeTab:"tab",loading:!0,initialLoadHappened:!1,item:{},formServerErrors:{}}},computed:{superOptions(){return{headers:this.headers,modelFields:this.modelFields,displayMapField:this.displayMapField,model:this.model,canEdit:this.canEdit}},colsAndDataIndicators(){let e={dataIndicators:[],cols:[]};this.templateOverview&&this.templateOverview.cols&&(e.cols=this.templateOverview.cols);for(const t of e.cols)if(t.cols)for(const l of t.cols)l.dataPoint.field&&e.dataIndicators.push(l.dataPoint.field);else t.dataPoint.field&&e.dataIndicators.push(t.dataPoint.field);return e},canEdit(){return!0},childRelations(){const e=b.computedAttrs(this.model,[]),t=[];for(let l in e){const y=e[l];y.usageType.startsWith("relChildren")&&t.push({field:y})}return t},filteredChildRelations(){let e=[];if(!this.hideRelations)for(const t of this.childRelations)this.colsAndDataIndicators.dataIndicators.includes(t.field.name)||e.push(t);return e},headers(){return b.SupaerTableHeaders(this.model,[],this.canEdit,this.displayMapField)},modelFields(){return b.computedAttrs(this.model,[])}},methods:{clickRow(e,t,l){l.field.meta.field.related.openRecord(e,t,this.$router)},parentKeyValuePair(e){return{parentFKey:e.field.meta.field.foreignKey,parentFVal:this.item[this.model.primaryKey],parentItem:this.item}},deleteItem(e){this.$emit("deleteItem",e),this.deleteItemData.data=e,this.deleteItemData.showModal=!0},deleteItemSubmit(){this.superOptions.model.Delete(this.deleteItemData.data.id).then(()=>{this.fetchData()}),this.deleteItemData.showModal=!1},editItem(e){this.$emit("editItem",e),this.editItemData.data={...e},this.editItemData.showModal=!0},editItemSubmit(){const e=b.preparePayload(this.editItemData.data,this.superOptions.modelFields);this.superOptions.model.Update(e).then(()=>{this.fetchData(),this.editItemData.showModal=!1,this.formServerErrors={}}).catch(t=>{this.formServerErrors=t.response.data})},getMsg(e){return Array.isArray(e)?e.length>1?`To create first set your active ${e[0]} group and active ${e[1]} group`:"":`To create first set your active ${e} group`},filters(e){const t=this.parentKeyValuePair(e);return{[t.parentFKey]:t.parentFVal}},fetchData(){this.loading=!0,this.model.FetchById(this.id,this.relationships,{flags:{},moreHeaders:{},rels:[]}).then(e=>{this.item=e.response.data.data,this.loading=!1,this.initialLoadHappened=!0,this.$emit("initialLoadHappened",!0)}).catch(()=>{this.loading=!1,this.initialLoadHappened=!0,this.$emit("initialLoadHappened",!0)})}},mounted(){this.fetchData()},watch:{activeTab(e){this.$nextTick(()=>{this.$refs[e]&&this.$refs[e][0].fetchData()})},item(e){Object.keys(e).length!==0&&this.$emit("update:item",e)}}},$={key:1,class:"text-center q-pa-md"},ee=C("div",{class:"text-h6"},"Delete Item",-1),te=C("p",null,"Are you sure you want to delete this item?",-1);function ae(e,t,l,y,r,a){const I=v("OverviewTab"),R=v("SuperTable"),k=v("CreateEditForm");return s(),m("div",null,[a.filteredChildRelations.length?(s(),m(u,{key:0},[n(q,{modelValue:r.activeTab,"onUpdate:modelValue":t[0]||(t[0]=i=>r.activeTab=i),align:"left"},{default:d(()=>[n(E,{name:"tab"},{default:d(()=>[p(" Overview ")]),_:1}),(s(!0),m(u,null,h(a.filteredChildRelations,(i,o)=>(s(),c(E,{key:o,name:"tab-"+o},{default:d(()=>[p(Q(i.field.label),1)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),n(j,{modelValue:r.activeTab,"onUpdate:modelValue":t[1]||(t[1]=i=>r.activeTab=i)},{default:d(()=>[n(g,{name:"tab"},{default:d(()=>[r.loading?(s(),m(u,{key:1},[p(" Loading... ")],64)):(s(),c(I,{key:0,item:r.item,superOptions:a.superOptions,templateOverview:l.templateOverview,filteredChildRelations:a.filteredChildRelations,childRelations:a.childRelations,onEditItem:a.editItem,onDeleteItem:a.deleteItem},O({_:2},[h(e.$slots,(i,o)=>({name:o,fn:d(f=>[D(e.$slots,o,F(_(f)))])}))]),1032,["item","superOptions","templateOverview","filteredChildRelations","childRelations","onEditItem","onDeleteItem"]))]),_:3}),(s(!0),m(u,null,h(a.filteredChildRelations,(i,o)=>(s(),c(g,{key:o,name:"tab-"+o},{default:d(()=>[n(R,{ref_for:!0,ref:`tab-${o}`,parentKeyValuePair:a.parentKeyValuePair(i),model:i.field.meta.field.related,canEdit:a.canEdit,forcedFilters:a.filters(i),onClickRow:(f,A)=>{a.clickRow(f,A,i)}},O({_:2},[e.$slots[i.field.name]?{name:"create",fn:d(()=>[D(e.$slots,i.field.name)]),key:"0"}:void 0]),1032,["parentKeyValuePair","model","canEdit","forcedFilters","onClickRow"])]),_:2},1032,["name"]))),128))]),_:3},8,["modelValue"])],64)):(s(),m(u,{key:1},[r.loading?(s(),m("div",$,"Loading...")):(s(),c(I,{key:0,item:r.item,superOptions:a.superOptions,templateOverview:l.templateOverview,filteredChildRelations:a.filteredChildRelations,childRelations:a.childRelations,onEditItem:a.editItem,onDeleteItem:a.deleteItem},O({_:2},[h(e.$slots,(i,o)=>({name:o,fn:d(f=>[D(e.$slots,o,F(_(f)))])}))]),1032,["item","superOptions","templateOverview","filteredChildRelations","childRelations","onEditItem","onDeleteItem"]))],64)),a.canEdit?(s(),m(u,{key:2},[a.superOptions.canEdit?(s(),m(u,{key:0},[n(S,{modelValue:r.editItemData.showModal,"onUpdate:modelValue":[t[4]||(t[4]=i=>r.editItemData.showModal=i),t[5]||(t[5]=i=>{r.formServerErrors={}})]},{default:d(()=>[r.editItemData.showModal?(s(),c(k,{key:0,titlePrefix:"Edit",modelValue:r.editItemData.data,"onUpdate:modelValue":t[2]||(t[2]=i=>r.editItemData.data=i),onSubmit:a.editItemSubmit,onCancel:t[3]||(t[3]=i=>{r.editItemData.showModal=!1,r.formServerErrors={}}),superOptions:a.superOptions,template:l.templateForm,style:{width:"700px","max-width":"delete me"},formServerErrors:r.formServerErrors},null,8,["modelValue","onSubmit","superOptions","template","formServerErrors"])):w("",!0)]),_:1},8,["modelValue"]),n(S,{modelValue:r.deleteItemData.showModal,"onUpdate:modelValue":t[7]||(t[7]=i=>r.deleteItemData.showModal=i)},{default:d(()=>[n(L,{style:{width:"500px","max-width":"delete me"}},{default:d(()=>[n(T,{class:"q-pt-md q-pb-md q-pl-md q-pr-md"},{default:d(()=>[ee]),_:1}),n(T,null,{default:d(()=>[te]),_:1}),n(B,{align:"right"},{default:d(()=>[n(V,{onClick:t[6]||(t[6]=i=>r.deleteItemData.showModal=!1),flat:""},{default:d(()=>[p("Cancel")]),_:1}),n(V,{onClick:a.deleteItemSubmit,color:"negative",flat:""},{default:d(()=>[p("Delete")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)):w("",!0)],64)):w("",!0)])}const de=K(J,[["render",ae],["__file","SuperRecord.vue"]]);export{de as S};