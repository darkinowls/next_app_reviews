import {readdir, readFile} from "fs/promises";
import matter from "@node_modules/gray-matter";
import {marked} from "@node_modules/marked";
import {OpenAPI, ReviewService} from "@api";

export interface FullReview {
    title: string;
    date: string;
    image: string;
    markedText: string;
}


export const getReview = async (slug: string): Promise<FullReview> => {


    const review = await ReviewService.getReviews({
        fields: ["slug"],
        populate: {image: {fields: ["url"]}},
    })

    const {attributes} = review.data[0]
    console.log(attributes.body)
    return {
        title: attributes.title,
        date: attributes.publishedAt,
        image: OpenAPI.DOMAIN + attributes.image.data.attributes.url,
        markedText: ""
    };
}


export interface ShortReview {
    title: string;
    date: string;
    image: string;
    slug: string;
}

export const getReviews = async (): Promise<ShortReview[]> => {
    const res = await ReviewService.getReviews({
        sort: "publishedAt:desc",
        // paginationPageSize: 5,
        fields: ["title", "slug", "publishedAt"],
        populate: {image: {fields: ["url"]}}
    })
    const reviews = res.data

    return reviews.map((r) => ({
        title: r.attributes.title,
        date: r.attributes.publishedAt,
        image: OpenAPI.DOMAIN + r.attributes.image.data.attributes.url,
        slug: r.attributes.slug
    }));
};

export const getReviewsSlug = async (): Promise<{ slug: string }[]> => {
    const res = await ReviewService.getReviews({
        fields: ["slug"],
    })
    return res.data.map((r) => ({slug: r.attributes.slug}));
}


export const getLatestReviewByDate = async (): Promise<ShortReview> => {
    const res = await ReviewService.getReviews({
        sort: "publishedAt:desc",
        paginationPageSize: 1,
        fields: ["title", "slug", "publishedAt"],
        populate: {image: {fields: ["url"]}}
    })
    return {
        image: OpenAPI.DOMAIN + res.data[0].attributes.image.data.attributes.url,
        title: res.data[0].attributes.title,
        date: res.data[0].attributes.publishedAt,
        slug: res.data[0].attributes.slug
    }
}