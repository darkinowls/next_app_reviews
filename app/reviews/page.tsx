import Link from "next/link";
import React from "react";
import Heading from "@components/Heading";
import {getReviews} from "@lib/Reviews";
import {Image} from "@node_modules/next/dist/client/image-component";


export default async function ReviewsPage() {
    const reviews = await getReviews()
    return (
        <>
            <Heading>Reviews</Heading>
            <nav>
                <ul className={"flex gap-4 flex-wrap justify-center"}>

                    {
                        reviews.map((review, index) =>
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