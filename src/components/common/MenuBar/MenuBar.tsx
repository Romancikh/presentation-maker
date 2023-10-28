import "./MenuBar.css";
import { Menu, MenuElement } from "../../../types/types.ts";
import Input from "../Input/Input.tsx";
import MenuButton from "../MenuButton/MenuButton.tsx";

type MenuBarProps = {
  namePresentation: string;
};

function MenuBar({ namePresentation }: MenuBarProps) {
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
      <img
        className={"menu__main-icon"}
        alt={"main-icon"}
        src={"presentation_icon.png"}
      />
      <div className={"menu__input-buttons"}>
        <Input
          className={"name-presentation__input"}
          defaultValue={namePresentation}
        />
        <div className={"menu__buttons"}>
          <MenuButton label={"Файл"} menu={fileMenu} />
          <MenuButton label={"Правка"} menu={correctionMenu} />
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
