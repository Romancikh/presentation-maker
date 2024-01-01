import { useContext } from "react";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import { Text as TText } from "../../../types/types.ts";

type InputProps = { defaultValue?: string | number; placeholder?: string; className?: string };
function InputFontSize({ defaultValue, placeholder, className }: InputProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);

  const setSizeObjectText = (objectText: TText, oldFontSize: number): TText => {
    const newObjectText = { ...objectText };

    if (oldFontSize > newObjectText.data.fontSize) {
      newObjectText.size.width /= oldFontSize;
      newObjectText.size.height /= oldFontSize;
    } else if (oldFontSize < newObjectText.data.fontSize) {
      newObjectText.size.width *= newObjectText.data.fontSize;
      newObjectText.size.height *= newObjectText.data.fontSize;
    }

    return newObjectText;
  };

  const handleOnInput = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    let value: number = parseInt(target.value);
    if (isNaN(value)) {
      value = 11;
    }

    const newPresentation = { ...presentation };
    const currentSlide = newPresentation.currentSlide;
    if (currentSlide) {
      currentSlide.selectObjects.map(object => {
        if (object.type === "text") {
          const oldFontSize: number = object.data.fontSize;

          object.data.fontSize = value;
          object = setSizeObjectText(object, oldFontSize);
        }
      });
    }

    setPresentation(newPresentation);
  };
  return (
    <div>
      <input onInput={handleOnInput} className={className} defaultValue={defaultValue} placeholder={placeholder} />{" "}
    </div>
  );
}
export default InputFontSize;
