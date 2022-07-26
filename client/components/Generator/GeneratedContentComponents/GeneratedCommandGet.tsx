import {getStyleCommandBlock} from "../../../generator/getStyleCommandBlock";
import styles from "../../../styles/Generator.module.scss";
import {useState} from "react";
import {CommandGet} from "../../../generator/commands/CommandsInterface";

const GeneratedCommandGet = (props: any) => {

    const command:CommandGet = props.command;

    const [title, setTitle] = useState<string>(command.title ? command.title : "");

    return (
        <div className={getStyleCommandBlock(command.type, 'content')}
             key={command.id}
        >
            <div className={styles.createBlockTitle}>
                <input type="text"
                       className={styles.createBlockTitleInput}
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                       placeholder={"Command Name"}
                />

            </div>
        </div>
    )
}

export default GeneratedCommandGet;