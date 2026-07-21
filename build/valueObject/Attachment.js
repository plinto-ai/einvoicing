"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Attachment.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var Attachment = /** @class */ (function (_super) {
    tslib_1.__extends(Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Attachment.create = function (ref) {
        return new Attachment(ref);
    };
    Object.defineProperty(Attachment.prototype, "id", {
        /**
         * Get the attachment ID.
         */
        get: function () {
            return this.props.id;
        },
        /**
         * Set the attachment ID.
         */
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "documentTypeCode", {
        /**
         * Get the document type code.
         */
        get: function () {
            return this.props.documentTypeCode;
        },
        /**
         * Set the document type code.
         */
        set: function (value) {
            this.props.documentTypeCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "description", {
        /**
         * Get the attachment description.
         */
        get: function () {
            return this.props.description;
        },
        /**
         * Set the attachment description.
         */
        set: function (value) {
            this.props.description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "externalUri", {
        /**
         * Get the external URI.
         */
        get: function () {
            return this.props.externalUri;
        },
        /**
         * Set the external URI.
         */
        set: function (value) {
            this.props.externalUri = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "content", {
        /**
         * Get the content.
         */
        get: function () {
            return this.props.content;
        },
        /**
         * Set the content.
         */
        set: function (value) {
            this.props.content = value;
        },
        enumerable: false,
        configurable: true
    });
    Attachment.prototype.toPrimitive = function () {
        return this.props;
    };
    return Attachment;
}(ValueObject_1.ValueObject));
exports.default = Attachment;
//# sourceMappingURL=Attachment.js.map