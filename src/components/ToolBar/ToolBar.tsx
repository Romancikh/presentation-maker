import { useContext } from "react";
import Button from "../common/Button/Button.tsx";
import MenuButtonPrimitives from "../common/MenuButtonPrimitives/MenuButtonPrimitives.tsx";
import Select from "../common/Select/Select.tsx";
import {
  fontOptions,
  insertTextOnClick,
  italicOnClick,
  boldOnClick,
  underlineOnClick,
} from "../../constants/ToolBar.ts";
import { PresentationContext } from "../../contexts/presentation.tsx";
import InputImage from "../common/InputImage/InputImage.tsx";
import classes from "./ToolBar.module.css";
import InputFontSize from "../common/InputFontSize/InputFontSize.tsx";
import InputColor from "../common/InputColor/InputColor.tsx";

function ToolBar() {
  const { presentation, setPresentation } = useContext(PresentationContext);

  return (
    <div className={classes["tool-bar"]}>
      <Button icon={"undo"} />
      <Button icon={"redo"} />
      <Button text={"Тема"} />
      <MenuButtonPrimitives />
      <Button
        icon={"insert_text"}
        onClick={() => {
          insertTextOnClick(presentation, setPresentation);
        }}
      />
      {/*<Button icon={"image"} />*/}
      <InputImage icon={"image"} />
      <InputColor icon={"palette"} />
      <Select options={fontOptions} className={classes["font-select"]} />
      <InputFontSize defaultValue={11} className={classes["size-shrift-input"]} />
      <Button
        onClick={() => {
          boldOnClick(presentation, setPresentation);
        }}
        icon={"format_bold"}
      />
      <Button
        onClick={() => {
          italicOnClick(presentation, setPresentation);
        }}
        icon={"format_italic"}
      />
      <Button
        onClick={() => {
          underlineOnClick(presentation, setPresentation);
        }}
        icon={"format_underlined"}
      />
    </div>
  );
}

export default ToolBar;
