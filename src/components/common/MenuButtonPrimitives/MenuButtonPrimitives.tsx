import Button from "../Button/Button.tsx";
import MenuPrimitives from "../MenuPrimitives/MenuPrimitives.tsx";
import { useContext, useState } from "react";
import { Presentation as TPresentation } from "../../../types/types.ts";
import { PresentationContext } from "../../../contexts/presentation.tsx";

function MenuButtonPrimitives() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const [switchOpenMenuPrimitives, setSwitchOpenMenuPrimitives] =
    useState(false);
  const openMenuPrimitives = () => {
    setSwitchOpenMenuPrimitives(!switchOpenMenuPrimitives);
  };

  const handleChoice = (onClickPrimitives: TonClickPrimitives) => {
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

export type TonClickPrimitives = (
  presentation: TPresentation,
  setPresentation: (presentation: TPresentation) => void,
) => void;
