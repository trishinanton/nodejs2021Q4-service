const Router = require('koa-router');
const { userDeleteController } = require('./controllers/userDeleteController');
const { userUpdateController } = require('./controllers/userUpdateController');
const { userPostController } = require('./controllers/usersPostController');
const { userIdGetController } = require('./controllers/userIdGetController');
const { usersGetController } = require('./controllers/usersGetController');

const router = new Router({
  prefix: '/users'
});

router
  .get('/', usersGetController)
  .get('/:id', userIdGetController)
  .post('/', userPostController)
  .put('/:id', userUpdateController)
  .delete('/:id', userDeleteController)

module.exports = router;
