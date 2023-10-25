import "./Menu.css";
import MenuElement from "../MenuElement/MenuElement.tsx";
import { Menu as TMenu } from "../../../types/types.ts";

type MenuProps = TMenu;

function Menu({ menuElements }: MenuProps) {
  return (
    <div className="menu__body">
      {menuElements.map((menuElement, index) => (
        <MenuElement
          key={index}
          text={menuElement.text}
          shortcut={menuElement.shortcut}
        />
      ))}
    </div>
  );
}

export default Menu;
