import { Position, Menu as TMenu } from "../../../types/types.ts";
import { CSSProperties, useRef } from "react";
import MenuElement from "../MenuElement/MenuElement.tsx";
import { TonClickPresentation } from "../../SlideBar/SlideBar.tsx";
import classes from "./Menu.module.css";
import { useOutsideClick } from "../../../hooks/useOutsideClick.ts";

type MenuProps = {
  position: Position;
  opened: boolean;
  onClose: () => void;
  onClick: (onClickSlideBar: TonClickPresentation) => void;
} & TMenu;

function Menu({ menuElements, position, opened, onClose, onClick }: MenuProps) {
  const ref = useRef(null);

  useOutsideClick(ref, onClose, opened);
  if (!opened) return null;

  const positionStyle: CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div ref={ref} className={classes.menu__body} style={positionStyle}>
      {menuElements.map((menuElement) => (
        <MenuElement
          key={menuElement.id}
          text={menuElement.text}
          shortcut={menuElement.shortcut}
          onClick={() => onClick(menuElement.onClick)}
        />
      ))}
    </div>
  );
}

export default Menu;
