import {combineReducers} from "redux";
import databaseReducer from "./databaseReducer";

export interface databaseAction {
    type: string;
    value: any;
}


export default combineReducers({
    databaseReducer
});