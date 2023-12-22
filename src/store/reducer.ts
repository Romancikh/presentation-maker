import { Reducer } from "redux";
import { Presentation } from "../types/types.ts";
import { Action, Actions } from "./actions.ts";

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
    default: {
      return state;
    }
  }
};
