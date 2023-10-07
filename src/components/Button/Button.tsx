type ButtonProps = {
  text?: string;
  icon?: string;
};

function Button({ text, icon }: ButtonProps) {
  return (
    <>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {text}
    </>
  );
}

export default Button;
