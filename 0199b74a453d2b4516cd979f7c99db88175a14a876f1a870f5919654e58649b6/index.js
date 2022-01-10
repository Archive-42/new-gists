async function updateArticles() {
  const articlesCache = await caches.open('articles');
  await articlesCache.add('/api/articles');
}

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-articles') {
	event.waitUntil(updateArticles());
  }
});
