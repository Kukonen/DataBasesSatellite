import {State} from "../store";
import initialState from "../initialState";
import {COMMANDS_DELETE_BY_ID, COMMANDS_PUSH_TO_END} from "../actions/commandsAction";
import {commandsAction} from "./rootReducer";

export default function commandsReducer(state: State = initialState, action: commandsAction) {
    switch (action.type) {
        case COMMANDS_PUSH_TO_END:
            return {
                commands: action.value
            }
        case COMMANDS_DELETE_BY_ID:
            return {
                commands: action.value
            }
        default:
            return state
    }
}