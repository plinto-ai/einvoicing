"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentLineId = void 0;
var tslib_1 = require("tslib");
/**
 * IDocumentLine.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var EntityId_1 = require("../base/EntityId");
var DocumentLineId = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentLineId, _super);
    function DocumentLineId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DocumentLineId = 'document_line_id';
        return _this;
    }
    return DocumentLineId;
}(EntityId_1.EntityId));
exports.DocumentLineId = DocumentLineId;
//# sourceMappingURL=IDocumentLine.js.map