"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * UblWriter.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
var AbstractWriter_1 = tslib_1.__importDefault(require("./AbstractWriter"));
var fast_xml_parser_1 = require("fast-xml-parser");
var helpers_1 = require("../helpers");
var totals_1 = require("../utils/totals");
var UblWriter = /** @class */ (function (_super) {
    tslib_1.__extends(UblWriter, _super);
    function UblWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UblWriter.prototype.write = function (document) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16;
        var builder = new fast_xml_parser_1.XMLBuilder({
            attributeNamePrefix: 'attr_',
            ignoreAttributes: false,
            format: false,
            suppressEmptyNode: true,
        });
        var xmlNamespaces = Object.keys(document.xmlNamespaces || {}).reduce(function (acc, ns) {
            var _a;
            return (tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a["attr_".concat(ns)] = document.xmlNamespaces[ns], _a)));
        }, {});
        var totals = (0, totals_1.getInvoiceTotals)(document);
        var json = {
            '?xml': { attr_version: '1.0', attr_encoding: 'UTF-8' },
            Invoice: tslib_1.__assign(tslib_1.__assign({}, xmlNamespaces), { 'cbc:CustomizationID': document.customizationId, 'cbc:ProfileID': document.businessProcess, 'cbc:ID': document.id.toPrimitive(), 'cbc:IssueDate': (_a = document.issueDate) === null || _a === void 0 ? void 0 : _a.toPrimitive(), 'cbc:DueDate': (_b = document.dueDate) === null || _b === void 0 ? void 0 : _b.toPrimitive(), 'cbc:InvoiceTypeCode': (_c = document.type) === null || _c === void 0 ? void 0 : _c.toPrimitive(), 'cbc:Note': document.notes, 'cbc:DocumentCurrencyCode': (_d = document.currency) === null || _d === void 0 ? void 0 : _d.toPrimitive(), 'cbc:AccountingCost': document.buyerAccountingReference, 'cbc:BuyerReference': document.buyerReference, 'cbc:TaxPointDate': (_e = document.taxPointDate) === null || _e === void 0 ? void 0 : _e.toPrimitive(), 'cac:InvoicePeriod': {
                    'cbc:StartDate': (_f = document.periodStart) === null || _f === void 0 ? void 0 : _f.toPrimitive(),
                    'cbc:EndDate': (_g = document.periodEnd) === null || _g === void 0 ? void 0 : _g.toPrimitive(),
                }, 'cac:OrderReference': {
                    'cbc:ID': (_h = document.purchaseOrderReference) === null || _h === void 0 ? void 0 : _h.toPrimitive(),
                }, 'cac:BillingReference': (_j = document.precedingInvoiceReference) === null || _j === void 0 ? void 0 : _j.map(function (reference) {
                    var _a;
                    return ({
                        'cac:InvoiceDocumentReference': {
                            'cbc:ID': reference.id,
                            'cbc:IssueDate': (_a = reference.issueDate) === null || _a === void 0 ? void 0 : _a.toPrimitive(),
                        },
                    });
                }), 'cac:OriginatorDocumentReference': {
                    'cbc:ID': (_k = document.originatorDocumentReference) === null || _k === void 0 ? void 0 : _k.toPrimitive(),
                }, 'cac:ContractDocumentReference': {
                    'cbc:ID': (_l = document.contractReference) === null || _l === void 0 ? void 0 : _l.toPrimitive(),
                }, 'cac:AdditionalDocumentReference': (_m = document.attachments) === null || _m === void 0 ? void 0 : _m.map(function (attachment) { return ({
                    'cbc:ID': attachment.id.toPrimitive(),
                    'cbc:DocumentTypeCode': attachment.documentTypeCode,
                    'cbc:DocumentDescription': attachment.description,
                    'cac:Attachment': attachment.content
                        ? {
                            'cbc:EmbeddedDocumentBinaryObject': {
                                '#text': btoa(attachment.content.content),
                                attr_mimeCode: attachment.content.mimeCode,
                                attr_filename: attachment.content.filename,
                            },
                        }
                        : attachment.externalUri
                            ? {
                                'cac:ExternalReference': {
                                    'cbc:URI': attachment.externalUri,
                                },
                            }
                            : undefined,
                }); }), 'cac:AccountingSupplierParty': {
                    'cac:Party': this.partyToXmlNode(document.seller),
                }, 'cac:AccountingCustomerParty': {
                    'cac:Party': this.partyToXmlNode(document.buyer),
                }, 'cac:Delivery': {
                    'cbc:ActualDeliveryDate': (_p = (_o = document.delivery) === null || _o === void 0 ? void 0 : _o.date) === null || _p === void 0 ? void 0 : _p.toPrimitive(),
                    'cac:DeliveryLocation': {
                        'cbc:ID': (_r = (_q = document.delivery) === null || _q === void 0 ? void 0 : _q.locationId) === null || _r === void 0 ? void 0 : _r.toPrimitive(),
                        'cac:Address': this.addressToXmlNode((_s = document.delivery) === null || _s === void 0 ? void 0 : _s.address),
                    },
                    'cac:DeliveryParty': {
                        'cac:PartyName': {
                            'cbc:Name': (_t = document.delivery) === null || _t === void 0 ? void 0 : _t.name,
                        },
                    },
                }, 'cac:PaymentMeans': {
                    'cbc:PaymentMeansCode': {
                        attr_name: (_u = document.payment) === null || _u === void 0 ? void 0 : _u.meansName,
                        '#text': (_v = document.payment) === null || _v === void 0 ? void 0 : _v.meansCode,
                    },
                    'cbc:PaymentID': (_w = document.payment) === null || _w === void 0 ? void 0 : _w.id,
                    'cac:PayeeFinancialAccount': {
                        'cbc:ID': (_y = (_x = document.payment) === null || _x === void 0 ? void 0 : _x.transfer) === null || _y === void 0 ? void 0 : _y.account,
                        'cbc:Name': (_0 = (_z = document.payment) === null || _z === void 0 ? void 0 : _z.transfer) === null || _0 === void 0 ? void 0 : _0.name,
                        'cac:FinancialInstitutionBranch': {
                            'cbc:ID': (_3 = (_2 = (_1 = document.payment) === null || _1 === void 0 ? void 0 : _1.transfer) === null || _2 === void 0 ? void 0 : _2.provider) === null || _3 === void 0 ? void 0 : _3.toPrimitive(),
                        },
                    },
                }, 'cac:PaymentTerms': {
                    'cbc:Note': (_4 = document.payment) === null || _4 === void 0 ? void 0 : _4.terms,
                }, 'cac:AllowanceCharge': (_5 = document.charges) === null || _5 === void 0 ? void 0 : _5.map(function (charge) {
                    return _this.allowanceChargeToXmlNode(charge, document.currency);
                }), 'cac:TaxTotal': {
                    'cbc:TaxAmount': {
                        '#text': (0, helpers_1.formatNumber)((_6 = document.taxes) === null || _6 === void 0 ? void 0 : _6.reduce(function (sum, tax) { return sum + (tax.taxAmount || 0); }, 0)),
                        attr_currencyID: (_7 = document.currency) === null || _7 === void 0 ? void 0 : _7.toPrimitive(),
                    },
                    'cac:TaxSubtotal': (_8 = document.taxes) === null || _8 === void 0 ? void 0 : _8.map(function (tax) {
                        var _a, _b;
                        return ({
                            'cbc:TaxableAmount': {
                                '#text': (0, helpers_1.formatNumber)(tax.taxableAmount),
                                attr_currencyID: (_a = tax.currency) === null || _a === void 0 ? void 0 : _a.toPrimitive(),
                            },
                            'cbc:TaxAmount': {
                                '#text': (0, helpers_1.formatNumber)(tax.taxAmount),
                                attr_currencyID: (_b = tax.currency) === null || _b === void 0 ? void 0 : _b.toPrimitive(),
                            },
                            'cac:TaxCategory': {
                                'cbc:ID': tax.id.toPrimitive().split(':')[0],
                                'cbc:Percent': (0, helpers_1.formatNumber)(tax.percent),
                                'cbc:TaxExemptionReason': tax.taxExemptionReason,
                                'cbc:TaxExemptionReasonCode': tax.taxExemptionReasonCode,
                                'cac:TaxScheme': {
                                    'cbc:ID': 'VAT',
                                },
                            },
                        });
                    }),
                }, 'cac:LegalMonetaryTotal': {
                    'cbc:LineExtensionAmount': {
                        '#text': (0, helpers_1.formatNumber)(totals.netAmount),
                        attr_currencyID: (_9 = document.currency) === null || _9 === void 0 ? void 0 : _9.toPrimitive(),
                    },
                    'cbc:TaxExclusiveAmount': {
                        '#text': (0, helpers_1.formatNumber)(totals.taxExclusiveAmount),
                        attr_currencyID: (_10 = document.currency) === null || _10 === void 0 ? void 0 : _10.toPrimitive(),
                    },
                    'cbc:TaxInclusiveAmount': {
                        '#text': (0, helpers_1.formatNumber)(totals.taxInclusiveAmount),
                        attr_currencyID: (_11 = document.currency) === null || _11 === void 0 ? void 0 : _11.toPrimitive(),
                    },
                    'cbc:ChargeTotalAmount': (0, helpers_1.omitIfUndefined)({
                        '#text': (0, helpers_1.formatNumber)(totals.chargesAmount),
                        attr_currencyID: (_12 = document.currency) === null || _12 === void 0 ? void 0 : _12.toPrimitive(),
                    }, totals.chargesAmount),
                    'cbc:PayableAmount': {
                        '#text': (0, helpers_1.formatNumber)(totals.payableAmount),
                        attr_currencyID: (_13 = document.currency) === null || _13 === void 0 ? void 0 : _13.toPrimitive(),
                    },
                    'cbc:PrepaidAmount': (0, helpers_1.omitIfUndefined)({
                        '#text': (0, helpers_1.formatNumber)(totals.paidAmount),
                        attr_currencyID: (_14 = document.currency) === null || _14 === void 0 ? void 0 : _14.toPrimitive(),
                    }, totals.paidAmount),
                    'cbc:AllowanceTotalAmount': (0, helpers_1.omitIfUndefined)({
                        '#text': (0, helpers_1.formatNumber)(totals.allowancesAmount),
                        attr_currencyID: (_15 = document.currency) === null || _15 === void 0 ? void 0 : _15.toPrimitive(),
                    }, totals.allowancesAmount),
                }, 'cac:InvoiceLine': (_16 = document.lines) === null || _16 === void 0 ? void 0 : _16.map(function (line) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                    return ({
                        'cbc:ID': line.id.toPrimitive(),
                        'cbc:InvoicedQuantity': {
                            '#text': (0, helpers_1.formatNumber)(line.quantity),
                            attr_unitCode: line.unitCode,
                        },
                        'cbc:LineExtensionAmount': {
                            '#text': (0, helpers_1.formatNumber)(line.netAmount),
                            attr_currencyID: (_a = document.currency) === null || _a === void 0 ? void 0 : _a.toPrimitive(),
                        },
                        'cbc:AccountingCost': line.buyerAccountingReference,
                        'cac:InvoicePeriod': {
                            'cbc:StartDate': (_b = line.periodStart) === null || _b === void 0 ? void 0 : _b.toPrimitive(),
                            'cbc:EndDate': (_c = line.periodEnd) === null || _c === void 0 ? void 0 : _c.toPrimitive(),
                        },
                        'cac:OrderLineReference': {
                            'cbc:LineID': (_d = line.orderLineReference) === null || _d === void 0 ? void 0 : _d.toPrimitive(),
                        },
                        'cbc:Note': line.note,
                        'cac:AllowanceCharge': (_e = line.charges) === null || _e === void 0 ? void 0 : _e.map(function (charge) {
                            return _this.allowanceChargeToXmlNode(charge, document.currency);
                        }),
                        'cac:Item': {
                            'cbc:Description': line.description,
                            'cbc:Name': line.name,
                            'cac:SellersItemIdentification': {
                                'cbc:ID': (_f = line.sellerIdentifier) === null || _f === void 0 ? void 0 : _f.toPrimitive(),
                            },
                            'cac:StandardItemIdentification': {
                                'cbc:ID': (_g = line.standardIdentifier) === null || _g === void 0 ? void 0 : _g.toPrimitive(),
                            },
                            'cac:OriginCountry': {
                                'cbc:IdentificationCode': line.originCountryCode,
                            },
                            'cac:CommodityClassification': (_h = line.classificationIdentifiers) === null || _h === void 0 ? void 0 : _h.map(function (identifier) { return ({
                                'cbc:ItemClassificationCode': identifier.toPrimitive(),
                            }); }),
                            'cac:ClassifiedTaxCategory': {
                                'cbc:ID': (_j = line.tax) === null || _j === void 0 ? void 0 : _j.id.toPrimitive().split(':')[0],
                                'cbc:Percent': (0, helpers_1.formatNumber)((_k = line.tax) === null || _k === void 0 ? void 0 : _k.percent),
                                'cac:TaxScheme': {
                                    'cbc:ID': 'VAT',
                                },
                            },
                            'cac:AdditionalItemProperty': (_l = line.attributes) === null || _l === void 0 ? void 0 : _l.map(function (attribute) { return ({
                                'cbc:Name': attribute.name,
                                'cbc:Value': attribute.value,
                            }); }),
                        },
                        'cac:Price': {
                            'cbc:BaseQuantity': (_m = line.baseQuantity) === null || _m === void 0 ? void 0 : _m.toPrimitive(),
                            'cbc:PriceAmount': {
                                '#text': (0, helpers_1.formatNumber)(line.price),
                                attr_currencyID: (_o = document.currency) === null || _o === void 0 ? void 0 : _o.toPrimitive(),
                            },
                        },
                    });
                }) }),
        };
        return builder.build((0, helpers_1.omitEmpty)(json));
    };
    UblWriter.prototype.partyToXmlNode = function (party) {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            'cbc:EndpointID': (_a = party === null || party === void 0 ? void 0 : party.endpointId) === null || _a === void 0 ? void 0 : _a.toPrimitive(),
            'cac:PartyIdentification': (_b = party === null || party === void 0 ? void 0 : party.additionalIdentifiers) === null || _b === void 0 ? void 0 : _b.map(function (id) { return ({
                'cbc:ID': id.toPrimitive(),
            }); }),
            'cac:PartyName': {
                'cbc:Name': party === null || party === void 0 ? void 0 : party.tradingName,
            },
            'cac:PostalAddress': this.addressToXmlNode(party === null || party === void 0 ? void 0 : party.address),
            'cac:PartyTaxScheme': (_c = party === null || party === void 0 ? void 0 : party.taxRegistration) === null || _c === void 0 ? void 0 : _c.map(function (taxRegistration) { return ({
                'cbc:CompanyID': taxRegistration === null || taxRegistration === void 0 ? void 0 : taxRegistration.id.toPrimitive(),
                'cac:TaxScheme': {
                    'cbc:ID': taxRegistration === null || taxRegistration === void 0 ? void 0 : taxRegistration.scheme,
                },
            }); }),
            'cac:PartyLegalEntity': {
                'cbc:RegistrationName': party === null || party === void 0 ? void 0 : party.legalName,
                'cbc:CompanyID': (_d = party === null || party === void 0 ? void 0 : party.companyId) === null || _d === void 0 ? void 0 : _d.toPrimitive(),
                'cbc:CompanyLegalForm': party === null || party === void 0 ? void 0 : party.companyLegalForm,
            },
            'cac:Contact': {
                'cbc:Name': (_e = party === null || party === void 0 ? void 0 : party.contact) === null || _e === void 0 ? void 0 : _e.name,
                'cbc:Telephone': (_f = party === null || party === void 0 ? void 0 : party.contact) === null || _f === void 0 ? void 0 : _f.phone,
                'cbc:ElectronicMail': (_g = party === null || party === void 0 ? void 0 : party.contact) === null || _g === void 0 ? void 0 : _g.email,
            },
        };
    };
    UblWriter.prototype.addressToXmlNode = function (address) {
        var _a;
        return {
            'cbc:StreetName': address === null || address === void 0 ? void 0 : address.streetName,
            'cbc:AdditionalStreetName': (_a = address === null || address === void 0 ? void 0 : address.addressLines) === null || _a === void 0 ? void 0 : _a[1],
            'cbc:CityName': address === null || address === void 0 ? void 0 : address.cityName,
            'cbc:PostalZone': address === null || address === void 0 ? void 0 : address.postalZone,
            'cbc:CountrySubentity': address === null || address === void 0 ? void 0 : address.subdivision,
            'cac:Country': {
                'cbc:IdentificationCode': address === null || address === void 0 ? void 0 : address.countryCode,
            },
        };
    };
    UblWriter.prototype.allowanceChargeToXmlNode = function (charge, currency) {
        var _a, _b, _c, _d, _e;
        return {
            'cbc:ChargeIndicator': charge.isCharge,
            'cbc:AllowanceChargeReason': charge.reasonText,
            'cbc:AllowanceChargeReasonCode': charge.reasonCode,
            'cbc:Amount': {
                '#text': (0, helpers_1.formatNumber)(charge.amount),
                attr_currencyID: currency === null || currency === void 0 ? void 0 : currency.toPrimitive(),
            },
            'cbc:BaseAmount': charge.baseAmount && {
                '#text': (0, helpers_1.formatNumber)(charge.baseAmount),
                attr_currencyID: currency === null || currency === void 0 ? void 0 : currency.toPrimitive(),
            },
            'cbc:MultiplierFactorNumeric': (0, helpers_1.formatNumber)(charge.factorAmount),
            'cac:TaxCategory': {
                'cbc:ID': (_b = (_a = charge.tax) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toPrimitive().split(':')[0],
                'cbc:Percent': (0, helpers_1.formatNumber)((_c = charge.tax) === null || _c === void 0 ? void 0 : _c.percent),
                'cbc:TaxExemptionReason': (_d = charge.tax) === null || _d === void 0 ? void 0 : _d.taxExemptionReason,
                'cbc:TaxExemptionReasonCode': (_e = charge.tax) === null || _e === void 0 ? void 0 : _e.taxExemptionReasonCode,
                'cac:TaxScheme': charge.tax && {
                    'cbc:ID': 'VAT',
                },
            },
        };
    };
    return UblWriter;
}(AbstractWriter_1.default));
exports.default = UblWriter;
//# sourceMappingURL=UblWriter.js.map