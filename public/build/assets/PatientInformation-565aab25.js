import x from"./Modal-ca7a5398.js";import j from"./FormPatientDetails-7c62c261.js";import y from"./ConfirmDialog-d51195dc.js";import{p as v,T as b,o as i,f as l,b as t,t as n,g as k,a as r,w as _,F as L}from"./app-24a5834a.js";import"./helpers-41226ef1.js";import"./transition-6e04a2ba.js";import"./hidden-a9b7010e.js";import"./disposables-ed35e013.js";import"./FieldDatePicker-45a2d242.js";/* empty css                                                        */import"./FieldSelect-55e8073d.js";import"./FieldInput-e2601917.js";import"./Loader-f575573e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ExclamationTriangleIcon-3bee3b49.js";const V={class:"flex w-full flex-col space-y-1 bg-white px-6 py-4"},M={class:"flex justify-between"},$=t("button",{type:"button"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M11.25 11.25L11.291 11.23C11.4192 11.1659 11.5631 11.14 11.7057 11.1552C11.8482 11.1703 11.9834 11.2261 12.0952 11.3157C12.2071 11.4054 12.2909 11.5252 12.3368 11.661C12.3826 11.7968 12.3886 11.9429 12.354 12.082L11.646 14.918C11.6111 15.0572 11.6169 15.2034 11.6627 15.3394C11.7084 15.4754 11.7922 15.5954 11.9041 15.6852C12.016 15.775 12.1513 15.8308 12.294 15.846C12.4367 15.8612 12.5807 15.8352 12.709 15.771L12.75 15.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM12 8.25H12.008V8.258H12V8.25Z",stroke:"#FF0000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),B={class:"flex items-center space-x-10"},z={key:0,class:"flex space-x-1"},H=t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M14.7142 13.8808L11.1783 17.4167C11.0237 17.5715 10.8401 17.6942 10.638 17.778C10.4358 17.8618 10.2192 17.9049 10.0004 17.9049C9.78162 17.9049 9.56498 17.8618 9.36286 17.778C9.16075 17.6942 8.97713 17.5715 8.8225 17.4167L5.28583 13.8808C4.35352 12.9485 3.71861 11.7606 3.4614 10.4674C3.2042 9.17419 3.33624 7.83376 3.84083 6.61561C4.34543 5.39745 5.19991 4.35628 6.29623 3.62376C7.39255 2.89123 8.68147 2.50024 10 2.50024C11.3185 2.50024 12.6074 2.89123 13.7038 3.62376C14.8001 4.35628 15.6546 5.39745 16.1592 6.61561C16.6638 7.83376 16.7958 9.17419 16.5386 10.4674C16.2814 11.7606 15.6465 12.9485 14.7142 13.8808V13.8808Z",class:"stroke-gray-500","stroke-opacity":"0.6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M11.7678 10.9344C12.2366 10.4656 12.5 9.82971 12.5 9.16667C12.5 8.50363 12.2366 7.86774 11.7678 7.3989C11.2989 6.93006 10.663 6.66667 10 6.66667C9.33696 6.66667 8.70107 6.93006 8.23223 7.3989C7.76339 7.86774 7.5 8.50363 7.5 9.16667C7.5 9.82971 7.76339 10.4656 8.23223 10.9344C8.70107 11.4033 9.33696 11.6667 10 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9344Z",class:"stroke-gray-500","stroke-opacity":"0.6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Z={class:"truncate"},F={key:1,class:"flex space-x-2"},P=t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"relative top-0.5"},[t("path",{d:"M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z",class:"stroke-gray-500","stroke-opacity":"0.6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),D={class:"truncate tracking-wide"},N={class:"flex space-x-1"},S=t("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"relative top-0.5"},[t("path",{d:"M2.5 6.66667L9.075 11.05C9.34888 11.2327 9.67075 11.3302 10 11.3302C10.3292 11.3302 10.6511 11.2327 10.925 11.05L17.5 6.66667M4.16667 15.8333H15.8333C16.2754 15.8333 16.6993 15.6577 17.0118 15.3452C17.3244 15.0326 17.5 14.6087 17.5 14.1667V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V14.1667C2.5 14.6087 2.67559 15.0326 2.98816 15.3452C3.30072 15.6577 3.72464 15.8333 4.16667 15.8333Z",class:"stroke-gray-400","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),O={class:"truncate"},s1={__name:"PatientInformation",props:{patient:!0},setup(e){const h=e,s=v(!1),a=v(!1),w=b({_method:"delete"}),g=()=>{w.post(route("patients.delete",{id:h.patient.id}),{preserveState:!1,onSuccess:()=>{s.value=!1,a.value=!1}})};return(I,o)=>{var d,p,C,c,u,m,f;return i(),l(L,null,[t("div",V,[t("div",M,[t("button",{class:"text-2xl font-semibold",onClick:o[0]||(o[0]=E=>s.value=!0)},n(`${(d=e.patient)==null?void 0:d.first_name} ${(p=e.patient)==null?void 0:p.last_name}`),1),$]),t("div",B,[(C=e.patient)!=null&&C.address?(i(),l("div",z,[H,t("span",Z,n(`${(c=e.patient)==null?void 0:c.address}, ${((u=e.patient)==null?void 0:u.city)||""}`),1)])):k("",!0),(m=e.patient)!=null&&m.phone?(i(),l("div",F,[P,t("span",D,n(e.patient.phone),1)])):k("",!0),t("div",N,[S,t("span",O,n(((f=e.patient)==null?void 0:f.email)||"Nema"),1)])])]),r(x,{open:s.value,title:"Promeni podatke",subtitle:"Promeni podatke pacijenta u bazi podataka",type:"big",onClose:o[3]||(o[3]=()=>{s.value=!1})},{default:_(()=>[r(j,{patient:e.patient,edit:!0,onSuccess:o[1]||(o[1]=()=>s.value=!1),onDelete:o[2]||(o[2]=()=>{s.value=!1,a.value=!0})},null,8,["patient"])]),_:1},8,["open"]),r(y,{open:a.value,onConfirm:g,onCancel:o[4]||(o[4]=()=>{a.value=!1,s.value=!0}),title:"Izbriši pacijenta",subtitle:"Ovo je nepovratna akcija nakon koje će ovaj pacijent i svi podaci vezano za njega biti trajno uklonjeni iz baze podataka."},null,8,["open"])],64)}}};export{s1 as default};
