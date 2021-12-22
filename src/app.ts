import Koa, { Context} from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';
import logger from 'koa-logger';
import process from 'process';
import { routerTask } from './resources/task/task.router';
import { routerBoard } from './resources/board/board.router';
import { router } from './resources/users/user.router';
import { createWriteStream } from 'fs';
import morgan from 'koa-morgan';
import path from 'path';

export const app = new Koa();
const rootRouter = new Router();

rootRouter.get('/', (ctx:Context) => {
  ctx.body = "Service is running!";
})

// const swaggerDocument = swagger.loadDocumentSync(path.join(__dirname, '../doc/api.yaml'));
// app
//   .use(ui(swaggerDocument, "/swagger"))

// app.use(logger((str, args) => {
//   console.log(str, args);
// }))
const accessLogStream = createWriteStream(__dirname + '/access.log')

// app.use(logger({
//   transporter: (str, args) => {
//     console.log(str, args);
//   }
// }))

// setup the logger
// app.use(morgan('tiny', { stream: accessLogStream }))

// log only 4xx and 5xx responses to console
app.use(morgan('tiny', {
  skip: function (req, res) { return res.statusCode < 400 }
}))

// log all requests to access.log
app.use(morgan('tiny', {
  stream: createWriteStream(path.join(__dirname, 'access.log'))
}))

app.use(koaBody())
  .use(rootRouter.routes())
  .use(rootRouter.allowedMethods())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(routerBoard.routes())
  .use(routerBoard.allowedMethods())
  .use(routerTask.routes())
  .use(routerTask.allowedMethods())

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });


