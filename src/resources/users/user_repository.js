
const usersArray = require('./user.memory');
// const usersArray = require('./user.memory');
const {writeJsonToFile} = require("../../fs-utils");
const {readJsonFromFile} = require("../../fs-utils");


// const pathToUsersDb = path.join(__dirname, '../../db/db_users.json')
const pathToUsersDb = usersArray
const getUsers = ()=>readJsonFromFile(pathToUsersDb)
const addUser = async (user)=>
    // const users = await getUsers();
    // users.push(user);
     writeJsonToFile (pathToUsersDb,user)


const updateUser =  (newUser,indexUser,id)=>{
    console.log(newUser);
    const updatedUser = {
        "id": id,
        "name": newUser.name,
        "login": newUser.login,
        "password": newUser.password
    }
    // const users = await getUsers();
    usersArray[indexUser] =updatedUser;
return usersArray[indexUser]
    // return writeJsonToFile(pathToUsersDb,users)
}
const deleteUser = async (foundUser)=>{
    // const users = await getUsers();
    // users.splice(indexUser, 1)
    const userIndex = usersArray.indexOf(foundUser);
    usersArray.splice(userIndex, 1)
    // return writeJsonToFile(pathToUsersDb, users)
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};
