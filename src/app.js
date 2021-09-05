const Koa = require('koa');
const Router = require('koa-router');

const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const { koaSwagger } = require('koa2-swagger-ui');
const config = require('config');
const path = require('path');
const staticCache = require('koa-static-cache');

const app = new Koa();

app.use(serve('src/docs'));
app.use(
  koaSwagger({
    routePrefix: '/docs',
    hideTopbar: true,
    swaggerOptions: {
      url: `${config.get('server.baseUrl')}/docs.yml`,
    },
  }),
);

const router = new Router();

app.use(bodyParser());
app.use(
  staticCache(path.join(__dirname, 'public'), {
    maxAge: 365 * 24 * 60 * 60, // Add these files to caches for a year
  }),
);
router.use('/', require('./url/router'));

app.use(router.middleware());

module.exports = app;
