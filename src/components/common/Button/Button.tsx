import { PresentationContext } from "../../../contexts/presentation.tsx";
import { Presentation as TPresentation } from "../../../types/types.ts";
import classes from "./Button.module.css";
import { useContext } from "react";

type ButtonProps = {
  text?: string;
  icon?: string;
  onClick?: (
    presentation: TPresentation,
    setPresentation: (presentation: TPresentation) => void,
  ) => void;
};

function Button({ text, icon, onClick }: ButtonProps) {
  const presentationContext = useContext(PresentationContext);
  const isIconButton = icon && !text;
  const isTextButton = text && !icon;
  let classNameTypeButton = "";
  if (isIconButton) {
    classNameTypeButton = "button_icon";
  } else if (isTextButton) {
    classNameTypeButton = "button_text";
  }

  return (
    <button
      type="button"
      className={classes.button + " " + classNameTypeButton}
      onClick={() => {
        onClick &&
          onClick(
            presentationContext.presentation,
            presentationContext.setPresentation,
          );
      }}
    >
      {isIconButton && (
        <span className={classes.icon + " " + "material-symbols-outlined"}>
          {icon}
        </span>
      )}
      {isTextButton && <span className={classes.text}>{text}</span>}
    </button>
  );
}

export default Button;
