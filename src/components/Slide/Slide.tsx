import "./Slide.css";
import { CSSProperties } from "react";
import Image from "../Image/Image.tsx";
import Primitive from "../Primitive/Primitive.tsx";
import { Slide } from "../../types/types.ts";
import Text from "../Text/Text.tsx";

type SlideProps = {
  index: number;
  slide: Slide;
};

function Slide({ index, slide }: SlideProps) {
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
        })}
      </div>
    </div>
  );
}

export default Slide;
