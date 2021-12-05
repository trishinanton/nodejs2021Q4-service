const { getBoards } = require('../board_repository');

const { HTTP_RESPONSE_BODY } = require('../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../utils/constants');


exports.boardIdGetController = async(ctx)=>{
    try{
        const boards = await getBoards()
        console.log(boards);
        ctx.status = HTTP_STATUS_CODES.OK
        const findBoard = boards.find(u=>u.id===ctx.params.id)
        delete findBoard.password
        ctx.body = findBoard
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}