import { correctionMenu, fileMenu } from "../../../constants/MenuBar.ts";
import Input from "../Input/Input.tsx";
import MenuButton from "../MenuButton/MenuButton.tsx";
import classes from "./MenuBar.module.css";

type MenuBarProps = {
  presentationName: string;
};

function MenuBar({ presentationName }: MenuBarProps) {
  return (
    <div className={classes.menu}>
      <img
        className={classes.menu__main_icon}
        alt={"main-icon"}
        src={"presentation_icon.png"}
      />
      <div className={classes.menu__input_buttons}>
        <Input
          className={classes.name__presentation_input}
          defaultValue={presentationName}
        />
        <div className={classes.menu__buttons}>
          <MenuButton label={"Файл"} menu={fileMenu} />
          <MenuButton label={"Правка"} menu={correctionMenu} />
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
