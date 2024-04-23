'use server';

import {createComment, PostCommentBody} from "@prisma/Database";
import {revalidatePath} from "next/dist/server/web/spec-extension/revalidate-path";
import {redirect} from "next/dist/client/components/redirect";


export const createCommentAction = async (post: PostCommentBody): Promise<{ error: string } | null> => {
    if (!post.user || post.content.length < 5) {
        return {error: "Please fill in all the fields"}
    }
    await createComment({
        user: post.user,
        content: post.content,
        slug: post.slug
    })

    const path = `/reviews/${post.slug}`
    revalidatePath(path)
    redirect(path)
}