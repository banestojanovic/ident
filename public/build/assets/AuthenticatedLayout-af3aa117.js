import{A as S,B as j,h as y,p as M,o as i,f as u,b as e,r as f,i as b,L as w,a as o,w as a,n as g,E as B,c as L,u as _,j as k,G as N,g as C,t as v,d as h,F as V}from"./app-0c9aefc9.js";import D from"./Tabs-f78de832.js";import A from"./Notifications-966007a2.js";import{A as z}from"./ApplicationLogo-67c97db9.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const H={class:"relative"},F={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white dark:bg-gray-700"}},setup(r){const s=r,t=p=>{n.value&&p.key==="Escape"&&(n.value=!1)};S(()=>document.addEventListener("keydown",t)),j(()=>document.removeEventListener("keydown",t));const l=y(()=>({48:"w-48"})[s.width.toString()]),d=y(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),n=M(!1);return(p,c)=>(i(),u("div",H,[e("div",{onClick:c[0]||(c[0]=x=>n.value=!n.value)},[f(p.$slots,"trigger")]),b(e("div",{class:"fixed inset-0 z-40",onClick:c[1]||(c[1]=x=>n.value=!1)},null,512),[[w,n.value]]),o(B,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:a(()=>[b(e("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[l.value,d.value]]),style:{display:"none"},onClick:c[2]||(c[2]=x=>n.value=!1)},[e("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",r.contentClasses])},[f(p.$slots,"content")],2)],2),[[w,n.value]])]),_:3})]))}},$={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(r){return(s,t)=>(i(),L(_(k),{href:r.href,class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:a(()=>[f(s.$slots,"default")]),_:3},8,["href"]))}},m={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const s=r,t=y(()=>s.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-left text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(l,d)=>(i(),L(_(k),{href:r.href,class:g(t.value)},{default:a(()=>[f(l.$slots,"default")]),_:3},8,["href","class"]))}},O={},q={class:"bg-sky-50 pb-12 pt-24 text-sm text-sky-700"},I=N('<div class="max-w-8xl mx-auto flex items-center justify-between"><div> © Kreirao <strong>Dimaso DOO</strong> - Sva prava zadržana 2023. </div><div class="ml-auto flex items-center space-x-8"><a href="#" class="flex items-center space-x-2 hover:text-sky-900"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.364 5.636L14.828 9.172M18.364 5.636C16.6762 3.94817 14.3869 3 12 3C9.61305 3 7.32383 3.94817 5.636 5.636M18.364 5.636C20.0518 7.32383 21 9.61305 21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5283 18.364 18.364M14.828 9.172C14.0779 8.42185 13.0609 8 12 8C10.9391 8 9.92215 8.42185 9.172 9.172M14.828 9.172C15.5781 9.92215 16 10.9391 16 12C16 13.0609 15.5781 14.0779 14.828 14.828M14.828 14.828L18.364 18.364M14.828 14.828C14.0779 15.5781 13.0609 16 12 16C10.9391 16 9.92215 15.5781 9.172 14.828M18.364 18.364C17.5283 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47173 19.1997 5.636 18.364M9.172 9.172L5.636 5.636M9.172 9.172C8.42185 9.92215 8 10.9391 8 12C8 13.0609 8.42185 14.0779 9.172 14.828M5.636 5.636C3.94817 7.32383 3 9.61305 3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80027 17.5283 5.636 18.364M9.172 14.828L5.636 18.364" stroke="#49798A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Korisnička podrška</span></a><a href="#" class="flex items-center space-x-2 hover:text-sky-900"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6.66666L9.075 11.05C9.34888 11.2327 9.67075 11.3302 10 11.3302C10.3292 11.3302 10.6511 11.2327 10.925 11.05L17.5 6.66666M4.16667 15.8333H15.8333C16.2754 15.8333 16.6993 15.6577 17.0118 15.3452C17.3244 15.0326 17.5 14.6087 17.5 14.1667V5.83332C17.5 5.3913 17.3244 4.96737 17.0118 4.65481C16.6993 4.34225 16.2754 4.16666 15.8333 4.16666H4.16667C3.72464 4.16666 3.30072 4.34225 2.98816 4.65481C2.67559 4.96737 2.5 5.3913 2.5 5.83332V14.1667C2.5 14.6087 2.67559 15.0326 2.98816 15.3452C3.30072 15.6577 3.72464 15.8333 4.16667 15.8333Z" stroke="#49798A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>dimaso.doo@gmail.com</span></a><a href="#" class="flex items-center space-x-2 hover:text-sky-900"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z" stroke="#49798A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>381 (0)61 137 51 50</span></a></div></div>',1),K=[I];function T(r,s){return i(),u("footer",q,K)}const Z=E(O,[["render",T]]),G={class:"relative min-h-screen bg-sky-50"},R={class:""},U={class:"mx-auto rounded-b-lg bg-white px-8 py-4"},J={class:"flex h-16 justify-between"},P={class:"flex"},Q={class:"flex shrink-0 items-center"},W={class:"hidden sm:ml-6 sm:flex sm:items-center"},X={class:"relative ml-3"},Y={class:"inline-flex rounded-md"},ee={type:"button",class:"inline-flex items-center space-x-4 rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out focus:outline-none"},te={key:0,class:"relative h-10 w-10 overflow-hidden rounded-full"},se=["src"],oe={class:"inline-flex flex-col text-left"},ae={class:"text-gray-500"},re={class:"text-lg font-medium"},ne={class:"-mr-2 flex items-center sm:hidden"},ie={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},le={class:"space-y-1 pb-3 pt-2"},de={class:"border-t border-gray-200 pb-1 pt-4 dark:border-gray-600"},ce={class:"px-4"},ue={class:"text-base font-medium text-gray-800 dark:text-gray-200"},ge={class:"text-sm font-medium text-gray-500"},fe={class:"mt-3 space-y-1"},he={key:0,class:"bg-white shadow dark:bg-gray-800"},pe={class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"},ve={class:""},be={__name:"AuthenticatedLayout",props:{type:{type:String,default:()=>"default"}},setup(r){const s=M(!1);return(t,l)=>(i(),u(V,null,[e("div",null,[e("div",G,[e("nav",R,[e("div",U,[e("div",J,[e("div",P,[e("div",Q,[o(_(k),{href:t.route("patients.index")},{default:a(()=>[o(z,{class:"h-9 fill-current"})]),_:1},8,["href"])])]),e("div",W,[e("div",X,[o(F,{align:"right",width:"48"},{trigger:a(()=>{var d;return[e("div",Y,[e("button",ee,[(d=t.$page.props.auth)!=null&&d.photo?(i(),u("figure",te,[e("img",{src:t.$page.props.auth.photo,alt:"Slika doktora",class:"absolute left-0 top-0 h-full w-full object-cover"},null,8,se)])):C("",!0),e("span",oe,[e("span",ae,v(t.$page.props.auth.user.role===2?"Doktor":"Stomatološka sestra"),1),e("span",re,v(t.$page.props.auth.user.name),1)])])])]}),content:a(()=>[o($,{href:t.route("profile.edit")},{default:a(()=>[h("Nalog")]),_:1},8,["href"]),o($,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>[h("Izloguj se")]),_:1},8,["href"])]),_:1})])]),e("div",ne,[e("button",{onClick:l[0]||(l[0]=d=>s.value=!s.value),class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"},[(i(),u("svg",ie,[e("path",{class:g({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",le,[o(m,{href:t.route("patients.index"),active:t.route().current("patients.index")},{default:a(()=>[h("Nalog")]),_:1},8,["href","active"])]),e("div",de,[e("div",ce,[e("div",ue,v(t.$page.props.auth.user.name),1),e("div",ge,v(t.$page.props.auth.user.email),1)]),e("div",fe,[o(m,{href:t.route("profile.edit")},{default:a(()=>[h("Nalog")]),_:1},8,["href"]),o(m,{href:t.route("logout"),method:"post",as:"button"},{default:a(()=>[h("Izloguj se")]),_:1},8,["href"])])])],2)]),t.$slots.header?(i(),u("header",he,[e("div",pe,[f(t.$slots,"header")])])):C("",!0),e("main",null,[e("div",ve,[o(D),f(t.$slots,"default")])])])]),o(Z),o(A)],64))}};export{be as _};
