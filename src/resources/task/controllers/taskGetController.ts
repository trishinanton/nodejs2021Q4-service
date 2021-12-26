import { Context } from 'koa';
import { getTasks } from '../task_repository';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';

/**
 * Get all task
 * @param ctx first term Context type
 * @returns undefined, but response fined tasks and status 200 or 500
 */
export  const taskGetController = async(ctx:Context)=>{
    try{
        const allTasks = getTasks(ctx.params.boardId)
        ctx.status = HTTP_STATUS_CODES.OK
        ctx.body = allTasks
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}