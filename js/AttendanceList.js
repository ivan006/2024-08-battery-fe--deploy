import{ah as M,r as T,e as x,d as S}from"./vendor.js";import{_ as P,A as k}from"./index.js";import{S as H}from"./SuperTable.js";const C={name:"Attendance-list",components:{SuperTable:H},props:{parentKeyValuePair:{type:Object,default:()=>({})},colWidth:{type:Number,default:()=>3},fetchFlags:{type:Object,default:()=>({})}},data(){return{templateListGrid:{colWidth:this.colWidth,cols:[{width:12,class:"q-pa-md q-col-gutter-sm",cols:[{width:12,dataPoint:{type:"function",function:e=>`${e.event.name}`,label:"",tag:"div",class:"text-h6",hideLabel:!0}},{width:12,dataPoint:{type:"function",function:e=>`${this.formatCasualTime(e.event.start_datetime,e.event.end_datetime).comingUpHint}`,label:"Count Down",xOrientation:!0}},{width:12,dataPoint:{type:"function",function:e=>`${this.formatCasualTime(e.event.start_datetime,e.event.end_datetime).range}`,label:"Date",xOrientation:!0}},{width:12,dataPoint:{type:"function",function:e=>`${this.formatCasualTime(e.event.start_datetime,e.event.end_datetime).duration}`,label:"Duration",xOrientation:!0}},{width:12,dataPoint:{field:"event",xOrientation:!0}},{width:12,dataPoint:{field:"child",xOrientation:!0}},{width:12,dataPoint:{hideLabel:!0,field:"actions"}}]}]}}},computed:{superTableModel(){return k}},methods:{openRecord(e,f,i){i.push({name:"/lists/attendances/:rId/:rName",params:{rId:e,rName:e}})},formatCasualTime(e,f){const i=M(),n=M(e),a=M(f),s=n.format("HH:mm"),d=a.format("HH:mm"),u=n.format("ddd"),m=a.format("ddd"),h=n.format("MMM Do"),$=a.format("MMM Do"),g=n.year(),_=a.year(),p=a.diff(n,"minutes"),y=p/60,w=y/24,v=w/7;let c;if(p<60){const t=Math.round(p/30)*.5;c=`~${t} minute${t!==1?"s":""}`}else if(y<24){const t=Math.round(y*2)/2;c=`~${t} hour${t!==1?"s":""}`}else if(w<7){const t=Math.round(w*2)/2;c=`~${t} day${t!==1?"s":""}`}else{const t=Math.round(v*2)/2;c=`~${t} week${t!==1?"s":""}`}const D=n.isBefore(i.clone().add(6,"days"));let l="";n.isSame(a,"day")?l=n.isSame(i,"day")?`Today, ${s} - ${d}`:`${u}, ${s} - ${d}`:D?l=`${u}, ${s} - ${m}, ${d}`:n.isSame(a,"month")?l=`${h}, ${u}, ${s} - ${$}, ${m}, ${d}`:n.isSame(a,"year")?l=`${h}, ${u}, ${s} - ${$}, ${m}, ${_}, ${d}`:l=`${h}, ${u}, ${g}, ${s} - ${$}, ${m}, ${_}, ${d}`;const o=n.diff(i,"minutes"),b=a.diff(i,"minutes");let r="";if(b<0)r="Event has finished";else if(o<=0&&b>=0)r="Event is happening now";else if(o<60){const t=Math.round(o/30)*.5;r=`~${t} minute${t!==1?"s":""} from now`}else if(o<1440){const t=Math.round(o/60*2)/2;r=`~${t} hour${t!==1?"s":""} from now`}else if(o<10080){const t=Math.round(o/1440*2)/2;r=`~${t} day${t!==1?"s":""} from now`}else if(o<43800){const t=Math.round(o/10080*2)/2;r=`~${t} week${t!==1?"s":""} from now`}else{const t=Math.round(o/43800*2)/2;r=`~${t} month${t!==1?"s":""} from now`}return{range:l,duration:c,comingUpHint:r}}}};function L(e,f,i,n,a,s){const d=T("SuperTable");return x(),S(d,{showMap:!0,model:s.superTableModel,onClickRow:s.openRecord,displayMapField:!1,parentKeyValuePair:i.parentKeyValuePair,fetchFlags:i.fetchFlags,templateListGrid:a.templateListGrid,viewAs:{show:["grid","calendar"],default:"calendar"},allowedFilters:["child_id","school_id"]},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags","templateListGrid"])}const N=P(C,[["render",L],["__file","AttendanceList.vue"]]);export{N as a};
