import React from 'react';
import {UserCircleIcon} from "@heroicons/react/16/solid";


export interface CommentData {
    id: number,
    user: string,
    content: string
}

interface CommentProps {
    commentData: CommentData

}

const CommentItem = (commentProps: CommentProps) => {

    const {commentData} = commentProps
    return (
        <li className={"border p-2  odd:bg-orange-100"}>
            <div className={"flex text-slate-500 items-center gap-2 pb-2"}>
                <UserCircleIcon className={"h-6 w-6"}/>
                <h3 className={"text-lg"}>{commentData.user}</h3></div>
            <p className={"italic"}>{commentData.content}</p>
        </li>
    );

};

export default CommentItem;