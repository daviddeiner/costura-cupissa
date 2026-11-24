// No se guardan pedidos, sesiones ni datos de clientes en Cache Storage.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&e.request.mode==='navigate'&&new URL(e.request.url).origin===self.location.origin)e.respondWith(fetch(e.request).catch(()=>new Response('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Costura CUPISSA</title><h1>Sin conexión</h1><p>Conéctate a internet para consultar tus pedidos.</p><button onclick="location.reload()">Reintentar</button></html>',{headers:{'Content-Type':'text/html; charset=utf-8'}})));});
