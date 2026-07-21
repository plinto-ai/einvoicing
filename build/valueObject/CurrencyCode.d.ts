/**
 * CurrencyCode.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export default class CurrencyCode extends ValueObject<{
    code: string;
}> {
    static create(code: string): CurrencyCode;
    toPrimitive(): string;
}
