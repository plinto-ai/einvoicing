/**
 * AllowanceCharge.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
import Tax from '../entity/Tax';
export interface IAllowanceCharge {
    isCharge?: boolean;
    reasonCode?: string;
    reasonText?: string;
    factorAmount?: number;
    baseAmount?: number;
    amount?: number;
    tax?: Tax;
}
export default class AllowanceCharge extends ValueObject<IAllowanceCharge> {
    static create(ref: IAllowanceCharge): AllowanceCharge;
    get isPercentage(): boolean;
    /**
     * Get whether it is a charge.
     */
    get isCharge(): boolean | undefined;
    /**
     * Set whether it is a charge.
     */
    set isCharge(value: boolean | undefined);
    /**
     * Get the reason code.
     */
    get reasonCode(): string | undefined;
    /**
     * Set the reason code.
     */
    set reasonCode(value: string | undefined);
    /**
     * Get the reason text.
     */
    get reasonText(): string | undefined;
    /**
     * Set the reason text.
     */
    set reasonText(value: string | undefined);
    /**
     * Get the factor amount.
     */
    get factorAmount(): number | undefined;
    /**
     * Set the factor amount.
     */
    set factorAmount(value: number | undefined);
    /**
     * Get the base amount.
     */
    get baseAmount(): number | undefined;
    /**
     * Set the base amount.
     */
    set baseAmount(value: number | undefined);
    /**
     * Get the amount.
     */
    get amount(): number | undefined;
    /**
     * Set the amount.
     */
    set amount(value: number | undefined);
    /**
     * Get the tax.
     */
    get tax(): Tax | undefined;
    /**
     * Set the tax.
     */
    set tax(value: Tax | undefined);
    toPrimitive(): IAllowanceCharge;
}
