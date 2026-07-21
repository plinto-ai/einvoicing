"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * BinaryObject.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var ValueObject_1 = require("../base/ValueObject");
var BinaryObject = /** @class */ (function (_super) {
    tslib_1.__extends(BinaryObject, _super);
    function BinaryObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinaryObject.create = function (ref) {
        return new BinaryObject(ref);
    };
    BinaryObject.createFromBase64 = function (ref) {
        return new BinaryObject({
            filename: ref.filename,
            mimeCode: ref.mimeCode,
            content: ref.base64 ? atob(ref.base64) : undefined,
        });
    };
    Object.defineProperty(BinaryObject.prototype, "mimeCode", {
        /**
         * Get the MIME code.
         */
        get: function () {
            return this.props.mimeCode;
        },
        /**
         * Set the MIME code.
         */
        set: function (value) {
            this.props.mimeCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinaryObject.prototype, "filename", {
        /**
         * Get the filename.
         */
        get: function () {
            return this.props.filename;
        },
        /**
         * Set the filename.
         */
        set: function (value) {
            this.props.filename = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinaryObject.prototype, "content", {
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
    BinaryObject.prototype.toPrimitive = function () {
        return this.props;
    };
    return BinaryObject;
}(ValueObject_1.ValueObject));
exports.default = BinaryObject;
//# sourceMappingURL=BinaryObject.js.map