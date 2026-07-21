"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
/**
 * ValueObject.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var shallow_equal_object_1 = require("shallow-equal-object");
var ValueObject = /** @class */ (function () {
    function ValueObject(props) {
        this.props = Object.freeze(props);
    }
    ValueObject.prototype.equals = function (vo) {
        var props = (vo === null || vo === void 0 ? void 0 : vo.props) || vo;
        if (vo === null || vo === undefined) {
            return false;
        }
        if (props === undefined) {
            return false;
        }
        return (0, shallow_equal_object_1.shallowEqual)(this.props, props);
    };
    return ValueObject;
}());
exports.ValueObject = ValueObject;
//# sourceMappingURL=ValueObject.js.map