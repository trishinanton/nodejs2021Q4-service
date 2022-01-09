import BoardRouter from 'koa-router'
import { boardsGetController } from './controllers/boardsGetController';
import { boardIdGetController } from './controllers/boardIdGetController';
import { boardsPostController } from './controllers/boardsPostController';
import { boardUpdateController } from './controllers/boardUpdateController';
import { boardDeleteController } from './controllers/boardDeleteController';

/**
 * This object create endpoint
 * @param prefix first term string
 */
export const routerBoard = new BoardRouter({
  prefix: '/boards'
});

routerBoard
  /**
   * This method processes get request
   * @param '/' first term string
   * @param 'boardsGetController' controller for get all boards
   */
  .get('/', boardsGetController)
  /**
   * This method processes get request
   * @param '/:id' first term string
   * @param 'boardIdGetController' controller for get board by id
   */
  .get('/:id', boardIdGetController)
  /**
   * This method processes post request
   * @param '/' first term string
   * @param 'boardsPostController' controller for post board
   */
  .post('/', boardsPostController)
  /**
   * This method processes put request
   * @param '/:id' first term string
   * @param 'boardUpdateController' controller for update board
   */
  .put('/:id', boardUpdateController)
  /**
   * This method processes delete request
   * @param '/:id' first term string
   * @param 'boardDeleteController' controller for delete board
   */
  .delete('/:id', boardDeleteController)

