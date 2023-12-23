import React, { useContext, useEffect, useState } from "react";
import { Position, Presentation as TPresentation } from "../../types/types.ts";
import Menu from "../common/Menu/Menu.tsx";
import { PresentationContext } from "../../contexts/presentation.tsx";
import SlidePreview from "../SlidePreview/SlidePreview.tsx";
import { slideBarMenu } from "../../constants/SlideBar.ts";
import classes from "./SlideBar.module.css";
import store from "../../store/store.ts";
import { useAppSelector } from "../../store/hooks.ts";

function SlideBar() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
  const [opened, setOpened] = useState(false);

  const slides = useAppSelector(state => state.presentation.slides);
  const [previewSlides, setPreviewSlides] = useState(slides);

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

  useEffect(() => {
    if (previewSlides.length != slides.length) {
      setPreviewSlides([...slides]);
    }
  }, [slides]);

  return (
    <div onContextMenu={handleRightClickSlideBar} className={classes["slide-bar"]}>
      {previewSlides.length > 0 &&
        previewSlides.map((slide, index) => (
          <div key={slide.id} className={classes.element}>
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
