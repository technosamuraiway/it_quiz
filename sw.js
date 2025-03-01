const staticCacheName = 'static-cache-v1'

const assetsUrls = ['index.html']

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetsUrls)
})

self.addEventListener('activate', event => {
  console.log('[SW]:activate')
})

self.addEventListener('fetch', event => {
  console.log('Fetch', event.request.url)
})
