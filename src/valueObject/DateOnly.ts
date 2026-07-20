/**
 * DateOnly.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';

export default class DateOnly extends ValueObject<{ date: string }> {
  public static create(date: string): DateOnly {
    const str = String(date).trim();
    // xsd:date allows an optional timezone suffix (Z or +/-HH:MM); strip it.
    const isoMatch = str.match(/^(\d{4}-\d{2}-\d{2})(?:Z|[+-]\d{2}:\d{2})?$/);
    if (isoMatch) {
      return new DateOnly({ date: isoMatch[1] });
    }
    // Some emitters send day-first dates (DD-MM-YYYY) despite EN 16931
    // requiring ISO 8601; normalise them instead of failing the document.
    const dayFirstMatch = str.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (dayFirstMatch) {
      return new DateOnly({
        date: `${dayFirstMatch[3]}-${dayFirstMatch[2]}-${dayFirstMatch[1]}`,
      });
    }
    throw new Error('Invalid date format');
  }

  toPrimitive(): string {
    return this.props.date;
  }
}
