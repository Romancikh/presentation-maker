import "./MenuBar.css";
import MenuButton from "../MenuButton/MenuButton.tsx";

function MenuBar() {
  return (
    <div className="menu">
      <MenuButton label={"Файл"} />
      <MenuButton label={"Вид"} />
    </div>
  );
}

export default MenuBar;
