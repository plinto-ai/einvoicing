/**
 * Attachment.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
import BinaryObject from './BinaryObject';
import Identifier from './Identifier';
export interface IAttachment {
    id?: Identifier;
    documentTypeCode?: number;
    description?: string;
    externalUri?: string;
    content?: BinaryObject;
}
export default class Attachment extends ValueObject<IAttachment> implements IAttachment {
    static create(ref: IAttachment): Attachment;
    /**
     * Get the attachment ID.
     */
    get id(): Identifier | undefined;
    /**
     * Set the attachment ID.
     */
    set id(value: Identifier | undefined);
    /**
     * Get the document type code.
     */
    get documentTypeCode(): number | undefined;
    /**
     * Set the document type code.
     */
    set documentTypeCode(value: number | undefined);
    /**
     * Get the attachment description.
     */
    get description(): string | undefined;
    /**
     * Set the attachment description.
     */
    set description(value: string | undefined);
    /**
     * Get the external URI.
     */
    get externalUri(): string | undefined;
    /**
     * Set the external URI.
     */
    set externalUri(value: string | undefined);
    /**
     * Get the content.
     */
    get content(): BinaryObject | undefined;
    /**
     * Set the content.
     */
    set content(value: BinaryObject | undefined);
    toPrimitive(): IAttachment;
}
