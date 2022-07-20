import styles from '../../styles/Generator.module.scss';
import {useState} from "react";
import {Command} from "../../generator/commands/CommandsInterface";
import {DefaultCommands} from "../../generator/commands/Commnads";
import {getStyleCommandBlock} from "../../generator/getStyleCommandBlock";

const GeneratorContent = () => {

    const [commands, setCommands] = useState<Command[]>(DefaultCommands);

    return (
        <div>
            <div
                className={styles.GenerateCommandsSection}
            >
                {
                    commands.map((command) => (
                            <div
                                key={command.id}
                                className={getStyleCommandBlock(command.type)}
                            >
                                {command.title}
                            </div>
                        )
                    )}
            </div>
        </div>
    )
}

export default GeneratorContent;