import Option from "../Option/Option.tsx";
import { Option as TOption } from "../../../types/types.ts";
import { ChangeEvent, useContext } from "react";
import { PresentationContext } from "../../../contexts/presentation.tsx";

type SelectProps = {
  options: TOption[];
  className?: string;
};

function Select({ className, options }: SelectProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);

  const handleChooseFontFamily = (event: ChangeEvent): void => {
    const newPresentation = { ...presentation };
    const currentSlide = newPresentation.currentSlide;
    if (currentSlide) {
      currentSlide.selectObjects.map((object) => {
        if (object.type === "text") {
          object.data.fontFamily = event.target.value;
        }
      });
    }
    setPresentation(newPresentation);
  };

  return (
    <select onChange={(event) => handleChooseFontFamily(event)} className={className}>
      {options.map((option) => (
        <Option key={option.id} option={option} />
      ))}
    </select>
  );
}

export default Select;
