import {
  Block,
  Option,
  Position,
  Size,
  Presentation as TPresentation,
  Text,
} from "../types/types.ts";
import { v4 as uuidv4 } from "uuid";

export const fontOptions: Option[] = [
  {
    id: uuidv4(),
    label: "Roboto",
    value: "Roboto",
  },
  {
    id: uuidv4(),
    label: "Arial",
    value: "Arial",
  },
];

export const insertTextOnClick = (
  presentation: TPresentation,
  setPresentation: (presentation: TPresentation) => void,
): void => {
  const newPresentation: TPresentation = { ...presentation };

  const defaultSize: Size = {
    height: 20,
    width: 20,
  };

  const defaultPosition: Position = {
    x: 0,
    y: 0,
  };

  const text: Text & Block = {
    data: {
      text: "",
    },
    id: uuidv4(),
    position: defaultPosition,
    rotation: 0,
    size: defaultSize,
    type: "text",
  };

  newPresentation.currentSlide?.objects.push(text);
  setPresentation(newPresentation);
};
