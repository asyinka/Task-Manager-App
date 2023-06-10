export default class TaskManager {
  constructor() {
    this.tasksList = [];
    this.lastId = 0;

    this.#retrieveFromDB();
  }

  createTask(description, category) {
    const task = {
      description: description,
      id: ++this.lastId,
      isCompleted: false,
      category: category,
    };
    this.tasksList.push(task);

    this.#storeInDB();
  }

  getTasksList() {
    // console.log(this.tasksList);
    return this.tasksList;
  }

  toggleTaskStatus(id) {
    const taskIndex = this.tasksList.findIndex((task) => task.id === id);

    if (taskIndex == -1) throw new Error("Task not found");

    const foundTask = this.tasksList[taskIndex];
    //this toggles isCompleted to be opposite
    foundTask.isCompleted = !foundTask.isCompleted;
    //this reurns true if isCompleted is true and vice versa
    // foundTask.isCompleted ? true : false;

    this.#storeInDB();
  }

  deleteTask(task) {
    const taskIndex = this.tasksList.indexOf(task);

    this.tasksList.splice(taskIndex, 1);

    return this.tasksList;
  }

  filterCompletedTask() {
    const completedTask = this.tasksList.filter(
      (task) => task.isCompleted == true
    );

    return completedTask;
  }

  filterUncompletedTask() {
    const unCompletedTask = this.tasksList.filter(
      (task) => task.isCompleted == false
    );

    return unCompletedTask;
  }

  clearCompletedTasks() {
    const completedTasks = this.tasksList.filter(
      (task) => task.isCompleted == true
    );

    this.#storeInDB();
  }

  #storeInDB() {
    //this is where we will store the tasks in the database
    window.localStorage.setItem("TASK_MANAGER", JSON.stringify(this.tasksList))
  }

  #retrieveFromDB() {
    //this is where we will store the tasks in the database
    const TASKS_STRING = window.localStorage.getItem("TASK_MANAGER")
    if (!TASKS_STRING) {
      this.tasksList = [];
    } else {
      this.tasksList = JSON.parse(TASKS_STRING);
      this.lastId = this.tasksList.length;
    }
  }
}
