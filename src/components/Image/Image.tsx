import { Position, Size } from "../../types/types.ts";
import { CSSProperties } from "react";

type ImageProps = {
  src: string;
  alt: string;
  position: Position;
  size: Size;
  rotation: number;
};

function Image({ src, alt, size, position }: ImageProps) {
  const style: CSSProperties = {
    height: size.height,
    left: position.x,
    position: "absolute",
    top: position.y,
    width: size.width,
  };

  return <img style={style} src={src} alt={alt} />;
}

export default Image;
