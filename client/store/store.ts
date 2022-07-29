import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import {DatabasesType} from "../generator/databases";
import {GeneratorContentMode} from "../generator/generatorContentMode";
import {CommandCreate, CommandDelete, CommandGet, CommandUpdate, CommandAdd, CommandDrop} from "../generator/commands/CommandsInterface";

export interface State {
    currentDatabase: DatabasesType;
    generatorContentMod: GeneratorContentMode;
    commands: (CommandAdd | CommandGet | CommandUpdate | CommandDelete | CommandCreate | CommandDrop)[];
}

export default configureStore({
    reducer: rootReducer
})