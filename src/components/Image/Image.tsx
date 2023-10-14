type ImageElementProps = {
  src: string;
  alt: string;
};

function Image({ src, alt }: ImageElementProps) {
  return <img src={src} alt={alt} />;
}

export default Image;
