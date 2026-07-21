"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ValueObject_1 = require("../base/ValueObject");
var helpers_1 = require("../helpers");
var Quantity = /** @class */ (function (_super) {
    tslib_1.__extends(Quantity, _super);
    function Quantity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quantity.create = function (props) {
        return new Quantity(props);
    };
    Object.defineProperty(Quantity.prototype, "value", {
        /**
         * Get the quantity value.
         */
        get: function () {
            return this.props.value;
        },
        /**
         * Set the quantity value.
         */
        set: function (value) {
            this.props.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quantity.prototype, "unitCode", {
        /**
         * Get the quantity unit code.
         */
        get: function () {
            return this.props.unitCode;
        },
        /**
         * Set the quantity unit code.
         */
        set: function (value) {
            this.props.unitCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Quantity.prototype.toPrimitive = function () {
        var value = {
            '#text': (0, helpers_1.formatNumber)(this.value),
        };
        if (this.unitCode) {
            value['attr_unitCode'] = this.unitCode;
        }
        return value;
    };
    return Quantity;
}(ValueObject_1.ValueObject));
exports.default = Quantity;
//# sourceMappingURL=Quantity.js.map