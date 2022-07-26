import styles from '../../styles/Generator.module.scss';
import {useState} from "react";
import {
    CommandCreate,
    CommandDelete,
    CommandGet,
    CommandUpdate
} from "../../generator/commands/CommandsInterface";
import store from "../../store/store";
import GeneratedCommandCreate from "./GeneratedContentComponents/GeneratedCommandCreate";
import GeneratedCommandGet from "./GeneratedContentComponents/GeneratedCommandGet";
import GeneratedCommandUpdate from "./GeneratedContentComponents/GeneratedCommandUpdate";
import GeneratedCommandDelete from "./GeneratedContentComponents/GeneratedCommandDelete";

const GeneratorContent = () => {

    const [commands, setCommands] = useState<(CommandCreate | CommandGet | CommandUpdate | CommandDelete)[]>([]);

    store.subscribe(() => {
        const state = store.getState().commandsReducer;
        //@ts-ignore
        const commands = state.commands;
        setCommands(commands);
    });

    return (
        <div id="GeneratorContentElement" className={styles.GeneratorContent}>
            <div
                className={styles.GenerateCommandsSection}
            >
                {
                    commands.map((command) => GetCommandElement(command))
                }
            </div>
        </div>
    )
}

const GetCommandElement = (command : CommandCreate | CommandGet | CommandUpdate | CommandDelete) => {
    // console.log(command)

    if (command.type === "create") {
        return <GeneratedCommandCreate command={command}/>
    }

    if (command.type === "get") {
        return <GeneratedCommandGet command={command}/>
    }

    if (command.type === "update") {
        return <GeneratedCommandUpdate command={command}/>
    }

    if (command.type === "delete") {
        return <GeneratedCommandDelete command={command}/>
    }


}

export default GeneratorContent;