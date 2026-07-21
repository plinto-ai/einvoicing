"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * PaymentTransfer.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var PaymentTransfer = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentTransfer, _super);
    function PaymentTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentTransfer.create = function (props) {
        return new PaymentTransfer(props);
    };
    Object.defineProperty(PaymentTransfer.prototype, "account", {
        /**
         * Get the receiving account ID.
         */
        get: function () {
            return this.props.account;
        },
        /**
         * Set the receiving account ID.
         */
        set: function (value) {
            this.props.account = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaymentTransfer.prototype, "name", {
        /**
         * Get the receiving account name.
         */
        get: function () {
            return this.props.name;
        },
        /**
         * Set the receiving account name.
         */
        set: function (value) {
            this.props.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaymentTransfer.prototype, "provider", {
        /**
         * Get the service provider ID.
         */
        get: function () {
            return this.props.provider;
        },
        /**
         * Set the service provider ID.
         */
        set: function (value) {
            this.props.provider = value;
        },
        enumerable: false,
        configurable: true
    });
    PaymentTransfer.prototype.toPrimitive = function () {
        return this.props;
    };
    return PaymentTransfer;
}(ValueObject_1.ValueObject));
exports.default = PaymentTransfer;
//# sourceMappingURL=PaymentTransfer.js.map