import { Context } from "koa";
import { TasksType } from '../../users/user_repository';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';
import { tasksArray } from '../task.memory';
import { deleteTask } from '../task_repository';

/**
 * Delete task
 * @param ctx first term Context type
 * @returns undefined, but response status cod 204 or 404 or 500
 */
export const taskDeleteController = async(ctx: Context)=>{
    try{
        const tasks:TasksType = tasksArray
        const task = tasks.find(u=>u.id===ctx.params.taskId)
        if(task){
            await deleteTask(task)
            ctx.status = HTTP_STATUS_CODES.DELETE
        }else{
            ctx.status = 404;
        }

    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}