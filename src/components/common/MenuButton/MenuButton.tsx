import "./MenuButton.css";
import Menu from "../Menu/Menu.tsx";
import { Menu as TMenu } from "../../../types/types.ts";

type MenuButtonProps = {
  label: string;
  menu: TMenu;
};

function MenuButton({ label, menu }: MenuButtonProps) {
  return (
    <div>
      <div className="menu-bar__button">{label}</div>
      <Menu menuElements={menu.menuElements} />
    </div>
  );
}

export default MenuButton;
