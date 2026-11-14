// StudyHub Lightweight PWA Service Worker (Network-First Pass-Through — 零快取污染、保證即時更新)
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // 直接走即時網路，確保題庫、排行榜、認證與安全腳本永遠為最新版本
  return;
});

