import { Slide } from "../../types/types.ts";

type slidePreviewProps = {
  index: number;
  slide: Slide;
};

function SlidePreview({ index, slide }: slidePreviewProps) {
  return (
    <>
      <div>{index}</div>
      <div>{slide.background}</div>
    </>
  );
}

export default SlidePreview;
