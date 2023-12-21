import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import { Image as TImage, Primitive as TPrimitive, Text as TText } from "../../../types/types.ts";
import useDragAndDrop from "../../../hooks/useDragAndDrop.ts";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import Image from "../Image/Image.tsx";
import Text from "../Text/Text.tsx";
import Primitive from "../Primitive/Primitive.tsx";
import classes from "./Block.module.css";

type BlockProps = (TPrimitive | TImage | TText) & {
  isWorkSpace: boolean;
};

function Block({ id, position, size, rotation, type, data, isWorkSpace }: BlockProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [modelPosition, setModelPosition] = useState(position);
  const [selectClass, setSelectClass] = useState("");
  const blockRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    const newPresentation = { ...presentation };

    newPresentation.currentSlide?.objects.map((object) => {
      if (object.id === id && !newPresentation.currentSlide?.selectObjects.includes(object)) {
        newPresentation.currentSlide?.selectObjects.push(object);
        setSelectClass(classes.select);
      } else if (object.id === id && newPresentation.currentSlide?.selectObjects.includes(object)) {
        if (newPresentation.currentSlide !== null) {
          newPresentation.currentSlide.selectObjects = newPresentation.currentSlide.selectObjects.filter((object) => {
            setSelectClass("");
            return object.id !== id;
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

  const setSizeObjectText = (objectText: TText, type: "enter" | "newLine" | "del"): TText => {
    const newObjectText = { ...objectText };
    let text: string = "";

    for (const char of objectText.data.text) {
      if (char === "\n") {
        text += "\n";
      } else {
        text += char;
      }
    }

    if (type === "enter") {
      newObjectText.size.width += newObjectText.data.fontSize;
    } else if (type === "newLine") {
      newObjectText.size.height += newObjectText.data.fontSize;
    } else if (type === "del") {
      newObjectText.size.width -= newObjectText.data.fontSize;
    }

    newObjectText.data.text = text;
    return newObjectText;
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newPresentation = { ...presentation };
      const enterKey = event.key;

      newPresentation.currentSlide?.selectObjects.map((object) => {
        if (object.id === id && object.type === "text") {
          if (enterKey.length === 1) {
            object.data.text += enterKey;
            object = setSizeObjectText(object, "enter");
          } else if (enterKey === "Enter") {
            object.data.text += "\n";
            object = setSizeObjectText(object, "newLine");
          } else if (enterKey === "Backspace") {
            object.data.text = object.data.text.slice(0, -1);
            object = setSizeObjectText(object, "del");
          }
          setPresentation(newPresentation);
        }
      });

      if (enterKey === "Delete") {
        if (newPresentation.currentSlide !== null) {
          const selectObjectIds: string[] = [];
          newPresentation.currentSlide?.selectObjects.map((object) => {
            selectObjectIds.push(object.id);
          });

          newPresentation.currentSlide.objects = newPresentation.currentSlide.objects.filter((object) => {
            return !selectObjectIds.includes(object.id);
          });

          newPresentation.currentSlide.selectObjects = [];
        }
        setPresentation(newPresentation);
      }
    };

    if (isWorkSpace) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [type, isWorkSpace, presentation, id, setPresentation]);

  return (
    <div ref={blockRef} onClick={handleClick} className={classes.block + " " + selectClass} style={style}>
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
