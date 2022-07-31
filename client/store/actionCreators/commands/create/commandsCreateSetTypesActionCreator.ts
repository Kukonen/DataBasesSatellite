import {
    CommandAdd,
    CommandCreate,
    CommandDelete, CommandDrop,
    CommandGet,
    CommandUpdate
} from "../../../../generator/commands/CommandsInterface";
import store from "../../../store";
import {COMMANDS_DELETE_BY_ID} from "../../../actions/commandsAction";
import {PoolTypes} from "../../../../generator/create/PoolType";

export default function commandsCreateSetTypes(commandId: string, poolId: string, types: PoolTypes) {
    const commands:
        (CommandAdd | CommandGet | CommandUpdate | CommandDelete | CommandCreate | CommandDrop)[] =
        // @ts-ignore
        JSON.parse(JSON.stringify(store.getState().commandsReducer.commands));

    commands.forEach(command => {
        if (command.id === commandId && "pools" in command) {
            command.pools.forEach(pool => {
                if (pool.id === poolId) {
                    pool.types = types;
                }
            })
        }
    })

    return {
        type: COMMANDS_DELETE_BY_ID,
        value: commands
    };
}