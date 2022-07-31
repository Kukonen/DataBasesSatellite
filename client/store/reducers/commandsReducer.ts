import {State} from "../store";
import initialState from "../initialState";
import {
    COMMANDS_DELETE_BY_ID,
    COMMANDS_PUSH_TO_END,
    COMMANDS_EMPTY_ARRAY,
    COMMANDS_CREATE_SET_TEXT, COMMANDS_CREATE_SET_TYPES, COMMANDS_CREATE_ADD_POOL, COMMANDS_CREATE_DELETE_POOL
} from "../actions/commandsAction";
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
        case COMMANDS_EMPTY_ARRAY:
            return {
                commands: action.value
            }
        case COMMANDS_CREATE_ADD_POOL:
            return {
                commands: action.value
            }
        case COMMANDS_CREATE_SET_TEXT:
            return {
                commands: action.value
            }
        case COMMANDS_CREATE_SET_TYPES:
            return {
                commands: action.value
            }
        case COMMANDS_CREATE_DELETE_POOL:
            return {
                commands: action.value
            }
        default:
            return state
    }
}