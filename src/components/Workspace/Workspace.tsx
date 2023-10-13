import { Slide } from "../../types/types.ts";

type WorkspaceProps = {
  slide: Slide;
};

function Workspace({ slide }: WorkspaceProps) {
  return <div key={slide.id}></div>;
}

export default Workspace;
