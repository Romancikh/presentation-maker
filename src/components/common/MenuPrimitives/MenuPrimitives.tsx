import "./MenuPrimitives.css";
import Button from "../Button/Button.tsx";

function MenuPrimitives() {
  return (
    <div className={"menu-primitives__body"}>
      <Button icon={"rectangle"} />
      <Button icon={"circle"} />
      <Button icon={"change_history"} />
    </div>
  );
}

export default MenuPrimitives;
