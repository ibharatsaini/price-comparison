const cacheName = 'priceComparison_v2.0.0'
var assets = [
    '/',
    '/stylesheets/ad.css',
    '/stylesheets/am.css',
    '/stylesheets/at.css',
    '/javascripts/a.js',
    '/images/arrow.png',
    '/images/if.gif',
    '/images/logo.png',
    '/images/icons/android/android-launchericon-512-512.png',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap',
    '/get-some-error-345435'
]
self.addEventListener('install', (e) => {
    // console.log('installed');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener('activate', (e) => {
    // console.log('activated');
    e.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(
                keys.filter(key => key !== cacheName).map(key => { caches.delete(key) })
            )
        })
    )
})
self.addEventListener('fetch', (event) => {
    // console.log(event);
    event.respondWith(
        caches.match(event.request)
            .then(res => {
                return res || fetch(event.request).catch(() => {
                    if (event.request.url.indexof('.ejs') > -1) {
                        caches.match('/get-some-error-345435')
                    }
                })
            })
            .catch(() => {
                if (event.request.url.indexof('.ejs') > -1) {
                    caches.match('/get-some-error-345435')
                }
            })
    )
})