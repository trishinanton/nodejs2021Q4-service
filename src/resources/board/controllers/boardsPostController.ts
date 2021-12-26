import { Context } from 'koa';
import { v1 as uuid } from 'uuid';
import { ColumnsType } from '../../users/user_repository';
import { Board } from '../board.model';
import { addBoard } from '../board_repository';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';

/**
 * Create board
 * @param ctx first term Context type
 * @returns undefined, but response created board and status code
 */
export const boardsPostController = async(ctx:Context)=>{
    try{
        const reqColumns:ColumnsType = ctx.request.body.columns
        const newBoard = {...ctx.request.body, columns:[...reqColumns ].map(c=>({...c,id:uuid()}))}
        const board = new Board(newBoard)
         const upBoard = addBoard(board)
        ctx.status = HTTP_STATUS_CODES.CREATE
        ctx.body = upBoard
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR
    }
}