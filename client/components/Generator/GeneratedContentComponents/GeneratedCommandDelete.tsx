import {getStyleCommandBlock} from "../../../generator/getStyleCommandBlock";
import styles from "../../../styles/Generator.module.scss";
import {useState} from "react";
import {CommandDelete} from "../../../generator/commands/CommandsInterface";
import TrashIcon from "../../../public/trash.svg";
import Image from "next/image";

const GeneratedCommandDelete = (props:any) => {

    const command:CommandDelete = props.command;
    const deleteBlock = props.delete;

    const [title, setTitle] = useState<string>(command.title ? command.title : "");

    return (
        <div className={getStyleCommandBlock(command.type, 'content')}
             key={command.id}
        >
            <div className={styles.GeneratorContentCommandBlockTitle}>
                <input type="text"
                       className={styles.GeneratorContentCommandBlockTitleInput}
                       value={title}
                       onChange={event => setTitle(event.target.value)}
                       placeholder={"Command Name"}
                />

            </div>
            <hr className={styles.GeneratorContentCommandBlockDeleteHr}/>
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

export default GeneratedCommandDelete;