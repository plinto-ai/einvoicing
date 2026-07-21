"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * InvoiceReference.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var InvoiceReference = /** @class */ (function (_super) {
    tslib_1.__extends(InvoiceReference, _super);
    function InvoiceReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InvoiceReference.create = function (ref) {
        return new InvoiceReference(ref);
    };
    Object.defineProperty(InvoiceReference.prototype, "id", {
        /**
         * Get the invoice reference ID.
         */
        get: function () {
            return this.props.id;
        },
        /**
         * Set the invoice reference ID.
         */
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InvoiceReference.prototype, "issueDate", {
        /**
         * Get the issue date.
         */
        get: function () {
            return this.props.issueDate;
        },
        /**
         * Set the issue date.
         */
        set: function (value) {
            this.props.issueDate = value;
        },
        enumerable: false,
        configurable: true
    });
    InvoiceReference.prototype.toPrimitive = function () {
        return this.props;
    };
    return InvoiceReference;
}(ValueObject_1.ValueObject));
exports.default = InvoiceReference;
//# sourceMappingURL=InvoiceReference.js.map