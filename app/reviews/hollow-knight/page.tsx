import React from 'react';
import Heading from "../../../components/Heading";

const HollowKnightPage = () => {
    return (
        <div>
            <Heading> Hollow knight</Heading>
            <img src={"/images/hollow-knight.jpg"}
                 width={640}
                 height={360}
                 className={"rounded-2xl mb-2"}
                 alt={"Hollow knight"}/>
        </div>
    );
};

export default HollowKnightPage;