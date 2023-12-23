import { Reducer } from "redux";
import { Color, Presentation, Slide as TSlide } from "../types/types.ts";
import { Action, Actions } from "./actions/actions.ts";
import { v4 as uuidv4 } from "uuid";

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

      state.slides.push(newSLide);
      state.currentSlide = newSLide;
      state.selectSlides = [];
      state.selectSlides.push(newSLide);
      console.log(state.slides);
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
