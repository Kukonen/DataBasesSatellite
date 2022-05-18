import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import {DatabasesType} from "../generator/databases";
import {GeneratorContentMode} from "../generator/generatorContentMode";

export interface State {
    currentDatabase: DatabasesType;
    generatorContentMod: GeneratorContentMode;
}

export default configureStore({
    reducer: rootReducer
})