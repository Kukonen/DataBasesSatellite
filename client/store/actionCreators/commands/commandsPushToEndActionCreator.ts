import {
    CommandCreate,
    CommandDelete,
    CommandGet,
    CommandUpdate,
    commandType,
    CommandAdd, CommandDrop
} from "../../../generator/commands/CommandsInterface";
import store from "../../store";
import getRandomString from "../../../scripts/getRandomString";
import {COMMANDS_PUSH_TO_END} from "../../actions/commandsAction";

export default function commandsPushToEnd(commandType: commandType) {

    const commands:
        (CommandAdd | CommandGet | CommandUpdate | CommandDelete | CommandCreate | CommandDrop)[] =
        // @ts-ignore
        JSON.parse(JSON.stringify(store.getState().commandsReducer.commands));

    switch (commandType) {
        case "add":
            const commandAdd:CommandAdd = {
                id: getRandomString(8),
                type: "add",
                title: ""
            };
            commands.push(commandAdd);
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
        case "create":
            const commandCreate:CommandCreate = {
                id: getRandomString(8),
                type: "create",
                title: "",
                schemaName: "",
                pools: []
            };
            commands.push(commandCreate);
            break;
        case "drop":
            const commandDrop:CommandDrop = {
                id: getRandomString(8),
                type: "drop",
                title: ""
            };
            commands.push(commandDrop);
            break;
    }


    return {
        type: COMMANDS_PUSH_TO_END,
        value: commands
    };
}