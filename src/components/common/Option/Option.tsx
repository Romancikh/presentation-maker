import { Option } from "../../../types/types.ts";
import classes from "./Option.module.css";

type OptionProps = {
  option: Option;
  font?: string;
};

function Option({ option }: OptionProps) {
  return (
    <option className={classes.option} value={option.value}>
      {option.label}
    </option>
  );
}

export default Option;
