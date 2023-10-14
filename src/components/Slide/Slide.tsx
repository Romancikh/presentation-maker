import { Slide } from "../../types/types.ts";

type SlidePreviewProps = {
  index: number;
  slide: Slide;
};

function Slide({ index, slide }: SlidePreviewProps) {
  return (
    <div>
      <div>{index}</div>
      <div>{slide.background}</div>
    </div>
  );
}

export default Slide;
