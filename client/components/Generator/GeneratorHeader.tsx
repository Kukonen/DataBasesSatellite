import {ReactSortable} from "react-sortablejs";
import {useState} from "react";
import {Command, commandType} from "../../generator/commands/CommandsInterface";
import {DefaultCommands} from "../../generator/commands/DefaultCommnads";
import styles from '../../styles/Generator.module.scss';
import classNames from "classnames";
import {Databases, DatabasesType} from "../../generator/databases";

const getStyleCommandBlock = (style : commandType) => {

    switch (style) {
        case "create":
            return classNames(
                styles.GeneratorHeaderCommandBlock,
                styles.createBlock
            )
        case "update":
            return  classNames(
                styles.GeneratorHeaderCommandBlock,
                styles.updateBlock
            )
        case "delete":
            return classNames(
                styles.GeneratorHeaderCommandBlock,
                styles.deleteBock
            )
        case "get":
            return  classNames(
                styles.GeneratorHeaderCommandBlock,
                styles.getBlock
            )
    }
}

const GeneratorHeader = () => {
    const [commands, setCommands] = useState<Command[]>(DefaultCommands);
    const [currentDatabase, setCurrentDatabase] = useState<DatabasesType>(Databases[0]);


    return (
        <div className={styles.GeneratorHeader}>
            <ReactSortable
                list={commands}
                setList={setCommands}
                className={styles.GeneratorHeaderCommandsSection}
                disabled={true}
                clone={this}
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
            </ReactSortable>
            <div className={styles.GeneratorHeaderDataBaseSection}>
                <button className={styles.GeneratorHeaderDataBaseTitle}
                    onClick={() => {}}
                >
                    {currentDatabase.name}
                </button>
                <div style={{display: }}>
                    {
                        Databases.map(database => {
                            return (
                                <div
                                    className={}
                                >

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default GeneratorHeader;