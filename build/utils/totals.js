"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoiceTotals = getInvoiceTotals;
function round(number, precision) {
    if (precision === void 0) { precision = 2; }
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}
function getEffectiveAmount(item) {
    if (item.amount) {
        return item.amount;
    }
    if (item.isPercentage) {
        return item.baseAmount * (item.amount / 100);
    }
    return item.amount;
}
var pick = function (obj, includeMap) {
    return Object.keys(obj).reduce(function (acc, key) {
        if (includeMap[key]) {
            acc[key] = obj[key];
        }
        else {
            acc[key] = undefined;
        }
        return acc;
    }, {});
};
function getInvoiceTotals(document) {
    var _a, _b, _c, _d;
    var currency = document.currency;
    var taxCurrency = document.taxCurrency || document.currency;
    var include = {
        allowancesAmount: false,
        chargesAmount: false,
        currency: true,
        netAmount: true,
        paidAmount: false,
        payableAmount: true,
        roundingAmount: false,
        taxAmount: true,
        taxCurrency: true,
        taxExclusiveAmount: true,
        taxInclusiveAmount: true,
    };
    // All the values are initialized to 0, so that operations can be performed on them
    // without having to check if they are undefined.
    var totals = {
        allowancesAmount: 0,
        chargesAmount: 0,
        currency: currency,
        netAmount: 0,
        paidAmount: 0,
        payableAmount: 0,
        roundingAmount: 0,
        taxAmount: 0,
        taxCurrency: taxCurrency,
        taxExclusiveAmount: 0,
        taxInclusiveAmount: 0,
    };
    if (typeof document.roundingAmount !== 'undefined') {
        totals.roundingAmount = round(document.roundingAmount);
        include.roundingAmount = true;
    }
    if (typeof document.paidAmount !== 'undefined') {
        totals.paidAmount = round(document.paidAmount || 0.0);
        include.paidAmount = true;
    }
    for (var _i = 0, _e = document.lines; _i < _e.length; _i++) {
        var line = _e[_i];
        var netAmount = round((_a = line.netAmount) !== null && _a !== void 0 ? _a : 0.0);
        totals.netAmount += netAmount;
    }
    totals.netAmount = round(totals.netAmount);
    var allowances = (_b = document.charges) === null || _b === void 0 ? void 0 : _b.filter(function (charge) { return !charge.isCharge; });
    var charges = (_c = document.charges) === null || _c === void 0 ? void 0 : _c.filter(function (charge) { return charge.isCharge; });
    for (var _f = 0, _g = allowances || []; _f < _g.length; _f++) {
        var allowance = _g[_f];
        var allowanceAmount = round(getEffectiveAmount(allowance));
        totals.allowancesAmount += allowanceAmount;
        include.allowancesAmount = true;
    }
    totals.allowancesAmount = round(totals.allowancesAmount);
    for (var _h = 0, _j = charges || []; _h < _j.length; _h++) {
        var charge = _j[_h];
        var chargeAmount = round(getEffectiveAmount(charge));
        totals.chargesAmount += chargeAmount;
        include.chargesAmount = true;
    }
    totals.chargesAmount = round(totals.chargesAmount);
    for (var _k = 0, _l = document.taxes || []; _k < _l.length; _k++) {
        var line = _l[_k];
        var taxAmount = round((_d = line.taxAmount) !== null && _d !== void 0 ? _d : 0.0);
        totals.taxAmount += taxAmount;
    }
    totals.taxAmount = round(totals.taxAmount);
    totals.taxExclusiveAmount = round(totals.netAmount - totals.allowancesAmount + totals.chargesAmount);
    totals.taxInclusiveAmount = round(totals.taxExclusiveAmount + totals.taxAmount + totals.roundingAmount);
    totals.payableAmount = round(totals.taxInclusiveAmount - totals.paidAmount);
    return pick(totals, include);
}
//# sourceMappingURL=totals.js.map