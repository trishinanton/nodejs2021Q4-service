import { Context } from "koa";
import { getUsers, UsersType } from '../user_repository';
import { User } from '../user.model';

export const usersGetController = async(ctx:Context)=>{
    try{
        const users:UsersType = getUsers()
        const usersWithoutPass = users.map(u=>User.toResponse(u))
        ctx.status = 200
        ctx.body = usersWithoutPass
    }catch (error){
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}