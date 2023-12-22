import React, { CSSProperties, useContext, useState } from "react";
import classNames from "classnames";
import Block from "../common/Block/Block.tsx";
import { PresentationContext } from "../../contexts/presentation.tsx";
import { Slide as TSlide } from "../../types/types.ts";
import classes from "./SlidePreview.module.css";

type SlideProps = {
  slide: TSlide;
  className?: string;
};

function SlidePreview({ slide, className }: SlideProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [selectedSlides] = useState([...presentation.selectSlides]);
  const [isSelect, setIsSelect] = useState(selectedSlides.includes(slide));

  const handleLeftClickSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newPresentation = { ...presentation };
    if (newPresentation.currentSlide !== slide && !newPresentation.selectSlides.includes(slide)) {
      newPresentation.currentSlide = slide;
      newPresentation.selectSlides.push(slide);
      setIsSelect(true);
    } else if (newPresentation.currentSlide !== slide && newPresentation.selectSlides.includes(slide)) {
      newPresentation.selectSlides = newPresentation.selectSlides.filter(selectSlide => selectSlide !== slide);
      setIsSelect(false);
    } else if (newPresentation.currentSlide === slide && !newPresentation.selectSlides.includes(slide)) {
      newPresentation.selectSlides.push(slide);
      setIsSelect(true);
    }

    setPresentation(newPresentation);
  };

  const style: CSSProperties = {
    background: slide.background,
  };

  let classSlideSelect: string = "";
  if (isSelect || presentation.currentSlide === slide) {
    classSlideSelect = classes.select;
  }

  return (
    <div>
      <div
        className={classNames(classes.slide, className, classSlideSelect)}
        style={style}
        onClick={handleLeftClickSlide}
      >
        {slide.objects.map(object => (
          <Block key={object.id} {...object} isWorkSpace={false} />
        ))}
      </div>
    </div>
  );
}

export default SlidePreview;
