import {CommentData} from "@components/comment/CommentItem";
import {PostCommentBody} from "@app/api/create-comment/route";
import {PrismaClient} from "@prisma/client";


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


export const getCommentsBySlug = async (slug: string): Promise<CommentData[]> => {
    const cs: CommentData[] = await getPrisma().comment.findMany(
        {
            where: {
                reviewSlug: slug
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
    return res
}



