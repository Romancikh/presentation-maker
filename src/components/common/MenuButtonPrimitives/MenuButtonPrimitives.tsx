import { useContext, useState } from "react";
import Button from "../Button/Button.tsx";
import MenuPrimitives from "../MenuPrimitives/MenuPrimitives.tsx";
import { PresentationContext } from "../../../contexts/presentation.tsx";
import { TonClickPresentation } from "../../SlideBar/SlideBar.tsx";

function MenuButtonPrimitives() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [switchOpenMenuPrimitives, setSwitchOpenMenuPrimitives] = useState(false);
  const openMenuPrimitives = () => {
    setSwitchOpenMenuPrimitives(!switchOpenMenuPrimitives);
  };

  const handleChoice = (onClickPrimitives: TonClickPresentation) => {
    onClickPrimitives(presentation, setPresentation);
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
