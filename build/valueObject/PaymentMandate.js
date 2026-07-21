"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * PaymentMandate.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var PaymentMandate = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentMandate, _super);
    function PaymentMandate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentMandate.create = function (props) {
        return new PaymentMandate(props);
    };
    Object.defineProperty(PaymentMandate.prototype, "reference", {
        /**
         * Get the mandate reference.
         */
        get: function () {
            return this.props.reference;
        },
        /**
         * Set the mandate reference.
         */
        set: function (value) {
            this.props.reference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaymentMandate.prototype, "account", {
        /**
         * Get the debited account.
         */
        get: function () {
            return this.props.account;
        },
        /**
         * Set the debited account.
         */
        set: function (value) {
            this.props.account = value;
        },
        enumerable: false,
        configurable: true
    });
    PaymentMandate.prototype.toPrimitive = function () {
        return this.props;
    };
    return PaymentMandate;
}(ValueObject_1.ValueObject));
exports.default = PaymentMandate;
//# sourceMappingURL=PaymentMandate.js.map