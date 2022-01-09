import { Context } from 'koa';
import { getBoards } from '../board_repository';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';

/**
 * Get all board
 * @param ctx first term Context type
 * @returns undefined, but response fined boards and status 200 or 500
 */
export const boardsGetController = async(ctx:Context)=>{
    try{
        const boards = await getBoards()
        ctx.status = 200
        ctx.body = boards
    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}