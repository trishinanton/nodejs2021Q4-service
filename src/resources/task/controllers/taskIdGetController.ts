import { Context } from 'koa';
import { TasksType } from '../../users/user_repository';
import { tasksArray } from '../task.memory';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';

/**
 * Get task by id
 * @param ctx first term Context type
 * @returns undefined, but response fined task
 */
export const taskIdGetController = async(ctx:Context)=>{
    try{
        const tasks:TasksType = tasksArray
        const task = tasks.find(b=>b.id===ctx.params.taskId)
        if(task){
            ctx.status = HTTP_STATUS_CODES.OK
            ctx.body = task
        }else{
            ctx.status = 404;
        }

    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}