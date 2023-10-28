import "./Option.css";
import { Option } from "../../../types/types.ts";

type OptionProps = {
  option: Option;
  font?: string;
};

function Option({ option }: OptionProps) {
  return (
    <option className={"font_option"} value={option.value}>
      {option.label}
    </option>
  );
}

export default Option;
