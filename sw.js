self.addEventListener("install", e => {
    console.log("Caching resources..");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./manifest.json",
                "./xd.png"
            ]);
        })
    );
    console.log("Resources in cache. Done");
})

self.addEventListener("fetch", e => {
    console.log('intercepting fecth request for:', e.request.url);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});
