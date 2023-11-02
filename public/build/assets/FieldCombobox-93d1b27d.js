import{d as V}from"./index-f9c786fa.js";import _ from"./LoaderSmall-3aefc194.js";import{W as S,Q as C,G as q,X as B,Y as j,J as z}from"./combobox-18eaa232.js";import{r as F,a as N}from"./ChevronUpDownIcon-a9d4d143.js";import{p as y,q as G,z as J,o as a,c as u,w as i,u as l,a as g,r as L,b as s,t as o,g as d,f as h,s as O,n as v,F as Q}from"./app-164847fe.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./hidden-6e550821.js";import"./use-tracked-pointer-138e0f0a.js";import"./disposables-ed35e013.js";const W={class:"relative mt-1"},X={class:"text-xs"},Y={class:"text-xs"},D={key:1,class:"ml-2 mt-1 text-xs text-red-500"},T={__name:"FieldCombobox",props:{name:String,label:String,items:Object,modelValue:Object,error:{type:String,required:!1}},emits:["update:modelValue","searched"],setup(r,{emit:k}){const m=r,x=y([]),b=y(""),n=y(!1),p=V(()=>{n.value=!0,axios.get(route("api.patients.index",{query:b.value})).then(t=>{x.value=t.data.patients,k("searched",t.data.patients),n.value=!1})},400);return G(()=>b.value,t=>{p()}),J(()=>{var t;((t=m==null?void 0:m.items)==null?void 0:t.length)<1?p():k("update:modelValue",m.items)}),(t,c)=>(a(),u(l(z),{as:"div","model-value":r.modelValue,"onUpdate:modelValue":c[1]||(c[1]=f=>t.$emit("update:modelValue",f))},{default:i(()=>{var f;return[g(l(S),{class:"mb-2 flex space-x-1 sm:mt-px sm:pt-2"},{default:i(()=>[L(t.$slots,"icon"),s("span",null,o(r.label),1)]),_:3}),s("div",W,[g(l(q),{class:"relative flex w-full items-center rounded-r-md focus:outline-none"},{default:i(()=>[g(l(C),{class:"block w-full rounded-md border-0 bg-slate-100 px-4 p-2 text-gray-900 placeholder-gray-400 focus:border-slate-300 focus:ring-slate-300",onChange:c[0]||(c[0]=e=>b.value=e.target.value),placeholder:"Počnite da unosite ime pacijenta",autocomplete:"off","display-value":e=>e?`${e==null?void 0:e.first_name} ${e==null?void 0:e.last_name}`:""},null,8,["display-value"]),n.value?d("",!0):(a(),u(l(F),{key:0,class:"absolute inset-y-0 right-2 top-2.5 h-5 w-5 text-gray-400","aria-hidden":"true"})),n.value?(a(),u(_,{key:1,class:"absolute inset-y-0 right-2 top-2.5 h-5 w-5 text-gray-400"})):d("",!0)]),_:1}),((f=x.value)==null?void 0:f.length)>0?(a(),u(l(B),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:i(()=>[(a(!0),h(Q,null,O(x.value,e=>(a(),u(l(j),{key:e.id,value:e,as:"template"},{default:i(({active:w,selected:$})=>[s("li",{class:v(["relative cursor-pointer select-none py-2 pl-3 pr-9",w?"bg-sky-100 text-black":"text-gray-900"])},[s("div",null,[s("span",{class:v(["block truncate",$&&"font-semibold"])},o(`${e.first_name} ${e.last_name}`),3),s("span",X,o(`${e==null?void 0:e.address} ${e==null?void 0:e.city}`),1),s("span",Y,o(` | ${e==null?void 0:e.phone}`),1)]),$?(a(),h("span",{key:0,class:v(["absolute inset-y-0 right-0 flex items-center pr-4","text-black"])},[g(l(N),{class:"h-5 w-5","aria-hidden":"true"})],2)):d("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):d("",!0),r.error?(a(),h("p",D,o(r.error),1)):d("",!0)])]}),_:3},8,["model-value"]))}};export{T as default};