import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { rootReducer } from "./store.ts";
import * as ActionCreators from "./actionCreators.ts";
import { Action } from "./actions.ts";

type RootState = ReturnType<typeof rootReducer>;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppActions = () => bindActionCreators({ ...ActionCreators }, useDispatch<Dispatch<Action>>());

export { useAppActions, useAppSelector };
