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
import { logger } from './logger/middleWair';
import bodyParser from 'koa-body';

export const app = new Koa();
const rootRouter = new Router();

rootRouter.get('/', (ctx:Context) => {
  ctx.body = "Service is running!";
})

const accessLogStream = createWriteStream(__dirname + '/access.log')


app.use(bodyParser())
  .use( ( ctx: Koa.Context, next:Koa.Next ) => {
      logger(ctx, next)
    }
  )
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
    logger(null, null);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    logger(null, null);
    process.exit(1);
  });


