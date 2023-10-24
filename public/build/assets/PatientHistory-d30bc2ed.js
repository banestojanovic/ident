import z from"./Modal-ceddff86.js";import{d as h}from"./helpers-41226ef1.js";import R from"./FormPatientRecord-b6630d2d.js";import F from"./ConfirmDialog-2188afee.js";import{p as a,I,T as O,o as r,f as p,b as e,F as b,E as S,a as v,w as $,n as B,t as n,u as x}from"./app-875610e1.js";import"./transition-855629b1.js";import"./hidden-27aa5c29.js";import"./disposables-ed35e013.js";import"./XMarkIcon-4ee17412.js";import"./FieldDatePicker-4cdc2abd.js";import"./FieldSelect-fd0c182f.js";import"./FieldInput-f9ebd0b5.js";import"./FieldSelectObject-07b99760.js";import"./use-tracked-pointer-dd255a43.js";import"./listbox-75348dce.js";import"./FieldTextarea-ae7c4d88.js";import"./Loader-d7b84ca2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ExclamationTriangleIcon-6d03cc44.js";const E={class:"overflow-hidden bg-white shadow sm:rounded-md"},N={class:"flex items-center justify-between border-b p-4"},L=e("h3",{class:"text-xl font-semibold"},"Karton",-1),T={role:"list",class:"divide-y divide-gray-200 overflow-y-auto max-h-[540px]"},V={class:"mt-2 sm:mt-0"},G={class:"truncate text-lg font-medium"},H={class:"mt-2 sm:mt-0"},K={class:"text-lg text-gray-900"},M={class:"mt-2 sm:mt-0"},P={class:"text-lg text-gray-500"},U={class:"mt-2 lg:mt-0"},q={class:"text-lg text-gray-500"},A={class:"mt-2 lg:mt-0"},J={class:"text-lg text-gray-500"},Q={class:"mt-2 text-lg font-medium lg:mt-0 lg:text-right"},W=["onClick"],gt={__name:"PatientHistory",props:{patient:!0},setup(c){const f=a(!1),i=a(null),u=a(null),s=a(!1),d=a(!1),m=a(!1);I();const y=()=>{s.value=!0},k=()=>{s.value=!1,m.value=!0,i.value=null,setTimeout(()=>{m.value=!1},3e3)},j=l=>{s.value=!0,i.value=l},w=O({_method:"delete"}),D=()=>{var l;f.value=!0,w.post(route("records.delete",{id:(l=u.value)==null?void 0:l.id}),{onFinish:()=>{s.value=!1,d.value=!1,f.value=!1}})};return(l,o)=>{var g;return r(),p(b,null,[e("div",E,[e("div",N,[L,e("button",{type:"button",class:"focus-visible:ring-ring border-input inline-flex items-center justify-center rounded-md border bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",onClick:o[0]||(o[0]=t=>y())}," Dodaj karton ")]),e("ul",T,[(r(!0),p(b,null,S((g=c.patient)==null?void 0:g.records,(t,C)=>{var _;return r(),p("li",{key:t.id},[e("div",{class:B([m.value&&C===0?"bg-gray-100":"","grid grid-cols-1 px-4 py-4 transition-all sm:grid-cols-3 sm:px-6 lg:grid-cols-6"])},[e("div",V,[e("p",G,n(new Date(t==null?void 0:t.date).toLocaleDateString(x(h).locale,x(h).options)),1)]),e("div",H,[e("p",K,n(t==null?void 0:t.tooth),1)]),e("div",M,[e("div",P,n(t==null?void 0:t.diagnosis),1)]),e("div",U,[e("div",q,n((_=t==null?void 0:t.therapy)==null?void 0:_.name),1)]),e("div",A,[e("div",J,n(t==null?void 0:t.description),1)]),e("div",Q,[e("button",{type:"button",class:"text-indigo-600 hover:underline",onClick:()=>j(t)},"Izmeni",8,W)])],2)])}),128))])]),v(z,{open:s.value,title:i.value?"Izmeni karton":"Dodaj karton",subtitle:i.value?"Uredi podatke kartona pacijenta":"Dodaj novi karton za pacijenta",onClose:o[2]||(o[2]=()=>{s.value=!1,i.value=null})},{default:$(()=>[v(R,{patient:c.patient,edit:i.value,onSuccess:k,onDelete:o[1]||(o[1]=t=>{s.value=!1,d.value=!0,u.value=t})},null,8,["patient","edit"])]),_:1},8,["open","title","subtitle"]),v(F,{open:d.value,onConfirm:D,onCancel:o[3]||(o[3]=()=>{d.value=!1,s.value=!0,u.value=!1}),title:"Izbrišite karton",subtitle:"Ovo je nepovratna akcija nakon koje će ovaj karton biti trajno uklonjen iz baze podataka."},null,8,["open"])],64)}}};export{gt as default};
