import{T as q,K as $,p as m,o as n,f as i,a as p,u as a,c as C,g as l,b as f,n as O,t as F,e as D}from"./app-a0fca2ef.js";import E from"./Loader-3da54d90.js";import K from"./FieldCombobox-6c6afa13.js";import b from"./FieldInput-504722e7.js";import L from"./FieldSelectDentists-a280dc24.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-012e1fc9.js";import"./LoaderSmall-5496e833.js";import"./combobox-bd092deb.js";import"./hidden-bc5cc27c.js";import"./use-tracked-pointer-e432de53.js";import"./disposables-ed35e013.js";import"./ChevronUpDownIcon-853add13.js";import"./listbox-1841cf9e.js";const M=["onSubmit"],T={key:3,class:"border-t pt-2"},Z=f("h5",{class:"font-semibold"},"Novi pacijent",-1),A={class:"flex items-end"},G={key:0},se={__name:"FormBooking",props:{selectedPatient:{type:Object,required:!1},date:Object,data:{type:Object,required:!1},edit:{type:Boolean,required:!1}},emits:["success","delete"],setup(c,{emit:U}){var v,_,y,V,k,g,j,x;const r=c,e=q({date:((v=r.date)==null?void 0:v.date)||null,dentist_id:((_=r==null?void 0:r.data)==null?void 0:_.dentist_id)||(((k=(V=(y=$())==null?void 0:y.props.auth)==null?void 0:V.user)==null?void 0:k.role)===2?(j=(g=$())==null?void 0:g.props.auth)==null?void 0:j.user:0),patient_id:((x=r==null?void 0:r.data)==null?void 0:x.patient_id)||null,new_patient:!1,first_name:null,last_name:null,phone:null}),u=m(!1),I=m(r.selectedPatient||null),s=m(!1),d=m({}),N=()=>{u.value=!0,e.post(route("appointments.store"),{preserveScroll:!0,onSuccess:()=>{U("success")},onFinish:()=>{u.value=!1}})};return(w,t)=>{var h,z,B,P,S;return n(),i("form",{onSubmit:D(N,["prevent"]),class:"space-y-2"},[p(L,{modelValue:a(e).dentist_id,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).dentist_id=o),type:"dentist",items:w.$page.props.global.dentists.data,name:"dentist_id",label:"Izaberite doktora",error:(h=a(e).errors)==null?void 0:h.dentist_id},null,8,["modelValue","items","error"]),s.value?l("",!0):(n(),C(K,{key:0,modelValue:a(e).patient_id,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).patient_id=o),items:I.value,name:"patient_id",label:"Izaberite pacijenta",error:(z=a(e).errors)==null?void 0:z.patient_id,onSearched:t[2]||(t[2]=o=>d.value=o)},null,8,["modelValue","items","error"])),d.value.length<1&&!s.value?(n(),i("button",{key:1,type:"button",class:"text-red-500 underline",onClick:t[3]||(t[3]=()=>{a(e).new_patient=!0,s.value=!0})}," Pacijent ne postoji u bazi? ")):l("",!0),d.value.length<1&&s.value?(n(),i("button",{key:2,type:"button",class:"pb-2 text-red-500 underline",onClick:t[4]||(t[4]=()=>{a(e).new_patient=!1,s.value=!1})}," Ponovo pokušaj pretragu? ")):l("",!0),d.value.length<1&&s.value?(n(),i("div",T,[Z,p(b,{modelValue:a(e).first_name,"onUpdate:modelValue":t[5]||(t[5]=o=>a(e).first_name=o),name:"first_name",label:"Ime pacijenta",error:(B=a(e).errors)==null?void 0:B.first_name},null,8,["modelValue","error"]),p(b,{modelValue:a(e).last_name,"onUpdate:modelValue":t[6]||(t[6]=o=>a(e).last_name=o),name:"last_name",label:"Prezime pacijenta",error:(P=a(e).errors)==null?void 0:P.last_name},null,8,["modelValue","error"]),p(b,{modelValue:a(e).phone,"onUpdate:modelValue":t[7]||(t[7]=o=>a(e).phone=o),name:"phone",label:"Broj telefona pacijenta",error:(S=a(e).errors)==null?void 0:S.phone},null,8,["modelValue","error"])])):l("",!0),f("div",A,[c.edit?(n(),i("button",{key:0,type:"button",onClick:t[8]||(t[8]=o=>w.$emit("delete",{id:a(e).record})),class:"mr-auto text-red-500 hover:underline"},"Izbriši zakazano")):l("",!0),f("button",{type:"submit",class:O([u.value?"opacity-25":"","focus-visible:ring-ring border-input mb-4 ml-auto inline-flex w-full items-center justify-center space-x-2 rounded-xl border bg-emerald-600 px-6 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 sm:mb-0 sm:mt-4 sm:w-[200px]"])},[u.value?l("",!0):(n(),i("span",G,F("Zakaži"))),u.value?(n(),C(E,{key:1,class:"w-[56px]"})):l("",!0)],2)])],40,M)}}};export{se as default};
