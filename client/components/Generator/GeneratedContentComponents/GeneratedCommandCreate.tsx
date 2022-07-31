import {getStyleCommandBlock} from "../../../generator/getStyleCommandBlock";
import styles from "../../../styles/Generator.module.scss";
import {useState} from "react";
import {CommandCreate} from "../../../generator/commands/CommandsInterface";
import Image from "next/image";
import TrashIcon from "../../../public/trash.svg";
import AddIcon from "../../../public/add.svg";
import GeneratorCreatePool from "../../../generator/create/GeneratorCreatePool";
import {Pool} from "../../../generator/create/PoolType";
import getRandomString from "../../../scripts/getRandomString";
import store from "../../../store/store";
import commandsCreateAddPool from "../../../store/actionCreators/commands/create/commandsCreateAddPoolActionCreator";

const GeneratedCommandCreate = (props:any) => {

    const command:CommandCreate = props.command;
    const deleteBlock = props.delete;

    const [title, setTitle] = useState<string>(command.title ? command.title : "");
    const [schemaName, setSchemaName] = useState<string>(command.schemaName ? command.schemaName : "");
    const [pools, setPools] = useState<Pool[]>([]);

    const addPool = () => {
        let tempPools = pools;
        const newPool:Pool = {
            id: getRandomString(8),
            text: "",
            types: 'number'
        };

        tempPools.push(newPool);

        store.dispatch(commandsCreateAddPool(command.id, newPool))

        setPools(tempPools);
    }

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
            <div className={styles.GeneratorContentCommandBlockInputSection}>
                <input type="text"
                       className={styles.GeneratorContentCommandBlockInput}
                       value={schemaName}
                       onChange={event => setSchemaName(event.target.value)}
                       placeholder={"Schema Name"}
                />
            </div>
            {
                pools.map(pool => {
                    return (
                        <GeneratorCreatePool
                            id={pool.id}
                            text={pool.text}
                            types={pool.types}
                        />
                    )
                })
            }
            <div className={styles.GeneratorContentCommandButtonSection}>
                <div
                    className={styles.GeneratorContentCommandButton}
                    onClick={() => addPool()}
                >
                    <Image
                        src={AddIcon}
                    />
                </div>
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

export default GeneratedCommandCreate;