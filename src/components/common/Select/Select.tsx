import Option from "../Option/Option.tsx";
import { Option as TOption } from "../../../types/types.ts";

type SelectProps = {
  options: TOption[];
  className?: string;
};

function Select({ className, options }: SelectProps) {
  return (
    <select className={className}>
      {options.map((option) => (
        <Option option={option} />
      ))}
    </select>
  );
}

export default Select;
