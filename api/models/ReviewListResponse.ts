/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {ReviewListResponseDataItem} from './ReviewListResponseDataItem';

export type ReviewListResponse = {
    data?: Array<ReviewListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};
