/**
 * BinaryObject.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export interface IBinaryObject {
    mimeCode?: string;
    filename?: string;
    content?: string;
}
export default class BinaryObject extends ValueObject<IBinaryObject> {
    static create(ref: IBinaryObject): BinaryObject;
    static createFromBase64(ref: Omit<IBinaryObject, 'content'> & {
        base64?: string;
    }): BinaryObject;
    /**
     * Get the MIME code.
     */
    get mimeCode(): string | undefined;
    /**
     * Set the MIME code.
     */
    set mimeCode(value: string | undefined);
    /**
     * Get the filename.
     */
    get filename(): string | undefined;
    /**
     * Set the filename.
     */
    set filename(value: string | undefined);
    /**
     * Get the content.
     */
    get content(): string | undefined;
    /**
     * Set the content.
     */
    set content(value: string | undefined);
    toPrimitive(): IBinaryObject;
}
