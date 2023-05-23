export default class TaskManager {
  constructor() {
    this.tasksList = [];
    this.lastId = 0;
  }
  createTask(description) {
    const task = {
      description: description,
      id: ++this.lastId,
      isCompleted: false,
    };
    this.tasksList.push(task);
  }
  getTasksList() {
    console.log(this.tasksList);
    return this.tasksList;
  }
  toggleTaskStatus(id) {
    const taskIndex = this.tasksList.findIndex((task) => task.id === id);

    if (taskIndex == -1) throw new Error("Task not found");

    const foundTask = this.tasksList[taskIndex];

    foundTask.isCompleted = !foundTask.isCompleted;
  }
  deleteTask(task) {
    const taskIndex = this.tasksList.indexOf(task);

    this.tasksList.splice(taskIndex, 1);

    return this.tasksList;
  }
}
