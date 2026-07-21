interface ValueObjectProps {
    [index: string]: any;
}
export declare abstract class ValueObject<T extends ValueObjectProps> {
    readonly props: T;
    protected constructor(props: T);
    equals(vo?: ValueObject<T>): boolean;
}
export {};
