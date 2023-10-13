type ButtonProps = {
  text?: string;
  icon?: string;
};

function Button({ text, icon }: ButtonProps) {
  return (
    <button>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
