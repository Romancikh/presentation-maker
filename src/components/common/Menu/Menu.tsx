import { CSSProperties, useContext } from "react";
import { Position, Menu as TMenu } from "../../../types/types.ts";
import MenuElement from "../MenuElement/MenuElement.tsx";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import classes from "./Menu.module.css";

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
    <div className={classes["menu-body"]} style={positionStyle}>
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
