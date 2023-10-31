import{T as B,p as S,o as l,f as d,a as n,u as t,b as a,g as m,n as U,t as I,c as F,e as H}from"./app-a0fca2ef.js";import N from"./FieldDatePicker-96645167.js";import E from"./FieldSelect-62ac136a.js";import O from"./FieldInput-504722e7.js";import Z from"./FieldSelectObject-58d7b856.js";import L from"./FieldTextarea-82ab3bdb.js";import P from"./Loader-3da54d90.js";import"./ChevronUpDownIcon-853add13.js";import"./listbox-1841cf9e.js";import"./hidden-bc5cc27c.js";import"./use-tracked-pointer-e432de53.js";import"./_plugin-vue_export-helper-c27b6911.js";const R=["onSubmit"],T={class:"mt-2 flex flex-col-reverse items-end sm:col-span-2 sm:flex-row"},q=a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M12.5 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z",stroke:"#E24D4D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),A=a("span",null,"Izbriši karton",-1),G=[q,A],J={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=a("path",{d:"M10 7.5V10M10 10V12.5M10 10H12.5M10 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Q=[K],W={key:1},me={__name:"FormPatientRecord",props:{patient:Object,edit:Object},emits:["success","delete"],setup(u,{emit:D}){var c,f,b,h,v,g,C;const r=u,e=B({patient_id:r.patient.id,record:((c=r==null?void 0:r.edit)==null?void 0:c.id)||null,date:(f=r.edit)!=null&&f.date?new Date((b=r.edit)==null?void 0:b.date):new Date,tooth:((h=r.edit)==null?void 0:h.tooth)||null,diagnosis:((v=r.edit)==null?void 0:v.diagnosis)||null,therapy:((g=r.edit)==null?void 0:g.therapy)||null,description:((C=r.edit)==null?void 0:C.description)||null}),i=S(!1),M=()=>{i.value=!0,e.post(route(r.edit?"records.update":"records.store"),{preserveScroll:!0,onSuccess:()=>{D("success")},onFinish:()=>{i.value=!1}})};return(p,o)=>{var w,x,V,y,k,_,j,$,z;return l(),d("form",{onSubmit:H(M,["prevent"]),class:"flex flex-col space-y-2"},[n(N,{modelValue:t(e).date,"onUpdate:modelValue":o[0]||(o[0]=s=>t(e).date=s),value:t(e).date,name:"date",label:"Izaberi datum",error:(x=(w=t(e))==null?void 0:w.errors)==null?void 0:x.date},null,8,["modelValue","value","error"]),n(E,{modelValue:t(e).tooth,"onUpdate:modelValue":o[1]||(o[1]=s=>t(e).tooth=s),items:p.$page.props.global.teeth,name:"tooth",label:"Izaberi zub (FDI)",error:(y=(V=t(e))==null?void 0:V.errors)==null?void 0:y.tooth},null,8,["modelValue","items","error"]),n(O,{modelValue:t(e).diagnosis,"onUpdate:modelValue":o[2]||(o[2]=s=>t(e).diagnosis=s),name:"diagnosis",label:"Upiši dijagnozu",error:(_=(k=t(e))==null?void 0:k.errors)==null?void 0:_.diagnosis},null,8,["modelValue","error"]),n(Z,{modelValue:t(e).therapy,"onUpdate:modelValue":o[3]||(o[3]=s=>t(e).therapy=s),value:t(e).therapy,items:p.$page.props.global.therapies,name:"therapy",label:"Izaberi terapiju",error:(j=t(e))==null?void 0:j.errors.therapy},null,8,["modelValue","value","items","error"]),n(L,{modelValue:t(e).description,"onUpdate:modelValue":o[4]||(o[4]=s=>t(e).description=s),name:"description",label:"Dodatne informacije",error:(z=($=t(e))==null?void 0:$.errors)==null?void 0:z.description,class:"sm:col-span-2"},null,8,["modelValue","error"]),a("div",T,[u.edit?(l(),d("button",{key:0,type:"button",onClick:o[5]||(o[5]=s=>p.$emit("delete",{id:t(e).record})),class:"flex items-center space-x-1 text-red-500 hover:underline sm:mr-auto"},G)):m("",!0),a("button",{type:"submit",class:U([i.value?"opacity-25":"","focus-visible:ring-ring border-input mb-4 ml-auto inline-flex w-full items-center justify-center space-x-2 rounded-xl border bg-emerald-600 px-6 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:mb-0 sm:mt-4 sm:w-[200px]"])},[i.value?m("",!0):(l(),d("svg",J,Q)),i.value?m("",!0):(l(),d("span",W,I(u.edit?"Sačuvaj izmene":"Dodaj karton"),1)),i.value?(l(),F(P,{key:2,class:"w-[56px]"})):m("",!0)],2)])],40,R)}}};export{me as default};
