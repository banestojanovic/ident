import{K as y,T as x,o as l,f as n,b as s,a,u as e,d as m,w as u,i as _,S as k,g as f,I as h,e as V,j}from"./app-3ec168ce.js";import{a as p,b as g,_ as v}from"./TextInput-709b31bf.js";import{P as b}from"./PrimaryButton-824469f6.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Informacije o nalogu"),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Izmeni informacije naloga i imejl adresu ")],-1),S={key:0},I={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},B={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},N={class:"flex items-center gap-4"},$={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},q={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const r=y().props.auth.user,t=x({name:r.name,email:r.email});return(c,o)=>(l(),n("section",null,[w,s("form",{onSubmit:o[2]||(o[2]=V(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(v,{for:"name",value:"Ime i prezime"}),a(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(v,{for:"email",value:"Imejl adresa"}),a(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(r).email_verified_at===null?(l(),n("div",S,[s("p",I,[m(" Your email address is unverified. "),a(e(j),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:u(()=>[m(" Klikni da ponovo pošalješ verifikacioni imejl. ")]),_:1},8,["href"])]),_(s("div",B," Novi verifikacioni lik je poslat na tvoju adresu ",512),[[k,d.status==="verification-link-sent"]])])):f("",!0),s("div",N,[a(b,{disabled:e(t).processing},{default:u(()=>[m("Sačuvaj")]),_:1},8,["disabled"]),a(h,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:u(()=>[e(t).recentlySuccessful?(l(),n("p",$,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{q as default};