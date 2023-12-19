import Heading from "@components/Heading";
import Link from "@node_modules/next/link";
import React from "react";
import {getLatestReviewByDate} from "@lib/Reviews";
import {Metadata} from "@node_modules/next";

export const metadata: Metadata = {
    description: "Only the best games I reviewed for you",
    keywords: "indie, games, review",
}

export default async function HomePage() {
    const review = await getLatestReviewByDate()
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className={"pb-2"}>Only the best games I reviewed for you</p>
            <div className={"bg-white border rounded-2xl shadow w-80 hover:shadow-xl sm:w-full"}>
                <Link href={`/reviews/${review.slug}`} className={"flex flex-col sm:flex-row"}>
                    <img src={review.image}
                         width={320}
                         height={180}
                         className={"rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none"}
                         alt={review.title}/>
                    <h2 className={"text-center py-2 font-orbitron font-semibold sm:px-2"}>{review.title}</h2>
                </Link>
            </div>
        </>
    );
}