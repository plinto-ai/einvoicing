"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * DateOnly.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var DateOnly = /** @class */ (function (_super) {
    tslib_1.__extends(DateOnly, _super);
    function DateOnly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateOnly.create = function (date) {
        if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            throw new Error('Invalid date format');
        }
        return new DateOnly({ date: date });
    };
    DateOnly.prototype.toPrimitive = function () {
        return this.props.date;
    };
    return DateOnly;
}(ValueObject_1.ValueObject));
exports.default = DateOnly;
//# sourceMappingURL=DateOnly.js.map