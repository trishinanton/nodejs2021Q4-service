import Koa, { Context} from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';
import log4js from "log4js";
import process from 'process';
import { routerTask } from './resources/task/task.router';
import { routerBoard } from './resources/board/board.router';
import { router } from './resources/users/user.router';
import { createWriteStream } from 'fs';
import path from 'path';

export const app = new Koa();
const rootRouter = new Router();

rootRouter.get('/', (ctx:Context) => {
  ctx.body = "Service is running!";
})

const accessLogStream = createWriteStream(__dirname + '/access.log')


let logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Some debug messages");



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


