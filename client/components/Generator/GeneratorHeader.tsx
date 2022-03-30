import {ReactSortable} from "react-sortablejs";
import {useEffect, useState} from "react";
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
    const [databaseAccordionActive, setDatabaseAccordionActive] = useState<boolean>(false);

    // then click abound switching blocks close list

    const checkClickOutOfDatabaseBlocks = (event : any) => {
        if (
            event.target.className !== styles.GeneratorHeaderDataBaseTitle &&
            event.target.className !== styles.GeneratorHeaderDataBaseBlock
        ) {
            setDatabaseAccordionActive(false);
        }
    }
    useEffect(() => {

        document.addEventListener('click', event => checkClickOutOfDatabaseBlocks(event));

        return () => {
            document.removeEventListener('click', checkClickOutOfDatabaseBlocks);
        }
    }, [])

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
                <div className={styles.GeneratorHeaderCommandsContainer}>
                    <div className={styles.GeneratorHeaderDataBaseTitle}
                         onClick={() => setDatabaseAccordionActive(!databaseAccordionActive)}
                    >
                        {currentDatabase.name}
                    </div>
                    <div
                        style={{display: databaseAccordionActive ? "block" : "none"}}
                        className={styles.GeneratorHeaderDataBaseBlocks}
                    >
                        {
                            Databases.map(database => {
                                return (
                                    <div
                                        className={styles.GeneratorHeaderDataBaseBlock}
                                        key={database.id}
                                        onClick={() => setCurrentDatabase(database)}
                                    >
                                        {database.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneratorHeader;