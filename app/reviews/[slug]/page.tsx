import React from "react";
import Heading from "../../../components/Heading";
import {getReview, getReviewsSlug} from "@lib/Reviews";
import ShareLinkButton from "@components/ShareLinkButton";


export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return await getReviewsSlug()
}

export async function generateMetadata({params}) {
    const {slug} = params
    const {title} = await getReview(slug)
    return {
        title: title,
    }
}

export default async function ReviewPage({params}) {
    const {slug} = params
    const {title, date, image, markedText} = await getReview(slug)
    return (
        <>
            <Heading>{title}</Heading>
            <div className={"flex gap-3 py-1 items-center"}>
                <p className={"font-bold italic"}>{date}</p>
                <ShareLinkButton/>
            </div>
            <img src={image}
                 width={640}
                 height={360}
                 className={"rounded-2xl mb-2"}
                 alt={title}/>

            <article dangerouslySetInnerHTML={{__html: markedText}} className={"prose max-w-screen-sm"}></article>
        </>
    );
}