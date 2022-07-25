import {combineReducers} from "redux";
import generatorContentModeReducer from './generatorContentModeReducer';
import databaseReducer from "./databaseReducer";
import {CommandCreate, CommandDelete, CommandGet, CommandUpdate} from "../../generator/commands/CommandsInterface";
import commandsReducer from "./commandsReducer";

export interface databaseAction {
    type: string;
    value: any;
}

export interface commandsAction {
    type: string;
    value: (CommandCreate | CommandGet | CommandUpdate | CommandDelete)[];
}


export default combineReducers({
    databaseReducer,
    generatorContentModeReducer,
    commandsReducer
});