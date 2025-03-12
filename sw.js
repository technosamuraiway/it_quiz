/*
 * настройка serviceWorker
 * https://www.youtube.com/watch?v=ifroMW_F4Sc
 *
 * настройка  PWA
 * https://www.youtube.com/watch?v=Iz_r35tSuPY
 * */

/* при новой версии приложения - поменять staticCacheName - например на static-cache-v2 */
const CACHE_VERSION = 'v1'
const staticCacheName = `static-cache-${CACHE_VERSION}`
const dynamicCacheName = `dynamic-cache-${CACHE_VERSION}`

const assetsUrls = ['/', '/index.html', '/js/app.js', '/css/styles.css', '/offline.html']

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetsUrls)
})

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter(name => name !== staticCacheName)
      .filter(name => name !== dynamicCacheName)
      .map(name => caches.delete(name))
  )
})

self.addEventListener('fetch', event => {
  const { request } = event

  const url = new URL(request.url)

  if (url.origin === location.origin) {
    // вариант для кеширования статических страниц
    event.respondWith(cacheFirst(event.request))
  } else {
    // вариант для кеширования динамических запросов
    event.respondWith(networkFirst(event.request))
  }
})

async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? (await fetch(request))
}

async function networkFirst(request) {
  if (request.method !== 'GET') {
    return fetch(request)
  }

  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    if (response.ok) {
      await cache.put(request, response.clone())
    }
    return response
  } catch (error) {
    return (await cache.match(request)) ?? (await caches.match('/offline.html'))
  }
}
