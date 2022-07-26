export interface Command {
    id: string;
    title: string;
    text: string;
    type: commandType;
}

export interface CommandCreate {
    id: string;
    type: 'create';
    title: string;
}

export interface CommandGet {
    id: string;
    type: 'get';
    title: string;
}

export interface CommandUpdate {
    id: string;
    type: 'update';
    title: string;
}

export interface CommandDelete {
    id: string;
    type: 'delete';
    title: string;
}

export type commandType = "create" | "get" | "update" | "delete";