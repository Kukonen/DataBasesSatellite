import styles from '../../styles/Generator.module.scss';
import {useEffect, useState} from "react";
import {
    CommandCreate,
    CommandDelete,
    CommandGet,
    CommandUpdate
} from "../../generator/commands/CommandsInterface";
import store from "../../store/store";
import GeneratedCommandCreate from "./GeneratedContentComponents/GeneratedCommandCreate";
import GeneratedCommandGet from "./GeneratedContentComponents/GeneratedCommandGet";
import GeneratedCommandUpdate from "./GeneratedContentComponents/GeneratedCommandUpdate";
import GeneratedCommandDelete from "./GeneratedContentComponents/GeneratedCommandDelete";
import commandsDeleteById from "../../store/actionCreators/commands/commandsDeleteByIdActionCreator";

const GeneratorContent = () => {

    const [commands, setCommands] = useState<(CommandCreate | CommandGet | CommandUpdate | CommandDelete)[]>([]);
    const [justifyContentCommandSection, setJustifyContentCommandSection] = useState<"start" | "space-evenly" | "center">("start");

    store.subscribe(() => {
        const state = store.getState().commandsReducer;
        //@ts-ignore
        const commands = state.commands;
        setCommands(commands);
    });

    useEffect(() => {
        getJustifyContent();
    }, []);

    useEffect(() => {
        console.log(commands)
        getJustifyContent();
    }, [commands]);

    const getJustifyContent = () => {
        if (commands.length <= 2) {
            setJustifyContentCommandSection("start")
        } else if (commands.length <= 4) {
            setJustifyContentCommandSection("center")
        } else {
            setJustifyContentCommandSection("space-evenly");
        }
    }

    const deleteBlock = async (id: string) => {
        setCommands(commands.filter(command => command.id != id));
        store.dispatch(commandsDeleteById(id));
    }

    const GetCommandElement = (command : CommandCreate | CommandGet | CommandUpdate | CommandDelete) => {
        if (command.type === "create") {
            return <GeneratedCommandCreate
                command={command}
                delete={() => deleteBlock(command.id)}
            />
        }

        if (command.type === "get") {
            return <GeneratedCommandGet
                command={command}
                delete={() => deleteBlock(command.id)}
            />
        }

        if (command.type === "update") {
            return <GeneratedCommandUpdate
                command={command}
                delete={() => deleteBlock(command.id)}
            />
        }

        if (command.type === "delete") {
            return <GeneratedCommandDelete
                command={command}
                delete={() => deleteBlock(command.id)}
            />
        }
    }

    return (
        <div id="GeneratorContentElement" className={styles.GeneratorContent}>
            <div
                className={styles.GenerateCommandsSection}
                style={{justifyContent: justifyContentCommandSection}}
            >
                {
                    commands.map((command) => GetCommandElement(command))
                }
            </div>
        </div>
    )
}



export default GeneratorContent;