/* eslint-disable prettier/prettier */
/**
 * Cloud Firestore API
 * Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development. 
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DocumentMask } from './documentMask';
import { TransactionOptions } from './transactionOptions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * The request for Firestore.BatchGetDocuments.
 */
export class BatchGetDocumentsRequest {
    /**
     * The names of the documents to retrieve. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided.
     */
    documents?: Array<string>;
    /**
     * The fields to return. If not set, returns all fields. If a document has a field that is not present in this mask, that field will not be returned in the response.
     */
    mask?: DocumentMask;
    /**
     * Starts a new transaction and reads the documents. Defaults to a read-only transaction. The new transaction ID will be returned as the first response in the stream.
     */
    newTransaction?: TransactionOptions;
    /**
     * Reads documents as they were at the given time. This may not be older than 270 seconds.
     */
    readTime?: string;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.documents !== undefined) {
            this.documents = json.documents;
        }
        if (json.mask !== undefined) {
            this.mask = new DocumentMask(json.mask);
        }
        if (json.newTransaction !== undefined) {
            this.newTransaction = new TransactionOptions(json.newTransaction);
        }
        if (json.readTime !== undefined) {
            this.readTime = helpers.stringFromTimestampJson(json.readTime); //[Data format: google-datetime
        }
        if (json.transaction !== undefined) {
            this.transaction = helpers.stringFromBufferJson(json.transaction); //[Data format: byte]
        }
  }
}