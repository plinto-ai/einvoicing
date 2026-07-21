"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * AllowanceCharge.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var AllowanceCharge = /** @class */ (function (_super) {
    tslib_1.__extends(AllowanceCharge, _super);
    function AllowanceCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllowanceCharge.create = function (ref) {
        if (!ref.amount && !ref.factorAmount) {
            throw new Error('Either amount or factorAmount must be provided');
        }
        return new AllowanceCharge(ref);
    };
    Object.defineProperty(AllowanceCharge.prototype, "isPercentage", {
        get: function () {
            return this.props.factorAmount !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllowanceCharge.prototype, "isCharge", {
        /**
         * Get whether it is a charge.
         */
        get: function () {
            return this.props.isCharge;
        },
        /**
         * Set whether it is a charge.
         */
        set: function (value) {
            this.props.isCharge = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllowanceCharge.prototype, "reasonCode", {
        /**
         * Get the reason code.
         */
        get: function () {
            return this.props.reasonCode;
        },
        /**
         * Set the reason code.
         */
        set: function (value) {
            this.props.reasonCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllowanceCharge.prototype, "reasonText", {
        /**
         * Get the reason text.
         */
        get: function () {
            return this.props.reasonText;
        },
        /**
         * Set the reason text.
         */
        set: function (value) {
            this.props.reasonText = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllowanceCharge.prototype, "factorAmount", {
        /**
         * Get the factor amount.
         */
        get: function () {
            return this.props.factorAmount;
        },
        /**
         * Set the factor amount.
         */
        set: function (value) {
            this.props.factorAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllowanceCharge.prototype, "baseAmount", {
        /**
         * Get the base amount.
         */
        get: function () {
            return this.props.baseAmount;
        },
        /**
         * Set the base amount.
         */
        set: function (value) {
            this.props.baseAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllowanceCharge.prototype, "amount", {
        /**
         * Get the amount.
         */
        get: function () {
            return this.props.amount;
        },
        /**
         * Set the amount.
         */
        set: function (value) {
            this.props.amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllowanceCharge.prototype, "tax", {
        /**
         * Get the tax.
         */
        get: function () {
            return this.props.tax;
        },
        /**
         * Set the tax.
         */
        set: function (value) {
            this.props.tax = value;
        },
        enumerable: false,
        configurable: true
    });
    AllowanceCharge.prototype.toPrimitive = function () {
        return this.props;
    };
    return AllowanceCharge;
}(ValueObject_1.ValueObject));
exports.default = AllowanceCharge;
//# sourceMappingURL=AllowanceCharge.js.map