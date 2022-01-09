import { tasksArray } from './task.memory';
import { TaskType } from '../users/user_repository';

type OptionType = {
    title: string,
    order: number,
    description: string,
    userId: string,
    boardId: string,
    columnId: string
}
/**
 * This function return array tasks
 * @returns Array tasks
 */
export const getTasks = (boardId:string)=> tasksArray.filter(t=>t.boardId === boardId)
/**
 * This function add task
 * @param task first term TaskType
 * @returns task added task
 */
export const addTask = (task:TaskType)=>{
    tasksArray.push(task)
    return task
}

/**
 * This function update task
 * @param task first term BoardType
 * @param options second term OptionsType
 * @returns updatedTask new task
 */
export const updateTask = (task:TaskType, options:OptionType)=>{
    const taskIndex:number = tasksArray.indexOf( task );
    const updatedTask = {
        "id": task.id,
        "title": options.title,
        "order": options.order,
        "description": options.description,
        "userId": options.userId,
        "boardId": options.boardId,
        "columnId": options.columnId
    }
    tasksArray[taskIndex] =updatedTask;
    return updatedTask
}

/**
 * This function delete board
 * @param task first term TaskType
 * @returns tasksArray all task
 */
export const deleteTask =  (task:TaskType)=>{
    const taskIndex = tasksArray.indexOf( task );
    tasksArray.splice(taskIndex, 1)
    return tasksArray
}
