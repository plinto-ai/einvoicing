"use strict";
/**
 * Validation rulesets
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuleset = getRuleset;
var tslib_1 = require("tslib");
var PeppolRuleset_1 = tslib_1.__importDefault(require("./ruleset/PeppolRuleset"));
var DKRuleset_1 = tslib_1.__importDefault(require("./ruleset/DKRuleset"));
var rulesets = [new PeppolRuleset_1.default(), new DKRuleset_1.default()];
function getRuleset(customizationId) {
    return rulesets.find(function (r) { return r.getCustomizationID() === customizationId; });
}
//# sourceMappingURL=rulesets.js.map