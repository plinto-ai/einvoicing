/**
 * PaymentTransfer.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
import Identifier from './Identifier';
export interface IPaymentTransfer {
    account?: string;
    name?: string;
    provider?: Identifier;
}
export default class PaymentTransfer extends ValueObject<IPaymentTransfer> {
    static create(props: IPaymentTransfer): PaymentTransfer;
    /**
     * Get the receiving account ID.
     */
    get account(): string | undefined;
    /**
     * Set the receiving account ID.
     */
    set account(value: string | undefined);
    /**
     * Get the receiving account name.
     */
    get name(): string | undefined;
    /**
     * Set the receiving account name.
     */
    set name(value: string | undefined);
    /**
     * Get the service provider ID.
     */
    get provider(): Identifier | undefined;
    /**
     * Set the service provider ID.
     */
    set provider(value: Identifier | undefined);
    toPrimitive(): IPaymentTransfer;
}
