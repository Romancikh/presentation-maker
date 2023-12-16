import { useContext, useEffect, useState } from "react";
import { Position } from "../types/types.ts";
import { PresentationContext } from "../contexts/presentation.tsx";
import block from "../components/common/Block/Block.tsx";

const useDragAndDrop = (
  blockRef: React.MutableRefObject<HTMLDivElement | null>,
  objectId: string,
  modelPosition: Position,
  setModelPos: React.Dispatch<React.SetStateAction<Position>>,
) => {
  const { presentation, setPresentation } = useContext(PresentationContext);
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

    // TODO: Сделаь провекру что это текущий объект
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
