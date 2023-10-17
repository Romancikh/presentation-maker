import "./Slide.css";
import Block from "../Block/Block.tsx";
import { CSSProperties } from "react";
import { Slide } from "../../types/types.ts";

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
    </div>
  );
}

export default Slide;
