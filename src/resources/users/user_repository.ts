import { tasksArray } from '../task/task.memory';
import { usersArray } from './user.memory';
import { getBoards } from '../board/board_repository';
import { getTasks } from '../task/task_repository';


// types
export interface UserType  {
    id: string,
    name: string,
    login: string
}
export type UsersType = Array<UserType>
export type OptionsType = {
    name: string,
    login: string,
    password: string
}

export type TaskType = {
    id: string,
    title: string,
    order:  number,
    description: string,
    userId: string | null,
    boardId: string | null,
    columnId: string | null
}
export type TasksType = Array<TaskType>
export type ColumnsType = Array<{
    id: string,
    title: string,
    order: number
}>
export type BoardType = {
    id: string,
    title: string,
    columns: ColumnsType
}
export type BoardsType = Array<BoardType>


type GetUsersType = ()=>UsersType

/**
 * This function return array boards
 * @returns Array users
 */
export const getUsers:GetUsersType = ()=>usersArray

/**
 * This function add board
 * @param user first term UserType
 * @returns user added user
 */
export const addUser = (user:UserType)=>{
    usersArray.push(user);
    return user
}

/**
 * This function update user
 * @param newUser first term UserType
 * @param options second term OptionsType
 * @returns updatedUser new user
 */
export const updateUser =  (newUser:UserType ,options:OptionsType )=>{
    const userIndex = usersArray.indexOf(newUser)
    const updatedUser = {
        "id": newUser.id,
        "name": options.name,
        "login": options.login,
        "password": options.password
    }
    usersArray[userIndex] =updatedUser;
return updatedUser

}

/**
 * This function delete board
 * @param user first term UserType
 * @returns usersArray all user
 */
export const deleteUser = (foundUser:UserType)=>{
    const userIndex = usersArray.indexOf(foundUser);
    usersArray.splice(userIndex, 1)
    const tasks = [] as TasksType;
    const boards:BoardsType = getBoards();
    boards.map(b=>{
        tasks.push(...getTasks(b.id))
        return tasks
    })
    const filteredTasks = tasks.filter(t=>t.userId === foundUser.id)
    filteredTasks.map(t=>{
        const taskIndex = tasksArray.indexOf(t);
        tasksArray[taskIndex].userId = null
        return tasksArray
    })
    return usersArray
}

