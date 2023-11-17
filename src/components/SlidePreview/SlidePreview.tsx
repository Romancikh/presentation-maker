import Block from "../common/Block/Block.tsx";
import React, { CSSProperties, useContext, useEffect, useState } from "react";
import { Position, Slide as TSlide } from "../../types/types.ts";
import classNames from "classnames";
import classes from "./SlidePreview.module.css";
import Menu from "../common/Menu/Menu.tsx";
import { PresentationContext } from "../../contexts/presentation.tsx";
import { slidePreviewMenu } from "../../constants/SlidePreview.ts";

type SlideProps = {
  slide: TSlide;
  className?: string;
};

function SlidePreview({ slide, className }: SlideProps) {
  const presentationContext = useContext(PresentationContext);
  const [isCurrent, setIsCurrent] = useState(
    presentationContext.presentation.selectSlides.includes(slide),
  );
  const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
  const [rightClick, setRightClick] = useState(false);

  const handleRightClickSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newPresentation = { ...presentationContext.presentation };
    const position: Position = {
      x: event.clientX,
      y: event.clientY,
    };
    newPresentation.currentSlide = slide;
    newPresentation.selectSlides.push(slide);
    setIsCurrent(true);
    setPositionMouse(position);
    setRightClick(!rightClick);
    presentationContext.setPresentation(newPresentation);
  };

  const handleLeftClickSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newPresentation = { ...presentationContext.presentation };
    newPresentation.currentSlide = slide;
    newPresentation.selectSlides.push(slide);
    presentationContext.setPresentation(newPresentation);
    setIsCurrent(!isCurrent);
  };

  const style: CSSProperties = {
    background: slide.background,
  };

  let classSlideSelect: string = "";
  if (isCurrent) {
    classSlideSelect = classes.slide__select;
  }

  const handleClickOutside = () => {
    if (rightClick) {
      setRightClick(!rightClick);
    }
  };

  useEffect(() => {
    presentationContext.presentation.selectSlides =
      presentationContext.presentation.selectSlides.filter(
        (slidePreview) => slidePreview !== slide,
      );
    setIsCurrent(presentationContext.presentation.selectSlides.includes(slide));
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [presentationContext]);

  return (
    <div>
      <div
        className={classNames(classes.slide, className, classSlideSelect)}
        style={style}
        onContextMenu={handleRightClickSlide}
        onClick={handleLeftClickSlide}
      >
        {slide.objects.map((object) => (
          <Block key={object.id} {...object} />
        ))}
      </div>
      {rightClick && (
        <Menu
          menuElements={slidePreviewMenu.menuElements}
          position={positionMouse}
        />
      )}
    </div>
  );
}

export default SlidePreview;
