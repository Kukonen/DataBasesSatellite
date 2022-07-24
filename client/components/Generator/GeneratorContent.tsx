import styles from '../../styles/Generator.module.scss';
import {useState} from "react";
import {Command} from "../../generator/commands/CommandsInterface";
import {getStyleCommandBlock} from "../../generator/getStyleCommandBlock";

const GeneratorContent = () => {

    const [commands, setCommands] = useState<Command[]>([]);

    return (
        <div id="GeneratorContentElement" className={styles.GeneratorContent}>
            <div
                className={styles.GenerateCommandsSection}
            >
                {
                    commands.map((command) => (
                            <div
                                key={command.id}
                                className={getStyleCommandBlock(command.type, 'content')}
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