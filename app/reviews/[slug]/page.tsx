import React from "react";
import Heading from "../../../components/Heading";
import {getReviewDetails, getReviewSlugs} from "@lib/Reviews";
import ShareLinkButton from "@components/ShareLinkButton";
import {Image} from "@node_modules/next/dist/client/image-component";


export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return await getReviewSlugs()
}

export async function generateMetadata({params}) {
    const {slug} = params
    const {title} = await getReviewDetails(slug)
    return {
        title: title,
    }
}

export default async function ReviewPage({params}) {
    const {slug} = params
    const {title, date, image, markedText, subtitle} = await getReviewDetails(slug)
    return (
        <>
            <Heading>{title}</Heading>
            <p className={"font-semibold"}>
                {subtitle}
            </p>
            <div className={"flex gap-3 py-1 items-center"}>
                <p className={"font-bold italic"}>{date}</p>
                <ShareLinkButton/>
            </div>
            <Image src={image}
                   priority
                   width={640}
                   height={360}
                   className={"rounded-2xl mb-2"}
                   alt={title}/>

            <article dangerouslySetInnerHTML={{__html: markedText}} className={"prose max-w-screen-sm"}></article>
        </>
    );
}