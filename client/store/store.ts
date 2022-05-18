import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import {DatabasesType} from "../generator/databases";

export interface State {
    currentDatabase: DatabasesType;
}

export default configureStore({
    reducer: rootReducer
})