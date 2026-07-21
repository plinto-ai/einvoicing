import Document from '../entity/Document';
export default abstract class AbstractWriter {
    abstract write(document: Document): string;
    writeToFile(document: Document, filename: string): Promise<void>;
}
