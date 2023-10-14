import "./Workspace.css";
import Image from "../Image/Image.tsx";
import Primitive from "../Primitive/Primitive.tsx";
import { Slide } from "../../types/types.ts";
import Text from "../Text/Text.tsx";

type WorkspaceProps = {
  slide: Slide | null;
};

// TODO: 1. Добавить логику пустого слайда
function Workspace({ slide }: WorkspaceProps) {
  return (
    <div className="workspace">
      {slide ? (
        slide.objects.map((object) => {
          if (object.type === "text") {
            return (
              <Text
                key={object.id}
                text={object.content}
                position={object.position}
                size={object.size}
                rotation={object.rotation}
              />
            );
          } else if (object.type === "image") {
            return (
              <Image
                key={object.id}
                src={object.content}
                alt={object.alt}
                position={object.position}
                size={object.size}
                rotation={object.rotation}
              />
            );
          } else if (object.type === "primitive") {
            return (
              <Primitive
                key={object.id}
                position={object.position}
                size={object.size}
                rotation={object.rotation}
                form={object.form}
              />
            );
          }
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default Workspace;
