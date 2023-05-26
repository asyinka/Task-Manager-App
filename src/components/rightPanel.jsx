import { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import Button from "./button";
import ListItem from "./list-item";
import ModalPanel from "./modalPanel";
import TaskManager from "../services/TaskManager";
import Badge from "./badge";
import FooterTag from "../services/footerTag";

const myTaskManager = new TaskManager();
const categories = ["Urgent", "Important", "Later", "To Study", "Completed"];
const footerTags = ["Active", "All", "Completed"];

let tagType = "";

const RightPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [tasksLists, setTasksList] = useState([]);
  const [category, setCategory] = useState();
  const [footerFontColor, setFooterFontColor] = useState();

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
  //is checked is set to true pending when checkBox is resolved
  const toggleCheck = (id) => {
    //debug
    // console.log(tasksLists);

    myTaskManager.toggleTaskStatus(id);
    fetchAllTasks();
  };

  const handleDeleteTask = (task) => {
    myTaskManager.deleteTask(task);

    fetchAllTasks();
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    //set the input to always contain atleast a word and pick a category
    if (taskInput.length < 2 || category == "") {
      toast("You have to add a valid task and category", {
        position: "top-left",
      });
      return;
    }

    setIsModalOpen(false);

    myTaskManager.createTask(taskInput, category);

    setTaskInput("");

    setCategory("");

    fetchAllTasks();
  };

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
          {tasksLists.length == 0
            ? "No task"
            : tasksLists.length + (tasksLists.length <= 1 ? " task" : " tasks")}
        </span>
        <Button
          handleClickEvent={() => setIsModalOpen(true)}
          buttonType={"button button-dark"}
        >
          Add new task
        </Button>
        <span className="header__item clear-item">Clear Completed</span>
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
                  taskStatus={task.isCompleted}
                  taskDescription={task.description}
                  key={index}
                  handleDeleteTask={() => handleDeleteTask(task)}
                  toggleCheck={() => toggleCheck(task.id)}
                />
              ))}
            </div>
          </div>
        )}
        {/* <div className="footer">
          <span onClick={displayActiveTask} className="footer-tag">
            Active
          </span>
          <span onClick={fetchAllTasks} className="footer-tag light-footer-tag">
            All
          </span>
          <span onClick={displayCompletedTasks} className="footer-tag">
            Completed
          </span>
        </div> */}
        <div className="footer">
          {footerTags.map((tag) => (
            <span key={tag} onClick={() => setFooterFontColor(true)}>
              <FooterTag
                displayActiveTask={displayActiveTask}
                displayCompletedTasks={displayCompletedTasks}
                fetchAllTasks={fetchAllTasks}
                footerFontColor={footerFontColor}
              >
                {tag}
              </FooterTag>
            </span>
          ))}

          {/* <FooterTag onTagClick={fetchAllTasks} footerTag={footerTag}>
            All
          </FooterTag>
          <FooterTag onTagClick={displayCompletedTasks} footerTag={footerTag}>
            Completed
          </FooterTag> */}
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
