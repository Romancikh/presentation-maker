import { MouseEventHandler } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  text?: string;
  icon?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, icon, onClick }: ButtonProps) {
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
      onClick={onClick}
    >
      {isIconButton && (
        <span
          className={classes.button__icon + " " + "material-symbols-outlined"}
        >
          {icon}
        </span>
      )}
      {isTextButton && <span className={classes.button__text}>{text}</span>}
    </button>
  );
}

export default Button;
