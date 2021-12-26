import { BoardType, ColumnsType, TasksType } from '../users/user_repository';
import { boardsArray } from './board.memory';
import { deleteTask, getTasks } from '../task/task_repository';

type OptionsType = {
    title: string,
    columns: ColumnsType,
}
/**
 * This function return array boards
 * @returns Array boards
 */
export const getBoards = ()=>boardsArray

/**
 * This function add board
 * @param board first term BoardType
 * @returns board added board
 */
export const addBoard = (board:BoardType)=>{
    boardsArray.push(board)
    return board
}

/**
 * This function update board
 * @param foundBoard first term BoardType
 * @param options second term OptionsType
 * @returns updatedBoard new board
 */
export const updateBoard =  (foundBoard:BoardType, options:OptionsType)=>{
    const boardIndex = boardsArray.indexOf(foundBoard);
    const updatedBoard = {
        "id": foundBoard.id,
        "title": options.title,
        "columns": options.columns,
    }

    boardsArray[boardIndex] =updatedBoard;
    return updatedBoard
}

/**
 * This function delete board
 * @param board first term BoardType
 * @returns boardsArray all board
 */
export const deleteBoard = (board:BoardType)=>{
    const index = boardsArray.indexOf(board)
    boardsArray.splice(index,1)

    const tasks:TasksType = getTasks(board.id)
    tasks.map(t=>deleteTask(t))
    return boardsArray
}
