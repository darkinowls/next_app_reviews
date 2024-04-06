import Link from "next/link";
import React from "react";
import Heading from "@components/Heading";
import {getReviewsPage} from "@lib/Reviews";
import {Image} from "@node_modules/next/dist/client/image-component";

export default async function ReviewsPage({searchParams: {page}}) {
    const pageInt = parsePage(page)
    const rPage = await getReviewsPage(pageInt)
    console.log("Rendering reviews page")
    return (
        <>
            <Heading>Reviews</Heading>
            <div className={"flex gap-2 pb-3"}>
                {pageInt !== 1 && <Link href={`/reviews?page=${pageInt - 1}`}>&lt;</Link>}
                <span>Page {pageInt} of {rPage.totalPages}</span>
                {rPage.totalPages > pageInt && <Link href={`/reviews?page=${pageInt + 1}`}>&gt;</Link>}
            </div>
            <nav>
                <ul className={"flex gap-4 flex-wrap justify-center"}>

                    {
                        rPage.reviews.map((review, index) =>
                            (
                                <li key={review.slug}
                                    className={"bg-white border w-80 rounded-2xl shadow hover:shadow-xl"}>
                                    <Link href={`/reviews/${review.slug}`}>
                                        <Image src={review.image}
                                               priority={index === 0}
                                               width={320}
                                               height={180}
                                               className={"rounded-t-2xl mb-2"}
                                               alt={review.title}/>
                                        <h2 className={"text-center py-2 font-orbitron font-semibold"}>{review.title}</h2>
                                    </Link>
                                </li>
                            )
                        )
                    }


                </ul>
            </nav>
        </>
    );
}

const parsePage = (page: string): number => {
    const pageInt = parseInt(page)
    if (isNaN(pageInt) || pageInt < 1) {
        return 1
    }
    return pageInt
}