import {
  Color,
  Presentation as TPresentation,
  Slide as TSlide,
} from "../../types/types.ts";
import { PresentationContext } from "../../contexts/presentation.tsx";
import Slide from "../Slide/Slide.tsx";
import classes from "./Workspace.module.css";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

type WorkspaceProps = {
  slide: TSlide | null;
};

function Workspace({ slide }: WorkspaceProps) {
  const presentation = useContext(PresentationContext);
  const newPresentation: TPresentation = { ...presentation.presentation };
  const addNewSlide = () => {
    const backgroundSlide: Color = "#fff";

    const newSLide: TSlide = {
      background: backgroundSlide,
      id: uuidv4(),
      objects: [],
      selectObjects: [],
    };

    newPresentation.slides.push(newSLide);
    newPresentation.currentSlide = newSLide;
    newPresentation.selectSlides.push(newSLide);
    presentation.setPresentation(newPresentation);
  };

  return (
    <div className={classes.workspace}>
      {slide ? (
        <Slide slide={slide} className="slide" />
      ) : (
        <div className={classes["new-slide"]} onClick={addNewSlide}>
          Нажмите, чтобы добавить новый слайд
        </div>
      )}
    </div>
  );
}

export default Workspace;
