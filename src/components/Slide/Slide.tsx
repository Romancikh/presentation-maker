import Block from "../common/Block/Block.tsx";
import { CSSProperties, useContext } from "react";
import { Slide as TSlide } from "../../types/types.ts";
import classNames from "classnames";
import classes from "./Slide.module.css";
import { PresentationContext } from "../../contexts/presentation.tsx";

type SlideProps = {
  slide: TSlide;
  className?: string;
};

function Slide({ slide, className }: SlideProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  return (
    <div className={classNames(classes.slide, className)} style={style}>
      {slide.objects.map((object) => (
        <Block key={object.id} {...object}></Block>
      ))}
    </div>
  );
}

export default Slide;
