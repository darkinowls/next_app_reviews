import React from "react";
import Heading from "../../../components/Heading";

export default function StardewValleyPage() {
    return (
        <>
            <Heading>Stardew Valley</Heading>
            <img src={"/images/stardew-valley.jpg"}
                 width={640}
                 height={360}
                 className={"rounded-2xl mb-2"}
                 alt={"Hollow knight"}/>
            <p>[sadsa]</p>
        </>
    );
}