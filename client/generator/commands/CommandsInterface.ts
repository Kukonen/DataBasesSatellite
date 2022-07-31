import {Pool} from "../create/PoolType";

export interface CommandCreator {
    id: string;
    title: string;
    text: string;
    type: commandType;
}

interface Command {
    id: string;
    title: string;
    type: string;
}

export interface CommandAdd extends Command {
    type: 'add';
}

export interface CommandGet extends Command {
    type: 'get';
}

export interface CommandUpdate extends Command {
    type: 'update';
}

export interface CommandDelete extends Command {
    type: 'delete';
}

export interface CommandCreate extends Command {
    type: 'create';
    schemaName: string;
    pools: Pool[];
}

export interface CommandDrop extends Command {
    type: 'drop';
}

export type commandType = "add" | "get" | "update" | "delete" | "create" | "drop";