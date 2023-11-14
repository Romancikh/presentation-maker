import classes from "./MenuPrimitives.module.css";
import Button from "../Button/Button.tsx";

function MenuPrimitives() {
  return (
    <div className={classes.menu__primitives_body}>
      <Button icon={"rectangle"} />
      <Button icon={"circle"} />
      <Button icon={"change_history"} />
    </div>
  );
}

export default MenuPrimitives;
