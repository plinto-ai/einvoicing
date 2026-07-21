import { ValueObject } from '../base/ValueObject';
import Identifier from './Identifier';
export interface ITaxRegistration {
    id?: Identifier;
    scheme?: string;
}
export default class TaxRegistration extends ValueObject<ITaxRegistration> {
    static create({ id, scheme, }: ITaxRegistration): TaxRegistration;
    /**
     * Get the id.
     */
    get id(): Identifier | undefined;
    /**
     * Set the id.
     */
    set id(value: Identifier | undefined);
    /**
     * Get the scheme.
     */
    get scheme(): string | undefined;
    /**
     * Set the scheme.
     */
    set scheme(value: string | undefined);
}
