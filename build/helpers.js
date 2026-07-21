"use strict";
/**
 * Helpers
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeToId = nodeToId;
exports.nodeToQuantity = nodeToQuantity;
exports.strOrUnd = strOrUnd;
exports.numOrUnd = numOrUnd;
exports.getArray = getArray;
exports.formatNumber = formatNumber;
exports.omitEmpty = omitEmpty;
exports.omitIfUndefined = omitIfUndefined;
var tslib_1 = require("tslib");
var Identifier_1 = tslib_1.__importDefault(require("./valueObject/Identifier"));
var Quantity_1 = tslib_1.__importDefault(require("./valueObject/Quantity"));
function nodeToId(node) {
    if (!node) {
        return undefined;
    }
    if (typeof node === 'number' || typeof node === 'string') {
        return Identifier_1.default.create({
            scheme: undefined,
            id: String(node),
        });
    }
    return Identifier_1.default.create({
        scheme: node['attr_schemeID'],
        id: node['#text'],
    });
}
/**
 * Converts a node to a quantity object.
 *
 * @param node xml node
 */
function nodeToQuantity(node) {
    if (!node) {
        return undefined;
    }
    return Quantity_1.default.create({
        value: parseFloat(node['#text']),
        unitCode: node['attr_unitCode'],
    });
}
/**
 * Returns the string value of a node or undefined if the node is null or undefined.
 *
 * @param node xml node
 */
function strOrUnd(node) {
    if (!node && node !== 0) {
        return undefined;
    }
    // Repeated elements parse to an array; take the first occurrence.
    if (Array.isArray(node)) {
        return strOrUnd(node[0]);
    }
    if (typeof node === 'object') {
        // An element with attributes but no content (e.g.
        // <cbc:Note languageID="da"/>) parses to an object without '#text';
        // treat it as absent instead of failing the whole document.
        if (typeof node['#text'] === 'undefined') {
            return undefined;
        }
        return node['#text'].toString();
    }
    return node.toString();
}
/**
 * Returns the number value of a node or undefined if the node is null or undefined.
 *
 * @param node xml node
 */
function numOrUnd(node) {
    return strOrUnd(node) ? parseFloat(strOrUnd(node)) : undefined;
}
/**
 * Returns the array of nodes or an empty array if the node is null or undefined.
 *
 * @param node xml node
 * @param path path of nodes to get the value from
 */
function getArray(node, path) {
    if (path === void 0) { path = []; }
    var initNode = node;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var key = path_1[_i];
        if (!initNode) {
            return [];
        }
        initNode = initNode[key];
    }
    if (!initNode) {
        return [];
    }
    return Array.isArray(initNode) ? initNode : [initNode];
}
var formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    useGrouping: false,
});
function formatNumber(n) {
    if (typeof n === 'undefined')
        return n;
    return formatter.format(n);
}
var isEmpty = function (obj) { return obj && Object.keys(obj).length === 0; };
function omitEmpty(obj) {
    var returnObj = {};
    if (!obj) {
        return undefined;
    }
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (Array.isArray(value)) {
            returnObj[key] = value
                .map(function (v) { return omitEmpty(v); })
                .filter(function (v) { return typeof v !== 'undefined' && !isEmpty(v); });
        }
        else if (typeof value !== 'undefined') {
            var innerValue = void 0;
            if (value !== null && typeof value === 'object') {
                innerValue = omitEmpty(value);
            }
            if (!isEmpty(innerValue)) {
                returnObj[key] = innerValue || value;
            }
        }
    });
    return returnObj;
}
function omitIfUndefined(obj, property) {
    if (typeof property === 'undefined') {
        return undefined;
    }
    return obj;
}
//# sourceMappingURL=helpers.js.map