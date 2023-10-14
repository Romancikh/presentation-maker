import { CSSProperties } from "react";
import Char from "../Char/Char.tsx";
import { Position } from "../../types/types.ts";
import { Size } from "../../types/types.ts";
import { Char as TChar } from "../../types/types.ts";

type TextProps = {
  text: TChar[];
  position: Position;
  size: Size;
  rotation: number;
};

function Text({ text, position, size }: TextProps) {
  const style: CSSProperties = {
    height: size.height,
    left: position.x,
    top: position.y,
    width: size.width,
  };

  return (
    <div>
      <span style={style}>
        {text.map((char) => (
          <Char
            key={char.id}
            value={char.value}
            fontSize={char.fontSize}
            fontFamily={char.fontFamily}
            color={char.color}
            bold={char.bold}
            italic={char.italic}
            underlined={char.underlined}
          />
        ))}
      </span>
    </div>
  );
}

export default Text;
