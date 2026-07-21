"use strict";
/**
 * DKRuleset.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AbstractRuleset_1 = tslib_1.__importDefault(require("./AbstractRuleset"));
var DKRuleset = /** @class */ (function (_super) {
    tslib_1.__extends(DKRuleset, _super);
    function DKRuleset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DKRuleset.prototype.getCustomizationID = function () {
        return 'urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0';
    };
    Object.defineProperty(DKRuleset.prototype, "rules", {
        get: function () {
            return {
                'DK-R-002': {
                    type: 'error',
                    message: 'Danish suppliers MUST provide legal entity (CVR-number)',
                    test: function (document) { var _a; return !!((_a = document.seller) === null || _a === void 0 ? void 0 : _a.companyId); },
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return DKRuleset;
}(AbstractRuleset_1.default));
exports.default = DKRuleset;
//# sourceMappingURL=DKRuleset.js.map