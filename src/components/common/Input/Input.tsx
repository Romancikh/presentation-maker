type InputProps = {
  defaultValue?: string;
  placeholder?: string;
  className?: string;
};

function Input({ defaultValue, placeholder, className }: InputProps) {
  return (
    <div>
      <input
        className={className}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
