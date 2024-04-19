import React from 'react';
import Heading from "../../components/Heading";
import {Metadata} from "@node_modules/next";
import Link from "@node_modules/next/link";

export const metadata: Metadata = {
    title: "About",
}

const AboutPage = () => {
    return (
        <div className={"flex flex-col flex-grow"}>
            <Heading>About</Heading>
            <div className={"flex flex-col flex-grow justify-center"}>
                <div className={"flex text-xl justify-center"}>
                    <div className={"mr-2"}> Made by</div>
                    <Link className={"bg-teal-700 accent-teal-700"} href={"https://chernousov.vercel.app/"}>Chernousov
                        Denis</Link>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;