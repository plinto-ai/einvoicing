/**
 * Payment.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
import PaymentMandate from './PaymentMandate';
import PaymentTransfer from './PaymentTransfer';
import PaymentCard from './PaymentCard';
export interface IPayment {
    terms?: string;
    meansCode?: string;
    meansName?: string;
    id?: string;
    card?: PaymentCard;
    transfer?: PaymentTransfer;
    mandate?: PaymentMandate;
}
export default class Payment extends ValueObject<IPayment> {
    static create(props: IPayment): Payment;
    /**
     * Get the payment terms.
     */
    get terms(): string | undefined;
    /**
     * Set the payment terms.
     */
    set terms(value: string | undefined);
    /**
     * Get the payment means code.
     */
    get meansCode(): string | undefined;
    /**
     * Set the payment means code.
     */
    set meansCode(value: string | undefined);
    /**
     * Get the payment means name.
     */
    get meansName(): string | undefined;
    /**
     * Set the payment means name.
     */
    set meansName(value: string | undefined);
    /**
     * Get the payment ID.
     */
    get id(): string | undefined;
    /**
     * Set the payment ID.
     */
    set id(value: string | undefined);
    /**
     * Get the payment card.
     */
    get card(): PaymentCard | undefined;
    /**
     * Set the payment card.
     */
    set card(value: PaymentCard | undefined);
    /**
     * Get the payment transfer.
     */
    get transfer(): PaymentTransfer | undefined;
    /**
     * Set the payment transfer.
     */
    set transfer(value: PaymentTransfer | undefined);
    /**
     * Get the payment mandate.
     */
    get mandate(): PaymentMandate | undefined;
    /**
     * Set the payment mandate.
     */
    set mandate(value: PaymentMandate | undefined);
    toPrimitive(): IPayment;
}
