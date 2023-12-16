import { Dispatch, MutableRefObject, SetStateAction, useContext, useEffect, useState } from "react";
import { Position } from "../types/types.ts";
import { PresentationContext } from "../contexts/presentation.tsx";

const useDragAndDrop = (
  blockRef: MutableRefObject<HTMLDivElement | null>,
  objectId: string,
  modelPosition: Position,
  setModelPos: Dispatch<SetStateAction<Position>>
) => {
  const { presentation } = useContext(PresentationContext);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const delta = { x: e.pageX - startPos.x, y: e.pageY - startPos.y };
    const newPos = {
      x: modelPosition.x + delta.x,
      y: modelPosition.y + delta.y,
    };
    setModelPos(newPos);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseMove);
  };

  const handleMouseDown = (e: MouseEvent) => {
    setStartPos({ x: e.pageX, y: e.pageY });
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const area = blockRef.current;
    if (area === null) {
      return;
    }

    // TODO: Сделать проверку, что это текущий объект
    // const isObjectSelected = () => {
    //   if (presentation.currentSlide !== null) {
    //     for (const object of presentation.currentSlide.selectObjects) {
    //       if (object.id === objectId) {
    //         return true;
    //       }
    //     }
    //   }
    //   return false;
    // };
    //
    // if (isObjectSelected()) {
    //   area.addEventListener("mousedown", handleMouseDown);
    // }

    area.addEventListener("mousedown", handleMouseDown);

    return () => {
      area.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown, handleMouseMove, presentation, blockRef, objectId]);
};

export default useDragAndDrop;
