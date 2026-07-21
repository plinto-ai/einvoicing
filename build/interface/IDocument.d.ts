/**
 * IDocument.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { EntityId } from '../base/EntityId';
import DateOnly from '../valueObject/DateOnly';
import DocumentType from '../valueObject/DocumentType';
import CurrencyCode from '../valueObject/CurrencyCode';
import InvoiceReference from '../valueObject/InvoiceReference';
import Attachment from '../valueObject/Attachment';
import Party from '../valueObject/Party';
import DocumentLine from '../entity/DocumentLine';
import Delivery from '../valueObject/Delivery';
import Payee from '../valueObject/Payee';
import Payment from '../valueObject/Payment';
import AllowanceCharge from '../valueObject/AllowanceCharge';
import Tax from '../entity/Tax';
import Identifier from '../valueObject/Identifier';
export declare class DocumentId extends EntityId<string> {
    readonly DocumentId = "document_id";
}
export declare enum DocumentTypes {
    Invoice = "invoice",
    CreditNote = "credit_note"
}
export declare const DEFAULT_CUSTOMIZATION_ID = "urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0";
export declare const DEFAULT_PROFILE_ID = "urn:fdc:peppol.eu:2017:poacc:billing:01:1.0";
export interface IDocument {
    id: DocumentId;
    customizationId?: string;
    businessProcess?: string;
    issueDate?: DateOnly;
    dueDate?: DateOnly;
    type?: DocumentType;
    notes?: string;
    currency?: CurrencyCode;
    buyerReference?: string;
    buyerAccountingReference?: string;
    purchaseOrderReference?: Identifier;
    originatorDocumentReference?: Identifier;
    salesOrderReference?: string;
    tenderOrLotReference?: string;
    contractReference?: Identifier;
    precedingInvoiceReference?: InvoiceReference[];
    attachments?: Attachment[];
    seller?: Party;
    buyer?: Party;
    payee?: Payee;
    delivery?: Delivery;
    periodStart?: DateOnly;
    periodEnd?: DateOnly;
    paidAmount?: number;
    roundingAmount?: number;
    lines?: DocumentLine[];
    payment?: Payment;
    charges?: AllowanceCharge[];
    taxPointDate?: DateOnly;
    taxes?: Tax[];
    taxAmount?: number;
    taxCurrency?: CurrencyCode;
    xmlNamespaces?: {
        [key: string]: string;
    };
}
