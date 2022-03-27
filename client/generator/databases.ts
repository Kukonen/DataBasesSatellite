import {DataBasesTypes} from "../components/DocsTemplates/docs.template";

export interface DatabasesType {
    id: DataBasesTypes;
    name: string;
}

export const Databases: DatabasesType[] = [
    {
        id: "sql",
        name: "SQL"
    },
    {
        id: "mysql",
        name: "MySQL"
    },
    {
        id: "postgresql",
        name: "PostgreSQL"
    },
    {
        id: "mongodb",
        name: "MongoDB"
    }
]
