import {COMMANDS_EMPTY_ARRAY} from "../../actions/commandsAction";

export default function commandsEmptyArray() {
    return {
        type: COMMANDS_EMPTY_ARRAY,
        value: []
    };
}