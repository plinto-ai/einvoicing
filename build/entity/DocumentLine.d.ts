/**
 * DocumentLine.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { Entity } from '../base/Entity';
import { DocumentLineId, IDocumentLine } from '../interface/IDocumentLine';
import Tax from './Tax';
import Identifier from '../valueObject/Identifier';
import Attribute from '../valueObject/Attribute';
import AllowanceCharge from '../valueObject/AllowanceCharge';
import DateOnly from '../valueObject/DateOnly';
import ListIdentifier from '../valueObject/ListIdentifier';
import Quantity from '../valueObject/Quantity';
export default class DocumentLine extends Entity<IDocumentLine, string, DocumentLineId> {
    static create(props: IDocumentLine): DocumentLine;
    /**
     * Get the document line ID.
     */
    get id(): DocumentLineId;
    /**
     * Set the document line ID.
     */
    set id(value: DocumentLineId);
    /**
     * Get the note.
     */
    get note(): string | undefined;
    /**
     * Set the note.
     */
    set note(value: string | undefined);
    /**
     * Get the unit code.
     */
    get unitCode(): string | undefined;
    /**
     * Set the unit code.
     */
    set unitCode(value: string | undefined);
    /**
     * Get the buyer accounting reference.
     */
    get buyerAccountingReference(): string | undefined;
    /**
     * Set the buyer accounting reference.
     */
    set buyerAccountingReference(value: string | undefined);
    /**
     * Get the order line reference.
     */
    get orderLineReference(): Identifier | undefined;
    /**
     * Set the order line reference.
     */
    set orderLineReference(value: Identifier | undefined);
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
     * Get the name.
     */
    get name(): string | undefined;
    /**
     * Set the name.
     */
    set name(value: string | undefined);
    /**
     * Get the description.
     */
    get description(): string | undefined;
    /**
     * Set the description.
     */
    set description(value: string | undefined);
    /**
     * Get the quantity.
     */
    get quantity(): number | undefined;
    /**
     * Set the quantity.
     */
    set quantity(value: number | undefined);
    /**
     * Get the buyer identifier.
     */
    get buyerIdentifier(): string | undefined;
    /**
     * Set the buyer identifier.
     */
    set buyerIdentifier(value: string | undefined);
    /**
     * Get the seller identifier.
     */
    get sellerIdentifier(): Identifier | undefined;
    /**
     * Set the seller identifier.
     */
    set sellerIdentifier(value: Identifier | undefined);
    /**
     * Get the standard identifier.
     */
    get standardIdentifier(): Identifier | undefined;
    /**
     * Set the standard identifier.
     */
    set standardIdentifier(value: Identifier | undefined);
    /**
     * Get the origin country code.
     */
    get originCountryCode(): string | undefined;
    /**
     * Set the origin country code.
     */
    set originCountryCode(value: string | undefined);
    /**
     * Get the classification identifiers.
     */
    get classificationIdentifiers(): Identifier[] | ListIdentifier[] | undefined;
    /**
     * Set the classification identifiers.
     */
    set classificationIdentifiers(value: Identifier[] | ListIdentifier[] | undefined);
    /**
     * Get the price.
     */
    get price(): number | undefined;
    /**
     * Set the price.
     */
    set price(value: number | undefined);
    /**
     * Get the net amount
     */
    get netAmount(): number | undefined;
    /**
     * Set the net amount
     */
    set netAmount(value: number | undefined);
    /**
     * Get the base quantity.
     */
    get baseQuantity(): Quantity | undefined;
    /**
     * Set the base quantity.
     */
    set baseQuantity(value: Quantity | undefined);
    /**
     * Get the attributes.
     */
    get attributes(): Attribute[] | undefined;
    /**
     * Set the attributes.
     */
    set attributes(value: Attribute[] | undefined);
    /**
     * Get the charges.
     */
    get charges(): AllowanceCharge[] | undefined;
    /**
     * Set the charges.
     */
    set charges(value: AllowanceCharge[] | undefined);
    /**
     * Get the tax.
     */
    get tax(): Tax | undefined;
    /**
     * Set the tax.
     */
    set tax(value: Tax | undefined);
    toPrimitive(): IDocumentLine;
}
