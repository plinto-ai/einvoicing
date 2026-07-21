"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Party.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var Party = /** @class */ (function (_super) {
    tslib_1.__extends(Party, _super);
    function Party() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Party.create = function (props) {
        return new Party(props);
    };
    Object.defineProperty(Party.prototype, "endpointId", {
        /**
         * Get the endpoint ID.
         */
        get: function () {
            return this.props.endpointId;
        },
        /**
         * Set the endpoint ID.
         */
        set: function (value) {
            this.props.endpointId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "address", {
        /**
         * Get the address.
         */
        get: function () {
            return this.props.address;
        },
        /**
         * Set the address.
         */
        set: function (value) {
            this.props.address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "legalName", {
        /**
         * Get the legal name.
         */
        get: function () {
            return this.props.legalName;
        },
        /**
         * Set the legal name.
         */
        set: function (value) {
            this.props.legalName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "companyId", {
        /**
         * Get the company ID.
         */
        get: function () {
            return this.props.companyId;
        },
        /**
         * Set the company ID.
         */
        set: function (value) {
            this.props.companyId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "tradingName", {
        /**
         * Get the trading name.
         */
        get: function () {
            return this.props.tradingName;
        },
        /**
         * Set the trading name.
         */
        set: function (value) {
            this.props.tradingName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "companyLegalForm", {
        /**
         * Get the company legal form.
         */
        get: function () {
            return this.props.companyLegalForm;
        },
        /**
         * Set the company legal form.
         */
        set: function (value) {
            this.props.companyLegalForm = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "contact", {
        /**
         * Get the contact.
         */
        get: function () {
            return this.props.contact;
        },
        /**
         * Set the contact name.
         */
        set: function (value) {
            this.props.contact = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "additionalIdentifiers", {
        /**
         * Get the additional identifiers.
         */
        get: function () {
            return this.props.additionalIdentifiers;
        },
        /**
         * Set the additional identifiers.
         */
        set: function (value) {
            this.props.additionalIdentifiers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "taxRegistration", {
        /**
         * Get the tax registration.
         */
        get: function () {
            return this.props.taxRegistration;
        },
        /**
         * Set the tax registration.
         */
        set: function (value) {
            this.props.taxRegistration = value;
        },
        enumerable: false,
        configurable: true
    });
    Party.prototype.toPrimitive = function () {
        return this.props;
    };
    return Party;
}(ValueObject_1.ValueObject));
exports.default = Party;
//# sourceMappingURL=Party.js.map