import React from 'react';
import CommentItem, {CommentData} from "@components/comment/CommentItem";
import {getCommentsBySlug} from "@prisma/Database";

interface CommentListProps {
    slug: string
}

const CommentList = async (commentListProps: CommentListProps) => {

    const {slug} = commentListProps

    console.log(`Fetching comments for ${slug}`)

    // const res = await fetch(
    //     `/api/get-comments?query=${encodeURIComponent(slug)}` ,
    //     {
    //         method: 'GET',
    //         next: {
    //             tags: [slug]
    //         }
    //     }
    // )
    // const cs: CommentData[] = await res.json()

    const cs: CommentData[] = await getCommentsBySlug(slug)


    return (
        <ul className={"border rounded my-3"}>
            {cs.map(c => (
                <CommentItem key={c.id} commentData={c}/>
            ))}
        </ul>
    );
};


export default CommentList;