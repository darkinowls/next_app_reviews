import Link from "next/link";
import React from "react";
import Heading from "@components/Heading";
import {getReviewsPage, getSearchReviews} from "@lib/Reviews";
import {Image} from "@node_modules/next/dist/client/image-component";
import PageBar from "@components/PageBar";
import SearchBox from "@components/SearchBox";


export default async function ReviewsPage({searchParams: {page}}) {
    const pageInt = parsePage(page)
    const rPage = await getReviewsPage(pageInt)
    // const searchReviews = await getSearchReviews() SERVER SIDE RENDERING
    console.log("Rendering reviews page")
    return (
        <>
            <Heading>Reviews</Heading>
            <div className={"flex justify-between pb-3 items-center"}>
                <PageBar pageInt={pageInt} totalPages={rPage.totalPages} href={'/reviews'}></PageBar>
                <SearchBox/>
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