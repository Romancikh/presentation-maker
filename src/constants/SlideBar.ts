import { v4 as uuidv4 } from "uuid";
import { Color, Menu, MenuElement, Presentation as TPresentation, Slide as TSlide } from "../types/types.ts";

const slideBarMenuElements: MenuElement[] = [
  {
    id: uuidv4(),
    onClick: (presentation: TPresentation, setPresentation: (presentation: TPresentation) => void): void => {
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
  {
    id: uuidv4(),
    onClick: (presentation, setPresentation) => {
      const newPresentation: TPresentation = { ...presentation };

      newPresentation.slides = newPresentation.slides.filter(slide => !presentation.selectSlides.includes(slide));

      newPresentation.selectSlides = [];
      if (newPresentation.slides.length > 0) {
        newPresentation.currentSlide = newPresentation.slides[0];
        newPresentation.selectSlides.push(newPresentation.currentSlide);
      } else {
        newPresentation.currentSlide = null;
      }
      setPresentation(newPresentation);
    },
    text: "Удалить слайд",
  },
];
export const slideBarMenu: Menu = {
  menuElements: slideBarMenuElements,
};
