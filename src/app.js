const Koa = require("koa");
const Router = require("koa-router");

const bodyParser = require("koa-bodyparser");
const serve = require("koa-static");
const { koaSwagger } = require("koa2-swagger-ui")
const config = require('config');

const port = config.get('server.port')
const app = new Koa();

app.use(serve('src/docs'));
app.use(koaSwagger({
  routePrefix: '/docs',
  hideTopbar: true,
  swaggerOptions: {
    url: `${config.get('server.baseUrl')}/docs.yml`,
  },
}));

const router = new Router();

app.use(bodyParser());

router.use("/", require("./url/router"));
app.use(router.middleware());

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

module.exports = app;