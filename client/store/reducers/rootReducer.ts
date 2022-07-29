import {combineReducers} from "redux";
import generatorContentModeReducer from './generatorContentModeReducer';
import databaseReducer from "./databaseReducer";
import {
    CommandAdd,
    CommandCreate,
    CommandDelete, CommandDrop,
    CommandGet,
    CommandUpdate
} from "../../generator/commands/CommandsInterface";
import commandsReducer from "./commandsReducer";

export interface databaseAction {
    type: string;
    value: any;
}

export interface commandsAction {
    type: string;
    value: (CommandAdd | CommandGet | CommandUpdate | CommandDelete | CommandCreate | CommandDrop)[];
}


export default combineReducers({
    databaseReducer,
    generatorContentModeReducer,
    commandsReducer
});