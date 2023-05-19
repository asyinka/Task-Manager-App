import Button from "./button";

const LeftPanel = () => {
  return (
    <div className="left-panel panel--light">
      <div className="left-panel--heading">
        <hr className="line" /> Categories <hr className="line" />
      </div>
      <Button buttonType={"button button--primary"}>Completed </Button>
      <Button buttonType={"button button--accent"}> Urgent </Button>
      <Button buttonType={"button button--secondary"}> Important </Button>
      <Button buttonType={"button button--tertiary"}> Later </Button>
      <Button buttonType={"button button--lb"}> To study </Button>
      <Button buttonType={"button add-catg-button button-dark"}>
        Add category
      </Button>
    </div>
  );
};

export default LeftPanel;
