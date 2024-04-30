import React from 'react';
import CommentItem from "@components/comment/CommentItem";


const CommentListSkeleton = () => {

    return (
        <ul className={"animate-pulse border rounded-t-2xl my-3"}>
            {[1, 2, 3].map(c => (
                <CommentItem key={c} commentData={{
                    id: c,
                    user: {name: "loading..."},
                    content: "\n",
                }}/>
            ))}
        </ul>


    );
};


export default CommentListSkeleton;