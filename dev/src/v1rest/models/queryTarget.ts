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
import { StructuredQuery } from './structuredQuery';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * A target specified by a query.
 */
export class QueryTarget {
    /**
     * The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;
    /**
     * A structured query.
     */
    structuredQuery?: StructuredQuery;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.parent !== undefined) {
            this.parent = json.parent; //[Data format: ]
        }
        if (json.structuredQuery !== undefined) {
            this.structuredQuery = new StructuredQuery(json.structuredQuery);
        }
  }
}