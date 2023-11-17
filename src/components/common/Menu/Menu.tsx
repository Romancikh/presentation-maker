import MenuElement from "../MenuElement/MenuElement.tsx";
import { Menu as TMenu, Position } from "../../../types/types.ts";
import classes from "./Menu.module.css";
import { CSSProperties, useContext } from "react";
import { PresentationContext } from "../../../contexts/presentation.tsx";

type MenuProps = {
  position: Position;
} & TMenu;

function Menu({ menuElements, position }: MenuProps) {
  const presentationContext = useContext(PresentationContext);
  const positionStyle: CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div className={classes.menu__body} style={positionStyle}>
      {menuElements.map((menuElement) => (
        <MenuElement
          key={menuElement.id}
          text={menuElement.text}
          shortcut={menuElement.shortcut}
          onClick={() => {
            menuElement.onClick &&
              menuElement.onClick(
                presentationContext.presentation,
                presentationContext.setPresentation,
              );
          }}
        />
      ))}
    </div>
  );
}

export default Menu;
