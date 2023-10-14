import "./Slide.css";
import { CSSProperties } from "react";
import { Slide } from "../../types/types.ts";
import Text from "../Text/Text.tsx";
import Image from "../Image/Image.tsx";
import Primitive from "../Primitive/Primitive.tsx";

type SlidePreviewProps = {
  index: number;
  slide: Slide;
};

function Slide({ index, slide }: SlidePreviewProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  return (
    <div className={"slide"}>
      <div>{index}</div>
      <div className={"slide__preview"} style={style}>
        {slide.objects.map((object) => {
          if (object.type === "text") {
            return (
              <Text
                text={object.content}
                position={object.position}
                size={object.size}
                rotation={object.rotation}
              />
            );
          } else if (object.type === "image") {
            return (
              <Image
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
                position={object.position}
                size={object.size}
                rotation={object.rotation}
                form={object.form}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Slide;
