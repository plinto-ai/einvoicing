/**
 * Tax.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ITax, TaxId } from '../interface/ITax';
import { Entity } from '../base/Entity';
import CurrencyCode from '../valueObject/CurrencyCode';
export default class Tax extends Entity<ITax, string, TaxId> {
    static create(props: ITax): Tax;
    /**
     * Get the tax ID.
     */
    get id(): TaxId;
    /**
     * Set the tax ID.
     */
    set id(value: TaxId);
    /**
     * Get the currency.
     */
    get currency(): CurrencyCode | undefined;
    /**
     * Set the currency.
     */
    set currency(value: CurrencyCode | undefined);
    /**
     * Get the taxable amount.
     */
    get taxableAmount(): number | undefined;
    /**
     * Set the taxable amount.
     */
    set taxableAmount(value: number | undefined);
    /**
     * Get the tax amount.
     */
    get taxAmount(): number | undefined;
    /**
     * Set the tax amount.
     */
    set taxAmount(value: number | undefined);
    /**
     * Get the percent.
     */
    get percent(): number | undefined;
    /**
     * Set the percent.
     */
    set percent(value: number | undefined);
    /**
     * Get the tax exemption reason.
     */
    get taxExemptionReason(): string | undefined;
    /**
     * Set the tax exemption reason.
     */
    set taxExemptionReason(value: string | undefined);
    /**
     * Get the tax exemption reason code.
     */
    get taxExemptionReasonCode(): string | undefined;
    /**
     * Set the tax exemption reason code.
     */
    set taxExemptionReasonCode(value: string | undefined);
    toPrimitive(): ITax;
}
