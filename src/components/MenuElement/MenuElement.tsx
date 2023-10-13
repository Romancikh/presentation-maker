type menuElementProps = {
  text: string;
  shortcut?: string;
};

function MenuElement({ text, shortcut }: menuElementProps) {
  return (
    <span>
      <span> {text} </span>
      {shortcut && <span> {shortcut} </span>}
    </span>
  );
}

export default MenuElement;
