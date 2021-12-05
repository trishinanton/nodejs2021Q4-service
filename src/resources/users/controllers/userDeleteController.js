// const { HTTP_RESPONSE_TYPE } = require('../../../utils/constants');
const { deleteUser } = require('../user_repository');
const { getUsers } = require('../user_repository');


exports.userDeleteController = async(ctx)=>{
    try{
        const users = await getUsers()
        const user = users.find(u=>u.id===ctx.params.id)
        await deleteUser(user)
        ctx.response.status = 204
        ctx.body = 'User with id success delete'
        // ctx.type = HTTP_RESPONSE_TYPE.RESPONSE
    }catch (error){
        console.error('err', error);
        ctx.status = 500;
        ctx.body = 'Interval error'
    }
}