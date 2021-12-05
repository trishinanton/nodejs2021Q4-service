

const boardsArray = require('./board.memory');
// const boardsArray = require('./board.memory');
const { writeJsonToFile } = require('../../fs-utils');
const { readJsonFromFile } = require('../../fs-utils');

// const pathToBoardDb = path.join(__dirname, '../../db/db_board.json')
const pathToBoardDb = boardsArray
const getBoards = ()=>readJsonFromFile(pathToBoardDb)
const addBoard = async(name)=>
    // const boards = await getBoards();
    // boards.push(name);
     writeJsonToFile (pathToBoardDb,name)

const updateBoard =  (newBoard,indexBoard,id)=>{
    // const boards = await getBoards();
    const updatedBoard = {
        "id": id,
        "title": newBoard.title,
        "columns": newBoard.columns,
    }

    boardsArray[indexBoard] =updatedBoard;
    return boardsArray[indexBoard]
    // return writeJsonToFile(pathToBoardDb,boards)
}
const deleteBoard = async (indexBoard)=>{
    // const boards = await getBoards();
    boardsArray.splice(indexBoard, 1)
    // return writeJsonToFile(pathToBoardDb, boards)
}

module.exports = {
    getBoards,
    addBoard,
    updateBoard,
    deleteBoard
};