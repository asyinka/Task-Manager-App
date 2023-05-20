import Button from "./button";

const ModalPanel = () => {
  return (
    <form className="app-form modal-panel--display">
      <h2 className="form-title">CREATE TASK</h2>
      <input
        className="form-input"
        type="text"
        placeholder="Task description..."
      />
      <div className="form-categories">
        <hr className="line form-categories-line" /> Categories
        <hr className="line form-categories-line" />
      </div>
      <div className="form-categories-button">
        <Button buttonType={"button button--accent"}> Urgent </Button>
        <Button buttonType={"button button--secondary"}> Important </Button>
        <Button buttonType={"button button--tertiary"}> Later </Button>
        <Button buttonType={"button button--lb"}> To study </Button>
        <Button buttonType={"button button--primary"}>Completed </Button>
      </div>
      <button className="form-button button">Submit task</button>
    </form>
  );
};

export default ModalPanel;
