import Heading from "@components/Heading";
import Link from "@node_modules/next/link";
import React from "react";

export default function HomePage() {
    console.log("Rendered on server");
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className={"pb-2"}>Only the best games I reviewed for you</p>
            <div className={"bg-white border rounded-2xl shadow w-80 hover:shadow-xl sm:w-full"}>
                <Link href="/reviews/stardew-valley" className={"flex flex-col sm:flex-row"}>
                    <img src={"/images/stardew-valley.jpg"}
                         width={320}
                         height={180}
                         className={"rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none"}
                         alt={"Hollow knight"}/>
                    <h2 className={"text-center py-2 font-orbitron font-semibold sm:px-2"}>Stardew Valley</h2>
                </Link>
            </div>
        </>
    );
}