import classes from "./MenuElement.module.css";

type MenuElementProps = {
  text: string;
  shortcut?: string;
  onClick?: () => void;
};

function MenuElement({ text, shortcut, onClick }: MenuElementProps) {
  return (
    <span className={classes.element} onClick={onClick}>
      <span> {text} </span>
      {shortcut && <span> {shortcut} </span>}
    </span>
  );
}

export default MenuElement;
