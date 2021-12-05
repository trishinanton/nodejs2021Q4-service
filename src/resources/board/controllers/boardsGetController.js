const { getBoards } = require('../board_repository');

const { HTTP_RESPONSE_BODY } = require('../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../utils/constants');


exports.boardsGetController = async(ctx)=>{
    try{
        const boards = await getBoards()
        ctx.status = HTTP_STATUS_CODES.OK
        ctx.body = boards
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}