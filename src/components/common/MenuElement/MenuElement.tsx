import classes from "./MenuElement.module.css";

type MenuElementProps = {
  text: string;
  shortcut?: string;
};

function MenuElement({ text, shortcut }: MenuElementProps) {
  return (
    <span className={classes.element}>
      <span> {text} </span>
      {shortcut && <span> {shortcut} </span>}
    </span>
  );
}

export default MenuElement;
