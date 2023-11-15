import Button from "../common/Button/Button.tsx";
import Input from "../common/Input/Input.tsx";
import MenuButtonPrimitives from "../common/MenuButtonPrimitives/MenuButtonPrimitives.tsx";
import Select from "../common/Select/Select.tsx";
import classes from "./ToolBar.module.css";
import { fontOptions } from "../../constants/ToolBar.ts";

function ToolBar() {
  return (
    <div className={classes["tool-bar"]}>
      <Button icon={"undo"} />
      <Button icon={"redo"} />
      <Button text={"Тема"} />
      <MenuButtonPrimitives />
      <Button icon={"insert_text"} />
      <Button icon={"image"} />
      <Select options={fontOptions} className={classes["font-select"]} />
      <Button icon={"remove"} />
      <Input defaultValue={11} className={classes["font-size-input"]} />
      <Button icon={"add"} />
      <Button icon={"format_bold"} />
      <Button icon={"format_italic"} />
      <Button icon={"format_underlined"} />
    </div>
  );
}

export default ToolBar;
