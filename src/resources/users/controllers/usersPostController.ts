import { Context } from 'koa';
import { User } from '../user.model';
import { addUser } from '../user_repository';

/**
 * Create user
 * @param ctx first term Context type
 * @returns undefined, but response created user and status code
 */
export const userPostController = async(ctx:Context)=>{
    try{
        const userRequest = ctx.request.body
        const user = new User(userRequest)
        const newUser = addUser(user)
        ctx.status = 201
        ctx.body = User.toResponse( newUser )
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}