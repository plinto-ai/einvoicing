/**
 * Document.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { Entity } from '../base/Entity';
import { IDocument, DocumentId, DocumentTypes } from '../interface/IDocument';
import DateOnly from '../valueObject/DateOnly';
import DocumentType from '../valueObject/DocumentType';
import CurrencyCode from '../valueObject/CurrencyCode';
import InvoiceReference from '../valueObject/InvoiceReference';
import Attachment from '../valueObject/Attachment';
import Party from '../valueObject/Party';
import Payee from '../valueObject/Payee';
import Delivery from '../valueObject/Delivery';
import DocumentLine from './DocumentLine';
import Payment from '../valueObject/Payment';
import AllowanceCharge from '../valueObject/AllowanceCharge';
import Tax from './Tax';
import AbstractRuleset from '../ruleset/AbstractRuleset';
import Identifier from '../valueObject/Identifier';
export default class Document extends Entity<IDocument, string, DocumentId> {
    protected _ruleset: AbstractRuleset;
    protected _documentType: DocumentTypes;
    constructor(props: IDocument, id?: DocumentId);
    static create(type: DocumentTypes, ruleset: AbstractRuleset, props: IDocument): Document;
    validate(): import("../ruleset/AbstractRuleset").IValidationResult;
    /**
     * Get the document type.
     */
    get documentType(): DocumentTypes;
    /**
     * Get the ruleset.
     */
    get ruleset(): AbstractRuleset;
    /**
     * Get the document ID.
     */
    get id(): DocumentId;
    /**
     * Set the document ID.
     */
    set id(value: DocumentId);
    /**
     * Get the customization ID.
     */
    get customizationId(): string;
    /**
     * Set the customization ID.
     */
    set customizationId(value: string);
    /**
     * Get the business process.
     */
    get businessProcess(): string | undefined;
    /**
     * Set the business process.
     */
    set businessProcess(value: string | undefined);
    /**
     * Get the issue date.
     */
    get issueDate(): DateOnly | undefined;
    /**
     * Set the issue date.
     */
    set issueDate(value: DateOnly | undefined);
    /**
     * Get the due date.
     */
    get dueDate(): DateOnly | undefined;
    /**
     * Set the due date.
     */
    set dueDate(value: DateOnly | undefined);
    /**
     * Get the document type.
     */
    get type(): DocumentType | undefined;
    /**
     * Set the document type.
     */
    set type(value: DocumentType | undefined);
    /**
     * Get the notes.
     */
    get notes(): string | undefined;
    /**
     * Set the notes.
     */
    set notes(value: string | undefined);
    /**
     * Get the currency.
     */
    get currency(): CurrencyCode | undefined;
    /**
     * Set the currency.
     */
    set currency(value: CurrencyCode | undefined);
    /**
     * Get the buyer reference.
     */
    get buyerReference(): string | undefined;
    /**
     * Set the buyer reference.
     */
    set buyerReference(value: string | undefined);
    /**
     * Get the buyer accounting reference.
     */
    get buyerAccountingReference(): string | undefined;
    /**
     * Set the buyer accounting reference.
     */
    set buyerAccountingReference(value: string | undefined);
    /**
     * Get the purchase order reference.
     */
    get purchaseOrderReference(): Identifier | undefined;
    /**
     * Set the purchase order reference.
     */
    set purchaseOrderReference(value: Identifier | undefined);
    /**
     * Get the originator document reference.
     */
    get originatorDocumentReference(): Identifier | undefined;
    /**
     * Set the originator document reference.
     */
    set originatorDocumentReference(value: Identifier | undefined);
    /**
     * Get the sales order reference.
     */
    get salesOrderReference(): string | undefined;
    /**
     * Set the sales order reference.
     */
    set salesOrderReference(value: string | undefined);
    /**
     * Get the tender or lot reference.
     */
    get tenderOrLotReference(): string | undefined;
    /**
     * Set the tender or lot reference.
     */
    set tenderOrLotReference(value: string | undefined);
    /**
     * Get the contract reference.
     */
    get contractReference(): Identifier | undefined;
    /**
     * Set the contract reference.
     */
    set contractReference(value: Identifier | undefined);
    /**
     * Get the preceding invoice reference.
     */
    get precedingInvoiceReference(): InvoiceReference[] | undefined;
    /**
     * Set the preceding invoice reference.
     */
    set precedingInvoiceReference(value: InvoiceReference[] | undefined);
    /**
     * Get the attachments.
     */
    get attachments(): Attachment[] | undefined;
    /**
     * Set the attachments.
     */
    set attachments(value: Attachment[] | undefined);
    /**
     * Get the seller.
     */
    get seller(): Party | undefined;
    /**
     * Set the seller.
     */
    set seller(value: Party | undefined);
    /**
     * Get the buyer.
     */
    get buyer(): Party | undefined;
    /**
     * Set the buyer.
     */
    set buyer(value: Party | undefined);
    /**
     * Get the payee.
     */
    get payee(): Payee | undefined;
    /**
     * Set the payee.
     */
    set payee(value: Payee | undefined);
    /**
     * Get the delivery.
     */
    get delivery(): Delivery | undefined;
    /**
     * Set the delivery.
     */
    set delivery(value: Delivery | undefined);
    /**
     * Get the period start date.
     */
    get periodStart(): DateOnly | undefined;
    /**
     * Set the period start date.
     */
    set periodStart(value: DateOnly | undefined);
    /**
     * Get the period end date.
     */
    get periodEnd(): DateOnly | undefined;
    /**
     * Set the period end date.
     */
    set periodEnd(value: DateOnly | undefined);
    /**
     * Get the paid amount.
     */
    get paidAmount(): number | undefined;
    /**
     * Set the paid amount.
     */
    set paidAmount(value: number | undefined);
    /**
     * Get the rounding amount.
     */
    get roundingAmount(): number | undefined;
    /**
     * Set the rounding amount.
     */
    set roundingAmount(value: number | undefined);
    /**
     * Get the document lines.
     */
    get lines(): DocumentLine[] | undefined;
    /**
     * Set the document lines.
     */
    set lines(value: DocumentLine[] | undefined);
    /**
     * Get the payment.
     */
    get payment(): Payment | undefined;
    /**
     * Set the payment.
     */
    set payment(value: Payment | undefined);
    /**
     * Get the charges.
     */
    get charges(): AllowanceCharge[] | undefined;
    /**
     * Set the charges.
     */
    set charges(value: AllowanceCharge[] | undefined);
    /**
     * Get the tax point date.
     */
    get taxPointDate(): DateOnly | undefined;
    /**
     * Set the tax point date.
     */
    set taxPointDate(value: DateOnly | undefined);
    /**
     * Get the taxes.
     */
    get taxes(): Tax[] | undefined;
    /**
     * Set the taxes.
     */
    set taxes(value: Tax[] | undefined);
    /**
     * Get the tax amount.
     */
    get taxAmount(): number | undefined;
    /**
     * Set the tax amount.
     */
    set taxAmount(value: number | undefined);
    /**
     * Get the tax currency.
     */
    get taxCurrency(): CurrencyCode | undefined;
    /**
     * Set the tax currency.
     */
    set taxCurrency(value: CurrencyCode | undefined);
    /**
     * Get the xml namespaces.
     */
    get xmlNamespaces(): {
        [key: string]: string;
    } | undefined;
    /**
     * Set the xml namespaces.
     */
    set xmlNamespaces(value: {
        [key: string]: string;
    } | undefined);
    /**
     * Get the non-fatal issues encountered while reading the document.
     */
    get issues(): import("../interface/IDocument").ParseIssue[];
    toPrimitive(): IDocument;
}
