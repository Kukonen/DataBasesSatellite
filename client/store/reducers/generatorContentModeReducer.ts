import {State} from "../store";
import {databaseAction} from "./rootReducer";
import initialState from "../initialState";
import {SET_GENERATOR_CONTENT_MODE_ACTION} from '../actions/generatorContentModeAction';

export default function generatorContentModeReducer(state: State = initialState, action: databaseAction) {

    switch (action.type) {
        case SET_GENERATOR_CONTENT_MODE_ACTION:
            return {
                generatorContentMod: action.value
            }
        default:
            return state
    }
}