import{o as s}from"./hidden-c9556a5a.js";import{p as i,y as x,H as g,h as f}from"./app-c9b883a8.js";function y(e){throw new Error("Unexpected object: "+e)}var I=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(I||{});function S(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),l=r??-1,o=(()=>{switch(e.focus){case 0:return n.findIndex(u=>!t.resolveDisabled(u));case 1:{let u=n.slice().reverse().findIndex((a,h,b)=>l!==-1&&b.length-h-1>=l?!1:!t.resolveDisabled(a));return u===-1?u:n.length-1-u}case 2:return n.findIndex((u,a)=>a<=l?!1:!t.resolveDisabled(u));case 3:{let u=n.slice().reverse().findIndex(a=>!t.resolveDisabled(a));return u===-1?u:n.length-1-u}case 4:return n.findIndex(u=>t.resolveId(u)===e.id);case 5:return null;default:y(e)}})();return o===-1?r:o}function c(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function A(e,t){let n=i(c(e.value.type,e.value.as));return x(()=>{n.value=c(e.value.type,e.value.as)}),g(()=>{var r;n.value||s(t)&&s(t)instanceof HTMLButtonElement&&!((r=s(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}function m(e={},t=null,n=[]){for(let[r,l]of Object.entries(e))p(n,d(t,r),l);return n}function d(e,t){return e?e+"["+t+"]":t}function p(e,t,n){if(Array.isArray(n))for(let[r,l]of n.entries())p(e,d(t,r.toString()),l);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):m(n,t,e)}function L(e,t,n){let r=i(n==null?void 0:n.value),l=f(()=>e.value!==void 0);return[f(()=>l.value?e.value:r.value),function(o){return l.value||(r.value=o),t==null?void 0:t(o)}]}function v(e){return[e.screenX,e.screenY]}function N(){let e=i([-1,-1]);return{wasMoved(t){let n=v(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=v(t)}}}export{I as a,A as b,L as d,m as e,N as u,S as x};