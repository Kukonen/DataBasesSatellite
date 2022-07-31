import {
    CommandAdd,
    CommandCreate,
    CommandDelete, CommandDrop,
    CommandGet,
    CommandUpdate
} from "../../../../generator/commands/CommandsInterface";
import store from "../../../store";
import {COMMANDS_CREATE_DELETE_POOL} from "../../../actions/commandsAction";

export default function commandsCreateDeletePool(commandId: string, poolId: string) {
    const commands:
        (CommandAdd | CommandGet | CommandUpdate | CommandDelete | CommandCreate | CommandDrop)[] =
        // @ts-ignore
        JSON.parse(JSON.stringify(store.getState().commandsReducer.commands));

    commands.forEach(command => {
        if (command.id === commandId && "pools" in command) {
            command.pools = command.pools.filter((pool => {
                if (pool.id !== poolId) {
                    return pool
                }
            }));
        }
    })

    return {
        type: COMMANDS_CREATE_DELETE_POOL,
        value: commands
    }
}