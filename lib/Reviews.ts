import {readdir, readFile} from "fs/promises";
import matter from "@node_modules/gray-matter";
import {marked} from "@node_modules/marked";

export interface FullReview {
    title: string;
    date: string;
    image: string;
    markedText: string;
}


export const getReview = async (slug: string): Promise<FullReview> => {
    const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
    const {content, data: {title, date, image}} = matter(text);
    const markedText = await marked(content, {});
    return {title, date, image, markedText};
}


export interface ShortReview {
    title: string;
    date: string;
    image: string;
    slug: string;
}

export const getReviews = async function* (): AsyncGenerator<ShortReview> {
    const files = await readdir('./content/reviews', 'utf-8');

    for (const file of files) {
        const text = await readFile(`./content/reviews/${file}`, 'utf-8');
        const {data: {title, date, image}} = matter(text);
        yield {title, date, image, slug: file.replace('.md', '')};
    }
};

export const getReviewsSlug = async (): Promise<{ slug: string }[]> => {
    const files = await readdir('./content/reviews', 'utf-8');
    return files.map(file => ({
        slug: file.replace('.md', '')
    }));
}


export const getLatestReviewByDate = async (): Promise<ShortReview> => {

    const files = await readdir('./content/reviews', 'utf-8');
    const latestFile = files.reduce((acc, curr) => {
        const currDate = new Date(curr.replace('.md', ''));
        const accDate = new Date(acc.replace('.md', ''));
        return currDate > accDate ? curr : acc;
    });
    const text = await readFile(`./content/reviews/${latestFile}`, 'utf-8');
    const {data: {title, date, image}} = matter(text);
    return {title, date, image, slug: latestFile.replace('.md', '')};
}