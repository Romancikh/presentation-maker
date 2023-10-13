import { Presentation } from "../../types/types.ts";
import SlideBar from "../SlideBar/SlideBar.tsx";
import Workspace from "../Workspace/Workspace.tsx";
import classes from "./BodyEditor.module.css";

type BodyEditorProps = {
  presentation: Presentation;
};

function BodyEditor({ presentation }: BodyEditorProps) {
  return (
    <div className={classes.editor}>
      <SlideBar slides={presentation.slides} />
      <Workspace slide={presentation.currentSlide} />
    </div>
  );
}

export default BodyEditor;
