/**
 * DocumentType.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export default class DocumentType extends ValueObject<{
    type: string;
}> {
    static create(type: string): DocumentType;
    toPrimitive(): string;
}
