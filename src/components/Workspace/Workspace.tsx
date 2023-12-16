import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Color, Presentation as TPresentation, Slide as TSlide } from "../../types/types.ts";
import Slide from "../Slide/Slide.tsx";
import { PresentationContext } from "../../contexts/presentation.tsx";
import classes from "./Workspace.module.css";

type WorkspaceProps = {
  slide: TSlide | null;
};

function Workspace({ slide }: WorkspaceProps) {
  const presentationContext = useContext(PresentationContext);
  const newPresentation: TPresentation = {
    ...presentationContext.presentation,
  };
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
    presentationContext.setPresentation(newPresentation);
  };

  return (
    <div className={classes.workspace}>
      {slide ? (
        <Slide slide={slide} />
      ) : (
        <div className={classes["new-slide"]} onClick={addNewSlide}>
          Нажмите, чтобы добавить новый слайд
        </div>
      )}
    </div>
  );
}

export default Workspace;
