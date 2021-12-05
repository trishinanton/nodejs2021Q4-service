// const { HTTP_RESPONSE_TYPE } = require('../../../utils/constants');
const { updateUser } = require('../user_repository');
const { getUsers } = require('../user_repository');


exports.userUpdateController = async(ctx)=>{
    try{
        const users = await getUsers()
        const index = users.findIndex(u=>u.id===ctx.params.id)
        const upUser =  updateUser(ctx.request.body,index,ctx.params.id)
        ctx.status = 200
        ctx.body = upUser
        // ctx.type = HTTP_RESPONSE_TYPE.RESPONSE
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}