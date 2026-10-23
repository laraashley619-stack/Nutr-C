// nutríC · service worker. Sube VERSION en cada publicación para que los usuarios reciban la actualización.
const VERSION='nutric-1.1.0',CORE=["./", "index.html", "app.css", "app.js", "manifest.webmanifest", "data/smae5.json", "data/micronutrientes.json", "data/precios_mx.json", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"],CDN=/^https:\/\/(cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com)\//;
self.addEventListener('install',e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE))));
self.addEventListener('message',e=>{if(e.data&&e.data.type==='SKIP')self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('nutric-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
// Librerías externas (PDF, Excel): se guardan la primera vez que se usan con conexión.
if(CDN.test(r.url)){e.respondWith(caches.open('cdn-libs').then(async c=>{const h=await c.match(r);if(h)return h;try{const n=await fetch(r);if(n&&(n.ok||n.type==='opaque'))c.put(r,n.clone());return n}catch{return Response.error()}}));return}
if(new URL(r.url).origin!==location.origin)return;
// Archivos propios: primero la copia local (funciona sin conexión) y se actualiza en segundo plano.
e.respondWith((async()=>{const c=await caches.open(VERSION),h=await c.match(r,{ignoreSearch:true}),net=fetch(r).then(n=>{if(n&&n.ok)c.put(r,n.clone());return n}).catch(()=>null);
if(h){e.waitUntil(net);return h}const n=await net;if(n)return n;
if(r.mode==='navigate'){const i=await c.match('index.html')||await c.match('./');if(i)return i}
return new Response('Sin conexión y sin copia guardada.',{status:503})})())});
