import{h as u,o,f as l,i as m,v as c,b as s,d as f,t as d,g as p}from"./app-c9b883a8.js";const x={class:"relative flex items-center pt-4"},y=["id","name"],b=["for"],g={key:0,class:"absolute -bottom-3.5 left-6 text-xs font-medium text-red-500"},q={__name:"FieldCheckbox",props:{label:{type:String,required:!0},name:{type:String,required:!0},type:{type:String,required:!1,default:"text"},modelValue:{type:[Array,Boolean,Number],required:!1},required:{type:Boolean,required:!1},error:{type:String,required:!1},autocomplete:{type:String,required:!1}},emits:["update:modelValue"],setup(e,{emit:i}){const t=u({get(){return this.modelValue},set(r){i("update:modelValue",r)}});return(r,a)=>(o(),l("div",x,[m(s("input",{id:e.name,name:e.name,type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500","onUpdate:modelValue":a[0]||(a[0]=n=>t.value=n)},null,8,y),[[c,t.value]]),s("label",{for:e.name,class:"ml-2 block text-sm font-medium text-gray-900"},[f(d(e.label)+" ",1),e.error?(o(),l("span",g,d(e.error),1)):p("",!0)],8,b)]))}};export{q as default};