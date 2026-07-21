import { ValueObject } from '../base/ValueObject';
export interface IQuantity {
    value: number;
    unitCode?: string;
}
export default class Quantity extends ValueObject<IQuantity> {
    static create(props: IQuantity): Quantity;
    /**
     * Get the quantity value.
     */
    get value(): number;
    /**
     * Set the quantity value.
     */
    set value(value: number);
    /**
     * Get the quantity unit code.
     */
    get unitCode(): string;
    /**
     * Set the quantity unit code.
     */
    set unitCode(value: string);
    toPrimitive(): {
        '#text': string;
    };
}
