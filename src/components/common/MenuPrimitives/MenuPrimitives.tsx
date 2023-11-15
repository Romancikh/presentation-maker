import Button from "../Button/Button.tsx";
import classes from "./MenuPrimitives.module.css";

function MenuPrimitives() {
  return (
    <div className={classes.primitives}>
      <Button icon={"rectangle"} />
      <Button icon={"circle"} />
      <Button icon={"change_history"} />
    </div>
  );
}

export default MenuPrimitives;
