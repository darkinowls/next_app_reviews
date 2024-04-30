'use server';

import {revalidatePath} from "next/dist/server/web/spec-extension/revalidate-path";
import {redirect} from "next/dist/client/components/redirect";
import {commentScheme, createComment, PostCommentBody} from "@prisma/Comments";
import {UserTokenPayload, verifyUserToken} from "@lib/auth";


export const createCommentAction = async (post: { content: string, slug: string }): Promise<{
    error: string
} | null> => {
    const result = commentScheme.safeParse(post)
    if (!result.success) {
        return {error: result.error.message}
    }

    const user: UserTokenPayload = await verifyUserToken()

    if (!user) {
        redirect('/sign-in')
    }

    console.log('Create comment action', user)

    await createComment({
        userId: user.id,
        content: post.content,
        slug: post.slug
    })

    const path = `/reviews/${post.slug}`
    revalidatePath(path)
    redirect(path)
}