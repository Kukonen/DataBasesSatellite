import {COMMANDS_PUSH_TO_END} from '../actions/commandsAction';
import {
    CommandCreate,
    CommandDelete,
    CommandGet,
    CommandUpdate,
    commandType
} from "../../generator/commands/CommandsInterface";
import store from "../store";
import getRandomString from "../../scripts/getRandomString";

export default function commandsPushToEnd(commandType: commandType) {

    const commands:
        (CommandCreate | CommandGet | CommandUpdate | CommandDelete)[] =
        // @ts-ignore
        JSON.parse(JSON.stringify(store.getState().commandsReducer.commands));

    switch (commandType) {
        case "create":
            const commandCreate:CommandCreate = {
                id: getRandomString(8),
                type: "create",
                title: ""
            };
            commands.push(commandCreate);
            break;
        case "get":
            const commandGet:CommandGet = {
                id: getRandomString(8),
                type: "get",
                title: ""
            };
            commands.push(commandGet);
            break;
        case "update":
            const commandUpdate:CommandUpdate = {
                id: getRandomString(8),
                type: "update",
                title: ""
            };
            commands.push(commandUpdate);
            break;
        case "delete":
            const commandDelete:CommandDelete = {
                id: getRandomString(8),
                type: "delete",
                title: ""
            };
            commands.push(commandDelete);
            break;
    }


    return {
        type: COMMANDS_PUSH_TO_END,
        value: commands
    };
}