import "./Block.css";
import {
  Block as TBlock,
  Image as TImage,
  Primitive as TPrimitive,
  Text as TText,
} from "../../../types/types";
import { CSSProperties } from "react";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";

function isImageData(data: unknown): data is TImage["data"] {
  return (
    typeof data === "object" &&
    data !== null &&
    "src" in data &&
    typeof data.src === "string" &&
    "alt" in data &&
    typeof data.alt === "string"
  );
}

function isPrimitiveData(data: unknown): data is TPrimitive["data"] {
  return (
    typeof data === "object" &&
    data !== null &&
    "form" in data &&
    typeof data.form === "string" &&
    ["triangle", "ellipse", "rectangle"].includes(data.form) &&
    "size" in data &&
    typeof data.size === "object" &&
    data.size !== null &&
    "width" in data.size &&
    typeof data.size.width === "number" &&
    "height" in data.size &&
    typeof data.size.height === "number"
  );
}

function isTextData(data: unknown): data is TText["data"] {
  return (
    typeof data === "object" &&
    data !== null &&
    "text" in data &&
    Array.isArray(data.text)
  );
}

type BlockProps = Omit<TBlock, "id"> & {
  type: unknown;
  data: unknown;
};

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
    <div className="block" style={style}>
      {type === "image" && isImageData(data) && <Image data={data} />}
      {type === "primitive" && isPrimitiveData(data) && (
        <Primitive data={data} />
      )}
      {type === "text" && isTextData(data) && <Text data={data} />}
    </div>
  );
}

export default Block;
