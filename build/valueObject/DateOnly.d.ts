/**
 * DateOnly.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export default class DateOnly extends ValueObject<{
    date: string;
}> {
    static create(date: string): DateOnly;
    toPrimitive(): string;
}
