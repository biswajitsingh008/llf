const C='llf-v6';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all(['./','index.html','manifest.json','bg.jpg'].map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>0)))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
// pages, scripts and the manifest are always fetched fresh from the server (bypassing the browser's 10-minute GitHub Pages cache); the saved copy is used only when offline
const fresh=u=>/\/$|\.(html|js|json)$/.test(new URL(u).pathname);
self.addEventListener('fetch',e=>{if(e.request.method=='GET'&&e.request.url.startsWith(location.origin))e.respondWith((fresh(e.request.url)?fetch(e.request.url,{cache:'no-store'}):fetch(e.request)).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
