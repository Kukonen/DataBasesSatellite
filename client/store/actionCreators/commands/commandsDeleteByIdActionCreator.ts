import {CommandCreate, CommandDelete, CommandGet, CommandUpdate} from "../../../generator/commands/CommandsInterface";
import store from "../../store";
import {COMMANDS_DELETE_BY_ID} from "../../actions/commandsAction";

export default function commandsDeleteById(id: string) {
    const commands:
        (CommandCreate | CommandGet | CommandUpdate | CommandDelete)[] =
        // @ts-ignore
        JSON.parse(JSON.stringify(store.getState().commandsReducer.commands));
    return {
        type: COMMANDS_DELETE_BY_ID,
        value: commands.filter(command => command.id != id)
    };
}