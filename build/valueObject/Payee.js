"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Payee.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var Payee = /** @class */ (function (_super) {
    tslib_1.__extends(Payee, _super);
    function Payee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Payee.create = function (props) {
        return new Payee(props);
    };
    Object.defineProperty(Payee.prototype, "name", {
        /**
         * Get the payee name.
         */
        get: function () {
            return this.props.name;
        },
        /**
         * Set the payee name.
         */
        set: function (value) {
            this.props.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Payee.prototype, "companyId", {
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
    Object.defineProperty(Payee.prototype, "additionalIdentifiers", {
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
    Payee.prototype.toPrimitive = function () {
        return this.props;
    };
    return Payee;
}(ValueObject_1.ValueObject));
exports.default = Payee;
//# sourceMappingURL=Payee.js.map