import "./ToolBar.css";
import Button from "../common/Button/Button.tsx";

function ToolBar() {
  return (
    <div className="tool-bar">
      <Button icon={"undo"} />
      <Button icon={"redo"} />
      <Button text={"Тема"} />
    </div>
  );
}

export default ToolBar;
