const { HTTP_RESPONSE_BODY } = require('../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../utils/constants');
const { getTasks } = require('../task_repository');


exports.taskIdGetController = async(ctx)=>{
    console.log(ctx.params);
    try{
        const allTasks = await getTasks()
        const board = allTasks.filter(t=>t.boardId === ctx.params.boardId)
        const task = board.find(b=>b.id===ctx.params.taskId)
        console.log(task);
        ctx.status = HTTP_STATUS_CODES.OK
        ctx.body = task
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}