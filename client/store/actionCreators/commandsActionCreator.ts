import {COMMANDS_PUSH_TO_END} from '../actions/commandsAction';
import {
    CommandCreate,
    CommandDelete,
    CommandGet,
    CommandUpdate,
    commandType
} from "../../generator/commands/CommandsInterface";
import store from "../store";

export default function commandsPushToEnd(commandType: commandType) {

    const commands:
        (CommandCreate | CommandGet | CommandUpdate | CommandDelete)[] =
        // @ts-ignore
        JSON.parse(JSON.stringify(store.getState().commandsReducer.commands));

    switch (commandType) {
        case "create":
            const commandCreate:CommandCreate = {
                type: "create"
            };
            commands.push(commandCreate);
            break;
        case "get":
            const commandGet:CommandGet = {
                type: "get"
            };
            commands.push(commandGet);
            break;
        case "update":
            const commandUpdate:CommandUpdate = {
                type: "update"
            };
            commands.push(commandUpdate);
            break;
        case "delete":
            const commandDelete:CommandDelete = {
                type: "delete"
            };
            commands.push(commandDelete);
            break;
    }


    return {
        type: COMMANDS_PUSH_TO_END,
        value: commands
    };
}