import { ChangeEvent, useContext } from "react";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import classes from "./InputColor.module.css";

type InputImageProps = {
  icon: string;
};

function InputColor({ icon }: InputImageProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPresentation = { ...presentation };

    if (newPresentation.currentSlide?.selectObjects.length === 0) {
      newPresentation.currentSlide.background = event.target.value;
    } else {
      newPresentation.currentSlide?.selectObjects.map(object => {
        if (object.type === "text" || object.type === "primitive") {
          object.data.color = event.target.value;
        }
      });
    }

    setPresentation(newPresentation);
  };

  return (
    <div>
      <label className={classes.button} id="colorInput">
        <span className={"material-symbols-outlined"}>{icon}</span>
        <input className={classes.hidden} id="colorInput" type="color" onChange={handleImageChange} />
      </label>
    </div>
  );
}

export default InputColor;
