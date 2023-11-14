import classes from "./Editor.module.css";
import { Presentation } from "../../types/types.ts";
import SlideBar from "../SlideBar/SlideBar.tsx";
import Workspace from "../Workspace/Workspace.tsx";

type EditorProps = {
  presentation: Presentation;
};

function Editor({ presentation }: EditorProps) {
  return (
    <div className={classes.editor}>
      <SlideBar
        selectSlides={presentation.selectSlides}
        slides={presentation.slides}
      />
      <Workspace slide={presentation.currentSlide} />
    </div>
  );
}

export default Editor;
