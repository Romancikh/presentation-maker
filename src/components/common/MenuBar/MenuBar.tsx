import "./MenuBar.css";
import { Menu, MenuElement } from "../../../types/types.ts";
import MenuButton from "../MenuButton/MenuButton.tsx";

function MenuBar() {
  const fileMenuElements: MenuElement[] = [
    {
      text: "Создать",
    },

    {
      text: "Скачать",
    },
  ];
  const fileMenu: Menu = {
    menuElements: fileMenuElements,
  };

  const correctionMenuElements: MenuElement[] = [
    {
      shortcut: "Ctrl+Z",
      text: "Отменить",
    },

    {
      shortcut: "Ctrl+Y",
      text: "Повторить",
    },
  ];
  const correctionMenu: Menu = {
    menuElements: correctionMenuElements,
  };

  return (
    <div className="menu">
      <MenuButton label={"Файл"} menu={fileMenu} />
      <MenuButton label={"Правка"} menu={correctionMenu} />
    </div>
  );
}

export default MenuBar;
