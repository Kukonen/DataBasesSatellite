import {
    CommandAdd,
    CommandCreate,
    CommandDelete, CommandDrop,
    CommandGet,
    CommandUpdate
} from "../../../../generator/commands/CommandsInterface";
import store from "../../../store";
import {Pool} from "../../../../generator/create/PoolType";
import {COMMANDS_CREATE_ADD_POOL} from "../../../actions/commandsAction";

export default function commandsCreateAddPool(commandId: string, pool: Pool) {
    const commands:
        (CommandAdd | CommandGet | CommandUpdate | CommandDelete | CommandCreate | CommandDrop)[] =
        // @ts-ignore
        JSON.parse(JSON.stringify(store.getState().commandsReducer.commands));

    commands.forEach(command => {
        if (command.id === commandId && "pools" in command) {
            command.pools.push(pool);
        }
    })

    return {
        type: COMMANDS_CREATE_ADD_POOL,
        value: commands
    }
}