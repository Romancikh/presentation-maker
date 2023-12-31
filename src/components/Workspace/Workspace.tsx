import Slide from "../Slide/Slide.tsx";
import { Slide as TSlide } from "../../types/types.ts";
import classes from "./Workspace.module.css";

type WorkspaceProps = {
  slide: TSlide | null;
};

function Workspace({ slide }: WorkspaceProps) {
  return (
    <div className={classes.workspace}>
      <div className={classes["new-slide"]}>
        Нажмите, чтобы добавить новый слайд
      </div>
      {slide && (
        <Slide
          isSelectedSlide={false}
          slide={slide}
          className="workspace__slide"
        />
      )}
    </div>
  );
}

export default Workspace;
