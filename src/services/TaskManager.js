export default class TaskManager {
  constructor() {
    this.tasksList = [
      {
        description: "swim at the beach",
        id: 1,
        status: false,
      },
    ];
    this.lastId = 1;
  }
  createTask(description) {
    const task = {
      description: description,
      id: ++this.lastId,
      status: false,
    };
    this.tasksList.push(task);
  }
  getTasksList() {
    return this.tasksList;
  }
}
