import { Char } from "../../types/types.ts";

type CharComponentProps = Char;

function CharComponent({
  value,
  fontSize,
  fontFamily,
  color,
  bold,
  italic,
  underlined,
}: CharComponentProps) {
  const style = {
    fontSize: fontSize,
    // eslint-disable-next-line sort-keys
    fontFamily: fontFamily,
    // eslint-disable-next-line sort-keys
    color: color,
    fontStyle: italic ? "italic" : "",
    fontWeight: bold ? "bold" : "",
    textDecoration: underlined ? "underline" : "",
  };
  return <span style={style}>{value}</span>;
}

export default CharComponent;
