export type PoolTypes = 'number' | 'symbol' | 'string';

export interface Pool {
    id: string;
    text: string;
    types: PoolTypes;
}