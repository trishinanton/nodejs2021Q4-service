import { Context } from 'koa';
import { BoardsType } from '../../users/user_repository';
import { getBoards } from '../board_repository';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';

/**
 * Get board by id
 * @param ctx first term Context type
 * @returns undefined, but response fined board
 */
export const boardIdGetController = async(ctx:Context)=>{
    try{
        const boards:BoardsType = await getBoards()
        const findBoard = boards.find(u=>u.id===ctx.params.id)
        if(findBoard){
            ctx.body = findBoard
        }else{
            ctx.status = 404;
        }

    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}