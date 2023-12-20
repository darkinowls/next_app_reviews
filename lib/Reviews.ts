import {marked} from "@node_modules/marked";
import {OpenAPI, ReviewService} from "@api";

export interface FullReview {
    title: string;
    date: string;
    image: string;
    markedText: string;
    subtitle: string;
}

export interface ShortReview {
    title: string;
    date: string;
    image: string;
    slug: string;
    subtitle?: string;
}


export const getReviewDetails = async (slug: string): Promise<FullReview> => {
    const reviews = await ReviewService.getReviews({
        filters: {slug: {$eq: slug}},
        fields: ["body", "title", "publishedAt", "subtitle"],
        populate: {image: {fields: ["url"]}},
        paginationPageSize: 1,
        paginationWithCount: false
    })
    const attributes = reviews.data[0].attributes
    return {
        title: attributes.title,
        date: attributes.publishedAt.slice(0, 'YYYY-MM-DD'.length),
        image: OpenAPI.DOMAIN + attributes.image.data.attributes.url,
        markedText: await marked(attributes.body),
        subtitle: attributes.subtitle,
    };
}

export const getReviews = async (pageSize: number = 6): Promise<ShortReview[]> => {
    const res = await ReviewService.getReviews({
        sort: "publishedAt:desc",
        paginationPageSize: pageSize,
        fields: ["title", "slug", "publishedAt", "subtitle"],
        populate: {image: {fields: ["url"]}}
    })
    const reviews = res.data

    return reviews.map((r) => ({
        title: r.attributes.title,
        date: r.attributes.publishedAt,
        image: OpenAPI.DOMAIN + r.attributes.image.data.attributes.url,
        slug: r.attributes.slug,
        subtitle: r.attributes.subtitle,
    }));
};

export const getReviewSlugs = async (): Promise<{ slug: string }[]> => {
    const res = await ReviewService.getReviews({
        fields: ["slug"],
        sort: "publishedAt:desc",
        paginationPageSize: 1000,
    })
    return res.data.map((r) => ({slug: r.attributes.slug}));
}
