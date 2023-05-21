import { MdLightbulb, MdStar } from "react-icons/md";
import "./App.css";
import LeftPanel from "./components/leftPanel";
import RightPanel from "./components/rightPanel";
import "./index.css";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <div onClick={handleThemeToggle} className="theme-toggle">
        {!isDark ? (
          <MdLightbulb size={"24px"} />
        ) : (
          <MdStar size={"24px"} color={"#F7ECDE"} />
        )}
      </div>
      <div className="app-title-container">
        <h1 className="app-title">PERSONAL TASK MANAGER</h1>
      </div>

      <div className="tasks-panel">
        <LeftPanel isDark={isDark} />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
