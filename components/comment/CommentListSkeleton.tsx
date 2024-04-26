import React from 'react';
import CommentItem, {CommentData} from "@components/comment/CommentItem";
import {getCommentsBySlug} from "@prisma/Database";


const CommentListSkeleton = () => {

    return (
        <ul className={"animate-pulse border rounded-t-2xl my-3"}>
            {[1, 2, 3].map(c => (
                <CommentItem key={c} commentData={{
                    id: c,
                    user: "   ",
                    content: "\n",
                }}/>
            ))}
        </ul>


    );
};


export default CommentListSkeleton;