import React from 'react';
import Heading from "../../components/Heading";
import {Metadata} from "@node_modules/next";

export const metadata: Metadata = {
    title: "About",
}

const AboutPage = () => {
    return (
        <div>
            <Heading>About</Heading>
            <p>
                AAAAAAAAAAAAa
            </p>
        </div>
    );
};

export default AboutPage;