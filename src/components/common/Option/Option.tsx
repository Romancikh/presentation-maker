import { Option } from "../../../types/types.ts";

type OptionProps = {
  option: Option;
  font?: string;
};

function Option({ option }: OptionProps) {
  return (
    <div>
      <option value={option.value}>{option.label}</option>
    </div>
  );
}

export default Option;
