import {NextRequest, NextResponse} from "next/server";
import {getSearchReviews} from "@lib/reviews";

export const GET = async (request: NextRequest) => {
    const query = request.nextUrl.searchParams.get("query")
    if (query === null || query === "" || query.length < 1 ){
        return
    }
    const reviews = await getSearchReviews(query)
    return NextResponse.json(reviews)
}