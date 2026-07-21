"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * UBL eInvoicing Reader
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var fast_xml_parser_1 = require("fast-xml-parser");
var AbstractReader_1 = tslib_1.__importDefault(require("./AbstractReader"));
var Document_1 = tslib_1.__importDefault(require("../entity/Document"));
var index_1 = require("../index");
var IDocument_1 = require("../interface/IDocument");
var DateOnly_1 = tslib_1.__importDefault(require("../valueObject/DateOnly"));
var DocumentType_1 = tslib_1.__importDefault(require("../valueObject/DocumentType"));
var CurrencyCode_1 = tslib_1.__importDefault(require("../valueObject/CurrencyCode"));
var InvoiceReference_1 = tslib_1.__importDefault(require("../valueObject/InvoiceReference"));
var Attachment_1 = tslib_1.__importDefault(require("../valueObject/Attachment"));
var BinaryObject_1 = tslib_1.__importDefault(require("../valueObject/BinaryObject"));
var Party_1 = tslib_1.__importDefault(require("../valueObject/Party"));
var Address_1 = tslib_1.__importDefault(require("../valueObject/Address"));
var DocumentLine_1 = tslib_1.__importDefault(require("../entity/DocumentLine"));
var IDocumentLine_1 = require("../interface/IDocumentLine");
var ListIdentifier_1 = tslib_1.__importDefault(require("../valueObject/ListIdentifier"));
var Attribute_1 = tslib_1.__importDefault(require("../valueObject/Attribute"));
var Payee_1 = tslib_1.__importDefault(require("../valueObject/Payee"));
var Delivery_1 = tslib_1.__importDefault(require("../valueObject/Delivery"));
var helpers_1 = require("../helpers");
var Payment_1 = tslib_1.__importDefault(require("../valueObject/Payment"));
var PaymentCard_1 = tslib_1.__importDefault(require("../valueObject/PaymentCard"));
var PaymentTransfer_1 = tslib_1.__importDefault(require("../valueObject/PaymentTransfer"));
var PaymentMandate_1 = tslib_1.__importDefault(require("../valueObject/PaymentMandate"));
var AllowanceCharge_1 = tslib_1.__importDefault(require("../valueObject/AllowanceCharge"));
var Tax_1 = tslib_1.__importDefault(require("../entity/Tax"));
var ITax_1 = require("../interface/ITax");
var Contact_1 = tslib_1.__importDefault(require("../valueObject/Contact"));
var TaxRegistration_1 = tslib_1.__importDefault(require("../valueObject/TaxRegistration"));
/**
 * @link https://docs.peppol.eu/poacc/billing/3.0/2024-Q2/syntax/ubl-invoice/tree/
 */
var UblReader = /** @class */ (function (_super) {
    tslib_1.__extends(UblReader, _super);
    function UblReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UblReader.prototype.read = function (content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var attributeValueProcessor, tagValueProcessor, options, parser, json, rootKeys, invoiceRootKey, creditNoteRootKey, documentType, documentNode, xmlNamespaces, customizationId, ruleset, taxNodes, taxes, dueDate, type, taxPointDate, invoiceReferences, precedingInvoiceReference, attachmentNodes, attachments, lines, charges, document;
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            return tslib_1.__generator(this, function (_o) {
                attributeValueProcessor = function (name, value) {
                    switch (name) {
                        case 'schemeID': {
                            return null;
                        }
                        default:
                            return value;
                    }
                };
                tagValueProcessor = function (tagName, tagValue) {
                    switch (tagName) {
                        case 'cbc:ItemClassificationCode':
                        case 'cbc:CompanyID':
                        case 'cbc:EndpointID':
                        case 'cbc:ID': {
                            return null;
                        }
                        default:
                            return tagValue;
                    }
                };
                options = {
                    attributeNamePrefix: 'attr_',
                    ignoreAttributes: false,
                    parseAttributeValue: true,
                    trimValues: true,
                    attributeValueProcessor: attributeValueProcessor,
                    tagValueProcessor: tagValueProcessor,
                };
                parser = new fast_xml_parser_1.XMLParser(options);
                json = parser.parse(content);
                rootKeys = Object.keys(json);
                invoiceRootKey = rootKeys.find(function (key) { return key === 'Invoice' || key.endsWith(':Invoice'); });
                creditNoteRootKey = rootKeys.find(function (key) { return key === 'CreditNote' || key.endsWith(':CreditNote'); });
                if (!invoiceRootKey && !creditNoteRootKey) {
                    throw new Error('Unsupported document type: root element is not a UBL Invoice or CreditNote');
                }
                documentType = invoiceRootKey
                    ? IDocument_1.DocumentTypes.Invoice
                    : IDocument_1.DocumentTypes.CreditNote;
                documentNode = invoiceRootKey
                    ? json[invoiceRootKey]
                    : json[creditNoteRootKey];
                xmlNamespaces = Object.keys(documentNode)
                    .filter(function (key) { return key.startsWith('attr_xmlns'); })
                    .reduce(function (acc, key) {
                    acc[key.replace('attr_', '')] = documentNode[key];
                    return acc;
                }, {});
                customizationId = documentNode['cbc:CustomizationID'];
                ruleset = (0, index_1.getRuleset)(customizationId);
                taxNodes = (0, helpers_1.getArray)(documentNode, [
                    'cac:TaxTotal',
                    'cac:TaxSubtotal',
                ]);
                taxes = taxNodes.map(function (taxNode) {
                    var _a, _b, _c, _d, _e, _f;
                    return Tax_1.default.create({
                        id: new ITax_1.TaxId((0, helpers_1.strOrUnd)((_a = taxNode['cac:TaxCategory']) === null || _a === void 0 ? void 0 : _a['cbc:ID']), (0, helpers_1.numOrUnd)((_b = taxNode['cac:TaxCategory']) === null || _b === void 0 ? void 0 : _b['cbc:Percent'])),
                        currency: CurrencyCode_1.default.create((0, helpers_1.strOrUnd)((_c = taxNode['cbc:TaxAmount']) === null || _c === void 0 ? void 0 : _c.attr_currencyID)),
                        taxAmount: (0, helpers_1.numOrUnd)(taxNode['cbc:TaxAmount']),
                        taxableAmount: (0, helpers_1.numOrUnd)(taxNode['cbc:TaxableAmount']),
                        taxExemptionReason: (0, helpers_1.strOrUnd)((_d = taxNode['cac:TaxCategory']) === null || _d === void 0 ? void 0 : _d['cbc:TaxExemptionReason']),
                        taxExemptionReasonCode: (0, helpers_1.strOrUnd)((_e = taxNode['cac:TaxCategory']) === null || _e === void 0 ? void 0 : _e['cbc:TaxExemptionReasonCode']),
                        percent: (0, helpers_1.numOrUnd)((_f = taxNode['cac:TaxCategory']) === null || _f === void 0 ? void 0 : _f['cbc:Percent']),
                    });
                });
                dueDate = (_a = documentNode['cbc:DueDate']) !== null && _a !== void 0 ? _a : (_b = documentNode['cac:PaymentMeans']) === null || _b === void 0 ? void 0 : _b['cbc:PaymentDueDate'];
                type = (_c = documentNode['cbc:InvoiceTypeCode']) !== null && _c !== void 0 ? _c : documentNode['cbc:CreditNoteTypeCode'];
                taxPointDate = documentNode['cbc:TaxPointDate'];
                invoiceReferences = (0, helpers_1.getArray)(documentNode, ['cac:BillingReference']);
                precedingInvoiceReference = invoiceReferences.map(function (reference) {
                    var node = reference['cac:InvoiceDocumentReference'];
                    return InvoiceReference_1.default.create({
                        id: node['cbc:ID'],
                        issueDate: node['cbc:IssueDate']
                            ? DateOnly_1.default.create(node['cbc:IssueDate'])
                            : undefined,
                    });
                });
                attachmentNodes = (0, helpers_1.getArray)(documentNode, [
                    'cac:AdditionalDocumentReference',
                ]);
                attachments = attachmentNodes.map(function (attachment) {
                    var _a, _b, _c;
                    var content = undefined;
                    var embeddedDocument = (_a = attachment['cac:Attachment']) === null || _a === void 0 ? void 0 : _a['cbc:EmbeddedDocumentBinaryObject'];
                    if (embeddedDocument) {
                        // BT-125: Attached document
                        content = BinaryObject_1.default.createFromBase64({
                            base64: (0, helpers_1.strOrUnd)(embeddedDocument),
                            mimeCode: embeddedDocument['attr_mimeCode'],
                            filename: embeddedDocument['attr_filename'],
                        });
                    }
                    return Attachment_1.default.create({
                        content: content,
                        id: (0, helpers_1.nodeToId)(attachment['cbc:ID']), // BT-122: Supporting document reference
                        documentTypeCode: attachment['cbc:DocumentTypeCode'], // BT-18: Supporting document type code
                        description: attachment['cbc:DocumentDescription'], // BT-123: Supporting document description
                        externalUri: (_c = (_b = attachment['cac:Attachment']) === null || _b === void 0 ? void 0 : _b['cac:ExternalReference']) === null || _c === void 0 ? void 0 : _c['cbc:URI'], // BT-124: External document location
                    });
                });
                lines = documentType === IDocument_1.DocumentTypes.Invoice
                    ? (0, helpers_1.getArray)(documentNode, ['cac:InvoiceLine'])
                    : (0, helpers_1.getArray)(documentNode, ['cac:CreditNoteLine']);
                charges = (0, helpers_1.getArray)(documentNode, ['cac:AllowanceCharge']).map(function (node) { return _this.allowanceOrChargeFromXmlNode(node, taxes); });
                document = Document_1.default.create(documentType, ruleset, tslib_1.__assign(tslib_1.__assign({ 
                    // BT-1: Invoice number
                    id: documentNode['cbc:ID']
                        ? new IDocument_1.DocumentId(documentNode['cbc:ID'].toString())
                        : new IDocument_1.DocumentId(), 
                    // BT-2: Issue date
                    issueDate: documentNode['cbc:IssueDate']
                        ? DateOnly_1.default.create(documentNode['cbc:IssueDate'])
                        : undefined, 
                    // BT-3: Invoice type code
                    type: type ? DocumentType_1.default.create(type) : undefined, 
                    // BT-5: Invoice currency code
                    currency: documentNode['cbc:DocumentCurrencyCode']
                        ? CurrencyCode_1.default.create((0, helpers_1.strOrUnd)(documentNode['cbc:DocumentCurrencyCode']))
                        : undefined, 
                    // BT-6: VAT accounting currency code
                    taxCurrency: documentNode['cbc:TaxCurrencyCode']
                        ? CurrencyCode_1.default.create((0, helpers_1.strOrUnd)(documentNode['cbc:TaxCurrencyCode']))
                        : undefined, 
                    // BT-7: Tax point date
                    taxPointDate: taxPointDate ? DateOnly_1.default.create(taxPointDate) : undefined, 
                    // BT-9: Due date
                    dueDate: dueDate ? DateOnly_1.default.create(dueDate) : undefined, 
                    // BT-10: Buyer reference
                    buyerReference: (0, helpers_1.strOrUnd)(documentNode['cbc:BuyerReference']), 
                    // BT-12: Contract reference
                    contractReference: (0, helpers_1.nodeToId)((_d = documentNode['cac:ContractDocumentReference']) === null || _d === void 0 ? void 0 : _d['cbc:ID']), 
                    // BT-13: Purchase order reference
                    purchaseOrderReference: (0, helpers_1.nodeToId)((_e = documentNode['cac:OrderReference']) === null || _e === void 0 ? void 0 : _e['cbc:ID']), 
                    // BT-17: Originator document reference
                    originatorDocumentReference: (0, helpers_1.nodeToId)((_f = documentNode['cac:OriginatorDocumentReference']) === null || _f === void 0 ? void 0 : _f['cbc:ID']), 
                    // BT-14: Sales order reference
                    salesOrderReference: (0, helpers_1.strOrUnd)((_g = documentNode['cbc:OrderReference']) === null || _g === void 0 ? void 0 : _g['cbc:SalesOrderID']), 
                    // BT-17: Tender or lot reference
                    tenderOrLotReference: (0, helpers_1.strOrUnd)((_h = documentNode['cbc:OriginatorDocumentReference']) === null || _h === void 0 ? void 0 : _h['cbc:ID']), 
                    // BT-19: Buyer accounting reference
                    buyerAccountingReference: (0, helpers_1.strOrUnd)(documentNode['cbc:AccountingCost']), 
                    // BT-22: Notes
                    notes: (0, helpers_1.strOrUnd)(documentNode['cbc:Note']), 
                    // BT-23: Business process type
                    businessProcess: (0, helpers_1.strOrUnd)(documentNode['cbc:ProfileID']), 
                    // BT-24
                    customizationId: (0, helpers_1.strOrUnd)(customizationId), 
                    // BG-3: Preceding invoice references
                    precedingInvoiceReference: precedingInvoiceReference.length
                        ? precedingInvoiceReference
                        : undefined }, this.periodFromXmlNode(documentNode)), { 
                    // Seller
                    seller: this.partyFromXmlNode((_j = documentNode['cac:AccountingSupplierParty']) === null || _j === void 0 ? void 0 : _j['cac:Party']), 
                    // Buyer
                    buyer: this.partyFromXmlNode((_k = documentNode['cac:AccountingCustomerParty']) === null || _k === void 0 ? void 0 : _k['cac:Party']), 
                    // Payee
                    payee: this.payeeFromXmlNode(documentNode['cac:PayeeParty']), 
                    // Delivery
                    delivery: this.deliveryFromXmlNode(documentNode['cac:Delivery']), 
                    // BG-24: Attachment nodes
                    attachments: attachments.length ? attachments : undefined, 
                    // BT-113: Paid amount
                    paidAmount: (0, helpers_1.numOrUnd)((_l = documentNode['cac:LegalMonetaryTotal']) === null || _l === void 0 ? void 0 : _l['cbc:PrepaidAmount']), 
                    // BT-114: Rounding amount
                    roundingAmount: (0, helpers_1.numOrUnd)((_m = documentNode['cac:LegalMonetaryTotal']) === null || _m === void 0 ? void 0 : _m['cbc:PayableRoundingAmount']), lines: lines.map(function (line) {
                        return _this.documentLineFromXmlNode(line, documentType, taxes);
                    }), payment: this.paymentFromXmlNode(documentNode), charges: charges.length ? charges : undefined, taxes: taxes.length ? taxes : undefined, xmlNamespaces: xmlNamespaces }));
                return [2 /*return*/, document];
            });
        });
    };
    UblReader.prototype.partyFromXmlNode = function (node) {
        var _a, _b, _c, _d, _e;
        if (!node) {
            return undefined;
        }
        // Additional identifiers
        var additionalIdentifiersNodes = (0, helpers_1.getArray)(node, [
            'cac:PartyIdentification',
        ]);
        var additionalIdentifiers = additionalIdentifiersNodes.map(function (node) { return (0, helpers_1.nodeToId)(node['cbc:ID']); });
        var taxRegistration = [];
        // VAT number and tax registration identifier
        for (var _i = 0, _f = (0, helpers_1.getArray)(node, ['cac:PartyTaxScheme']); _i < _f.length; _i++) {
            var vatNode = _f[_i];
            taxRegistration.push(TaxRegistration_1.default.create({
                id: (0, helpers_1.nodeToId)(vatNode['cbc:CompanyID']),
                scheme: (0, helpers_1.strOrUnd)((_a = vatNode['cac:TaxScheme']) === null || _a === void 0 ? void 0 : _a['cbc:ID']),
            }));
        }
        return Party_1.default.create({
            endpointId: (0, helpers_1.nodeToId)(node['cbc:EndpointID']),
            address: this.addressFromXmlNode(node['cac:PostalAddress']),
            tradingName: (0, helpers_1.strOrUnd)((_b = node['cac:PartyName']) === null || _b === void 0 ? void 0 : _b['cbc:Name']),
            legalName: (0, helpers_1.strOrUnd)((_c = node['cac:PartyLegalEntity']) === null || _c === void 0 ? void 0 : _c['cbc:RegistrationName']),
            companyId: (0, helpers_1.nodeToId)((_d = node['cac:PartyLegalEntity']) === null || _d === void 0 ? void 0 : _d['cbc:CompanyID']),
            companyLegalForm: (0, helpers_1.strOrUnd)((_e = node['cac:PartyLegalEntity']) === null || _e === void 0 ? void 0 : _e['cbc:CompanyLegalForm']), // BT-33: Seller additional legal information
            contact: this.contactFromXmlNode(node['cac:Contact']),
            additionalIdentifiers: additionalIdentifiers.length
                ? additionalIdentifiers
                : undefined,
            taxRegistration: taxRegistration.length ? taxRegistration : undefined,
        });
    };
    UblReader.prototype.payeeFromXmlNode = function (node) {
        var _a, _b;
        if (!node) {
            return undefined;
        }
        // Additional identifiers
        var additionalIdentifiersNodes = (0, helpers_1.getArray)(node, [
            'cac:PartyIdentification',
        ]);
        var additionalIdentifiers = additionalIdentifiersNodes.map(function (node) { return (0, helpers_1.strOrUnd)(node['cbc:ID']); });
        return Payee_1.default.create({
            name: (0, helpers_1.strOrUnd)((_a = node['cac:PartyName']) === null || _a === void 0 ? void 0 : _a['cbc:Name']),
            companyId: (0, helpers_1.strOrUnd)((_b = node['cac:PartyLegalEntity']) === null || _b === void 0 ? void 0 : _b['cbc:CompanyID']),
            additionalIdentifiers: additionalIdentifiers,
        });
    };
    UblReader.prototype.deliveryFromXmlNode = function (node) {
        var _a, _b, _c, _d, _e;
        if (!node) {
            return undefined;
        }
        return Delivery_1.default.create({
            name: (0, helpers_1.strOrUnd)((_b = (_a = node['cac:DeliveryParty']) === null || _a === void 0 ? void 0 : _a['cac:PartyName']) === null || _b === void 0 ? void 0 : _b['cbc:Name']),
            date: node['cbc:ActualDeliveryDate']
                ? DateOnly_1.default.create(node['cbc:ActualDeliveryDate'])
                : undefined,
            locationId: (0, helpers_1.nodeToId)((_c = node['cac:DeliveryLocation']) === null || _c === void 0 ? void 0 : _c['cbc:ID']),
            address: this.addressFromXmlNode((_d = node['cac:DeliveryAddress']) !== null && _d !== void 0 ? _d : (_e = node['cac:DeliveryLocation']) === null || _e === void 0 ? void 0 : _e['cac:Address']),
        });
    };
    UblReader.prototype.paymentFromXmlNode = function (node) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (!node) {
            return undefined;
        }
        var meansNode = node['cac:PaymentMeans'];
        var note = (_a = node['cac:PaymentTerms']) === null || _a === void 0 ? void 0 : _a['cbc:Note'];
        if (!meansNode && !note) {
            return undefined;
        }
        return Payment_1.default.create({
            // BT-20: Payment terms
            terms: (0, helpers_1.strOrUnd)(note),
            // BT-81: Payment means code
            meansCode: (0, helpers_1.strOrUnd)(meansNode['cbc:PaymentMeansCode']),
            // BT-82: Payment means name
            meansName: (0, helpers_1.strOrUnd)((_b = meansNode['cbc:PaymentMeansCode']) === null || _b === void 0 ? void 0 : _b['attr_name']),
            // BT-83: Payment ID
            id: (0, helpers_1.strOrUnd)(meansNode['cbc:PaymentID']),
            // BG-18: Payment card
            card: meansNode['cac:CardAccount']
                ? PaymentCard_1.default.create({
                    pan: (0, helpers_1.strOrUnd)((_c = meansNode['cac:CardAccount']) === null || _c === void 0 ? void 0 : _c['cbc:PrimaryAccountNumberID']),
                    network: (0, helpers_1.strOrUnd)((_d = meansNode['cac:CardAccount']) === null || _d === void 0 ? void 0 : _d['cbc:NetworkID']),
                    holder: (0, helpers_1.strOrUnd)((_e = meansNode['cac:CardAccount']) === null || _e === void 0 ? void 0 : _e['cbc:HolderName']),
                })
                : undefined,
            // BG-17: Payment transfers
            transfer: meansNode['cac:PayeeFinancialAccount']
                ? PaymentTransfer_1.default.create({
                    account: (0, helpers_1.strOrUnd)((_f = meansNode['cac:PayeeFinancialAccount']) === null || _f === void 0 ? void 0 : _f['cbc:ID']),
                    name: (0, helpers_1.strOrUnd)((_g = meansNode['cac:PayeeFinancialAccount']) === null || _g === void 0 ? void 0 : _g['cbc:Name']),
                    provider: (0, helpers_1.nodeToId)((_j = (_h = meansNode['cac:PayeeFinancialAccount']) === null || _h === void 0 ? void 0 : _h['cac:FinancialInstitutionBranch']) === null || _j === void 0 ? void 0 : _j['cbc:ID']),
                })
                : undefined,
            // BG-19: Payment mandate
            mandate: meansNode['cac:PaymentMandate']
                ? PaymentMandate_1.default.create({
                    reference: (0, helpers_1.strOrUnd)((_k = meansNode['cac:PaymentMandate']) === null || _k === void 0 ? void 0 : _k['cbc:ID']),
                    account: (0, helpers_1.strOrUnd)((_m = (_l = meansNode['cac:PaymentMandate']) === null || _l === void 0 ? void 0 : _l['cac:PayerFinancialAccount']) === null || _m === void 0 ? void 0 : _m['cbc:ID']),
                })
                : undefined,
        });
    };
    UblReader.prototype.addressFromXmlNode = function (node) {
        var _a;
        if (!node) {
            return undefined;
        }
        var addressLines = [
            (0, helpers_1.strOrUnd)(node['cbc:StreetName']),
            (0, helpers_1.strOrUnd)(node['cbc:AdditionalStreetName']),
            (0, helpers_1.strOrUnd)(node['cbc:BuildingNumber']),
        ].filter(Boolean);
        return Address_1.default.create({
            countryCode: (0, helpers_1.strOrUnd)((_a = node['cac:Country']) === null || _a === void 0 ? void 0 : _a['cbc:IdentificationCode']),
            cityName: (0, helpers_1.strOrUnd)(node['cbc:CityName']),
            postalZone: (0, helpers_1.strOrUnd)(node['cbc:PostalZone']),
            streetName: (0, helpers_1.strOrUnd)(node['cbc:StreetName']),
            subdivision: (0, helpers_1.strOrUnd)(node['cbc:CountrySubentity']),
            addressLines: addressLines.length ? addressLines : undefined,
        });
    };
    UblReader.prototype.contactFromXmlNode = function (node) {
        if (!node) {
            return undefined;
        }
        return Contact_1.default.create({
            name: (0, helpers_1.strOrUnd)(node['cbc:Name']),
            phone: (0, helpers_1.strOrUnd)(node['cbc:Telephone']),
            email: (0, helpers_1.strOrUnd)(node['cbc:ElectronicMail']),
        });
    };
    UblReader.prototype.allowanceOrChargeFromXmlNode = function (node, taxes) {
        var _a, _b, _c;
        if (!node) {
            return undefined;
        }
        var taxId = new ITax_1.TaxId((0, helpers_1.strOrUnd)((_a = node['cac:TaxCategory']) === null || _a === void 0 ? void 0 : _a['cbc:ID']), (0, helpers_1.numOrUnd)((_b = node['cac:TaxCategory']) === null || _b === void 0 ? void 0 : _b['cbc:Percent']));
        var tax = taxes.find(function (tax) { return tax.id.equals(taxId); });
        if (((_c = node['cac:TaxCategory']) === null || _c === void 0 ? void 0 : _c['cbc:ID']) && !tax) {
            throw new Error("Tax category ".concat(taxId, " not found"));
        }
        return AllowanceCharge_1.default.create({
            isCharge: node['cbc:ChargeIndicator'],
            reasonCode: (0, helpers_1.strOrUnd)(node['cbc:AllowanceChargeReasonCode']),
            reasonText: (0, helpers_1.strOrUnd)(node['cbc:AllowanceChargeReason']),
            factorAmount: (0, helpers_1.numOrUnd)(node['cbc:MultiplierFactorNumeric']),
            baseAmount: (0, helpers_1.numOrUnd)(node['cbc:BaseAmount']),
            amount: (0, helpers_1.numOrUnd)(node['cbc:Amount']),
            tax: tax,
        });
    };
    UblReader.prototype.periodFromXmlNode = function (node) {
        var _a, _b;
        var periodStart = (_a = node['cac:InvoicePeriod']) === null || _a === void 0 ? void 0 : _a['cbc:StartDate'];
        var periodEnd = (_b = node['cac:InvoicePeriod']) === null || _b === void 0 ? void 0 : _b['cbc:EndDate'];
        return {
            periodStart: periodStart ? DateOnly_1.default.create(periodStart) : undefined,
            periodEnd: periodEnd ? DateOnly_1.default.create(periodEnd) : undefined,
        };
    };
    UblReader.prototype.documentLineFromXmlNode = function (node, documentType, taxes) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        if (!node) {
            return undefined;
        }
        // BT-158: Item classification identifiers
        var classNodes = (0, helpers_1.getArray)(node, [
            'cac:Item',
            'cac:CommodityClassification',
            'cbc:ItemClassificationCode',
        ]);
        var classificationIdentifiers = classNodes.map(function (item) {
            return ListIdentifier_1.default.create({
                id: (0, helpers_1.strOrUnd)(item),
                scheme: item['attr_listID'],
            });
        });
        // BG-32: Item attributes
        var attributeNodes = (0, helpers_1.getArray)(node, [
            'cac:Item',
            'cac:AdditionalItemProperty',
        ]);
        var attributes = attributeNodes.map(function (item) {
            return Attribute_1.default.create({
                name: (0, helpers_1.strOrUnd)(item['cbc:Name']),
                value: (0, helpers_1.strOrUnd)(item['cbc:Value']),
            });
        });
        var taxId = new ITax_1.TaxId((0, helpers_1.strOrUnd)((_b = (_a = node['cac:Item']) === null || _a === void 0 ? void 0 : _a['cac:ClassifiedTaxCategory']) === null || _b === void 0 ? void 0 : _b['cbc:ID']), (0, helpers_1.numOrUnd)((_d = (_c = node['cac:Item']) === null || _c === void 0 ? void 0 : _c['cac:ClassifiedTaxCategory']) === null || _d === void 0 ? void 0 : _d['cbc:Percent']));
        var tax = taxes.find(function (tax) { return tax.id.equals(taxId); });
        if (((_f = (_e = node['cac:Item']) === null || _e === void 0 ? void 0 : _e['cbc:ClassifiedTaxCategory']) === null || _f === void 0 ? void 0 : _f['cbc:ID']) && !tax) {
            throw new Error("Tax category ".concat(taxId, " not found"));
        }
        var charges = (0, helpers_1.getArray)(node, ['cac:AllowanceCharge']).map(function (node) { return _this.allowanceOrChargeFromXmlNode(node, taxes); });
        return DocumentLine_1.default.create(tslib_1.__assign(tslib_1.__assign({ 
            // BT-126: Invoice line identifier
            id: new IDocumentLine_1.DocumentLineId((0, helpers_1.strOrUnd)(node['cbc:ID'])), 
            // BT-127: Invoice line note
            note: (0, helpers_1.strOrUnd)(node['cbc:Note']), quantity: documentType === IDocument_1.DocumentTypes.Invoice
                ? (0, helpers_1.numOrUnd)(node['cbc:InvoicedQuantity'])
                : (0, helpers_1.numOrUnd)(node['cbc:CreditedQuantity']), unitCode: (0, helpers_1.strOrUnd)((_g = node['cbc:InvoicedQuantity']) === null || _g === void 0 ? void 0 : _g.attr_unitCode), 
            // BT-133: Buyer accounting reference
            buyerAccountingReference: (0, helpers_1.strOrUnd)(node['cbc:AccountingCost']) }, this.periodFromXmlNode(node)), { 
            // BT-132: Order line reference
            orderLineReference: (0, helpers_1.nodeToId)((_h = node['cac:OrderLineReference']) === null || _h === void 0 ? void 0 : _h['cbc:LineID']), 
            // BT-153: Item name
            name: (0, helpers_1.strOrUnd)((_j = node['cac:Item']) === null || _j === void 0 ? void 0 : _j['cbc:Name']), 
            // BT-154: Item description
            description: (0, helpers_1.strOrUnd)((_k = node['cac:Item']) === null || _k === void 0 ? void 0 : _k['cbc:Description']), 
            // BT-156: Buyer identifier
            buyerIdentifier: (0, helpers_1.strOrUnd)((_m = (_l = node['cac:Item']) === null || _l === void 0 ? void 0 : _l['cac:BuyersItemIdentification']) === null || _m === void 0 ? void 0 : _m['cbc:ID']), 
            // BT-155: Seller identifier
            sellerIdentifier: (0, helpers_1.nodeToId)((_p = (_o = node['cac:Item']) === null || _o === void 0 ? void 0 : _o['cac:SellersItemIdentification']) === null || _p === void 0 ? void 0 : _p['cbc:ID']), 
            // BT-157: Standard identifier
            standardIdentifier: (0, helpers_1.nodeToId)((_r = (_q = node['cac:Item']) === null || _q === void 0 ? void 0 : _q['cac:StandardItemIdentification']) === null || _r === void 0 ? void 0 : _r['cbc:ID']), 
            // BT-159: Item origin country
            originCountryCode: (0, helpers_1.strOrUnd)((_t = (_s = node['cac:Item']) === null || _s === void 0 ? void 0 : _s['cac:OriginCountry']) === null || _t === void 0 ? void 0 : _t['cbc:IdentificationCode']), 
            // BT-158: Item classification identifiers
            classificationIdentifiers: classificationIdentifiers.length
                ? classificationIdentifiers
                : undefined, price: (0, helpers_1.numOrUnd)((_u = node['cac:Price']) === null || _u === void 0 ? void 0 : _u['cbc:PriceAmount']), 
            // BT-131: Invoice line net amount
            netAmount: (0, helpers_1.numOrUnd)(node['cbc:LineExtensionAmount']), baseQuantity: (0, helpers_1.nodeToQuantity)((_v = node['cac:Price']) === null || _v === void 0 ? void 0 : _v['cbc:BaseQuantity']), 
            // BG-32: Item attributes
            attributes: attributes.length ? attributes : undefined, 
            // Allowances and charges
            charges: charges.length ? charges : undefined, tax: tax }));
    };
    return UblReader;
}(AbstractReader_1.default));
exports.default = UblReader;
//# sourceMappingURL=UblReader.js.map