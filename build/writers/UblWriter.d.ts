/**
 * UblWriter.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import AbstractWriter from './AbstractWriter';
import Document from '../entity/Document';
import AllowanceCharge from '../valueObject/AllowanceCharge';
import CurrencyCode from '../valueObject/CurrencyCode';
import Address from '../valueObject/Address';
import Party from '../valueObject/Party';
export default class UblWriter extends AbstractWriter {
    write(document: Document): string;
    partyToXmlNode(party: Party): {
        'cbc:EndpointID': {
            '#text': string;
        };
        'cac:PartyIdentification': {
            'cbc:ID': {
                '#text': string;
            };
        }[];
        'cac:PartyName': {
            'cbc:Name': string;
        };
        'cac:PostalAddress': {
            'cbc:StreetName': string;
            'cbc:AdditionalStreetName': string;
            'cbc:CityName': string;
            'cbc:PostalZone': string;
            'cbc:CountrySubentity': string;
            'cac:Country': {
                'cbc:IdentificationCode': string;
            };
        };
        'cac:PartyTaxScheme': {
            'cbc:CompanyID': {
                '#text': string;
            };
            'cac:TaxScheme': {
                'cbc:ID': string;
            };
        }[];
        'cac:PartyLegalEntity': {
            'cbc:RegistrationName': string;
            'cbc:CompanyID': {
                '#text': string;
            };
            'cbc:CompanyLegalForm': string;
        };
        'cac:Contact': {
            'cbc:Name': string;
            'cbc:Telephone': string;
            'cbc:ElectronicMail': string;
        };
    };
    addressToXmlNode(address: Address): {
        'cbc:StreetName': string;
        'cbc:AdditionalStreetName': string;
        'cbc:CityName': string;
        'cbc:PostalZone': string;
        'cbc:CountrySubentity': string;
        'cac:Country': {
            'cbc:IdentificationCode': string;
        };
    };
    allowanceChargeToXmlNode(charge: AllowanceCharge, currency: CurrencyCode): {
        'cbc:ChargeIndicator': boolean;
        'cbc:AllowanceChargeReason': string;
        'cbc:AllowanceChargeReasonCode': string;
        'cbc:Amount': {
            '#text': string;
            attr_currencyID: string;
        };
        'cbc:BaseAmount': {
            '#text': string;
            attr_currencyID: string;
        };
        'cbc:MultiplierFactorNumeric': string;
        'cac:TaxCategory': {
            'cbc:ID': string;
            'cbc:Percent': string;
            'cbc:TaxExemptionReason': string;
            'cbc:TaxExemptionReasonCode': string;
            'cac:TaxScheme': {
                'cbc:ID': string;
            };
        };
    };
}
