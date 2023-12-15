import {
  Image as TImage,
  Primitive as TPrimitive,
  Text as TText,
  Presentation as TPresentaion,
} from "../../../types/types";
import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";
import classes from "./Block.module.css";
import useDragAndDrop from "../../../hooks/useDragAndDrop.ts";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import { TonClickPresentation } from "../../SlideBar/SlideBar.tsx";

type BlockProps = TPrimitive | TImage | TText;

function Block({ id, position, size, rotation, type, data }: BlockProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [modelPosition, setModelPosition] = useState(position);
  const [isSelect, setIsSelect] = useState(false);

  const handleClick = () => {
    const newPresentation = { ...presentation };
    newPresentation.currentSlide?.objects.map((object) => {
      if (
        object.id === id &&
        !newPresentation.currentSlide?.selectObjects.includes(object)
      ) {
        newPresentation.currentSlide?.selectObjects.push(object);
        setIsSelect(true);
      } else {
        setIsSelect(false);
      }
    });
    setPresentation(newPresentation);
  };

  useDragAndDrop(modelPosition, setModelPosition);

  const centerX = size.width / 2;
  const centerY = size.height / 2;

  const style: CSSProperties = {
    height: size.height,
    left: modelPosition.x,
    top: modelPosition.y,
    transform: `rotate(${rotation}deg)`,
    transformOrigin: `${centerX}px ${centerY}px`,
    width: size.width,
  };

  let classBlockSelect: string = "";
  if (isSelect) {
    classBlockSelect = classes.block__select;
  }

  return (
    <div
      onClick={handleClick}
      className={classes.block + " " + classBlockSelect}
      style={style}
    >
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
