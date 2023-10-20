import{T as B,p as D,o as l,f as d,a as s,u as t,b as _,g as u,n as C,c as F,e as N}from"./app-5981af89.js";import O from"./FieldDatePicker-4488533e.js";import E from"./FieldSelect-cc3e096f.js";import L from"./FieldInput-129ae97e.js";import M from"./FieldSelectObject-0b0cb9af.js";import P from"./FieldTextarea-8e247563.js";import R from"./Loader-0bf1f747.js";import"./hidden-bfafab5c.js";import"./ChevronUpDownIcon-4a4f0b1e.js";import"./_plugin-vue_export-helper-c27b6911.js";const T=["onSubmit"],q={class:"flex items-end"},A={key:0},te={__name:"FormPatientRecord",props:{patient:Object,edit:Object},emits:["success","delete"],setup(m,{emit:I}){var p,c,b,f,v,g,y;const r=m,e=B({patient_id:r.patient.id,record:((p=r==null?void 0:r.edit)==null?void 0:p.id)||null,date:(c=r.edit)!=null&&c.date?new Date((b=r.edit)==null?void 0:b.date):new Date,tooth:((f=r.edit)==null?void 0:f.tooth)||null,diagnosis:((v=r.edit)==null?void 0:v.diagnosis)||null,therapy:((g=r.edit)==null?void 0:g.therapy)||null,description:((y=r.edit)==null?void 0:y.description)||null}),i=D(!1),S=()=>{i.value=!0,e.post(route(r.edit?"records.update":"records.store"),{preserveScroll:!0,onSuccess:()=>{I("success")},onFinish:()=>{i.value=!1}})};return(n,o)=>{var V,h,$,k,j,w,x,z,U;return l(),d("form",{onSubmit:N(S,["prevent"]),class:"space-y-2"},[s(O,{modelValue:t(e).date,"onUpdate:modelValue":o[0]||(o[0]=a=>t(e).date=a),value:t(e).date,name:"date",label:"Izaberi datum",error:(h=(V=t(e))==null?void 0:V.errors)==null?void 0:h.date},null,8,["modelValue","value","error"]),s(E,{modelValue:t(e).tooth,"onUpdate:modelValue":o[1]||(o[1]=a=>t(e).tooth=a),items:n.$page.props.global.teeth,name:"tooth",label:"Izaberi zub (FDI)",error:(k=($=t(e))==null?void 0:$.errors)==null?void 0:k.tooth},null,8,["modelValue","items","error"]),s(L,{modelValue:t(e).diagnosis,"onUpdate:modelValue":o[2]||(o[2]=a=>t(e).diagnosis=a),name:"diagnosis",label:"Upiši dijagnozu",error:(w=(j=t(e))==null?void 0:j.errors)==null?void 0:w.diagnosis},null,8,["modelValue","error"]),s(M,{modelValue:t(e).therapy,"onUpdate:modelValue":o[3]||(o[3]=a=>t(e).therapy=a),value:t(e).therapy,items:n.$page.props.global.therapies,name:"therapy",label:"Izaberi terapiju",error:(x=t(e))==null?void 0:x.errors.therapy},null,8,["modelValue","value","items","error"]),s(P,{modelValue:t(e).description,"onUpdate:modelValue":o[4]||(o[4]=a=>t(e).description=a),name:"description",label:"Dodatne informacije",error:(U=(z=t(e))==null?void 0:z.errors)==null?void 0:U.description},null,8,["modelValue","error"]),_("div",q,[m.edit?(l(),d("button",{key:0,type:"button",onClick:o[5]||(o[5]=a=>n.$emit("delete",{id:t(e).record})),class:"mr-auto text-red-500 hover:underline"},"Izbriši karton")):u("",!0),_("button",{type:"submit",class:C([i.value?"opacity-25":"","focus-visible:ring-ring border-input ml-auto mt-4 inline-flex items-center justify-center rounded-md border bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"])},[i.value?u("",!0):(l(),d("span",A,"Sačuvaj")),i.value?(l(),F(R,{key:1,class:"w-[56px]"})):u("",!0)],2)])],40,T)}}};export{te as default};
