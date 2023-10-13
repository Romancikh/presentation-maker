import "./ToolBar.css";
import Button from "../Button/Button.tsx";

function ToolBar() {
  return (
    <div className="tool-bar">
      <Button icon={"undo"} position="toolbar" />
      <Button icon={"redo"} position="toolbar" />
    </div>
  );
}

export default ToolBar;
