import Document from '../entity/Document';
export default abstract class AbstractReader {
    abstract read(content: string): Promise<Document>;
    readFromFile(filename: string): Promise<Document>;
}
