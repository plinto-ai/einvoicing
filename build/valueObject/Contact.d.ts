import { ValueObject } from '../base/ValueObject';
export interface IContact {
    name?: string;
    email?: string;
    phone?: string;
}
export default class Contact extends ValueObject<IContact> {
    static create(props: IContact): Contact;
    /**
     * Get the name.
     */
    get name(): string | undefined;
    /**
     * Set the name.
     */
    set name(value: string | undefined);
    /**
     * Get the email.
     */
    get email(): string | undefined;
    /**
     * Set the email.
     */
    set email(value: string | undefined);
    /**
     * Get the phone.
     */
    get phone(): string | undefined;
    /**
     * Set the phone.
     */
    set phone(value: string | undefined);
}
