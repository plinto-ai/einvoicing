/**
 * Payee.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export interface IPayee {
    name?: string;
    companyId?: string;
    additionalIdentifiers: string[];
}
export default class Payee extends ValueObject<IPayee> {
    static create(props: IPayee): Payee;
    /**
     * Get the payee name.
     */
    get name(): string | undefined;
    /**
     * Set the payee name.
     */
    set name(value: string | undefined);
    /**
     * Get the company ID.
     */
    get companyId(): string | undefined;
    /**
     * Set the company ID.
     */
    set companyId(value: string | undefined);
    /**
     * Get the additional identifiers.
     */
    get additionalIdentifiers(): string[];
    /**
     * Set the additional identifiers.
     */
    set additionalIdentifiers(value: string[]);
    toPrimitive(): IPayee;
}
