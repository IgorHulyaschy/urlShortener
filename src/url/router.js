const Router = require("koa-joi-router");

const { Controller } = require('./controller')

const requestRouter = new Router();

requestRouter.post('api/url/shorten', Controller.createUrl)
requestRouter.get(':urlCode', Controller.getUrl)

module.exports = requestRouter;