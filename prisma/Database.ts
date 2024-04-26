import {CommentData} from "@components/comment/CommentItem";
import {revalidateTag} from "@node_modules/next/dist/server/web/spec-extension/revalidate-tag";
import { PrismaClient } from "@prisma/client";
import {z} from "zod";


const getPrisma = (): PrismaClient => {
    if (globalThis.prisma) {
        return globalThis.prisma
    }
    globalThis.prisma = new PrismaClient(
        {
            log: [
                {
                    emit: 'stdout',
                    level: 'query',
                },
            ],
        }
    )
    return globalThis.prisma
}

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
                user: true,
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
    const res = await getPrisma().comment.create({
        data: {
            user: body.user,
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



