/**
 * Party.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
import Address from './Address';
import Contact from './Contact';
import Identifier from './Identifier';
import TaxRegistration from './TaxRegistration';
export interface IParty {
    endpointId?: Identifier;
    address?: Address;
    legalName?: string;
    companyId?: Identifier;
    tradingName?: string;
    companyLegalForm?: string;
    contact?: Contact;
    additionalIdentifiers?: Identifier[];
    taxRegistration?: TaxRegistration[];
}
export default class Party extends ValueObject<IParty> {
    static create(props: IParty): Party;
    /**
     * Get the endpoint ID.
     */
    get endpointId(): Identifier | undefined;
    /**
     * Set the endpoint ID.
     */
    set endpointId(value: Identifier | undefined);
    /**
     * Get the address.
     */
    get address(): Address | undefined;
    /**
     * Set the address.
     */
    set address(value: Address | undefined);
    /**
     * Get the legal name.
     */
    get legalName(): string | undefined;
    /**
     * Set the legal name.
     */
    set legalName(value: string | undefined);
    /**
     * Get the company ID.
     */
    get companyId(): Identifier | undefined;
    /**
     * Set the company ID.
     */
    set companyId(value: Identifier | undefined);
    /**
     * Get the trading name.
     */
    get tradingName(): string | undefined;
    /**
     * Set the trading name.
     */
    set tradingName(value: string | undefined);
    /**
     * Get the company legal form.
     */
    get companyLegalForm(): string | undefined;
    /**
     * Set the company legal form.
     */
    set companyLegalForm(value: string | undefined);
    /**
     * Get the contact.
     */
    get contact(): Contact | undefined;
    /**
     * Set the contact name.
     */
    set contact(value: Contact | undefined);
    /**
     * Get the additional identifiers.
     */
    get additionalIdentifiers(): Identifier[] | undefined;
    /**
     * Set the additional identifiers.
     */
    set additionalIdentifiers(value: Identifier[] | undefined);
    /**
     * Get the tax registration.
     */
    get taxRegistration(): TaxRegistration[] | undefined;
    /**
     * Set the tax registration.
     */
    set taxRegistration(value: TaxRegistration[] | undefined);
    toPrimitive(): IParty;
}
