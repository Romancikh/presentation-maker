type InputProps = {
  defaultValue?: string;
  placeholder?: string;
};

function Input({ defaultValue, placeholder }: InputProps) {
  return (
    <div>
      <input defaultValue={defaultValue} placeholder={placeholder} />
    </div>
  );
}

export default Input;
