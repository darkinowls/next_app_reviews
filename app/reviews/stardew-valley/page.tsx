import React from "react";
import Heading from "../../../components/Heading";
import {readFile} from "fs/promises";
import {marked} from "@node_modules/marked";

export default async function StardewValleyPage() {

    const text = await readFile("./content/reviews/stardew-valley.md", "utf-8");

    const markedText = marked(text, {
        // headerIds: false,
        // mangle: false,
    });

    return (
        <>
            <Heading>Stardew Valley</Heading>
            <img src={"/images/stardew-valley.jpg"}
                 width={640}
                 height={360}
                 className={"rounded-2xl mb-2"}
                 alt={"Hollow knight"}/>
            <article dangerouslySetInnerHTML={{__html: markedText}} className={"prose max-w-screen-sm"}></article>
        </>
    );
}