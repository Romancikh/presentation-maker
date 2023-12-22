export enum Actions {
  CHANGE_NAME = "CHANGE_NAME",
}

export type ChangeTitleAction = { type: Actions.CHANGE_NAME; payload: { newName: string } };

export type Action = ChangeTitleAction;
