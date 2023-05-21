import "./App.css";
import LeftPanel from "./components/leftPanel";

import RightPanel from "./components/rightPanel";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="app-title-container">
        <h1 className="app-title">PERSONAL TASK MANAGER</h1>
      </div>

      <div className="tasks-panel">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
