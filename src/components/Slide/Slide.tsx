import { CSSProperties } from "react";
import classNames from "classnames";
import Block from "../common/Block/Block.tsx";
import { Slide as TSlide } from "../../types/types.ts";
import classes from "./Slide.module.css";

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
      {slide.objects.map(object => (
        <Block key={object.id} object={object} isWorkSpace={true}></Block>
      ))}
    </div>
  );
}

export default Slide;
