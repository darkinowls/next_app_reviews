import React, {Suspense} from "react";
import Heading from "../../../components/Heading";
import {FullReview, getReviewDetails, getReviewSlugs} from "@lib/reviews";
import ShareLinkButton from "@components/ShareLinkButton";
import {Image} from "@node_modules/next/dist/client/image-component";
import {notFound} from 'next/navigation'
import CommentList from "@components/comment/CommentList";
import CommentHeader from "@components/comment/CommentHeader";
import CommentForm from "@components/comment/CommentForm";
import CommentListSkeleton from "@components/comment/CommentListSkeleton";
import {cookies} from "next/headers";
import NavLink from "@components/NavLink";


export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return await getReviewSlugs()
}

export async function generateMetadata({params}) {
    const {slug} = params
    const review: FullReview | null = await getReviewDetails(slug)
    if (review === null) {
        notFound()
    }
    return {
        title: review.title,
    }
}

export default async function ReviewPage({params}) {

    // await new Promise((r) => setTimeout(r, 3000))

    const {slug} = params
    const review: FullReview | null = await getReviewDetails(slug)
    if (review === null) {
        notFound()
    }

    const hasToken = !!(cookies().get('token') || null)


    const {title, date, image, markedText, subtitle} = review
    console.log(`Rendering review ${title}`)
    return (
        <>
            <section className={"flex flex-col lg:items-center"}>
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
            </section>
            <section className={"mt-3 pt-3 border-t border-dashed"}>
                <div className={"flex flex-col"}>
                    <CommentHeader/>

                    {

                        hasToken ?

                            <CommentForm
                                searchReview={{slug: slug, title: review.title}}
                            />

                            :
                            <div className={"flex flex-grow justify-center text-lg bg-white rounded my-2"}>
                                <NavLink href={"/sign-in"}>
                                    Please log in to comment
                                </NavLink>
                            </div>
                    }
                    <Suspense fallback={<CommentListSkeleton/>}>
                        <CommentList slug={slug}/>
                    </Suspense>

                </div>
            </section>
        </>
    );
}




