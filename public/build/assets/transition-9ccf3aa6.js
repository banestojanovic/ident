import{d as Ye,e as De,m as Z,f as ge,a as ye,H as k,S as W,o as y,u as Y,P as ue,g as j,i as qe,t as ie,p as Ae,l as $,y as _e,N as be,b as Ge,C as ze,j as V,c as Qe,T as Xe}from"./hidden-cc2b1f40.js";import{p as f,z as M,k as A,h as c,q as T,s as O,l as S,F as Je,x as ee,B as H,C as D,m as Ke,P as Ze,Q as et,D as tt,n as lt}from"./app-3ec168ce.js";import{t as Re,a as nt,o as se}from"./disposables-ed35e013.js";var K=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(K||{});function at(){let e=f(0);return Ye("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Be(e,t,l,n){De.isServer||M(r=>{e=e??window,e.addEventListener(t,l,n),r(()=>e.removeEventListener(t,l,n))})}function rt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Me(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let l of e.value){let n=y(l);n instanceof HTMLElement&&t.add(n)}return t}var He=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(He||{});let X=Object.assign(A({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:f(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:n}){let r=f(null);n({el:r,$el:r});let a=c(()=>Z(r)),o=f(!1);T(()=>o.value=!0),O(()=>o.value=!1),ut({ownerDocument:a},c(()=>o.value&&!!(e.features&16)));let u=it({ownerDocument:a,container:r,initialFocus:c(()=>e.initialFocus)},c(()=>o.value&&!!(e.features&2)));st({ownerDocument:a,container:r,containers:e.containers,previousActiveElement:u},c(()=>o.value&&!!(e.features&8)));let i=at();function s(h){let b=y(r);b&&(w=>w())(()=>{Y(i.value,{[K.Forwards]:()=>{ue(b,j.First,{skipElements:[h.relatedTarget]})},[K.Backwards]:()=>{ue(b,j.Last,{skipElements:[h.relatedTarget]})}})})}let d=f(!1);function m(h){h.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function p(h){if(!o.value)return;let b=Me(e.containers);y(r)instanceof HTMLElement&&b.add(y(r));let w=h.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(ke(b,w)||(d.value?ue(y(r),Y(i.value,{[K.Forwards]:()=>j.Next,[K.Backwards]:()=>j.Previous})|j.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&W(h.target)))}return()=>{let h={},b={ref:r,onKeydown:m,onFocusout:p},{features:w,initialFocus:L,containers:G,...F}=e;return S(Je,[!!(w&4)&&S(ge,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ye.Focusable}),k({ourProps:b,theirProps:{...t,...F},slot:h,attrs:t,slots:l,name:"FocusTrap"}),!!(w&4)&&S(ge,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ye.Focusable})])}}}),{features:He}),U=[];rt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&U[0]!==t.target&&(U.unshift(t.target),U=U.filter(l=>l!=null&&l.isConnected),U.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ot(e){let t=f(U.slice());return ee([e],([l],[n])=>{n===!0&&l===!1?Re(()=>{t.value.splice(0)}):n===!1&&l===!0&&(t.value=U.slice())},{flush:"post"}),()=>{var l;return(l=t.value.find(n=>n!=null&&n.isConnected))!=null?l:null}}function ut({ownerDocument:e},t){let l=ot(t);T(()=>{M(()=>{var n,r;t.value||((n=e.value)==null?void 0:n.activeElement)===((r=e.value)==null?void 0:r.body)&&W(l())},{flush:"post"})}),O(()=>{t.value&&W(l())})}function it({ownerDocument:e,container:t,initialFocus:l},n){let r=f(null),a=f(!1);return T(()=>a.value=!0),O(()=>a.value=!1),T(()=>{ee([t,l,n],(o,u)=>{if(o.every((s,d)=>(u==null?void 0:u[d])===s)||!n.value)return;let i=y(t);i&&Re(()=>{var s,d;if(!a.value)return;let m=y(l),p=(s=e.value)==null?void 0:s.activeElement;if(m){if(m===p){r.value=p;return}}else if(i.contains(p)){r.value=p;return}m?W(m):ue(i,j.First|j.NoScroll)===qe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),r}function st({ownerDocument:e,container:t,containers:l,previousActiveElement:n},r){var a;Be((a=e.value)==null?void 0:a.defaultView,"focus",o=>{if(!r.value)return;let u=Me(l);y(t)instanceof HTMLElement&&u.add(y(t));let i=n.value;if(!i)return;let s=o.target;s&&s instanceof HTMLElement?ke(u,s)?(n.value=s,W(s)):(o.preventDefault(),o.stopPropagation(),W(i)):W(n.value)},!0)}function ke(e,t){for(let l of e)if(l.contains(t))return!0;return!1}let me=new Map,J=new Map;function Ce(e,t=f(!0)){M(l=>{var n;if(!t.value)return;let r=y(e);if(!r)return;l(function(){var o;if(!r)return;let u=(o=J.get(r))!=null?o:1;if(u===1?J.delete(r):J.set(r,u-1),u!==1)return;let i=me.get(r);i&&(i["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",i["aria-hidden"]),r.inert=i.inert,me.delete(r))});let a=(n=J.get(r))!=null?n:0;J.set(r,a+1),a===0&&(me.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}let xe=Symbol("ForcePortalRootContext");function dt(){return D(xe,!1)}let Pe=A({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return H(xe,e.force),()=>{let{force:n,...r}=e;return k({theirProps:r,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}});function ct(e){let t=Z(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}let ft=A({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let n=f(null),r=c(()=>Z(n)),a=dt(),o=D(Ne,null),u=f(a===!0||o==null?ct(n.value):o.resolveTarget());M(()=>{a||o!=null&&(u.value=o.resolveTarget())});let i=D(we,null);return T(()=>{let s=y(n);s&&i&&O(i.register(s))}),O(()=>{var s,d;let m=(s=r.value)==null?void 0:s.getElementById("headlessui-portal-root");m&&u.value===m&&u.value.children.length<=0&&((d=u.value.parentElement)==null||d.removeChild(u.value))}),()=>{if(u.value===null)return null;let s={ref:n,"data-headlessui-portal":""};return S(Ke,{to:u.value},k({ourProps:s,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),we=Symbol("PortalParentContext");function vt(){let e=D(we,null),t=f([]);function l(a){return t.value.push(a),e&&e.register(a),()=>n(a)}function n(a){let o=t.value.indexOf(a);o!==-1&&t.value.splice(o,1),e&&e.unregister(a)}let r={register:l,unregister:n,portals:t};return[t,A({name:"PortalWrapper",setup(a,{slots:o}){return H(we,r),()=>{var u;return(u=o.default)==null?void 0:u.call(o)}}})]}let Ne=Symbol("PortalGroupContext"),pt=A({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let n=Ze({resolveTarget(){return e.target}});return H(Ne,n),()=>{let{target:r,...a}=e;return k({theirProps:a,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}}),je=Symbol("StackContext");var Ee=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Ee||{});function mt(){return D(je,()=>{})}function ht({type:e,enabled:t,element:l,onUpdate:n}){let r=mt();function a(...o){n==null||n(...o),r(...o)}T(()=>{ee(t,(o,u)=>{o?a(0,e,l):u===!0&&a(1,e,l)},{immediate:!0,flush:"sync"})}),O(()=>{t.value&&a(1,e,l)}),H(je,a)}let gt=Symbol("DescriptionContext");function yt({slot:e=f({}),name:t="Description",props:l={}}={}){let n=f([]);function r(a){return n.value.push(a),()=>{let o=n.value.indexOf(a);o!==-1&&n.value.splice(o,1)}}return H(gt,{register:r,slot:e,name:t,props:l}),c(()=>n.value.length>0?n.value.join(" "):void 0)}function bt(e){let t=et(e.getSnapshot());return O(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function wt(e,t){let l=e(),n=new Set;return{getSnapshot(){return l},subscribe(r){return n.add(r),()=>n.delete(r)},dispatch(r,...a){let o=t[r].call(l,...a);o&&(l=o,n.forEach(u=>u()))}}}function Et(){let e;return{before({doc:t}){var l;let n=t.documentElement;e=((l=t.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:t,d:l}){let n=t.documentElement,r=n.clientWidth-n.offsetWidth,a=e-r;l.style(n,"paddingRight",`${a}px`)}}}function St(){if(!nt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:l,meta:n}){function r(o){return n.containers.flatMap(u=>u()).some(u=>u.contains(o))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=se();o.style(t.documentElement,"scroll-behavior","auto"),l.add(()=>l.microTask(()=>o.dispose()))}l.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;l.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let u=o.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),s=t.querySelector(i);s&&!r(s)&&(a=s)}catch{}},!0),l.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!r(o.target)&&o.preventDefault()},{passive:!1}),l.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function Tt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Lt(e){let t={};for(let l of e)Object.assign(t,l(t));return t}let I=wt(()=>new Map,{PUSH(e,t){var l;let n=(l=this.get(e))!=null?l:{doc:e,count:0,d:se(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let l=this.get(e);return l&&(l.count--,l.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:l}){let n={doc:e,d:t,meta:Lt(l)},r=[St(),Et(),Tt()];r.forEach(({before:a})=>a==null?void 0:a(n)),r.forEach(({after:a})=>a==null?void 0:a(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});I.subscribe(()=>{let e=I.getSnapshot(),t=new Map;for(let[l]of e)t.set(l,l.documentElement.style.overflow);for(let l of e.values()){let n=t.get(l.doc)==="hidden",r=l.count!==0;(r&&!n||!r&&n)&&I.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&I.dispatch("TEARDOWN",l)}});function Ft(e,t,l){let n=bt(I),r=c(()=>{let a=e.value?n.value.get(e.value):void 0;return a?a.count>0:!1});return ee([e,t],([a,o],[u],i)=>{if(!a||!o)return;I.dispatch("PUSH",a,l);let s=!1;i(()=>{s||(I.dispatch("POP",u??a,l),s=!0)})},{immediate:!0}),r}function $t({defaultContainers:e=[],portals:t,mainTreeNodeRef:l}={}){let n=f(null),r=Z(n);function a(){var o;let u=[];for(let i of e)i!==null&&(i instanceof HTMLElement?u.push(i):"value"in i&&i.value instanceof HTMLElement&&u.push(i.value));if(t!=null&&t.value)for(let i of t.value)u.push(i);for(let i of(o=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?o:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(y(n))||u.some(s=>i.contains(s))||u.push(i));return u}return{resolveContainers:a,contains(o){return a().some(u=>u.contains(o))},mainTreeNodeRef:n,MainTreeNode(){return l!=null?null:S(ge,{features:ye.Hidden,ref:n})}}}var Ct=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ct||{});let Se=Symbol("DialogContext");function Le(e){let t=D(Se,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,Le),l}return t}let re="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Ut=A({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:re},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${ie()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:r}){var a;let o=f(!1);T(()=>{o.value=!0});let u=f(0),i=Ae(),s=c(()=>e.open===re&&i!==null?(i.value&$.Open)===$.Open:e.open),d=f(null),m=c(()=>Z(d));if(r({el:d,$el:d}),!(e.open!==re||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===re?void 0:e.open}`);let p=c(()=>o.value&&s.value?0:1),h=c(()=>p.value===0),b=c(()=>u.value>1),w=D(Se,null)!==null,[L,G]=vt(),{resolveContainers:F,mainTreeNodeRef:x,MainTreeNode:te}=$t({portals:L,defaultContainers:[c(()=>{var v;return(v=E.panelRef.value)!=null?v:d.value})]}),le=c(()=>b.value?"parent":"leaf"),z=c(()=>i!==null?(i.value&$.Closing)===$.Closing:!1),ce=c(()=>w||z.value?!1:h.value),ne=c(()=>{var v,g,C;return(C=Array.from((g=(v=m.value)==null?void 0:v.querySelectorAll("body > *"))!=null?g:[]).find(P=>P.id==="headlessui-portal-root"?!1:P.contains(y(x))&&P instanceof HTMLElement))!=null?C:null});Ce(ne,ce);let fe=c(()=>b.value?!0:h.value),ve=c(()=>{var v,g,C;return(C=Array.from((g=(v=m.value)==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(P=>P.contains(y(x))&&P instanceof HTMLElement))!=null?C:null});Ce(ve,fe),ht({type:"Dialog",enabled:c(()=>p.value===0),element:d,onUpdate:(v,g)=>{if(g==="Dialog")return Y(v,{[Ee.Add]:()=>u.value+=1,[Ee.Remove]:()=>u.value-=1})}});let pe=yt({name:"DialogDescription",slot:c(()=>({open:s.value}))}),q=f(null),E={titleId:q,panelRef:f(null),dialogState:p,setTitleId(v){q.value!==v&&(q.value=v)},close(){t("close",!1)}};H(Se,E);let Q=c(()=>!(!h.value||b.value));_e(F,(v,g)=>{E.close(),tt(()=>g==null?void 0:g.focus())},Q);let R=c(()=>!(b.value||p.value!==0));Be((a=m.value)==null?void 0:a.defaultView,"keydown",v=>{R.value&&(v.defaultPrevented||v.key===Ge.Escape&&(v.preventDefault(),v.stopPropagation(),E.close()))});let _=c(()=>!(z.value||p.value!==0||w));return Ft(m,_,v=>{var g;return{containers:[...(g=v.containers)!=null?g:[],F]}}),M(v=>{if(p.value!==0)return;let g=y(d);if(!g)return;let C=new ResizeObserver(P=>{for(let ae of P){let B=ae.target.getBoundingClientRect();B.x===0&&B.y===0&&B.width===0&&B.height===0&&E.close()}});C.observe(g),v(()=>C.disconnect())}),()=>{let{id:v,open:g,initialFocus:C,...P}=e,ae={...l,ref:d,id:v,role:"dialog","aria-modal":p.value===0?!0:void 0,"aria-labelledby":q.value,"aria-describedby":pe.value},B={open:p.value===0};return S(Pe,{force:!0},()=>[S(ft,()=>S(pt,{target:d.value},()=>S(Pe,{force:!1},()=>S(X,{initialFocus:C,containers:F,features:h.value?Y(le.value,{parent:X.features.RestoreFocus,leaf:X.features.All&~X.features.FocusLock}):X.features.None},()=>S(G,{},()=>k({ourProps:ae,theirProps:{...P,...l},slot:B,attrs:l,slots:n,visible:p.value===0,features:be.RenderStrategy|be.Static,name:"Dialog"})))))),S(te)])}}}),Vt=A({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${ie()}`}},setup(e,{attrs:t,slots:l}){let n=Le("DialogOverlay");function r(a){a.target===a.currentTarget&&(a.preventDefault(),a.stopPropagation(),n.close())}return()=>{let{id:a,...o}=e;return k({ourProps:{id:a,"aria-hidden":!0,onClick:r},theirProps:o,slot:{open:n.dialogState.value===0},attrs:t,slots:l,name:"DialogOverlay"})}}}),It=A({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${ie()}`}},setup(e,{attrs:t,slots:l}){let n=Le("DialogTitle");return T(()=>{n.setTitleId(e.id),O(()=>n.setTitleId(null))}),()=>{let{id:r,...a}=e;return k({ourProps:{id:r},theirProps:a,slot:{open:n.dialogState.value===0},attrs:t,slots:l,name:"DialogTitle"})}}});function Pt(e){let t={called:!1};return(...l)=>{if(!t.called)return t.called=!0,e(...l)}}function he(e,...t){e&&t.length>0&&e.classList.add(...t)}function oe(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Te=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Te||{});function Ot(e,t){let l=se();if(!e)return l.dispose;let{transitionDuration:n,transitionDelay:r}=getComputedStyle(e),[a,o]=[n,r].map(u=>{let[i=0]=u.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return i});return a!==0?l.setTimeout(()=>t("finished"),a+o):t("finished"),l.add(()=>t("cancelled")),l.dispose}function Oe(e,t,l,n,r,a){let o=se(),u=a!==void 0?Pt(a):()=>{};return oe(e,...r),he(e,...t,...l),o.nextFrame(()=>{oe(e,...l),he(e,...n),o.add(Ot(e,i=>(oe(e,...n,...t),he(e,...r),u(i))))}),o.add(()=>oe(e,...t,...l,...n,...r)),o.add(()=>u("cancelled")),o.dispose}function N(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Fe=Symbol("TransitionContext");var Dt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Dt||{});function At(){return D(Fe,null)!==null}function Rt(){let e=D(Fe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Bt(){let e=D($e,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let $e=Symbol("NestingContext");function de(e){return"children"in e?de(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Ue(e){let t=f([]),l=f(!1);T(()=>l.value=!0),O(()=>l.value=!1);function n(a,o=V.Hidden){let u=t.value.findIndex(({id:i})=>i===a);u!==-1&&(Y(o,{[V.Unmount](){t.value.splice(u,1)},[V.Hidden](){t.value[u].state="hidden"}}),!de(t)&&l.value&&(e==null||e()))}function r(a){let o=t.value.find(({id:u})=>u===a);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:a,state:"visible"}),()=>n(a,V.Unmount)}return{children:t,register:r,unregister:n}}let Ve=be.RenderStrategy,Mt=A({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:n,expose:r}){let a=f(0);function o(){a.value|=$.Opening,t("beforeEnter")}function u(){a.value&=~$.Opening,t("afterEnter")}function i(){a.value|=$.Closing,t("beforeLeave")}function s(){a.value&=~$.Closing,t("afterLeave")}if(!At()&&ze())return()=>S(kt,{...e,onBeforeEnter:o,onAfterEnter:u,onBeforeLeave:i,onAfterLeave:s},n);let d=f(null),m=c(()=>e.unmount?V.Unmount:V.Hidden);r({el:d,$el:d});let{show:p,appear:h}=Rt(),{register:b,unregister:w}=Bt(),L=f(p.value?"visible":"hidden"),G={value:!0},F=ie(),x={value:!1},te=Ue(()=>{!x.value&&L.value!=="hidden"&&(L.value="hidden",w(F),s())});T(()=>{let E=b(F);O(E)}),M(()=>{if(m.value===V.Hidden&&F){if(p.value&&L.value!=="visible"){L.value="visible";return}Y(L.value,{hidden:()=>w(F),visible:()=>b(F)})}});let le=N(e.enter),z=N(e.enterFrom),ce=N(e.enterTo),ne=N(e.entered),fe=N(e.leave),ve=N(e.leaveFrom),pe=N(e.leaveTo);T(()=>{M(()=>{if(L.value==="visible"){let E=y(d);if(E instanceof Comment&&E.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function q(E){let Q=G.value&&!h.value,R=y(d);!R||!(R instanceof HTMLElement)||Q||(x.value=!0,p.value&&o(),p.value||i(),E(p.value?Oe(R,le,z,ce,ne,_=>{x.value=!1,_===Te.Finished&&u()}):Oe(R,fe,ve,pe,ne,_=>{x.value=!1,_===Te.Finished&&(de(te)||(L.value="hidden",w(F),s()))})))}return T(()=>{ee([p],(E,Q,R)=>{q(R),G.value=!1},{immediate:!0})}),H($e,te),Qe(c(()=>Y(L.value,{visible:$.Open,hidden:$.Closed})|a.value)),()=>{let{appear:E,show:Q,enter:R,enterFrom:_,enterTo:v,entered:g,leave:C,leaveFrom:P,leaveTo:ae,...B}=e,Ie={ref:d},We={...B,...h.value&&p.value&&De.isServer?{class:lt([l.class,B.class,...le,...z])}:{}};return k({theirProps:We,ourProps:Ie,slot:{},slots:n,attrs:l,features:Ve,visible:L.value==="visible",name:"TransitionChild"})}}}),Ht=Mt,kt=A({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:n}){let r=Ae(),a=c(()=>e.show===null&&r!==null?(r.value&$.Open)===$.Open:e.show);M(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=f(a.value?"visible":"hidden"),u=Ue(()=>{o.value="hidden"}),i=f(!0),s={show:a,appear:c(()=>e.appear||!i.value)};return T(()=>{M(()=>{i.value=!1,a.value?o.value="visible":de(u)||(o.value="hidden")})}),H($e,u),H(Fe,s),()=>{let d=Xe(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return k({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[S(Ht,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...m,...d},n.default)]},attrs:{},features:Ve,visible:o.value==="visible",name:"Transition"})}}});export{kt as S,Ut as U,It as V,Vt as Y,Mt as h};