type FontFamily = string;

type Color = string;

type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
};

type Char = {
  id: string;
  value: string;
  fontSize: number;
  fontFamily: FontFamily;
  color: Color;
  bold: boolean;
  italic: boolean;
  underlined: boolean;
};

type Block = {
  id: string;
  position: Position;
  size: Size;
  rotation: number;
};

type Text = Block & {
  type: "text";
  data: {
    text: Char[];
  };
};

type Image = Block & {
  type: "image";
  data: {
    alt: string;
    src: string;
    size: Size;
  };
};

type Primitive = Block & {
  type: "primitive";
  data: {
    size: Size;
    form: "triangle" | "ellipse" | "rectangle";
  };
};

type Operation = {
  id: string;
  data: object;
};

type History = {
  operations: Operation[];
  undidOperations: Operation[];
};

type Slide = {
  id: string;
  background: Color;
  selectObjects: Array<Text | Image | Primitive>;
  objects: Array<Text | Image | Primitive>;
};

type Presentation = {
  name: string;
  currentSlide: Slide | null;
  selectSlides: Slide[];
  slides: Slide[];
};

type Option = {
  id: string;
  value: number | string;
  label: string;
};

type MenuElement = {
  id: string;
  onClick?: (
    presentation: Presentation,
    setPresentation: (newPresentation: Presentation) => void,
  ) => void;
  text: string;
  shortcut?: string;
};

type Menu = {
  menuElements: MenuElement[];
};

export type {
  Block,
  Char,
  Color,
  FontFamily,
  History,
  Image,
  Operation,
  Position,
  Presentation,
  Primitive,
  Size,
  Slide,
  Text,
  Option,
  MenuElement,
  Menu,
};
