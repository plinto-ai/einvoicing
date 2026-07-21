/**
 * PeppolRuleset.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import AbstractRuleset from './AbstractRuleset';
export default class PeppolRuleset extends AbstractRuleset {
    getCustomizationID(): string;
    get rules(): {};
}
