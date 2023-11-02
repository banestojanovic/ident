import{h as C,i as f,v as _,o as c,f as p,T as h,c as k,w as u,a,u as s,Z as b,t as w,g as v,b as t,d as g,n as x,e as y}from"./app-164847fe.js";import{_ as V}from"./GuestLayout-4ffec25a.js";import{_ as M,a as B,b as $}from"./TextInput-f22074ba.js";import{P}from"./PrimaryButton-83a3b07c.js";import j from"./FieldSelectDentists-0a30a1f7.js";import"./ApplicationLogo-e189db9d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./listbox-bbb56993.js";import"./hidden-6e550821.js";import"./use-tracked-pointer-138e0f0a.js";import"./ChevronUpDownIcon-a9d4d143.js";const H=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(r,{emit:e}){const m=r,n=C({get(){return m.checked},set(o){e("update:checked",o)}});return(o,l)=>f((c(),p("input",{type:"checkbox",value:r.value,"onUpdate:modelValue":l[0]||(l[0]=d=>n.value=d),class:"rounded border-gray-300 dark:border-gray-700 text-sky-600 shadow-sm focus:ring-sky-500"},null,8,H)),[[_,n.value]])}},z=t("h1",{class:"mb-4 flex items-center space-x-2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H14M10 6V5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V6M10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6M9 14C9.53043 14 10.0391 13.7893 10.4142 13.4142C10.7893 13.0391 11 12.5304 11 12C11 11.4696 10.7893 10.9609 10.4142 10.5858C10.0391 10.2107 9.53043 10 9 10C8.46957 10 7.96086 10.2107 7.58579 10.5858C7.21071 10.9609 7 11.4696 7 12C7 12.5304 7.21071 13.0391 7.58579 13.4142C7.96086 13.7893 8.46957 14 9 14ZM9 14C10.306 14 11.417 14.835 11.83 16M9 14C8.37938 13.9998 7.77397 14.1921 7.26715 14.5502C6.76032 14.9084 6.37701 15.4149 6.17 16M15 11H18M15 15H17",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),t("span",{class:"text-xl font-medium"},"Prijavite se")],-1),N={key:0,class:"mb-4 text-sm font-medium text-green-600"},S=["onSubmit"],Z={class:"mt-4"},q={class:"mt-6 block"},D={class:"flex items-center"},T=t("span",{class:"ml-2 text-sm text-gray-600"},"Zapamti me",-1),A={class:"mt-4 flex items-center justify-end"},X={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(r){const e=h({id:null,password:"",remember:!1}),m=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,o)=>(c(),k(V,null,{default:u(()=>{var l,d;return[a(s(b),{title:"Prijavite se"}),z,r.status?(c(),p("div",N,w(r.status),1)):v("",!0),t("form",{onSubmit:y(m,["prevent"])},[t("div",null,[a(j,{modelValue:s(e).id,"onUpdate:modelValue":o[0]||(o[0]=i=>s(e).id=i),items:(l=n.$page.props.global.users)==null?void 0:l.data,name:"id",label:"Vaše ime",placeholder:"Izaberite",error:(d=s(e).errors)==null?void 0:d.id},null,8,["modelValue","items","error"])]),t("div",Z,[a(M,{for:"password",value:"Vaša lozinka"}),a(B,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=i=>s(e).password=i),required:"",autocomplete:"current-password",placeholder:"Upišite lozinku"},null,8,["modelValue"]),a($,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",q,[t("label",D,[a(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=i=>s(e).remember=i)},null,8,["checked"]),T])]),t("div",A,[a(P,{class:x(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:u(()=>[g("Prijavi me")]),_:1},8,["class","disabled"])])],40,S)]}),_:1}))}};export{X as default};
