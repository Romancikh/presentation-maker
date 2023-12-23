import { ChangeTitleAction, CreateSlideAction, DeleteSlideAction, Actions } from "./actions.ts";

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

export function createDeleteSlideAction(slideId: string): DeleteSlideAction {
  return {
    type: Actions.DELETE_SLIDES,
    payload: {
      slideId,
    },
  };
}
