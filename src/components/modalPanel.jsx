import { MdCancel } from "react-icons/md";
import Badge from "./badge";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const categories = ["Urgent", "Important", "Later", "To Study", "Completed"];

const ModalPanel = ({
  isModalOpen = false,
  onCloseModal,
  onFormSubmission,
  // isEditMode = false,
  // task
}) => {
  const [taskInput, setTaskInput] = useState("");
  const [category, setCategory] = useState("");

  //this handles the display of the modal panel
  const handleCloseModalPanel = () => {
    // setTaskInput(taskInput);
    //issue: set the input to empty
    if (onCloseModal) onCloseModal();
  };
  //handles the useState of my showIcon
  // const [showIcon, setShowIcon] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    //set the input to always contain atleast a word and pick a category
    if (taskInput.length < 2 || !category) {
      toast("You have to add a valid task and category", {
        position: "top-left",
      });
      return;
    }
    setTaskInput("");
    setCategory("");
    onFormSubmission && onFormSubmission(taskInput, category);
  };

  // useEffect(() => {
  //   if (!isEditMode) return;

  //   setCategory(task.category);
  //   setTaskInput(task.description);
  // }, [isEditMode, task]);

  return (
    <div
      className={`form-background ${
        isModalOpen ? "modal-panel--display" : "modal-panel--hide"
      }`}
    >
      <span onClick={handleCloseModalPanel} className="cancel-panel">
        <MdCancel size={"28px"} color="#faf6f8d9" />
      </span>
      <form className="app-form">
        <h2 className="form-title">CREATE TASK</h2>
        <input
          className="form-input"
          type="text"
          placeholder="Task description..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <div className="form-categories">
          <hr className="line form-categories-line" /> Categories
          <hr className="line form-categories-line" />
        </div>
        <div className="form-categories-tag-cont">
          {categories.map((curCategory) => (
            <div
              key={curCategory}
              onClick={() => {
                setCategory(curCategory);
              }}
            >
              <Badge
                category={curCategory}
                tagType={curCategory}
                showIcon={category == curCategory ? true : false}
              />
            </div>
          ))}
        </div>
        <button onClick={handleFormSubmission} className="form-button button">
          Submit task
        </button>
      </form>
    </div>
  );
};

export default ModalPanel;
