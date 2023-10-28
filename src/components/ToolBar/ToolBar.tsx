import "./ToolBar.css";
import Button from "../common/Button/Button.tsx";
import { Option } from "../../types/types.ts";
import Input from "../common/Input/Input.tsx";
import Select from "../common/Select/Select.tsx";

function ToolBar() {
  const fontOptions: Option[] = [
    {
      label: "Roboto",
      value: "Roboto",
    },
    {
      label: "Arial",
      value: "Arial",
    },
  ];

  return (
    <div className="tool-bar">
      <Button icon={"undo"} />
      <Button icon={"redo"} />
      <Button text={"Тема"} />
      <Button icon={"category"} />
      <Button icon={"insert_text"} />
      <Button icon={"image"} />
      <Select options={fontOptions} className={"font__select"} />
      <Button icon={"remove"} />
      <Input defaultValue={11} className={"size-shrift__input"} />
      <Button icon={"add"} />
      <Button icon={"format_bold"} />
      <Button icon={"format_italic"} />
      <Button icon={"format_underlined"} />
    </div>
  );
}

export default ToolBar;
