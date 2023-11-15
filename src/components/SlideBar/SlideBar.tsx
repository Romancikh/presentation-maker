import { Position, Slide as TSlide } from "../../types/types.ts";
import React, { useEffect, useState } from "react";
import Menu from "../common/Menu/Menu.tsx";
import SlidePreview from "../SlidePreview/SlidePreview.tsx";
import classes from "./SlideBar.module.css";
import { slideBarMenu } from "../../constants/SlideBar.ts";

type SlideBarProps = {
  slides: TSlide[];
};

function SlideBar({ slides }: SlideBarProps) {
  const [previewSlides, setPreviewSlides] = useState([...slides]);
  const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
  const [rightClick, setRightClick] = useState(false);
  const handleRightClickSlideBar = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    const position: Position = {
      x: event.clientX,
      y: event.clientY,
    };
    setPositionMouse(position);
    setRightClick(!rightClick);
  };

  const handleClickOutside = () => {
    if (rightClick) {
      setRightClick(!rightClick);
    }
  };

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    const sourceIndex = Number(event.dataTransfer.getData("index"));
    const newItems = [...previewSlides];
    const [removedItem] = newItems.splice(sourceIndex, 1);
    newItems.splice(index, 0, removedItem);
    setPreviewSlides(newItems);
  };

  useEffect(() => {
    if (previewSlides.length != slides.length) {
      setPreviewSlides([...slides]);
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside, slides]);

  return (
    <div
      onContextMenu={handleRightClickSlideBar}
      className={classes["slide-bar"]}
    >
      {previewSlides.length > 0 &&
        previewSlides.map((slide, index) => (
          <div
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
            key={slide.id}
            className={classes.element}
          >
            <div className={classes.index}>{index + 1}</div>
            <div className={classes.wrapper}>
              <SlidePreview slide={slide} className={classes.slide} />
            </div>
          </div>
        ))}
      {rightClick && (
        <Menu
          menuElements={slideBarMenu.menuElements}
          position={positionMouse}
        />
      )}
    </div>
  );
}

export default SlideBar;
