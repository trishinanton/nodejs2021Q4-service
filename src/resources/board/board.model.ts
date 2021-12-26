import { v1 as uuid } from 'uuid';
import { ColumnsType } from '../users/user_repository';
/**
 * This class model for board
 * @param id first term string
 * @param title second term string
 * @param columns third term ColumnsType
 */

export class Board {
  id: string

  title: string

  columns: ColumnsType

  constructor({
    id = uuid(),
    title = 'Coding',
    columns = [{
      id: uuid(),
      title: "start board",
      order: 0
    }]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

}
