/**
 * Helpers
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import Identifier from './valueObject/Identifier';
import Quantity from './valueObject/Quantity';
export type XmlNode = any;
export declare function nodeToId(node: XmlNode): Identifier;
/**
 * Converts a node to a quantity object.
 *
 * @param node xml node
 */
export declare function nodeToQuantity(node: XmlNode): Quantity;
/**
 * Returns the string value of a node or undefined if the node is null or undefined.
 *
 * @param node xml node
 */
export declare function strOrUnd(node: XmlNode): string | undefined;
/**
 * Returns the number value of a node or undefined if the node is null or undefined.
 *
 * @param node xml node
 */
export declare function numOrUnd(node: XmlNode): number | undefined;
/**
 * Returns the array of nodes or an empty array if the node is null or undefined.
 *
 * @param node xml node
 * @param path path of nodes to get the value from
 */
export declare function getArray(node: XmlNode, path?: any[]): any[];
export declare function formatNumber(n: number): string;
export declare function omitEmpty(obj: object): object | undefined;
export declare function omitIfUndefined(obj: object, property: unknown): object;
