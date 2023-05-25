import { MdCancel } from "react-icons/md";
import Badge from "./badge";
const ModalPanel = ({
  isModalOpen = false,
  onCloseModal,
  handleFormSubmission,
  taskInput,
  setTaskInput,
  categories,
  tagType,
  setCategory,
  category,
}) => {
  //this handles the display of the modal panel
  const handleCloseModalPanel = () => {
    if (onCloseModal) onCloseModal();
  };
  //handles the useState of my showIcon
  // const [showIcon, setShowIcon] = useState(false);

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
          onChange={setTaskInput}
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
                tagType={tagType}
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
