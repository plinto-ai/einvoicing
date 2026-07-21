import AbstractReader from './AbstractReader';
import Document from '../entity/Document';
import { DocumentTypes } from '../interface/IDocument';
import DateOnly from '../valueObject/DateOnly';
import Party from '../valueObject/Party';
import Address from '../valueObject/Address';
import DocumentLine from '../entity/DocumentLine';
import Payee from '../valueObject/Payee';
import Delivery from '../valueObject/Delivery';
import { XmlNode } from '../helpers';
import Payment from '../valueObject/Payment';
import AllowanceCharge from '../valueObject/AllowanceCharge';
import Tax from '../entity/Tax';
/**
 * @link https://docs.peppol.eu/poacc/billing/3.0/2024-Q2/syntax/ubl-invoice/tree/
 */
export default class UblReader extends AbstractReader {
    read(content: string): Promise<Document>;
    partyFromXmlNode(node: XmlNode): Party | undefined;
    payeeFromXmlNode(node: XmlNode): Payee | undefined;
    deliveryFromXmlNode(node: XmlNode): Delivery | undefined;
    paymentFromXmlNode(node: XmlNode): Payment | undefined;
    addressFromXmlNode(node: XmlNode): Address | undefined;
    contactFromXmlNode(node: XmlNode): Party['contact'] | undefined;
    allowanceOrChargeFromXmlNode(node: XmlNode, taxes: Tax[]): AllowanceCharge | undefined;
    periodFromXmlNode(node: XmlNode): {
        periodStart: DateOnly;
        periodEnd: DateOnly;
    };
    documentLineFromXmlNode(node: XmlNode, documentType: DocumentTypes, taxes: Tax[]): DocumentLine | undefined;
}
