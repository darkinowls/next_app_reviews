import Link from "next/link";
import React from "react";
import Heading from "@components/Heading";


export default function ReviewsPage() {
    return (
        <>
            <Heading>Reviews</Heading>
            <p>Here the list of reviews</p>
            <nav>
                <ul className={"flex flex-col gap-4"}>
                    <li className={"bg-white border w-80 rounded-2xl shadow hover:shadow-xl"}>
                        <Link href="/reviews/hollow-knight">
                            <img src={"/images/hollow-knight.jpg"}
                                 width={320}
                                 height={180}
                                 className={"rounded-t-2xl mb-2"}
                                 alt={"Hollow knight"}/>
                            <h2 className={"text-center py-2"}>Hollow knight</h2>
                        </Link>
                    </li>

                    <li className={"bg-white border w-80 rounded-2xl shadow hover:shadow-xl"}>
                        <Link href="/reviews/stardew-valley">
                            <img src={"/images/stardew-valley.jpg"}
                                 width={320}
                                 height={180}
                                 className={"rounded-t-2xl mb-2"}
                                 alt={"Hollow knight"}/>
                            <h2 className={"text-center py-2"}>Stardew Valley</h2>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}