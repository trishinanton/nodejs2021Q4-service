import { Context } from 'koa';
import { getUsers, UsersType } from '../user_repository';
import { User } from '../user.model';

/**
 * Get task by id
 * @param ctx first term Context type
 * @returns undefined, but response fined user
 */
export const userIdGetController = async(ctx: Context)=>{
    try{
        const users: UsersType = await getUsers()
        const user = users.find(u=>u.id===ctx.params.id);
        if(user){
            ctx.status = 200
            ctx.body = User.toResponse(user)
        }

    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}