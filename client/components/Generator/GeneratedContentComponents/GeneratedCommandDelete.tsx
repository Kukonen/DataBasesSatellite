import {getStyleCommandBlock} from "../../../generator/getStyleCommandBlock";
import styles from "../../../styles/Generator.module.scss";
import {useState} from "react";
import {CommandDelete} from "../../../generator/commands/CommandsInterface";

const GeneratedCommandDelete = (props:any) => {

    const command:CommandDelete = props.command;

    const [title, setTitle] = useState<string>(command.title ? command.title : "");

    return (
        <div className={getStyleCommandBlock(command.type, 'content')}
             key={command.id}W
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

export default GeneratedCommandDelete;