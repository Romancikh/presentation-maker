import Button from "../Button/Button.tsx";
import classes from "./MenuPrimitives.module.css";
import {
  onClickEllipse,
  onClickRectangle,
  onClickTriangle,
} from "../../../constants/MenuPrimirives.ts";
import { TonClickPresentation } from "../MenuButtonPrimitives/MenuButtonPrimitives.tsx";

type MenuPrimitivesProps = {
  onChoice: (onClickPrimitives: TonClickPresentation) => void;
};

function MenuPrimitives({ onChoice }: MenuPrimitivesProps) {
  return (
    <div className={classes.menu__primitives_body}>
      <Button icon={"rectangle"} onClick={() => onChoice(onClickRectangle)} />
      <Button icon={"circle"} onClick={() => onChoice(onClickEllipse)} />
      <Button
        icon={"change_history"}
        onClick={() => onChoice(onClickTriangle)}
      />
    </div>
  );
}

export default MenuPrimitives;
