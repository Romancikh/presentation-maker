import "./Button.css";
import classNames from "classnames";

type ButtonProps = {
  text?: string;
  icon?: string;
};

function Button({ text, icon }: ButtonProps) {
  const isIconButton = icon && !text;
  const isTextButton = text && !icon;

  return (
    <button
      className={classNames("button", {
        button_icon: isIconButton,
        button_text: isTextButton,
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
