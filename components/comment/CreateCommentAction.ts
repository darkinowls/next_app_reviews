'use server';

import {createComment} from "@prisma/Database";
import {revalidatePath} from "next/dist/server/web/spec-extension/revalidate-path";
import {redirect} from "next/dist/client/components/redirect";

export const createCommentAction = async (formData: FormData, slug: string) : Promise<{error: string} | null> => {
    console.log(formData)
    const user = formData.get('user')
    const content = formData.get('content')
    if (!user || !content) {
        return {error: "Please fill in all the fields"}
    }
    await createComment({
        user: user as string,
        content: content as string,
        slug: slug
    })

    const path = `/reviews/${slug}`
    revalidatePath(path)
    redirect(path)
}