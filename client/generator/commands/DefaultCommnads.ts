import {Command} from "./CommandsInterface";

export const DefaultCommands:Command[] = [
    {
        id: "default_1",
        title: "Create",
        text: "Create database",
        type: "create"
    },
    {
        id: "default_2",
        title: "Add",
        text: "Add data to database",
        type: "create"
    },
    {
        id: "default_3",
        title: "Delete",
        text: "Delete data from database",
        type: "delete"
    },
    {
        id: "default_4",
        title: "Change",
        text: "Change data in database",
        type: "update"
    },
    {
        id: "default_5",
        title: "Get",
        text: "Get data from databse",
        type: "get"
    },
    {
        id: "default_6",
        title: "Drop",
        text: "Drop database",
        type: "delete"
    }
];