"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * DocumentType.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
// https://docs.peppol.eu/poacc/billing/3.0/2024-Q2/codelist/UNCL1001-inv/
var DocumentType = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentType, _super);
    function DocumentType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentType.create = function (type) {
        return new DocumentType({ type: type.toString() });
    };
    DocumentType.prototype.toPrimitive = function () {
        return this.props.type;
    };
    return DocumentType;
}(ValueObject_1.ValueObject));
exports.default = DocumentType;
//# sourceMappingURL=DocumentType.js.map