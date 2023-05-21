import toggleMoodal from "../services/toggleModal";
import Button from "./button";
import ListItem from "./list-item";

const RightPanel = () => {
  const toggleModalPanel = toggleMoodal;

  return (
    <div className="right-panel">
      <div className="right-panel-header panel--light">
        <span className="list-number header__item">5 tasks</span>
        <Button
          handleClickEvent={toggleModalPanel}
          buttonType={"button button-dark"}
        >
          Add new task
        </Button>
        <span className="header__item">Clear Completed</span>
      </div>
      <div className="right-panel-lists panel--light">
        <div>
          <ListItem
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
            taskStatus={"To study"}
          />
        </div>
        <div className="footer">
          <span className="footer-tag">Active</span>
          <span className="footer-tag light-footer-tag">All</span>
          <span className="footer-tag">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
