import { Position, Size } from "../../types/types";
import { CSSProperties } from "react";

type PrimitiveProps = {
  position: Position;
  size: Size;
  rotation: number;
  form: "triangle" | "ellipse" | "rectangle";
};

function calculateTriangleCoordinates(width: number, height: number): string {
  const x1 = width / 2;
  const y1 = 0;
  const x2 = 0;
  const y2 = height;
  const x3 = width;
  const y3 = height;

  return `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
}

function Primitive({ position, size, rotation, form }: PrimitiveProps) {
  const centerX = size.width / 2;
  const centerY = size.height / 2;

  const style: CSSProperties = {
    left: position.x,
    position: "absolute",
    top: position.y,
    transform: `rotate(${rotation}deg)`,
    transformOrigin: `${centerX}px ${centerY}px`,
  };

  return (
    <svg width={size.width} height={size.height} style={style}>
      <g>
        {form === "ellipse" && (
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={size.width / 2}
            ry={size.height / 2}
          />
        )}
        {form === "rectangle" && (
          <rect x={0} y={0} width={size.width} height={size.height} />
        )}
        {form === "triangle" && (
          <polygon
            points={calculateTriangleCoordinates(size.width, size.height)}
          />
        )}
      </g>
    </svg>
  );
}

export default Primitive;
