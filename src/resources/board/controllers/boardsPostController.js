const uuid = require('uuid');
const Board = require('../board.model');
const { addBoard } = require('../board_repository');
// const { HTTP_RESPONSE_TYPE } = require('../../../utils/constants');

const { HTTP_RESPONSE_BODY } = require('../../../utils/constants');
const { HTTP_STATUS_CODES } = require('../../../utils/constants');


exports.boardsPostController = async(ctx)=>{
    try{
        const newBoard = {...ctx.request.body, columns:[...ctx.request.body.columns].map(c=>({...c,id:uuid.v1()}))}
        const board = new Board(newBoard)
        await addBoard(board)
        ctx.status = HTTP_STATUS_CODES.CREATE
        ctx.body = board
        // ctx.type = HTTP_RESPONSE_TYPE.RESPONSE
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR
    }
}