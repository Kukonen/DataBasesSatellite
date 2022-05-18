import {SET_CURRENT_DATABASE} from '../actions/databaseAction';
import {DatabasesType} from "../../generator/databases";

export function setCurrentDatabase(currentDatabase: DatabasesType) {
    return {
        type: SET_CURRENT_DATABASE,
        currentDatabase
    }
}