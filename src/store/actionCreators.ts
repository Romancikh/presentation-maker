import { Actions, ChangeTitleAction } from "./actions.ts";

export function createChangeTitleAction(newName: string): ChangeTitleAction {
  return {
    type: Actions.CHANGE_NAME,
    payload: {
      newName,
    },
  };
}
