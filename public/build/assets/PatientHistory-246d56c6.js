import j from"./Modal-240b5ca3.js";import{d as M}from"./helpers-41226ef1.js";import D from"./FormPatientRecord-402740a7.js";import V from"./ConfirmDialog-ec5312c9.js";import{p as o,I as z,T as H,o as r,f as u,b as t,F as _,D as O,a as v,w as B,G as F,n as I,t as l,u as R}from"./app-9601133b.js";import"./transition-366d9058.js";import"./hidden-fe5360a8.js";import"./disposables-ed35e013.js";import"./FieldDatePicker-2bb2d62d.js";import"./FieldSelect-f93d25c9.js";import"./FieldInput-3586bd95.js";import"./FieldSelectObject-d6d7a237.js";import"./use-tracked-pointer-5f2c420a.js";import"./listbox-60291845.js";import"./FieldTextarea-78a9cac4.js";import"./Loader-163abc70.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ExclamationTriangleIcon-bf758f00.js";const S={class:"col-span-9 overflow-hidden rounded-b-lg mt-0.5"},L=F('<div class="flex min-w-0 flex-1 bg-stone-50 mb-0.5 px-4 py-2 sm:px-6"><div class="min-w-0 flex-1 md:grid md:grid-cols-5 md:gap-4"><div class="text-xs font-light uppercase text-gray-500">Datum dolaska</div><div class="hidden text-xs font-light uppercase text-gray-500 md:block">Zub</div><div class="hidden text-xs font-light uppercase text-gray-500 md:block">Dijagnoza</div><div class="hidden text-xs font-light uppercase text-gray-500 md:block">Terapija</div><div class="hidden text-xs font-light uppercase text-gray-500 md:block">Opis</div></div><div class="mr-28 text-xs font-light uppercase text-gray-500">Akcija</div></div>',1),N={role:"list",class:"divide-y divide-gray-200 bg-white overflow-y-auto max-h-[540px]"},$={class:"flex items-center space-x-2 mt-2 sm:mt-0"},T=t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5Z",stroke:"black","stroke-opacity":"0.4","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Z={class:"truncate text-base"},E={class:"mt-2 sm:mt-0"},G={class:"text-base text-gray-900"},A={class:"mt-2 sm:mt-0"},P={class:"text-base text-gray-900"},U={class:"mt-2 lg:mt-0"},q={class:"text-base text-gray-900"},J={class:"mt-2 lg:mt-0"},K={class:"text-base text-gray-900"},Q={class:"mt-2 text-base font-medium lg:mt-0 lg:text-right"},W=["onClick"],X=t("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M8.25 3.75H4.5C4.10218 3.75 3.72064 3.90803 3.43934 4.18934C3.15804 4.47064 3 4.85217 3 5.25V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H12.75C13.1478 15 13.5294 14.842 13.8107 14.5607C14.092 14.2794 14.25 13.8978 14.25 13.5V9.75M13.1895 2.6895C13.3279 2.54623 13.4934 2.43196 13.6764 2.35335C13.8594 2.27473 14.0562 2.23335 14.2554 2.23162C14.4546 2.22989 14.6521 2.26785 14.8364 2.34327C15.0208 2.41869 15.1883 2.53007 15.3291 2.67091C15.4699 2.81175 15.5813 2.97922 15.6567 3.16357C15.7322 3.34791 15.7701 3.54543 15.7684 3.7446C15.7666 3.94377 15.7253 4.1406 15.6467 4.32361C15.568 4.50661 15.4538 4.67213 15.3105 4.8105L8.871 11.25H6.75V9.129L13.1895 2.6895Z",stroke:"#737373","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Y=t("span",{class:"text-sm"},"Izmeni",-1),tt=[X,Y],_t={__name:"PatientHistory",props:{patient:!0,modalOpen:!1},emits:["closeModal","openModal"],setup(d,{emit:g}){const h=o(!1),s=o(null),p=o(null),m=o(!1),n=o(!1),c=o(!1);z();const k=()=>{c.value=!0,s.value=null,setTimeout(()=>{c.value=!1},3e3)},C=a=>{g("openModal"),s.value=a},b=H({_method:"delete"}),y=()=>{var a;h.value=!0,b.post(route("records.delete",{id:(a=p.value)==null?void 0:a.id}),{onFinish:()=>{g("closeModal"),n.value=!1,h.value=!1}})};return(a,i)=>{var x;return r(),u(_,null,[t("div",S,[L,t("ul",N,[(r(!0),u(_,null,O((x=d.patient)==null?void 0:x.records,(e,w)=>{var f;return r(),u("li",{key:e.id,class:"py-2"},[t("div",{class:I([c.value&&w===0?"bg-gray-100":"","grid grid-cols-1 px-4 py-4 transition-all sm:grid-cols-3 sm:px-6 lg:grid-cols-6"])},[t("div",$,[T,t("p",Z,l(new Date(e==null?void 0:e.date).toLocaleDateString(R(M).locale)),1)]),t("div",E,[t("p",G,l(e==null?void 0:e.tooth),1)]),t("div",A,[t("div",P,l(e==null?void 0:e.diagnosis),1)]),t("div",U,[t("div",q,l((f=e==null?void 0:e.therapy)==null?void 0:f.name),1)]),t("div",J,[t("div",K,l(e==null?void 0:e.description),1)]),t("div",Q,[t("button",{type:"button",class:"flex items-center space-x-2 text-gray-500 hover:underline",onClick:()=>C(e)},tt,8,W)])],2)])}),128))])]),v(j,{open:d.modalOpen,title:s.value?"Izmeni karton":"Dodaj karton",subtitle:s.value?"Uredi podatke kartona pacijenta":"Dodaj novi karton za pacijenta",onClose:i[1]||(i[1]=()=>{a.$emit("closeModal"),m.value=!1,s.value=null})},{default:B(()=>[v(D,{patient:d.patient,edit:s.value,onSuccess:k,onDelete:i[0]||(i[0]=e=>{m.value=!1,n.value=!0,p.value=e})},null,8,["patient","edit"])]),_:1},8,["open","title","subtitle"]),v(V,{open:n.value,onConfirm:y,onCancel:i[2]||(i[2]=()=>{n.value=!1,m.value=!0,p.value=!1}),title:"Izbriši karton",subtitle:"Ovo je nepovratna akcija nakon koje će ovaj karton biti trajno uklonjen iz baze podataka."},null,8,["open"])],64)}}};export{_t as default};
