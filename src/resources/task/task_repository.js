
const tasksArray = require('./task.memory');
const { writeJsonToFile } = require('../../fs-utils');
const { readJsonFromFile } = require('../../fs-utils');

// const pathToTaskDb = path.join(__dirname, '../../db/db_task.json')
const pathToTaskDb = tasksArray
const getTasks = ()=>readJsonFromFile(pathToTaskDb)
const addTask = async(name)=>
    // const tasks = await getTasks();
    // console.log(tasks)
    // tasks.push(name);
     writeJsonToFile (pathToTaskDb,name)

const updateTask = (newTask,indexTask,id)=>{
    // const tasks = await getTasks();
    const updatedTask = {
        "id": id,
        "title": newTask.title,
        "columns": newTask.columns,
    }
    tasksArray[indexTask] =updatedTask;
    return tasksArray[indexTask]
    // return writeJsonToFile(pathToTaskDb,tasks)
}
const deleteTask = async (indexTask)=>{
    // const tasks = await getTasks();
    tasksArray.splice(indexTask, 1)
    // return writeJsonToFile(pathToTaskDb, tasks)
}

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
};