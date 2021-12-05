const User = require('../user.model');
// const { HTTP_RESPONSE_TYPE } = require('../../../utils/constants');
const { getUsers } = require('../user_repository');

exports.usersGetController = async(ctx)=>{
    try{
        const users = await getUsers()
        console.log(users);
        const usersWithoutPass = users.map(u=>User.toResponse(u))
        ctx.status = 200
        ctx.body = usersWithoutPass
        // ctx.type = HTTP_RESPONSE_TYPE.RESPONSE
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}