import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer.ts";

export const rootReducer = combineReducers({
  presentation: reducer,
});

const store = createStore(rootReducer);

export default store;
