import classes from "./Button.module.css";

type ButtonProps = {
  text?: string;
  icon?: string;
};

function Button({ text, icon }: ButtonProps) {
  return (
    <button className={icon ? classes.button__icon : classes.button__text}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
