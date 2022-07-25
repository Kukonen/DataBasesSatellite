import {State} from "./store";

const initialState:State = {
    currentDatabase: {
        id: "sql",
        name: "SQL"
    },
    generatorContentMod: 'commands',
    commands: []
}

export default initialState;