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
import { FieldReference } from './fieldReference';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * The projection of document's fields to return.
 */
export class Projection {
    /**
     * The fields to return. If empty, all fields are returned. To only return the name of the document, use `['__name__']`.
     */
    fields?: Array<FieldReference>;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.fields !== undefined) {
            this.fields = [];
            json.fields.forEach((element: FieldReference) => {
                this.fields?.push(new FieldReference(element));
            });
        }
  }
}