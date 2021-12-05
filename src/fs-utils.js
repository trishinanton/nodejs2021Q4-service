
// const usersArray = require('./resources/users/user.memory');
// const { users } = require('./db/db_users');

exports.readJsonFromFile = (filePath)=>new Promise((resolve)=>{
        // fs.readFile(filePath, (err, buf)=>{
        //     if(err){
        //         reject(err)
        //     }else{
        //       // console.log(JSON.parse(buf.toString()));
        //         resolve(JSON.parse(buf.toString()))
        //
        //     }
        // })
        resolve(filePath)
    })

exports.writeJsonToFile = (filePath, data) =>new Promise((res)=>{
        // fs.writeFile(filePath, JSON.stringify(data), err=>{
        //     if(err) rej(err);
        //     res();
        // })
  filePath.push(data)
  res()
    })