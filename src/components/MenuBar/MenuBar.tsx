import "./MenuBar.css";
import Button from "../Button/Button.tsx";

function MenuBar() {
  return (
    <div className="menu">
      <Button text={"Файл"} position="menubar" />
      <Button text={"Правка"} position="menubar" />
      <Button text={"Вид"} position="menubar" />
    </div>
  );
}

export default MenuBar;
