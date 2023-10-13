import { Slide } from "../../types/types.ts";
import classes from "./Workspace.module.css";

type WorkspaceProps = {
  slide: Slide;
};

function Workspace({ slide }: WorkspaceProps) {
  return <div className={classes.workspace}>{slide.id}</div>;
}

export default Workspace;
