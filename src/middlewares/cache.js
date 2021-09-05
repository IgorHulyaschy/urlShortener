const NodeCache = require('node-cache');

const cache = new NodeCache();

module.exports = (duration) => async (ctx, next) => {
  if (ctx.method !== 'GET') {
    console.error('Cannot cache non-GET methods!');
    return next();
  }
  const key = ctx.originalUrl;
  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    console.log(`Cache hit for ${key}`);
    ctx.redirect(cachedResponse);
  } else {
    console.log(`Cache miss for ${key}`);
    await next();
    cache.set(key, ctx.body.responseUrl.longUrl, duration);
    ctx.redirect(ctx.body.responseUrl.longUrl);
  }
};
