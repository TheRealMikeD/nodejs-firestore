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
 * A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
 */
export class GoogleFirestoreAdminV1IndexField {
    /**
     * Indicates that this field supports operations on `array_value`s.
     */
    arrayConfig?: GoogleFirestoreAdminV1IndexField.ArrayConfigEnum;
    /**
     * Can be __name__. For single field indexes, this must match the name of the field or may be omitted.
     */
    fieldPath?: string;
    /**
     * Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
     */
    order?: GoogleFirestoreAdminV1IndexField.OrderEnum;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.arrayConfig !== undefined) {
            this.arrayConfig = json.arrayConfig; //[Data format: ]
        }
        if (json.fieldPath !== undefined) {
            this.fieldPath = json.fieldPath; //[Data format: ]
        }
        if (json.order !== undefined) {
            this.order = json.order; //[Data format: ]
        }
  }
}
export namespace GoogleFirestoreAdminV1IndexField {
    export type ArrayConfigEnum = 'ARRAY_CONFIG_UNSPECIFIED' | 'CONTAINS';
    export const ArrayConfigEnum = {
        ARRAYCONFIGUNSPECIFIED: 'ARRAY_CONFIG_UNSPECIFIED' as ArrayConfigEnum,
        CONTAINS: 'CONTAINS' as ArrayConfigEnum
    }
    export type OrderEnum = 'ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING';
    export const OrderEnum = {
        ORDERUNSPECIFIED: 'ORDER_UNSPECIFIED' as OrderEnum,
        ASCENDING: 'ASCENDING' as OrderEnum,
        DESCENDING: 'DESCENDING' as OrderEnum
    }
}
