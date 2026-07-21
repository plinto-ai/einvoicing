/**
 * DKRuleset.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import AbstractRuleset, { IRule } from './AbstractRuleset';
export default class DKRuleset extends AbstractRuleset {
    getCustomizationID(): string;
    get rules(): {
        'DK-R-002': IRule;
    };
}
