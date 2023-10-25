import "./MenuElement.css";

type MenuElementProps = {
  text: string;
  shortcut?: string;
};

function MenuElement({ text, shortcut }: MenuElementProps) {
  return (
    <span className={"menu-element_body"}>
      <span> {text} </span>
      {shortcut && <span> {shortcut} </span>}
    </span>
  );
}

export default MenuElement;
