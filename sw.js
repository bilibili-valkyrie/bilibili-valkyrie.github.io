if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-legacy.812042e9.js",revision:"70a0b1da440b2a0988ad4b6e44531b26"},{url:"assets/index.38bd2945.css",revision:"a447d0cf23e640773c2a5f9e7c9adccd"},{url:"assets/index.c9ba3026.js",revision:"5f3c20f88ae7b00af78b2d517ce40e5b"},{url:"assets/polyfills-legacy.3fc6b691.js",revision:"6f6760918ece1ceb02a77cca19f8bb9a"},{url:"assets/vendor-legacy.5b9f6b96.js",revision:"38a9128f3db7484e6e83fa789d6eef86"},{url:"assets/vendor.b424f8be.js",revision:"794133fcccaa4a8fc0e3228dcf3e5c10"},{url:"index.html",revision:"d7a6cfbb79ad2c6ba73089c27fa742ed"},{url:"manifest.webmanifest",revision:"0ea38775bdef7081a654136b25474f2f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
