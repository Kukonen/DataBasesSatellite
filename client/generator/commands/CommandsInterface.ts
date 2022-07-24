export interface Command {
    id: string;
    title: string;
    text: string;
    type: commandType;
}

export interface CommandCreate {
    type: 'create';
}

export interface CommandGet {
    type: 'get';
}

export interface CommandUpdate {
    type: 'update';
}

export interface CommandDelete {
    type: 'delete';
}

export type commandType = "create" | "get" | "update" | "delete";