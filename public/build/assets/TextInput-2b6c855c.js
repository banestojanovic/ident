import{i as c,N as d,o as a,f as s,b as i,t as o,r as p,p as m,y as _}from"./app-c9b883a8.js";const f={class:"text-sm text-red-600 dark:text-red-400"},y={__name:"InputError",props:{message:{type:String}},setup(e){return(r,t)=>c((a(),s("div",null,[i("p",f,o(e.message),1)],512)),[[d,e.message]])}},h={class:"block text-base mb-2"},g={key:0},v={key:1},k={__name:"InputLabel",props:{value:{type:String}},setup(e){return(r,t)=>(a(),s("label",h,[e.value?(a(),s("span",g,o(e.value),1)):(a(),s("span",v,[p(r.$slots,"default")]))]))}},b=["value","placeholder"],S={__name:"TextInput",props:{modelValue:{type:String,required:!0},placeholder:{type:String,required:!1}},emits:["update:modelValue"],setup(e,{expose:r}){const t=m(null);return _(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),r({focus:()=>t.value.focus()}),(n,l)=>(a(),s("input",{class:"placeholder-text-gray-500 rounded-md border-none bg-slate-100 text-base focus:ring-slate-300",value:e.modelValue,onInput:l[0]||(l[0]=u=>n.$emit("update:modelValue",u.target.value)),ref_key:"input",ref:t,placeholder:e.placeholder},null,40,b))}};export{k as _,S as a,y as b};