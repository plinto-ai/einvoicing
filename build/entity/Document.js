"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Document.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var Entity_1 = require("../base/Entity");
var IDocument_1 = require("../interface/IDocument");
var Document = /** @class */ (function (_super) {
    tslib_1.__extends(Document, _super);
    function Document(props, id) {
        return _super.call(this, tslib_1.__assign({ customizationId: IDocument_1.DEFAULT_CUSTOMIZATION_ID, businessProcess: IDocument_1.DEFAULT_PROFILE_ID }, props), id) || this;
    }
    Document.create = function (type, ruleset, props) {
        var item = new Document(props, props.id);
        item._documentType = type;
        item._ruleset = ruleset;
        return item;
    };
    Document.prototype.validate = function () {
        return this._ruleset
            ? this._ruleset.validate(this)
            : { errors: [], warning: [] };
    };
    Object.defineProperty(Document.prototype, "documentType", {
        /**
         * Get the document type.
         */
        get: function () {
            return this._documentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "ruleset", {
        /**
         * Get the ruleset.
         */
        get: function () {
            return this._ruleset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "id", {
        /**
         * Get the document ID.
         */
        get: function () {
            return this.props.id;
        },
        /**
         * Set the document ID.
         */
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "customizationId", {
        /**
         * Get the customization ID.
         */
        get: function () {
            return this.props.customizationId;
        },
        /**
         * Set the customization ID.
         */
        set: function (value) {
            this.props.customizationId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "businessProcess", {
        /**
         * Get the business process.
         */
        get: function () {
            return this.props.businessProcess;
        },
        /**
         * Set the business process.
         */
        set: function (value) {
            this.props.businessProcess = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "issueDate", {
        /**
         * Get the issue date.
         */
        get: function () {
            return this.props.issueDate;
        },
        /**
         * Set the issue date.
         */
        set: function (value) {
            this.props.issueDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "dueDate", {
        /**
         * Get the due date.
         */
        get: function () {
            return this.props.dueDate;
        },
        /**
         * Set the due date.
         */
        set: function (value) {
            this.props.dueDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "type", {
        /**
         * Get the document type.
         */
        get: function () {
            return this.props.type;
        },
        /**
         * Set the document type.
         */
        set: function (value) {
            this.props.type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "notes", {
        /**
         * Get the notes.
         */
        get: function () {
            return this.props.notes;
        },
        /**
         * Set the notes.
         */
        set: function (value) {
            this.props.notes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "currency", {
        /**
         * Get the currency.
         */
        get: function () {
            return this.props.currency;
        },
        /**
         * Set the currency.
         */
        set: function (value) {
            this.props.currency = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "buyerReference", {
        /**
         * Get the buyer reference.
         */
        get: function () {
            return this.props.buyerReference;
        },
        /**
         * Set the buyer reference.
         */
        set: function (value) {
            this.props.buyerReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "buyerAccountingReference", {
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
    Object.defineProperty(Document.prototype, "purchaseOrderReference", {
        /**
         * Get the purchase order reference.
         */
        get: function () {
            return this.props.purchaseOrderReference;
        },
        /**
         * Set the purchase order reference.
         */
        set: function (value) {
            this.props.purchaseOrderReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "originatorDocumentReference", {
        /**
         * Get the originator document reference.
         */
        get: function () {
            return this.props.originatorDocumentReference;
        },
        /**
         * Set the originator document reference.
         */
        set: function (value) {
            this.props.originatorDocumentReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "salesOrderReference", {
        /**
         * Get the sales order reference.
         */
        get: function () {
            return this.props.salesOrderReference;
        },
        /**
         * Set the sales order reference.
         */
        set: function (value) {
            this.props.salesOrderReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "tenderOrLotReference", {
        /**
         * Get the tender or lot reference.
         */
        get: function () {
            return this.props.tenderOrLotReference;
        },
        /**
         * Set the tender or lot reference.
         */
        set: function (value) {
            this.props.tenderOrLotReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "contractReference", {
        /**
         * Get the contract reference.
         */
        get: function () {
            return this.props.contractReference;
        },
        /**
         * Set the contract reference.
         */
        set: function (value) {
            this.props.contractReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "precedingInvoiceReference", {
        /**
         * Get the preceding invoice reference.
         */
        get: function () {
            return this.props.precedingInvoiceReference;
        },
        /**
         * Set the preceding invoice reference.
         */
        set: function (value) {
            this.props.precedingInvoiceReference = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "attachments", {
        /**
         * Get the attachments.
         */
        get: function () {
            return this.props.attachments;
        },
        /**
         * Set the attachments.
         */
        set: function (value) {
            this.props.attachments = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "seller", {
        /**
         * Get the seller.
         */
        get: function () {
            return this.props.seller;
        },
        /**
         * Set the seller.
         */
        set: function (value) {
            this.props.seller = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "buyer", {
        /**
         * Get the buyer.
         */
        get: function () {
            return this.props.buyer;
        },
        /**
         * Set the buyer.
         */
        set: function (value) {
            this.props.buyer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "payee", {
        /**
         * Get the payee.
         */
        get: function () {
            return this.props.payee;
        },
        /**
         * Set the payee.
         */
        set: function (value) {
            this.props.payee = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "delivery", {
        /**
         * Get the delivery.
         */
        get: function () {
            return this.props.delivery;
        },
        /**
         * Set the delivery.
         */
        set: function (value) {
            this.props.delivery = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "periodStart", {
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
    Object.defineProperty(Document.prototype, "periodEnd", {
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
    Object.defineProperty(Document.prototype, "paidAmount", {
        /**
         * Get the paid amount.
         */
        get: function () {
            return this.props.paidAmount;
        },
        /**
         * Set the paid amount.
         */
        set: function (value) {
            this.props.paidAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "roundingAmount", {
        /**
         * Get the rounding amount.
         */
        get: function () {
            return this.props.roundingAmount;
        },
        /**
         * Set the rounding amount.
         */
        set: function (value) {
            this.props.roundingAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "lines", {
        /**
         * Get the document lines.
         */
        get: function () {
            return this.props.lines;
        },
        /**
         * Set the document lines.
         */
        set: function (value) {
            this.props.lines = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "payment", {
        /**
         * Get the payment.
         */
        get: function () {
            return this.props.payment;
        },
        /**
         * Set the payment.
         */
        set: function (value) {
            this.props.payment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "charges", {
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
    Object.defineProperty(Document.prototype, "taxPointDate", {
        /**
         * Get the tax point date.
         */
        get: function () {
            return this.props.taxPointDate;
        },
        /**
         * Set the tax point date.
         */
        set: function (value) {
            this.props.taxPointDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "taxes", {
        /**
         * Get the taxes.
         */
        get: function () {
            return this.props.taxes;
        },
        /**
         * Set the taxes.
         */
        set: function (value) {
            this.props.taxes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "taxAmount", {
        /**
         * Get the tax amount.
         */
        get: function () {
            return this.props.taxAmount;
        },
        /**
         * Set the tax amount.
         */
        set: function (value) {
            this.props.taxAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "taxCurrency", {
        /**
         * Get the tax currency.
         */
        get: function () {
            return this.props.taxCurrency;
        },
        /**
         * Set the tax currency.
         */
        set: function (value) {
            this.props.taxCurrency = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "xmlNamespaces", {
        /**
         * Get the xml namespaces.
         */
        get: function () {
            return this.props.xmlNamespaces;
        },
        /**
         * Set the xml namespaces.
         */
        set: function (value) {
            this.props.xmlNamespaces = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "issues", {
        /**
         * Get the non-fatal issues encountered while reading the document.
         */
        get: function () {
            return this.props.issues;
        },
        enumerable: false,
        configurable: true
    });
    Document.prototype.toPrimitive = function () {
        return this.props;
    };
    return Document;
}(Entity_1.Entity));
exports.default = Document;
//# sourceMappingURL=Document.js.map