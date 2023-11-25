import React, { CSSProperties, useContext, useEffect, useState } from "react";
import Block from "../common/Block/Block.tsx";
import { PresentationContext } from "../../contexts/presentation.tsx";
import { Slide as TSlide } from "../../types/types.ts";
import classNames from "classnames";
import classes from "./SlidePreview.module.css";
import { createLogger } from "vite";

type SlideProps = {
  slide: TSlide;
  className?: string;
};

function SlidePreview({ slide, className }: SlideProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [selectedSlides, setSelectedSlides] = useState([
    ...presentation.selectSlides,
  ]);
  const [isSelect, setIsSelect] = useState(selectedSlides.includes(slide));

  const handleLeftClickSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newPresentation = { ...presentation };
    if (
      newPresentation.currentSlide !== slide &&
      !newPresentation.selectSlides.includes(slide)
    ) {
      newPresentation.currentSlide = slide;
      newPresentation.selectSlides.push(slide);
      setIsSelect(true);
    } else if (
      newPresentation.currentSlide !== slide &&
      newPresentation.selectSlides.includes(slide)
    ) {
      newPresentation.selectSlides = newPresentation.selectSlides.filter(
        (selectSlide) => selectSlide !== slide,
      );
      setIsSelect(false);
    } else if (
      newPresentation.currentSlide === slide &&
      !newPresentation.selectSlides.includes(slide)
    ) {
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
    classSlideSelect = classes.slide__select;
  }

  // useEffect(() => {
  //   if (selectedSlides.length != presentation.selectSlides.length) {
  //     setSelectedSlides([...presentation.selectSlides]);
  //   }
  // }, [presentation]);

  return (
    <div>
      <div
        className={classNames(classes.slide, className, classSlideSelect)}
        style={style}
        onClick={handleLeftClickSlide}
      >
        {slide.objects.map((object) => (
          <Block key={object.id} {...object} />
        ))}
      </div>
    </div>
  );
}

export default SlidePreview;
