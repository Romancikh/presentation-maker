import { ChangeEvent, useContext } from "react";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import classes from "./InputImage.module.css";

type InputImageProps = {
  icon: string;
};

function InputImage({ icon }: InputImageProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const newPresentation = { ...presentation };

      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;

        if (newPresentation.currentSlide) {
          newPresentation.currentSlide.background = imageDataUrl;
        }
      };
      reader.readAsDataURL(file);

      setPresentation(newPresentation);
    }
  };

  return (
    <div>
      <label id="imageInput">
        <span className={"material-symbols-outlined"}>{icon}</span>
        <input className={classes.hidden} id="imageInput" type="file" accept="image/*" onChange={handleImageChange} />
      </label>
    </div>
  );
}

export default InputImage;
