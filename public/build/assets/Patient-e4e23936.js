import{_ as l}from"./AuthenticatedLayout-13033a26.js";import{p,H as d,o as m,f as c,a as e,u,w as s,F as f,Z as h,b as t}from"./app-3638133d.js";import g from"./PatientHistory-b5008005.js";import _ from"./PatientInformation-a5ea2326.js";import v from"./PatientPhotos-eb7b09f5.js";import"./Tabs-201a0a96.js";import"./Notifications-460ac582.js";import"./ExclamationTriangleIcon-2d509c84.js";import"./ApplicationLogo-7014b452.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-39211e97.js";import"./helpers-41226ef1.js";import"./transition-dc508d01.js";import"./hidden-65760a93.js";import"./disposables-ed35e013.js";import"./FormPatientRecord-c9f35226.js";import"./FieldDatePicker-0a6714bc.js";import"./FieldSelect-4bcd8669.js";import"./FieldInput-14635b5c.js";import"./FieldSelectObject-37be9212.js";import"./use-tracked-pointer-8adbbde2.js";import"./listbox-01f2ae26.js";import"./FieldTextarea-b9417b09.js";import"./Loader-3264363d.js";import"./ConfirmDialog-63f22d9d.js";import"./FormPatientDetails-cb90cd06.js";import"./FormPatientPhoto-e647a667.js";import"./FieldPhoto-b37301db.js";const x={class:"flex flex-col"},w={class:"flex items-center justify-between rounded-tr-lg bg-white px-8 py-4"},b=t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M3 12H21M7 16L3 12L7 16ZM3 12L7 8L3 12Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),C=t("span",null,"Vrati se nazad",-1),k={class:"flex items-center space-x-4"},M=t("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M8.24992 11H13.7499M8.24992 14.6667H13.7499M15.5833 19.25H6.41659C5.93035 19.25 5.46404 19.0568 5.12022 18.713C4.77641 18.3692 4.58325 17.9029 4.58325 17.4167V4.58333C4.58325 4.0971 4.77641 3.63079 5.12022 3.28697C5.46404 2.94315 5.93035 2.75 6.41659 2.75H11.5371C11.7802 2.75005 12.0133 2.84666 12.1852 3.01858L17.148 7.98142C17.3199 8.15328 17.4165 8.3864 17.4166 8.6295V17.4167C17.4166 17.9029 17.2234 18.3692 16.8796 18.713C16.5358 19.0568 16.0695 19.25 15.5833 19.25Z",stroke:"#A960A5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),y=t("span",null,"Dodaj karton",-1),H=[M,y],V=t("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M7.33333 6.41667V2.75M14.6667 6.41667V2.75M6.41667 10.0833H15.5833M4.58333 19.25H17.4167C17.9029 19.25 18.3692 19.0568 18.713 18.713C19.0568 18.3692 19.25 17.9029 19.25 17.4167V6.41667C19.25 5.93044 19.0568 5.46412 18.713 5.1203C18.3692 4.77649 17.9029 4.58333 17.4167 4.58333H4.58333C4.0971 4.58333 3.63079 4.77649 3.28697 5.1203C2.94315 5.46412 2.75 5.93044 2.75 6.41667V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25Z",stroke:"#3E8C41","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),j=t("span",null,"Zakaži termin",-1),B={class:"grid grid-cols-12 gap-0.5 w-full"},nt={__name:"Patient",props:{patient:!0},setup(n){const o=p(!1);return(r,i)=>{const a=d("inertia-link");return m(),c(f,null,[e(u(h),{title:"Pacijent"}),e(l,{type:"patient"},{default:s(()=>[t("div",x,[t("div",w,[e(a,{href:r.route("patients.index"),class:"group flex items-center space-x-1 text-gray-900 hover:text-gray-800"},{default:s(()=>[b,C]),_:1},8,["href"]),t("div",k,[t("button",{type:"button",class:"focus-visible:ring-ring inline-flex items-center justify-center space-x-2 rounded-md bg-fuchsia-100 px-8 py-3 text-base text-fuchsia-700 transition-colors hover:bg-fuchsia-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",onClick:i[0]||(i[0]=()=>o.value=!0)},H),e(a,{href:r.route("calendar.show"),class:"focus-visible:ring-ring inline-flex items-center justify-center space-x-2 rounded-md bg-green-100 px-8 py-3 text-base text-green-700 transition-colors hover:bg-green-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"},{default:s(()=>[V,j]),_:1},8,["href"])])]),e(_,{patient:n.patient},null,8,["patient"]),t("div",B,[e(g,{patient:n.patient,modalOpen:o.value,onCloseModal:i[1]||(i[1]=()=>o.value=!1),onOpenModal:i[2]||(i[2]=()=>o.value=!0)},null,8,["patient","modalOpen"]),e(v,{patient:n.patient},null,8,["patient"])])])]),_:1})],64)}}};export{nt as default};