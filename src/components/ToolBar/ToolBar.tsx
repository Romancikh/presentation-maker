import { useContext } from "react";
import Button from "../common/Button/Button.tsx";
import Input from "../common/Input/Input.tsx";
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
import { useAppActions } from "../../store/hooks.ts";
import classes from "./ToolBar.module.css";
import InputColor from "../common/InputColor/InputColor.tsx";

function ToolBar() {
  const { presentation, setPresentation } = useContext(PresentationContext);

  const {
    createPrimitiveAction,
    createChangeBoldTextAction,
    createChangeItalicTextAction,
    createChangeUnderlineTextAction,
  } = useAppActions();

  const handleOnClickText = () => {
    createPrimitiveAction("text");
  };

  return (
    <div className={classes["tool-bar"]}>
      <Button icon={"undo"} />
      <Button icon={"redo"} />
      <Button text={"Тема"} />
      <MenuButtonPrimitives />
      <Button
        icon={"insert_text"}
        onClick={() => {
          handleOnClickText();
        }}
      />
      {/*<Button icon={"image"} />*/}
      <InputImage icon={"image"} />
      <InputColor icon={"palette"} />
      <Select options={fontOptions} className={classes["font-select"]} />
      <Input defaultValue={11} className={classes["size-shrift-input"]} />
      <Button
        onClick={() => {
          createChangeBoldTextAction();
        }}
        icon={"format_bold"}
      />
      <Button
        onClick={() => {
          createChangeItalicTextAction();
        }}
        icon={"format_italic"}
      />
      <Button
        onClick={() => {
          createChangeUnderlineTextAction();
        }}
        icon={"format_underlined"}
      />
    </div>
  );
}

export default ToolBar;
