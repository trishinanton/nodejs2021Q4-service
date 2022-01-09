exports.addTask = (title)=> new Promise(async(resolve, reject)=>{
    console.log(title)
    try{
        resolve({
            success: true
        });
    }catch (err){
        reject(err)
    }
})