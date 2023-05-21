export default class TaskManager {
  constructor() {
    this.tasksList = [
      {
        title: "swimming",
        description: "swim at the beach",
        id: 1,
        status: false,
      },
    ];
    this.lastId = 1;
  }
  createTask(title, description) {
    const task = {
      title: title,
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

const myToDo = new ToDoTask();
const myTasksList = () => {
  myToDo.createTask("visit", "visit the orphanage");
  return myToDo.getTasksList;
};
console.log(myTasksList());
