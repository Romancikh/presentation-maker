import { Slide } from "../../types/types.ts";

type slidePreviewProps = {
  index: number;
  slide: Slide;
};

function SlidePreview({ index, slide }: slidePreviewProps) {
  return (
    <div>
      <div>{index}</div>
      <div>{slide.background}</div>
    </div>
  );
}

export default SlidePreview;
