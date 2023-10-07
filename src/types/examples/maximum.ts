/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from "uuid";
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

const fontFamily: FontFamily = "Arial";

const color: Color = "#aaaaaa";

const size: Size = {
  width: 400,
  height: 500,
};

const position: Position = {
  x: 12,
  y: 90,
};

const char: Char = {
  value: "A",
  fontSize: 12,
  fontFamily: fontFamily,
  color: color,
  bold: false,
  italic: true,
  underlined: false,
};

const text: Text = {
  id: uuidv4(),
  position: position,
  size: size,
  rotation: 0,
  type: "TEXT",
  content: [char, char],
};

const image: Image = {
  id: uuidv4(),
  position: position,
  size: size,
  rotation: 0,
  type: "IMAGE",
  content: "base64:image/jpeg...",
};

const triangle: Primitive = {
  id: uuidv4(),
  position: position,
  size: size,
  rotation: 0,
  type: "PRIMITIVE",
  form: "TRIANGLE",
};

const ellipse: Primitive = {
  id: uuidv4(),
  position: position,
  size: size,
  rotation: 0,
  type: "PRIMITIVE",
  form: "ELLIPSE",
};

const rectangle: Primitive = {
  id: uuidv4(),
  position: position,
  size: size,
  rotation: 0,
  type: "PRIMITIVE",
  form: "RECTANGLE",
};

const slide: Slide = {
  id: uuidv4(),
  background: color,
  selectObjects: [text],
  objects: [image, text, triangle, rectangle, ellipse],
};

// @ts-ignore
const presentation: Presentation = {
  name: "The first",
  currentSlide: slide,
  selectSlides: [slide],
  slides: [slide],
};

const operation: Operation = {
  id: uuidv4(),
  data: {},
  prev: null,
  next: null,
};

// @ts-ignore
const history: History = {
  topOperation: operation,
};

export default presentation;
