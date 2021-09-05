const Router = require('koa-joi-router');
const cache = require('../middlewares/cache');
const { Controller } = require('./controller');

const requestRouter = new Router();

requestRouter.post('api/url/shorten', Controller.createUrl);
// requestRouter.get(':urlCode', Controller.getUrl);
requestRouter.get(':urlCode', cache(300), Controller.getUrl);

module.exports = requestRouter;
