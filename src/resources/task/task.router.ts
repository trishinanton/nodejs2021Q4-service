import TaskRouter from 'koa-router'
import { taskGetController } from './controllers/taskGetController';
import { taskIdGetController } from './controllers/taskIdGetController';
import { taskPostController } from './controllers/taskPostController';
import { taskUpdateController } from './controllers/taskUpdateController';
import { taskDeleteController } from './controllers/taskDeleteController';

/**
 * This object create endpoint
 * @param prefix first term string
 */
export const routerTask = new TaskRouter({
  prefix: '/boards'
});

routerTask
  /**
   * This method processes get request
   * @param '/' first term string
   * @param 'taskGetController' controller for get all task
   */
  .get('/:boardId/tasks', taskGetController)
  /**
   * This method processes get request
   * @param '/:boardId/tasks' first term string
   * @param 'taskGetController' controller for get task by id
   */
  .get('/:boardId/tasks/:taskId', taskIdGetController)
  /**
   * This method processes post request
   * @param '/:boardId/tasks' first term string
   * @param 'taskPostController' controller for post task
   */
  .post('/:boardId/tasks',taskPostController)
  /**
   * This method processes put request
   * @param '/:boardId/tasks' first term string
   * @param 'taskPostController' controller for update task
   */
  .put('/:boardId/tasks/:taskId',taskUpdateController)
  /**
   * This method processes delete request
   * @param '/:boardId/tasks/:taskId' first term string
   * @param 'taskPostController' controller for delete task
   */
  .delete('/:boardId/tasks/:taskId', taskDeleteController)

