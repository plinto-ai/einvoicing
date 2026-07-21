"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityId = void 0;
var tslib_1 = require("tslib");
/**
 * EntityId.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var uuid_by_string_1 = tslib_1.__importDefault(require("uuid-by-string"));
var cuid2_1 = require("@paralleldrive/cuid2");
var hashids_1 = tslib_1.__importDefault(require("hashids"));
var HashError_1 = require("../error/HashError");
var EntityId = /** @class */ (function () {
    function EntityId(recordId, isHash, uuid) {
        if (recordId === void 0) { recordId = null; }
        if (isHash === void 0) { isHash = false; }
        if (uuid === void 0) { uuid = null; }
        this._recordId = null;
        this._uuid = null;
        this._recordId = recordId ? recordId : null;
        if (isHash) {
            this.fromHash(recordId);
        }
        if (!uuid) {
            this.createUUID();
        }
    }
    EntityId.prototype.createUUID = function () {
        this._uuid = (0, uuid_by_string_1.default)(this._recordId ? this._recordId.toString() : (0, cuid2_1.createId)(), (0, uuid_by_string_1.default)(this.constructor.name));
    };
    Object.defineProperty(EntityId.prototype, "hashOptions", {
        get: function () {
            return [this.constructor.name, 5];
        },
        enumerable: false,
        configurable: true
    });
    EntityId.prototype.toHash = function () {
        if (!this._recordId) {
            throw new Error('Cannot hash an empty recordId');
        }
        var hashids = new (hashids_1.default.bind.apply(hashids_1.default, tslib_1.__spreadArray([void 0], this.hashOptions, false)))();
        return hashids.encode(this.toPrimitive().toString());
    };
    EntityId.prototype.fromHash = function (hash) {
        if (!hash) {
            return this;
        }
        var hashids = new (hashids_1.default.bind.apply(hashids_1.default, tslib_1.__spreadArray([void 0], this.hashOptions, false)))();
        var num = hashids.decode(hash)[0];
        if (!num) {
            throw new HashError_1.HashError("Invalid hash ".concat(hash));
        }
        this._recordId = ((typeof this._recordId === 'string' ? num.toString() : num));
        this.createUUID();
        return this;
    };
    EntityId.prototype.toPrimitive = function () {
        return this._recordId;
    };
    EntityId.prototype.toString = function () {
        return this._uuid;
    };
    EntityId.prototype.equals = function (id) {
        return this._uuid === id._uuid;
    };
    return EntityId;
}());
exports.EntityId = EntityId;
//# sourceMappingURL=EntityId.js.map