import { Option } from "../../../types/types.ts";

type SelectProps = {
  options: Option[];
};

function Select({ options }: SelectProps) {
  return (
    <select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
