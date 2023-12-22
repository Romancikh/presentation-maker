import React, { useContext, useEffect, useState } from "react";
import { Position, Presentation as TPresentation, Slide as TSlide } from "../../types/types.ts";
import Menu from "../common/Menu/Menu.tsx";
import { PresentationContext } from "../../contexts/presentation.tsx";
import SlidePreview from "../SlidePreview/SlidePreview.tsx";
import { slideBarMenu } from "../../constants/SlideBar.ts";
import classes from "./SlideBar.module.css";

type SlideBarProps = {
  slides: TSlide[];
};

function SlideBar({ slides }: SlideBarProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [previewSlides, setPreviewSlides] = useState([...slides]);
  const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
  const [opened, setOpened] = useState(false);

  const onClose = () => {
    setOpened(false);
  };
  const handleRightClickSlideBar = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const position: Position = {
      x: event.clientX,
      y: event.clientY,
    };
    setPositionMouse(position);
    setOpened(true);
  };

  const handleClick = (onClickOut: TonClickPresentation) => {
    onClickOut(presentation, setPresentation);
    setOpened(false);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    const sourceIndex = Number(event.dataTransfer.getData("index"));
    const newItems = [...previewSlides];
    const [removedItem] = newItems.splice(sourceIndex, 1);
    newItems.splice(index, 0, removedItem);
    setPreviewSlides(newItems);
  };

  useEffect(() => {
    if (previewSlides.length != presentation.slides.length) {
      setPreviewSlides([...presentation.slides]);
    }
  }, [presentation, previewSlides.length, slides]);

  return (
    <div onContextMenu={handleRightClickSlideBar} className={classes["slide-bar"]}>
      {previewSlides.length > 0 &&
        previewSlides.map((slide, index) => (
          <div
            draggable
            onDragStart={event => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={event => handleDrop(event, index)}
            key={slide.id}
            className={classes.element}
          >
            <div className={classes.index}>{index + 1}</div>
            <div className={classes.wrapper}>
              <SlidePreview slide={slide} className={classes.slide} />
            </div>
          </div>
        ))}

      <Menu
        menuElements={slideBarMenu.menuElements}
        position={positionMouse}
        opened={opened}
        onClose={onClose}
        onClick={handleClick}
      />
    </div>
  );
}

export default SlideBar;

export type TonClickPresentation = (
  presentation: TPresentation,
  setPresentation: (presentation: TPresentation) => void
) => void;
