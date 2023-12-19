/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type {ReviewListResponse} from '../models/ReviewListResponse';
import type {ReviewRequest} from '../models/ReviewRequest';
import type {ReviewResponse} from '../models/ReviewResponse';

import type {CancelablePromise} from '../core/CancelablePromise';
import {OpenAPI} from '../core/OpenAPI';
import {request as __request} from '../core/request';

export class ReviewService {

    /**
     * @returns ReviewListResponse OK
     * @throws ApiError
     */
    public static getReviews({
                                 sort,
                                 paginationWithCount,
                                 paginationPage,
                                 paginationPageSize,
                                 paginationStart,
                                 paginationLimit,
                                 fields,
                                 populate,
                                 filters,
                                 locale,
                             }: {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string,
        /**
         * Return page/pageSize (default: true)
         */
        paginationWithCount?: boolean,
        /**
         * Page number (default: 0)
         */
        paginationPage?: number,
        /**
         * Page size (default: 25)
         */
        paginationPageSize?: number,
        /**
         * Offset value (default: 0)
         */
        paginationStart?: number,
        /**
         * Number of entities to return (default: 25)
         */
        paginationLimit?: number,
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string[],
        /**
         * Relations to return
         */
        populate?: {},
        /**
         * Filters to apply
         */
        filters?: Record<string, any>,
        /**
         * Locale to apply
         */
        locale?: string,
    }): CancelablePromise<ReviewListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reviews',
            query: {
                'sort': sort,
                'pagination[withCount]': paginationWithCount,
                'pagination[page]': paginationPage,
                'pagination[pageSize]': paginationPageSize,
                'pagination[start]': paginationStart,
                'pagination[limit]': paginationLimit,
                'fields': fields,
                'populate': populate,
                'filters': filters,
                'locale': locale,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns ReviewResponse OK
     * @throws ApiError
     */
    public static postReviews({
                                  requestBody,
                              }: {
        requestBody: ReviewRequest,
    }): CancelablePromise<ReviewResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/reviews',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }


    /**
     * @returns ReviewResponse OK
     * @throws ApiError
     */
    public static getReviewsId({
                                   id,
                               }: {
        id: number,
    }): CancelablePromise<ReviewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reviews/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns ReviewResponse OK
     * @throws ApiError
     */
    public static putReviewsId({
                                   id,
                                   requestBody,
                               }: {
        id: number,
        requestBody: ReviewRequest,
    }): CancelablePromise<ReviewResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/reviews/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns number OK
     * @throws ApiError
     */
    public static deleteReviewsId({
                                      id,
                                  }: {
        id: number,
    }): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/reviews/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

}
