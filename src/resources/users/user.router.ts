import Router from 'koa-router';
import { usersGetController } from './controllers/usersGetController';
import { userIdGetController } from './controllers/userIdGetController';
import { userPostController } from './controllers/usersPostController';
import { userUpdateController } from './controllers/userUpdateController';
import { userDeleteController } from './controllers/userDeleteController';

/**
 * This object create endpoint
 * @param prefix first term string
 */
export const router = new Router({
  prefix: '/users'
});

router
  /**
   * This method processes get request
   * @param '/' first term string
   * @param 'usersGetController' controller for get all users
   */
  .get('/', usersGetController)
  /**
   * This method processes get request
   * @param '/:id' first term string
   * @param 'userIdGetController' controller for get user by id
   */
  .get('/:id', userIdGetController)
  /**
   * This method processes post request
   * @param '/' first term string
   * @param 'userPostController' controller for post user
   */
  .post('/', userPostController)
  /**
   * This method processes put request
   * @param '/:id' first term string
   * @param 'userUpdateController' controller for update user
   */
  .put('/:id', userUpdateController)
  /**
   * This method processes delete request
   * @param '/:id' first term string
   * @param 'userDeleteController' controller for delete user
   */
  .delete('/:id', userDeleteController)

