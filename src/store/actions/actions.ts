import { Slide as TSlide } from "../../types/types.ts";

export enum Actions {
  CHANGE_NAME = "CHANGE_NAME",
  CREATE_SLIDE = "CREATE_SLIDE",
  SELECT_SLIDE = "SELECT_SLIDE",
  DELETE_SLIDES = "DELETE_SLIDES",
  MOVE_SLIDES = "MOVE_SLIDES",
}

export type ChangeTitleAction = { type: Actions.CHANGE_NAME; payload: { newName: string } };

export type CreateSlideAction = {
  type: Actions.CREATE_SLIDE;
};

export type DeleteSlideAction = {
  type: Actions.DELETE_SLIDES;
};

export type SelectSlideAction = {
  type: Actions.SELECT_SLIDE;
  payload: {
    slide: TSlide;
  };
};

export type Action = ChangeTitleAction | CreateSlideAction | DeleteSlideAction | SelectSlideAction;
