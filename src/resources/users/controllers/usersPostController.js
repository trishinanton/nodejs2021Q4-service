
const User = require('../user.model');
// const { HTTP_RESPONSE_TYPE } = require('../../../utils/constants');
const { addUser } = require('../user_repository');


exports.userPostController = async(ctx)=>{
    try{
        const user = new User(ctx.request.body)
        await addUser(user)
        ctx.status = 201
        ctx.body = User.toResponse( user )
        // ctx.type = HTTP_RESPONSE_TYPE.RESPONSE
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}