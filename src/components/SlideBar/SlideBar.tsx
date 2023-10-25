import "./SlideBar.css";
import Slide from "../Slide/Slide.tsx";
import { Slide as TSlide } from "../../types/types.ts";

type SlideBarProps = {
  slides: TSlide[];
};

function SlideBar({ slides }: SlideBarProps) {
  return (
    <div className="slide-bar">
      {slides.length > 0 &&
        slides.map((slide, index) => (
          <div key={slide.id} className="slide-bar__element">
            <div className="slide-bar__index">{index + 1}</div>
            <div className="slide-bar__wrapper">
              <Slide slide={slide} className="slide-bar__slide" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default SlideBar;
