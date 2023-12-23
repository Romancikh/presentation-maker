import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import { Image as TImage, Primitive as TPrimitive, Text as TText } from "../../../types/types.ts";
import useDragAndDrop from "../../../hooks/useDragAndDrop.ts";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import Image from "../Image/Image.tsx";
import Text from "../Text/Text.tsx";
import Primitive from "../Primitive/Primitive.tsx";
import classes from "./Block.module.css";
import classNames from "classnames";
import { useAppActions, useAppSelector } from "../../../store/hooks.ts";

type BlockProps = {
  object: TPrimitive | TImage | TText;
  isWorkSpace: boolean;
};

function Block({ object, isWorkSpace }: BlockProps) {
  const presentation = useAppSelector(state => state.presentation);

  const [modelPosition, setModelPosition] = useState(object.position);
  const [isSelect, setIsSelect] = useState(false);
  const blockRef = useRef<HTMLDivElement | null>(null);

  const { createSelectPrimitiveAction, changeTextAction, createDeletePrimitiveAction } = useAppActions();

  const handleClick = () => {
    createSelectPrimitiveAction(object);
  };

  if (isWorkSpace) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDragAndDrop(blockRef, object.id, modelPosition, setModelPosition);
  }

  const centerX = object.size.width / 2;
  const centerY = object.size.height / 2;

  const style: CSSProperties = {
    height: object.size.height,
    left: modelPosition.x,
    top: modelPosition.y,
    transform: `rotate(${object.rotation}deg)`,
    transformOrigin: `${centerX}px ${centerY}px`,
    width: object.size.width,
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const enterKey = event.key;

      if (object.type === "text") {
        changeTextAction(object, enterKey);
      }

      if (enterKey === "Delete" && presentation.currentSlide?.selectObjects.length !== 0) {
        createDeletePrimitiveAction();
      }
    };

    if (isWorkSpace) {
      window.addEventListener("keydown", handleKeyPress);
    }

    if (presentation.currentSlide?.selectObjects.includes(object)) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }

    return () => {
      // window.removeEventListener("keydown", handleKeyPress);
    };
  }, [object, isWorkSpace, presentation]);

  return (
    <div
      ref={blockRef}
      onClick={handleClick}
      className={classNames(classes.block, isSelect ? classes.select : "")}
      style={style}
    >
      {object.type === "image" && <Image data={object.data} />}
      {object.type === "primitive" && <Primitive data={object.data} />}
      {object.type === "text" && <Text data={object.data} />}
    </div>
  );
}

export default Block;
