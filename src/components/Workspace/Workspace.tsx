import "./Workspace.css";
import Image from "../Image/Image.tsx";
import Primitive from "../Primitive/Primitive.tsx";
import { Slide } from "../../types/types.ts";
import Text from "../Text/Text.tsx";

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
          {slide.objects.map((object) => {
            switch (object.type) {
              case "text":
                return (
                  <Text
                    key={object.id}
                    text={object.content}
                    position={object.position}
                    size={object.size}
                    rotation={object.rotation}
                  />
                );
              case "image":
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
              case "primitive":
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
          })}
        </div>
      )}
    </div>
  );
}

export default Workspace;
