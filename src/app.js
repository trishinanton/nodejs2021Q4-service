const Koa = require('koa');
const koaBody = require('koa-body');
const path = require('path');
// const json = require('koa-json');
const swagger = require("swagger2");
const { ui } = require("swagger2-koa");
const Router = require('koa-router');
const router = require('./resources/users/user.router');
const routerBoard = require('./resources/board/board.router');
const routerTask = require('./resources/task/task.router');

const app = new Koa();

const rootRouter = new Router();
rootRouter.get('/', ctx => {
  ctx.body = "Service is running!";
})

const swaggerDocument = swagger.loadDocumentSync(path.join(__dirname, '../doc/api.yaml'));

// app.use(json());

app
  .use(ui(swaggerDocument, "/swagger"))

app.use(koaBody())
  .use(rootRouter.routes())
  .use(rootRouter.allowedMethods())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(routerBoard.routes())
  .use(routerBoard.allowedMethods())
  .use(routerTask.routes())
  .use(routerTask.allowedMethods())

module.exports = app;
