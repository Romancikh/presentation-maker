import Slide from "../Slide/Slide.tsx";
import { Slide as TSlide } from "../../types/types.ts";
import classes from "./SlideBar.module.css";

type SlideBarProps = {
  selectSlides: TSlide[];
  slides: TSlide[];
};

function SlideBar({ selectSlides, slides }: SlideBarProps) {
  return (
    <div className={classes["slide-bar"]}>
      {slides.length > 0 &&
        slides.map((slide, index) => (
          <div key={slide.id} className={classes.element}>
            <div className={classes.index}>{index + 1}</div>
            <div className={classes.wrapper}>
              <Slide
                isSelectedSlide={selectSlides.includes(slide)}
                slide={slide}
                className={classes.slide}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default SlideBar;
