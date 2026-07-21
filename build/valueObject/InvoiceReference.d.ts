/**
 * InvoiceReference.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
import DateOnly from './DateOnly';
export interface IInvoiceReference {
    id: string;
    issueDate?: DateOnly;
}
export default class InvoiceReference extends ValueObject<IInvoiceReference> {
    static create(ref: IInvoiceReference): InvoiceReference;
    /**
     * Get the invoice reference ID.
     */
    get id(): string;
    /**
     * Set the invoice reference ID.
     */
    set id(value: string);
    /**
     * Get the issue date.
     */
    get issueDate(): DateOnly | undefined;
    /**
     * Set the issue date.
     */
    set issueDate(value: DateOnly | undefined);
    toPrimitive(): IInvoiceReference;
}
