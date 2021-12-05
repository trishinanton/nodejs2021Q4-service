const Router = require('koa-router');
const { taskDeleteController } = require('./controllers/taskDeleteController');
const { taskUpdateController } = require('./controllers/taskUpdateController');
const { taskPostController } = require('./controllers/taskPostController');
const { taskIdGetController } = require('./controllers/taskIdGetController');
const { taskGetController } = require('./controllers/taskGetController');

const routerTask = new Router({
  prefix: '/boards'
});

routerTask
  .get('/:boardId/tasks', taskGetController)
  .get('/:boardId/tasks/:taskId', taskIdGetController)
  .post('/:boardId/tasks',taskPostController)
  .put('/:boardId/tasks/:taskId',taskUpdateController)
  .delete('/:boardId/tasks/:taskId', taskDeleteController)
module.exports = routerTask

