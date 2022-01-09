import { Context } from 'koa';
import { TaskType } from '../../users/user_repository';
import { Task } from '../task.model';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';
import { addTask } from '../task_repository';

/**
 * Create task
 * @param ctx first term Context type
 * @returns undefined, but response created task and status code
 */
export const taskPostController = async(ctx:Context)=>{
    try{
        const {boardId} = ctx.params;
        const taskRequest = ctx.request.body as TaskType;
        taskRequest.boardId = boardId;
        // @ts-ignore
            const task = new Task( taskRequest );
            ctx.status = HTTP_STATUS_CODES.CREATE
            ctx.body = addTask(task)

    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR
    }
}