import "./App.css";
import Button from "./components/button";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="app-title-container">
        <h1 className="app-title">PERSONAL TASK MANAGER</h1>
      </div>

      <div className="tasks-panel">
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

        <div className="right-panel">
          <div className="right-panel-header panel--light">
            <span className="list-number header__item">5 tasks</span>
            <Button buttonType={"button button-dark"}> Add new task </Button>
            <span className="header__item">Clear Completed</span>
          </div>
          <div className="right-panel-lists panel--light">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
