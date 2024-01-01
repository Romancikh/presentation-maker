import { CSSProperties, useContext, useEffect, useState } from "react";
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

function Block({ id, size, rotation, type, data, isWorkSpace }: BlockProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [selectClass, setSelectClass] = useState("");

  const handleClick = () => {
    const newPresentation = { ...presentation };

    newPresentation.currentSlide?.objects.map(object => {
      if (object.id === id && !newPresentation.currentSlide?.selectObjects.includes(object)) {
        newPresentation.currentSlide?.selectObjects.push(object);
        setSelectClass(classes.select);
      } else if (object.id === id && newPresentation.currentSlide?.selectObjects.includes(object)) {
        if (newPresentation.currentSlide !== null) {
          newPresentation.currentSlide.selectObjects = newPresentation.currentSlide.selectObjects.filter(object => {
            setSelectClass("");
            return object.id !== id;
          });
        }
      }
    });

    setPresentation(newPresentation);
  };

  useDragAndDrop(`${id}-workspace`);

  const centerX = size.width / 2;
  const centerY = size.height / 2;

  const style: CSSProperties = {
    height: size.height,
    transform: `rotate(${rotation}deg)`,
    transformOrigin: `${centerX}px ${centerY}px`,
    width: size.width,
  };

  const setSizeTextBlock = (objectText: TText, type: "enter" | "newLine" | "del"): void => {
    if (type === "enter") {
      objectText.size.width = (objectText.data.text.length * objectText.data.fontSize) / 1.5;
    } else if (type === "newLine") {
      objectText.size.height += objectText.data.fontSize * 2;
    } else if (type === "del") {
      objectText.size.width = (objectText.data.text.length * objectText.data.fontSize) / 1.5;
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newPresentation = { ...presentation };
      const enterKey = event.key;

      if (event.target.value) {
        return;
      }

      console.log(enterKey);

      newPresentation.currentSlide?.selectObjects.map(object => {
        if (object.id === id && object.type === "text") {
          if (enterKey.length === 1) {
            setSizeTextBlock(object, "enter");
            object.data.text += enterKey;
          } else if (enterKey === "Enter") {
            setSizeTextBlock(object, "newLine");
            object.data.text += "\n\n";
          } else if (enterKey === "Backspace") {
            setSizeTextBlock(object, "del");
            object.data.text = object.data.text.slice(0, -1);
          }
        }
      });

      if (enterKey === "ArrowLeft") {
        newPresentation.currentSlide?.selectObjects.map(selectObject => {
          selectObject.rotation -= 5;
        });
      } else if (enterKey === "ArrowRight") {
        newPresentation.currentSlide?.selectObjects.map(selectObject => {
          selectObject.rotation += 5;
        });
      } else if (enterKey === "ArrowUp") {
        newPresentation.currentSlide?.selectObjects.map(selectObject => {
          selectObject.size.width += 5;
          selectObject.size.height += 5;
        });
      } else if (enterKey === "ArrowDown") {
        newPresentation.currentSlide?.selectObjects.map(selectObject => {
          selectObject.size.width -= 5;
          selectObject.size.height -= 5;
        });
      }

      if (enterKey === "Delete") {
        if (newPresentation.currentSlide !== null) {
          const selectObjectIds: string[] = [];
          newPresentation.currentSlide?.selectObjects.map(object => {
            selectObjectIds.push(object.id);
          });

          newPresentation.currentSlide.objects = newPresentation.currentSlide.objects.filter(object => {
            return !selectObjectIds.includes(object.id);
          });

          newPresentation.currentSlide.selectObjects = [];
        }
      }

      setPresentation(newPresentation);
    };

    if (isWorkSpace) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [type, isWorkSpace, presentation, id, setPresentation]);

  return (
    <div
      id={`${id}${isWorkSpace ? `-workspace` : ``}`}
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
