type ButtonProps = {
  text: string | null;
  imagePath: string | null;
  imageAlt: string | null;
};

function Button({ text, imagePath, imageAlt }: ButtonProps) {
  return (
    <>
      {text === null && imagePath !== null && imageAlt !== null ? (
        <button>
          <img src={imagePath} alt={imageAlt} />
        </button>
      ) : (
        <button>text</button>
      )}
    </>
  );
}

export default Button;
