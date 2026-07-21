"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * DocumentLine.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var Entity_1 = require("../base/Entity");
var DocumentLine = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentLine, _super);
    function DocumentLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentLine.create = function (props) {
        return new DocumentLine(props, props.id);
    };
    Object.defineProperty(DocumentLine.prototype, "id", {
        /**
         * Get the document line ID.
         */
        get: function () {
            return this.props.id;
        },
        /**
         * Set the document line ID.
         */
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "note", {
        /**
         * Get the note.
         */
        get: function () {
            return this.props.note;
        },
        /**
         * Set the note.
         */
        set: function (value) {
            this.props.note = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "unitCode", {
        /**
         * Get the unit code.
         */
        get: function () {
            return this.props.unitCode;
        },
        /**
         * Set the unit code.
         */
        set: function (value) {
            this.props.unitCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "buyerAccountingReference", {
        /**
         * Get the buyer accounting reference.
         */
        get: function () {
            return this.props.buyerAccountingReference;
        },
        /**
         * Set the buyer accounting reference.
         */
        set: function (value) {
            this.props.buyerAccountingReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "orderLineReference", {
        /**
         * Get the order line reference.
         */
        get: function () {
            return this.props.orderLineReference;
        },
        /**
         * Set the order line reference.
         */
        set: function (value) {
            this.props.orderLineReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "periodStart", {
        /**
         * Get the period start date.
         */
        get: function () {
            return this.props.periodStart;
        },
        /**
         * Set the period start date.
         */
        set: function (value) {
            this.props.periodStart = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "periodEnd", {
        /**
         * Get the period end date.
         */
        get: function () {
            return this.props.periodEnd;
        },
        /**
         * Set the period end date.
         */
        set: function (value) {
            this.props.periodEnd = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "name", {
        /**
         * Get the name.
         */
        get: function () {
            return this.props.name;
        },
        /**
         * Set the name.
         */
        set: function (value) {
            this.props.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "description", {
        /**
         * Get the description.
         */
        get: function () {
            return this.props.description;
        },
        /**
         * Set the description.
         */
        set: function (value) {
            this.props.description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "quantity", {
        /**
         * Get the quantity.
         */
        get: function () {
            return this.props.quantity;
        },
        /**
         * Set the quantity.
         */
        set: function (value) {
            this.props.quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "buyerIdentifier", {
        /**
         * Get the buyer identifier.
         */
        get: function () {
            return this.props.buyerIdentifier;
        },
        /**
         * Set the buyer identifier.
         */
        set: function (value) {
            this.props.buyerIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "sellerIdentifier", {
        /**
         * Get the seller identifier.
         */
        get: function () {
            return this.props.sellerIdentifier;
        },
        /**
         * Set the seller identifier.
         */
        set: function (value) {
            this.props.sellerIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "standardIdentifier", {
        /**
         * Get the standard identifier.
         */
        get: function () {
            return this.props.standardIdentifier;
        },
        /**
         * Set the standard identifier.
         */
        set: function (value) {
            this.props.standardIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "originCountryCode", {
        /**
         * Get the origin country code.
         */
        get: function () {
            return this.props.originCountryCode;
        },
        /**
         * Set the origin country code.
         */
        set: function (value) {
            this.props.originCountryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "classificationIdentifiers", {
        /**
         * Get the classification identifiers.
         */
        get: function () {
            return this.props.classificationIdentifiers;
        },
        /**
         * Set the classification identifiers.
         */
        set: function (value) {
            this.props.classificationIdentifiers = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "price", {
        /**
         * Get the price.
         */
        get: function () {
            return this.props.price;
        },
        /**
         * Set the price.
         */
        set: function (value) {
            this.props.price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "netAmount", {
        /**
         * Get the net amount
         */
        get: function () {
            return this.props.netAmount;
        },
        /**
         * Set the net amount
         */
        set: function (value) {
            this.props.netAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "baseQuantity", {
        /**
         * Get the base quantity.
         */
        get: function () {
            return this.props.baseQuantity;
        },
        /**
         * Set the base quantity.
         */
        set: function (value) {
            this.props.baseQuantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "attributes", {
        /**
         * Get the attributes.
         */
        get: function () {
            return this.props.attributes;
        },
        /**
         * Set the attributes.
         */
        set: function (value) {
            this.props.attributes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "charges", {
        /**
         * Get the charges.
         */
        get: function () {
            return this.props.charges;
        },
        /**
         * Set the charges.
         */
        set: function (value) {
            this.props.charges = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentLine.prototype, "tax", {
        /**
         * Get the tax.
         */
        get: function () {
            return this.props.tax;
        },
        /**
         * Set the tax.
         */
        set: function (value) {
            this.props.tax = value;
        },
        enumerable: false,
        configurable: true
    });
    DocumentLine.prototype.toPrimitive = function () {
        return this.props;
    };
    return DocumentLine;
}(Entity_1.Entity));
exports.default = DocumentLine;
//# sourceMappingURL=DocumentLine.js.map