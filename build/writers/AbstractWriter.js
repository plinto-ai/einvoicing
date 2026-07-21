"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AbstractWriter.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var fs_1 = require("fs");
var AbstractWriter = /** @class */ (function () {
    function AbstractWriter() {
    }
    AbstractWriter.prototype.writeToFile = function (document, filename) {
        return fs_1.promises.writeFile(filename, this.write(document));
    };
    return AbstractWriter;
}());
exports.default = AbstractWriter;
//# sourceMappingURL=AbstractWriter.js.map