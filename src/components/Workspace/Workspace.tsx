import { Slide } from "../../types/types.ts";
import classes from "./Workspace.module.css";

type WorkspaceProps = {
  slide: Slide | null;
};

// TODO: 1. Добавить логику пустого слайда
function Workspace({ slide }: WorkspaceProps) {
  return <div className={classes.workspace}>{slide ? slide.id : ""}</div>;
}

export default Workspace;
