import {NextRequest, NextResponse} from "next/server";
import {createComment} from "@prisma/Database";
import {revalidateTag} from "next/dist/server/web/spec-extension/revalidate-tag";


export interface PostCommentBody {
    slug: string
    user: string
    content: string
}


export const POST = async (request: NextRequest) => {
    const body: PostCommentBody = await request.json()
    try {
        await createComment(body)
    } catch (e) {
        console.log(e.message)
        return NextResponse.json({error: e.message}, {status: 400})
    }
    revalidateTag(body.slug)
    return new Response(null, {status: 201})
}