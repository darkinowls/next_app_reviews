import React from 'react';
import {ArrowPathIcon} from "@heroicons/react/16/solid";

const Loading = () => {
    return (
        <div className={"flex flex-col flex-grow justify-center items-center py-6"}>
            <ArrowPathIcon className={"text-orange-800 h-8 w-8 animate-spin"}/>
        </div>
    );
};

export default Loading;