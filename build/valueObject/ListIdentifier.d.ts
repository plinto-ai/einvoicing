import Identifier, { IIdentifier } from './Identifier';
export default class ListIdentifier extends Identifier {
    static create(props: IIdentifier): ListIdentifier;
    toPrimitive(): {
        '#text': string;
    };
}
