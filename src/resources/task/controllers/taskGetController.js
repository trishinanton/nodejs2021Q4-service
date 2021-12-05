const { getTasks } = require('../task_repository');
const { HTTP_RESPONSE_BODY } = require('../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../utils/constants');


exports.taskGetController = async(ctx)=>{
    try{
        console.log(ctx.params.boardId);
        const allTasks = await getTasks()
        const task = allTasks.filter(t=>t.boardId === ctx.params.boardId)
        ctx.status = HTTP_STATUS_CODES.OK
        ctx.body = task
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}