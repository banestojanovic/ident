import{T as q,p as G,o as m,f as d,a,u as t,b as F,g as u,n as L,c as O,e as R}from"./app-5981af89.js";import T from"./FieldDatePicker-4488533e.js";import H from"./FieldSelect-cc3e096f.js";import s from"./FieldInput-129ae97e.js";import J from"./Loader-0bf1f747.js";import"./_plugin-vue_export-helper-c27b6911.js";const K=["onSubmit"],Q={class:"flex items-end"},W={key:0},oe={__name:"FormPatientDetails",props:{patient:{type:Object,required:!1},edit:Boolean},emits:["success","delete"],setup(p,{emit:M}){var b,f,V,y,c,v,_,g;const l=p,e=q({_method:"put",first_name:((b=l.patient)==null?void 0:b.first_name)||null,last_name:((f=l.patient)==null?void 0:f.last_name)||null,email:((V=l.patient)==null?void 0:V.email)||null,phone:((y=l.patient)==null?void 0:y.phone)||null,address:((c=l.patient)==null?void 0:c.address)||null,city:((v=l.patient)==null?void 0:v.city)||null,dob:(_=l.patient)!=null&&_.dob?new Date(l.patient.dob):new Date,sms:(g=l.patient)==null?void 0:g.sms}),n=G(!1),P=()=>{var i;n.value=!0,e._method=l.edit?"put":"post",e.post(l.edit?route("patients.update",{id:(i=l.patient)==null?void 0:i.id}):route("patients.store"),{preserveScroll:!0,onSuccess:()=>{M("success")},onFinish:()=>{n.value=!1}})};return(i,r)=>{var x,j,k,U,w,S,B,D,$,N,z,C,I,h,A,E;return m(),d("form",{onSubmit:R(P,["prevent"]),class:"space-y-2"},[a(s,{modelValue:t(e).first_name,"onUpdate:modelValue":r[0]||(r[0]=o=>t(e).first_name=o),name:"first_name",label:"Ime",error:(j=(x=t(e))==null?void 0:x.errors)==null?void 0:j.first_name},null,8,["modelValue","error"]),a(s,{modelValue:t(e).last_name,"onUpdate:modelValue":r[1]||(r[1]=o=>t(e).last_name=o),name:"last_name",label:"Prezime",error:(U=(k=t(e))==null?void 0:k.errors)==null?void 0:U.last_name},null,8,["modelValue","error"]),a(s,{modelValue:t(e).phone,"onUpdate:modelValue":r[2]||(r[2]=o=>t(e).phone=o),name:"phone",label:"Broj telefona",error:(S=(w=t(e))==null?void 0:w.errors)==null?void 0:S.phone},null,8,["modelValue","error"]),a(s,{modelValue:t(e).email,"onUpdate:modelValue":r[3]||(r[3]=o=>t(e).email=o),name:"email",label:"Imejl adresa",error:(D=(B=t(e))==null?void 0:B.errors)==null?void 0:D.email},null,8,["modelValue","error"]),a(s,{modelValue:t(e).address,"onUpdate:modelValue":r[4]||(r[4]=o=>t(e).address=o),name:"address",label:"Address",error:(N=($=t(e))==null?void 0:$.errors)==null?void 0:N.address},null,8,["modelValue","error"]),a(s,{modelValue:t(e).city,"onUpdate:modelValue":r[5]||(r[5]=o=>t(e).city=o),name:"city",label:"Grad",error:(C=(z=t(e))==null?void 0:z.errors)==null?void 0:C.city},null,8,["modelValue","error"]),a(T,{modelValue:t(e).dob,"onUpdate:modelValue":r[6]||(r[6]=o=>t(e).dob=o),name:"dob",label:"Datum Rođenja",error:(h=(I=t(e))==null?void 0:I.errors)==null?void 0:h.dob},null,8,["modelValue","error"]),a(H,{modelValue:t(e).sms,"onUpdate:modelValue":r[7]||(r[7]=o=>t(e).sms=o),items:{0:"NE",1:"DA"},name:"sms",label:"SMS notifikacije",error:(E=(A=t(e))==null?void 0:A.errors)==null?void 0:E.sms},null,8,["modelValue","error"]),F("div",Q,[p.edit?(m(),d("button",{key:0,type:"button",onClick:r[8]||(r[8]=o=>i.$emit("delete")),class:"mr-auto text-red-500 hover:underline"},"Izbriši pacijenta")):u("",!0),F("button",{type:"submit",class:L([n.value?"opacity-25":"","focus-visible:ring-ring border-input ml-auto mt-4 inline-flex items-center justify-center rounded-md border bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"])},[n.value?u("",!0):(m(),d("span",W,"Sačuvaj")),n.value?(m(),O(J,{key:1,class:"w-[56px]"})):u("",!0)],2)])],40,K)}}};export{oe as default};
