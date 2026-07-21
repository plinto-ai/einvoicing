"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractRuleset = /** @class */ (function () {
    function AbstractRuleset() {
    }
    AbstractRuleset.prototype.validate = function (document) {
        var res = {
            errors: [],
            warning: [],
        };
        for (var key in this.rules) {
            if (!this.rules[key].test(document)) {
                res.errors.push({ key: key, message: this.rules[key].message });
            }
        }
        return res;
    };
    return AbstractRuleset;
}());
exports.default = AbstractRuleset;
//# sourceMappingURL=AbstractRuleset.js.map