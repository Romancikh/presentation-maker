import "./MenuBar.css";
import Button from "../Button/Button.tsx";

function MenuBar() {
  return (
    <div className="menu">
      <Button text={"Файл"} />
      <Button text={"Правка"} />
      <Button text={"Вид"} />
    </div>
  );
}

export default MenuBar;
