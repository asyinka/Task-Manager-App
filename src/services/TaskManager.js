export default class TaskManager {
  constructor() {
    this.tasksList = [];
    this.lastId = 0;
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
  deleteTask(task) {
    const taskIndex = this.tasksList.indexOf(task);

    this.tasksList.splice(taskIndex, 1);

    return this.tasksList;
  }
}
