const { HTTP_RESPONSE_BODY } = require('../../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../../utils/constants');
const { deleteTask } = require('../task_repository');
const { getTasks } = require('../task_repository');


exports.taskDeleteController = async(ctx)=>{
    try{
        const tasks = await getTasks()
        const index = tasks.findIndex(u=>u.id===ctx.params.taskId)

        if (index<=0){
            ctx.status = 404
            ctx.body = HTTP_RESPONSE_BODY.TASK_NOT_FOUND
        }else{
            await deleteTask(index)
            ctx.status = HTTP_STATUS_CODES.DELETE
            ctx.body = HTTP_RESPONSE_BODY.BOARD_SUCCESS_DELETE
        }

    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}