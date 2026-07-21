"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxId = void 0;
var tslib_1 = require("tslib");
var EntityId_1 = require("../base/EntityId");
var TaxId = /** @class */ (function (_super) {
    tslib_1.__extends(TaxId, _super);
    function TaxId(id, percent) {
        var _this = _super.call(this, "".concat(id, ":").concat(percent !== null && percent !== void 0 ? percent : 0)) || this;
        _this.TaxId = 'tax_id';
        return _this;
    }
    return TaxId;
}(EntityId_1.EntityId));
exports.TaxId = TaxId;
//# sourceMappingURL=ITax.js.map