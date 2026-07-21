"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashError = void 0;
var tslib_1 = require("tslib");
/**
 * HashError.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var HashError = /** @class */ (function (_super) {
    tslib_1.__extends(HashError, _super);
    function HashError(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, HashError.prototype);
        return _this;
    }
    return HashError;
}(Error));
exports.HashError = HashError;
//# sourceMappingURL=HashError.js.map