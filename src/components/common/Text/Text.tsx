type TextProps = {
  data: {
    text: string;
  };
};

function Text({ data }: TextProps) {
  return <span>{data.text}</span>;
}

export default Text;
