import Option from "../Option/Option.tsx";
import { Option as TOption } from "../../../types/types.ts";

type SelectProps = {
  options: TOption[];
};

function Select({ options }: SelectProps) {
  return (
    <select>
      {options.map((option) => (
        <Option option={option} />
      ))}
    </select>
  );
}

export default Select;
