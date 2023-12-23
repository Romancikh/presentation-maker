import { Reducer } from "redux";
import { v4 as uuidv4 } from "uuid";
import {
  Block,
  Color,
  Position,
  Presentation,
  Primitive,
  Size,
  Slide as TSlide,
  Text as TText,
} from "../types/types.ts";
import { Action, Actions } from "./actions/actions.ts";

const initialPresentation: Presentation = {
  name: "Презентация без названия",
  currentSlide: null,
  selectSlides: [],
  slides: [],
};

export const reducer: Reducer<Presentation, Action> = (state = initialPresentation, action) => {
  switch (action.type) {
    case Actions.CHANGE_NAME: {
      return {
        ...state,
        name: action.payload.newName,
      };
    }
    case Actions.CREATE_SLIDE: {
      const backgroundSlide: Color = "#fff";

      const newSLide: TSlide = {
        background: backgroundSlide,
        id: uuidv4(),
        objects: [],
        selectObjects: [],
      };

      return {
        ...state,
        slides: [...state.slides, newSLide],
        currentSlide: newSLide,
        selectSlides: [newSLide],
      };
    }
    case Actions.DELETE_SLIDES: {
      state.slides = state.slides.filter(slide => !state.selectSlides.includes(slide));
      state.selectSlides = [];
      if (state.slides.length > 0) {
        state.currentSlide = state.slides[0];
        state.selectSlides.push(state.currentSlide);
      } else {
        state.currentSlide = null;
      }

      return {
        ...state,
      };
    }
    case Actions.SELECT_SLIDE: {
      if (
        state.currentSlide &&
        state.currentSlide !== action.payload.slide &&
        !state.selectSlides.includes(action.payload.slide)
      ) {
        state.currentSlide = action.payload.slide;
        state.selectSlides.push(action.payload.slide);
      } else if (state.currentSlide !== action.payload.slide && state.selectSlides.includes(action.payload.slide)) {
        state.selectSlides = state.selectSlides.filter(selectSlide => selectSlide !== action.payload.slide);
      }

      return {
        ...state,
      };
    }
    case Actions.CREATE_PRIMITIVE: {
      const defaultSize: Size = {
        height: 20,
        width: 20,
      };

      const defaultPosition: Position = {
        x: 0,
        y: 0,
      };

      switch (action.payload.type) {
        case "triangle": {
          const primitive: Primitive & Block = {
            data: {
              form: "rectangle",
              size: defaultSize,
            },
            id: uuidv4(),
            position: defaultPosition,
            rotation: 0,
            size: defaultSize,
            type: "primitive",
          };

          state.currentSlide?.objects.push(primitive);
          break;
        }
        case "ellipse": {
          const primitive: Primitive & Block = {
            data: {
              form: "ellipse",
              size: defaultSize,
            },
            id: uuidv4(),
            position: defaultPosition,
            rotation: 0,
            size: defaultSize,
            type: "primitive",
          };

          state.currentSlide?.objects.push(primitive);
          break;
        }
        case "rectangle": {
          const primitive: Primitive & Block = {
            data: {
              form: "rectangle",
              size: defaultSize,
            },
            id: uuidv4(),
            position: defaultPosition,
            rotation: 0,
            size: defaultSize,
            type: "primitive",
          };
          state.currentSlide?.objects.push(primitive);
          break;
        }
      }

      return {
        ...state,
      };
    }
    case Actions.SELECT_PRIMITIVE: {
      state.currentSlide?.objects.map(object => {
        if (object === action.payload.object && !state.currentSlide?.selectObjects.includes(object)) {
          state.currentSlide?.selectObjects.push(object);
        } else if (object === action.payload.object && state.currentSlide?.selectObjects.includes(object)) {
          if (state.currentSlide !== null) {
            state.currentSlide.selectObjects = state.currentSlide.selectObjects.filter(object => {
              return object !== action.payload.object;
            });
          }
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_TEXT: {
      const state = (objectText: TText, type: "enter" | "newLine" | "del"): TText => {
        const newObjectText = { ...objectText };
        let text: string = "";

        for (const char of objectText.data.text) {
          if (char === "\n") {
            text += "\n";
          } else {
            text += char;
          }
        }

        if (type === "enter") {
          newObjectText.size.width += newObjectText.data.fontSize;
        } else if (type === "newLine") {
          newObjectText.size.height += newObjectText.data.fontSize;
        } else if (type === "del") {
          newObjectText.size.width -= newObjectText.data.fontSize;
        }

        newObjectText.data.text = text;
        return newObjectText;
      };

      state.currentSlide?.selectObjects.map(object => {
        if (object === action.payload.object && object.type === "text") {
          if (action.payload.keyEnter.length === 1) {
            object.data.text += action.payload.keyEnter;
            object = state(object, "enter");
          } else if (action.payload.keyEnter === "Enter") {
            object.data.text += "\n";
            object = state(object, "newLine");
          } else if (action.payload.keyEnter === "Backspace") {
            object.data.text = object.data.text.slice(0, -1);
            object = state(object, "del");
          }
        }
      });

      return {
        ...state,
      };
    }
    case Actions.DELETE_PRIMITIVE: {
      if (state.currentSlide !== null) {
        state.currentSlide.objects = state.currentSlide.objects.filter(object => {
          return !state.currentSlide?.selectObjects.includes(object);
        });

        state.currentSlide.selectObjects = [];
      }

      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
