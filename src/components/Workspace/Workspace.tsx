import { Slide } from "../../types/types.ts";
import classes from "./Workspace.module.css";

type WorkspaceProps = {
  slide: Slide;
};

function Workspace({ slide }: WorkspaceProps) {
  return <div key={slide.id} className={classes.workspace}></div>;
}

export default Workspace;
