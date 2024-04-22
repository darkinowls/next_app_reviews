import {NextRequest, NextResponse} from "next/server";
import {getSearchReviews} from "@lib/Reviews";
import {getCommentsBySlug} from "@prisma/Database";
import {CommentData} from "@components/comment/CommentItem";
import {log} from "util";

export const GET = async (request: NextRequest) => {

    const query = request.nextUrl.searchParams.get("query")
    if (query === null || query === "" || query.length < 1) {
        return
    }
    let cs: CommentData[] = []
    try {
        cs = await getCommentsBySlug(query)
    } catch (e) {
        return NextResponse.json({error: e.message}, {status: 400})
    }
    return NextResponse.json(cs)
}