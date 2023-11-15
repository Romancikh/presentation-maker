import {
  onClickEllipse,
  onClickRectangle,
  onClickTriangle,
} from "../../../constants/MenuPrimirives.ts";
import Button from "../Button/Button.tsx";
import classes from "./MenuPrimitives.module.css";

function MenuPrimitives() {
  return (
    <div className={classes.primitives}>
      <Button icon={"rectangle"} onClick={onClickRectangle} />
      <Button icon={"circle"} onClick={onClickEllipse} />
      <Button icon={"change_history"} onClick={onClickTriangle} />
    </div>
  );
}

export default MenuPrimitives;
