import Char from "../Char/Char.tsx";
import { Char as TChar } from "../../types/types.ts";

type TextProps = {
  data: {
    text: TChar[];
  };
};

function Text({ data }: TextProps) {
  return (
    <span>
      {data.text.map((char) => (
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
  );
}

export default Text;
