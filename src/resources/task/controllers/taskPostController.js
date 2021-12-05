const Task = require('../task.model');
const { addTask } = require('../task_repository');
const { HTTP_STATUS_CODES } = require('../../../utils/constants');
const { HTTP_RESPONSE_BODY } = require('../../../utils/constants');

exports.taskPostController = async(ctx)=>{
    try{
        console.log(ctx.params.boardId);
        const task = new Task({boardId:ctx.params.boardId})
        await addTask(task)
        ctx.status = HTTP_STATUS_CODES.CREATE
        ctx.body = task
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR
    }
}