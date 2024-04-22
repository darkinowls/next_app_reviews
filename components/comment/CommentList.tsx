import React from 'react';
import {UserCircleIcon} from "@heroicons/react/16/solid";

interface CommentData {
    id: number,
    name: string,
    comment: string
}

interface CommentProps {
    commentData: CommentData

}

const cs: CommentData[] = [
    {id: 1, name: 'John', comment: 'This is a comment'},
    {id: 2, name: 'Jane', comment: 'This is a comment'},
    {id: 3, name: 'Doe', comment: 'This is a comment'},
]

///////////////////////////////////////////////////////////

const CommentList = () => {
    return (
        <ul className={"border rounded my-3"}>
            {cs.map(c => (
                <Comment key={c.id} commentData={c}/>
            ))}
        </ul>
    );
};


const Comment = (commentProps: CommentProps) => {
    const {commentData} = commentProps
    return (
        <li className={"border p-2  odd:bg-orange-100"}>
            <div className={"flex text-slate-500 items-center gap-2 pb-2"}>
                <UserCircleIcon className={"h-6 w-6"}/>
                <h3 className={"text-lg"}>{commentData.name}</h3></div>
            <p className={"italic"}>{commentData.id}</p>
        </li>
    );
}

export default CommentList;