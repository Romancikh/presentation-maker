import { Slide } from "../../types/types.ts";
import SlidePreview from "../SlidePreview/SlidePreview.tsx";

type slideBarProps = {
  slides: Slide[];
};

function SlideBar({ slides }: slideBarProps) {
  return (
    <>
      <div>
        {slides.map((el, ind) => {
          return <SlidePreview index={ind} slide={el} />;
        })}
      </div>
    </>
  );
}

export default SlideBar;
