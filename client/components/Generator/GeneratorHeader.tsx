import {useEffect, useState} from "react";
import {Command, commandType} from "../../generator/commands/CommandsInterface";
import {DefaultCommands, SchemaDefaultCommands} from "../../generator/commands/Commnads";
import styles from '../../styles/Generator.module.scss';
import {Databases, DatabasesType} from "../../generator/databases";
import {GeneratorContentMode} from "../../generator/generatorContentMode";
import store from "../../store/store";
import {setGeneratorContentMod} from "../../store/actionCreators/generatorContentModeActionCreator";
import {getStyleCommandBlock} from "../../generator/getStyleCommandBlock";
import commandsPushToEnd from "../../store/actionCreators/commands/commandsPushToEndActionCreator";

const GeneratorHeader = () => {
    const [commands, setCommands] = useState<Command[]>(DefaultCommands);
    const [currentDatabase, setCurrentDatabase] = useState<DatabasesType>(Databases[0]);
    const [databaseAccordionActive, setDatabaseAccordionActive] = useState<boolean>(false);
    const [contentMode, setContentMod] = useState<GeneratorContentMode>('commands');

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

    const changeContentMod = () => {
        store.dispatch(setGeneratorContentMod(contentMode));
        setContentMod(
            contentMode === 'commands' ?
                'schemas' :
                'commands'
        );
        setCommands(
            contentMode === 'commands' ?
                SchemaDefaultCommands :
                DefaultCommands
        );
    }
    const addCommands = (commandType: commandType) => {
        store.dispatch(commandsPushToEnd(commandType));
    }

    return (
        <div id="GeneratorHeaderElement" className={styles.GeneratorHeader}>
            <div className={styles.GeneratorHeaderDataBaseSection}>
                <div className={styles.GeneratorHeaderDataBaseTitle}
                     onClick={() => changeContentMod()}
                >
                    {
                        contentMode === 'commands' ?
                            "Schemas" :
                            "Commands"
                    }
                </div>
            </div>
            <div
                className={styles.GeneratorHeaderCommandsSection}
            >
                {
                    commands.map((command) => (
                        <div
                            key={command.id}
                            className={getStyleCommandBlock(command.type, 'header')}
                            onClick={() => addCommands(command.type)}
                        >
                            {command.title}
                        </div>
                    )
                )}
            </div>
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
                                return database.name !== currentDatabase.name ? (
                                    <div
                                        className={styles.GeneratorHeaderDataBaseBlock}
                                        key={database.id}
                                        onClick={() => {
                                            setDatabaseAccordionActive(false);
                                            setCurrentDatabase(database);
                                            
                                        }}
                                    >
                                        {database.name}
                                    </div>) :
                                    null

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneratorHeader;