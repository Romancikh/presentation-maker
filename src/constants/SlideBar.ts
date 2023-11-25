import {
  Color,
  Menu,
  MenuElement,
  Presentation as TPresentation,
  Slide as TSlide,
} from "../types/types.ts";
import { v4 as uuidv4 } from "uuid";

const slideBarMenuElements: MenuElement[] = [
  {
    id: uuidv4(),
    onClick: (
      presentation: TPresentation,
      setPresentation: (presentation: TPresentation) => void,
    ): void => {
      const newPresentation: TPresentation = { ...presentation };
      const backgroundSlide: Color = "#fff";
      const newSLide: TSlide = {
        background: backgroundSlide,
        id: uuidv4(),
        objects: [],
        selectObjects: [],
      };

      newPresentation.slides.push(newSLide);
      newPresentation.currentSlide = newSLide;
      newPresentation.selectSlides = [newSLide];
      setPresentation(newPresentation);
    },
    text: "Новый слайд",
  },
];
export const slideBarMenu: Menu = {
  menuElements: slideBarMenuElements,
};
