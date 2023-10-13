import "./Workspace.css";
import { Slide } from "../../types/types.ts";

type WorkspaceProps = {
  slide: Slide | null;
};

// TODO: 1. Добавить логику пустого слайда
function Workspace({ slide }: WorkspaceProps) {
  return <div className="workspace">{slide ? slide.id : ""}</div>;
}

export default Workspace;
