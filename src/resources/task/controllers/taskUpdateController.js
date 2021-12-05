const { updateTask } = require('../task_repository');
const { getTasks } = require('../task_repository');
const { HTTP_RESPONSE_BODY } = require('../../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../../utils/constants');

exports.taskUpdateController = async(ctx)=>{
    try{
        const tasks = await getTasks()
        const index = tasks.findIndex(u=>u.id===ctx.params.taskId)
        const upTask =  updateTask(ctx.request.body,index,ctx.params.taskId)
        ctx.status = 200
        ctx.body = upTask
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}