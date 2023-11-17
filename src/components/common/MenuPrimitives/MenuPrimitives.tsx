import Button from "../Button/Button.tsx";
import classes from "./MenuPrimitives.module.css";
import {
  onClickEllipse,
  onClickRectangle,
  onClickTriangle,
} from "../../../constants/MenuPrimirives.ts";

function MenuPrimitives() {
  return (
    <div className={classes.menu__primitives_body}>
      <Button icon={"rectangle"} onClick={onClickRectangle} />
      <Button icon={"circle"} onClick={onClickEllipse} />
      <Button icon={"change_history"} onClick={onClickTriangle} />
    </div>
  );
}

export default MenuPrimitives;
