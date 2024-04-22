import React from 'react';
import {ChatBubbleBottomCenterTextIcon} from "@heroicons/react/16/solid";

const CommentHeader = () => {
    return (
        <div className={"flex "}>
            <ChatBubbleBottomCenterTextIcon className={"h-6 w-6"}/>
            <h2 className={"ml-2 text-xl font-semibold"}>Comments</h2>
        </div>
    );
};

export default CommentHeader;

