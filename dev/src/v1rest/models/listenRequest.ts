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
import { Target } from './target';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * A request for Firestore.Listen
 */
export class ListenRequest {
    /**
     * A target to add to this stream.
     */
    addTarget?: Target;
    /**
     * Labels associated with this target change.
     */
    labels?: { [key: string]: string; };
    /**
     * The ID of a target to remove from this stream.
     */
    removeTarget?: number;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.addTarget !== undefined) {
            this.addTarget = new Target(json.addTarget);
        }
        if (json.labels !== undefined) {
            this.labels = json.labels;
        }
        if (json.removeTarget !== undefined) {
            this.removeTarget = json.removeTarget; 
        }
  }
}