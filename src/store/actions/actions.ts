import { Slide as TSlide, Text, Image, Primitive } from "../../types/types.ts";

export enum Actions {
  CHANGE_NAME = "CHANGE_NAME",
  CREATE_SLIDE = "CREATE_SLIDE",
  SELECT_SLIDE = "SELECT_SLIDE",
  DELETE_SLIDES = "DELETE_SLIDES",
  MOVE_SLIDES = "MOVE_SLIDES",
  CREATE_PRIMITIVE = "CREATE_PRIMITIVE",
  SELECT_PRIMITIVE = "SELECT_PRIMITIVE",
  DELETE_PRIMITIVE = "DELETE_PRIMITIVE",
  CHANGE_TEXT = "CHANGE_TEXT",
  CHANGE_ITALIC_TEXT = "CHANGE_ITALIC_TEXT",
  CHANGE_BOLD_TEXT = "CHANGE_BOLD_TEXT",
  CHANGE_UNDERLINE_TEXT = "CHANGE_UNDERLINE_TEXT",
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

export type CreatePrimitiveAction = {
  type: Actions.CREATE_PRIMITIVE;
  payload: {
    type: "triangle" | "ellipse" | "rectangle" | "text";
  };
};

export type SelectPrimitiveAction = {
  type: Actions.SELECT_PRIMITIVE;
  payload: {
    object: Text | Image | Primitive;
  };
};

export type DeletePrimitiveAction = {
  type: Actions.DELETE_PRIMITIVE;
};

export type ChangeTextAction = {
  type: Actions.CHANGE_TEXT;
  payload: {
    object: Text;
    keyEnter: string;
  };
};

export type ChangeItalicAction = {
  type: Actions.CHANGE_ITALIC_TEXT;
};

export type ChangeBoldAction = {
  type: Actions.CHANGE_BOLD_TEXT;
};

export type ChangeUnderlineAction = {
  type: Actions.CHANGE_UNDERLINE_TEXT;
};

export type Action =
  | ChangeTitleAction
  | CreateSlideAction
  | DeleteSlideAction
  | SelectSlideAction
  | CreatePrimitiveAction
  | SelectPrimitiveAction
  | ChangeTextAction
  | DeletePrimitiveAction
  | ChangeBoldAction
  | ChangeUnderlineAction
  | ChangeItalicAction;
