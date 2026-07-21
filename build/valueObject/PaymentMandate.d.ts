/**
 * PaymentMandate.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export interface IPaymentMandate {
    reference?: string;
    account?: string;
}
export default class PaymentMandate extends ValueObject<IPaymentMandate> {
    static create(props: IPaymentMandate): PaymentMandate;
    /**
     * Get the mandate reference.
     */
    get reference(): string | undefined;
    /**
     * Set the mandate reference.
     */
    set reference(value: string | undefined);
    /**
     * Get the debited account.
     */
    get account(): string | undefined;
    /**
     * Set the debited account.
     */
    set account(value: string | undefined);
    toPrimitive(): IPaymentMandate;
}
