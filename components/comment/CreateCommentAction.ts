'use server';

import {commentScheme, createComment, PostCommentBody} from "@prisma/Database";
import {revalidatePath} from "next/dist/server/web/spec-extension/revalidate-path";
import {redirect} from "next/dist/client/components/redirect";
import {z} from "zod";


export const createCommentAction = async (post: PostCommentBody): Promise<{ error: string } | null> => {
    const result = commentScheme.safeParse(post)
    if (!result.success) {
        return {error: result.error.message}
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