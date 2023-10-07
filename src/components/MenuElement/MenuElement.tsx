type menuElementProps = {
  text: string;
  shortcut?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MenuElement({ text, shortcut }: menuElementProps) {
  return (
    <>
      <div>
        <span> {text} </span>
        {shortcut && <span> {shortcut} </span>}
      </div>
    </>
  );
}

export default MenuElement;
