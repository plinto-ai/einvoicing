"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Payment.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var Payment = /** @class */ (function (_super) {
    tslib_1.__extends(Payment, _super);
    function Payment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Payment.create = function (props) {
        return new Payment(props);
    };
    Object.defineProperty(Payment.prototype, "terms", {
        /**
         * Get the payment terms.
         */
        get: function () {
            return this.props.terms;
        },
        /**
         * Set the payment terms.
         */
        set: function (value) {
            this.props.terms = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Payment.prototype, "meansCode", {
        /**
         * Get the payment means code.
         */
        get: function () {
            return this.props.meansCode;
        },
        /**
         * Set the payment means code.
         */
        set: function (value) {
            this.props.meansCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Payment.prototype, "meansName", {
        /**
         * Get the payment means name.
         */
        get: function () {
            return this.props.meansName;
        },
        /**
         * Set the payment means name.
         */
        set: function (value) {
            this.props.meansName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Payment.prototype, "id", {
        /**
         * Get the payment ID.
         */
        get: function () {
            return this.props.id;
        },
        /**
         * Set the payment ID.
         */
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Payment.prototype, "card", {
        /**
         * Get the payment card.
         */
        get: function () {
            return this.props.card;
        },
        /**
         * Set the payment card.
         */
        set: function (value) {
            this.props.card = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Payment.prototype, "transfer", {
        /**
         * Get the payment transfer.
         */
        get: function () {
            return this.props.transfer;
        },
        /**
         * Set the payment transfer.
         */
        set: function (value) {
            this.props.transfer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Payment.prototype, "mandate", {
        /**
         * Get the payment mandate.
         */
        get: function () {
            return this.props.mandate;
        },
        /**
         * Set the payment mandate.
         */
        set: function (value) {
            this.props.mandate = value;
        },
        enumerable: false,
        configurable: true
    });
    Payment.prototype.toPrimitive = function () {
        return this.props;
    };
    return Payment;
}(ValueObject_1.ValueObject));
exports.default = Payment;
//# sourceMappingURL=Payment.js.map