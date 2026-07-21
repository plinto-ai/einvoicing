"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Identifier.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var Identifier = /** @class */ (function (_super) {
    tslib_1.__extends(Identifier, _super);
    function Identifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Identifier.create = function (props) {
        return new Identifier(props);
    };
    Object.defineProperty(Identifier.prototype, "id", {
        /**
         * Get the identifier ID.
         */
        get: function () {
            return this.props.id;
        },
        /**
         * Set the identifier ID.
         */
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identifier.prototype, "scheme", {
        /**
         * Get the identifier scheme.
         */
        get: function () {
            return this.props.scheme;
        },
        /**
         * Set the identifier scheme.
         */
        set: function (value) {
            this.props.scheme = value;
        },
        enumerable: false,
        configurable: true
    });
    Identifier.prototype.toPrimitive = function () {
        var value = {
            '#text': this.id,
        };
        if (this.scheme) {
            value['attr_schemeID'] = this.scheme;
        }
        return value;
    };
    return Identifier;
}(ValueObject_1.ValueObject));
exports.default = Identifier;
//# sourceMappingURL=Identifier.js.map