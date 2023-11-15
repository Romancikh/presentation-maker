import {
  Menu,
  MenuElement,
  Presentation as TPresentation,
} from "../types/types.ts";
import { v4 as uuidv4 } from "uuid";

const slidePreviewMenuElements: MenuElement[] = [
  {
    id: uuidv4(),
    onClick: (presentation, setPresentation) => {
      const newPresentation: TPresentation = { ...presentation };

      newPresentation.slides = newPresentation.slides.filter(
        (slide) => !presentation.selectSlides.includes(slide),
      );

      newPresentation.selectSlides = [];

      if (newPresentation.slides.length > 0) {
        newPresentation.currentSlide = newPresentation.slides[0];
      } else {
        newPresentation.currentSlide = null;
      }

      setPresentation(newPresentation);
    },
    text: "Удалить слайд",
  },
];
export const slidePreviewMenu: Menu = {
  menuElements: slidePreviewMenuElements,
};
