export declare class EntityId<T> {
    protected _recordId: T | null;
    protected _uuid: string;
    constructor(recordId?: T, isHash?: boolean, uuid?: string);
    private createUUID;
    get hashOptions(): [string, number];
    toHash(): string;
    fromHash(hash: string): EntityId<T>;
    toPrimitive(): T;
    toString(): string;
    equals(id: EntityId<T>): boolean;
}
