"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Identifier_1 = tslib_1.__importDefault(require("./Identifier"));
var ListIdentifier = /** @class */ (function (_super) {
    tslib_1.__extends(ListIdentifier, _super);
    function ListIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListIdentifier.create = function (props) {
        return new ListIdentifier(props);
    };
    ListIdentifier.prototype.toPrimitive = function () {
        var value = {
            '#text': this.id,
        };
        if (this.scheme) {
            value['attr_listID'] = String(this.scheme);
        }
        return value;
    };
    return ListIdentifier;
}(Identifier_1.default));
exports.default = ListIdentifier;
//# sourceMappingURL=ListIdentifier.js.map