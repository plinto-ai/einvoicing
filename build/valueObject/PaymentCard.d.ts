/**
 * PaymentCard.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export interface IPaymentCard {
    pan?: string;
    network?: string;
    holder?: string;
}
export default class PaymentCard extends ValueObject<IPaymentCard> implements IPaymentCard {
    static create(props: IPaymentCard): PaymentCard;
    /**
     * Get the card PAN.
     */
    get pan(): string | undefined;
    /**
     * Set the card PAN.
     */
    set pan(value: string | undefined);
    /**
     * Get the card network.
     */
    get network(): string | undefined;
    /**
     * Set the card network.
     */
    set network(value: string | undefined);
    /**
     * Get the card holder name.
     */
    get holder(): string | undefined;
    /**
     * Set the card holder name.
     */
    set holder(value: string | undefined);
    toPrimitive(): IPaymentCard;
}
