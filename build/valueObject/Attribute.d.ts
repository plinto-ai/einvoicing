/**
 * Attribute.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export interface IAttribute {
    name: string;
    value: string;
}
export default class Attribute extends ValueObject<IAttribute> {
    static create(ref: IAttribute): Attribute;
    /**
     * Get the attribute name.
     */
    get name(): string;
    /**
     * Set the attribute name.
     */
    set name(value: string);
    /**
     * Get the attribute value.
     */
    get value(): string;
    /**
     * Set the attribute value.
     */
    set value(value: string);
    toPrimitive(): IAttribute;
}
