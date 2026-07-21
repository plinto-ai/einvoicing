/**
 * ITax.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import CurrencyCode from '../valueObject/CurrencyCode';
import { EntityId } from '../base/EntityId';
export declare class TaxId extends EntityId<string> {
    readonly TaxId = "tax_id";
    constructor(id: string, percent: number);
}
export interface ITax {
    id: TaxId;
    currency?: CurrencyCode;
    taxableAmount?: number;
    taxAmount?: number;
    percent?: number;
    taxExemptionReason?: string;
    taxExemptionReasonCode?: string;
}
