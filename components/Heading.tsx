import React from 'react';
import {orbitron} from "@fonts";

const Heading = ({children}) => {
    return (
        <h1 className={`font-bold text-2xl pb-2 font-orbitron`}>{children}</h1>
    );
};

export default Heading;