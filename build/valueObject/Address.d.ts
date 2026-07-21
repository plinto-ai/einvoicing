/**
 * Address.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { ValueObject } from '../base/ValueObject';
export interface IAddress {
    countryCode?: string;
    subdivision?: string;
    cityName?: string;
    postalZone?: string;
    streetName?: string;
    addressLines?: string[];
}
export default class Address extends ValueObject<IAddress> {
    static create(props: IAddress): Address;
    /**
     * Get the country code.
     */
    get countryCode(): string | undefined;
    /**
     * Set the country code.
     */
    set countryCode(value: string | undefined);
    /**
     * Get the subdivision.
     */
    get subdivision(): string | undefined;
    /**
     * Set the subdivision.
     */
    set subdivision(value: string | undefined);
    /**
     * Get the city name.
     */
    get cityName(): string | undefined;
    /**
     * Set the city name.
     */
    set cityName(value: string | undefined);
    /**
     * Get the postal zone.
     */
    get postalZone(): string | undefined;
    /**
     * Set the postal zone.
     */
    set postalZone(value: string | undefined);
    /**
     * Get the street name.
     */
    get streetName(): string | undefined;
    /**
     * Set the street name.
     */
    set streetName(value: string | undefined);
    /**
     * Get the address lines.
     */
    get addressLines(): string[] | undefined;
    /**
     * Set the address lines.
     */
    set addressLines(value: string[] | undefined);
    toPrimitive(): IAddress;
}
