import React from 'react';
import CommentItem, {CommentData} from "@components/comment/CommentItem";
import {getCommentsBySlug} from "@prisma/Database";

interface CommentListProps {
    slug: string
}

const CommentList = async (commentListProps: CommentListProps) => {

    console.log("Rendering CommentList")

    const {slug} = commentListProps

    console.log(`Fetching comments for ${slug}`)

    const cs: CommentData[] = await getCommentsBySlug(slug)


    return (
        <ul className={"border rounded-t-2xl my-3"}>
            {cs.map(c => (
                <CommentItem key={c.id} commentData={c}/>
            ))}
        </ul>
    );
};


export default CommentList;