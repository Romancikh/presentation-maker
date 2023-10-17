type MenuElementProps = {
  text: string;
  shortcut?: string;
};

function MenuElement({ text, shortcut }: MenuElementProps) {
  return (
    <span>
      <span> {text} </span>
      {shortcut && <span> {shortcut} </span>}
    </span>
  );
}

export default MenuElement;
