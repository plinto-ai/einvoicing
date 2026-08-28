"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * UnsupportedDocumentError.ts
 *
 * Thrown when the XML is well-formed but is not a document this library
 * reads: the root element is not a UBL 2.x Invoice/CreditNote, by name or by
 * namespace. Typed so callers can tell "wrong dialect" apart from broken XML.
 */
var UnsupportedDocumentError = /** @class */ (function (_super) {
    tslib_1.__extends(UnsupportedDocumentError, _super);
    function UnsupportedDocumentError(message) {
        var _this = _super.call(this, message) || this;
        // The es5 build target breaks the prototype chain of subclassed built-ins;
        // restoring it keeps `instanceof` working (same as HashError).
        Object.setPrototypeOf(_this, UnsupportedDocumentError.prototype);
        return _this;
    }
    return UnsupportedDocumentError;
}(Error));
exports.default = UnsupportedDocumentError;
//# sourceMappingURL=UnsupportedDocumentError.js.map