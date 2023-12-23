import {
  Actions,
  ChangeTitleAction,
  CreatePrimitiveAction,
  CreateSlideAction,
  DeletePrimitiveAction,
  DeleteSlideAction,
  SelectPrimitiveAction,
  SelectSlideAction,
} from "./actions.ts";
import { Slide as TSlide, Text, Image, Primitive } from "../../types/types.ts";

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

export function createPrimitiveAction(type: "triangle" | "ellipse" | "rectangle"): CreatePrimitiveAction {
  return {
    type: Actions.CREATE_PRIMITIVE,
    payload: {
      type,
    },
  };
}

export function createDeletePrimitiveAction(): DeletePrimitiveAction {
  return {
    type: Actions.DELETE_PRIMITIVE,
  };
}

export function createSelectPrimitiveAction(object: Text | Image | Primitive): SelectPrimitiveAction {
  return {
    type: Actions.SELECT_PRIMITIVE,
    payload: {
      object,
    },
  };
}
