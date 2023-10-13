import { Slide } from "../../types/types.ts";
import SlidePreview from "../SlidePreview/SlidePreview.tsx";

type slideBarProps = {
  slides: Slide[];
};

function SlideBar({ slides }: slideBarProps) {
  return (
    <div>
      {slides.map((slide, index) => (
        <SlidePreview key={slide.id} index={index} slide={slide} />
      ))}
    </div>
  );
}

export default SlideBar;
