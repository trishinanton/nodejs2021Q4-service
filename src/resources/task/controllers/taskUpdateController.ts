import { Context } from 'koa';
import { TasksType, TaskType } from '../../users/user_repository';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';
import { tasksArray } from '../task.memory';
import { updateTask } from '../task_repository';
import { Task } from '../task.model';

/**
 * Update task by id
 * @param ctx first term Context type
 * @returns undefined, but response updated board and status code
 */
export const taskUpdateController = async(ctx:Context)=>{
    try{
        const tasks:TasksType = tasksArray
        const task = tasks.find(u=>u.id===ctx.params.taskId)
        if (task){
            const upTask:TaskType =  updateTask(task,ctx.request.body)
            ctx.status = 200
            // @ts-ignore
            ctx.body = new Task(upTask)
        }

    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}