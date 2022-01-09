import { Context } from 'koa';
import { BoardsType } from '../../users/user_repository';
import { HTTP_RESPONSE_BODY } from '../../../utils/constants';
import { deleteBoard, getBoards } from '../board_repository';

/**
 * Delete board
 * @param ctx first term Context type
 * @returns undefined, but response status cod 204 or 404 or 500
 */
export const boardDeleteController = async(ctx:Context)=>{
    try{
        const boards:BoardsType = await getBoards()
        const board = boards.find(u=>u.id===ctx.params.id)
        if (board) {
            deleteBoard(board)
            ctx.response.status = 204;
        }else{
            ctx.status = 404;
        }

    }catch (error){
        console.error('err', error);
        ctx.response.status = 500;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}