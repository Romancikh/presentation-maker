import "./SlideBar.css";
import Slide from "../Slide/Slide.tsx";
import { Slide as TSlide } from "../../types/types.ts";

type SlideBarProps = {
  slides: TSlide[];
};

function SlideBar({ slides }: SlideBarProps) {
  return (
    <div className="slide-bar">
      {slides.map((slide, index) => (
        <Slide key={slide.id} index={index} slide={slide} />
      ))}
    </div>
  );
}

export default SlideBar;
