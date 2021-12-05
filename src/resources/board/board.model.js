const uuid = require('uuid');

class Board {
  constructor({
    id = uuid.v1(),
    title = 'Coding',
    columns = [{
      id: uuid.v1(),
      title: "start board",
      order: 0
    }]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

}

module.exports = Board;
