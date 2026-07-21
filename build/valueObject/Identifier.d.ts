/**
 * Identifier.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export interface IIdentifier {
    id: string;
    scheme?: string;
}
export default class Identifier extends ValueObject<IIdentifier> {
    static create(props: IIdentifier): Identifier;
    /**
     * Get the identifier ID.
     */
    get id(): string;
    /**
     * Set the identifier ID.
     */
    set id(value: string);
    /**
     * Get the identifier scheme.
     */
    get scheme(): string;
    /**
     * Set the identifier scheme.
     */
    set scheme(value: string);
    toPrimitive(): {
        '#text': string;
    };
}
