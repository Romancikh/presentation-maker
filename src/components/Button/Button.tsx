import "./Button.css";
import classNames from "classnames";

type ButtonProps = {
  text?: string;
  icon?: string;
  position: "menubar" | "toolbar";
};

function Button({ text, icon, position }: ButtonProps) {
  const isIconButton = icon && !text;
  const isTextButton = text && !icon;

  return (
    <button
      className={classNames("button", {
        button_icon: isIconButton,
        button_text: isTextButton,
        [`button_${position}`]: position,
      })}
    >
      {isIconButton && (
        <span className="button__icon material-symbols-outlined">{icon}</span>
      )}
      {isTextButton && <span className="button__text">{text}</span>}
    </button>
  );
}

export default Button;
