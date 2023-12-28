import { useAppActions } from "../../../store/hooks.ts";
import { useState } from "react";

type InputProps = {
  defaultValue?: string | number;
  placeholder?: string;
  className?: string;
};

function Input({ defaultValue, placeholder, className }: InputProps) {
  const [value, setValue] = useState(defaultValue);
  const { createChangeSizeTextAction } = useAppActions();

  const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    let value: number = parseInt(target.value);
    if (isNaN(value)) {
      value = 11;
    }
    setValue(value);
    createChangeSizeTextAction(value);
  };

  return (
    <div>
      <input onInput={handleOnInput} className={className} defaultValue={value} placeholder={placeholder} />
    </div>
  );
}

export default Input;
