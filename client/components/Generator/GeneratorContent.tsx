import styles from '../../styles/Generator.module.scss';
import {useState} from "react";
import {
    CommandCreate,
    CommandDelete,
    CommandGet,
    CommandUpdate
} from "../../generator/commands/CommandsInterface";
import {getStyleCommandBlock} from "../../generator/getStyleCommandBlock";
import store from "../../store/store";

const GeneratorContent = () => {

    const [commands, setCommands] = useState<(CommandCreate | CommandGet | CommandUpdate | CommandDelete)[]>([]);

    store.subscribe(() => console.info(store.getState()));

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
    return (
        <div className={getStyleCommandBlock(command.type, 'content')}>

        </div>
    )
}

export default GeneratorContent;