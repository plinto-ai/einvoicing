"use strict";
/**
 * PeppolRuleset.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AbstractRuleset_1 = tslib_1.__importDefault(require("./AbstractRuleset"));
var PeppolRuleset = /** @class */ (function (_super) {
    tslib_1.__extends(PeppolRuleset, _super);
    function PeppolRuleset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PeppolRuleset.prototype.getCustomizationID = function () {
        return 'urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0';
    };
    Object.defineProperty(PeppolRuleset.prototype, "rules", {
        get: function () {
            return {};
        },
        enumerable: false,
        configurable: true
    });
    return PeppolRuleset;
}(AbstractRuleset_1.default));
exports.default = PeppolRuleset;
//# sourceMappingURL=PeppolRuleset.js.map