/**
 * Entity.ts
 *
 * @copyright Vitalii Savchuk <esvit666@gmail.com>
 * @package einvoicing
 * @licence MIT https://opensource.org/licenses/MIT
 */
import { EntityId } from './EntityId';
export declare abstract class Entity<T, E, H extends EntityId<E>> {
    protected readonly _id: H;
    protected props: T;
    protected constructor(props: T, id?: H | E);
    equals(object?: Entity<T, E, H>): boolean;
    get id(): H;
    toPrimitive(): T;
    toJSON(): T;
}
