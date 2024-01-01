import Button from "../Button/Button.tsx";
import { onClickEllipse, onClickRectangle, onClickTriangle } from "../../../constants/MenuPrimirives.ts";
import { TonClickPresentation } from "../../SlideBar/SlideBar.tsx";
import classes from "./MenuPrimitives.module.css";
import { useContext, useRef } from "react";
import { Block, Image, Position, Size } from "../../../types/types.ts";
import { v4 as uuidv4 } from "uuid";
import { PresentationContext } from "../../../contexts/presentation.tsx";

type MenuPrimitivesProps = {
  onChoice: (onClickPrimitives: TonClickPresentation) => void;
};

function MenuPrimitives({ onChoice }: MenuPrimitivesProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const fileInput = useRef<HTMLInputElement>(null);
  const handleOnClickImage = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPresentation = { ...presentation };

    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;

        const defaultSize: Size = {
          height: 20,
          width: 20,
        };

        const defaultPosition: Position = {
          x: 0,
          y: 0,
        };

        const image: Image & Block = {
          data: {
            alt: "",
            src: imageDataUrl ? imageDataUrl : "",
            size: defaultSize,
          },
          id: uuidv4(),
          position: defaultPosition,
          rotation: 0,
          size: defaultSize,
          type: "image",
        };

        newPresentation.currentSlide?.objects.push(image);
        setPresentation(newPresentation);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.body}>
      <Button icon={"rectangle"} onClick={() => onChoice(onClickRectangle)} />
      <Button icon={"circle"} onClick={() => onChoice(onClickEllipse)} />
      <Button icon={"change_history"} onClick={() => onChoice(onClickTriangle)} />
      <Button
        icon={"add_photo_alternate"}
        onClick={() => {
          handleOnClickImage();
        }}
        onChange={event => {
          handleFileChange(event);
        }}
        fileInput={fileInput}
      />
    </div>
  );
}

export default MenuPrimitives;
