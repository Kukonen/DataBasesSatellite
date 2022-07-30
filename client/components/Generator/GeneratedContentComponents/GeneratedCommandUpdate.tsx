import {getStyleCommandBlock} from "../../../generator/getStyleCommandBlock";
import styles from "../../../styles/Generator.module.scss";
import {useState} from "react";
import {CommandUpdate} from "../../../generator/commands/CommandsInterface";
import Image from "next/image";
import TrashIcon from "../../../public/trash.svg";

const GeneratedCommandUpdate = (props:any) => {

    const command:CommandUpdate = props.command;
    const deleteBlock = props.delete;

    const [title, setTitle] = useState<string>(command.title ? command.title : "");

    return (
        <div className={getStyleCommandBlock(command.type, 'content')}
             key={command.id}
        >
            <div className={styles.GeneratorContentCommandBlockInputSection}>
                <input type="text"
                       className={styles.GeneratorContentCommandBlockInput}
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                       placeholder={"Command Name"}
                />
            </div>
            <hr className={styles.GeneratorContentCommandBlockHr}/>
            <div className={styles.GeneratorContentCommandBlockDeleteSection}>
                <div
                    className={styles.GeneratorContentCommandBlockDeleteButton}
                    onClick={() => deleteBlock(command.id)}
                >
                    <Image
                        src={TrashIcon}
                    />
                </div>
            </div>
        </div>
    )
}

export default GeneratedCommandUpdate;