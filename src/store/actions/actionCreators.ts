import { Actions, ChangeTitleAction, CreateSlideAction, DeleteSlideAction, SelectSlideAction } from "./actions.ts";
import { Slide as TSlide } from "../../types/types.ts";

export function createChangeTitleAction(newName: string): ChangeTitleAction {
  return {
    type: Actions.CHANGE_NAME,
    payload: {
      newName,
    },
  };
}

export function createCreateSlideAction(): CreateSlideAction {
  return {
    type: Actions.CREATE_SLIDE,
  };
}

export function createDeleteSlideAction(): DeleteSlideAction {
  return {
    type: Actions.DELETE_SLIDES,
  };
}

export function createSelectSlideAction(slide: TSlide): SelectSlideAction {
  return {
    type: Actions.SELECT_SLIDE,
    payload: {
      slide,
    },
  };
}
