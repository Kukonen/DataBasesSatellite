export interface Command {
    id: string;
    title: string;
    text: string;
    type: commandType;
}

export type commandType = "create" | "get" | "update" | "delete";