import "./Slide.css";
import Block from "../common/Block/Block.tsx";
import { CSSProperties } from "react";
import { Slide as TSlide } from "../../types/types.ts";
import classNames from "classnames";

type SlideProps = {
  slide: TSlide;
  isCurrentSlide: boolean;
  className?: string;
};

function Slide({ slide, isCurrentSlide, className }: SlideProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  if (isCurrentSlide) {
    style.border = `10px solid #0000FF`;
    style.boxShadow = `0 0 20px rgb(0 0 0 / 100%)`;
  }

  return (
    <div className={classNames("slide", className)} style={style}>
      {slide.objects.map((object) => (
        <Block key={object.id} {...object} />
      ))}
    </div>
  );
}

export default Slide;
