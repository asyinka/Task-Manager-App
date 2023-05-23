import { useState } from "react";
import Button from "./button";
import ListItem from "./list-item";
import ModalPanel from "./modalPanel";
import TaskManager from "../services/TaskManager";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const myTaskManager = new TaskManager();

const categories = ["Urgent", "Important", "Later", "To Study", "Completed"];

const RightPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [tasksLists, setTasksList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [category, setCateory] = useState();

  const toggleCheck = (id) => {
    setIsChecked(!isChecked);

    myTaskManager.toggleTaskStatus(id);
  };

  const handleDeleteTask = (task) => {
    myTaskManager.deleteTask(task);

    fetchTasks();
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (taskInput == "" || taskInput == " ") {
      alert("You have to add a task");
      return;
    }

    setIsModalOpen(false);

    myTaskManager.createTask(taskInput);

    setTaskInput("");

    fetchTasks();
  };

  const fetchTasks = () => {
    const myTaskLists = myTaskManager.getTasksList();

    setTasksList([...myTaskLists]);
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
      {tasksLists.length == 0 ? (
        <div className="right-panel-lists panel--light panel-empty">
          <MdCheckBoxOutlineBlank size={"140px"} color="#1f1d1be8" />
          <p>You have no item on your list</p>
        </div>
      ) : (
        <div className="right-panel-lists panel--light">
          <div className="tasks-lists">
            {tasksLists.map((task, index) => (
              <ListItem
                buttonType={`button short-button button--primary`}
                task={task.description}
                taskStatus={"Completed"}
                key={index}
                handleDeleteTask={() => handleDeleteTask(task)}
                toggleCheck={() => toggleCheck(task.id)}
                isChecked={isChecked}
              />
            ))}

            {/* { <ListItem
              buttonType={"button short-button button--primary"}
              task={"Memorize the fifty states and their capitals"}
              taskStatus={"Completed"}
            />
            <ListItem
              buttonType={"button short-button button--accent"}
              task={"Memorize the fifty states and their capitals"}
              taskStatus={"Urgent"}
            />
            <ListItem
              buttonType={"button short-button button--secondary"}
              task={"Memorize the fifty states and their capitals"}
              taskStatus={"Important"}
            />
            <ListItem
              buttonType={"button short-button button--tertiary"}
              task={"Memorize the fifty states and their capitals"}
              taskStatus={"Later"}
            />
            <ListItem
              buttonType={"button short-button button--lb"}
              task={"Memorize the fifty states and their capitals"}
              taskStatus={"To study"} }
            />  */}
          </div>
          <div className="footer">
            <span className="footer-tag">Active</span>
            <span className="footer-tag light-footer-tag">All</span>
            <span className="footer-tag">Completed</span>
          </div>
        </div>
      )}
      <ModalPanel
        isModalOpen={isModalOpen}
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
