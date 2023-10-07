import MenuElement from "../MenuElement/MenuElement.tsx";

function Menu() {
  return (
    <>
      <div>
        <MenuElement text={"Копировать"} shortcut={"Ctrl+C"} />
        <MenuElement text={"Вставить"} shortcut={"Ctrl+V"} />
      </div>
    </>
  );
}

export default Menu;
