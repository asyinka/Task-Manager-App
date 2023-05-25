import { useState } from "react";
import Button from "./button";
import ListItem from "./list-item";
import ModalPanel from "./modalPanel";
import TaskManager from "../services/TaskManager";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Badge from "./badge";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const myTaskManager = new TaskManager();

const categories = ["Urgent", "Important", "Later", "To Study", "Completed"];

let tagType = "";

const RightPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [tasksLists, setTasksList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [category, setCategory] = useState();

  const displayActiveTask = () => {
    //accept uncompleted arrays and pass it into the tasksList
    const unCompletedTasks = myTaskManager.filterUncompletedTask();

    setTasksList([...unCompletedTasks]);
  };

  const displayCompletedTasks = () => {
    const completedTasks = myTaskManager.filterCompletedTask();

    setTasksList([...completedTasks]);
  };

  //this toggles the status of the task whether completed or not
  const toggleCheck = (id) => {
    setIsChecked(!isChecked);
    //debug
    // console.log(tasksLists);

    myTaskManager.toggleTaskStatus(id);
  };

  const handleDeleteTask = (task) => {
    myTaskManager.deleteTask(task);

    fetchAllTasks();
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    //set the input to always contain atleast a word and pick a category
    if (taskInput.length < 2 || category == null) {
      toast("You have to add a task and category", { position: "top-left" });
      return;
    }

    setIsModalOpen(false);

    myTaskManager.createTask(taskInput, category);

    setTaskInput("");

    fetchAllTasks();
  };

  // function setShowIcon(currCat) {
  //   category == currCat ? true : false;
  // }

  const fetchAllTasks = () => {
    const myTaskLists = myTaskManager.getTasksList();

    // console.log(myTaskLists);

    setTasksList([...myTaskLists]);

    // console.log(myTaskLists);
  };

  return (
    <div className="right-panel">
      <div className="right-panel-header panel--light">
        <span className="list-number header__item">
          {tasksLists.length == 0 ? "No tasks" : tasksLists.length + " tasks"}
        </span>
        <Button
          handleClickEvent={() => setIsModalOpen(true)}
          buttonType={"button button-dark"}
        >
          Add new task
        </Button>
        <span className="header__item">Clear Completed</span>
      </div>
      <div className="right-panel-lists panel--light">
        {tasksLists.length == 0 ? (
          <div className="tasks-lists panel-empty">
            <MdCheckBoxOutlineBlank size={"140px"} color="#1f1d1be8" />
            <p>You have no item on your list</p>
          </div>
        ) : (
          <div>
            <div className="tasks-lists">
              {tasksLists.map((task, index) => (
                <ListItem
                  badge={<Badge category={task.category} tagType={tagType} />}
                  taskDescription={task.description}
                  key={index}
                  handleDeleteTask={() => handleDeleteTask(task)}
                  toggleCheck={() => toggleCheck(task.id)}
                  isChecked={isChecked}
                />
              ))}
            </div>
          </div>
        )}
        <div className="footer">
          <span onClick={displayActiveTask} className="footer-tag">
            Active
          </span>
          <span onClick={fetchAllTasks} className="footer-tag light-footer-tag">
            All
          </span>
          <span onClick={displayCompletedTasks} className="footer-tag">
            Completed
          </span>
        </div>
      </div>
      <ModalPanel
        isModalOpen={isModalOpen}
        categories={categories}
        category={category}
        setCategory={setCategory}
        tagType={tagType}
        onCloseModal={() => setIsModalOpen(false)}
        handleFormSubmission={handleFormSubmission}
        setTaskInput={(e) => {
          setTaskInput(e.target.value);
        }}
        taskInput={taskInput}
      />
    </div>
  );
};

export default RightPanel;
