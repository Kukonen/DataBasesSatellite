import {State} from "../store";
import {databaseAction} from "./rootReducer";
import initialState from "../initialState";
import {SET_CURRENT_DATABASE} from '../actions/databaseAction';

export default function databaseReducer(state: State = initialState, action: databaseAction) {

    switch (action.type) {
        case SET_CURRENT_DATABASE:
            return {
                currentDatabase: action.value
            }
        default:
            return state
    }
}