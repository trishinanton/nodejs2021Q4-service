import { FastifyInstance } from 'fastify';
import { getTasks, getTask, postTask, putTask, deleteTask } from './task.service';

/**
 * Handle endpoints for taskRouter
 * @param app - instance of fastify from fastify package
 */
const taskRouter = async(app:FastifyInstance):Promise<void> => {
  
  app.get('/tasks', getTasks)

  app.get('/tasks/:taskId', getTask)

  app.post('/tasks', postTask)

  app.put('/tasks/:taskId', putTask)

  app.delete('/tasks/:taskId', deleteTask)

}

export default taskRouter