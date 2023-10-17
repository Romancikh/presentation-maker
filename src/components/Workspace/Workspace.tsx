import "./Workspace.css";
import Block from "../Block/Block.tsx";
import { Slide } from "../../types/types.ts";

type WorkspaceProps = {
  slide: Slide | null;
};

function Workspace({ slide }: WorkspaceProps) {
  return (
    <div className="workspace">
      <div className="workspace__new-slide">
        Нажмите, чтобы добавить новый слайд
      </div>
      {slide && (
        <div className="workspace__slide">
          {slide.objects.map(({ id, data, position, rotation, size, type }) => (
            <Block
              key={id}
              data={data}
              type={type}
              position={position}
              rotation={rotation}
              size={size}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Workspace;
