"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Abstract Reader
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var fs_1 = require("fs");
var AbstractReader = /** @class */ (function () {
    function AbstractReader() {
    }
    AbstractReader.prototype.readFromFile = function (filename) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var content;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_1.promises.readFile(filename, 'utf-8')];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, this.read(content)];
                }
            });
        });
    };
    return AbstractReader;
}());
exports.default = AbstractReader;
//# sourceMappingURL=AbstractReader.js.map