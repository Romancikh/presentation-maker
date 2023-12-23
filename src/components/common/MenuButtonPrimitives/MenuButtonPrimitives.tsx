import { useContext, useState } from "react";
import Button from "../Button/Button.tsx";
import MenuPrimitives from "../MenuPrimitives/MenuPrimitives.tsx";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import { TonClickPresentation } from "../../SlideBar/SlideBar.tsx";
import { useAppSelector } from "../../../store/hooks.ts";

function MenuButtonPrimitives() {
  const presentation = useAppSelector(state => state.presentation);

  const [switchOpenMenuPrimitives, setSwitchOpenMenuPrimitives] = useState(false);
  const openMenuPrimitives = () => {
    setSwitchOpenMenuPrimitives(!switchOpenMenuPrimitives);
  };

  const handleChoice = () => {
    setSwitchOpenMenuPrimitives(false);
  };

  return (
    <div>
      <Button icon={"category"} onClick={openMenuPrimitives} />
      {switchOpenMenuPrimitives && <MenuPrimitives onChoice={handleChoice} />}
    </div>
  );
}

export default MenuButtonPrimitives;
