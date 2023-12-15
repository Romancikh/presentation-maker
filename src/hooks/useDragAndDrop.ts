import { useEffect, useState } from "react";
import { Position } from "../types/types.ts";

const useDragAndDrop = (
  modelPosition: Position,
  setModelPos: React.Dispatch<React.SetStateAction<Position>>,
) => {
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
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown, handleMouseMove]);
};

export default useDragAndDrop;
