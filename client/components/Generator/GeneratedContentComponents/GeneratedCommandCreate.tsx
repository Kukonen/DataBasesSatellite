import {getStyleCommandBlock} from "../../../generator/getStyleCommandBlock";
import styles from "../../../styles/Generator.module.scss";
import {useState} from "react";
import {CommandCreate} from "../../../generator/commands/CommandsInterface";

const GeneratedCommandCreate = (props:any) => {

    const command:CommandCreate = props.command;

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

export default GeneratedCommandCreate;