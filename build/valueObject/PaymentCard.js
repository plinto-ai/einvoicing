"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * PaymentCard.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var PaymentCard = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentCard, _super);
    function PaymentCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentCard.create = function (props) {
        return new PaymentCard(props);
    };
    Object.defineProperty(PaymentCard.prototype, "pan", {
        /**
         * Get the card PAN.
         */
        get: function () {
            return this.props.pan;
        },
        /**
         * Set the card PAN.
         */
        set: function (value) {
            this.props.pan = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaymentCard.prototype, "network", {
        /**
         * Get the card network.
         */
        get: function () {
            return this.props.network;
        },
        /**
         * Set the card network.
         */
        set: function (value) {
            this.props.network = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaymentCard.prototype, "holder", {
        /**
         * Get the card holder name.
         */
        get: function () {
            return this.props.holder;
        },
        /**
         * Set the card holder name.
         */
        set: function (value) {
            this.props.holder = value;
        },
        enumerable: false,
        configurable: true
    });
    PaymentCard.prototype.toPrimitive = function () {
        return this.props;
    };
    return PaymentCard;
}(ValueObject_1.ValueObject));
exports.default = PaymentCard;
//# sourceMappingURL=PaymentCard.js.map