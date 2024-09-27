self.addEventListener("install", e => {
    console.log("Installing sw");
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

