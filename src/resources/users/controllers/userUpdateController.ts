import { Context } from 'koa';
import { getUsers, OptionsType, updateUser, UsersType, UserType } from '../user_repository';
import { User } from '../user.model';

/**
 * Update user by id
 * @param ctx first term Context type
 * @returns undefined, but response updated user and status code
 */
export const userUpdateController = async(ctx:Context)=>{
    try{
        const users:UsersType = getUsers()
        const user:UserType | undefined = users.find(u=>u.id===ctx.params.id)
        if (user){
            const upUser =  updateUser(user,ctx.request.body)
            ctx.status = 200
            ctx.body = User.toResponse(upUser)
        }

    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}