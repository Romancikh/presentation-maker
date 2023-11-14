import {
  Image as TImage,
  Primitive as TPrimitive,
  Text as TText,
} from "../../../types/types";
import { CSSProperties } from "react";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";
import classes from "./Block.module.css";

type BlockProps = TPrimitive | TImage | TText;

function Block({ position, size, rotation, type, data }: BlockProps) {
  const centerX = size.width / 2;
  const centerY = size.height / 2;

  const style: CSSProperties = {
    height: size.height,
    left: position.x,
    top: position.y,
    transform: `rotate(${rotation}deg)`,
    transformOrigin: `${centerX}px ${centerY}px`,
    width: size.width,
  };

  return (
    <div className={classes.block} style={style}>
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
