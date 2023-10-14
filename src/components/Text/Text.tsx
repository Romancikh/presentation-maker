import Char from "../Char/Char.tsx";
import { Char as TChar } from "../../types/types.ts";

type TextElementProps = {
  text: TChar[];
};

function Text({ text }: TextElementProps) {
  return (
    <div>
      <span>
        {text.map((char) => (
          <Char
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
