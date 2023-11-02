import{T as M,p as D,o as a,f as l,a as m,u as o,b as n,g as d,n as S,t as B,c as $,e as z}from"./app-164847fe.js";/* empty css                                                        */import O from"./FieldSelectObject-7c7e5923.js";import _ from"./FieldTextarea-96609f40.js";import H from"./Loader-3b1f2cf3.js";import"./ChevronUpDownIcon-a9d4d143.js";import"./listbox-bbb56993.js";import"./hidden-6e550821.js";import"./use-tracked-pointer-138e0f0a.js";import"./_plugin-vue_export-helper-c27b6911.js";const N=["onSubmit"],U={class:"mt-2 flex flex-col-reverse items-end sm:col-span-2 sm:flex-row"},E=n("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M12.5 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z",stroke:"#E24D4D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),F=n("span",null,"Izbriši karton",-1),Z=[E,F],I={key:0,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L=n("path",{d:"M10 7.5V10M10 10V12.5M10 10H12.5M10 10H7.5M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z",class:"stroke-current","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),P=[L],R={key:1},ee={__name:"FormPatientRecord",props:{patient:Object,edit:Object,tooth:String},emits:["success","delete"],setup(u,{emit:V}){var p,c,f,h,b,C;const t=u,e=M({patient_id:t.patient.id,record:((p=t==null?void 0:t.edit)==null?void 0:p.id)||null,date:(c=t.edit)!=null&&c.date?new Date((f=t.edit)==null?void 0:f.date):new Date,tooth:t.tooth,diagnosis:((h=t.edit)==null?void 0:h.diagnosis)||null,therapy:((b=t.edit)==null?void 0:b.therapy)||null,description:((C=t.edit)==null?void 0:C.description)||null}),r=D(!1),j=()=>{r.value=!0,e.post(route(t.edit?"records.update":"records.store"),{preserveScroll:!0,onSuccess:()=>{V("success")},onFinish:()=>{r.value=!1}})};return(g,s)=>{var v,w,x,y,k;return a(),l("form",{onSubmit:z(j,["prevent"]),class:"flex flex-col space-y-2"},[m(_,{modelValue:o(e).diagnosis,"onUpdate:modelValue":s[0]||(s[0]=i=>o(e).diagnosis=i),name:"diagnosis",label:"Dijagnoza",error:(w=(v=o(e))==null?void 0:v.errors)==null?void 0:w.diagnosis},null,8,["modelValue","error"]),m(O,{modelValue:o(e).therapy,"onUpdate:modelValue":s[1]||(s[1]=i=>o(e).therapy=i),value:o(e).therapy,items:g.$page.props.global.therapies,name:"therapy",label:"Odaberi terapiju",error:(x=o(e))==null?void 0:x.errors.therapy},null,8,["modelValue","value","items","error"]),m(_,{modelValue:o(e).description,"onUpdate:modelValue":s[2]||(s[2]=i=>o(e).description=i),name:"description",label:"Opis terapije",error:(k=(y=o(e))==null?void 0:y.errors)==null?void 0:k.description,class:"sm:col-span-2"},null,8,["modelValue","error"]),n("div",U,[u.edit?(a(),l("button",{key:0,type:"button",onClick:s[3]||(s[3]=i=>g.$emit("delete",{id:o(e).record})),class:"flex items-center space-x-1 text-red-500 hover:underline sm:mr-auto"},Z)):d("",!0),n("button",{type:"submit",class:S([r.value?"opacity-25":"","focus-visible:ring-ring border-input mb-4 ml-auto inline-flex w-full items-center justify-center space-x-2 rounded bg-emerald-100 px-6 py-2 text-base text-emerald-700 transition-colors hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:mb-0 sm:mt-4 sm:w-[200px]"])},[r.value?d("",!0):(a(),l("svg",I,P)),r.value?d("",!0):(a(),l("span",R,B(u.edit?"Sačuvaj izmene":"Dodaj karton"),1)),r.value?(a(),$(H,{key:2,class:"w-[56px]"})):d("",!0)],2)])],40,N)}}};export{ee as default};