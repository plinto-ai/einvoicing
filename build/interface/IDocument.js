"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PROFILE_ID = exports.DEFAULT_CUSTOMIZATION_ID = exports.DocumentTypes = exports.DocumentId = void 0;
var tslib_1 = require("tslib");
/**
 * IDocument.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var EntityId_1 = require("../base/EntityId");
var DocumentId = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentId, _super);
    function DocumentId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DocumentId = 'document_id';
        return _this;
    }
    return DocumentId;
}(EntityId_1.EntityId));
exports.DocumentId = DocumentId;
var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["Invoice"] = "invoice";
    DocumentTypes["CreditNote"] = "credit_note";
})(DocumentTypes || (exports.DocumentTypes = DocumentTypes = {}));
exports.DEFAULT_CUSTOMIZATION_ID = 'urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0';
exports.DEFAULT_PROFILE_ID = 'urn:fdc:peppol.eu:2017:poacc:billing:01:1.0';
//# sourceMappingURL=IDocument.js.map