"use strict";
/**
 * Address.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ValueObject_1 = require("../base/ValueObject");
var Address = /** @class */ (function (_super) {
    tslib_1.__extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Address.create = function (props) {
        return new Address(props);
    };
    Object.defineProperty(Address.prototype, "countryCode", {
        /**
         * Get the country code.
         */
        get: function () {
            return this.props.countryCode;
        },
        /**
         * Set the country code.
         */
        set: function (value) {
            this.props.countryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "subdivision", {
        /**
         * Get the subdivision.
         */
        get: function () {
            return this.props.subdivision;
        },
        /**
         * Set the subdivision.
         */
        set: function (value) {
            this.props.subdivision = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "cityName", {
        /**
         * Get the city name.
         */
        get: function () {
            return this.props.cityName;
        },
        /**
         * Set the city name.
         */
        set: function (value) {
            this.props.cityName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "postalZone", {
        /**
         * Get the postal zone.
         */
        get: function () {
            return this.props.postalZone;
        },
        /**
         * Set the postal zone.
         */
        set: function (value) {
            this.props.postalZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "streetName", {
        /**
         * Get the street name.
         */
        get: function () {
            return this.props.streetName;
        },
        /**
         * Set the street name.
         */
        set: function (value) {
            this.props.streetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Address.prototype, "addressLines", {
        /**
         * Get the address lines.
         */
        get: function () {
            return this.props.addressLines;
        },
        /**
         * Set the address lines.
         */
        set: function (value) {
            this.props.addressLines = value;
        },
        enumerable: false,
        configurable: true
    });
    Address.prototype.toPrimitive = function () {
        return this.props;
    };
    return Address;
}(ValueObject_1.ValueObject));
exports.default = Address;
//# sourceMappingURL=Address.js.map