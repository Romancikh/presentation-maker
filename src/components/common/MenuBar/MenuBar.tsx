import "./MenuBar.css";
import { correctionMenu, fileMenu } from "../../../constants/MenuBar.ts";
import Input from "../Input/Input.tsx";
import MenuButton from "../MenuButton/MenuButton.tsx";

type MenuBarProps = {
  presentationName: string;
};

function MenuBar({ presentationName }: MenuBarProps) {
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
          defaultValue={presentationName}
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
