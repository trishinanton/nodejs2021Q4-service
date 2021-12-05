const User = require('../user.model');

// const { HTTP_RESPONSE_TYPE } = require('../../../utils/constants');

const { getUsers } = require('../user_repository');


exports.userIdGetController = async(ctx)=>{
    try{
        const users = await getUsers()
        const user = users.find(u=>u.id===ctx.params.id);
            ctx.status = 200
            ctx.body = User.toResponse(user)
            // ctx.type = HTTP_RESPONSE_TYPE.RESPONSE


    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}