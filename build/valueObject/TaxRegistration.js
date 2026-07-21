"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ValueObject_1 = require("../base/ValueObject");
var TaxRegistration = /** @class */ (function (_super) {
    tslib_1.__extends(TaxRegistration, _super);
    function TaxRegistration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaxRegistration.create = function (_a) {
        var id = _a.id, _b = _a.scheme, scheme = _b === void 0 ? 'VAT' : _b;
        return new TaxRegistration({
            id: id,
            scheme: scheme,
        });
    };
    Object.defineProperty(TaxRegistration.prototype, "id", {
        /**
         * Get the id.
         */
        get: function () {
            return this.props.id;
        },
        /**
         * Set the id.
         */
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaxRegistration.prototype, "scheme", {
        /**
         * Get the scheme.
         */
        get: function () {
            return this.props.scheme;
        },
        /**
         * Set the scheme.
         */
        set: function (value) {
            this.props.scheme = value;
        },
        enumerable: false,
        configurable: true
    });
    return TaxRegistration;
}(ValueObject_1.ValueObject));
exports.default = TaxRegistration;
//# sourceMappingURL=TaxRegistration.js.map