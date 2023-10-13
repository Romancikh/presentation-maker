import Button from "../Button/Button.tsx";
import classes from "./ToolBar.module.css";

function ToolBar() {
  return (
    <div className={classes.tool__bar}>
      <Button icon={"undo"} />
      <Button icon={"redo"} />
    </div>
  );
}

export default ToolBar;
