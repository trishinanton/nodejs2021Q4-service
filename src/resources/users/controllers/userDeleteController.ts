import { Context } from 'koa';
import { deleteUser, getUsers, UsersType } from '../user_repository';

/**
 * Delete board
 * @param ctx first term Context type
 * @returns undefined, but response status cod 204 or 404 or 500
 */
export const userDeleteController = async(ctx:Context)=>{
    try{
        const users:UsersType = getUsers()
        const user = users.find(u=>u.id===ctx.params.id)
        if (user){
            deleteUser(user)
            ctx.status = 204;
        }else{
            ctx.status = 404;
        }

    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}