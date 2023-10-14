import MenuElement from "../MenuElement/MenuElement.tsx";
import { Menu as TMenu } from "../../types/types.ts";

type MenuProps = TMenu;

function Menu({ menuElements }: MenuProps) {
  return (
    <div>
      {menuElements.map((menuElement) => (
        <MenuElement text={menuElement.text} shortcut={menuElement.shortcut} />
      ))}
    </div>
  );
}

export default Menu;
