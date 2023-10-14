/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
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
} from "../types";
import { v4 as uuidv4 } from "uuid";

const fontFamily: FontFamily = "Arial";

const color: Color = "#aaaaaa";

const size: Size = {
  height: 500,
  width: 400,
};

const position: Position = {
  x: 12,
  y: 90,
};

const char: Char = {
  bold: false,
  color: color,
  fontFamily: fontFamily,
  fontSize: 12,
  italic: true,
  underlined: false,
  value: "A",
};

const text: Text = {
  content: [char, char],
  id: uuidv4(),
  position: position,
  rotation: 0,
  size: size,
  type: "text",
};

const image: Image = {
  alt: "base",
  content: "base64:image/jpeg...",
  id: uuidv4(),
  position: position,
  rotation: 0,
  size: size,
  type: "image",
};

const triangle: Primitive = {
  form: "triangle",
  id: uuidv4(),
  position: position,
  rotation: 0,
  size: size,
  type: "primitive",
};

const ellipse: Primitive = {
  form: "ellipse",
  id: uuidv4(),
  position: position,
  rotation: 0,
  size: size,
  type: "primitive",
};

const rectangle: Primitive = {
  form: "rectangle",
  id: uuidv4(),
  position: position,
  rotation: 0,
  size: size,
  type: "primitive",
};

const slide: Slide = {
  background: color,
  id: uuidv4(),
  objects: [image, text, triangle, rectangle, ellipse],
  selectObjects: [text],
};

const presentation: Presentation = {
  currentSlide: slide,
  name: "The first",
  selectSlides: [slide],
  slides: [slide],
};

const operation: Operation = {
  data: {},
  id: uuidv4(),
  next: null,
  prev: null,
};

// @ts-ignore
const history: History = {
  topOperation: operation,
};

export default presentation;
