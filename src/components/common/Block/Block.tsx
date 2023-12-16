import {
  Image as TImage,
  Primitive as TPrimitive,
  Text as TText,
} from "../../../types/types";
import React, {
  CSSProperties,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";
import classes from "./Block.module.css";
import useDragAndDrop from "../../../hooks/useDragAndDrop.ts";
import { PresentationContext } from "../../../contexts/presentation.tsx";

type BlockProps = (TPrimitive | TImage | TText) & {
  isWorkSpace: boolean;
};

function Block({
  id,
  position,
  size,
  rotation,
  type,
  data,
  isWorkSpace,
}: BlockProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [modelPosition, setModelPosition] = useState(position);
  const [selectClass, setSelectClass] = useState("");
  const blockRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    const newPresentation = { ...presentation };

    newPresentation.currentSlide?.objects.map((object) => {
      if (
        object.id === id &&
        !newPresentation.currentSlide?.selectObjects.includes(object)
      ) {
        newPresentation.currentSlide?.selectObjects.push(object);
        setSelectClass(classes.block__select);
      } else if (
        object.id === id &&
        newPresentation.currentSlide?.selectObjects.includes(object)
      ) {
        if (newPresentation.currentSlide !== null) {
          newPresentation.currentSlide.selectObjects =
            newPresentation.currentSlide.selectObjects.filter((object) => {
              object.id !== id;
              setSelectClass("");
            });
        }
      }
    });

    setPresentation(newPresentation);
  };

  if (isWorkSpace) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDragAndDrop(blockRef, id, modelPosition, setModelPosition);
  }

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

  const handleKeyPress = (event: KeyboardEvent) => {
    const newPresentation = { ...presentation };
    const enterKey = event.key;

    newPresentation.currentSlide?.selectObjects.map((object) => {
      if (object.id === id && object.type === "text") {
        if (enterKey.length === 1) {
          object.data.text += enterKey;
        } else if (enterKey === "Enter") {
          object.data.text += "\n";
        } else if (enterKey === "Backspace") {
          object.data.text = object.data.text.slice(0, -1);
        }
        setPresentation(newPresentation);
      }
    });

    if (enterKey === "Delete") {
      if (newPresentation.currentSlide !== null) {
        newPresentation.currentSlide.selectObjects = [];
      }
      setPresentation(newPresentation);
    }
  };

  useEffect(() => {
    if (isWorkSpace) {
      console.log(isWorkSpace);
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [type, isWorkSpace, presentation]);

  return (
    <div
      ref={blockRef}
      onClick={handleClick}
      className={classes.block + " " + selectClass}
      style={style}
    >
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
