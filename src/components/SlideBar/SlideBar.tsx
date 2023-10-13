import { Slide } from "../../types/types.ts";
import SlidePreview from "../SlidePreview/SlidePreview.tsx";
import classes from "./SlideBar.module.css";

type SlideBarProps = {
  slides: Slide[];
};

function SlideBar({ slides }: SlideBarProps) {
  return (
    <div className={classes.slidebar}>
      {slides.map((slide, index) => (
        <SlidePreview key={slide.id} index={index} slide={slide} />
      ))}
    </div>
  );
}

export default SlideBar;
