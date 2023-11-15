import classes from "./Button.module.css";

type ButtonProps = {
  text?: string;
  icon?: string;
};

function Button({ text, icon }: ButtonProps) {
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
