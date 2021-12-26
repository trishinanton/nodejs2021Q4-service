import { Context, Next } from 'koa';
import { prettyPrint } from './printQuery';
import { log4js } from './config';
import  obj  from '../common/config';

const logger = async (ctx: Context | null, next: Next | null):Promise<void | log4js.Logger> => {

  const allLogger = log4js.getLogger('info');
  const errorLogger = log4js.getLogger('errors');

  if (ctx && next) {
    await next();

    const query = prettyPrint(ctx.query);
    const body = prettyPrint(ctx.body);
    const status = ctx.res.statusCode;

    const output = `${ctx.req.method}  ${ctx.url}  ${query}  ${body}  ${status}`;

    if (status >= 500) {
      errorLogger.error(output);
    }

    else if (status >= 400) {

      if (Number(obj.LOG_LEVEL)>0) {
        allLogger.warn(output)
      }
    }
    else if (status >= 200) {

      if (Number(obj.LOG_LEVEL)>1) {
        allLogger.debug(output)
      }
    }

    else if (Number(obj.LOG_LEVEL)>1) {
      allLogger.info(output)
    }
  }
  else {
    errorLogger.error('Internal error');
  }
}


export {logger};