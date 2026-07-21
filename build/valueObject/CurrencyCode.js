"use strict";
/**
 * CurrencyCode.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ValueObject_1 = require("../base/ValueObject");
var CurrencyCode = /** @class */ (function (_super) {
    tslib_1.__extends(CurrencyCode, _super);
    function CurrencyCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrencyCode.create = function (code) {
        return new CurrencyCode({ code: code });
    };
    CurrencyCode.prototype.toPrimitive = function () {
        return this.props.code;
    };
    return CurrencyCode;
}(ValueObject_1.ValueObject));
exports.default = CurrencyCode;
//# sourceMappingURL=CurrencyCode.js.map