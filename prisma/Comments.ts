import {z} from "zod";
import {CommentData} from "@components/comment/CommentItem";
import {revalidateTag} from "next/dist/server/web/spec-extension/revalidate-tag";
import getPrisma from "@prisma/Database";

export const commentScheme = z.object({
    user: z.string().min(3),
    content: z.string().min(5)
})

export const getCommentsBySlug = async (slug: string): Promise<CommentData[]> => {

    // await new Promise((resolve) => setTimeout(resolve, 3000))

    const cs: CommentData[] = await getPrisma().comment.findMany(
        {
            where: {
                reviewSlug: slug
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                user: {
                    select: {
                        email: true,
                    },
                },
                content: true
            }
        }
    )
    return cs
}

export interface PostCommentBody {
    user: string
    content: string
    slug: string
}

export const createComment = async (body: PostCommentBody): Promise<{ id: number }> => {

    const userId = await getPrisma().user.findUnique({
        where: {
            email: body.user
        },
        select: {
            id: true
        }
    })

    const res = await getPrisma().comment.create({
        data: {
            user: {
                connect: {
                    id: userId.id
                }
            },
            content: body.content,
            reviewSlug: body.slug,
        },
        select: {
            id: true,
        }
    })
    revalidateTag("reviews")
    return res
}



