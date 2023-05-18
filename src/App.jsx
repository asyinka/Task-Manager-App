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
        <div className="left-panel left-panel--light">
          <div className="left-panel--heading">
            <hr className="line" /> Categories <hr className="line" />
          </div>
          <Button buttonType={"button button--primary"}>Completed </Button>
          <Button buttonType={"button button--accent"}>
          <Button buttonType={"button button--secondary"}>
          <Button buttonType={"button button--tertiary"}>
          <Button buttonType={"button button--lb"}>
          <Button buttonType={"button button--lb"}>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
