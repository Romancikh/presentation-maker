import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button.tsx";
import { onClickEllipse, onClickRectangle, onClickTriangle } from "../../../constants/MenuPrimirives.ts";
import { TonClickPresentation } from "../../SlideBar/SlideBar.tsx";
import { Block, Position, Presentation as TPresentation, Primitive, Size } from "../../../types/types.ts";
import { useAppActions, useAppSelector } from "../../../store/hooks.ts";
import classes from "./MenuPrimitives.module.css";

type MenuPrimitivesProps = {
  onChoice: (func: () => void) => void;
};

function MenuPrimitives({ onChoice }: MenuPrimitivesProps) {
  const { createPrimitiveAction } = useAppActions();

  const handleOnClickPrimitives = (type: "triangle" | "ellipse" | "rectangle") => {
    createPrimitiveAction(type);
  };

  return (
    <div className={classes.body}>
      <Button
        icon={"rectangle"}
        onClick={() => {
          handleOnClickPrimitives("rectangle");
        }}
      />
      <Button
        icon={"circle"}
        onClick={() => {
          handleOnClickPrimitives("ellipse");
        }}
      />
      <Button
        icon={"change_history"}
        onClick={() => {
          handleOnClickPrimitives("triangle");
        }}
      />
    </div>
  );
}

export default MenuPrimitives;
