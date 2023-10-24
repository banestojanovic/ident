import{d as de}from"./index-60995329.js";import ve from"./LoaderSmall-20b57d62.js";import{m as ue,u as N,o as C,y as pe,c as ce,l as X,f as be,K as fe,a as me,H as q,T as ie,t as G,N as Z,p as xe,O as ge,b as F}from"./hidden-27aa5c29.js";import{d as ye,x as Oe,a as V,e as he,b as Se,u as Re,r as Ce,c as Ie}from"./use-tracked-pointer-dd255a43.js";import{z as ee,k as K,p as k,h as y,A as g,B as Pe,q as ae,x as te,l as ne,F as re,s as we,C as Ve,D as _,o as j,c as z,w as W,u as L,a as Q,d as ke,t as J,b as M,g as Y,f as le,E as Te,n as oe}from"./app-875610e1.js";import{o as Ee,n as Fe}from"./disposables-ed35e013.js";import"./_plugin-vue_export-helper-c27b6911.js";function $e({container:a,accept:m,walk:x,enabled:O}){ee(()=>{let e=a.value;if(!e||O!==void 0&&!O.value)return;let t=ue(a);if(!t)return;let b=Object.assign(u=>m(u),{acceptNode:m}),n=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,b,!1);for(;n.nextNode();)x(n.currentNode)})}function Ae(a,m){return a===m}var Be=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(Be||{}),De=(a=>(a[a.Single=0]="Single",a[a.Multi=1]="Multi",a))(De||{}),Ne=(a=>(a[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a))(Ne||{});let se=Symbol("ComboboxContext");function U(a){let m=Ve(se,null);if(m===null){let x=new Error(`<${a} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(x,U),x}return m}let je=K({name:"Combobox",emits:{"update:modelValue":a=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Ae},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(a,{slots:m,attrs:x,emit:O}){let e=k(1),t=k(null),b=k(null),n=k(null),u=k(null),v=k({static:!1,hold:!1}),o=k([]),f=k(null),w=k(1),T=k(!1);function B(i=d=>d){let d=f.value!==null?o.value[f.value]:null,p=ge(i(o.value.slice()),c=>C(c.dataRef.domRef)),r=d?p.indexOf(d):null;return r===-1&&(r=null),{options:p,activeOptionIndex:r}}let $=y(()=>a.multiple?1:0),h=y(()=>a.nullable),[l,S]=ye(y(()=>a.modelValue),i=>O("update:modelValue",i),y(()=>a.defaultValue)),R=y(()=>l.value===void 0?N($.value,{1:[],0:void 0}):l.value),E=null,I=null,s={comboboxState:e,value:R,mode:$,compare(i,d){if(typeof a.by=="string"){let p=a.by;return(i==null?void 0:i[p])===(d==null?void 0:d[p])}return a.by(i,d)},defaultValue:y(()=>a.defaultValue),nullable:h,inputRef:b,labelRef:t,buttonRef:n,optionsRef:u,disabled:y(()=>a.disabled),options:o,change(i){S(i)},activeOptionIndex:y(()=>{if(T.value&&f.value===null&&o.value.length>0){let i=o.value.findIndex(d=>!d.dataRef.disabled);i!==-1&&(f.value=i)}return f.value}),activationTrigger:w,optionsPropsRef:v,closeCombobox(){T.value=!1,!a.disabled&&e.value!==1&&(e.value=1,f.value=null)},openCombobox(){if(T.value=!0,a.disabled||e.value===0)return;let i=o.value.findIndex(d=>{let p=g(d.dataRef.value);return N($.value,{0:()=>s.compare(g(s.value.value),g(p)),1:()=>g(s.value.value).some(r=>s.compare(g(r),g(p)))})});i!==-1&&(f.value=i),e.value=0},goToOption(i,d,p){T.value=!1,E!==null&&cancelAnimationFrame(E),E=requestAnimationFrame(()=>{if(a.disabled||u.value&&!v.value.static&&e.value===1)return;let r=B();if(r.activeOptionIndex===null){let P=r.options.findIndex(H=>!H.dataRef.disabled);P!==-1&&(r.activeOptionIndex=P)}let c=Oe(i===V.Specific?{focus:V.Specific,id:d}:{focus:i},{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:P=>P.id,resolveDisabled:P=>P.dataRef.disabled});f.value=c,w.value=p??1,o.value=r.options})},selectOption(i){let d=o.value.find(r=>r.id===i);if(!d)return;let{dataRef:p}=d;S(N($.value,{0:()=>p.value,1:()=>{let r=g(s.value.value).slice(),c=g(p.value),P=r.findIndex(H=>s.compare(c,g(H)));return P===-1?r.push(c):r.splice(P,1),r}}))},selectActiveOption(){if(s.activeOptionIndex.value===null)return;let{dataRef:i,id:d}=o.value[s.activeOptionIndex.value];S(N($.value,{0:()=>i.value,1:()=>{let p=g(s.value.value).slice(),r=g(i.value),c=p.findIndex(P=>s.compare(r,g(P)));return c===-1?p.push(r):p.splice(c,1),p}})),s.goToOption(V.Specific,d)},registerOption(i,d){I&&cancelAnimationFrame(I);let p={id:i,dataRef:d},r=B(c=>(c.push(p),c));if(f.value===null){let c=d.value.value;N($.value,{0:()=>s.compare(g(s.value.value),g(c)),1:()=>g(s.value.value).some(P=>s.compare(g(P),g(c)))})&&(r.activeOptionIndex=r.options.indexOf(p))}o.value=r.options,f.value=r.activeOptionIndex,w.value=1,r.options.some(c=>!C(c.dataRef.domRef))&&(I=requestAnimationFrame(()=>{let c=B();o.value=c.options,f.value=c.activeOptionIndex}))},unregisterOption(i){var d;s.activeOptionIndex.value!==null&&((d=s.options.value[s.activeOptionIndex.value])==null?void 0:d.id)===i&&(T.value=!0);let p=B(r=>{let c=r.findIndex(P=>P.id===i);return c!==-1&&r.splice(c,1),r});o.value=p.options,f.value=p.activeOptionIndex,w.value=1}};pe([b,n,u],()=>s.closeCombobox(),y(()=>e.value===0)),Pe(se,s),ce(y(()=>N(e.value,{0:X.Open,1:X.Closed})));let A=y(()=>s.activeOptionIndex.value===null?null:o.value[s.activeOptionIndex.value].dataRef.value),D=y(()=>{var i;return(i=C(b))==null?void 0:i.closest("form")});return ae(()=>{te([D],()=>{if(!D.value||a.defaultValue===void 0)return;function i(){s.change(a.defaultValue)}return D.value.addEventListener("reset",i),()=>{var d;(d=D.value)==null||d.removeEventListener("reset",i)}},{immediate:!0})}),()=>{let{name:i,disabled:d,form:p,...r}=a,c={open:e.value===0,disabled:d,activeIndex:s.activeOptionIndex.value,activeOption:A.value,value:R.value};return ne(re,[...i!=null&&R.value!=null?he({[i]:R.value}).map(([P,H])=>ne(be,fe({features:me.Hidden,key:P,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:p,name:P,value:H}))):[],q({theirProps:{...x,...ie(r,["modelValue","defaultValue","nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:c,slots:m,attrs:x,name:"Combobox"})])}}}),Le=K({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-combobox-label-${G()}`}},setup(a,{attrs:m,slots:x}){let O=U("ComboboxLabel");function e(){var t;(t=C(O.inputRef))==null||t.focus({preventScroll:!0})}return()=>{let t={open:O.comboboxState.value===0,disabled:O.disabled.value},{id:b,...n}=a,u={id:b,ref:O.labelRef,onClick:e};return q({ourProps:u,theirProps:n,slot:t,attrs:m,slots:x,name:"ComboboxLabel"})}}}),_e=K({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-combobox-button-${G()}`}},setup(a,{attrs:m,slots:x,expose:O}){let e=U("ComboboxButton");O({el:e.buttonRef,$el:e.buttonRef});function t(u){e.disabled.value||(e.comboboxState.value===0?e.closeCombobox():(u.preventDefault(),e.openCombobox()),_(()=>{var v;return(v=C(e.inputRef))==null?void 0:v.focus({preventScroll:!0})}))}function b(u){switch(u.key){case F.ArrowDown:u.preventDefault(),u.stopPropagation(),e.comboboxState.value===1&&e.openCombobox(),_(()=>{var v;return(v=e.inputRef.value)==null?void 0:v.focus({preventScroll:!0})});return;case F.ArrowUp:u.preventDefault(),u.stopPropagation(),e.comboboxState.value===1&&(e.openCombobox(),_(()=>{e.value.value||e.goToOption(V.Last)})),_(()=>{var v;return(v=e.inputRef.value)==null?void 0:v.focus({preventScroll:!0})});return;case F.Escape:if(e.comboboxState.value!==0)return;u.preventDefault(),e.optionsRef.value&&!e.optionsPropsRef.value.static&&u.stopPropagation(),e.closeCombobox(),_(()=>{var v;return(v=e.inputRef.value)==null?void 0:v.focus({preventScroll:!0})});return}}let n=Se(y(()=>({as:a.as,type:m.type})),e.buttonRef);return()=>{var u,v;let o={open:e.comboboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:f,...w}=a,T={ref:e.buttonRef,id:f,type:n.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(u=C(e.optionsRef))==null?void 0:u.id,"aria-expanded":e.comboboxState.value===0,"aria-labelledby":e.labelRef.value?[(v=C(e.labelRef))==null?void 0:v.id,f].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:b,onClick:t};return q({ourProps:T,theirProps:w,slot:o,attrs:m,slots:x,name:"ComboboxButton"})}}}),Me=K({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:()=>`headlessui-combobox-input-${G()}`}},emits:{change:a=>!0},setup(a,{emit:m,attrs:x,slots:O,expose:e}){let t=U("ComboboxInput"),b=y(()=>ue(C(t.inputRef))),n={value:!1};e({el:t.inputRef,$el:t.inputRef});function u(){t.change(null);let l=C(t.optionsRef);l&&(l.scrollTop=0),t.goToOption(V.Nothing)}let v=y(()=>{var l;let S=t.value.value;return C(t.inputRef)?typeof a.displayValue<"u"&&S!==void 0?(l=a.displayValue(S))!=null?l:"":typeof S=="string"?S:"":""});ae(()=>{te([v,t.comboboxState,b],([l,S],[R,E])=>{if(n.value)return;let I=C(t.inputRef);I&&((E===0&&S===1||l!==R)&&(I.value=l),requestAnimationFrame(()=>{var s;if(n.value||!I||((s=b.value)==null?void 0:s.activeElement)!==I)return;let{selectionStart:A,selectionEnd:D}=I;Math.abs((D??0)-(A??0))===0&&A===0&&I.setSelectionRange(I.value.length,I.value.length)}))},{immediate:!0}),te([t.comboboxState],([l],[S])=>{if(l===0&&S===1){if(n.value)return;let R=C(t.inputRef);if(!R)return;let E=R.value,{selectionStart:I,selectionEnd:s,selectionDirection:A}=R;R.value="",R.value=E,A!==null?R.setSelectionRange(I,s,A):R.setSelectionRange(I,s)}})});let o=k(!1);function f(){o.value=!0}function w(){Ee().nextFrame(()=>{o.value=!1})}function T(l){switch(n.value=!0,l.key){case F.Enter:if(n.value=!1,t.comboboxState.value!==0||o.value)return;if(l.preventDefault(),l.stopPropagation(),t.activeOptionIndex.value===null){t.closeCombobox();return}t.selectActiveOption(),t.mode.value===0&&t.closeCombobox();break;case F.ArrowDown:return n.value=!1,l.preventDefault(),l.stopPropagation(),N(t.comboboxState.value,{0:()=>t.goToOption(V.Next),1:()=>t.openCombobox()});case F.ArrowUp:return n.value=!1,l.preventDefault(),l.stopPropagation(),N(t.comboboxState.value,{0:()=>t.goToOption(V.Previous),1:()=>{t.openCombobox(),_(()=>{t.value.value||t.goToOption(V.Last)})}});case F.Home:if(l.shiftKey)break;return n.value=!1,l.preventDefault(),l.stopPropagation(),t.goToOption(V.First);case F.PageUp:return n.value=!1,l.preventDefault(),l.stopPropagation(),t.goToOption(V.First);case F.End:if(l.shiftKey)break;return n.value=!1,l.preventDefault(),l.stopPropagation(),t.goToOption(V.Last);case F.PageDown:return n.value=!1,l.preventDefault(),l.stopPropagation(),t.goToOption(V.Last);case F.Escape:if(n.value=!1,t.comboboxState.value!==0)return;l.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&l.stopPropagation(),t.nullable.value&&t.mode.value===0&&t.value.value===null&&u(),t.closeCombobox();break;case F.Tab:if(n.value=!1,t.comboboxState.value!==0)return;t.mode.value===0&&t.selectActiveOption(),t.closeCombobox();break}}function B(l){m("change",l),t.nullable.value&&t.mode.value===0&&l.target.value===""&&u(),t.openCombobox()}function $(){n.value=!1}let h=y(()=>{var l,S,R,E;return(E=(R=(S=a.defaultValue)!=null?S:t.defaultValue.value!==void 0?(l=a.displayValue)==null?void 0:l.call(a,t.defaultValue.value):null)!=null?R:t.defaultValue.value)!=null?E:""});return()=>{var l,S,R,E,I,s;let A={open:t.comboboxState.value===0},{id:D,displayValue:i,onChange:d,...p}=a,r={"aria-controls":(l=t.optionsRef.value)==null?void 0:l.id,"aria-expanded":t.comboboxState.value===0,"aria-activedescendant":t.activeOptionIndex.value===null||(S=t.options.value[t.activeOptionIndex.value])==null?void 0:S.id,"aria-labelledby":(I=(R=C(t.labelRef))==null?void 0:R.id)!=null?I:(E=C(t.buttonRef))==null?void 0:E.id,"aria-autocomplete":"list",id:D,onCompositionstart:f,onCompositionend:w,onKeydown:T,onInput:B,onBlur:$,role:"combobox",type:(s=x.type)!=null?s:"text",tabIndex:0,ref:t.inputRef,defaultValue:h.value,disabled:t.disabled.value===!0?!0:void 0};return q({ourProps:r,theirProps:p,slot:A,attrs:x,slots:O,features:Z.RenderStrategy|Z.Static,name:"ComboboxInput"})}}}),qe=K({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(a,{attrs:m,slots:x,expose:O}){let e=U("ComboboxOptions"),t=`headlessui-combobox-options-${G()}`;O({el:e.optionsRef,$el:e.optionsRef}),ee(()=>{e.optionsPropsRef.value.static=a.static}),ee(()=>{e.optionsPropsRef.value.hold=a.hold});let b=xe(),n=y(()=>b!==null?(b.value&X.Open)===X.Open:e.comboboxState.value===0);return $e({container:y(()=>C(e.optionsRef)),enabled:y(()=>e.comboboxState.value===0),accept(u){return u.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}}),()=>{var u,v,o;let f={open:e.comboboxState.value===0},w={"aria-labelledby":(o=(u=C(e.labelRef))==null?void 0:u.id)!=null?o:(v=C(e.buttonRef))==null?void 0:v.id,id:t,ref:e.optionsRef,role:"listbox","aria-multiselectable":e.mode.value===1?!0:void 0},T=ie(a,["hold"]);return q({ourProps:w,theirProps:T,slot:f,attrs:m,slots:x,features:Z.RenderStrategy|Z.Static,visible:n.value,name:"ComboboxOptions"})}}}),Ke=K({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(a,{slots:m,attrs:x,expose:O}){let e=U("ComboboxOption"),t=`headlessui-combobox-option-${G()}`,b=k(null);O({el:b,$el:b});let n=y(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t:!1),u=y(()=>N(e.mode.value,{0:()=>e.compare(g(e.value.value),g(a.value)),1:()=>g(e.value.value).some(h=>e.compare(g(h),g(a.value)))})),v=y(()=>({disabled:a.disabled,value:a.value,domRef:b}));ae(()=>e.registerOption(t,v)),we(()=>e.unregisterOption(t)),ee(()=>{e.comboboxState.value===0&&n.value&&e.activationTrigger.value!==0&&_(()=>{var h,l;return(l=(h=C(b))==null?void 0:h.scrollIntoView)==null?void 0:l.call(h,{block:"nearest"})})});function o(h){if(a.disabled)return h.preventDefault();e.selectOption(t),e.mode.value===0&&e.closeCombobox(),Fe()||requestAnimationFrame(()=>{var l;return(l=C(e.inputRef))==null?void 0:l.focus()})}function f(){if(a.disabled)return e.goToOption(V.Nothing);e.goToOption(V.Specific,t)}let w=Re();function T(h){w.update(h)}function B(h){w.wasMoved(h)&&(a.disabled||n.value||e.goToOption(V.Specific,t,0))}function $(h){w.wasMoved(h)&&(a.disabled||n.value&&(e.optionsPropsRef.value.hold||e.goToOption(V.Nothing)))}return()=>{let{disabled:h}=a,l={active:n.value,selected:u.value,disabled:h},S={id:t,ref:b,role:"option",tabIndex:h===!0?void 0:-1,"aria-disabled":h===!0?!0:void 0,"aria-selected":u.value,disabled:void 0,onClick:o,onFocus:f,onPointerenter:T,onMouseenter:T,onPointermove:B,onMousemove:B,onPointerleave:$,onMouseleave:$};return q({ourProps:S,theirProps:a,slot:l,attrs:x,slots:m,name:"ComboboxOption"})}}});const Ue={class:"relative mt-1"},He={class:"text-xs"},ze={class:"text-xs"},We={key:1,class:"ml-2 mt-1 text-xs text-red-500"},tt={__name:"FieldCombobox",props:{name:String,label:String,items:Object,modelValue:Object,error:{type:String,required:!1}},emits:["update:modelValue","searched"],setup(a,{emit:m}){const x=a,O=k([]),e=k(""),t=k(!1),b=de(()=>{t.value=!0,axios.get(route("api.patients.index",{query:e.value})).then(n=>{O.value=n.data.patients,m("searched",n.data.patients),t.value=!1})},400);return te(()=>e.value,n=>{b()}),ae(()=>{var n;((n=x==null?void 0:x.items)==null?void 0:n.length)<1?b():m("update:modelValue",x.items)}),(n,u)=>(j(),z(L(je),{as:"div","model-value":a.modelValue,"onUpdate:modelValue":u[1]||(u[1]=v=>n.$emit("update:modelValue",v))},{default:W(()=>{var v;return[Q(L(Le),{class:"block text-sm font-medium text-gray-700"},{default:W(()=>[ke(J(a.label),1)]),_:1}),M("div",Ue,[Q(L(_e),{class:"relative flex w-full items-center rounded-r-md focus:outline-none"},{default:W(()=>[Q(L(Me),{class:"w-full rounded-md border border-gray-300 bg-white py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm",onChange:u[0]||(u[0]=o=>e.value=o.target.value),placeholder:"Počnite da unosite ime pacijenta",autocomplete:"off","display-value":o=>o?`${o==null?void 0:o.first_name} ${o==null?void 0:o.last_name}`:""},null,8,["display-value"]),t.value?Y("",!0):(j(),z(L(Ce),{key:0,class:"absolute inset-y-0 right-2 top-2.5 h-5 w-5 text-gray-400","aria-hidden":"true"})),t.value?(j(),z(ve,{key:1,class:"absolute inset-y-0 right-2 top-2.5 h-5 w-5 text-gray-400"})):Y("",!0)]),_:1}),((v=O.value)==null?void 0:v.length)>0?(j(),z(L(qe),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:W(()=>[(j(!0),le(re,null,Te(O.value,o=>(j(),z(L(Ke),{key:o.id,value:o,as:"template"},{default:W(({active:f,selected:w})=>[M("li",{class:oe(["relative cursor-default select-none py-2 pl-3 pr-9",f?"bg-indigo-600 text-white":"text-gray-900"])},[M("div",null,[M("span",{class:oe(["block truncate",w&&"font-semibold"])},J(`${o.first_name} ${o.last_name}`),3),M("span",He,J(`${o==null?void 0:o.address} ${o==null?void 0:o.city}`),1),M("span",ze,J(` | ${o==null?void 0:o.phone}`),1)]),w?(j(),le("span",{key:0,class:oe(["absolute inset-y-0 right-0 flex items-center pr-4",f?"text-white":"text-indigo-600"])},[Q(L(Ie),{class:"h-5 w-5","aria-hidden":"true"})],2)):Y("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):Y("",!0),a.error?(j(),le("p",We,J(a.error),1)):Y("",!0)])]}),_:1},8,["model-value"]))}};export{tt as default};
