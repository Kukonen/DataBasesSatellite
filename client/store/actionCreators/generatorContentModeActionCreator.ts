import {SET_GENERATOR_CONTENT_MODE_ACTION} from "../actions/generatorContentModeAction";
import {GeneratorContentMode} from "../../generator/generatorContentMode";

export function setGeneratorContentMod(generatorContentMode: GeneratorContentMode) {
    if (generatorContentMode === 'commands') {
        return {
            type: SET_GENERATOR_CONTENT_MODE_ACTION,
            value: 'schemas'
        };
    } else {
        return {
            type: SET_GENERATOR_CONTENT_MODE_ACTION,
            value: 'commands'
        };
    }
}