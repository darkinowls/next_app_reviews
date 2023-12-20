import Heading from "@components/Heading";
import Link from "@node_modules/next/link";
import React from "react";
import {getReviews} from "@lib/Reviews";
import {Metadata} from "@node_modules/next";
import {Image} from "@node_modules/next/dist/client/image-component";

export const metadata: Metadata = {
    description: "Only the best games I reviewed for you",
    keywords: "indie, games, review",
}

export default async function HomePage() {
    const reviews = await getReviews(3)
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className={"pb-2"}>Only the best games I reviewed for you</p>
            <ul className={"mt-3 gap-3 flex flex-col"}>
                {reviews.map((review, index) => (
                    <li key={review.slug}
                        className={"bg-white border rounded-2xl shadow w-80 hover:shadow-xl mx-auto sm:w-full"}>
                        <Link href={`/reviews/${review.slug}`} className={"flex flex-col sm:flex-row"}>
                            <Image src={review.image}
                                   priority={index === 0}
                                   width={320}
                                   height={180}
                                   className={"rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none"}
                                   alt={review.title}/>
                            <div className={"px-2 py-1 text-center sm:text-left"} >
                                <h2 className={"font-orbitron font-semibold"}>{review.title}</h2>
                                <p className={"hidden pt-2 sm:block"}>
                                    {review.subtitle}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>


        </>
    );
}