import { useContext } from "react";
import { fontOptions } from "../../constants/ToolBar.ts";
import { PresentationContext } from "../../contexts/presentation.tsx";
import { useToolBar } from "../../hooks/useToolBar.ts";
import Button from "../common/Button/Button.tsx";
import Input from "../common/Input/Input.tsx";
import MenuButtonPrimitives from "../common/MenuButtonPrimitives/MenuButtonPrimitives.tsx";
import Select from "../common/Select/Select.tsx";
import classes from "./ToolBar.module.css";

function ToolBar() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const { download, upload } = useToolBar(presentation, setPresentation);

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
      <Button icon={"download"} onClick={download} />
      <Button icon={"upload_file"} onClick={upload} />
    </div>
  );
}

export default ToolBar;
