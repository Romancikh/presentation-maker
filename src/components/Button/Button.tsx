type ButtonProps = {
  text?: string;
  icon?: string;
  isSelect?: boolean;
};

function Button({ text, icon, isSelect }: ButtonProps) {
  return (
    <>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {text}
      {isSelect && (
        <span className="material-symbols-outlined">arrow_right</span>
      )}
    </>
  );
}

export default Button;
