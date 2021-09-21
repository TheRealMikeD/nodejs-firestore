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
import { Filter } from './filter';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as helpers from '../helpers';


/**
 * A filter that merges multiple other filters using the given operator.
 */
export class CompositeFilter {
    /**
     * The list of filters to combine. Must contain at least one filter.
     */
    filters?: Array<Filter>;
    /**
     * The operator for combining multiple filters.
     */
    op?: CompositeFilter.OpEnum;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json: any) {
        if (json.filters !== undefined) {
            this.filters = [];
            json.filters.forEach((element: Filter) => {
                this.filters?.push(new Filter(element));
            });
        }
        if (json.op !== undefined) {
            this.op = json.op; //[Data format: ]
        }
  }
}
export namespace CompositeFilter {
    export type OpEnum = 'OPERATOR_UNSPECIFIED' | 'AND';
    export const OpEnum = {
        OPERATORUNSPECIFIED: 'OPERATOR_UNSPECIFIED' as OpEnum,
        AND: 'AND' as OpEnum
    }
}