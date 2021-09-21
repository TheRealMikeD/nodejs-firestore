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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected.
 */
export class DocumentRemove {
    /**
     * The resource name of the Document that has gone out of view.
     */
    document?: string;
    /**
     * The read timestamp at which the remove was observed. Greater or equal to the `commit_time` of the change/delete/remove.
     */
    readTime?: string;
    /**
     * A set of target IDs for targets that previously matched this document.
     */
    removedTargetIds?: Array<number>;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.document !== undefined) {
            this.document = json.document; //[Data format: ]
        }
        if (json.readTime !== undefined) {
            this.readTime = helpers.stringFromTimestampJson(json.readTime); //[Data format: google-datetime
        }
        if (json.removedTargetIds !== undefined) {
            this.removedTargetIds = json.removedTargetIds;
        }
  }
}