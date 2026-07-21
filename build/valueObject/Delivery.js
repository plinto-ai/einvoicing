"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Delivery.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var Delivery = /** @class */ (function (_super) {
    tslib_1.__extends(Delivery, _super);
    function Delivery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Delivery.create = function (props) {
        return new Delivery(props);
    };
    Object.defineProperty(Delivery.prototype, "name", {
        /**
         * Get the delivery name.
         */
        get: function () {
            return this.props.name;
        },
        /**
         * Set the delivery name.
         */
        set: function (value) {
            this.props.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Delivery.prototype, "date", {
        /**
         * Get the actual delivery date.
         */
        get: function () {
            return this.props.date;
        },
        /**
         * Set the actual delivery date.
         */
        set: function (value) {
            this.props.date = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Delivery.prototype, "locationId", {
        /**
         * Get the delivery location identifier.
         */
        get: function () {
            return this.props.locationId;
        },
        /**
         * Set the delivery location identifier.
         */
        set: function (value) {
            this.props.locationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Delivery.prototype, "address", {
        /**
         * Get the delivery postal address.
         */
        get: function () {
            return this.props.address;
        },
        /**
         * Set the delivery postal address.
         */
        set: function (value) {
            this.props.address = value;
        },
        enumerable: false,
        configurable: true
    });
    Delivery.prototype.toPrimitive = function () {
        return this.props;
    };
    return Delivery;
}(ValueObject_1.ValueObject));
exports.default = Delivery;
//# sourceMappingURL=Delivery.js.map