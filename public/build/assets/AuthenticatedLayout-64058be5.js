import{q as B,s as D,h as m,p as L,o as i,f as h,b as e,r as g,i as w,S as $,a as o,w as r,n as c,I as M,c as b,u as x,j as _,d as u,t as v,g as C,F as N}from"./app-5981af89.js";import j from"./Tabs-475327d8.js";import z from"./Notifications-09b3c9be.js";const E={class:"relative"},V={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white dark:bg-gray-700"}},setup(a){const s=a,t=f=>{n.value&&f.key==="Escape"&&(n.value=!1)};B(()=>document.addEventListener("keydown",t)),D(()=>document.removeEventListener("keydown",t));const d=m(()=>({48:"w-48"})[s.width.toString()]),p=m(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),n=L(!1);return(f,l)=>(i(),h("div",E,[e("div",{onClick:l[0]||(l[0]=k=>n.value=!n.value)},[g(f.$slots,"trigger")]),w(e("div",{class:"fixed inset-0 z-40",onClick:l[1]||(l[1]=k=>n.value=!1)},null,512),[[$,n.value]]),o(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:r(()=>[w(e("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[d.value,p.value]]),style:{display:"none"},onClick:l[2]||(l[2]=k=>n.value=!1)},[e("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",a.contentClasses])},[g(f.$slots,"content")],2)],2),[[$,n.value]])]),_:3})]))}},S={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(a){return(s,t)=>(i(),b(x(_),{href:a.href,class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:r(()=>[g(s.$slots,"default")]),_:3},8,["href"]))}},y={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(a){const s=a,t=m(()=>s.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-left text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(d,p)=>(i(),b(x(_),{href:a.href,class:c(t.value)},{default:r(()=>[g(d.$slots,"default")]),_:3},8,["href","class"]))}},q={class:"min-h-screen bg-gray-50 dark:bg-gray-900"},F={class:"border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800"},I={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},O={class:"flex h-16 justify-between"},T={class:"flex"},A={class:"flex shrink-0 items-center"},P=e("span",{class:"text-xl uppercase font-bold"},"Dentister",-1),R={class:"hidden sm:ml-6 sm:flex sm:items-center"},U={class:"relative ml-3"},G={class:"inline-flex rounded-md"},H={type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"},J=e("svg",{class:"-mr-0.5 ml-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),K={class:"-mr-2 flex items-center sm:hidden"},Q={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},W={class:"space-y-1 pb-3 pt-2"},X={class:"border-t border-gray-200 pb-1 pt-4 dark:border-gray-600"},Y={class:"px-4"},Z={class:"text-base font-medium text-gray-800 dark:text-gray-200"},ee={class:"text-sm font-medium text-gray-500"},te={class:"mt-3 space-y-1"},se={key:0,class:"bg-white shadow dark:bg-gray-800"},re={class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"},ae={class:"py-12"},oe={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},le={__name:"AuthenticatedLayout",props:{type:{type:String,default:()=>"default"}},setup(a){const s=L(!1);return(t,d)=>(i(),h(N,null,[e("div",null,[e("div",q,[e("nav",F,[e("div",I,[e("div",O,[e("div",T,[e("div",A,[o(x(_),{href:t.route("dashboard")},{default:r(()=>[P]),_:1},8,["href"])])]),e("div",R,[e("div",U,[o(V,{align:"right",width:"48"},{trigger:r(()=>[e("span",G,[e("button",H,[u(v(t.$page.props.auth.user.name)+" ",1),J])])]),content:r(()=>[o(S,{href:t.route("profile.edit")},{default:r(()=>[u("Nalog")]),_:1},8,["href"]),o(S,{href:t.route("logout"),method:"post",as:"button"},{default:r(()=>[u("Izloguj se")]),_:1},8,["href"])]),_:1})])]),e("div",K,[e("button",{onClick:d[0]||(d[0]=p=>s.value=!s.value),class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"},[(i(),h("svg",Q,[e("path",{class:c({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:c({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:c([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",W,[o(y,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[u("Dashboard")]),_:1},8,["href","active"])]),e("div",X,[e("div",Y,[e("div",Z,v(t.$page.props.auth.user.name),1),e("div",ee,v(t.$page.props.auth.user.email),1)]),e("div",te,[o(y,{href:t.route("profile.edit")},{default:r(()=>[u("Profile")]),_:1},8,["href"]),o(y,{href:t.route("logout"),method:"post",as:"button"},{default:r(()=>[u("Log Out")]),_:1},8,["href"])])])],2)]),t.$slots.header?(i(),h("header",se,[e("div",re,[g(t.$slots,"header")])])):C("",!0),e("main",null,[e("div",ae,[e("div",oe,[a.type==="dashboard"?(i(),b(j,{key:0})):C("",!0),g(t.$slots,"default")])])])])]),o(z)],64))}};export{le as _};
