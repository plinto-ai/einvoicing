"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Attribute.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var Attribute = /** @class */ (function (_super) {
    tslib_1.__extends(Attribute, _super);
    function Attribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Attribute.create = function (ref) {
        return new Attribute(ref);
    };
    Object.defineProperty(Attribute.prototype, "name", {
        /**
         * Get the attribute name.
         */
        get: function () {
            return this.props.name;
        },
        /**
         * Set the attribute name.
         */
        set: function (value) {
            this.props.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "value", {
        /**
         * Get the attribute value.
         */
        get: function () {
            return this.props.value;
        },
        /**
         * Set the attribute value.
         */
        set: function (value) {
            this.props.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Attribute.prototype.toPrimitive = function () {
        return this.props;
    };
    return Attribute;
}(ValueObject_1.ValueObject));
exports.default = Attribute;
//# sourceMappingURL=Attribute.js.map