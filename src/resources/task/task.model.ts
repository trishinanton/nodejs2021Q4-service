import { v1 as uuid } from 'uuid';

/**
 * This class model for task
 * @param id first term string
 * @param title second term string
 * @param order third term number
 * @param description four term string
 * @param userId five term string
 * @param boardId six term string
 * @param columnId seven term string
 * @param columns eight term ColumnsType
 */
export class Task {
  id: string

  title: string

  order: number

  description: string

  userId: string | null

  boardId: string | null

  columnId: string | null

  constructor({
    id = uuid(),
    title = 'JS',
    order=1,
    description = 'empty',
    userId=null,
    boardId = null,
    columnId = null
  } = {}) {
      this.id = id;
      this.title = title;
      this.order= order;
      this.description = description;
      this.userId=userId;
      this.boardId = boardId;
      this.columnId = columnId;
  }

}

