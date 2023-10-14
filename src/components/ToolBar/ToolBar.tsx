import "./ToolBar.css";
import Button from "../Button/Button.tsx";

function ToolBar() {
  return (
    <div className="tool-bar">
      <Button icon={"undo"} />
      <Button icon={"redo"} />
    </div>
  );
}

export default ToolBar;
