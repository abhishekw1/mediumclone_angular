import{A as w,K as E,M as i,N as a,O as f,P as A,V as D,_ as x,a as d,d as R,e as T,eb as N,m as l,mb as _,nb as $,o as v,q as F,r as p,rb as k,s as j,tb as h,v as M,w as O,x as b,y as C,z as m}from"./chunk-2WJLTE3U.js";var L={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},g="__@ngrx/effects_create__";function xt(t,e={}){let r=e.functional?t:t(),n=d(d({},L),e);return Object.defineProperty(r,g,{value:n}),r}function K(t){return Object.getOwnPropertyNames(t).filter(n=>t[n]&&t[n].hasOwnProperty(g)?t[n][g].hasOwnProperty("dispatch"):!1).map(n=>{let o=t[n][g];return d({propertyName:n},o)})}function Y(t){return K(t)}function P(t){return Object.getPrototypeOf(t)}function J(t){return!!t.constructor&&t.constructor.name!=="Object"&&t.constructor.name!=="Function"}function U(t){return typeof t=="function"}function X(t){return t.filter(U)}function Z(t,e,r){let n=P(t),u=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,s=Y(t).map(({propertyName:c,dispatch:H,useEffectsErrorHandler:B})=>{let S=typeof t[c]=="function"?t[c]():t[c],I=B?r(S,e):S;return H===!1?I.pipe(O()):I.pipe(w()).pipe(l(z=>({effect:t[c],notification:z,propertyName:c,sourceName:u,sourceInstance:t})))});return F(...s)}var q=10;function V(t,e,r=q){return t.pipe(j(n=>(e&&e.handleError(n),r<=1?t:V(t,e,r-1))))}var Nt=(()=>{let e=class e extends R{constructor(n){super(),n&&(this.source=n)}lift(n){let o=new e;return o.source=this,o.operator=n,o}};e.\u0275fac=function(o){return new(o||e)(a(k))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function _t(...t){return p(e=>t.some(r=>typeof r=="string"?r===e.type:r.type===e.type))}var $t=new i("@ngrx/effects Internal Root Guard"),kt=new i("@ngrx/effects User Provided Effects"),Pt=new i("@ngrx/effects Internal Root Effects"),Ut=new i("@ngrx/effects Internal Root Effects Instances"),Vt=new i("@ngrx/effects Internal Feature Effects"),Gt=new i("@ngrx/effects Internal Feature Effects Instance Groups"),Q=new i("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>V}),W="@ngrx/effects/init",tt=N(W);function et(t,e){if(t.notification.kind==="N"){let r=t.notification.value;!nt(r)&&e.handleError(new Error(`Effect ${rt(t)} dispatched an invalid action: ${ot(r)}`))}}function nt(t){return typeof t!="function"&&t&&t.type&&typeof t.type=="string"}function rt({propertyName:t,sourceInstance:e,sourceName:r}){let n=typeof e[t]=="function";return!!r?`"${r}.${String(t)}${n?"()":""}"`:`"${String(t)}()"`}function ot(t){try{return JSON.stringify(t)}catch{return t}}var st="ngrxOnIdentifyEffects";function it(t){return y(t,st)}var ct="ngrxOnRunEffects";function ft(t){return y(t,ct)}var ut="ngrxOnInitEffects";function at(t){return y(t,ut)}function y(t,e){return t&&e in t&&typeof t[e]=="function"}var G=(()=>{let e=class e extends T{constructor(n,o){super(),this.errorHandler=n,this.effectsErrorHandler=o}addEffects(n){this.next(n)}toActions(){return this.pipe(m(n=>J(n)?P(n):n),v(n=>n.pipe(m(dt))),v(n=>{let o=n.pipe(C(s=>lt(this.errorHandler,this.effectsErrorHandler)(s)),l(s=>(et(s,this.errorHandler),s.notification)),p(s=>s.kind==="N"&&s.value!=null),b()),u=n.pipe(M(1),p(at),l(s=>s.ngrxOnInitEffects()));return F(o,u)}))}};e.\u0275fac=function(o){return new(o||e)(a(x),a(Q))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function dt(t){return it(t)?t.ngrxOnIdentifyEffects():""}function lt(t,e){return r=>{let n=Z(r,t,e);return ft(r)?r.ngrxOnRunEffects(n):n}}var pt=(()=>{let e=class e{get isStarted(){return!!this.effectsSubscription}constructor(n,o){this.effectSources=n,this.store=o,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};e.\u0275fac=function(o){return new(o||e)(a(G),a(h))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Ht(...t){let e=t.flat(),r=X(e);return D([r,{provide:A,multi:!0,useValue:()=>{f(_),f($,{optional:!0});let n=f(pt),o=f(G),u=!n.isStarted;u&&n.start();for(let s of e){let c=U(s)?f(s):s;o.addEffects(c)}u&&f(h).dispatch(tt())}}])}export{xt as a,Nt as b,_t as c,Ht as d};
