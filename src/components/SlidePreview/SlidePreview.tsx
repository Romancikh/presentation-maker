import React, { CSSProperties, useContext, useEffect, useState } from "react";
import classNames from "classnames";
import Block from "../common/Block/Block.tsx";
import { PresentationContext } from "../../contexts/presentation.tsx";
import { Slide as TSlide } from "../../types/types.ts";
import classes from "./SlidePreview.module.css";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";

type SlideProps = {
  slide: TSlide;
  className?: string;
};

function SlidePreview({ slide, className }: SlideProps) {
  const presentation = useAppSelector(state => state.presentation);

  const [selectedSlides] = useState([...presentation.selectSlides]);
  const [isSelect, setIsSelect] = useState(selectedSlides.includes(slide));
  const { createSelectSlideAction } = useAppActions();

  const handleLeftClickSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    createSelectSlideAction(slide);
  };

  const style: CSSProperties = {
    background: slide.background,
  };

  useEffect(() => {
    if (presentation.selectSlides.includes(slide)) {
      return setIsSelect(true);
    } else {
      setIsSelect(false);
    }

    return;
  }, [presentation]);

  return (
    <div>
      <div
        className={classNames(classes.slide, className, isSelect ? classes.select : "")}
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
