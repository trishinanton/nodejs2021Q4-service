const { deleteTask } = require('../../task/task_repository');
const { getTasks } = require('../../task/task_repository');
const { deleteBoard } = require('../board_repository');
const { getBoards } = require('../board_repository');

const { HTTP_RESPONSE_BODY } = require('../../../utils/constants');



exports.boardDeleteController = async(ctx)=>{
    try{
        const board = await getBoards()
        const index = board.findIndex(u=>u.id===ctx.params.id)

        const tasks = await getTasks()
        const indexTask = tasks.findIndex(t=>t.boardId ===ctx.params.id)
        await deleteTask(indexTask)

        await deleteBoard(index)
        ctx.response.status = 204;
        ctx.body = HTTP_RESPONSE_BODY.BOARD_SUCCESS_DELETE
    }catch (error){
        console.error('err', error);
        ctx.response.status = 404;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}