"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Entity_1 = require("../base/Entity");
var Tax = /** @class */ (function (_super) {
    tslib_1.__extends(Tax, _super);
    function Tax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tax.create = function (props) {
        return new Tax(props, props.id);
    };
    Object.defineProperty(Tax.prototype, "id", {
        /**
         * Get the tax ID.
         */
        get: function () {
            return this.props.id;
        },
        /**
         * Set the tax ID.
         */
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tax.prototype, "currency", {
        /**
         * Get the currency.
         */
        get: function () {
            return this.props.currency;
        },
        /**
         * Set the currency.
         */
        set: function (value) {
            this.props.currency = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tax.prototype, "taxableAmount", {
        /**
         * Get the taxable amount.
         */
        get: function () {
            return this.props.taxableAmount;
        },
        /**
         * Set the taxable amount.
         */
        set: function (value) {
            this.props.taxableAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tax.prototype, "taxAmount", {
        /**
         * Get the tax amount.
         */
        get: function () {
            return this.props.taxAmount;
        },
        /**
         * Set the tax amount.
         */
        set: function (value) {
            this.props.taxAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tax.prototype, "percent", {
        /**
         * Get the percent.
         */
        get: function () {
            return this.props.percent;
        },
        /**
         * Set the percent.
         */
        set: function (value) {
            this.props.percent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tax.prototype, "taxExemptionReason", {
        /**
         * Get the tax exemption reason.
         */
        get: function () {
            return this.props.taxExemptionReason;
        },
        /**
         * Set the tax exemption reason.
         */
        set: function (value) {
            this.props.taxExemptionReason = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tax.prototype, "taxExemptionReasonCode", {
        /**
         * Get the tax exemption reason code.
         */
        get: function () {
            return this.props.taxExemptionReasonCode;
        },
        /**
         * Set the tax exemption reason code.
         */
        set: function (value) {
            this.props.taxExemptionReasonCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Tax.prototype.toPrimitive = function () {
        return this.props;
    };
    return Tax;
}(Entity_1.Entity));
exports.default = Tax;
//# sourceMappingURL=Tax.js.map