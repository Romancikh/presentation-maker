import Button from "../Button/Button.tsx";
import { onClickEllipse, onClickRectangle, onClickTriangle } from "../../../constants/MenuPrimirives.ts";
import { TonClickPresentation } from "../../SlideBar/SlideBar.tsx";
import classes from "./MenuPrimitives.module.css";

type MenuPrimitivesProps = {
  onChoice: (onClickPrimitives: TonClickPresentation) => void;
};

function MenuPrimitives({ onChoice }: MenuPrimitivesProps) {
  return (
    <div className={classes.body}>
      <Button icon={"rectangle"} onClick={() => onChoice(onClickRectangle)} />
      <Button icon={"circle"} onClick={() => onChoice(onClickEllipse)} />
      <Button icon={"change_history"} onClick={() => onChoice(onClickTriangle)} />
    </div>
  );
}

export default MenuPrimitives;
