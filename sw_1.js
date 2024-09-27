self.addEventListener("install", e => {
    console.log("Installing sw");
	console.log("Caching resources..");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/manifest.json",
                "./src/images/xd.png"
            ]);
        })
    );
    console.log("Resources in cache. Done");
})

