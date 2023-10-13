import Button from "../Button/Button.tsx";
import classes from "./MenuBar.module.css";

function MenuBar() {
  return (
    <div className={classes.menu}>
      <Button text={"Файл"} />
      <Button text={"Правка"} />
      <Button text={"Вид"} />
    </div>
  );
}

export default MenuBar;
