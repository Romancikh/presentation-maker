import "./ToolBar.css";
import Button from "../common/Button/Button.tsx";
import Input from "../common/Input/Input.tsx";
import { Option } from "../../types/types.ts";
import Select from "../common/Select/Select.tsx";
import { v4 as uuidv4 } from "uuid";

function ToolBar() {
  const fontOptions: Option[] = [
    {
      id: uuidv4(),
      label: "Roboto",
      value: "Roboto",
    },
    {
      id: uuidv4(),
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
