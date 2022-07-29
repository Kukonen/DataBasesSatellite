import {CommandCreator} from "./CommandsInterface";

export const DefaultCommands:CommandCreator[] = [
    {
        id: "default_1",
        title: "Add",
        text: "Add data to database",
        type: "add"
    },
    {
        id: "default_2",
        title: "Delete",
        text: "Delete data from database",
        type: "delete"
    },
    {
        id: "default_3",
        title: "Change",
        text: "Change data in database",
        type: "update"
    },
    {
        id: "default_4",
        title: "Get",
        text: "Get data from databse",
        type: "get"
    }
];

export const SchemaDefaultCommands:CommandCreator[] = [
    {
        id: "schema_default_1",
        title: "Create",
        text: "Create database",
        type: "create"
    },
    {
        id: "schema_default_2",
        title: "Drop",
        text: "Drop database",
        type: "drop"
    }
]