import { CSSProperties } from "react";
import { Char } from "../../types/types.ts";

type CharComponentProps = Char;

function CharComponent({
  color,
  fontFamily,
  fontSize,
  value,
  bold,
  italic,
  underlined,
}: CharComponentProps) {
  const style: CSSProperties = {
    color,
    fontFamily,
    fontSize,
    fontStyle: italic ? "italic" : "normal",
    fontWeight: bold ? "bold" : "normal",
    textDecoration: underlined ? "underline" : "none",
  };
  return <span style={style}>{value}</span>;
}

export default CharComponent;
