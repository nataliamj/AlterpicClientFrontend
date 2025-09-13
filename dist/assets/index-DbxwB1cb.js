var u=Object.defineProperty;var d=(o,e,r)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var l=(o,e,r)=>d(o,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const f="https://your-mockapi-endpoint.com";class g{static async login(e,r){const n=await fetch(`${f}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:r})});if(!n.ok)throw new Error("Error en login");return n.json()}static async logout(){}}class c{static async login(e,r){console.log("➡️ Enviando datos al backend:",{email:e,password:r});const n=await g.login(e,r);return this.user=n,localStorage.setItem("user",JSON.stringify(n)),console.log("✅ Respuesta del backend:",n),n}static logout(){this.user=null,localStorage.removeItem("user")}static getUser(){if(!this.user){const e=localStorage.getItem("user");this.user=e?JSON.parse(e):null}return this.user}}l(c,"user",null);function p(){const o=document.createElement("div");o.innerHTML=`
        <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white rounded-2xl shadow-xl p-8 w-96">
            <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
            <form id="login-form" class="flex flex-col gap-4">
            <input 
                id="email"
                type="email" 
                placeholder="Email" 
                class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
            />
            <input 
                id="password"
                type="password" 
                placeholder="Password" 
                class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
            />
            <button 
                type="submit" 
                class="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Login
            </button>
            </form>
        </div>
        </div>
    `,document.body.appendChild(o);const e=o.querySelector("#login-form"),r=e.querySelector("#email"),n=e.querySelector("#password");e.onsubmit=async t=>{t.preventDefault();const s=r.value,i=n.value;try{await c.login(s,i),alert("Login exitoso ✅")}catch(a){alert("Error ❌: "+a.message)}}}function m(){p()}class y{static start(){console.log("Iniciando aplicación..."),m()}}document.addEventListener("DOMContentLoaded",()=>{y.start()});
