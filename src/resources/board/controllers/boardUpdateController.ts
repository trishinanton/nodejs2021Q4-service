import { Context } from 'koa';
import { BoardsType, BoardType } from '../../users/user_repository';
import { getBoards, updateBoard } from '../board_repository';
import { HTTP_RESPONSE_BODY, HTTP_STATUS_CODES } from '../../../utils/constants';
import { Board } from '../board.model';

/**
 * Update board by id
 * @param ctx first term Context type
 * @returns undefined, but response updated board and status code
 */
export const boardUpdateController = async(ctx:Context)=>{
    try{
        const boards:BoardsType = await getBoards()
        const board:BoardType | undefined = boards.find(u=>u.id===ctx.params.id)
        if(board){
            const upBoard = updateBoard(board,ctx.request.body)
            ctx.status = HTTP_STATUS_CODES.OK
            ctx.body = new Board(upBoard)
        }

    }catch (error){
        console.error('err', error);
        ctx.status = HTTP_STATUS_CODES.INTERVAL_SERVER_ERROR;
        ctx.body = HTTP_RESPONSE_BODY.INTERVAL_SERVER_ERROR;
    }
}