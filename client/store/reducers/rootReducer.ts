import {combineReducers} from "redux";
import generatorContentModeReducer from './generatorContentModeReducer';
import databaseReducer from "./databaseReducer";

export interface databaseAction {
    type: string;
    value: any;
}


export default combineReducers({
    databaseReducer,
    generatorContentModeReducer
});