/**
 * Delivery.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
import DateOnly from './DateOnly';
import Address from './Address';
import Identifier from './Identifier';
export interface IDelivery {
    name?: string;
    date?: DateOnly;
    locationId?: Identifier;
    address?: Address;
}
export default class Delivery extends ValueObject<IDelivery> implements IDelivery {
    static create(props: IDelivery): Delivery;
    /**
     * Get the delivery name.
     */
    get name(): string | undefined;
    /**
     * Set the delivery name.
     */
    set name(value: string | undefined);
    /**
     * Get the actual delivery date.
     */
    get date(): DateOnly | undefined;
    /**
     * Set the actual delivery date.
     */
    set date(value: DateOnly | undefined);
    /**
     * Get the delivery location identifier.
     */
    get locationId(): Identifier | undefined;
    /**
     * Set the delivery location identifier.
     */
    set locationId(value: Identifier | undefined);
    /**
     * Get the delivery postal address.
     */
    get address(): Address | undefined;
    /**
     * Set the delivery postal address.
     */
    set address(value: Address | undefined);
    toPrimitive(): IDelivery;
}
