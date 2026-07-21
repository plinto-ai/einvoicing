import Document from '../entity/Document';
import CurrencyCode from '../valueObject/CurrencyCode';
export interface InvoiceTotals {
    allowancesAmount: number | undefined;
    chargesAmount: number;
    currency: CurrencyCode;
    netAmount: number;
    paidAmount: number;
    payableAmount: number;
    roundingAmount: number | undefined;
    taxAmount: number;
    taxCurrency: CurrencyCode;
    taxExclusiveAmount: number;
    taxInclusiveAmount: number;
}
export declare function getInvoiceTotals(document: Document): InvoiceTotals;
