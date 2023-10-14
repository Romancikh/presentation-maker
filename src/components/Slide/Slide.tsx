import "./Slide.css";
import { CSSProperties } from "react";
import { Slide } from "../../types/types.ts";

type SlidePreviewProps = {
  index: number;
  slide: Slide;
};

function Slide({ index, slide }: SlidePreviewProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  return (
    <div className={"slide"}>
      <div>{index}</div>
      <div className={"slide__preview"} style={style}></div>
    </div>
  );
}

export default Slide;
