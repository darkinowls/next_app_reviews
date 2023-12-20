'use client';
import React, {useState} from 'react';
import {LinkIcon} from "@heroicons/react/20/solid";

const ShareLinkButton = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = (_: React.MouseEvent) => {
        navigator.clipboard.writeText(location.href)
        setClicked(true)
        setTimeout(() => setClicked(false), 1000)
    }

    return (
        <button
            onClick={handleClick}
            className={"border px-2 py-1 rounded " +
                "text-slate-500 text-sm gap-1 " +
                "hover:bg-orange-100 hover:text-slate-700 " +
                "flex items-center"}>
            <LinkIcon className={"h-4 w-4"}/>
            {clicked ? "Copied" : "Copy link"}
        </button>
    );
};

export default ShareLinkButton;