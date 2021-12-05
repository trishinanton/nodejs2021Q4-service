const Router = require('koa-router');
const { boardDeleteController } = require('./controllers/boardDeleteController');
const { boardUpdateController } = require('./controllers/boardUpdateController');
const { boardsPostController } = require('./controllers/boardsPostController');
const { boardIdGetController } = require('./controllers/boardIdGetController');
const { boardsGetController } = require('./controllers/boardsGetController');

const routerBoard = new Router({
  prefix: '/boards'
});

routerBoard
  .get('/', boardsGetController)
  .get('/:id', boardIdGetController)
  .post('/', boardsPostController)
  .put('/:id', boardUpdateController)
  .delete('/:id', boardDeleteController)
module.exports = routerBoard
