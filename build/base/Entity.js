"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/**
 * Entity.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var EntityId_1 = require("./EntityId");
var isEntity = function (v) {
    return v instanceof Entity;
};
var Entity = /** @class */ (function () {
    function Entity(props, id) {
        if (id) {
            this._id = (typeof id === 'object' ? id : new EntityId_1.EntityId(id));
        }
        else {
            this._id = new EntityId_1.EntityId();
        }
        this.props = props;
    }
    Entity.prototype.equals = function (object) {
        if (object === null || object === undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this._id.equals(object._id);
    };
    Object.defineProperty(Entity.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Entity.prototype.toPrimitive = function () {
        return this.props;
    };
    Entity.prototype.toJSON = function () {
        return this.toPrimitive();
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map